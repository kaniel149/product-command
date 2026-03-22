import type { AssetFeedback, AssetStatus } from '../../../types'

const statusColors: Record<AssetStatus, { bg: string; text: string; dot: string }> = {
  draft: { bg: 'bg-zinc-500/20', text: 'text-zinc-400', dot: 'bg-zinc-400' },
  review: { bg: 'bg-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-400' },
  live: { bg: 'bg-green-500/20', text: 'text-green-400', dot: 'bg-green-400' },
  paused: { bg: 'bg-orange-500/20', text: 'text-orange-400', dot: 'bg-orange-400' },
  killed: { bg: 'bg-red-500/20', text: 'text-red-400', dot: 'bg-red-400' },
}

interface FeedbackPanelProps {
  feedback?: AssetFeedback
  onStatusChange?: (status: AssetStatus) => void
}

export function FeedbackPanel({ feedback, onStatusChange }: FeedbackPanelProps) {
  const status = feedback?.status ?? 'draft'
  const m = feedback?.metrics

  return (
    <div className="space-y-4">
      {/* Status selector */}
      <div>
        <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Status</h4>
        <div className="flex gap-1.5 flex-wrap">
          {(Object.keys(statusColors) as AssetStatus[]).map((s) => {
            const c = statusColors[s]
            const isActive = s === status
            return (
              <button
                key={s}
                onClick={() => onStatusChange?.(s)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive ? `${c.bg} ${c.text} ring-1 ring-current` : 'bg-hover text-text-muted hover:text-text-secondary'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? c.dot : 'bg-zinc-600'}`} />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Metrics grid */}
      {m && (
        <div>
          <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Metrics</h4>
          <div className="grid grid-cols-2 gap-2">
            {m.impressions !== undefined && (
              <MetricCard label="Impressions" value={m.impressions.toLocaleString()} />
            )}
            {m.clicks !== undefined && (
              <MetricCard label="Clicks" value={m.clicks.toLocaleString()} />
            )}
            {m.ctr !== undefined && (
              <MetricCard label="CTR" value={`${m.ctr.toFixed(1)}%`} good={m.ctr > 2} />
            )}
            {m.conversions !== undefined && (
              <MetricCard label="Conversions" value={m.conversions.toLocaleString()} />
            )}
            {m.cr !== undefined && (
              <MetricCard label="Conv. Rate" value={`${m.cr.toFixed(1)}%`} good={m.cr > 5} />
            )}
            {m.spend !== undefined && (
              <MetricCard label="Spend" value={`$${m.spend.toLocaleString()}`} />
            )}
            {m.cac !== undefined && (
              <MetricCard label="CAC" value={`$${m.cac.toFixed(0)}`} good={m.cac < 150} />
            )}
          </div>
          {m.lastUpdated && (
            <div className="text-[10px] text-text-muted mt-2">Last updated: {m.lastUpdated}</div>
          )}
        </div>
      )}

      {/* Notes */}
      {feedback?.notes && feedback.notes.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Notes</h4>
          <div className="space-y-2">
            {feedback.notes.map((note, i) => (
              <div key={i} className="text-xs text-text-secondary bg-hover rounded-md px-3 py-2">
                {note}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No metrics yet */}
      {!m && (
        <div className="text-xs text-text-muted bg-hover rounded-md px-3 py-4 text-center">
          No metrics yet. Set status to "live" and add real data.
        </div>
      )}
    </div>
  )
}

function MetricCard({ label, value, good }: { label: string; value: string; good?: boolean }) {
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2">
      <div className="text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
      <div className={`text-sm font-mono font-semibold mt-0.5 ${good === true ? 'text-green-400' : good === false ? 'text-red-400' : 'text-text-primary'}`}>
        {value}
      </div>
    </div>
  )
}
