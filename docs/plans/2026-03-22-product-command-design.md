# Product Command — Design Document

## Overview

Interactive product control dashboard with Miro-like canvas for mapping customer journeys and marketing funnels across 5 solar products. Each node links to real assets (landing pages, emails, ads) with live preview, Stitch editing, and deploy capability.

## Products

| Product | Market | Language | Status |
|---------|--------|----------|--------|
| Solaris Panama | B2C commercial solar, Azuero | ES + EN | Most developed |
| TM Energy | Ko Phangan residential + commercial | EN + TH | 12-step value chain |
| Solar OS Israel | SaaS for Israeli installers | HE | Full funnel + emails |
| Mivne | Contractor oversight | HE | Basic — needs definition |
| USA | SaaS for American installers | EN | Basic — needs definition |

## Architecture

```
┌─────────────────────────────────────────────┐
│  Product Selector                           │
│  [Panama] [TM Energy] [Israel] [Mivne] [USA]│
├─────────────────────────────────────────────┤
│  Board Tabs                                 │
│  [מסע לקוח] [משפך שיווקי] [+הוסף לוח]      │
├─────────────────────────────────────────────┤
│                                             │
│           react-flow Canvas                 │
│                                             │
│   ┌──────┐    ┌──────┐    ┌──────┐         │
│   │ Node │───▶│ Node │───▶│ Node │         │
│   └──────┘    └──────┘    └──────┘         │
│                                             │
│   [minimap]                    [zoom +-]    │
├─────────────────────────────────────────────┤
│  Asset Preview Panel (slide-in from right)  │
│  ┌─────────────────────────────────────┐    │
│  │  iframe / screenshot of real asset  │    │
│  │  [Open in Stitch] [Edit] [Deploy]   │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## Node Types

| Type | Purpose | Example | Asset Support |
|------|---------|---------|---------------|
| Stage | Step in journey/funnel | "Awareness", "Trial" | No |
| Touchpoint | Specific interaction | "Landing Page", "Email Day 3" | Yes — iframe/screenshot |
| Persona | Customer type | "The Expat Entrepreneur" | Demographics card |
| Message | Specific copy/CTA | "Own Your Energy" | Editable text |
| Decision | Branch point | "Fills form?" yes/no | Branching arrows |
| KPI | Performance metric | "CR: 15%", "CAC: $50" | Mini gauge |

## Stitch Integration Flow

1. View node → Preview panel shows iframe of live asset
2. Click "Edit in Stitch" → Creates/opens Stitch project with current page
3. Edit visually in Stitch → Save
4. Click "Sync" → Updated screenshot pulled back to canvas
5. Click "Deploy" → Pushes changes to Vercel

## Data Model (Supabase)

```sql
products        (id, name, slug, brand_config, icon)
boards          (id, product_id, type, name, viewport_state)
nodes           (id, board_id, type, position_x, position_y, data_json)
edges           (id, board_id, source_node, target_node, label, style)
assets          (id, node_id, type, url, screenshot_url, stitch_project_id, stitch_screen_id)
personas        (id, product_id, name, demographics, pain_points, channels)
messages        (id, node_id, persona_id, content, language, variant)
product_members (id, product_id, user_id, role)
```

## Auth & Access

- Supabase Auth (magic link)
- RLS: partners see only their products
- Admin (k@kanielt.com) sees all
- product_members table controls access

## Tech Stack

| Layer | Tool |
|-------|------|
| Canvas | @xyflow/react v12 |
| UI | React + TypeScript + Vite + Tailwind + Framer Motion |
| State | Zustand (local) + Supabase (persist) |
| Auth | Supabase Auth (magic link) |
| DB | Supabase PostgreSQL + RLS |
| Asset Preview | iframe + fallback screenshot |
| Design Editing | Stitch MCP |
| Deploy | Vercel |

## Customer Journey Data (Pre-loaded)

### Solaris Panama — 3 Personas
1. The Expat Entrepreneur (hotels/resorts) — EN, WhatsApp-first
2. The Panamanian Chain Manager (supermarkets) — ES, formal email
3. The Finca Owner (agricultural) — ES, relationship-first

### TM Energy — 4 Personas
1. Residential Homeowner/Villa Owner — EN, WhatsApp/LINE
2. Commercial/Hospitality Business — EN, formal proposals
3. Agricultural/Land Owner — TH, personal intro
4. Expat/Foreign Investor — EN, education-heavy

### Solar OS Israel — By Company Size
1. Small installer (<10 projects) → Starter ₪399
2. Mid-size (10-50) → Pro ₪899
3. Enterprise (50-200+) → Enterprise ₪1,999

### Mivne — TBD
### USA — TBD

## Marketing Funnel Stages

### Standard 5-Stage Funnel
1. Awareness → Ads, SEO, content
2. Interest → Lead magnets, calculator, content
3. Consideration → Email sequences, social proof
4. Decision → Trial/proposal, pricing
5. Conversion → Paid plan / signed contract

### Post-Purchase
6. Onboarding → Setup, training
7. Retention → Support, upsell
8. Advocacy → Referrals, reviews
