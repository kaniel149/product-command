import { useEffect, useState, type ReactNode } from 'react'
import { supabase } from '../../lib/supabase'
import type { User } from '@supabase/supabase-js'

export function AuthGate({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // Dev mode bypass — no Supabase configured
  if (!supabase) {
    return <>{children}</>
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-text-secondary">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="bg-card border border-border rounded-lg p-8 w-[360px]">
          <h1 className="text-lg font-semibold text-text-primary mb-1">Product Command</h1>
          <p className="text-sm text-text-secondary mb-6">Sign in with magic link</p>
          {sent ? (
            <p className="text-sm text-accent">Check your email for the login link.</p>
          ) : (
            <form onSubmit={async (e) => {
              e.preventDefault()
              await supabase.auth.signInWithOtp({ email })
              setSent(true)
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-surface border border-border rounded-md text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent mb-3"
              />
              <button className="w-full py-2 bg-accent text-base text-sm font-medium rounded-md hover:bg-accent-hover">
                Send Magic Link
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }

  return <>{children}</>
}
