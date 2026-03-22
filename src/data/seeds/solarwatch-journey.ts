import type { Node, Edge } from '@xyflow/react'

export const solarwatchJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'מנהל פרויקטים בחברת בנייה', demographics: 'חברת בנייה גדולה, מנהל 5-15 פרויקטים במקביל, אחראי על פיקוח התקנות סולאריות על גגות מסחריים',
    painPoints: ['קושי לעקוב אחר מספר שותפים במקביל', 'תיעוד ידני מביא לטעויות ועיכובים', 'קשה להוכיח עמידה בתקנות מול רשויות'],
    channels: ['LinkedIn', 'כנסי בנייה', 'הפניות עמיתים'], color: '#3b82f6',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'מפקח בנייה ממשלתי', demographics: 'עובד מדינה / רשות מקומית, אחראי על אישורים ובטיחות, עבודה עם תקנות מחמירות',
    painPoints: ['חוסר שקיפות בתהליכי ההתקנה', 'ניירת ידנית ומיושנת', 'קשה לאכוף תקנות בשטח בזמן אמת'],
    channels: ['כנסי ממשלה', 'מכרזים ציבוריים', 'Email רשמי'], color: '#6366f1',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'שותף ראשי', demographics: 'מנהל 3-8 שותפי משנה, אחראי על לוח זמנים ותקציב, עובד עם מספר פרויקטים בו-זמנית',
    painPoints: ['קשה לתאם בין שותפים סולאריים', 'עיכובים גורמים לקנסות חוזיים', 'ניהול מסמכים מפוזר בין WhatsApp ואימייל'],
    channels: ['WhatsApp', 'הפניות קולגות', 'כנסי שותפים'], color: '#f97316',
  }},
  { id: 'p4', type: 'persona', position: { x: 0, y: 600 }, data: {
    name: 'מנהל נכסים', demographics: 'מנהל תיק נכסים מסחריים 10-50 בניינים, מעוניין להוסיף סולאר לנכסים, מחפש ROI ברור',
    painPoints: ['חוסר נראות על מצב פרויקטי הסולאר', 'פיזור תקציב בין ספקים שונים', 'דיירים מצפים לשקיפות ועדכונים'],
    channels: ['LinkedIn', 'כנסי נדלן', 'Email'], color: '#22c55e',
  }},
  { id: 'p5', type: 'persona', position: { x: 0, y: 800 }, data: {
    name: 'ראש מועצה / קיבוץ', demographics: 'אחראי על תקציב קהילתי, פרויקטי סולאר קהילתיים, נדרשת שקיפות מלאה לחברים',
    painPoints: ['חברי קהילה דורשים שקיפות מלאה', 'ניהול ספקים מרובים ללא כלי מרכזי', 'עמידה בדדליינים עם עין ציבורית'],
    channels: ['הפניות אישיות', 'כנסי רשויות', 'WhatsApp'], color: '#ec4899',
  }},

  // מודעות — Awareness
  { id: 's1', type: 'stage', position: { x: 350, y: 100 }, data: { label: 'מודעות', funnelStage: '1', description: 'גילוי הפלטפורמה דרך ערוצים מקצועיים' } },
  { id: 't1', type: 'touchpoint', position: { x: 350, y: 280 }, data: { label: 'LinkedIn Ad — מנהלי פרויקטים', type: 'ad' } },
  { id: 't2', type: 'touchpoint', position: { x: 350, y: 430 }, data: { label: 'כנס בנייה / אנרגיה מתחדשת', type: 'page' } },
  { id: 't3', type: 'touchpoint', position: { x: 350, y: 580 }, data: { label: 'הפניה מקולגה בתעשייה', type: 'page' } },
  { id: 'm1', type: 'message', position: { x: 350, y: 730 }, data: {
    content: 'פיקוח על שותפי סולאר — הכל במקום אחד. מסמכים, לוחות זמנים, עמידה בתקנות.',
    language: 'HE',
  }},

  // עניין — Interest
  { id: 's2', type: 'stage', position: { x: 700, y: 100 }, data: { label: 'עניין', funnelStage: '2', description: 'חקירה ראשונית של הפתרון' } },
  { id: 't4', type: 'touchpoint', position: { x: 700, y: 280 }, data: { label: 'דמו פלטפורמה (מודרך)', type: 'page', url: 'https://solarwatch.vercel.app' } },
  { id: 't5', type: 'touchpoint', position: { x: 700, y: 430 }, data: { label: 'מדריך PDF — פיקוח סולאר', type: 'page' } },
  { id: 't6', type: 'touchpoint', position: { x: 700, y: 580 }, data: { label: 'WhatsApp — שאלות ראשוניות', type: 'whatsapp' } },

  // שיקול — Consideration
  { id: 's3', type: 'stage', position: { x: 1050, y: 100 }, data: { label: 'שיקול', funnelStage: '3', description: 'הערכה מעמיקה מול מתחרים' } },
  { id: 'd1', type: 'decision', position: { x: 1050, y: 280 }, data: { question: 'יש פורטפוליו של 3+ פרויקטים?', yesLabel: 'כן', noLabel: 'לא' } },
  { id: 't7', type: 'touchpoint', position: { x: 1050, y: 480 }, data: { label: 'ביקורת ציות חינמית', type: 'form', url: 'https://solarwatch.vercel.app' } },
  { id: 't8', type: 'touchpoint', position: { x: 1050, y: 630 }, data: { label: 'מפגש הדגמה פרונטלי', type: 'page' } },

  // החלטה — Decision
  { id: 's4', type: 'stage', position: { x: 1400, y: 100 }, data: { label: 'החלטה', funnelStage: '4', description: 'דיון חוזה ותמחור' } },
  { id: 't9', type: 'touchpoint', position: { x: 1400, y: 280 }, data: { label: 'הצעת מחיר מותאמת אישית', type: 'page' } },
  { id: 't10', type: 'touchpoint', position: { x: 1400, y: 430 }, data: { label: 'שיחת Zoom עם הנהלה', type: 'whatsapp' } },
  { id: 'k1', type: 'kpi', position: { x: 1400, y: 580 }, data: { label: 'מחזור מכירה', value: '3-6 חודשים', target: '< 4 חודשים', trend: 'down' } },

  // שימוש — Adoption
  { id: 's5', type: 'stage', position: { x: 1750, y: 100 }, data: { label: 'שימוש', funnelStage: '5', description: 'הטמעה וסקייל' } },
  { id: 't11', type: 'touchpoint', position: { x: 1750, y: 280 }, data: { label: 'Onboarding + הדרכה בפלטפורמה', type: 'page', url: 'https://solarwatch.vercel.app' } },
  { id: 't12', type: 'touchpoint', position: { x: 1750, y: 430 }, data: { label: 'פיילוט — פרויקט ראשון', type: 'page' } },
  { id: 'k2', type: 'kpi', position: { x: 1750, y: 580 }, data: { label: 'CR ממשוחרר לחוזה', value: '10-20%', trend: 'up' } },
]

