# Autopilot Phase 1: Meta Sync + Rules Engine — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the autonomous loop that syncs Meta Ads metrics, runs rules, takes action, and reports via WhatsApp — starting with Solaris Panama.

**Architecture:** Vercel serverless API routes handle the cron loop. Supabase stores campaigns, metrics, rules, and action logs. React UI adds a "Campaigns" tab to the Preview Panel. WhatsApp MCP sends reports.

**Tech Stack:** TypeScript, Vercel Serverless Functions, Supabase (PostgreSQL + JS client), Meta Marketing API v21.0, WhatsApp MCP

---

### Task 1: Vercel Config + API Skeleton

**Files:**
- Create: `vercel.json`
- Create: `api/autopilot/sync.ts`
- Create: `api/autopilot/analyze.ts`
- Create: `api/autopilot/act.ts`
- Create: `api/autopilot/report.ts`
- Create: `api/_lib/supabase.ts`
- Create: `api/_lib/meta.ts`

**Step 1: Create vercel.json with cron config**

```json
{
  "crons": [
    {
      "path": "/api/autopilot/sync",
      "schedule": "*/15 * * * *"
    }
  ],
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node@3"
    }
  }
}
```

**Step 2: Create Supabase helper**

```typescript
// api/_lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

**Step 3: Create Meta API helper**

```typescript
// api/_lib/meta.ts
const BASE = 'https://graph.facebook.com/v21.0'

export async function metaGet(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE}/${path}`)
  url.searchParams.set('access_token', process.env.META_ACCESS_TOKEN!)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Meta API ${res.status}: ${await res.text()}`)
  return res.json()
}

export async function metaPost(path: string, body: Record<string, unknown> = {}) {
  const url = new URL(`${BASE}/${path}`)
  url.searchParams.set('access_token', process.env.META_ACCESS_TOKEN!)
  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Meta API ${res.status}: ${await res.text()}`)
  return res.json()
}

export async function getAdAccountCampaigns(adAccountId: string) {
  return metaGet(`act_${adAccountId}/campaigns`, {
    fields: 'id,name,status,daily_budget,lifetime_budget,objective,created_time,updated_time',
    limit: '100',
  })
}

export async function getCampaignInsights(campaignId: string) {
  return metaGet(`${campaignId}/insights`, {
    fields: 'impressions,clicks,ctr,spend,actions,cost_per_action_type,reach,frequency',
    date_preset: 'today',
  })
}

export async function pauseCampaign(campaignId: string) {
  return metaPost(campaignId, { status: 'PAUSED' })
}

export async function resumeCampaign(campaignId: string) {
  return metaPost(campaignId, { status: 'ACTIVE' })
}

export async function updateBudget(campaignId: string, dailyBudget: number) {
  // Meta expects budget in cents
  return metaPost(campaignId, { daily_budget: Math.round(dailyBudget * 100) })
}
```

**Step 4: Create sync endpoint skeleton**

```typescript
// api/autopilot/sync.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { supabase } from '../_lib/supabase'
import { getAdAccountCampaigns, getCampaignInsights } from '../_lib/meta'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Verify cron secret
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const adAccountId = process.env.META_AD_ACCOUNT_ID!

    // 1. Fetch campaigns from Meta
    const { data: campaigns } = await getAdAccountCampaigns(adAccountId)

    // 2. Upsert campaigns into DB
    for (const c of campaigns) {
      await supabase.from('campaigns').upsert({
        platform: 'meta',
        external_id: c.id,
        product_slug: 'panama',
        name: c.name,
        status: c.status.toLowerCase(),
        daily_budget: c.daily_budget ? Number(c.daily_budget) / 100 : null,
      }, { onConflict: 'platform,external_id' })
    }

    // 3. Fetch insights for each campaign
    for (const c of campaigns) {
      const insights = await getCampaignInsights(c.id)
      if (insights.data?.[0]) {
        const i = insights.data[0]
        const { data: dbCampaign } = await supabase
          .from('campaigns')
          .select('id')
          .eq('external_id', c.id)
          .single()

        if (dbCampaign) {
          const conversions = i.actions?.find((a: any) => a.action_type === 'offsite_conversion')?.value || 0
          await supabase.from('metrics').insert({
            campaign_id: dbCampaign.id,
            impressions: Number(i.impressions || 0),
            clicks: Number(i.clicks || 0),
            ctr: Number(i.ctr || 0),
            spend: Number(i.spend || 0),
            conversions: Number(conversions),
            cr: Number(i.clicks) > 0 ? (Number(conversions) / Number(i.clicks)) * 100 : 0,
            cpc: Number(i.clicks) > 0 ? Number(i.spend) / Number(i.clicks) : 0,
            reach: Number(i.reach || 0),
            frequency: Number(i.frequency || 0),
          })
        }
      }
    }

    // 4. Chain to analyze
    const analyzeUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}/api/autopilot/analyze`
    await fetch(analyzeUrl, {
      method: 'POST',
      headers: { authorization: `Bearer ${process.env.CRON_SECRET}` },
    })

    return res.json({ ok: true, synced: campaigns.length })
  } catch (err: any) {
    console.error('Sync error:', err)
    return res.status(500).json({ error: err.message })
  }
}
```

**Step 5: Create analyze endpoint**

```typescript
// api/autopilot/analyze.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { supabase } from '../_lib/supabase'

