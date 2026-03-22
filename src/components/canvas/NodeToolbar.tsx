import { useCanvasStore } from '../../stores/canvasStore'
import { useAppStore } from '../../stores/appStore'
import type { NodeType } from '../../types'

const NODE_OPTIONS: { type: NodeType; icon: string; label: string }[] = [
  { type: 'stage', icon: '◼️', label: 'Stage' },
  { type: 'touchpoint', icon: '🌐', label: 'Touchpoint' },
  { type: 'persona', icon: '👤', label: 'Persona' },
  { type: 'message', icon: '💬', label: 'Message' },
  { type: 'decision', icon: '⚡', label: 'Decision' },
  { type: 'kpi', icon: '📊', label: 'KPI' },
]

const DEFAULT_DATA: Record<NodeType, Record<string, unknown>> = {
  stage: { label: 'New Stage', funnelStage: 'Stage' },
  touchpoint: { label: 'New Touchpoint', type: 'page' },
  persona: { name: 'New Persona', demographics: 'Edit demographics...', painPoints: [], channels: [], color: '#8b5cf6' },
  message: { content: 'Edit message...', language: 'EN' },
  decision: { question: 'New Decision?', yesLabel: 'Yes', noLabel: 'No' },
  kpi: { label: 'Metric', value: '0%' },
}

export function NodeToolbar() {
  const addNode = useCanvasStore((s) => s.addNode)
  const activeBoard = useAppStore((s) => s.activeBoard)

  const handleAdd = (type: NodeType) => {
    const id = `${type}-${Date.now()}`
    addNode(activeBoard, {
      id,
      type,
      position: { x: 200 + Math.random() * 400, y: 100 + Math.random() * 300 },
      data: DEFAULT_DATA[type],
    })
  }

  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex gap-1 bg-card border border-border rounded-lg px-2 py-1.5 shadow-lg">
      {NODE_OPTIONS.map((opt) => (
        <button
          key={opt.type}
          onClick={() => handleAdd(opt.type)}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-secondary hover:text-text-primary hover:bg-hover rounded transition-colors"
          title={opt.label}
        >
          <span>{opt.icon}</span>
          <span className="hidden md:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
