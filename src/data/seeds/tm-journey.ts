import type { Node, Edge } from '@xyflow/react'

export const tmJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'The Expat Resort Owner', demographics: 'Western expat, boutique hotel/resort on Koh Phangan or Samui, thinks in USD/EUR',
    painPoints: ['PEA bills $2,000-8,000/mo', 'Grid outages hurt guest experience', 'Eco-branding competitive pressure'],
    channels: ['Facebook Expat Groups', 'Email (EN)', 'LINE'], color: '#8b5cf6',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'The Thai Business Owner', demographics: 'Local restaurant, dive shop or spa owner, Thai language, price-sensitive',
    painPoints: ['Rising PEA electricity costs', 'Needs clear ROI proof in THB', 'Skeptical of foreign contractors'],
    channels: ['LINE (TH)', 'Word of mouth', 'In-person'], color: '#06b6d4',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'The Island Property Developer', demographics: 'Building new villas or condos, targets premium international buyers',
    painPoints: ['Buyers demand solar-ready design', 'Grid connection costs on new plots', 'Differentiating in luxury market'],
    channels: ['Email (EN)', 'Referrals', 'WhatsApp'], color: '#f97316',
  }},
  { id: 'p4', type: 'persona', position: { x: 0, y: 600 }, data: {
    name: 'The Eco-Tourism Operator', demographics: 'Diving, yoga or wellness retreat, sustainability is core brand identity',
    painPoints: ['Carbon-neutral certification requires solar', 'Guests ask about green credentials', 'High daytime energy load from facilities'],
    channels: ['Instagram', 'Email (EN)', 'LINE'], color: '#22c55e',
  }},
  { id: 'p5', type: 'persona', position: { x: 0, y: 800 }, data: {
    name: 'The Residential Expat', demographics: 'Long-term expat living on island, 1-2 year lease or owns home',
    painPoints: ['PEA bills 3-5x Western rates', 'Frequent outages damage appliances', 'No local support for self-install'],
    channels: ['Facebook Expat Groups', 'LINE (EN)', 'WhatsApp'], color: '#f43f5e',
  }},

  // Awareness stage
  { id: 's1', type: 'stage', position: { x: 300, y: 150 }, data: { label: 'Awareness', funnelStage: '1' } },
  { id: 't1', type: 'touchpoint', position: { x: 300, y: 300 }, data: { label: 'TM Energy Website', type: 'page', url: 'https://energy-tm.com' } },
  { id: 't2', type: 'touchpoint', position: { x: 300, y: 450 }, data: { label: 'Instagram @tmenergy.th', type: 'ad', url: 'https://instagram.com/tmenergy.th' } },
  { id: 'm1', type: 'message', position: { x: 300, y: 620 }, data: { content: 'Cut your island electricity bill by 60%. Solar designed for Thailand\'s islands.', language: 'EN' } },
  { id: 'm2', type: 'message', position: { x: 300, y: 760 }, data: { content: 'ลดค่าไฟ 60% ด้วยโซลาร์เซลล์ ออกแบบเฉพาะสำหรับเกาะไทย', language: 'TH' } },

  // Interest stage
  { id: 's2', type: 'stage', position: { x: 650, y: 150 }, data: { label: 'Interest', funnelStage: '2' } },
  { id: 't3', type: 'touchpoint', position: { x: 650, y: 300 }, data: { label: 'ROI Calculator', type: 'page', url: 'https://energy-tm.com/tools/calculator' } },
  { id: 't4', type: 'touchpoint', position: { x: 650, y: 450 }, data: { label: 'LINE First Contact', type: 'whatsapp', url: 'https://line.me/ti/p/@tmenergy' } },
  { id: 't5', type: 'touchpoint', position: { x: 650, y: 600 }, data: { label: 'Island Solar Guide PDF', type: 'page', url: 'https://energy-tm.com/guide' } },

  // Consideration stage
  { id: 's3', type: 'stage', position: { x: 1000, y: 150 }, data: { label: 'Consideration', funnelStage: '3' } },
  { id: 'd1', type: 'decision', position: { x: 1000, y: 300 }, data: { question: 'Submits energy audit request?', yesLabel: 'Yes', noLabel: 'No' } },
  { id: 't6', type: 'touchpoint', position: { x: 1000, y: 470 }, data: { label: 'Free Energy Audit Form', type: 'form', url: 'https://energy-tm.com/audit' } },
  { id: 't7', type: 'touchpoint', position: { x: 1000, y: 620 }, data: { label: 'Site Visit Scheduling', type: 'whatsapp', url: 'https://line.me/ti/p/@tmenergy' } },

  // Decision stage
  { id: 's4', type: 'stage', position: { x: 1350, y: 150 }, data: { label: 'Decision', funnelStage: '4' } },
  { id: 't8', type: 'touchpoint', position: { x: 1350, y: 300 }, data: { label: 'Custom Proposal + ROI Report', type: 'page', url: 'https://energy-tm.com/tools/proposal' } },
  { id: 't9', type: 'touchpoint', position: { x: 1350, y: 450 }, data: { label: 'In-Person Presentation', type: 'whatsapp' } },
  { id: 'k1', type: 'kpi', position: { x: 1350, y: 620 }, data: { label: 'Avg Sales Cycle', value: '1-4 mo', target: '< 2 mo' } },

  // Conversion stage
  { id: 's5', type: 'stage', position: { x: 1700, y: 150 }, data: { label: 'Conversion', funnelStage: '5' } },
  { id: 't10', type: 'touchpoint', position: { x: 1700, y: 300 }, data: { label: 'Contract Signing', type: 'page' } },
  { id: 't11', type: 'touchpoint', position: { x: 1700, y: 450 }, data: { label: '30% Deposit — Bank Transfer / PromptPay', type: 'page' } },
  { id: 'k2', type: 'kpi', position: { x: 1700, y: 620 }, data: { label: 'Target CR', value: '8-15%', trend: 'up' } },
]

