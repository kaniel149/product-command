# Product Command Autopilot — Design Doc

**Date:** 2026-03-22
**Status:** Approved
**Author:** Kaniel Tordjman + Claude

## Overview

Autonomous marketing system that runs 24/7 on Vercel + Supabase. Syncs metrics from Meta Marketing API and Google Ads API every 15 minutes, detects underperforming ads, takes corrective action, and reports via WhatsApp.

Starting with **Solaris Panama** as MVP. Multi-tenant architecture supports all 5 products.

## Architecture

```
Vercel Cron (every 15 min)
├── /api/autopilot/sync     — Pull metrics from Meta + Google
├── /api/autopilot/analyze  — Run rules engine against metrics
├── /api/autopilot/act      — Execute actions (pause, scale, create)
└── /api/autopilot/report   — Send WhatsApp summary

Data Layer: Supabase
├── campaigns      — Synced campaign metadata
├── metrics        — Time-series performance data
├── rules          — Configurable automation rules
├── actions_log    — Audit trail of all autopilot actions
└── node_campaigns — Maps funnel nodes to live campaigns

UI: Product Command React app
└── New "Campaigns" tab in Preview Panel
    ├── Live metrics (auto-refresh)
    ├── Actions log
    ├── Push to Meta / Push to Google
    └── Manual override controls
```

## The Autonomous Loop

Every 15 minutes, 4 steps run sequentially:

### Step 1: SYNC
- Call Meta Marketing API: `GET /act_{ad_account_id}/insights`
- Call Google Ads API: `SearchStream` with GAQL query
- Upsert into `metrics` table with timestamp
- Update `campaigns` table status

### Step 2: ANALYZE
- Load active rules from `rules` table for the product
- Evaluate each rule's `condition` against latest metrics
- Rules support: ctr, cpc, cr, spend, impressions, conversions, daily_budget
- Generate list of proposed actions

