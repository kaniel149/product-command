import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { DecisionData } from '../../types'

export function DecisionNode({ data }: NodeProps) {
  const d = data as unknown as DecisionData
  return (
    <div className="bg-card border border-status-yellow/40 rounded-lg px-4 py-3 min-w-[160px] relative">
      <Handle type="target" position={Position.Left} className="!bg-status-yellow !w-2 !h-2" />
      <div className="text-xs text-status-yellow mb-1">Decision</div>
      <div className="text-sm font-medium text-text-primary">{d.question}</div>
      <Handle type="source" position={Position.Right} id="yes" style={{ top: '30%' }} className="!bg-status-green !w-2 !h-2" />
      <Handle type="source" position={Position.Right} id="no" style={{ top: '70%' }} className="!bg-status-red !w-2 !h-2" />
      <div className="absolute right-[-40px] top-[22%] text-[10px] text-status-green">{d.yesLabel ?? 'Yes'}</div>
      <div className="absolute right-[-32px] top-[62%] text-[10px] text-status-red">{d.noLabel ?? 'No'}</div>
    </div>
  )
}