export const tmJourneyEdges: Edge[] = [
  // Personas → Awareness
  { id: 'e-p1-s1', source: 'p1', target: 's1', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e-p2-s1', source: 'p2', target: 's1', animated: true, style: { stroke: '#06b6d4' } },
  { id: 'e-p3-s1', source: 'p3', target: 's1', animated: true, style: { stroke: '#f97316' } },
  { id: 'e-p4-s1', source: 'p4', target: 's1', animated: true, style: { stroke: '#22c55e' } },
  { id: 'e-p5-s1', source: 'p5', target: 's1', animated: true, style: { stroke: '#f43f5e' } },
  // Stage flow
  { id: 'e-s1-s2', source: 's1', target: 's2', style: { stroke: '#f59e0b' } },
  { id: 'e-s2-s3', source: 's2', target: 's3', style: { stroke: '#f59e0b' } },
  { id: 'e-s3-s4', source: 's3', target: 's4', style: { stroke: '#f59e0b' } },
  { id: 'e-s4-s5', source: 's4', target: 's5', style: { stroke: '#f59e0b' } },
  // Touchpoints — Awareness
  { id: 'e-s1-t1', source: 's1', target: 't1', style: { stroke: '#27272a' } },
  { id: 'e-s1-t2', source: 's1', target: 't2', style: { stroke: '#27272a' } },
  { id: 'e-t1-m1', source: 't1', target: 'm1', style: { stroke: '#27272a' } },
  { id: 'e-t1-m2', source: 't1', target: 'm2', style: { stroke: '#27272a' } },
  // Touchpoints — Interest
  { id: 'e-s2-t3', source: 's2', target: 't3', style: { stroke: '#27272a' } },
  { id: 'e-s2-t4', source: 's2', target: 't4', style: { stroke: '#27272a' } },
  { id: 'e-s2-t5', source: 's2', target: 't5', style: { stroke: '#27272a' } },
  // Touchpoints — Consideration
  { id: 'e-s3-d1', source: 's3', target: 'd1', style: { stroke: '#27272a' } },
  { id: 'e-d1-t6', source: 'd1', target: 't6', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-t6-t7', source: 't6', target: 't7', style: { stroke: '#27272a' } },
  // Touchpoints — Decision
  { id: 'e-s4-t8', source: 's4', target: 't8', style: { stroke: '#27272a' } },
  { id: 'e-s4-t9', source: 's4', target: 't9', style: { stroke: '#27272a' } },
  { id: 'e-s4-k1', source: 's4', target: 'k1', style: { stroke: '#27272a' } },
  // Touchpoints — Conversion
  { id: 'e-s5-t10', source: 's5', target: 't10', style: { stroke: '#27272a' } },
  { id: 'e-s5-t11', source: 's5', target: 't11', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