### Step 3: ACT
- For each proposed action:
  - Check cooldown (don't repeat same action within cooldown window)
  - If `requires_approval`: send WhatsApp and wait (don't execute)
  - If auto: execute via Meta/Google API
  - Log to `actions_log` with before/after state

Available actions:
- `pause_ad` — Pause underperforming ad
- `resume_ad` — Resume paused ad
- `increase_budget_pct` — Increase daily budget by N%
- `decrease_budget_pct` — Decrease daily budget by N%
- `duplicate_with_variant` — Clone ad with modified copy
- `create_campaign` — Build campaign from funnel node data

### Step 4: REPORT
- Aggregate actions taken in last cycle
- Send WhatsApp summary to +972502213948
- Include: actions taken, current metrics, budget status, alerts

## Database Schema

```sql
-- Synced campaigns from Meta/Google
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL CHECK (platform IN ('meta', 'google')),
  external_id TEXT NOT NULL,
  product_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  daily_budget DECIMAL,
  currency TEXT DEFAULT 'USD',
  ad_account_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(platform, external_id)
);

-- Time-series metrics (every 15 min)
CREATE TABLE metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id),
  timestamp TIMESTAMPTZ DEFAULT now(),
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  ctr DECIMAL,
  spend DECIMAL DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  cr DECIMAL,
  cpc DECIMAL,
  cac DECIMAL,
  reach INTEGER,
  frequency DECIMAL
);

-- Configurable automation rules
CREATE TABLE rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  condition TEXT NOT NULL,
  action TEXT NOT NULL,
  action_params JSONB DEFAULT '{}',
  cooldown INTERVAL DEFAULT '24 hours',
  requires_approval BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Audit trail
CREATE TABLE actions_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id),
  rule_id UUID REFERENCES rules(id),
  action TEXT NOT NULL,
  details JSONB,
  result TEXT CHECK (result IN ('success', 'failed', 'pending_approval', 'approved', 'rejected')),
  before_state JSONB,
  after_state JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Maps funnel nodes to live campaigns
CREATE TABLE node_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id TEXT NOT NULL,
  node_id TEXT NOT NULL,
  campaign_id UUID REFERENCES campaigns(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(board_id, node_id, campaign_id)
);
```

## Default Rules (Panama)

| Rule | Condition | Action | Cooldown | Approval |
|------|-----------|--------|----------|----------|
| Kill low CTR | ctr < 1.0 AND impressions > 500 | pause_ad | 24h | No |
| Kill high CPC | cpc > 1.50 AND clicks > 50 | pause_ad | 24h | No |
| Emergency stop | spend > daily_budget * 1.2 | pause_ad | 1h | No |
| Scale winner | ctr > 3.0 AND cr > 5.0 | increase_budget_20pct | 6h | No |
| Create variant | impressions > 5000 AND ctr > 2.5 | duplicate_with_variant | 48h | Yes |
| Budget rebalance | one ad ctr > 2x another | shift_budget | 12h | Yes |

## API Keys Required

### Meta Marketing API
- `META_ACCESS_TOKEN` — System User Token (already created for Panama)
- `META_AD_ACCOUNT_ID` — Panama ad account
- `META_APP_ID` — 775806011928280 (Solar OS Automation app)

### Google Ads API
- `GOOGLE_ADS_DEVELOPER_TOKEN` — requires Google Ads API access
- `GOOGLE_ADS_CLIENT_ID` / `CLIENT_SECRET` — OAuth credentials
- `GOOGLE_ADS_CUSTOMER_ID` — Panama account
- `GOOGLE_ADS_REFRESH_TOKEN` — OAuth refresh token

### WhatsApp (for reports)
- Already available via WhatsApp MCP → +972502213948

## Safety Rails

1. **Budget cap** — Never exceed daily_budget × 1.2
2. **Cooldown** — Each action has minimum interval per campaign
3. **Approval gate** — Heavy actions (create, budget > 50% change) require WhatsApp approval
4. **Kill switch** — Single API call pauses ALL campaigns instantly
5. **Audit log** — Every action logged with before/after state
6. **Rate limits** — Respect Meta (200 calls/hour) and Google (15K operations/day)

## UI Changes to Product Command

### New "Campaigns" tab in Preview Panel

When clicking a touchpoint node that has a linked campaign:

```
[Preview] [Feedback] [Live Site] [Campaigns]
                                      │
                                      ├─ 🟢 Active | Daily Budget: $50
                                      ├─ Live Metrics:
                                      │   Impressions: 12,340
                                      │   Clicks: 287 (2.3% CTR)
                                      │   Spend: $34.20 ($0.52 CPC)
                                      │   Conversions: 14 (4.9% CR)
                                      │
                                      ├─ Autopilot Actions:
                                      │   ✅ 2h ago: Scaled budget +20%
                                      │   ⏸ Yesterday: Paused variant B
                                      │
                                      ├─ [Push to Meta] [Push to Google]
                                      ├─ [Pause] [Resume] [Edit Budget]
                                      └─ [⛔ Kill Switch — Pause All]
```

### New touchpoint node badge

Nodes with linked campaigns show a live status dot:
- 🟢 Active + performing
- 🟡 Active + underperforming
- 🔴 Paused by autopilot
- ⚪ No campaign linked

## Implementation Phases

### Phase 1: Meta Sync (Read)
- Vercel API route to pull Meta campaign data
- Supabase tables + migrations
- Cron job every 15 min
- Display in Product Command UI

### Phase 2: Meta Actions (Write)
- Pause/resume campaigns
- Budget adjustments
- Rules engine + actions log
- WhatsApp reports

### Phase 3: Campaign Creation
- Push funnel node content → Meta campaign
- Copy, targeting, budget from node data
- Duplicate with variant

### Phase 4: Google Ads
- Same flow for Google Ads API
- Unified rules engine

### Phase 5: Multi-product
- Extend to TM Energy, Israel, Mivne, USA
- Per-product rules and budgets
