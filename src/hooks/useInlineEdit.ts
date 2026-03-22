import { useState, useCallback } from 'react'
import { useCanvasStore } from '../stores/canvasStore'
import { useAppStore } from '../stores/appStore'

export function useInlineEdit(nodeId: string) {
  const [editingField, setEditingField] = useState<string | null>(null)
  const updateNodeData = useCanvasStore((s) => s.updateNodeData)
  const activeBoard = useAppStore((s) => s.activeBoard)

  const startEdit = useCallback((field: string) => {
    setEditingField(field)
  }, [])

  const saveEdit = useCallback(
    (field: string, value: string) => {
      updateNodeData(activeBoard, nodeId, { [field]: value })
      setEditingField(null)
    },
    [activeBoard, nodeId, updateNodeData]
  )

  const cancelEdit = useCallback(() => {
    setEditingField(null)
  }, [])

  return { editingField, startEdit, saveEdit, cancelEdit }
}
