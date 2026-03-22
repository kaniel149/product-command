import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { MessageData } from '../../types'

export function MessageNode({ data }: NodeProps) {
  const d = data as unknown as MessageData
  return (
    <div className="bg-card border border-accent/30 rounded-lg px-4 py-3 min-w-[180px] max-w-[260px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-[10px] text-accent uppercase tracking-wider mb-1">
        {d.language} {d.variant && `· ${d.variant}`}
      </div>
      <div className="text-sm text-text-primary leading-relaxed">"{d.content}"</div>
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
