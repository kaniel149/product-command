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

// ── Rich Asset Content ────────────────────────────────────────────

export interface AdContent {
  platform: 'meta' | 'google' | 'linkedin' | 'line' | 'tiktok'
  headline: string
  primaryText: string
  description?: string
  callToAction: string
  imagePrompt?: string
  destinationUrl?: string
  variants?: { headline: string; primaryText: string }[]
}

export interface EmailContent {
  subject: string
  preheader?: string
  body: string // HTML string
  ctaText: string
  ctaUrl?: string
  sendDay?: number // Day in sequence (0, 3, 7, 14...)
}

export interface LandingPageContent {
  hero: { headline: string; subheadline: string; ctaText: string; ctaUrl?: string }
  benefits?: { icon: string; title: string; description: string }[]
  socialProof?: { quote: string; author: string; role?: string }[]
  faq?: { q: string; a: string }[]
}

export interface FormContent {
  title: string
  description?: string
  fields: { name: string; label: string; type: 'text' | 'email' | 'phone' | 'select' | 'textarea'; required?: boolean; options?: string[] }[]
  submitLabel: string
  successMessage?: string
}

export interface WhatsAppContent {
  greeting: string
  quickReplies?: string[]
  autoReply?: string
}

export interface LeadMagnetContent {
  title: string
  description: string
  format: 'pdf' | 'calculator' | 'audit' | 'checklist' | 'webinar'
  gateFields: string[] // Fields required to unlock
  previewPoints?: string[]
}

export type AssetContent =
  | { contentType: 'ad'; content: AdContent }
  | { contentType: 'email'; content: EmailContent }
  | { contentType: 'landing'; content: LandingPageContent }
  | { contentType: 'form'; content: FormContent }
  | { contentType: 'whatsapp'; content: WhatsAppContent }
  | { contentType: 'leadMagnet'; content: LeadMagnetContent }

// ── Asset Feedback / Metrics ──────────────────────────────────────

export type AssetStatus = 'draft' | 'review' | 'live' | 'paused' | 'killed'

export interface AssetMetrics {
  impressions?: number
  clicks?: number
  ctr?: number
  conversions?: number
  cr?: number
  spend?: number
  cac?: number
  notes?: string
  lastUpdated?: string
}

export interface AssetFeedback {
  status: AssetStatus
  metrics?: AssetMetrics
  notes?: string[]
  abVariant?: string
}

// ── Base Node Data ────────────────────────────────────────────────

export interface AssetData {
  type: 'page' | 'email' | 'ad' | 'whatsapp' | 'form'
  url?: string
  screenshotUrl?: string
  stitchProjectId?: string
  stitchScreenId?: string
  asset?: AssetContent
  feedback?: AssetFeedback
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
