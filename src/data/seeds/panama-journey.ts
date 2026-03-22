import type { Node, Edge } from '@xyflow/react'

export const panamaJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'The Expat Entrepreneur', demographics: 'Hotel/resort owner, North American/European, thinks in USD',
    painPoints: ['High electricity costs', 'Grid unreliability', 'Eco-branding needs'],
    channels: ['WhatsApp (EN)', 'Email'], color: '#8b5cf6',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'The Chain Manager', demographics: 'Corporate supermarket manager, requires HQ approval',
    painPoints: ['Massive electricity bills', 'Flat roof opportunity', 'Corporate sustainability goals'],
    channels: ['Email', 'In-person'], color: '#06b6d4',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'The Finca Owner', demographics: 'Agricultural landowner, traditional, relationship-first',
    painPoints: ['Rising costs', 'Land underutilization', 'Off-grid needs'],
    channels: ['Personal intro', 'WhatsApp (ES)'], color: '#f97316',
  }},

  // Awareness stage
  { id: 's1', type: 'stage', position: { x: 300, y: 100 }, data: { label: 'Awareness', funnelStage: '1' } },
  { id: 't1', type: 'touchpoint', position: { x: 300, y: 250 }, data: { label: 'Landing Page (Expats)', type: 'page', url: 'https://solaris-panama.com' } },
  { id: 't2', type: 'touchpoint', position: { x: 300, y: 400 }, data: { label: 'Landing Page (Hotels)', type: 'page', url: 'https://solaris-panama.com/towns/solar-pedasi.html' } },
  { id: 'm1', type: 'message', position: { x: 300, y: 550 }, data: { content: 'Su Techo Ya Genera Dinero. Solo Falta Activarlo.', language: 'ES' } },

  // Interest stage
  { id: 's2', type: 'stage', position: { x: 600, y: 100 }, data: { label: 'Interest', funnelStage: '2' } },
  { id: 't3', type: 'touchpoint', position: { x: 600, y: 250 }, data: { label: 'ROI Calculator', type: 'page', url: 'https://crm.solaris-panama.com/tools/calculator' } },
  { id: 't4', type: 'touchpoint', position: { x: 600, y: 400 }, data: { label: 'WhatsApp First Contact', type: 'whatsapp' } },

  // Consideration stage
  { id: 's3', type: 'stage', position: { x: 900, y: 100 }, data: { label: 'Consideration', funnelStage: '3' } },
  { id: 'd1', type: 'decision', position: { x: 900, y: 250 }, data: { question: 'Fills form?', yesLabel: 'Yes', noLabel: 'No' } },
  { id: 't5', type: 'touchpoint', position: { x: 900, y: 420 }, data: { label: 'Free Site Assessment', type: 'form', url: 'https://crm.solaris-panama.com/tools/scanner' } },

  // Decision stage
  { id: 's4', type: 'stage', position: { x: 1200, y: 100 }, data: { label: 'Decision', funnelStage: '4' } },
  { id: 't6', type: 'touchpoint', position: { x: 1200, y: 250 }, data: { label: 'Custom Proposal (EPC vs PPA)', type: 'page', url: 'https://crm.solaris-panama.com/tools/proposal-generator' } },
  { id: 'k1', type: 'kpi', position: { x: 1200, y: 420 }, data: { label: 'Avg Cycle', value: '2-9 mo', target: '< 3 mo' } },

  // Conversion stage
  { id: 's5', type: 'stage', position: { x: 1500, y: 100 }, data: { label: 'Conversion', funnelStage: '5' } },
  { id: 't7', type: 'touchpoint', position: { x: 1500, y: 250 }, data: { label: 'Contract Signing', type: 'page' } },
  { id: 'k2', type: 'kpi', position: { x: 1500, y: 420 }, data: { label: 'Target CR', value: '5-10%', trend: 'up' } },
]

export const panamaJourneyEdges: Edge[] = [
  // Personas → Awareness
  { id: 'e-p1-s1', source: 'p1', target: 's1', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e-p2-s1', source: 'p2', target: 's1', animated: true, style: { stroke: '#06b6d4' } },
  { id: 'e-p3-s1', source: 'p3', target: 's1', animated: true, style: { stroke: '#f97316' } },
  // Stage flow
  { id: 'e-s1-s2', source: 's1', target: 's2', style: { stroke: '#f59e0b' } },
  { id: 'e-s2-s3', source: 's2', target: 's3', style: { stroke: '#f59e0b' } },
  { id: 'e-s3-s4', source: 's3', target: 's4', style: { stroke: '#f59e0b' } },
  { id: 'e-s4-s5', source: 's4', target: 's5', style: { stroke: '#f59e0b' } },
  // Touchpoints
  { id: 'e-s1-t1', source: 's1', target: 't1', style: { stroke: '#27272a' } },
  { id: 'e-s1-t2', source: 's1', target: 't2', style: { stroke: '#27272a' } },
  { id: 'e-t2-m1', source: 't2', target: 'm1', style: { stroke: '#27272a' } },
  { id: 'e-s2-t3', source: 's2', target: 't3', style: { stroke: '#27272a' } },
  { id: 'e-s2-t4', source: 's2', target: 't4', style: { stroke: '#27272a' } },
  { id: 'e-s3-d1', source: 's3', target: 'd1', style: { stroke: '#27272a' } },
  { id: 'e-d1-t5', source: 'd1', target: 't5', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-s4-t6', source: 's4', target: 't6', style: { stroke: '#27272a' } },
  { id: 'e-s4-k1', source: 's4', target: 'k1', style: { stroke: '#27272a' } },
  { id: 'e-s5-t7', source: 's5', target: 't7', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