export const solarwatchJourneyEdges: Edge[] = [
  // Personas → Awareness
  { id: 'e-p1-s1', source: 'p1', target: 's1', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-p2-s1', source: 'p2', target: 's1', animated: true, style: { stroke: '#6366f1' } },
  { id: 'e-p3-s1', source: 'p3', target: 's1', animated: true, style: { stroke: '#f97316' } },
  { id: 'e-p4-s1', source: 'p4', target: 's1', animated: true, style: { stroke: '#22c55e' } },
  { id: 'e-p5-s1', source: 'p5', target: 's1', animated: true, style: { stroke: '#ec4899' } },

  // Stage backbone
  { id: 'e-s1-s2', source: 's1', target: 's2', style: { stroke: '#f59e0b' } },
  { id: 'e-s2-s3', source: 's2', target: 's3', style: { stroke: '#f59e0b' } },
  { id: 'e-s3-s4', source: 's3', target: 's4', style: { stroke: '#f59e0b' } },
  { id: 'e-s4-s5', source: 's4', target: 's5', style: { stroke: '#f59e0b' } },

  // Awareness touchpoints
  { id: 'e-s1-t1', source: 's1', target: 't1', style: { stroke: '#27272a' } },
  { id: 'e-s1-t2', source: 's1', target: 't2', style: { stroke: '#27272a' } },
  { id: 'e-s1-t3', source: 's1', target: 't3', style: { stroke: '#27272a' } },
  { id: 'e-t1-m1', source: 't1', target: 'm1', style: { stroke: '#27272a' } },

  // Interest touchpoints
  { id: 'e-s2-t4', source: 's2', target: 't4', style: { stroke: '#27272a' } },
  { id: 'e-s2-t5', source: 's2', target: 't5', style: { stroke: '#27272a' } },
  { id: 'e-s2-t6', source: 's2', target: 't6', style: { stroke: '#22c55e' } },

  // Consideration
  { id: 'e-s3-d1', source: 's3', target: 'd1', style: { stroke: '#27272a' } },
  { id: 'e-d1-t7', source: 'd1', target: 't7', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-d1-t8', source: 'd1', target: 't8', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Decision
  { id: 'e-s4-t9', source: 's4', target: 't9', style: { stroke: '#27272a' } },
  { id: 'e-s4-t10', source: 's4', target: 't10', style: { stroke: '#27272a' } },
  { id: 'e-s4-k1', source: 's4', target: 'k1', style: { stroke: '#27272a' } },

  // Adoption
  { id: 'e-s5-t11', source: 's5', target: 't11', style: { stroke: '#27272a' } },
  { id: 'e-s5-t12', source: 's5', target: 't12', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
