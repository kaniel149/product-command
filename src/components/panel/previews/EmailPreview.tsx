import type { EmailContent } from '../../../types'

export function EmailPreview({ email }: { email: EmailContent }) {
  return (
    <div className="space-y-4">
      {email.sendDay !== undefined && (
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 font-medium">
            Day {email.sendDay}
          </span>
        </div>
      )}

      {/* Email client mockup */}
      <div className="rounded-xl border border-zinc-700 bg-white overflow-hidden shadow-xl max-w-[480px] mx-auto">
        {/* Toolbar */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center text-xs text-gray-500">Email Preview</div>
        </div>

        {/* Email header */}
        <div className="border-b border-gray-100 px-5 py-4 space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">S</div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">Solaris Energy</span>
                <span className="text-xs text-gray-400">now</span>
              </div>
              <div className="text-xs text-gray-500">to: me</div>
            </div>
          </div>
          <h2 className="text-base font-bold text-gray-900 mt-2">{email.subject}</h2>
          {email.preheader && (
            <p className="text-xs text-gray-400 italic">{email.preheader}</p>
          )}
        </div>

        {/* Email body */}
        <div className="px-5 py-5">
          <div
            className="text-sm text-gray-700 leading-relaxed space-y-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_em]:italic"
            dangerouslySetInnerHTML={{ __html: email.body }}
          />
        </div>

        {/* CTA button */}
        {email.ctaText && (
          <div className="px-5 pb-6 pt-2">
            <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-md text-sm hover:shadow-lg transition-shadow">
              {email.ctaText}
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-5 py-3">
          <div className="text-[10px] text-gray-400 text-center space-y-1">
            <p>Solaris Energy · Solar solutions for your business</p>
            <p className="underline cursor-pointer">Unsubscribe</p>
          </div>
        </div>
      </div>
    </div>
  )
}
