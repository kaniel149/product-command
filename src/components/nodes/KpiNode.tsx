import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { KpiData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'

export function KpiNode({ id, data }: NodeProps) {
  const d = data as unknown as KpiData
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)

  return (
    <div className="bg-card border border-border rounded-lg px-4 py-2 min-w-[120px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      {editingField === 'label' ? (
        <input
          autoFocus
          defaultValue={d.label}
          className="text-[10px] text-text-muted uppercase tracking-wider bg-transparent border-b border-accent outline-none w-full"
          onBlur={(e) => saveEdit('label', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit('label', (e.target as HTMLInputElement).value)
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-[10px] text-text-muted uppercase tracking-wider cursor-text"
          onDoubleClick={() => startEdit('label')}
        >
          {d.label}
        </div>
      )}
      {editingField === 'value' ? (
        <input
          autoFocus
          defaultValue={d.value}
          className="text-lg font-mono font-bold text-text-primary bg-transparent border-b border-accent outline-none w-full"
          onBlur={(e) => saveEdit('value', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit('value', (e.target as HTMLInputElement).value)
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-lg font-mono font-bold text-text-primary cursor-text"
          onDoubleClick={() => startEdit('value')}
        >
          {d.value}
          {d.trend === 'up' && <span className="text-status-green text-xs ml-1">↑</span>}
          {d.trend === 'down' && <span className="text-status-red text-xs ml-1">↓</span>}
        </div>
      )}
      {d.target && <div className="text-[10px] text-text-muted">Target: {d.target}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
