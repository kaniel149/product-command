import type { LeadMagnetContent } from '../../../types'

const formatIcons: Record<string, string> = {
  pdf: '📄',
  calculator: '🧮',
  audit: '🔍',
  checklist: '✅',
  webinar: '🎥',
}

export function LeadMagnetPreview({ lm }: { lm: LeadMagnetContent }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 font-medium">
          Lead Magnet · {lm.format.toUpperCase()}
        </span>
      </div>

      <div className="rounded-xl border border-zinc-700 bg-white overflow-hidden shadow-xl max-w-[440px] mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
          <div className="relative">
            <div className="text-4xl mb-3">{formatIcons[lm.format] ?? '📦'}</div>
            <h2 className="text-lg font-bold text-white">{lm.title}</h2>
            <p className="text-xs text-gray-300 mt-2 max-w-xs mx-auto">{lm.description}</p>
          </div>
        </div>

        {/* What you'll get */}
        {lm.previewPoints && lm.previewPoints.length > 0 && (
          <div className="px-6 py-5">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">What You'll Get</h3>
            <ul className="space-y-2">
              {lm.previewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 text-sm mt-0.5">✓</span>
                  <span className="text-xs text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gate form */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-5">
          <h3 className="text-xs font-semibold text-gray-900 mb-3">Get Instant Access</h3>
          <div className="space-y-3">
            {lm.gateFields.map((field, i) => (
              <input
                key={i}
                type="text"
                placeholder={field}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-white"
                readOnly
              />
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg text-sm shadow-md">
            {lm.format === 'pdf' ? 'Download Free Guide →' :
             lm.format === 'calculator' ? 'Calculate My Savings →' :
             lm.format === 'audit' ? 'Get My Free Audit →' :
             lm.format === 'webinar' ? 'Reserve My Spot →' :
             'Get Access →'}
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-2">No spam · Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}
