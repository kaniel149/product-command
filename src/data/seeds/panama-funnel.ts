import type { Node, Edge } from '@xyflow/react'

export const panamaFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-meta', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'Meta Ads — Solar Savings', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
  }},
  { id: 'ad-meta-retarget', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'Meta Retargeting — Calculator Visitors', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
  }},
  { id: 'ad-google', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Google Ads — "Solar Panama" Keywords', type: 'ad',
    url: 'https://ads.google.com',
  }},
  { id: 'ad-google-local', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'Google Local — Town Pages SEO', type: 'ad',
    url: 'https://solaris-panama.com/towns/solar-chitre.html',
  }},

  // ── KPIs: Ad Performance ────────────────────────────────────────
  { id: 'kpi-cpc', type: 'kpi', position: { x: 0, y: 600 }, data: {
    label: 'CPC', value: '$0.40-0.80', target: '< $0.60',
  }},
  { id: 'kpi-ctr', type: 'kpi', position: { x: 200, y: 600 }, data: {
    label: 'CTR', value: '1.5-3%', target: '> 2%', trend: 'up',
  }},

  // ── Stage 1: Landing Pages ──────────────────────────────────────
  { id: 'stage-landing', type: 'stage', position: { x: 400, y: 0 }, data: {
    label: 'Landing Pages', funnelStage: '1',
    description: 'High-intent traffic capture',
  }},
  { id: 'lp-main', type: 'touchpoint', position: { x: 400, y: 150 }, data: {
    label: 'Main Landing Page', type: 'page',
    url: 'https://solaris-panama.com',
  }},
  { id: 'lp-hotel', type: 'touchpoint', position: { x: 400, y: 300 }, data: {
    label: 'Hotel/Resort Landing', type: 'page',
    url: 'https://solaris-panama.com/towns/solar-pedasi.html',
  }},
  { id: 'lp-calculator', type: 'touchpoint', position: { x: 400, y: 450 }, data: {
    label: 'ROI Calculator', type: 'page',
    url: 'https://crm.solaris-panama.com/tools/calculator',
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 750, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'Email capture & qualification',
  }},
  { id: 'lm-guide', type: 'touchpoint', position: { x: 750, y: 150 }, data: {
    label: 'PDF: "Guía Solar Panamá 2026"', type: 'page',
  }},
  { id: 'lm-roi', type: 'touchpoint', position: { x: 750, y: 300 }, data: {
    label: 'Custom ROI Report (gated)', type: 'form',
    url: 'https://crm.solaris-panama.com/tools/calculator',
  }},
  { id: 'lm-whatsapp', type: 'touchpoint', position: { x: 750, y: 450 }, data: {
    label: 'WhatsApp Opt-in', type: 'whatsapp',
  }},

  // ── Decision: Qualified? ────────────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 750, y: 600 }, data: {
    question: 'Roof > 50m² & Bill > $200/mo?',
    yesLabel: 'Qualified', noLabel: 'Nurture',
  }},

  // ── Stage 3: Email Sequences ───────────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1100, y: 0 }, data: {
    label: 'Email Nurture', funnelStage: '3',
    description: '7-email drip over 21 days',
  }},
  { id: 'email-welcome', type: 'touchpoint', position: { x: 1100, y: 150 }, data: {
    label: 'Day 0: Welcome + ROI Summary', type: 'email',
  }},
  { id: 'email-casestudy', type: 'touchpoint', position: { x: 1100, y: 280 }, data: {
    label: 'Day 3: Case Study — Hotel Pedasi', type: 'email',
  }},
  { id: 'email-financing', type: 'touchpoint', position: { x: 1100, y: 410 }, data: {
    label: 'Day 7: EPC vs PPA Financing', type: 'email',
  }},
  { id: 'email-urgency', type: 'touchpoint', position: { x: 1100, y: 540 }, data: {
    label: 'Day 14: Limited Site Assessments', type: 'email',
  }},
  { id: 'msg-whatsapp-followup', type: 'message', position: { x: 1100, y: 670 }, data: {
    content: 'Hola [Name], ¿vio nuestra propuesta de ahorro? Agenda una llamada rápida.',
    language: 'ES',
  }},

  // ── Stage 4: Proposal ──────────────────────────────────────────
  { id: 'stage-proposal', type: 'stage', position: { x: 1450, y: 0 }, data: {
    label: 'Proposal', funnelStage: '4',
    description: 'Site assessment → custom proposal',
  }},
  { id: 'tp-assessment', type: 'touchpoint', position: { x: 1450, y: 150 }, data: {
    label: 'Free Site Assessment (Scanner)', type: 'form',
    url: 'https://crm.solaris-panama.com/tools/scanner',
  }},
  { id: 'tp-proposal', type: 'touchpoint', position: { x: 1450, y: 300 }, data: {
    label: 'Custom Proposal PDF', type: 'page',
    url: 'https://crm.solaris-panama.com/tools/proposal-generator',
  }},
  { id: 'tp-call', type: 'touchpoint', position: { x: 1450, y: 450 }, data: {
    label: 'Video Call / In-Person Meeting', type: 'whatsapp',
  }},

  // ── Decision: Ready to close? ──────────────────────────────────
  { id: 'dec-close', type: 'decision', position: { x: 1450, y: 600 }, data: {
    question: 'Proposal accepted?',
    yesLabel: 'Sign', noLabel: 'Objections',
  }},

  // ── Stage 5: Close ─────────────────────────────────────────────
  { id: 'stage-close', type: 'stage', position: { x: 1800, y: 0 }, data: {
    label: 'Close', funnelStage: '5',
    description: 'Contract + deposit',
  }},
  { id: 'tp-contract', type: 'touchpoint', position: { x: 1800, y: 150 }, data: {
    label: 'Contract Signing (DocuSign)', type: 'page',
  }},
  { id: 'tp-deposit', type: 'touchpoint', position: { x: 1800, y: 300 }, data: {
    label: '30% Deposit via Wire/Stripe', type: 'page',
  }},
  { id: 'tp-onboard', type: 'touchpoint', position: { x: 1800, y: 450 }, data: {
    label: 'CRM Onboarding → Project Created', type: 'page',
    url: 'https://crm.solaris-panama.com/projects',
  }},

  // ── KPIs: Funnel Performance ───────────────────────────────────
  { id: 'kpi-cac', type: 'kpi', position: { x: 1800, y: 600 }, data: {
    label: 'CAC', value: '$80-120', target: '< $150', trend: 'down',
  }},
  { id: 'kpi-cr', type: 'kpi', position: { x: 2000, y: 600 }, data: {
    label: 'Lead → Close CR', value: '7%', target: '5-10%', trend: 'up',
  }},
  { id: 'kpi-cycle', type: 'kpi', position: { x: 1800, y: 750 }, data: {
    label: 'Sales Cycle', value: '4 mo avg', target: '2-9 mo', trend: 'down',
  }},
  { id: 'kpi-ltv', type: 'kpi', position: { x: 2000, y: 750 }, data: {
    label: 'LTV', value: '$8,000-25,000', target: '> $10K',
  }},
]