interface Rule {
  id: string
  name: string
  condition: string
  action: string
  action_params: Record<string, unknown>
  cooldown: string
  requires_approval: boolean
}

function evaluateCondition(condition: string, metrics: Record<string, number>): boolean {
  // Simple expression evaluator: "ctr < 1.0 AND impressions > 500"
  const parts = condition.split(/\s+AND\s+/i)
  return parts.every(part => {
    const match = part.trim().match(/^(\w+)\s*(>|<|>=|<=|==|!=)\s*(.+)$/)
    if (!match) return false
    const [, field, op, rawVal] = match
    const left = metrics[field] ?? 0
    // Support references like "daily_budget * 1.2"
    let right: number
    if (rawVal.includes('*')) {
      const [ref, mult] = rawVal.split('*').map(s => s.trim())
      right = (metrics[ref] ?? 0) * Number(mult)
    } else {
      right = Number(rawVal)
    }
    switch (op) {
      case '>': return left > right
      case '<': return left < right
      case '>=': return left >= right
      case '<=': return left <= right
      case '==': return left === right
      case '!=': return left !== right
      default: return false
    }
  })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    // Load active rules for panama
    const { data: rules } = await supabase
      .from('rules')
      .select('*')
      .eq('product_slug', 'panama')
      .eq('active', true)

    // Load campaigns with latest metrics
    const { data: campaigns } = await supabase
      .from('campaigns')
      .select('id, external_id, name, status, daily_budget')
      .eq('product_slug', 'panama')

    const actions: { campaign_id: string; external_id: string; rule: Rule; campaign_name: string }[] = []

    for (const campaign of campaigns || []) {
      // Get latest metrics
      const { data: latestMetrics } = await supabase
        .from('metrics')
        .select('*')
        .eq('campaign_id', campaign.id)
        .order('timestamp', { ascending: false })
        .limit(1)
        .single()

      if (!latestMetrics) continue

      const metricsObj: Record<string, number> = {
        impressions: latestMetrics.impressions,
        clicks: latestMetrics.clicks,
        ctr: latestMetrics.ctr,
        spend: latestMetrics.spend,
        conversions: latestMetrics.conversions,
        cr: latestMetrics.cr,
        cpc: latestMetrics.cpc,
        daily_budget: campaign.daily_budget || 0,
      }

      for (const rule of (rules as Rule[]) || []) {
        // Check cooldown
        const { data: recentAction } = await supabase
          .from('actions_log')
          .select('id')
          .eq('campaign_id', campaign.id)
          .eq('rule_id', rule.id)
          .gte('created_at', new Date(Date.now() - parseCooldown(rule.cooldown)).toISOString())
          .limit(1)

        if (recentAction && recentAction.length > 0) continue

        if (evaluateCondition(rule.condition, metricsObj)) {
          actions.push({
            campaign_id: campaign.id,
            external_id: campaign.external_id,
            rule,
            campaign_name: campaign.name,
          })
        }
      }
    }

    // Chain to act if there are actions
    if (actions.length > 0) {
      const actUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}/api/autopilot/act`
      await fetch(actUrl, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${process.env.CRON_SECRET}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ actions }),
      })
    }

    return res.json({ ok: true, actionsProposed: actions.length })
  } catch (err: any) {
    console.error('Analyze error:', err)
    return res.status(500).json({ error: err.message })
  }
}

function parseCooldown(cooldown: string): number {
  const match = cooldown.match(/(\d+)\s*(h|hours?|d|days?|m|minutes?)/)
  if (!match) return 24 * 60 * 60 * 1000
  const [, num, unit] = match
  const n = Number(num)
  if (unit.startsWith('h')) return n * 60 * 60 * 1000
  if (unit.startsWith('d')) return n * 24 * 60 * 60 * 1000
  if (unit.startsWith('m')) return n * 60 * 1000
  return n * 60 * 60 * 1000
}
```

**Step 6: Create act endpoint**

```typescript
// api/autopilot/act.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { supabase } from '../_lib/supabase'
import { pauseCampaign, resumeCampaign, updateBudget } from '../_lib/meta'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { actions } = req.body || {}
  if (!actions?.length) return res.json({ ok: true, executed: 0 })

  const results = []

  for (const action of actions) {
    const { campaign_id, external_id, rule, campaign_name } = action

    // If requires approval, log as pending and skip execution
    if (rule.requires_approval) {
      await supabase.from('actions_log').insert({
        campaign_id,
        rule_id: rule.id,
        action: rule.action,
        details: { campaign_name, condition: rule.condition },
        result: 'pending_approval',
      })
      results.push({ campaign_name, action: rule.action, result: 'pending_approval' })
      continue
    }

    try {
      let result = 'success'
      const before: Record<string, unknown> = {}
      const after: Record<string, unknown> = {}

      switch (rule.action) {
        case 'pause_ad':
          before.status = 'active'
          await pauseCampaign(external_id)
          after.status = 'paused'
          await supabase.from('campaigns').update({ status: 'paused' }).eq('id', campaign_id)
          break

        case 'resume_ad':
          before.status = 'paused'
          await resumeCampaign(external_id)
          after.status = 'active'
          await supabase.from('campaigns').update({ status: 'active' }).eq('id', campaign_id)
          break

        case 'increase_budget_20pct': {
          const { data: c } = await supabase.from('campaigns').select('daily_budget').eq('id', campaign_id).single()
          const oldBudget = c?.daily_budget || 0
          const newBudget = oldBudget * 1.2
          before.daily_budget = oldBudget
          await updateBudget(external_id, newBudget)
          after.daily_budget = newBudget
          await supabase.from('campaigns').update({ daily_budget: newBudget }).eq('id', campaign_id)
          break
        }

        case 'decrease_budget_20pct': {
          const { data: c } = await supabase.from('campaigns').select('daily_budget').eq('id', campaign_id).single()
          const oldBudget = c?.daily_budget || 0
          const newBudget = oldBudget * 0.8
          before.daily_budget = oldBudget
          await updateBudget(external_id, newBudget)
          after.daily_budget = newBudget
          await supabase.from('campaigns').update({ daily_budget: newBudget }).eq('id', campaign_id)
          break
        }

        default:
          result = 'failed'
      }

      await supabase.from('actions_log').insert({
        campaign_id,
        rule_id: rule.id,
        action: rule.action,
        details: { campaign_name, condition: rule.condition },
        result,
        before_state: before,
        after_state: after,
      })

      results.push({ campaign_name, action: rule.action, result })
    } catch (err: any) {
      await supabase.from('actions_log').insert({
        campaign_id,
        rule_id: rule.id,
        action: rule.action,
        details: { campaign_name, error: err.message },
        result: 'failed',
      })
      results.push({ campaign_name, action: rule.action, result: 'failed', error: err.message })
    }
  }

  // Chain to report
  const reportUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}/api/autopilot/report`
  await fetch(reportUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.CRON_SECRET}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ results }),
  })

  return res.json({ ok: true, executed: results.length, results })
}
```

**Step 7: Create report endpoint**

```typescript
// api/autopilot/report.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { supabase } from '../_lib/supabase'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { results } = req.body || {}

  // Build daily summary
  const { data: todayMetrics } = await supabase
    .from('metrics')
    .select('impressions, clicks, spend, conversions')
    .gte('timestamp', new Date(new Date().setHours(0, 0, 0, 0)).toISOString())

  const totals = (todayMetrics || []).reduce((acc, m) => ({
    impressions: acc.impressions + m.impressions,
    clicks: acc.clicks + m.clicks,
    spend: acc.spend + Number(m.spend),
    conversions: acc.conversions + m.conversions,
  }), { impressions: 0, clicks: 0, spend: 0, conversions: 0 })

  const ctr = totals.impressions > 0 ? (totals.clicks / totals.impressions * 100).toFixed(1) : '0'
  const cac = totals.conversions > 0 ? (totals.spend / totals.conversions).toFixed(0) : 'N/A'

  // Format WhatsApp message
  let message = `☀️ *Panama Autopilot Report*\n`
  message += `${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}\n\n`

  if (results?.length > 0) {
    message += `*Actions Taken:*\n`
    for (const r of results) {
      const icon = r.result === 'success' ? '✅' : r.result === 'pending_approval' ? '⏳' : '❌'
      message += `${icon} ${r.action} → ${r.campaign_name}\n`
    }
    message += `\n`
  }

  message += `*Today's Numbers:*\n`
  message += `📊 ${totals.impressions.toLocaleString()} impressions\n`
  message += `👆 ${totals.clicks.toLocaleString()} clicks (${ctr}% CTR)\n`
  message += `💰 $${totals.spend.toFixed(2)} spent\n`
  message += `🎯 ${totals.conversions} conversions ($${cac} CAC)\n`

  // Send via WhatsApp MCP or HTTP webhook
  if (process.env.WHATSAPP_WEBHOOK_URL) {
    await fetch(process.env.WHATSAPP_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ phone: '972502213948', message }),
    })
  }

  // Always log the report
  console.log('AUTOPILOT REPORT:', message)

  return res.json({ ok: true, message })
}
```

**Step 8: Commit**

```bash
git add vercel.json api/
git commit -m "feat: autopilot API skeleton — sync, analyze, act, report"
```

---

### Task 2: Supabase Migrations

**Files:**
- Create: `supabase/migrations/001_autopilot_tables.sql`
- Create: `supabase/migrations/002_panama_default_rules.sql`

**Step 1: Create tables migration**

```sql
-- 001_autopilot_tables.sql

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

