import type { Node, Edge } from '@xyflow/react'

export const israelJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'מתקין עצמאי', demographics: 'עסק של 1-3 אנשים, פרויקטים רזידנציאליים, עובד עם אקסל ו-WhatsApp',
    painPoints: ['אין מעקב לידים מסודר', 'מסמכים אבודים ב-WhatsApp', 'מחיר לא אחיד ללקוחות'],
    channels: ['WhatsApp', 'אינסטגרם'], color: '#f97316',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'חברת EPC בינונית', demographics: '10-30 עובדים, פרויקטים מסחריים ותעשייתיים, צוותים מרובים',
    painPoints: ['ניהול פרויקטים כבד', 'פיקוח על מספר אתרים', 'דיווח ללקוחות מסורבל'],
    channels: ['Email', 'לינקדאין', 'שיחות ישירות'], color: '#06b6d4',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'יועץ אנרגיה', demographics: 'יועץ עצמאי לעסקים ומוסדות, צריך כלי ROI מקצועי ודוחות מכירה',
    painPoints: ['חישוב ROI ידני', 'אין כלי הצעת מחיר מקצועי', 'קשה להציג ערך ללקוחות'],
    channels: ['לינקדאין', 'Email', 'רשתות מקצועיות'], color: '#8b5cf6',
  }},
  { id: 'p4', type: 'persona', position: { x: 0, y: 600 }, data: {
    name: 'קבלן גגות', demographics: 'קבלן ותיק שמתרחב לסולאר, חסר ידע בתחום, מחפש כלים וליווי',
    painPoints: ['אין ידע בסולאר', 'פחד מטעויות טכניות', 'תחרות עם חברות מבוססות'],
    channels: ['פייסבוק', 'WhatsApp', 'המלצות'], color: '#22c55e',
  }},
  { id: 'p5', type: 'persona', position: { x: 0, y: 800 }, data: {
    name: 'מנהל תחזוקה', demographics: 'מנהל O&M לפורטפוליו גדול של מערכות, צריך דשבורד ניטור + התראות',
    painPoints: ['ניטור ידני של עשרות מערכות', 'התראות מאוחרות על תקלות', 'דוחות ביצועים מסורבלים'],
    channels: ['Email', 'פלטפורמות ניטור'], color: '#ef4444',
  }},

  // מודעות — Awareness stage
  { id: 's1', type: 'stage', position: { x: 300, y: 200 }, data: { label: 'מודעות', funnelStage: '1' } },
  { id: 't1', type: 'touchpoint', position: { x: 300, y: 350 }, data: { label: 'אתר Solar OS', type: 'page', url: 'https://solar-os.com' } },
  { id: 't2', type: 'touchpoint', position: { x: 300, y: 500 }, data: { label: 'פרסום גוגל — "CRM סולארי"', type: 'ad', url: 'https://ads.google.com' } },
  { id: 'm1', type: 'message', position: { x: 300, y: 650 }, data: { content: 'נהל 50 פרויקטים בלי אקסל. Solar OS — CRM לחברות סולאר ישראליות.', language: 'HE' } },

  // עניין — Interest stage
  { id: 's2', type: 'stage', position: { x: 600, y: 200 }, data: { label: 'עניין', funnelStage: '2' } },
  { id: 't3', type: 'touchpoint', position: { x: 600, y: 350 }, data: { label: 'דף פיצ\'רים', type: 'page', url: 'https://solar-os.com/features' } },
  { id: 't4', type: 'touchpoint', position: { x: 600, y: 500 }, data: { label: 'וובינר — ניהול 50 פרויקטים', type: 'page', url: 'https://solar-os.com/demo' } },
  { id: 't5', type: 'touchpoint', position: { x: 600, y: 650 }, data: { label: 'WhatsApp — יצירת קשר ראשונית', type: 'whatsapp' } },

  // שיקול — Consideration stage
  { id: 's3', type: 'stage', position: { x: 900, y: 200 }, data: { label: 'שיקול', funnelStage: '3' } },
  { id: 'd1', type: 'decision', position: { x: 900, y: 350 }, data: { question: 'נרשם לניסיון חינם?', yesLabel: 'כן', noLabel: 'לא' } },
  { id: 't6', type: 'touchpoint', position: { x: 900, y: 520 }, data: { label: 'ניסיון חינם — 14 יום', type: 'form', url: 'https://app.solar-os.com/login?mode=signup' } },
  { id: 't7', type: 'touchpoint', position: { x: 900, y: 670 }, data: { label: 'שיחת דמו עם צוות', type: 'whatsapp', url: 'https://solar-os.com/demo' } },

  // החלטה — Decision stage
  { id: 's4', type: 'stage', position: { x: 1200, y: 200 }, data: { label: 'החלטה', funnelStage: '4' } },
  { id: 't8', type: 'touchpoint', position: { x: 1200, y: 350 }, data: { label: 'דף תמחור', type: 'page', url: 'https://solar-os.com/pricing' } },
  { id: 't9', type: 'touchpoint', position: { x: 1200, y: 500 }, data: { label: 'הצעה אישית + מיגרציה חינם', type: 'email' } },
  { id: 'k1', type: 'kpi', position: { x: 1200, y: 650 }, data: { label: 'Trial→Paid CR', value: '15-25%', target: '> 20%', trend: 'up' } },

  // הצטרפות — Onboarding stage
  { id: 's5', type: 'stage', position: { x: 1500, y: 200 }, data: { label: 'הצטרפות', funnelStage: '5' } },
  { id: 't10', type: 'touchpoint', position: { x: 1500, y: 350 }, data: { label: 'Stripe Checkout', type: 'page', url: 'https://app.solar-os.com/login?mode=signup' } },
  { id: 't11', type: 'touchpoint', position: { x: 1500, y: 500 }, data: { label: 'Onboarding — CRM Setup', type: 'page', url: 'https://app.solar-os.com' } },
  { id: 'k2', type: 'kpi', position: { x: 1500, y: 650 }, data: { label: 'Churn', value: '< 5%/mo', trend: 'down' } },
]

