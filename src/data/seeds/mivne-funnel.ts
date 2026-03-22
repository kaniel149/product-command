import type { Node, Edge } from '@xyflow/react'

export const mivneFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-linkedin', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'LinkedIn Ads — מנהלי פרויקטים + קבלנים', type: 'ad',
    url: 'https://www.linkedin.com/campaignmanager',
    asset: { contentType: 'ad', content: {
      platform: 'linkedin',
      headline: 'הקבלנים שלך עובדים — אתה לא רואה כלום',
      primaryText: '85% מחברות הבנייה מאבדות ₪50,000+ בשנה בגלל עיכובים וחריגות שהיו ניתנות למניעה.\n\nבלי פיקוח בזמן אמת — אתה מגלה את הבעיות אחרי שהנזק כבר נעשה.\n\nMivne CRM נותן לך לוח בקרה מלא על כל קבלן משנה, כל אתר, כל מסמך ציות — בלחיצה אחת.\n\n📋 בקש הדגמה מותאמת לפורטפוליו שלך →',
      description: 'פלטפורמת פיקוח B2B לחברות בנייה וחברות קמ"ג בישראל',
      callToAction: 'בקש הדגמה',
      destinationUrl: 'mivne-crm.vercel.app',
      imagePrompt: 'Dashboard screenshot showing solar contractor oversight with Hebrew interface and real-time compliance status indicators',
      variants: [
        {
          headline: 'ציות סולארי: הבעיה שעולה לך ₪120,000 בשנה',
          primaryText: '🏗️ כל פרויקט סולארי שלא מתועד נכון — הוא ליאבילטי חוקי שמחכה לפוצץ.\n\nMivne CRM מנהל את כל מסמכי הציות, אישורי הבטיחות ותוצרי הקבלנים אוטומטית.\n\n✅ ביקורת חינמית של תהליכי הפיקוח הנוכחיים שלך — ₪0, ללא התחייבות.',
        },
        {
          headline: 'כמה פרויקטים סולאריים אתה מפקח במקביל?',
          primaryText: '🔍 אם התשובה היא "יותר מ-3" — סביר שמשהו נופל בין הכיסאות.\n\nחברות בנייה עם 5+ פרויקטים סולאריים פעילים מדווחות על:\n• 3-6 שעות/שבוע בדיקה ידנית של דוחות\n• 2-4 אירועי חריגה לא מזוהים בחודש\n• מסמכי ציות חסרים ב-1 מכל 3 פרויקטים\n\nMivne מסדר את הכאוס. בקש גישה לסנדבוקס →',
        },
      ],
    }},
  }},
  { id: 'ad-linkedin-retarget', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'LinkedIn Retargeting — מבקרי אתר', type: 'ad',
    url: 'https://www.linkedin.com/campaignmanager',
    asset: { contentType: 'ad', content: {
      platform: 'linkedin',
      headline: 'ביקרת באתר — כנראה יש לך בעיה שאנחנו פותרים',
      primaryText: '📊 ראינו שביקרת ב-Mivne CRM אבל לא השארת פרטים.\n\nאחד הלקוחות שלנו — חברת בנייה עם 12 פרויקטים פעילים — חסך 18 שעות עבודה שבועיות לאחר ההטמעה.\n\nהצע לך 30 דקות הדגמה פרסונלית בלי עלות ובלי לחץ.\n\n📅 בחר זמן שמתאים לך →',
      callToAction: 'קבע הדגמה',
      destinationUrl: 'mivne-crm.vercel.app/demo',
      imagePrompt: 'Side-by-side comparison: chaos of paper documents vs clean Mivne CRM dashboard',
    }},
  }},
  { id: 'ad-google', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Google Ads — "פיקוח סולארי" / "ניהול קבלנים"', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'פיקוח סולארי מלא | Mivne CRM | הדגמה חינמית',
      primaryText: 'פלטפורמת פיקוח ייחודית לחברות בנייה ומפקחי פרויקטים סולאריים. ניהול ציות, עמידה בלוחות זמנים ושקיפות מלאה על ביצועי קבלני משנה.',
      description: 'הדגמה מותאמת לפורטפוליו שלך | חוזה שנתי | תמיכה מלאה בעברית',
      callToAction: 'קבל הדגמה חינמית',
      destinationUrl: 'mivne-crm.vercel.app',
    }},
  }},
  { id: 'ad-industry', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'פרסום בפרסומי תעשייה — ביטאון הבנייה', type: 'ad',
    asset: { contentType: 'ad', content: {
      platform: 'linkedin',
      headline: 'הסטנדרט החדש לפיקוח על פרויקטים סולאריים',
      primaryText: 'תקנות האנרגיה המתחדשת הפכו את הציות לעסק מורכב.\n\nMivne CRM הוא הפתרון המוביל לחברות בנייה ישראליות: ניהול קבלני משנה, מעקב ציות, דוחות אוטומטיים — בעברית מלאה.\n\n🏆 130+ פרויקטים מנוהלים | ₪12M חיסכון מוכח ללקוחותינו\n\nלפרטים: mivne-crm.vercel.app',
      callToAction: 'קרא עוד',
      destinationUrl: 'mivne-crm.vercel.app',
      imagePrompt: 'Professional Hebrew dashboard with Israeli construction site in background',
    }},
  }},

  // ── KPIs: Ad Performance ────────────────────────────────────────
  { id: 'kpi-cpc', type: 'kpi', position: { x: 0, y: 600 }, data: {
    label: 'CPC LinkedIn', value: '₪8-15', target: '< ₪12',
  }},
  { id: 'kpi-ctr', type: 'kpi', position: { x: 200, y: 600 }, data: {
    label: 'CTR', value: '1-2%', target: '> 1.5%', trend: 'up',
  }},

  // ── Stage 1: Landing Pages ──────────────────────────────────────
  { id: 'stage-landing', type: 'stage', position: { x: 450, y: 0 }, data: {
    label: 'Landing Pages', funnelStage: '1',
    description: 'תנועה ממוקדת B2B',
  }},
  { id: 'lp-main', type: 'touchpoint', position: { x: 450, y: 150 }, data: {
    label: 'דף הבית — Mivne CRM', type: 'page',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'פיקוח מלא על קבלני הסולאר שלך — בזמן אמת',
        subheadline: 'Mivne CRM מאגד ניהול קבלנים, מעקב ציות ולוחות בקרה חיים לחברות בנייה ישראליות עם 3+ פרויקטים סולאריים פעילים.',
        ctaText: 'בקש הדגמה מותאמת →',
        ctaUrl: 'https://mivne-crm.vercel.app/demo',
      },
      benefits: [
        { icon: '👁️', title: 'שקיפות מלאה', description: 'ראה את מצב כל קבלן, כל אתר, כל מסמך — בלחיצה אחת' },
        { icon: '✅', title: 'ציות אוטומטי', description: 'כל אישורי הבטיחות והתקנות מנוהלים ומתריעים בזמן' },
        { icon: '⏱️', title: 'עמידה בלוחות זמנים', description: 'התראות חריגה לפני שהנזק נעשה, לא אחריו' },
        { icon: '📊', title: 'דוחות אוטומטיים', description: 'PDF מקצועיים ללקוחות ולרגולטורים בלחיצת כפתור' },
      ],
      socialProof: [
        { quote: 'לפני Mivne הייתי מבלה 4 שעות בשבוע על בדיקת אקסל. היום לוח הבקרה אומר לי בדיוק מה קורה בכל אתר.', author: 'דני כהן', role: 'מנהל פרויקטים, חברת בנייה ישראלית — 8 פרויקטים סולאריים' },
        { quote: 'הביקורת החיצונית שלנו עברה ב-20 דקות. כל המסמכים היו מסודרים ומעודכנים.', author: 'מיכל לוי', role: 'מנכ"ל, חברת ניהול נכסים — 15 התקנות פעילות' },
      ],
      faq: [
        { q: 'כמה פרויקטים אפשר לנהל במקביל?', a: 'אין הגבלה. הפלטפורמה מתאימה גם ל-3 פרויקטים וגם ל-50. התמחור מבוסס על גודל הפורטפוליו.' },
        { q: 'האם המערכת תומכת בעברית מלאה?', a: 'כן — ממשק RTL מלא, דוחות בעברית, ותמיכה טכנית בעברית.' },
        { q: 'מה כולל הפיילוט החינמי של 30 יום?', a: 'גישה מלאה לפלטפורמה, הגדרת פרויקט ראשון, הדרכת צוות, ותמיכה ייחודית.' },
      ],
    }},
  }},
  { id: 'lp-compliance', type: 'touchpoint', position: { x: 450, y: 300 }, data: {
    label: 'דף ציות ותקנות סולאריות', type: 'page',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'תקנות הסולאר משתנות — אתה מוכן?',
        subheadline: 'Mivne CRM מסייע לחברות בנייה לעמוד בכל דרישות הציות של רשות החשמל, תקנות הבנייה והתקנים הישראליים — אוטומטית.',
        ctaText: 'קבל ביקורת ציות חינמית →',
        ctaUrl: 'https://mivne-crm.vercel.app/compliance-audit',
      },
      benefits: [
        { icon: '📋', title: 'מעקב תקנות בזמן אמת', description: 'עדכונים אוטומטיים לכל שינוי בתקנות רשות החשמל' },
        { icon: '🚨', title: 'התראות ציות', description: 'קבל התראה 30 יום לפני פקיעת כל אישור' },
        { icon: '📁', title: 'ארכיון מסמכים', description: 'כל תעודה, אישור ודוח בארכיון מסודר ומאובטח' },
        { icon: '🔍', title: 'מוכנות לביקורת', description: 'יצא דוח ביקורת מוכן תוך שניות' },
      ],
      faq: [
        { q: 'אילו תקנות המערכת עוקבת אחריהן?', a: 'תקנות רשות החשמל, תקן 60900, תקנות הבנייה לאנרגיה מתחדשת, ודרישות חברת החשמל לחיבור לרשת.' },
        { q: 'מה קורה כשמסמך עומד לפוג?', a: 'המערכת שולחת התראה אוטומטית למנהל האחראי ולקבלן ב-30, 14 ו-7 ימים לפני הפקיעה.' },
      ],
    }},
  }},
  { id: 'lp-demo', type: 'touchpoint', position: { x: 450, y: 450 }, data: {
    label: 'דמו אינטראקטיבי חי', type: 'page',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'ראה איך Mivne CRM עובד — עם הנתונים שלך',
        subheadline: 'הדגמה אינטראקטיבית של 30 דקות: נטען פרויקט אמיתי מהפורטפוליו שלך ונראה בדיוק מה הפלטפורמה מציגה.',
        ctaText: 'קבע הדגמה חינמית →',
        ctaUrl: 'https://mivne-crm.vercel.app/book-demo',
      },
      benefits: [
        { icon: '🎯', title: 'הדגמה פרסונלית', description: 'לא פרזנטציה גנרית — נותאים לסוג הפרויקטים שלך' },
        { icon: '⏱️', title: '30 דקות בלבד', description: 'סשן ממוקד ואפקטיבי שמכבד את הזמן שלך' },
        { icon: '👥', title: 'הביא את הצוות', description: 'מנהלי פרויקטים, מפקחים וCFO מוזמנים' },
        { icon: '📊', title: 'ROI מיידי', description: 'נחשב יחד כמה שעות ניתן לחסוך בפורטפוליו שלך' },
      ],
    }},
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 850, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'לכידת ליד + כשירות ראשונית',
  }},
  { id: 'lm-audit', type: 'touchpoint', position: { x: 850, y: 150 }, data: {
    label: 'ביקורת ציות חינמית (Free Compliance Audit)', type: 'form',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'form', content: {
      title: 'ביקורת ציות סולארי חינמית',
      description: 'ספר לנו על הפורטפוליו שלך — נחזור עם דוח מפורט על פערי הציות הנוכחיים וכיצד לתקן אותם.',
      fields: [
        { name: 'name', label: 'שם מלא', type: 'text', required: true },
        { name: 'email', label: 'אימייל עסקי', type: 'email', required: true },
        { name: 'phone', label: 'טלפון', type: 'phone', required: true },
        { name: 'company', label: 'שם החברה', type: 'text', required: true },
        { name: 'role', label: 'תפקיד', type: 'select', required: true, options: ['מנכ"ל / בעלים', 'מנהל פרויקטים', 'מפקח בנייה', 'מנהל פיננסי', 'אחר'] },
        { name: 'project_count', label: 'מספר פרויקטים סולאריים פעילים', type: 'select', required: true, options: ['1-2', '3-5', '6-10', '11-20', '20+'] },
        { name: 'current_tools', label: 'כלי ניהול נוכחיים', type: 'select', options: ['אקסל / גוגל שיטס', 'WhatsApp בלבד', 'פתרון ייעודי אחר', 'אין כלי מסודר'] },
        { name: 'pain_point', label: 'האתגר הגדול ביותר בפיקוח', type: 'textarea' },
      ],
      submitLabel: 'שלח לביקורת חינמית →',
      successMessage: 'תודה! נציג שלנו יצור איתך קשר תוך 24 שעות עם דוח הציות המלא.',
    }},
  }},
  { id: 'lm-guide', type: 'touchpoint', position: { x: 850, y: 300 }, data: {
    label: 'PDF: "מדריך פיקוח על התקנות סולאריות 2026"', type: 'page',
    asset: { contentType: 'leadMagnet', content: {
      title: 'מדריך הפיקוח על פרויקטים סולאריים 2026',
      description: 'המדריך המקיף לחברות בנייה ישראליות: תקנות עדכניות, תהליכי ציות, ניהול קבלני משנה ומדדי ביצוע — הכל בעברית.',
      format: 'pdf',
      gateFields: ['שם מלא', 'אימייל עסקי', 'שם החברה', 'מספר פרויקטים פעילים'],
      previewPoints: [
        'עדכוני תקנות רשות החשמל 2025-2026',
        'רשימת תיוג מסמכי ציות לכל שלב בפרויקט',
        'מדדי KPI מומלצים לפיקוח על קבלני משנה',
        '5 דוגמאות אמיתיות לחריגות שנתגלו מאוחר מדי — ואיך למנוע',
        'מדריך הכנה לביקורת חיצונית',
        'השוואת כלי ניהול: אקסל vs פתרון ייעודי',
      ],
    }},
  }},
  { id: 'lm-platform-demo', type: 'touchpoint', position: { x: 850, y: 450 }, data: {
    label: 'גישה לדמו פלטפורמה (Sandbox)', type: 'form',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'form', content: {
      title: 'גישה לסביבת הדמו — נסה את Mivne CRM',
      description: 'הגדר פרויקט לדוגמה, נהל קבלנים וראה את לוחות הבקרה — בסביבה מוגנת ללא סיכון.',
      fields: [
        { name: 'name', label: 'שם מלא', type: 'text', required: true },
        { name: 'email', label: 'אימייל עסקי', type: 'email', required: true },
        { name: 'company', label: 'שם החברה', type: 'text', required: true },
        { name: 'project_count', label: 'כמה פרויקטים אתה מנהל?', type: 'select', required: true, options: ['1-3', '4-7', '8-15', '15+'] },
        { name: 'use_case', label: 'מה הדבר הכי חשוב שאתה רוצה לראות?', type: 'select', options: ['ניהול מסמכי ציות', 'מעקב קבלני משנה', 'לוחות בקרה ודוחות', 'התראות ועדכוני סטטוס', 'הכל'] },
      ],
      submitLabel: 'שלח לי גישה לדמו →',
      successMessage: 'מעולה! שלחנו לך קישור גישה לאימייל. הסביבה פעילה ל-7 ימים.',
    }},
  }},

  // ── Decision: Qualified? ────────────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 850, y: 630 }, data: {
    question: 'פורטפוליו 3+ פרויקטים + תקציב מאושר?',
    yesLabel: 'כשיר', noLabel: 'Nurture',
  }},

  // ── Stage 3: Email Sequences ───────────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1250, y: 0 }, data: {
    label: 'Email Nurture — B2B Enterprise', funnelStage: '3',
    description: 'רצף 5 אימיילים על פני 30 ימים',
  }},
  { id: 'email-intro', type: 'touchpoint', position: { x: 1250, y: 150 }, data: {
    label: 'יום 0: היכרות + סקירת הפלטפורמה', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'ברוכים הבאים ל-Mivne — הנה מה שהפלטפורמה עושה בשבילך',
      preheader: 'פיקוח מלא על קבלני הסולאר שלך — מהיום',
      sendDay: 0,
      body: '<p>שלום [שם],</p><p>תודה שהצטרפת — אנחנו שמחים שאתה כאן.</p><p>Mivne CRM נבנה במיוחד עבור חברות בנייה ישראליות שמנהלות פרויקטים סולאריים עם קבלני משנה — וסובלות מחוסר שקיפות, בעיות ציות ועיכובים שאפשר היה למנוע.</p><h3>מה הפלטפורמה עושה בשבילך:</h3><ul><li>📊 <strong>לוח בקרה מרכזי:</strong> מצב כל פרויקט וכל קבלן בזמן אמת</li><li>✅ <strong>ניהול ציות אוטומטי:</strong> מעקב אחר כל האישורים ומסמכי הבטיחות</li><li>🚨 <strong>התראות חכמות:</strong> קבל עדכון לפני שעיכוב הופך לבעיה</li><li>📋 <strong>דוחות בלחיצה:</strong> PDF מקצועי ללקוחות ולביקורות חיצוניות</li></ul><p>בשבוע הקרוב נשלח לך מידע שיעזור לך להבין אם Mivne מתאים לפורטפוליו שלך.</p>',
      ctaText: 'גלה את לוח הבקרה →',
      ctaUrl: 'https://mivne-crm.vercel.app',
    }},
  }},
  { id: 'email-casestudy', type: 'touchpoint', position: { x: 1250, y: 280 }, data: {
    label: 'יום 5: סטאדי קייס — חברת בנייה ישראלית', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'איך חברת בנייה חסכה 22 שעות עבודה בשבוע עם Mivne',
      preheader: 'מקרה אמיתי: 9 פרויקטים סולאריים, קבלן מחוץ לציות, ₪85,000 חיסכון',
      sendDay: 5,
      body: '<p>שלום [שם],</p><p>תן לי לספר לך על לקוח שלנו — חברת בנייה בינונית עם 9 פרויקטים סולאריים פעילים.</p><h3>🏗️ לפני Mivne:</h3><ul><li>מנהל הפרויקטים בילה 22 שעות שבועיות בבדיקת אקסל ו-WhatsApp</li><li>קבלן משנה אחד עבד ללא אישור בטיחות מעודכן — ונתגלה רק בביקורת</li><li>עיכוב של 3 שבועות בפרויקט אחד בגלל מסמך חסר</li><li>קנס של ₪35,000 מרשות החשמל</li></ul><h3>✅ אחרי Mivne (6 חודשים):</h3><ul><li><strong>22 שעות → 4 שעות:</strong> חיסכון של 18 שעות עבודה שבועיות</li><li><strong>0 אירועי ציות:</strong> כל המסמכים מעודכנים אוטומטית</li><li><strong>לוחות זמנים:</strong> הפרויקטים הוגשו בזמן ב-3 חודשים רצופים</li><li><strong>ROI:</strong> החיסכון כיסה את עלות הפלטפורמה תוך 6 שבועות</li></ul><p>האם הפורטפוליו שלך נראה דומה? בוא נבדוק יחד.</p>',
      ctaText: 'קבע שיחה של 15 דקות →',
      ctaUrl: 'https://mivne-crm.vercel.app/book',
    }},
  }},
  { id: 'email-roi', type: 'touchpoint', position: { x: 1250, y: 410 }, data: {
    label: 'יום 14: ניתוח ROI — חיסכון בזמן ובציות', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'כמה עולה לך כל שעת פיקוח ידני? (הנה החישוב)',
      preheader: 'ROI של Mivne CRM — מספרים אמיתיים לפורטפוליו שלך',
      sendDay: 14,
      body: '<p>שלום [שם],</p><p>בוא נדבר מספרים — כי בסופו של דבר, זה מה שמנהלים מקבלים החלטות לפיו.</p><h3>📊 חישוב ROI טיפוסי לחברת בנייה עם 5 פרויקטים:</h3><table><tr><td><strong>עלות ניהול פיקוח ידני</strong></td><td>₪8,500/חודש</td></tr><tr><td>שעות עבודה (×₪150/שעה × 12 שעות/שבוע)</td><td>₪7,200/חודש</td></tr><tr><td>עלות ממוצעת של אירוע ציות לא מזוהה</td><td>₪15,000-₪45,000/שנה</td></tr><tr><td><strong>עלות Mivne CRM (5 פרויקטים)</strong></td><td>₪2,500/חודש</td></tr><tr><td><strong>חיסכון חודשי נטו</strong></td><td><strong>₪6,000-₪8,000</strong></td></tr></table><p>חברות שמשתמשות ב-Mivne מדווחות על <strong>תקופת החזר של 6-10 שבועות</strong>.</p><p>רוצה לחשב את ה-ROI הספציפי לפורטפוליו שלך? נעשה את זה ביחד בשיחה קצרה.</p>',
      ctaText: 'חשב את ה-ROI שלי →',
      ctaUrl: 'https://mivne-crm.vercel.app/roi-calculator',
    }},
  }},
  { id: 'email-meeting', type: 'touchpoint', position: { x: 1250, y: 540 }, data: {
    label: 'יום 21: בקשת פגישה + הדגמה', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '[שם], יש לך 20 דקות להדגמה השבוע?',
      preheader: 'הדגמה פרסונלית של Mivne עם הנתונים מהפורטפוליו שלך',
      sendDay: 21,
      body: '<p>שלום [שם],</p><p>שלחתי לך כמה אימיילים בשבועות האחרונים — ואני מניח שאתה עסוק (כמו כל מנהל פרויקטים טוב).</p><p>אז בואו נקצר לעניין: <strong>תן לי 20 דקות ואני מבטיח לך אחד מאלה:</strong></p><ol><li>תראה בדיוק כמה שעות פיקוח Mivne יכול לחסוך לחברה שלך</li><li>תקבל רשימת פערי ציות ספציפית לפורטפוליו שלך — בחינם</li><li>אם זה לא מתאים — תאמר לי ואני לא אטריד אותך יותר</li></ol><p>כל מה שאתה צריך לעשות זה לבחור שעה שנוחה לך.</p>',
      ctaText: 'בחר זמן לפגישה →',
      ctaUrl: 'https://mivne-crm.vercel.app/book',
    }},
  }},
  { id: 'email-proposal', type: 'touchpoint', position: { x: 1250, y: 670 }, data: {
    label: 'יום 30: הצעה מותאמת לפורטפוליו', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'הצעת מחיר מותאמת ל-[שם החברה] — תוקף עד [תאריך]',
      preheader: 'פיילוט חינמי של 30 יום + מחיר מיוחד לחברות עם 3-10 פרויקטים',
      sendDay: 30,
      body: '<p>שלום [שם],</p><p>בהתבסס על מה שסיפרת לנו — [מספר פרויקטים] פרויקטים, [כלים נוכחיים] — הכנתי הצעה ספציפית עבורכם.</p><h3>📋 מה כלול בהצעה:</h3><ul><li>✅ <strong>פיילוט חינמי של 30 יום</strong> — ניהול פרויקט ראשון מלא ללא עלות</li><li>✅ <strong>הטמעה מלאה</strong> — אנחנו מגדירים את המערכת עם הנתונים שלכם</li><li>✅ <strong>הדרכת צוות</strong> — סשן של 2 שעות לכל מנהל רלוונטי</li><li>✅ <strong>מחיר נעול ל-12 חודשים</strong> — ₪[מחיר]/חודש (ייחסך לפני עליית מחירים)</li></ul><p><strong>ההצעה בתוקף עד [תאריך].</strong></p><p>האם נוכל לדבר ולסגור את הפיילוט השבוע?</p>',
      ctaText: 'צפה בהצעה המלאה →',
      ctaUrl: 'https://mivne-crm.vercel.app/proposal/[id]',
    }},
  }},
  { id: 'msg-whatsapp', type: 'message', position: { x: 1250, y: 800 }, data: {
    content: 'שלום [שם], ראיתי שהורדת את מדריך הפיקוח — האם יש לך 15 דקות לשיחה קצרה השבוע?',
    language: 'HE',
  }},

  // ── Stage 4: Proposal ──────────────────────────────────────────
  { id: 'stage-proposal', type: 'stage', position: { x: 1650, y: 0 }, data: {
    label: 'Proposal', funnelStage: '4',
    description: 'הדגמה בשטח → תוכנית פיילוט',
  }},
  { id: 'tp-onsite-demo', type: 'touchpoint', position: { x: 1650, y: 150 }, data: {
    label: 'הדגמה פרונטלית באתר הלקוח', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'הדגמה חיה במשרדכם — עם הנתונים האמיתיים שלכם',
        subheadline: 'נגיע אליכם עם לפטופ ונדגים את Mivne CRM על פרויקט אמיתי מהפורטפוליו שלכם. ללא פרזנטציה מוכנה מראש — רק מה שרלוונטי לחברה שלכם.',
        ctaText: 'תאם הדגמה בשטח →',
        ctaUrl: 'https://mivne-crm.vercel.app/book-onsite',
      },
      benefits: [
        { icon: '🎯', title: 'פרסונלי לחלוטין', description: 'הדגמה מותאמת לסוג הפרויקטים, גודל הפורטפוליו ותהליכי העבודה שלכם' },
        { icon: '👥', title: 'הביאו את כל הצוות', description: 'ניתן לדמיינה בפני מנהלים, מפקחים ו-CFO בו זמנית' },
        { icon: '📊', title: 'מספרים לא שקפים', description: 'נחשב ROI בזמן אמת על בסיס הנתונים האמיתיים שלכם' },
        { icon: '❓', title: 'שאלות חופשיות', description: 'שאלו כל שאלה ותקבלו תשובה ישירה — ללא לחץ מכירה' },
      ],
    }},
  }},
  { id: 'tp-proposal-doc', type: 'touchpoint', position: { x: 1650, y: 300 }, data: {
    label: 'תוכנית הטמעה מותאמת + תמחור', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'תוכנית הטמעה מותאמת ל-[שם החברה]',
        subheadline: 'מסמך מפורט הכולל: ניתוח פורטפוליו, לוח זמנים להטמעה, תמחור שקוף ומדדי הצלחה מוסכמים.',
        ctaText: 'הורד תוכנית הטמעה →',
      },
      benefits: [
        { icon: '📐', title: 'ניתוח פורטפוליו', description: 'מיפוי מלא של הפרויקטים, הקבלנים ותהליכי העבודה הנוכחיים' },
        { icon: '📅', title: 'לוח זמנים ריאלי', description: 'מה קורה ביום 1, שבוע 1, חודש 1 — בפירוט מלא' },
        { icon: '💰', title: 'תמחור שקוף', description: 'עלויות חד-פעמיות ועלויות שוטפות — ללא הפתעות' },
        { icon: '🎯', title: 'מדדי הצלחה', description: 'KPIs מוסכמים מראש שנמדד בהם בסוף כל רבעון' },
      ],
    }},
  }},
  { id: 'tp-pilot', type: 'touchpoint', position: { x: 1650, y: 450 }, data: {
    label: 'הצעת פיילוט — פרויקט ראשון (30 יום חינם)', type: 'form',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'form', content: {
      title: 'הצטרפות לפיילוט Mivne CRM — 30 יום ללא עלות',
      description: 'בחר פרויקט אחד לניהול בפיילוט. אנחנו מגדירים הכל, מכשירים את הצוות ומוכיחים ערך תוך 30 יום — ללא עלות וללא התחייבות להמשך.',
      fields: [
        { name: 'company', label: 'שם החברה', type: 'text', required: true },
        { name: 'contact_name', label: 'שם איש קשר', type: 'text', required: true },
        { name: 'email', label: 'אימייל', type: 'email', required: true },
        { name: 'phone', label: 'טלפון', type: 'phone', required: true },
        { name: 'pilot_project', label: 'שם הפרויקט לפיילוט', type: 'text', required: true },
        { name: 'project_size', label: 'גודל הפרויקט (kW)', type: 'text' },
        { name: 'contractor_count', label: 'מספר קבלני משנה בפרויקט', type: 'select', options: ['1-2', '3-5', '6-10', '10+'] },
        { name: 'start_date', label: 'מתי נוח להתחיל?', type: 'select', options: ['מיידי', 'בשבועיים הקרובים', 'בחודש הקרוב', 'בתוך 3 חודשים'] },
        { name: 'team_size', label: 'כמה משתמשים יצטרכו גישה?', type: 'select', options: ['1-3', '4-7', '8-15', '15+'] },
      ],
      submitLabel: 'אישור הפיילוט →',
      successMessage: 'מצוין! נציג Mivne יצור איתך קשר תוך 4 שעות לתיאום תחילת הפיילוט.',
    }},
  }},

  // ── Decision: Ready to close? ──────────────────────────────────
  { id: 'dec-close', type: 'decision', position: { x: 1650, y: 630 }, data: {
    question: 'אישור פיילוט / חוזה?',
    yesLabel: 'חתימה', noLabel: 'התנגדויות',
  }},

  // ── Stage 5: Close ─────────────────────────────────────────────
  { id: 'stage-close', type: 'stage', position: { x: 2050, y: 0 }, data: {
    label: 'Close', funnelStage: '5',
    description: 'חוזה שנתי + Onboarding',
  }},
  { id: 'tp-contract', type: 'touchpoint', position: { x: 2050, y: 150 }, data: {
    label: 'חתימה על חוזה שנתי', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'ברוכים הבאים ל-Mivne — חתמו על החוזה השנתי',
        subheadline: 'חוזה שנתי ברור ושקוף: תנאי שירות, SLA, מדיניות ביטול וכל מה שצריך לדעת — ללא אותיות קטנות.',
        ctaText: 'חתם על החוזה →',
      },
      benefits: [
        { icon: '📋', title: 'תנאים ברורים', description: 'חוזה בעברית פשוטה — ללא ז׳רגון משפטי' },
        { icon: '🛡️', title: 'SLA מוגדר', description: 'זמן תגובה של 4 שעות לתקלות קריטיות' },
        { icon: '🔄', title: 'אפשרות ביטול', description: 'הודעה של 30 יום — ללא קנסות' },
        { icon: '🔒', title: 'הגנת מידע', description: 'ISO 27001 + GDPR + חוק הגנת הפרטיות הישראלי' },
      ],
    }},
  }},
  { id: 'tp-payment', type: 'touchpoint', position: { x: 2050, y: 300 }, data: {
    label: 'תשלום ראשון — ₪2,000-8,000/חודש', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'תשלום ראשון — תחילת ההרשמה',
        subheadline: 'תשלום חודשי קבוע לפי גודל הפורטפוליו. אפשרות לתשלום שנתי מראש עם הנחה של 15%.',
        ctaText: 'עבור לתשלום →',
      },
      benefits: [
        { icon: '💳', title: 'אשראי / העברה בנקאית', description: 'כל אמצעי תשלום מקובל בישראל' },
        { icon: '🧾', title: 'חשבונית עסקית', description: 'חשבונית מס מיידית לכל תשלום' },
        { icon: '📉', title: '15% הנחה שנתית', description: 'שלם שנה מראש וחסוך 2 חודשים' },
        { icon: '🔐', title: 'מאובטח ב-256-bit', description: 'עיבוד תשלומים מאובטח דרך Stripe' },
      ],
    }},
  }},
  { id: 'tp-onboard', type: 'touchpoint', position: { x: 2050, y: 450 }, data: {
    label: 'Onboarding + הכשרת צוות בפלטפורמה', type: 'page',
    url: 'https://mivne-crm.vercel.app',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'ברוכים הבאים — נתחיל לעבוד יחד',
        subheadline: 'תוכנית ה-Onboarding שלנו מבטיחה שתהיו מלאי ביטחון בפלטפורמה תוך 14 יום. אנחנו לא עוזבים עד שהכל עובד.',
        ctaText: 'כנס לפלטפורמה →',
        ctaUrl: 'https://mivne-crm.vercel.app/dashboard',
      },
      benefits: [
        { icon: '⚙️', title: 'הגדרת מערכת (יום 1-3)', description: 'ייבוא פרויקטים, הגדרת קבלנים ומסמכי ציות ראשוניים' },
        { icon: '🎓', title: 'הכשרת צוות (יום 4-7)', description: 'סשן הדרכה של 2 שעות לכל מנהל רלוונטי' },
        { icon: '🚀', title: 'פרויקט ראשון חי (יום 8-14)', description: 'ניהול פרויקט ראשון בפיקוח מלא של צוות Mivne' },
        { icon: '📞', title: 'תמיכה שוטפת', description: 'מנהל לקוח ייעודי + צ׳אט תמיכה בעברית' },
      ],
    }},
  }},

  // ── KPIs: Funnel Performance ───────────────────────────────────
  { id: 'kpi-cac', type: 'kpi', position: { x: 2050, y: 620 }, data: {
    label: 'CAC', value: '₪1,500-3,000', target: '< ₪2,500', trend: 'down',
  }},
  { id: 'kpi-cr', type: 'kpi', position: { x: 2270, y: 620 }, data: {
    label: 'Lead → Close CR', value: '10-20%', target: '> 15%', trend: 'up',
  }},
  { id: 'kpi-cycle', type: 'kpi', position: { x: 2050, y: 770 }, data: {
    label: 'מחזור מכירה', value: '4 חודשים ממוצע', target: '3-6 חודשים', trend: 'down',
  }},
  { id: 'kpi-acv', type: 'kpi', position: { x: 2270, y: 770 }, data: {
    label: 'ACV', value: '₪24K-96K', target: '> ₪48K', trend: 'up',
  }},
]

