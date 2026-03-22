import type { WhatsAppContent } from '../../../types'

export function WhatsAppPreview({ wa }: { wa: WhatsAppContent }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
          WhatsApp
        </span>
      </div>

      {/* Phone frame */}
      <div className="relative mx-auto" style={{ maxWidth: 380 }}>
        <div className="rounded-[2rem] border-4 border-zinc-700 bg-zinc-900 p-2 shadow-2xl">
          <div className="rounded-[1.5rem] overflow-hidden">
            {/* WhatsApp header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="text-white text-lg">←</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">S</div>
              <div>
                <div className="text-sm font-medium text-white">Solaris Energy</div>
                <div className="text-[10px] text-green-200">online</div>
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-[#ECE5DD] min-h-[300px] px-3 py-4 space-y-3" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4cfc4\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
              {/* Incoming message - greeting */}
              <div className="flex justify-start">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[280px] shadow-sm">
                  <p className="text-sm text-gray-800">{wa.greeting}</p>
                  <div className="text-[10px] text-gray-400 text-right mt-1">09:41 ✓✓</div>
                </div>
              </div>

              {/* Auto reply */}
              {wa.autoReply && (
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[280px] shadow-sm">
                    <p className="text-sm text-gray-800">{wa.autoReply}</p>
                    <div className="text-[10px] text-gray-400 text-right mt-1">09:41</div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {wa.quickReplies && wa.quickReplies.length > 0 && (
              <div className="bg-[#ECE5DD] px-3 pb-3 flex flex-wrap gap-2">
                {wa.quickReplies.map((qr, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 bg-white border border-[#25D366] text-[#075E54] rounded-full text-xs font-medium shadow-sm"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">
                Type a message...
              </div>
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm">
                🎤
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
