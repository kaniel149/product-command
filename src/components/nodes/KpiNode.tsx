import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { KpiData } from '../../types'

export function KpiNode({ data }: NodeProps) {
  const d = data as unknown as KpiData
  return (
    <div className="bg-card border border-border rounded-lg px-4 py-2 min-w-[120px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-[10px] text-text-muted uppercase tracking-wider">{d.label}</div>
      <div className="text-lg font-mono font-bold text-text-primary">
        {d.value}
        {d.trend === 'up' && <span className="text-status-green text-xs ml-1">↑</span>}
        {d.trend === 'down' && <span className="text-status-red text-xs ml-1">↓</span>}
      </div>
      {d.target && <div className="text-[10px] text-text-muted">Target: {d.target}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
