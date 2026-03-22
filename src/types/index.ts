export type ProductSlug = 'panama' | 'tm-energy' | 'solar-os-israel' | 'mivne' | 'usa'

export interface Product {
  slug: ProductSlug
  name: string
  icon: string
  market: string
  language: string
  color: string
}

export type BoardType = 'journey' | 'funnel'

export interface Board {
  id: string
  productSlug: ProductSlug
  type: BoardType
  name: string
}

export type NodeType = 'stage' | 'touchpoint' | 'persona' | 'message' | 'decision' | 'kpi'

export interface AssetData {
  type: 'page' | 'email' | 'ad' | 'whatsapp' | 'form'
  url?: string
  screenshotUrl?: string
  stitchProjectId?: string
  stitchScreenId?: string
}

export interface PersonaData {
  name: string
  demographics: string
  painPoints: string[]
  channels: string[]
  color: string
}

export interface MessageData {
  content: string
  language: string
  variant?: string
  personaId?: string
}

export interface KpiData {
  label: string
  value: string
  target?: string
  trend?: 'up' | 'down' | 'flat'
}

export interface StageData {
  label: string
  description?: string
  funnelStage?: string
}

export interface DecisionData {
  question: string
  yesLabel?: string
  noLabel?: string
}
