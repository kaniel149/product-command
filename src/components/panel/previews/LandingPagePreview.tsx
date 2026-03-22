import type { LandingPageContent } from '../../../types'

export function LandingPagePreview({ page }: { page: LandingPageContent }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
          Landing Page
        </span>
      </div>

      {/* Browser frame */}
      <div className="rounded-xl border border-zinc-700 bg-white overflow-hidden shadow-xl max-w-[500px] mx-auto">
        {/* Browser toolbar */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-2 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
              solaris.com
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
          <div className="relative">
            <h1 className="text-2xl font-bold text-white leading-tight">{page.hero.headline}</h1>
            <p className="text-sm text-gray-300 mt-3 max-w-sm mx-auto">{page.hero.subheadline}</p>
            <button className="mt-5 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg text-sm shadow-lg hover:shadow-xl transition-shadow">
              {page.hero.ctaText}
            </button>
          </div>
        </div>

        {/* Benefits */}
        {page.benefits && page.benefits.length > 0 && (
          <div className="px-5 py-6 bg-white">
            <div className="grid grid-cols-2 gap-4">
              {page.benefits.map((b, i) => (
                <div key={i} className="text-center p-3">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <h3 className="text-xs font-semibold text-gray-900">{b.title}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social proof */}
        {page.socialProof && page.socialProof.length > 0 && (
          <div className="bg-gray-50 px-5 py-5 border-t border-gray-100">
            {page.socialProof.map((sp, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <p className="text-xs text-gray-700 italic">"{sp.quote}"</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <div>
                    <span className="text-[10px] font-semibold text-gray-900">{sp.author}</span>
                    {sp.role && <span className="text-[10px] text-gray-500 ml-1">· {sp.role}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        {page.faq && page.faq.length > 0 && (
          <div className="px-5 py-5 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">FAQ</h3>
            {page.faq.map((f, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="text-xs font-medium text-gray-900">{f.q}</div>
                <div className="text-[10px] text-gray-600 mt-0.5">{f.a}</div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-zinc-900 px-5 py-4 text-center">
          <button className="px-8 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg text-sm">
            {page.hero.ctaText}
          </button>
        </div>
      </div>
    </div>
  )
}
