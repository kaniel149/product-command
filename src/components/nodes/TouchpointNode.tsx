import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { AssetData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'
import { usePanelStore } from '../../stores/panelStore'

export function TouchpointNode({ id, data }: NodeProps) {
  const d = data as unknown as AssetData & { label: string }
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)
  const openPreview = usePanelStore((s) => s.openPreview)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden min-w-[200px] group">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      {d.screenshotUrl && (
        <div className="h-24 overflow-hidden border-b border-border">
          <img src={d.screenshotUrl} alt="" className="w-full h-full object-cover object-top" />
        </div>
      )}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">
            {d.type === 'page' ? '🌐' : d.type === 'email' ? '📧' : d.type === 'ad' ? '📣' : d.type === 'whatsapp' ? '💬' : '📋'}
          </span>
          {editingField === 'label' ? (
            <input
              autoFocus
              defaultValue={d.label}
              className="text-sm font-medium text-text-primary bg-transparent border-b border-accent outline-none w-full"
              onBlur={(e) => saveEdit('label', e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveEdit('label', (e.target as HTMLInputElement).value)
                if (e.key === 'Escape') cancelEdit()
              }}
            />
          ) : (
            <span
              className="text-sm font-medium text-text-primary cursor-text"
              onDoubleClick={() => startEdit('label')}
            >
              {d.label}
            </span>
          )}
        </div>
        {d.url && (
          <div className="text-xs text-text-muted mt-1 truncate">{d.url}</div>
        )}
        <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded"
            onClick={() => openPreview({ ...d, nodeId: id })}
          >
            Preview
          </button>
          <button className="text-[10px] px-2 py-0.5 bg-hover text-text-secondary rounded">Stitch</button>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
