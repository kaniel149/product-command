import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { PersonaData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'

export function PersonaNode({ id, data }: NodeProps) {
  const d = data as unknown as PersonaData
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)

  return (
    <div className="bg-card border-2 rounded-lg px-4 py-3 min-w-[180px] max-w-[240px]" style={{ borderColor: d.color }}>
      <Handle type="target" position={Position.Left} className="!w-2 !h-2" style={{ background: d.color }} />
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
        {editingField === 'name' ? (
          <input
            autoFocus
            defaultValue={d.name}
            className="text-sm font-semibold text-text-primary bg-transparent border-b border-accent outline-none w-full"
            onBlur={(e) => saveEdit('name', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') saveEdit('name', (e.target as HTMLInputElement).value)
              if (e.key === 'Escape') cancelEdit()
            }}
          />
        ) : (
          <div
            className="text-sm font-semibold text-text-primary cursor-text"
            onDoubleClick={() => startEdit('name')}
          >
            {d.name}
          </div>
        )}
      </div>
      {editingField === 'demographics' ? (
        <input
          autoFocus
          defaultValue={d.demographics}
          className="text-xs text-text-secondary bg-transparent border-b border-accent outline-none w-full mb-2"
          onBlur={(e) => saveEdit('demographics', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit('demographics', (e.target as HTMLInputElement).value)
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-xs text-text-secondary mb-2 cursor-text"
          onDoubleClick={() => startEdit('demographics')}
        >
          {d.demographics}
        </div>
      )}
      <div className="flex flex-wrap gap-1">
        {d.channels.map((ch) => (
          <span key={ch} className="text-[10px] px-1.5 py-0.5 bg-hover rounded text-text-muted">{ch}</span>
        ))}
      </div>
      <Handle type="source" position={Position.Right} className="!w-2 !h-2" style={{ background: d.color }} />
    </div>
  )
}
