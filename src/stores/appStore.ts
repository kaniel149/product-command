import { create } from 'zustand'
import type { ProductSlug, Product, Board } from '../types'

export const PRODUCTS: Product[] = [
  { slug: 'panama', name: 'Solaris Panama', icon: '🇵🇦', market: 'B2C Solar', language: 'ES', color: '#0B3D2E' },
  { slug: 'tm-energy', name: 'TM Energy', icon: '🇹🇭', market: 'Island Solar', language: 'EN', color: '#1e40af' },
  { slug: 'solar-os-israel', name: 'Solar OS Israel', icon: '🇮🇱', market: 'SaaS Installers', language: 'HE', color: '#7c3aed' },
  { slug: 'solarwatch', name: 'SolarWatch', icon: '🔭', market: 'Partner Oversight', language: 'HE', color: '#0891b2' },
  { slug: 'usa', name: 'Solar OS USA', icon: '🇺🇸', market: 'SaaS Installers', language: 'EN', color: '#dc2626' },
]

const DEFAULT_BOARDS: Board[] = [
  { id: 'panama-journey', productSlug: 'panama', type: 'journey', name: 'מסע לקוח' },
  { id: 'panama-funnel', productSlug: 'panama', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'tm-journey', productSlug: 'tm-energy', type: 'journey', name: 'Customer Journey' },
  { id: 'tm-funnel', productSlug: 'tm-energy', type: 'funnel', name: 'Marketing Funnel' },
  { id: 'israel-journey', productSlug: 'solar-os-israel', type: 'journey', name: 'מסע לקוח' },
  { id: 'israel-funnel', productSlug: 'solar-os-israel', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'solarwatch-journey', productSlug: 'solarwatch', type: 'journey', name: 'מסע לקוח' },
  { id: 'solarwatch-funnel', productSlug: 'solarwatch', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'usa-journey', productSlug: 'usa', type: 'journey', name: 'Customer Journey' },
  { id: 'usa-funnel', productSlug: 'usa', type: 'funnel', name: 'Marketing Funnel' },
]

interface AppState {
  activeProduct: ProductSlug
  activeBoard: string
  boards: Board[]
  setActiveProduct: (slug: ProductSlug) => void
  setActiveBoard: (boardId: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  activeProduct: 'panama',
  activeBoard: 'panama-journey',
  boards: DEFAULT_BOARDS,
  setActiveProduct: (slug) => {
    const boards = get().boards.filter(b => b.productSlug === slug)
    set({ activeProduct: slug, activeBoard: boards[0]?.id ?? '' })
  },
  setActiveBoard: (boardId) => set({ activeBoard: boardId }),
}))
