import type { AdContent } from '../../../types'

const platformStyles = {
  meta: { bg: 'bg-white', text: 'text-gray-900', accent: 'text-blue-600', label: 'Meta Ad' },
  google: { bg: 'bg-white', text: 'text-gray-900', accent: 'text-green-700', label: 'Google Search' },
  linkedin: { bg: 'bg-white', text: 'text-gray-900', accent: 'text-blue-700', label: 'LinkedIn' },
  line: { bg: 'bg-white', text: 'text-gray-900', accent: 'text-green-500', label: 'LINE Ad' },
  tiktok: { bg: 'bg-black', text: 'text-white', accent: 'text-pink-500', label: 'TikTok' },
}

function MetaAdMockup({ ad }: { ad: AdContent }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden max-w-[380px] mx-auto shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">S</div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Solaris Energy</div>
          <div className="text-xs text-gray-500">Sponsored · 🌐</div>
        </div>
      </div>
      {/* Primary text */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-900 whitespace-pre-line">{ad.primaryText}</p>
      </div>
      {/* Image area */}
      <div className="w-full h-[200px] bg-gradient-to-br from-amber-500/20 via-orange-400/30 to-yellow-300/20 flex items-center justify-center border-y border-gray-100">
        <div className="text-center px-6">
          <div className="text-4xl mb-2">☀️</div>
          <div className="text-sm font-medium text-gray-700">{ad.imagePrompt ?? 'Solar installation visual'}</div>
        </div>
      </div>
      {/* CTA section */}
      <div className="px-4 py-3 flex items-center justify-between bg-gray-50">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 truncate">{ad.destinationUrl ?? 'solaris.com'}</div>
          <div className="text-sm font-semibold text-gray-900 truncate">{ad.headline}</div>
          {ad.description && <div className="text-xs text-gray-500 truncate">{ad.description}</div>}
        </div>
        <button className="ml-3 px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md whitespace-nowrap">
          {ad.callToAction}
        </button>
      </div>
      {/* Engagement bar */}
      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-100 text-xs text-gray-500">
        <span>👍 Like</span><span>💬 Comment</span><span>↗ Share</span>
      </div>
    </div>
  )
}

function GoogleAdMockup({ ad }: { ad: AdContent }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden max-w-[500px] mx-auto shadow-lg p-5">
      <div className="text-xs text-gray-500 mb-3">Google · Search Results</div>
      {/* Ad result */}
      <div className="border-l-2 border-yellow-400 pl-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded font-medium">Ad</span>
          <span className="text-xs text-green-800">{ad.destinationUrl ?? 'solaris.com'}</span>
        </div>
        <h3 className="text-lg text-blue-700 font-medium hover:underline cursor-pointer">{ad.headline}</h3>
        {ad.description && <p className="text-sm text-gray-600 mt-1">{ad.description}</p>}
        <p className="text-sm text-gray-700 mt-1">{ad.primaryText}</p>
      </div>
      {/* Extensions */}
      <div className="mt-3 pl-4 flex gap-4 text-sm text-blue-700">
        <span className="hover:underline cursor-pointer">Free Quote</span>
        <span className="hover:underline cursor-pointer">ROI Calculator</span>
        <span className="hover:underline cursor-pointer">Contact Us</span>
      </div>
    </div>
  )
}

function LinkedInAdMockup({ ad }: { ad: AdContent }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden max-w-[400px] mx-auto shadow-lg">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">S</div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Solaris Energy</div>
          <div className="text-xs text-gray-500">Promoted</div>
        </div>
      </div>
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-800">{ad.primaryText}</p>
      </div>
      <div className="w-full h-[180px] bg-gradient-to-br from-blue-500/10 to-blue-700/20 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-sm font-medium text-gray-600">{ad.imagePrompt ?? 'Professional solar dashboard'}</div>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="text-sm font-semibold text-gray-900">{ad.headline}</div>
        <button className="mt-2 w-full py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-50">
          {ad.callToAction}
        </button>
      </div>
    </div>
  )
}

export function AdPreview({ ad }: { ad: AdContent }) {
  const style = platformStyles[ad.platform]

  return (
    <div className="space-y-6">
      {/* Platform badge */}
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${ad.platform === 'meta' ? 'bg-blue-500/20 text-blue-400' : ad.platform === 'google' ? 'bg-green-500/20 text-green-400' : ad.platform === 'linkedin' ? 'bg-blue-700/20 text-blue-300' : ad.platform === 'line' ? 'bg-green-500/20 text-green-300' : 'bg-pink-500/20 text-pink-400'}`}>
          {style.label}
        </span>
      </div>

      {/* Phone frame */}
      <div className="relative mx-auto" style={{ maxWidth: 420 }}>
        <div className="rounded-[2rem] border-4 border-zinc-700 bg-zinc-900 p-2 shadow-2xl">
          <div className="rounded-[1.5rem] overflow-hidden bg-gray-100">
            {/* Status bar */}
            <div className="h-6 bg-gray-200 flex items-center justify-between px-4 text-[10px] text-gray-500">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>📶</span><span>🔋</span>
              </div>
            </div>
            {/* Ad content */}
            <div className="pb-2">
              {ad.platform === 'meta' && <MetaAdMockup ad={ad} />}
              {ad.platform === 'google' && <GoogleAdMockup ad={ad} />}
              {ad.platform === 'linkedin' && <LinkedInAdMockup ad={ad} />}
              {(ad.platform === 'line' || ad.platform === 'tiktok') && <MetaAdMockup ad={ad} />}
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
      {ad.variants && ad.variants.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">A/B Variants</h4>
          {ad.variants.map((v, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-3">
              <div className="text-xs text-text-muted mb-1">Variant {String.fromCharCode(66 + i)}</div>
              <div className="text-sm font-medium text-text-primary">{v.headline}</div>
              <div className="text-xs text-text-secondary mt-1">{v.primaryText}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