export const panamaFunnelEdges: Edge[] = [
  // Ads → Landing Pages
  { id: 'e-admeta-lpmain', source: 'ad-meta', target: 'lp-main', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-admeta-rt-lpcalc', source: 'ad-meta-retarget', target: 'lp-calculator', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adgoog-lpmain', source: 'ad-google', target: 'lp-main', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-adgoog-loc-lphotel', source: 'ad-google-local', target: 'lp-hotel', animated: true, style: { stroke: '#ef4444' } },

  // Landing Pages → Lead Magnets
  { id: 'e-lpmain-lmguide', source: 'lp-main', target: 'lm-guide', style: { stroke: '#f59e0b' } },
  { id: 'e-lphotel-lmroi', source: 'lp-hotel', target: 'lm-roi', style: { stroke: '#f59e0b' } },
  { id: 'e-lpcalc-lmroi', source: 'lp-calculator', target: 'lm-roi', style: { stroke: '#f59e0b' } },
  { id: 'e-lpmain-lmwa', source: 'lp-main', target: 'lm-whatsapp', style: { stroke: '#22c55e' } },

  // Lead Magnets → Decision
  { id: 'e-lmguide-dec', source: 'lm-guide', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmroi-dec', source: 'lm-roi', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmwa-dec', source: 'lm-whatsapp', target: 'dec-qualified', style: { stroke: '#27272a' } },

  // Decision → Nurture (yes) or Retarget (no)
  { id: 'e-dec-welcome', source: 'dec-qualified', target: 'email-welcome', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-dec-retarget', source: 'dec-qualified', target: 'ad-meta-retarget', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Email sequence flow
  { id: 'e-em1-em2', source: 'email-welcome', target: 'email-casestudy', style: { stroke: '#8b5cf6' } },
  { id: 'e-em2-em3', source: 'email-casestudy', target: 'email-financing', style: { stroke: '#8b5cf6' } },
  { id: 'e-em3-em4', source: 'email-financing', target: 'email-urgency', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-wa', source: 'email-urgency', target: 'msg-whatsapp-followup', style: { stroke: '#22c55e' } },

  // Nurture → Proposal
  { id: 'e-em4-assess', source: 'email-urgency', target: 'tp-assessment', style: { stroke: '#f59e0b' } },
  { id: 'e-wa-assess', source: 'msg-whatsapp-followup', target: 'tp-assessment', style: { stroke: '#22c55e' } },

  // Proposal flow
  { id: 'e-assess-prop', source: 'tp-assessment', target: 'tp-proposal', style: { stroke: '#27272a' } },
  { id: 'e-prop-call', source: 'tp-proposal', target: 'tp-call', style: { stroke: '#27272a' } },
  { id: 'e-call-dec', source: 'tp-call', target: 'dec-close', style: { stroke: '#27272a' } },

  // Close decision
  { id: 'e-decclose-contract', source: 'dec-close', target: 'tp-contract', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-nurture', source: 'dec-close', target: 'email-financing', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Close flow
  { id: 'e-contract-deposit', source: 'tp-contract', target: 'tp-deposit', style: { stroke: '#27272a' } },
  { id: 'e-deposit-onboard', source: 'tp-deposit', target: 'tp-onboard', style: { stroke: '#27272a' } },

  // Stage connectors
  { id: 'e-st1-st2', source: 'stage-landing', target: 'stage-leadmag', style: { stroke: '#f59e0b' } },
  { id: 'e-st2-st3', source: 'stage-leadmag', target: 'stage-nurture', style: { stroke: '#f59e0b' } },
  { id: 'e-st3-st4', source: 'stage-nurture', target: 'stage-proposal', style: { stroke: '#f59e0b' } },
  { id: 'e-st4-st5', source: 'stage-proposal', target: 'stage-close', style: { stroke: '#f59e0b' } },
]
