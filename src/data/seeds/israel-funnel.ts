import type { Node, Edge } from '@xyflow/react'

export const israelFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-google-crm', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'Google Ads — "CRM סולארי"', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'CRM סולארי ישראלי | Solar OS — ניהול פרויקטים מ-A עד Z',
      primaryText: 'מתקיני סולאר ישראלים מנהלים לידים, פרויקטים ורישוי IEC במערכת אחת. מחליף את האקסל. ניסיון חינם 14 יום.',
      description: 'Starter ₪399/חודש · Pro ₪899 · Enterprise ₪1,999. ללא כרטיס אשראי.',
      callToAction: 'התחל ניסיון חינם',
      destinationUrl: 'solar-os.com',
      variants: [
        { headline: 'עייפת מאקסל? Solar OS מנהל 50+ פרויקטים בקלות', primaryText: '📊 לידים, פרויקטים, תיעוד IEC, דשבורד ניטור — הכל במקום אחד.\n\n✅ ניסיון 14 יום ללא כרטיס אשראי\n✅ מיגרציה חינם מאקסל\n✅ תמיכה בעברית' },
        { headline: 'Solar OS — מערכת CRM לחברות סולאר בישראל', primaryText: '🏗️ נהל כל פרויקט מהליד ועד החיבור לרשת.\n\nRoi Solar: "חסכנו 8 שעות עבודה בשבוע מהיום הראשון."\n\nהתחל ניסיון חינם →' },
      ],
    }},
  }},
  { id: 'ad-google-sys', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'Google Ads — "מערכת סולארית"', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'מערכת ניהול סולארית | Solar OS — החלף אקסל היום',
      primaryText: 'תוכנה ישראלית לחברות סולאר: ניהול לידים, מעקב פרויקטים, רישוי IEC אוטומטי, וניטור מערכות פעילות.',
      description: 'מעל 50 חברות סולאר ישראליות כבר עובדות עם Solar OS. התחל חינם.',
      callToAction: 'קבל דמו חינם',
      destinationUrl: 'solar-os.com/demo',
      variants: [
        { headline: 'ניהול פרויקטי סולאר בישראל — Solar OS', primaryText: '⚡ מהליד הראשון ועד החיבור לרשת — ללא אקסל, ללא בלגן.\n\nמיגרציה מאקסל בחינם | תמיכה מלאה בעברית | Starter ₪399/חודש' },
      ],
    }},
  }},
  { id: 'ad-meta-groups', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Meta Ads — קבוצות מתקיני סולאר', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'עייפת מ-5 גיליונות אקסל לכל פרויקט?',
      primaryText: '☀️ Solar OS נבנה במיוחד למתקיני סולאר ישראלים.\n\nמה תקבל:\n📋 CRM לידים עם פייפליין ויזואלי\n🏗️ מעקב פרויקטים מהחתימה ועד ה-IEC\n📊 דשבורד ניטור בזמן אמת\n🤖 מסמכי רישוי אוטומטיים\n\n14 יום ניסיון חינם — ללא כרטיס אשראי.\n\nלחץ ״למד עוד״ →',
      callToAction: 'למד עוד',
      destinationUrl: 'solar-os.com',
      imagePrompt: 'Israeli solar installer reviewing project dashboard on laptop with solar panels in background',
      variants: [
        { headline: 'כך מנהלים 50 פרויקטי סולאר בלי להשתגע', primaryText: '📱 דמיין: כל הלידים, הפרויקטים, מסמכי IEC והחשבוניות — במסך אחד.\n\nזה Solar OS. מערכת CRM ישראלית לחברות סולאר.\n\n→ ניסיון 14 יום חינם, ללא כרטיס אשראי.' },
      ],
    }},
  }},
  { id: 'ad-meta-retarget', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'Meta Retargeting — מבקרי האתר', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'ראית את Solar OS — עוד לא התנסית?',
      primaryText: '🔔 היי, ביקרת באתר שלנו לא מזמן.\n\nמתקינים שעברו מאקסל ל-Solar OS חסכו בממוצע 6 שעות בשבוע תוך 30 יום ראשונים.\n\n14 יום חינם. ללא כרטיס אשראי. ללא הגבלות.\n\nהתחל עכשיו →',
      callToAction: 'התחל ניסיון חינם',
      destinationUrl: 'app.solar-os.com/login?mode=signup',
      imagePrompt: 'Split screen: messy Excel spreadsheet on left, clean Solar OS dashboard on right',
    }},
  }},
  { id: 'ad-linkedin', type: 'touchpoint', position: { x: 0, y: 600 }, data: {
    label: 'LinkedIn Ads — חברות EPC + יועצים', type: 'ad',
    url: 'https://www.linkedin.com/campaignmanager',
    asset: { contentType: 'ad', content: {
      platform: 'linkedin',
      headline: 'Solar OS — The CRM Built for Israeli Solar EPC Companies',
      primaryText: 'Managing 10+ solar projects across multiple sites? Solar OS gives your team a single source of truth.\n\n✅ Lead pipeline → project tracking → IEC licensing in one platform\n✅ Team collaboration with role-based access\n✅ API integrations with monitoring systems\n✅ Hebrew-first, Israel-compliant\n\nEnterprise plan from ₪1,999/mo. Book a personalized demo.',
      description: 'Trusted by solar EPC companies across Israel',
      callToAction: 'Book Demo',
      destinationUrl: 'solar-os.com/demo',
      imagePrompt: 'Professional team of engineers reviewing solar project dashboard in office',
      variants: [
        { headline: 'Your Solar Team Deserves Better Than Excel + WhatsApp Groups', primaryText: '📊 Solar OS centralizes every project, document, and customer interaction for Israeli solar installers and EPC firms.\n\nFrom ₪399/mo. Free migration from Excel. Hebrew support.\n\nBook a 20-min demo →' },
      ],
    }},
  }},

  // ── KPIs: Ad Performance ────────────────────────────────────────
  { id: 'kpi-cpc', type: 'kpi', position: { x: 0, y: 770 }, data: {
    label: 'CPC', value: '₪1.50-4.00', target: '< ₪3.00',
  }},
  { id: 'kpi-ctr', type: 'kpi', position: { x: 200, y: 770 }, data: {
    label: 'CTR', value: '2-4%', target: '> 3%', trend: 'up',
  }},

  // ── Stage 1: Landing Pages ──────────────────────────────────────
  { id: 'stage-landing', type: 'stage', position: { x: 450, y: 0 }, data: {
    label: 'Landing Pages', funnelStage: '1',
    description: 'לכידת תנועה ממוקדת',
  }},
  { id: 'lp-main', type: 'touchpoint', position: { x: 450, y: 150 }, data: {
    label: 'דף הבית — Solar OS', type: 'page',
    url: 'https://solar-os.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'תפסיק לנהל פרויקטי סולאר באקסל.',
        subheadline: 'Solar OS הוא ה-CRM הישראלי הראשון לחברות סולאר. מהליד הראשון ועד חיבור ה-IEC — הכל במערכת אחת.',
        ctaText: 'התחל ניסיון חינם — 14 יום →',
        ctaUrl: 'https://app.solar-os.com/login?mode=signup',
      },
      benefits: [
        { icon: '📋', title: 'CRM לידים חכם', description: 'פייפליין ויזואלי, תיוג אוטומטי, ותזכורות מעקב' },
        { icon: '🏗️', title: 'ניהול פרויקטים', description: 'מהחתימה על חוזה ועד ה-IEC — כל שלב מתועד' },
        { icon: '📄', title: 'רישוי IEC אוטומטי', description: 'יצירת מסמכי רישוי אוטומטית, חיסכון של שעות עבודה' },
        { icon: '📊', title: 'ניטור בזמן אמת', description: 'דשבורד למערכות פעילות — ייצור, תקלות, התראות' },
      ],
      socialProof: [
        { quote: 'עברנו מ-12 גיליונות אקסל לדשבורד אחד. חסכנו 8 שעות עבודה בשבוע מהיום הראשון.', author: 'רועי כהן', role: 'מנהל פרויקטים, Solar Solutions ת"א' },
        { quote: 'הרישוי האוטומטי של IEC לבד שווה את כל המחיר. מה שלקח יום — לוקח עכשיו 20 דקות.', author: 'אביב לוי', role: 'בעלים, EnerStar התקנות סולאריות' },
      ],
      faq: [
        { q: 'האם צריך להגיר נתונים מאקסל?', a: 'כן — ואנחנו עושים את זה בחינם. המיגרציה כוללת ייבוא CSV/Excel עם זיהוי עברית אוטומטי.' },
        { q: 'כמה עולה Solar OS?', a: 'Starter ₪399/חודש (עד 5 משתמשים), Pro ₪899 (עד 15), Enterprise ₪1,999 (ללא הגבלה).' },
        { q: 'האם יש חוזה לטווח ארוך?', a: 'לא. תשלום חודשי, ביטול בכל עת. ניסיון 14 יום ללא כרטיס אשראי.' },
        { q: 'האם המערכת עובדת עם IEC?', a: 'כן — Solar OS מייצר אוטומטית את מסמכי הגשת הרישוי הנדרשים ע"י רשות החשמל.' },
      ],
    }},
  }},
  { id: 'lp-features', type: 'touchpoint', position: { x: 450, y: 300 }, data: {
    label: 'דף פיצ\'רים', type: 'page',
    url: 'https://solar-os.com/features',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'כל הכלים שחברת סולאר ישראלית צריכה.',
        subheadline: 'Solar OS מחבר CRM, ניהול פרויקטים, רישוי ורגולציה, וניטור מערכות — בפלטפורמה אחת בעברית.',
        ctaText: 'ראה את הפיצ\'רים בפעולה →',
        ctaUrl: 'https://solar-os.com/demo',
      },
      benefits: [
        { icon: '🎯', title: 'CRM ולידים', description: 'ניהול לידים עם פייפליין Kanban, דירוג אוטומטי, ותזכורות חכמות' },
        { icon: '📐', title: 'גוש וחלקה', description: 'בדיקת בעלות ממשרד המשפטים — ישירות מתוך כרטיס הליד' },
        { icon: '📁', title: 'מסמכים ורישוי', description: 'הגשת IEC, היתרי בנייה, וחשבוניות — הכל בתיק פרויקט אחד' },
        { icon: '🔔', title: 'התראות ומעקב', description: 'אוטומציה לתזכורות, עדכוני סטטוס, ואי-עמידה בלוחות זמנים' },
        { icon: '📊', title: 'דשבורד ניהולי', description: 'KPIs בזמן אמת: MRR, פרויקטים פעילים, שיעור המרה, תחזית הכנסות' },
        { icon: '🔗', title: 'אינטגרציות', description: 'Huawei, SolarEdge, SMA, Fronius — import נתוני ניטור ישיר' },
      ],
      faq: [
        { q: 'האם Solar OS עובד על מובייל?', a: 'כן — ממשק רספונסיבי מלא, מותאם לעבודה בשטח מהטלפון.' },
        { q: 'האם ניתן להוסיף טכנאים כמשתמשים?', a: 'כן. בתוכנית Pro ו-Enterprise ניתן לנהל הרשאות לפי תפקיד.' },
      ],
    }},
  }},
  { id: 'lp-pricing', type: 'touchpoint', position: { x: 450, y: 450 }, data: {
    label: 'דף תמחור', type: 'page',
    url: 'https://solar-os.com/pricing',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'תמחור פשוט. ללא הפתעות.',
        subheadline: 'בחר את התוכנית המתאימה לגודל החברה שלך. שדרג בכל עת. ביטול ללא קנסות.',
        ctaText: 'התחל עם ניסיון חינם →',
        ctaUrl: 'https://app.solar-os.com/login?mode=signup',
      },
      benefits: [
        { icon: '🌱', title: 'Starter — ₪399/חודש', description: 'עד 5 משתמשים, 100 לידים, 20 פרויקטים פעילים, CRM + מסמכים' },
        { icon: '⚡', title: 'Pro — ₪899/חודש', description: 'עד 15 משתמשים, לידים ופרויקטים ללא הגבלה, ניטור + API' },
        { icon: '🏢', title: 'Enterprise — ₪1,999/חודש', description: 'משתמשים ללא הגבלה, white-label, onboarding ייעודי, SLA' },
      ],
      socialProof: [
        { quote: 'ה-ROI על Starter ₪399 היה ברור תוך שבוע ראשון. חסכנו עלות של עובד חלקי.', author: 'דנה מזרחי', role: 'מנהלת תפעול, SunHome ירושלים' },
      ],
      faq: [
        { q: 'מה ההבדל בין Starter ל-Pro?', a: 'Pro מוסיף: ניטור מערכות, API לאינטגרציות, הרשאות מורחבות, ויבוא מתקדם.' },
        { q: 'האם יש הנחה לתשלום שנתי?', a: 'כן — תשלום שנתי מקנה 2 חודשים חינם (שווה ערך ל-17% הנחה).' },
        { q: 'מה כולל Enterprise?', a: 'כל פיצ\'רי Pro + לוגו מותאם, מסדי נתונים מבודלים, מנהל לקוח ייעודי, ו-SLA 99.9%.' },
      ],
    }},
  }},
  { id: 'lp-navitas', type: 'touchpoint', position: { x: 450, y: 600 }, data: {
    label: 'Navitas CRM (instance קיים)', type: 'page',
    url: 'https://crm.navitas.co.il',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Navitas Solar CRM — פלטפורמת הניהול שלך',
        subheadline: 'ניהול לידים, פרויקטים ומערכות סולאריות עבור Navitas Energy. מסך אחד לכל הפעילות.',
        ctaText: 'כניסה למערכת →',
        ctaUrl: 'https://crm.navitas.co.il',
      },
      benefits: [
        { icon: '🔒', title: 'גישה מאובטחת', description: 'כניסה עם חשבון Navitas המאושר שלך' },
        { icon: '📊', title: 'דשבורד ניהולי', description: 'כל הפרויקטים, הלידים וה-KPIs בזמן אמת' },
        { icon: '🏗️', title: 'מעקב פרויקטים', description: 'עקוב אחרי כל פרויקט מהחתימה ועד ה-IEC' },
      ],
    }},
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 850, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'לכידת אימייל + כשור',
  }},
  { id: 'lm-trial', type: 'touchpoint', position: { x: 850, y: 150 }, data: {
    label: 'ניסיון חינם — 14 יום (ללא כרטיס אשראי)', type: 'form',
    url: 'https://app.solar-os.com/login?mode=signup',
    asset: { contentType: 'form', content: {
      title: 'התחל ניסיון חינם — 14 יום',
      description: 'ללא כרטיס אשראי. ללא חוזה. מיגרציה מאקסל בחינם.',
      fields: [
        { name: 'full_name', label: 'שם מלא', type: 'text', required: true },
        { name: 'email', label: 'אימייל עסקי', type: 'email', required: true },
        { name: 'phone', label: 'טלפון / WhatsApp', type: 'phone', required: true },
        { name: 'company', label: 'שם החברה', type: 'text', required: true },
        { name: 'team_size', label: 'גודל הצוות', type: 'select', required: true, options: ['1-2 אנשים', '3-5 אנשים', '6-15 אנשים', '15+ אנשים'] },
        { name: 'projects_per_month', label: 'פרויקטים בחודש', type: 'select', options: ['1-5', '6-20', '21-50', '50+'] },
        { name: 'current_tool', label: 'מה אתם משתמשים היום?', type: 'select', options: ['אקסל / גיליון גוגל', 'WhatsApp + נייר', 'CRM אחר', 'אחר'] },
      ],
      submitLabel: 'צור חשבון חינם →',
      successMessage: 'ברוך הבא ל-Solar OS! שלחנו לך אימייל אישור. הכנו גם מדריך התחלה מהיר — 5 דקות לדשבורד ראשון.',
    }},
  }},
  { id: 'lm-demo', type: 'touchpoint', position: { x: 850, y: 300 }, data: {
    label: 'שיחת דמו אישית', type: 'form',
    url: 'https://solar-os.com/demo',
    asset: { contentType: 'form', content: {
      title: 'קבע דמו אישי — 20 דקות',
      description: 'נראה לך בדיוק איך Solar OS עובד עם התהליכים הספציפיים שלך. מותאם לגודל ולסוג החברה.',
      fields: [
        { name: 'full_name', label: 'שם מלא', type: 'text', required: true },
        { name: 'email', label: 'אימייל', type: 'email', required: true },
        { name: 'phone', label: 'טלפון', type: 'phone', required: true },
        { name: 'company', label: 'שם החברה', type: 'text', required: true },
        { name: 'company_type', label: 'סוג החברה', type: 'select', required: true, options: ['מתקין סולאר (EPC)', 'יועץ אנרגיה', 'חברת מימון סולארי', 'אחר'] },
        { name: 'challenge', label: 'מה האתגר הכי גדול שלך עכשיו?', type: 'textarea' },
      ],
      submitLabel: 'קבע שיחה →',
      successMessage: 'תודה! אחד מהצוות שלנו יחזור אליך תוך שעה לתאם זמן נוח.',
    }},
  }},
  { id: 'lm-webinar', type: 'touchpoint', position: { x: 850, y: 450 }, data: {
    label: 'וובינר: "איך לנהל 50 פרויקטים בלי אקסל"', type: 'page',
    url: 'https://solar-os.com/demo',
    asset: { contentType: 'leadMagnet', content: {
      title: 'וובינר חינם: "איך מנהלים 50 פרויקטי סולאר בלי אקסל"',
      description: 'שיחה מעשית של 45 דקות עם מתקינים שעברו ל-Solar OS. נדון בתהליכים, כלים, ושיטות עבודה שחוסכות שעות מדי שבוע.',
      format: 'webinar',
      gateFields: ['שם מלא', 'אימייל', 'שם החברה', 'מספר פרויקטים בחודש'],
      previewPoints: [
        'מבנה פייפליין לידים שעובד לחברות סולאר ישראליות',
        'איך להפחית זמן ניהול מסמכי IEC ב-80%',
        'ניהול צוות מתקינים עם תפקידים והרשאות',
        'Case study: EnerStar עברה מ-3 ימי ניהול ל-4 שעות בשבוע',
        'שאלות ותשובות חיות עם צוות Solar OS',
      ],
    }},
  }},
  { id: 'lm-whatsapp', type: 'touchpoint', position: { x: 850, y: 600 }, data: {
    label: 'WhatsApp Opt-in', type: 'whatsapp',
    asset: { contentType: 'whatsapp', content: {
      greeting: 'שלום! 👋 אני עוזר הדיגיטל של Solar OS.\n\nרוצה לראות איך Solar OS יכול לחסוך לך שעות עבודה בשבוע?\n\nכתוב ״כן״ ואשלח לך סרטון הדגמה של 3 דקות.',
      quickReplies: ['כן, שלח לי', 'כמה זה עולה?', 'יש ניסיון חינם?', 'אני רוצה לדבר עם נציג'],
      autoReply: 'מעולה! 🎉\n\nלפני שאשלח לך את הדמו, ספר לי:\n\n1️⃣ כמה פרויקטים אתה מנהל בחודש?\n2️⃣ מה אתה משתמש היום (אקסל? WhatsApp? אחר?)\n\nזה יעזור לי לשלוח לך את הדמו הכי רלוונטי.',
    }},
  }},

  // ── Decision: Qualified? ────────────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 850, y: 770 }, data: {
    question: 'פעיל בניסיון / שיחת דמו?',
    yesLabel: 'כשיר', noLabel: 'נארטור',
  }},

  // ── Stage 3: Email Onboarding Drip ───────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1250, y: 0 }, data: {
    label: 'Email Onboarding Drip', funnelStage: '3',
    description: 'רצף 5 מיילים — 14 יום ניסיון',
  }},
  { id: 'email-welcome', type: 'touchpoint', position: { x: 1250, y: 150 }, data: {
    label: 'יום 0: ברוך הבא + הגדרה ראשונית', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'ברוך הבא ל-Solar OS ☀️ — 3 צעדים להתחלה',
      preheader: 'הדשבורד שלך מוכן. בוא נתחיל.',
      sendDay: 0,
      body: '<p>שלום [שם],</p><p>ברוך הבא ל-Solar OS! 🎉</p><p>הדשבורד שלך מוכן — הנה 3 צעדים ראשונים שיעזרו לך להתחיל תוך 10 דקות:</p><ol><li><strong>יבא לידים מאקסל</strong> — לחץ על "יבא" בתפריט הראשי. המערכת מזהה עמודות עברית אוטומטית.</li><li><strong>צור פרויקט ראשון</strong> — עבור לטאב "פרויקטים" ולחץ "+פרויקט חדש".</li><li><strong>הזמן חבר צוות</strong> — כנס ל"הגדרות" ← "משתמשים" ← "הזמן".</li></ol><p>אם יש שאלות — אני זמין בוואטסאפ: <a href="https://wa.me/972502213948">שלח הודעה</a>.</p><p>— צוות Solar OS</p>',
      ctaText: 'כנס לדשבורד →',
      ctaUrl: 'https://app.solar-os.com',
    }},
  }},
  { id: 'email-features', type: 'touchpoint', position: { x: 1250, y: 280 }, data: {
    label: 'יום 3: 3 הפיצ\'רים שכולם אוהבים', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '3 הפיצ\'רים שמשתמשי Solar OS הכי אוהבים',
      preheader: 'חברות שמשתמשות בכולם חוסכות 6+ שעות בשבוע',
      sendDay: 3,
      body: '<p>שלום [שם],</p><p>כבר 3 ימים עם Solar OS. הגיע הזמן לגלות את 3 הפיצ\'רים שמשתמשים שלנו <em>לא מאמינים שחיו בלעדיהם:</em></p><h3>1. 🔍 בדיקת גוש וחלקה אוטומטית</h3><p>פתח כרטיס ליד, לחץ "בדוק בעלות" — Solar OS מושך נתונים ממשרד המשפטים בשניות. לא עוד חיפוש ידני.</p><h3>2. 📄 מסמכי IEC חד-לחיצה</h3><p>בסיום פרויקט לחץ "צור מסמכי הגשה" — המערכת מייצרת את כל הטפסים הנדרשים לרשות החשמל עם הנתונים שכבר הזנת.</p><h3>3. 📊 תצוגת Kanban לפרויקטים</h3><p>ראה את כל הפרויקטים לפי שלב (ליד → חוזה → התקנה → IEC → פעיל). גרור ושחרר בין עמודות.</p><p>כבר ניסית את אחד מהם?</p>',
      ctaText: 'נסה עכשיו →',
      ctaUrl: 'https://app.solar-os.com',
    }},
  }},
  { id: 'email-casestudy', type: 'touchpoint', position: { x: 1250, y: 410 }, data: {
    label: 'יום 7: Case Study — חברת סולאר ישראלית', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'איך EnerStar עברה מ-12 גיליונות אקסל לניהול מלא ב-Solar OS',
      preheader: 'מספרים אמיתיים מחברה ישראלית',
      sendDay: 7,
      body: '<p>שלום [שם],</p><p>EnerStar התקנות סולאריות הייתה בדיוק במקום שרוב חברות הסולאר מוצאות את עצמן:</p><ul><li>12 גיליונות אקסל עם לידים, פרויקטים ומסמכים</li><li>3-4 שגיאות בחודש בגלל גרסאות ישנות</li><li>שעות אבודות בחיפוש מסמכי IEC</li></ul><h3>מה קרה אחרי 30 יום עם Solar OS:</h3><ul><li>⏱️ <strong>זמן ניהול ירד ב-65%</strong> — מ-12 שעות לשבוע לפחות מ-4</li><li>📋 <strong>0 שגיאות נתונים</strong> — כל הצוות עובד על אותה מערכת</li><li>🏗️ <strong>20% יותר פרויקטים</strong> — עם אותו צוות בדיוק</li><li>📄 <strong>הגשת IEC: יום → 20 דקות</strong></li></ul><p>"לא חשבנו שנעזוב את האקסל. היום לא מסוגלים לחזור אליו." — אביב לוי, בעלים EnerStar</p>',
      ctaText: 'ראה את הסיפור המלא →',
      ctaUrl: 'https://solar-os.com/case-studies',
    }},
  }},
  { id: 'email-expiry', type: 'touchpoint', position: { x: 1250, y: 540 }, data: {
    label: 'יום 12: הניסיון מסתיים בעוד 48 שעות', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '⏳ [שם], הניסיון שלך ב-Solar OS מסתיים בעוד 48 שעות',
      preheader: 'אל תאבד את הנתונים שהזנת — שדרג עכשיו',
      sendDay: 12,
      body: '<p>שלום [שם],</p><p>הניסיון החינם שלך ב-Solar OS מסתיים <strong>ב-[תאריך]</strong> — כלומר, בעוד 48 שעות.</p><p>כרגע במערכת שלך:</p><ul><li>📋 [X] לידים</li><li>🏗️ [Y] פרויקטים</li><li>📄 [Z] מסמכים</li></ul><p><strong>אם לא תשדרג — כל הנתונים האלה יימחקו.</strong></p><p>כדי להמשיך, בחר תוכנית:</p><ul><li><strong>Starter ₪399/חודש</strong> — מתאים לצוות קטן</li><li><strong>Pro ₪899/חודש</strong> — ניטור + API + צוות גדול</li></ul><p>שאלות? ענה על המייל הזה או כתוב לנו בוואטסאפ.</p>',
      ctaText: 'שדרג ושמור את הנתונים →',
      ctaUrl: 'https://app.solar-os.com/billing',
    }},
  }},
  { id: 'email-offer', type: 'touchpoint', position: { x: 1250, y: 670 }, data: {
    label: 'יום 14: הצעה מיוחדת — 20% הנחה לחודש ראשון', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '🎁 [שם] — 20% הנחה + מיגרציה חינם, לשעות הקרובות בלבד',
      preheader: 'הצעה אחרונה לפני שהניסיון נגמר',
      sendDay: 14,
      body: '<p>שלום [שם],</p><p>ניסיון הניסיון שלך הסתיים — ואנחנו רוצים לעשות לך קל לעבור לגרסה מלאה.</p><h3>ההצעה: לשעות הקרובות בלבד</h3><ul><li>✅ <strong>20% הנחה על החודש הראשון</strong></li><li>✅ <strong>מיגרציה מאקסל בחינם</strong> (שווה ₪500)</li><li>✅ <strong>שיחת onboarding אישית</strong> עם צוות Solar OS</li></ul><p>קוד קופון: <strong>SOLAR14</strong></p><p>בחר תוכנית:</p><ul><li>Starter ₪319 לחודש הראשון (במקום ₪399)</li><li>Pro ₪719 לחודש הראשון (במקום ₪899)</li></ul>',
      ctaText: 'מימש את ההנחה → קוד: SOLAR14',
      ctaUrl: 'https://app.solar-os.com/billing?coupon=SOLAR14',
    }},
  }},
  { id: 'msg-whatsapp-followup', type: 'message', position: { x: 1250, y: 800 }, data: {
    content: 'היי [שם], ראינו שהתחלת את הניסיון ב-Solar OS. יש שאלות? נשמח לעזור 💬',
    language: 'HE',
  }},

  // ── Stage 4: Proposal ──────────────────────────────────────────
  { id: 'stage-proposal', type: 'stage', position: { x: 1650, y: 0 }, data: {
    label: 'Proposal', funnelStage: '4',
    description: 'דמו + הצעה מותאמת אישית',
  }},
  { id: 'tp-demo-call', type: 'touchpoint', position: { x: 1650, y: 150 }, data: {
    label: 'שיחת דמו — Zoom / טלפון', type: 'whatsapp',
    url: 'https://solar-os.com/demo',
    asset: { contentType: 'whatsapp', content: {
      greeting: 'שלום [שם] 👋\n\nתודה שנרשמת לדמו של Solar OS!\n\nאני [נציג] מצוות המכירות.\n\nמתי נוח לך לשיחה קצרה של 20 דקות?',
      quickReplies: ['היום אחה"צ', 'מחר בבוקר', 'שלח לי לינק Calendly', 'אני מעדיף Zoom'],
      autoReply: 'מעולה! 📅 אשלח לך לינק לתיאום:\nhttps://calendly.com/solar-os-demo\n\nבינתיים — יש לך שאלה ספציפית שתרצה שנכסה בדמו?',
    }},
  }},
  { id: 'tp-custom-onboard', type: 'touchpoint', position: { x: 1650, y: 300 }, data: {
    label: 'Onboarding מותאם + מיגרציה חינם', type: 'page',
    url: 'https://app.solar-os.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Onboarding אישי — מאפס לדשבורד מלא ב-48 שעות',
        subheadline: 'הצוות שלנו מגיר את הנתונים שלך, מגדיר את הפייפליין, ומדריך את הצוות — הכל כלול.',
        ctaText: 'קבע פגישת Onboarding →',
        ctaUrl: 'https://solar-os.com/demo',
      },
      benefits: [
        { icon: '📦', title: 'מיגרציה מאקסל', description: 'אנחנו מגירים את כל הנתונים הקיימים שלך — ללא עלות' },
        { icon: '⚙️', title: 'הגדרת תהליכים', description: 'מתאימים את הפייפליין לאופן העבודה הספציפי שלך' },
        { icon: '👥', title: 'הדרכת צוות', description: 'שיחת הדרכה חיה לכל המשתמשים בחברה' },
        { icon: '🔗', title: 'חיבור אינטגרציות', description: 'מחברים לניטור (SolarEdge, Huawei) ולכלים קיימים' },
      ],
    }},
  }},
  { id: 'tp-plan-select', type: 'touchpoint', position: { x: 1650, y: 450 }, data: {
    label: 'בחירת תוכנית — Starter / Pro / Enterprise', type: 'page',
    url: 'https://solar-os.com/pricing',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'בחר את התוכנית הנכונה לחברה שלך',
        subheadline: 'כל התוכניות כוללות ניסיון 14 יום, מיגרציה מאקסל, ותמיכה בעברית.',
        ctaText: 'השווה תוכניות →',
        ctaUrl: 'https://solar-os.com/pricing',
      },
      benefits: [
        { icon: '🌱', title: 'Starter ₪399/חודש', description: 'עד 5 משתמשים · 100 לידים · 20 פרויקטים' },
        { icon: '⚡', title: 'Pro ₪899/חודש', description: 'עד 15 משתמשים · ללא הגבלה · ניטור + API' },
        { icon: '🏢', title: 'Enterprise ₪1,999/חודש', description: 'ללא הגבלה · white-label · SLA · נציג ייעודי' },
      ],
      faq: [
        { q: 'אפשר להתחיל ב-Starter ולשדרג?', a: 'בהחלט. השדרוג מיידי ושומר את כל הנתונים.' },
        { q: 'מה קורה לנתונים אם אני מבטל?', a: 'אנחנו שומרים את הנתונים 30 יום לאחר הביטול לצורך ייצוא.' },
      ],
    }},
  }},

  // ── Decision: Ready to close? ──────────────────────────────────
  { id: 'dec-close', type: 'decision', position: { x: 1650, y: 620 }, data: {
    question: 'מוכן לרכישה?',
    yesLabel: 'כן', noLabel: 'התנגדויות',
  }},

  // ── Stage 5: Close ─────────────────────────────────────────────
  { id: 'stage-close', type: 'stage', position: { x: 2050, y: 0 }, data: {
    label: 'Close', funnelStage: '5',
    description: 'Stripe Checkout → CRM פעיל',
  }},
  { id: 'tp-starter', type: 'touchpoint', position: { x: 2050, y: 150 }, data: {
    label: 'Starter ₪399/mo — Stripe Checkout', type: 'page',
    url: 'https://app.solar-os.com/login?mode=signup',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Starter — ₪399 לחודש',
        subheadline: 'עד 5 משתמשים, 100 לידים, 20 פרויקטים פעילים. מתאים לחברות קטנות וצמיחה.',
        ctaText: 'הירשם — ₪399/חודש →',
        ctaUrl: 'https://app.solar-os.com/login?mode=signup&plan=starter',
      },
      benefits: [
        { icon: '✅', title: 'CRM מלא', description: 'לידים, פייפליין, ופרויקטים' },
        { icon: '✅', title: 'מסמכי IEC', description: 'יצירה אוטומטית' },
        { icon: '✅', title: 'דשבורד ניהולי', description: 'KPIs ומעקב' },
        { icon: '✅', title: 'תמיכה בעברית', description: 'צ\'אט + אימייל' },
      ],
    }},
  }},
  { id: 'tp-pro', type: 'touchpoint', position: { x: 2050, y: 300 }, data: {
    label: 'Pro ₪899/mo — Stripe Checkout', type: 'page',
    url: 'https://app.solar-os.com/login?mode=signup',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Pro — ₪899 לחודש',
        subheadline: 'עד 15 משתמשים, ללא הגבלת פרויקטים, ניטור מערכות + API. הבחירה של רוב הלקוחות.',
        ctaText: 'הירשם — ₪899/חודש →',
        ctaUrl: 'https://app.solar-os.com/login?mode=signup&plan=pro',
      },
      benefits: [
        { icon: '✅', title: 'כל פיצ\'רי Starter', description: 'כולל CRM ומסמכי IEC' },
        { icon: '✅', title: 'ניטור מערכות', description: 'SolarEdge, Huawei, SMA' },
        { icon: '✅', title: 'API Integrations', description: 'חיבור לכלים חיצוניים' },
        { icon: '⭐', title: 'הכי פופולרי', description: '68% מהלקוחות בוחרים Pro' },
      ],
    }},
  }},
  { id: 'tp-enterprise', type: 'touchpoint', position: { x: 2050, y: 450 }, data: {
    label: 'Enterprise ₪1,999/mo — Stripe Checkout', type: 'page',
    url: 'https://app.solar-os.com/login?mode=signup',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Enterprise — ₪1,999 לחודש',
        subheadline: 'משתמשים ללא הגבלה, white-label, מסד נתונים מבודל, SLA 99.9%, ונציג ייעודי.',
        ctaText: 'דבר איתנו — Enterprise →',
        ctaUrl: 'https://solar-os.com/demo?plan=enterprise',
      },
      benefits: [
        { icon: '✅', title: 'כל פיצ\'רי Pro', description: 'ניטור, API, ועוד' },
        { icon: '🏷️', title: 'White-Label', description: 'לוגו ודומיין מותאמים' },
        { icon: '🔐', title: 'DB מבודל', description: 'נתונים פרטיים לגמרי' },
        { icon: '📞', title: 'נציג ייעודי', description: 'Customer Success Manager' },
      ],
      faq: [
        { q: 'מה מחיר Enterprise לתשלום שנתי?', a: 'תשלום שנתי שווה ₪19,990 — חיסכון של ₪4,000 לעומת תשלום חודשי.' },
      ],
    }},
  }},
  { id: 'tp-crm-live', type: 'touchpoint', position: { x: 2050, y: 600 }, data: {
    label: 'CRM פעיל — dashboard ראשון', type: 'page',
    url: 'https://app.solar-os.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'ברוך הבא ל-Solar OS ☀️',
        subheadline: 'המערכת שלך פעילה. הצוות שלנו כאן לכל שאלה — בצ\'אט, אימייל, או וואטסאפ.',
        ctaText: 'עבור לדשבורד →',
        ctaUrl: 'https://app.solar-os.com',
      },
      benefits: [
        { icon: '🚀', title: 'דשבורד ראשון', description: 'KPIs, פרויקטים פעילים, ולידים ממתינים' },
        { icon: '📚', title: 'מרכז עזרה', description: 'מדריכים, סרטוני הדרכה, ושאלות נפוצות בעברית' },
        { icon: '💬', title: 'צ\'אט תמיכה', description: 'מענה תוך שעה בשעות עבודה' },
        { icon: '🔔', title: 'עדכונים', description: 'התראות על אירועים בפרויקטים ובלידים' },
      ],
    }},
  }},

  // ── KPIs: Funnel Performance ───────────────────────────────────
  { id: 'kpi-cac', type: 'kpi', position: { x: 2050, y: 770 }, data: {
    label: 'CAC', value: '₪200-500', target: '< ₪400', trend: 'down',
  }},
  { id: 'kpi-trial-cr', type: 'kpi', position: { x: 2250, y: 770 }, data: {
    label: 'Trial→Paid CR', value: '15-25%', target: '> 20%', trend: 'up',
  }},
  { id: 'kpi-mrr', type: 'kpi', position: { x: 2050, y: 920 }, data: {
    label: 'MRR Target', value: '₪20K', target: '₪50K', trend: 'up',
  }},
  { id: 'kpi-churn', type: 'kpi', position: { x: 2250, y: 920 }, data: {
    label: 'Monthly Churn', value: '< 5%', target: '< 3%', trend: 'down',
  }},
]

