import { ProductSelector } from './ProductSelector'
import { BoardTabs } from './BoardTabs'
import type { ReactNode } from 'react'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-base">
      <ProductSelector />
      <BoardTabs />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
    </div>
  )
}
