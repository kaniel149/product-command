import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { StageData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'

export function StageNode({ id, data }: NodeProps) {
  const d = data as unknown as StageData
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)

  return (
    <div className="bg-surface border border-border rounded-lg px-5 py-3 min-w-[160px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{d.funnelStage ?? 'Stage'}</div>
      {editingField === 'label' ? (
        <input
          autoFocus
          defaultValue={d.label}
          className="text-sm font-semibold text-text-primary bg-transparent border-b border-accent outline-none w-full"
          onBlur={(e) => saveEdit('label', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit('label', (e.target as HTMLInputElement).value)
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-sm font-semibold text-text-primary cursor-text"
          onDoubleClick={() => startEdit('label')}
        >
          {d.label}
        </div>
      )}
      {d.description && <div className="text-xs text-text-secondary mt-1">{d.description}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
