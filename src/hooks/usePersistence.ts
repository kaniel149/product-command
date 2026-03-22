import { useEffect, useRef } from 'react'
import { useCanvasStore } from '../stores/canvasStore'
import { supabase } from '../lib/supabase'

export function usePersistence(boardId: string) {
  const nodes = useCanvasStore((s) => s.getNodes(boardId))
  const edges = useCanvasStore((s) => s.getEdges(boardId))
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (!supabase) return // Skip persistence in dev mode

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(async () => {
      await supabase.from('boards').update({
        viewport_state: { nodes, edges, savedAt: new Date().toISOString() },
      }).eq('id', boardId)
    }, 2000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [nodes, edges, boardId])
}