export const israelFunnelEdges: Edge[] = [
  // Ads → Landing Pages
  { id: 'e-adcrm-lpmain', source: 'ad-google-crm', target: 'lp-main', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-adsys-lpfeatures', source: 'ad-google-sys', target: 'lp-features', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-admeta-lpmain', source: 'ad-meta-groups', target: 'lp-main', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adretarget-lppricing', source: 'ad-meta-retarget', target: 'lp-pricing', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adli-lpdemo', source: 'ad-linkedin', target: 'lm-demo', animated: true, style: { stroke: '#0ea5e9' } },

  // Landing Pages → Lead Magnets
  { id: 'e-lpmain-trial', source: 'lp-main', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lpfeatures-trial', source: 'lp-features', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lppricing-trial', source: 'lp-pricing', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lpmain-webinar', source: 'lp-main', target: 'lm-webinar', style: { stroke: '#8b5cf6' } },
  { id: 'e-lpmain-wa', source: 'lp-main', target: 'lm-whatsapp', style: { stroke: '#22c55e' } },
  { id: 'e-lpnavitas-demo', source: 'lp-navitas', target: 'lm-demo', style: { stroke: '#f59e0b' } },

  // Lead Magnets → Decision
  { id: 'e-trial-dec', source: 'lm-trial', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-demo-dec', source: 'lm-demo', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-webinar-dec', source: 'lm-webinar', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-wa-dec', source: 'lm-whatsapp', target: 'dec-qualified', style: { stroke: '#27272a' } },

  // Decision → Nurture (yes) or Retarget (no)
  { id: 'e-dec-welcome', source: 'dec-qualified', target: 'email-welcome', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-dec-retarget', source: 'dec-qualified', target: 'ad-meta-retarget', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Email drip sequence
  { id: 'e-em1-em2', source: 'email-welcome', target: 'email-features', style: { stroke: '#8b5cf6' } },
  { id: 'e-em2-em3', source: 'email-features', target: 'email-casestudy', style: { stroke: '#8b5cf6' } },
  { id: 'e-em3-em4', source: 'email-casestudy', target: 'email-expiry', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-em5', source: 'email-expiry', target: 'email-offer', style: { stroke: '#8b5cf6' } },
  { id: 'e-em5-wa', source: 'email-offer', target: 'msg-whatsapp-followup', style: { stroke: '#22c55e' } },

  // Nurture → Proposal
  { id: 'e-em5-democall', source: 'email-offer', target: 'tp-demo-call', style: { stroke: '#f59e0b' } },
  { id: 'e-wa-democall', source: 'msg-whatsapp-followup', target: 'tp-demo-call', style: { stroke: '#22c55e' } },

  // Proposal flow
  { id: 'e-democall-onboard', source: 'tp-demo-call', target: 'tp-custom-onboard', style: { stroke: '#27272a' } },
  { id: 'e-onboard-plan', source: 'tp-custom-onboard', target: 'tp-plan-select', style: { stroke: '#27272a' } },
  { id: 'e-plan-dec', source: 'tp-plan-select', target: 'dec-close', style: { stroke: '#27272a' } },

  // Close decision
  { id: 'e-decclose-starter', source: 'dec-close', target: 'tp-starter', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-nurture', source: 'dec-close', target: 'email-casestudy', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Close flow
  { id: 'e-starter-crm', source: 'tp-starter', target: 'tp-crm-live', style: { stroke: '#27272a' } },
  { id: 'e-pro-crm', source: 'tp-pro', target: 'tp-crm-live', style: { stroke: '#27272a' } },
  { id: 'e-enterprise-crm', source: 'tp-enterprise', target: 'tp-crm-live', style: { stroke: '#27272a' } },

  // Stage connectors
  { id: 'e-st1-st2', source: 'stage-landing', target: 'stage-leadmag', style: { stroke: '#f59e0b' } },
  { id: 'e-st2-st3', source: 'stage-leadmag', target: 'stage-nurture', style: { stroke: '#f59e0b' } },
  { id: 'e-st3-st4', source: 'stage-nurture', target: 'stage-proposal', style: { stroke: '#f59e0b' } },
  { id: 'e-st4-st5', source: 'stage-proposal', target: 'stage-close', style: { stroke: '#f59e0b' } },
]