CREATE TABLE metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
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

CREATE INDEX idx_metrics_campaign_ts ON metrics(campaign_id, timestamp DESC);

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

CREATE TABLE actions_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  rule_id UUID REFERENCES rules(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  details JSONB,
  result TEXT CHECK (result IN ('success', 'failed', 'pending_approval', 'approved', 'rejected')),
  before_state JSONB,
  after_state JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_actions_campaign_ts ON actions_log(campaign_id, created_at DESC);

CREATE TABLE node_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id TEXT NOT NULL,
  node_id TEXT NOT NULL,
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(board_id, node_id, campaign_id)
);

-- RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE actions_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE node_campaigns ENABLE ROW LEVEL SECURITY;

-- Service role can do everything (API routes use service role)
CREATE POLICY "service_all" ON campaigns FOR ALL USING (true);
CREATE POLICY "service_all" ON metrics FOR ALL USING (true);
CREATE POLICY "service_all" ON rules FOR ALL USING (true);
CREATE POLICY "service_all" ON actions_log FOR ALL USING (true);
CREATE POLICY "service_all" ON node_campaigns FOR ALL USING (true);
```

**Step 2: Seed default rules for Panama**

```sql
-- 002_panama_default_rules.sql

INSERT INTO rules (product_slug, name, condition, action, cooldown, requires_approval) VALUES
  ('panama', 'Kill low CTR', 'ctr < 1.0 AND impressions > 500', 'pause_ad', '24 hours', false),
  ('panama', 'Kill high CPC', 'cpc > 1.50 AND clicks > 50', 'pause_ad', '24 hours', false),
  ('panama', 'Emergency stop', 'spend > daily_budget * 1.2', 'pause_ad', '1 hour', false),
  ('panama', 'Scale winner', 'ctr > 3.0 AND cr > 5.0', 'increase_budget_20pct', '6 hours', false),
  ('panama', 'Create variant', 'impressions > 5000 AND ctr > 2.5', 'duplicate_with_variant', '48 hours', true),
  ('panama', 'Budget rebalance', 'ctr > 4.0 AND spend < daily_budget * 0.5', 'increase_budget_20pct', '12 hours', true);
