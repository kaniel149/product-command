import type { Node, Edge } from '@xyflow/react'

export const usaJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'The Solo Installer', demographics: '1-2 person residential solar business, owner-operator, uses spreadsheets',
    painPoints: ['No CRM — losing leads in inbox', 'Can\'t afford enterprise software', 'Spends evenings on paperwork'],
    channels: ['Google Search', 'Facebook Solar Groups', 'Email'], color: '#8b5cf6',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'The Growing Contractor', demographics: '10-25 employees, residential + small commercial, scaling fast',
    painPoints: ['Projects fall through the cracks', 'Sales team has no visibility', 'Needs real-time project management'],
    channels: ['LinkedIn', 'Google Ads', 'Industry conferences'], color: '#06b6d4',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'The Sales Manager', demographics: 'Works at mid-size solar company, manages team of 5-10 reps',
    painPoints: ['No pipeline visibility', 'Reps use different tools', 'Can\'t forecast revenue accurately'],
    channels: ['G2', 'Capterra', 'LinkedIn', 'Email'], color: '#f97316',
  }},
  { id: 'p4', type: 'persona', position: { x: 0, y: 600 }, data: {
    name: 'The Operations Director', demographics: 'Large installer 50+ employees, needs monitoring, dispatch, and O&M tools',
    painPoints: ['No single source of truth', 'Manual scheduling wastes hours daily', 'Cannot track fleet health across sites'],
    channels: ['LinkedIn', 'Industry webinars', 'Peer referrals'], color: '#22c55e',
  }},
  { id: 'p5', type: 'persona', position: { x: 0, y: 800 }, data: {
    name: 'The Solar Consultant', demographics: 'Independent energy advisor, no field crew, serves homeowners and businesses',
    painPoints: ['Proposal generation is slow', 'Clients want ROI data fast', 'Needs professional branded outputs'],
    channels: ['Google Search', 'Referrals', 'Email', 'Reddit r/solar'], color: '#f43f5e',
  }},

  // Awareness stage
  { id: 's1', type: 'stage', position: { x: 300, y: 150 }, data: { label: 'Awareness', funnelStage: '1' } },
  { id: 't1', type: 'touchpoint', position: { x: 300, y: 300 }, data: { label: 'Solar OS USA Website', type: 'page', url: 'https://usasolaros.com' } },
  { id: 't2', type: 'touchpoint', position: { x: 300, y: 450 }, data: { label: 'G2 / Capterra Listings', type: 'page', url: 'https://g2.com' } },
  { id: 'm1', type: 'message', position: { x: 300, y: 620 }, data: { content: 'The CRM built for solar installers. Close more deals, install faster, grow your business.', language: 'EN' } },
  { id: 'm2', type: 'message', position: { x: 300, y: 760 }, data: { content: 'Stop losing leads in spreadsheets. Solar OS gives you a full sales pipeline in under 10 minutes.', language: 'EN' } },

  // Interest stage
  { id: 's2', type: 'stage', position: { x: 650, y: 150 }, data: { label: 'Interest', funnelStage: '2' } },
  { id: 't3', type: 'touchpoint', position: { x: 650, y: 300 }, data: { label: 'ROI Calculator', type: 'page', url: 'https://usasolaros.com/calculator' } },
  { id: 't4', type: 'touchpoint', position: { x: 650, y: 450 }, data: { label: 'Feature Demo Video', type: 'page', url: 'https://usasolaros.com/demo' } },
  { id: 't5', type: 'touchpoint', position: { x: 650, y: 600 }, data: { label: '"Solar Business Growth Playbook" PDF', type: 'page', url: 'https://usasolaros.com/playbook' } },

  // Consideration stage
  { id: 's3', type: 'stage', position: { x: 1000, y: 150 }, data: { label: 'Consideration', funnelStage: '3' } },
  { id: 'd1', type: 'decision', position: { x: 1000, y: 300 }, data: { question: 'Starts free trial?', yesLabel: 'Yes', noLabel: 'No' } },
  { id: 't6', type: 'touchpoint', position: { x: 1000, y: 470 }, data: { label: '14-Day Free Trial Signup', type: 'form', url: 'https://app.usasolaros.com/signup' } },
  { id: 't7', type: 'touchpoint', position: { x: 1000, y: 620 }, data: { label: 'Live Webinar: Solar CRM Demo', type: 'page', url: 'https://usasolaros.com/webinar' } },

  // Decision stage
  { id: 's4', type: 'stage', position: { x: 1350, y: 150 }, data: { label: 'Decision', funnelStage: '4' } },
  { id: 't8', type: 'touchpoint', position: { x: 1350, y: 300 }, data: { label: 'Demo Call + Migration Plan', type: 'page', url: 'https://app.usasolaros.com' } },
  { id: 't9', type: 'touchpoint', position: { x: 1350, y: 450 }, data: { label: 'Competitor Comparison Guide', type: 'page', url: 'https://usasolaros.com/compare' } },
  { id: 'k1', type: 'kpi', position: { x: 1350, y: 620 }, data: { label: 'Trial → Paid CR', value: '12-20%', target: '> 15%' } },

  // Onboarding stage
  { id: 's5', type: 'stage', position: { x: 1700, y: 150 }, data: { label: 'Onboarding', funnelStage: '5' } },
  { id: 't10', type: 'touchpoint', position: { x: 1700, y: 300 }, data: { label: 'Stripe Checkout ($49-$399/mo)', type: 'page', url: 'https://app.usasolaros.com/billing' } },
  { id: 't11', type: 'touchpoint', position: { x: 1700, y: 450 }, data: { label: 'Team Onboarding Call', type: 'page', url: 'https://app.usasolaros.com' } },
  { id: 'k2', type: 'kpi', position: { x: 1700, y: 620 }, data: { label: 'MRR Target', value: '$50K', trend: 'up' } },
]

export const usaJourneyEdges: Edge[] = [
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
  // Touchpoints — Onboarding
  { id: 'e-s5-t10', source: 's5', target: 't10', style: { stroke: '#27272a' } },
  { id: 'e-s5-t11', source: 's5', target: 't11', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