export const mivneFunnelEdges: Edge[] = [
  // Ads → Landing Pages
  { id: 'e-adli-lpmain', source: 'ad-linkedin', target: 'lp-main', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adli-rt-lpdemo', source: 'ad-linkedin-retarget', target: 'lp-demo', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adgoog-lpcomp', source: 'ad-google', target: 'lp-compliance', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-adindustry-lpmain', source: 'ad-industry', target: 'lp-main', animated: true, style: { stroke: '#6366f1' } },

  // Landing Pages → Lead Magnets
  { id: 'e-lpmain-lmaudit', source: 'lp-main', target: 'lm-audit', style: { stroke: '#f59e0b' } },
  { id: 'e-lpcomp-lmguide', source: 'lp-compliance', target: 'lm-guide', style: { stroke: '#f59e0b' } },
  { id: 'e-lpdemo-lmplatform', source: 'lp-demo', target: 'lm-platform-demo', style: { stroke: '#f59e0b' } },

  // Lead Magnets → Decision
  { id: 'e-lmaudit-dec', source: 'lm-audit', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmguide-dec', source: 'lm-guide', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmplatform-dec', source: 'lm-platform-demo', target: 'dec-qualified', style: { stroke: '#27272a' } },

  // Decision → Nurture (yes) or Retarget (no)
  { id: 'e-dec-intro', source: 'dec-qualified', target: 'email-intro', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-dec-retarget', source: 'dec-qualified', target: 'ad-linkedin-retarget', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Email sequence flow
  { id: 'e-em1-em2', source: 'email-intro', target: 'email-casestudy', style: { stroke: '#8b5cf6' } },
  { id: 'e-em2-em3', source: 'email-casestudy', target: 'email-roi', style: { stroke: '#8b5cf6' } },
  { id: 'e-em3-em4', source: 'email-roi', target: 'email-meeting', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-em5', source: 'email-meeting', target: 'email-proposal', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-wa', source: 'email-meeting', target: 'msg-whatsapp', style: { stroke: '#22c55e' } },

  // Nurture → Proposal
  { id: 'e-em5-onsite', source: 'email-proposal', target: 'tp-onsite-demo', style: { stroke: '#f59e0b' } },
  { id: 'e-wa-onsite', source: 'msg-whatsapp', target: 'tp-onsite-demo', style: { stroke: '#22c55e' } },

  // Proposal flow
  { id: 'e-onsite-prop', source: 'tp-onsite-demo', target: 'tp-proposal-doc', style: { stroke: '#27272a' } },
  { id: 'e-prop-pilot', source: 'tp-proposal-doc', target: 'tp-pilot', style: { stroke: '#27272a' } },
  { id: 'e-pilot-dec', source: 'tp-pilot', target: 'dec-close', style: { stroke: '#27272a' } },

  // Close decision
  { id: 'e-decclose-contract', source: 'dec-close', target: 'tp-contract', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-nurture', source: 'dec-close', target: 'email-roi', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Close flow
  { id: 'e-contract-payment', source: 'tp-contract', target: 'tp-payment', style: { stroke: '#27272a' } },
  { id: 'e-payment-onboard', source: 'tp-payment', target: 'tp-onboard', style: { stroke: '#27272a' } },

  // Stage connectors
  { id: 'e-st1-st2', source: 'stage-landing', target: 'stage-leadmag', style: { stroke: '#f59e0b' } },
  { id: 'e-st2-st3', source: 'stage-leadmag', target: 'stage-nurture', style: { stroke: '#f59e0b' } },
  { id: 'e-st3-st4', source: 'stage-nurture', target: 'stage-proposal', style: { stroke: '#f59e0b' } },
  { id: 'e-st4-st5', source: 'stage-proposal', target: 'stage-close', style: { stroke: '#f59e0b' } },
]