```

**Step 3: Commit**

```bash
git add supabase/
git commit -m "feat: autopilot Supabase migrations + Panama default rules"
```

---

### Task 3: Campaigns Tab in Preview Panel

**Files:**
- Create: `src/components/panel/previews/CampaignsTab.tsx`
- Modify: `src/components/panel/AssetPreviewPanel.tsx`
- Modify: `src/stores/panelStore.ts`

**Step 1: Create CampaignsTab component**

```typescript
// src/components/panel/previews/CampaignsTab.tsx
import { useState, useEffect } from 'react'

interface Campaign {
  id: string
  name: string
  status: string
  daily_budget: number
  platform: string
  metrics?: {
    impressions: number
    clicks: number
    ctr: number
    spend: number
    conversions: number
    cr: number
    cpc: number
  }
  actions?: {
    action: string
    result: string
    created_at: string
    details: Record<string, unknown>
  }[]
}

export function CampaignsTab({ nodeId, boardId }: { nodeId: string; boardId: string }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/autopilot/node-campaigns?board=${boardId}&node=${nodeId}`)
        if (res.ok) setCampaigns(await res.json())
      } catch { /* no campaigns linked */ }
      setLoading(false)
    }
    load()
  }, [nodeId, boardId])

  if (loading) return <div className="p-5 text-text-muted text-sm">Loading campaigns...</div>

  if (campaigns.length === 0) {
    return (
      <div className="p-5 text-center">
        <div className="text-3xl mb-3">📊</div>
        <h3 className="text-sm font-medium text-text-primary mb-1">No campaigns linked</h3>
        <p className="text-xs text-text-muted mb-4">Push this touchpoint to Meta or Google to create a campaign.</p>
        <div className="flex gap-2 justify-center">
          <button className="text-xs px-4 py-2 bg-blue-600 text-white rounded-md font-medium">
            Push to Meta
          </button>
          <button className="text-xs px-4 py-2 bg-green-600 text-white rounded-md font-medium">
            Push to Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-5 space-y-4">
      {campaigns.map(c => (
        <div key={c.id} className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${c.status === 'active' ? 'bg-green-400' : c.status === 'paused' ? 'bg-red-400' : 'bg-zinc-400'}`} />
              <span className="text-sm font-medium text-text-primary">{c.name}</span>
            </div>
            <span className="text-xs text-text-muted">${c.daily_budget}/day</span>
          </div>

          {/* Metrics */}
          {c.metrics && (
            <div className="grid grid-cols-2 gap-2">
              <MetricCard label="Impressions" value={c.metrics.impressions.toLocaleString()} />
              <MetricCard label="Clicks" value={`${c.metrics.clicks.toLocaleString()} (${c.metrics.ctr.toFixed(1)}%)`} />
              <MetricCard label="Spend" value={`$${c.metrics.spend.toFixed(2)}`} />
              <MetricCard label="Conversions" value={`${c.metrics.conversions} (${c.metrics.cr.toFixed(1)}%)`} />
            </div>
          )}

          {/* Actions log */}
          {c.actions && c.actions.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Autopilot Actions</h4>
              {c.actions.slice(0, 5).map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-xs py-1">
                  <span>{a.result === 'success' ? '✅' : a.result === 'pending_approval' ? '⏳' : '❌'}</span>
                  <span className="text-text-secondary">{a.action}</span>
                  <span className="text-text-muted ml-auto">{new Date(a.created_at).toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-2 pt-2 border-t border-border">
            <button className="text-xs px-3 py-1.5 bg-hover text-text-secondary rounded-md hover:text-text-primary">
              {c.status === 'active' ? '⏸ Pause' : '▶ Resume'}
            </button>
            <button className="text-xs px-3 py-1.5 bg-hover text-text-secondary rounded-md hover:text-text-primary">
              💰 Edit Budget
            </button>
            <button className="text-xs px-3 py-1.5 bg-red-500/10 text-red-400 rounded-md hover:bg-red-500/20">
              ⛔ Kill Switch
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2">
      <div className="text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
      <div className="text-sm font-mono font-semibold text-text-primary mt-0.5">{value}</div>
    </div>
  )
}
```

**Step 2: Add Campaigns tab to AssetPreviewPanel**

In `src/components/panel/AssetPreviewPanel.tsx`, add to imports and tab list:
- Import `CampaignsTab`
- Add `{ id: 'campaigns' as Tab, label: 'Campaigns', show: true }` to tabs array
- Add render case for `activeTab === 'campaigns'`

**Step 3: Commit**

```bash
git add src/components/panel/ src/stores/
git commit -m "feat: Campaigns tab in Preview Panel — metrics, actions log, controls"
```

---

### Task 4: Environment Variables

**Vercel env vars needed (set via `vercel env add`):**

```
SUPABASE_URL=<product-command supabase url>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
META_ACCESS_TOKEN=<Panama System User Token from .zshrc>
META_AD_ACCOUNT_ID=<Panama ad account ID>
META_APP_ID=775806011928280
CRON_SECRET=<generate random string>
WHATSAPP_WEBHOOK_URL=<optional, for WhatsApp reports>
```

---

### Task 5: Deploy to Vercel

**Step 1: Create Vercel project**

```bash
vercel link  # or vercel --yes
```

**Step 2: Set env vars**

```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add META_ACCESS_TOKEN
vercel env add META_AD_ACCOUNT_ID
vercel env add CRON_SECRET
```

**Step 3: Deploy**

```bash
vercel --prod
```

**Step 4: Verify cron is registered**

```bash
vercel crons ls
```

**Step 5: Test sync manually**

```bash
curl -H "Authorization: Bearer $CRON_SECRET" https://<deployment>.vercel.app/api/autopilot/sync
```

**Step 6: Commit any deployment config**

```bash
git add -A && git commit -m "chore: Vercel deployment config"
```
