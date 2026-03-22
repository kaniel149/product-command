import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { MessageData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'

export function MessageNode({ id, data }: NodeProps) {
  const d = data as unknown as MessageData
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)

  return (
    <div className="bg-card border border-accent/30 rounded-lg px-4 py-3 min-w-[180px] max-w-[260px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-[10px] text-accent uppercase tracking-wider mb-1">
        {d.language} {d.variant && `· ${d.variant}`}
      </div>
      {editingField === 'content' ? (
        <textarea
          autoFocus
          defaultValue={d.content}
          className="text-sm text-text-primary leading-relaxed bg-transparent border-b border-accent outline-none w-full resize-none"
          rows={3}
          onBlur={(e) => saveEdit('content', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-sm text-text-primary leading-relaxed cursor-text"
          onDoubleClick={() => startEdit('content')}
        >
          "{d.content}"
        </div>
      )}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
