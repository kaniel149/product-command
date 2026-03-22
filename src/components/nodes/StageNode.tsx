import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { StageData } from '../../types'

export function StageNode({ data }: NodeProps) {
  const d = data as unknown as StageData
  return (
    <div className="bg-surface border border-border rounded-lg px-5 py-3 min-w-[160px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{d.funnelStage ?? 'Stage'}</div>
      <div className="text-sm font-semibold text-text-primary">{d.label}</div>
      {d.description && <div className="text-xs text-text-secondary mt-1">{d.description}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
