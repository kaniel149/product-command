import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { PersonaData } from '../../types'

export function PersonaNode({ data }: NodeProps) {
  const d = data as unknown as PersonaData
  return (
    <div className="bg-card border-2 rounded-lg px-4 py-3 min-w-[180px] max-w-[240px]" style={{ borderColor: d.color }}>
      <Handle type="target" position={Position.Left} className="!w-2 !h-2" style={{ background: d.color }} />
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
        <div className="text-sm font-semibold text-text-primary">{d.name}</div>
      </div>
      <div className="text-xs text-text-secondary mb-2">{d.demographics}</div>
      <div className="flex flex-wrap gap-1">
        {d.channels.map((ch) => (
          <span key={ch} className="text-[10px] px-1.5 py-0.5 bg-hover rounded text-text-muted">{ch}</span>
        ))}
      </div>
      <Handle type="source" position={Position.Right} className="!w-2 !h-2" style={{ background: d.color }} />
    </div>
  )
}