export const israelJourneyEdges: Edge[] = [
  // Personas → Awareness
  { id: 'e-p1-s1', source: 'p1', target: 's1', animated: true, style: { stroke: '#f97316' } },
  { id: 'e-p2-s1', source: 'p2', target: 's1', animated: true, style: { stroke: '#06b6d4' } },
  { id: 'e-p3-s1', source: 'p3', target: 's1', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e-p4-s1', source: 'p4', target: 's1', animated: true, style: { stroke: '#22c55e' } },
  { id: 'e-p5-s1', source: 'p5', target: 's1', animated: true, style: { stroke: '#ef4444' } },
  // Stage flow
  { id: 'e-s1-s2', source: 's1', target: 's2', style: { stroke: '#f59e0b' } },
  { id: 'e-s2-s3', source: 's2', target: 's3', style: { stroke: '#f59e0b' } },
  { id: 'e-s3-s4', source: 's3', target: 's4', style: { stroke: '#f59e0b' } },
  { id: 'e-s4-s5', source: 's4', target: 's5', style: { stroke: '#f59e0b' } },
  // Touchpoints — Awareness
  { id: 'e-s1-t1', source: 's1', target: 't1', style: { stroke: '#27272a' } },
  { id: 'e-s1-t2', source: 's1', target: 't2', style: { stroke: '#27272a' } },
  { id: 'e-t1-m1', source: 't1', target: 'm1', style: { stroke: '#27272a' } },
  // Touchpoints — Interest
  { id: 'e-s2-t3', source: 's2', target: 't3', style: { stroke: '#27272a' } },
  { id: 'e-s2-t4', source: 's2', target: 't4', style: { stroke: '#27272a' } },
  { id: 'e-s2-t5', source: 's2', target: 't5', style: { stroke: '#27272a' } },
  // Decision — Consideration
  { id: 'e-s3-d1', source: 's3', target: 'd1', style: { stroke: '#27272a' } },
  { id: 'e-d1-t6', source: 'd1', target: 't6', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-d1-t7', source: 'd1', target: 't7', sourceHandle: 'no', style: { stroke: '#ef4444' } },
  // Touchpoints — Decision
  { id: 'e-s4-t8', source: 's4', target: 't8', style: { stroke: '#27272a' } },
  { id: 'e-s4-t9', source: 's4', target: 't9', style: { stroke: '#27272a' } },
  { id: 'e-s4-k1', source: 's4', target: 'k1', style: { stroke: '#27272a' } },
  // Touchpoints — Onboarding
  { id: 'e-s5-t10', source: 's5', target: 't10', style: { stroke: '#27272a' } },
  { id: 'e-s5-t11', source: 's5', target: 't11', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
