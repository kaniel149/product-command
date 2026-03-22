import type { Node, Edge } from '@xyflow/react'

export const tmFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-meta-expat', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'Meta Ads — Expat Groups (Koh Phangan/Samui)', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'Stop Overpaying for Island Electricity',
      primaryText: '⚡ Paying 8-12 THB per unit on Koh Phangan or Samui?\n\nThat\'s 3-4x the mainland rate — and it\'s quietly destroying your margin.\n\nTM Energy installs solar for island resorts, villas, and businesses. We\'ve done it here. We know the PEA island process.\n\n📊 See what your roof could save you — free calculator, takes 60 seconds →',
      description: 'Free solar assessment for Koh Phangan & Samui businesses',
      callToAction: 'Calculate My Savings',
      destinationUrl: 'energy-tm.com',
      imagePrompt: 'Aerial drone shot of solar panels on a tropical resort roof with turquoise ocean and palm trees visible',
      variants: [
        {
          headline: 'Your Island Resort Could Be Saving ฿80,000/Month',
          primaryText: '🏝️ Most island resorts pay ฿60K-200K/month in electricity.\n\nWith solar, that drops by 60-80%.\n\nWe\'ve installed systems on Koh Phangan and Samui. No mainland contractor confusion — we know the island PEA process.\n\nFree site assessment → proposal in 48h.',
        },
        {
          headline: 'Solar on Koh Phangan? We\'ve Done It 12+ Times.',
          primaryText: '🌴 Island solar isn\'t the same as mainland solar.\n\nPEA island tariffs, salt-air panels, boat delivery logistics — we\'ve solved all of it.\n\nIf you\'re paying more than ฿5,000/month in electricity, solar will pay back in 3-5 years.\n\nGet your free island ROI report →',
        },
      ],
    }},
  }},
  { id: 'ad-meta-retarget', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'Meta Retargeting — Calculator Visitors', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'You Were ฿70,000 Away From Going Solar',
      primaryText: '📊 You checked your savings on our calculator.\n\nYou saw the numbers. The payback period. The monthly savings.\n\nDon\'t let another high electricity bill go by.\n\nBook a free 15-min call with our island solar specialist — this week only →',
      callToAction: 'Book Free Call',
      destinationUrl: 'energy-tm.com/book',
      imagePrompt: 'Split screen: receipt with high electricity bill on left, solar panel on tropical roof with green savings counter on right',
    }},
  }},
  { id: 'ad-google', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Google Ads — "Island Solar Thailand" Keywords', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'Solar Koh Phangan & Samui — Island Specialists | Free Assessment',
      primaryText: 'We install solar for island resorts, villas, and businesses in Thailand. PEA island process handled. Salt-resistant panels. 25-year warranty.',
      description: 'Free on-site energy assessment. Custom proposal in 48h. Trusted by 12+ island properties. TM Energy — island solar experts.',
      callToAction: 'Get Free Assessment',
      destinationUrl: 'energy-tm.com',
    }},
  }},
  { id: 'ad-line', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'LINE Ads — Thai Business Owners', type: 'ad',
    url: 'https://ads.line.biz',
    asset: { contentType: 'ad', content: {
      platform: 'line',
      headline: 'ลดค่าไฟเกาะ 70% ด้วยโซล่าเซลล์',
      primaryText: '⚡ ธุรกิจบนเกาะพะงันและเกาะสมุย จ่ายค่าไฟแพงกว่าแผ่นดินใหญ่ถึง 3 เท่า\n\n🌞 TM Energy ติดตั้งโซล่าเซลล์บนเกาะ ครบวงจร ไม่ต้องกังวลเรื่อง PEA เกาะ เราดูแลให้ทั้งหมด\n\n📊 คำนวณฟรี ใช้เวลา 60 วินาที →',
      callToAction: 'คำนวณฟรี',
      destinationUrl: 'energy-tm.com',
      imagePrompt: 'Solar panels on Thai resort roof with Thai text overlay showing electricity cost comparison',
    }},
  }},

  // ── KPIs: Ad Performance ────────────────────────────────────────
  { id: 'kpi-cpc', type: 'kpi', position: { x: 0, y: 600 }, data: {
    label: 'CPC', value: '$0.30-0.60', target: '< $0.50',
  }},
  { id: 'kpi-ctr', type: 'kpi', position: { x: 200, y: 600 }, data: {
    label: 'CTR', value: '1.8-3.5%', target: '> 2.5%', trend: 'up',
  }},

  // ── Stage 1: Landing Pages ──────────────────────────────────────
  { id: 'stage-landing', type: 'stage', position: { x: 400, y: 0 }, data: {
    label: 'Landing Pages', funnelStage: '1',
    description: 'High-intent island solar traffic',
  }},
  { id: 'lp-main', type: 'touchpoint', position: { x: 400, y: 150 }, data: {
    label: 'Main Website', type: 'page',
    url: 'https://energy-tm.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Island Electricity Is Expensive. Solar Doesn\'t Have to Be.',
        subheadline: 'TM Energy installs solar for resorts, villas, and businesses on Koh Phangan and Koh Samui. Cut your electricity bill by 60-80%. We handle the island PEA process end to end.',
        ctaText: 'Calculate My Island Savings →',
        ctaUrl: 'https://energy-tm.com/tools/calculator',
      },
      benefits: [
        { icon: '🏝️', title: 'Island-Specialist Installers', description: 'We\'ve done 12+ systems on Koh Phangan & Samui. We know the PEA island permit process.' },
        { icon: '⚡', title: '60-80% Bill Reduction', description: 'Island electricity runs 8-12 THB/kWh. Solar brings that down to under 3 THB/kWh effective cost.' },
        { icon: '🌿', title: 'Eco-Brand Uplift', description: 'Green credentials drive bookings. Eco-certified resorts see 15-20% more reservations.' },
        { icon: '💰', title: 'PPA Available ($0 Down)', description: 'Power Purchase Agreement: we install, you pay from your savings. No upfront capital required.' },
      ],
      socialProof: [
        { quote: 'Our bungalow resort was paying ฿120,000/month in electricity. After TM Energy installed solar, we\'re at ฿28,000. Payback in 4 years.', author: 'James K.', role: 'Bungalow Resort Owner, Koh Phangan' },
        { quote: 'I was worried about the island permit process. TM handled everything with PEA. Zero headaches for us.', author: 'Nattaporn S.', role: 'Hotel Manager, Koh Samui' },
      ],
      faq: [
        { q: 'Can solar actually work on a Thai island?', a: 'Yes — Thailand has 1,600-2,000 peak sun hours per year. Island locations often get more sun than the mainland. Salt-air panels with marine-grade coating are used for island installations.' },
        { q: 'How does PEA island permitting work?', a: 'Island electricity is managed by a separate PEA island authority. We\'ve done this process 12+ times. We handle all permits, inspections, and grid connection paperwork.' },
        { q: 'How much does a system cost?', a: 'Systems start at ฿600,000 (~$17K) for small commercial properties. Resorts typically invest ฿1.5M-3.5M. PPA option available with $0 down.' },
      ],
    }},
  }},
  { id: 'lp-islands', type: 'touchpoint', position: { x: 400, y: 300 }, data: {
    label: 'Island-Specific Landing Pages', type: 'page',
    url: 'https://energy-tm.com/koh-phangan-solar',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar Energy for Koh Phangan Resorts & Businesses',
        subheadline: 'Island electricity on Koh Phangan costs 8-12 THB/kWh — triple mainland rates. We\'ve installed solar for 12+ properties here. Your payback: 3-5 years.',
        ctaText: 'Get Free Island Assessment →',
        ctaUrl: 'https://energy-tm.com/audit',
      },
      benefits: [
        { icon: '🏄', title: 'Koh Phangan Specialists', description: '12+ installations on the island — we know every PEA office and permit step' },
        { icon: '🔋', title: 'Battery Storage Available', description: 'Island grid reliability issues? Add battery backup and protect your guests from outages' },
        { icon: '🌴', title: 'Salt-Air Panel Warranty', description: 'Marine-grade panels rated for coastal/island environments. 25-year performance guarantee' },
        { icon: '📱', title: 'LINE Support (Thai & English)', description: 'Our team is on the island. Reach us on LINE for quick answers in Thai or English' },
      ],
      socialProof: [
        { quote: 'We\'re a small resort on the north side of the island. TM Energy came out, assessed our roof, and delivered a proposal in 2 days. Installation took 5 days. Bill went from ฿45K to ฿9K.', author: 'Sophie M.', role: 'Eco-Resort Owner, Koh Phangan' },
      ],
      faq: [
        { q: 'Is there a TM Energy team on Koh Phangan?', a: 'Yes. Our installation team is based on the island. We do on-site assessments within 48h of booking.' },
        { q: 'Does solar work during rainy season?', a: 'Solar still produces 30-50% capacity on overcast days. Most systems are designed to overproduce in the dry season to offset rainy months.' },
      ],
    }},
  }},
  { id: 'lp-calculator', type: 'touchpoint', position: { x: 400, y: 450 }, data: {
    label: 'ROI Calculator', type: 'page',
    url: 'https://energy-tm.com/tools/calculator',
    asset: { contentType: 'form', content: {
      title: 'Island Solar Savings Calculator',
      description: 'Find out exactly how much you can save on Koh Phangan or Samui. Takes 60 seconds.',
      fields: [
        { name: 'monthly_bill', label: 'Monthly Electricity Bill (฿)', type: 'text', required: true },
        { name: 'island', label: 'Island', type: 'select', required: true, options: ['Koh Phangan', 'Koh Samui', 'Koh Tao', 'Other Thailand Island', 'Mainland Thailand'] },
        { name: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Resort/Hotel', 'Villa / Guesthouse', 'Restaurant / Bar', 'Dive School / Activity Center', 'Retail / Commercial', 'Residential'] },
        { name: 'roof_area', label: 'Approximate Roof Area (m²)', type: 'text' },
        { name: 'email', label: 'Email', type: 'email', required: true },
      ],
      submitLabel: 'Show My Savings →',
      successMessage: 'Your personalized island solar ROI report is on its way to your inbox!',
    }},
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 750, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'Email + LINE capture & qualification',
  }},
  { id: 'lm-guide', type: 'touchpoint', position: { x: 750, y: 150 }, data: {
    label: 'PDF: "Island Solar Guide Thailand 2026"', type: 'page',
    url: 'https://energy-tm.com/guide',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Island Solar Guide Thailand 2026',
      description: 'The complete guide to going solar on a Thai island. Written by TM Energy from 12+ island installations — covering PEA island permits, marine-grade equipment, financing, and real ROI numbers.',
      format: 'pdf',
      gateFields: ['Full Name', 'Email', 'Island / Location'],
      previewPoints: [
        'Why island electricity costs 3x mainland — and how solar changes that',
        'PEA island permit process: step-by-step (Koh Phangan, Koh Samui, Koh Tao)',
        'Marine-grade vs standard panels: what you actually need on an island',
        '3 real case studies with full ROI numbers (resort, restaurant, villa)',
        'PPA vs EPC financing: which structure works for island properties',
        'Battery storage for grid unreliability — cost/benefit analysis',
      ],
    }},
  }},
  { id: 'lm-audit', type: 'touchpoint', position: { x: 750, y: 300 }, data: {
    label: 'Free Energy Audit (gated)', type: 'form',
    url: 'https://energy-tm.com/audit',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Free Island Energy Audit',
      description: 'Our island solar specialists review your electricity bills and roof layout remotely, then deliver a personalised savings report within 24 hours.',
      format: 'audit',
      gateFields: ['Name', 'Email', 'Monthly Bill (฿)', 'Island'],
      previewPoints: [
        'Monthly and annual THB savings projection',
        'Recommended system size (kW) for your property',
        'Payback period (typically 3-5 years on islands)',
        'PPA vs EPC financing comparison for your budget',
        'PEA island permit timeline and process overview',
      ],
    }},
  }},
  { id: 'lm-line', type: 'touchpoint', position: { x: 750, y: 450 }, data: {
    label: 'LINE OA Opt-in', type: 'whatsapp',
    url: 'https://line.me/ti/p/@tmenergy',
    asset: { contentType: 'whatsapp', content: {
      greeting: 'Hi there! 👋 This is TM Energy — island solar specialists on Koh Phangan & Samui.\n\nWant a free electricity savings estimate for your property?\n\nReply "YES" to get started, or ask any question in Thai or English.',
      quickReplies: ['Yes, estimate my savings', 'How much does it cost?', 'See a case study', 'Do you do PPA?', 'สนใจคำนวณค่าไฟ'],
      autoReply: 'Great! 🌞 To prepare your estimate, I need a few quick details:\n\n1️⃣ Which island are you on?\n2️⃣ Your average monthly electricity bill (฿)\n3️⃣ Property type (resort, villa, restaurant...)\n\nTake your time — I\'m here.',
    }},
  }},

  // ── Decision: Qualified? ────────────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 750, y: 600 }, data: {
    question: 'Bill > ฿5,000/mo or system > 5kW?',
    yesLabel: 'Qualified', noLabel: 'Nurture',
  }},

  // ── Stage 3: Email + LINE Sequences ───────────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1100, y: 0 }, data: {
    label: 'Nurture Sequence', funnelStage: '3',
    description: '4-email drip over 14 days',
  }},
  { id: 'email-welcome', type: 'touchpoint', position: { x: 1100, y: 150 }, data: {
    label: 'Day 0: Welcome + Island ROI Snapshot', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Your island solar savings estimate — ฿[savings]/month',
      preheader: 'Based on your electricity bill, here\'s what solar looks like for your property',
      sendDay: 0,
      body: '<p>Hi [Name],</p><p>Thanks for using our island solar calculator.</p><p>Based on your <strong>฿[bill]/month</strong> electricity bill on <strong>[island]</strong>, here\'s your quick snapshot:</p><h3>Your Estimated Savings</h3><ul><li>💰 <strong>Monthly savings:</strong> ฿[savings]/month</li><li>📊 <strong>Annual savings:</strong> ฿[annual]/year</li><li>⏱️ <strong>Payback period:</strong> [years] years</li><li>⚡ <strong>Estimated system size:</strong> [kw] kW</li></ul><p>Island electricity on Koh Phangan and Samui runs 8-12 THB/kWh — about 3x mainland rates. That\'s what makes island solar so compelling: the savings are bigger, and the payback is faster.</p><p>Want the full detailed report — including the PEA island permit timeline and PPA vs EPC financing comparison?</p>',
      ctaText: 'View My Full Island Report →',
      ctaUrl: 'https://energy-tm.com/report/[id]',
    }},
  }},
  { id: 'email-casestudy', type: 'touchpoint', position: { x: 1100, y: 280 }, data: {
    label: 'Day 3: Case Study — Koh Phangan Resort', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'How a Koh Phangan resort went from ฿120K to ฿28K/month in electricity',
      preheader: 'Real numbers from a real island installation — 5-day install, 4-year payback',
      sendDay: 3,
      body: '<p>Hi [Name],</p><p>Last time I sent you your savings snapshot. Today, a real example from someone like you.</p><h3>🏝️ Case Study: Bungalow Resort, Koh Phangan North Coast</h3><table style="border-collapse:collapse;width:100%"><tr><td style="padding:8px;border:1px solid #333"><strong>Before solar</strong></td><td style="padding:8px;border:1px solid #333">฿120,000/month</td></tr><tr><td style="padding:8px;border:1px solid #333"><strong>System installed</strong></td><td style="padding:8px;border:1px solid #333">32 kW rooftop + salt-air coating</td></tr><tr><td style="padding:8px;border:1px solid #333"><strong>After solar</strong></td><td style="padding:8px;border:1px solid #333">฿28,000/month (77% reduction)</td></tr><tr><td style="padding:8px;border:1px solid #333"><strong>Payback period</strong></td><td style="padding:8px;border:1px solid #333">3.9 years</td></tr><tr><td style="padding:8px;border:1px solid #333"><strong>Installation time</strong></td><td style="padding:8px;border:1px solid #333">5 days</td></tr></table><p style="margin-top:16px">Bonus: the owner added a small "solar-powered resort" badge to their Booking.com profile. Bookings increased 18% in the following quarter.</p><p>The PEA island permit took 3 weeks. We handled all of it.</p><p>Want to see what a similar system would look like for your property?</p>',
      ctaText: 'Request My Free Assessment →',
      ctaUrl: 'https://energy-tm.com/audit',
    }},
  }},
  { id: 'email-pea', type: 'touchpoint', position: { x: 1100, y: 410 }, data: {
    label: 'Day 7: How Island PEA Rates Work + Savings Breakdown', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Why island electricity is so expensive — and what to do about it',
      preheader: 'The PEA island tariff explained, and how solar changes the math',
      sendDay: 7,
      body: '<p>Hi [Name],</p><p>If you\'ve ever looked at your electricity bill and wondered why it\'s so much higher than the mainland — here\'s why.</p><h3>The Island PEA Rate Problem</h3><p>The Provincial Electricity Authority (PEA) operates separate distribution infrastructure on Thai islands. Because there\'s no mainland grid connection, PEA has to generate power locally (often via diesel generators), which drives the cost up to <strong>8-12 THB/kWh</strong> — vs 3-4 THB/kWh on the mainland.</p><p>That gap is exactly why solar ROI is so much stronger on islands.</p><h3>The Solar Math on an Island</h3><ul><li>🏝️ Effective solar cost: ~2.8 THB/kWh (system amortized over 25 years)</li><li>⚡ Grid cost you avoid: 8-12 THB/kWh</li><li>📊 Savings ratio: <strong>3-4x compared to mainland solar</strong></li></ul><h3>Two Ways to Finance</h3><p><strong>EPC (You Own It):</strong> Pay upfront (฿600K-3.5M). You own the system and 100% of savings. Payback in 3-5 years, then 20+ years of near-free electricity.</p><p><strong>PPA ($0 Down):</strong> We install at no cost. You buy the electricity at a fixed discounted rate for 15 years. Savings start from month one. No maintenance costs — we handle everything.</p>',
      ctaText: 'Compare Financing for My Property →',
      ctaUrl: 'https://energy-tm.com/financing',
    }},
  }},
  { id: 'email-urgency', type: 'touchpoint', position: { x: 1100, y: 540 }, data: {
    label: 'Day 14: Limited Free Site Visits This Month', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '[Name], our island team has 4 assessment slots left this month',
      preheader: 'First-come, first-served — includes on-site visit + custom proposal',
      sendDay: 14,
      body: '<p>Hi [Name],</p><p>Quick heads-up — our Koh Phangan/Samui assessment team has <strong>4 free site visit slots remaining this month</strong>.</p><p>Each slot includes:</p><ul><li>✅ On-site roof survey (our team comes to you)</li><li>✅ Shade and orientation analysis</li><li>✅ Custom system design for your property</li><li>✅ Financial proposal: EPC + PPA options side-by-side</li><li>✅ PEA island permit timeline and process overview</li></ul><p>Valued at ฿8,000 — free for properties with a monthly bill above ฿10,000.</p><p>We\'ve been exchanging emails for two weeks. I think solar makes sense for your property. The only question is timing.</p><p>If you book this month, installation can begin within 30 days.</p>',
      ctaText: 'Book My Free Site Visit →',
      ctaUrl: 'https://energy-tm.com/audit',
    }},
  }},
  { id: 'msg-line-followup', type: 'message', position: { x: 1100, y: 670 }, data: {
    content: 'Hi [Name] 👋 It\'s [Rep] from TM Energy. Did you get a chance to look at your savings report? I\'m on the island this week — happy to swing by for a quick look at your roof. No pressure, just a conversation. What works for you?',
    language: 'EN',
  }},

  // ── Stage 4: Proposal ──────────────────────────────────────────
  { id: 'stage-proposal', type: 'stage', position: { x: 1450, y: 0 }, data: {
    label: 'Proposal', funnelStage: '4',
    description: 'Site visit → custom proposal',
  }},
  { id: 'tp-site-visit', type: 'touchpoint', position: { x: 1450, y: 150 }, data: {
    label: 'Free On-Site Energy Assessment', type: 'form',
    url: 'https://energy-tm.com/audit',
    asset: { contentType: 'form', content: {
      title: 'Book Your Free Island Solar Assessment',
      description: 'Our team visits your property on Koh Phangan or Samui, surveys your roof, and delivers a custom proposal within 48 hours. Available in English and Thai.',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone / LINE ID / WhatsApp', type: 'phone', required: true },
        { name: 'island', label: 'Island', type: 'select', required: true, options: ['Koh Phangan', 'Koh Samui', 'Koh Tao', 'Other'] },
        { name: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Resort / Hotel', 'Villa / Guesthouse', 'Restaurant / Bar', 'Dive School / Activity Center', 'Retail / Commercial', 'Residential Home'] },
        { name: 'monthly_bill', label: 'Monthly Electricity Bill (฿)', type: 'text', required: true },
        { name: 'preferred_date', label: 'Preferred Assessment Date', type: 'text' },
        { name: 'notes', label: 'Anything else we should know?', type: 'textarea' },
      ],
      submitLabel: 'Request Free Site Visit →',
      successMessage: 'Booked! Our island team will contact you within 24 hours to confirm your assessment time.',
    }},
  }},
  { id: 'tp-proposal', type: 'touchpoint', position: { x: 1450, y: 300 }, data: {
    label: 'Custom Proposal + ROI Report', type: 'page',
    url: 'https://energy-tm.com/tools/proposal',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Your Custom Island Solar Proposal',
        subheadline: 'Tailored system design, island PEA permit timeline, and full financial analysis — EPC and PPA options side by side.',
        ctaText: 'Download Proposal PDF',
        ctaUrl: 'https://energy-tm.com/tools/proposal',
      },
      benefits: [
        { icon: '📐', title: 'Island-Optimised System Design', description: 'Panel layout designed for your specific roof, orientation, and island shading patterns' },
        { icon: '💰', title: 'EPC vs PPA Side-by-Side', description: '25-year financial model showing net present value for both financing paths' },
        { icon: '📋', title: 'PEA Island Permit Timeline', description: 'Step-by-step permit process with realistic timelines — no surprises' },
        { icon: '🔧', title: 'Marine-Grade Equipment Specs', description: 'Salt-air rated panels, island-spec inverters, and 25-year warranty details' },
      ],
    }},
  }},
  { id: 'tp-meeting', type: 'touchpoint', position: { x: 1450, y: 450 }, data: {
    label: 'In-Person Presentation / LINE Video Call', type: 'whatsapp',
    url: 'https://line.me/ti/p/@tmenergy',
    asset: { contentType: 'whatsapp', content: {
      greeting: 'Hi [Name] 👋\n\nThis is [Rep] from TM Energy. Your island solar proposal is ready!\n\nI\'d love to walk you through it — takes about 20 minutes. Would you prefer:\n\n🏝️ In-person on the island\n📱 LINE video call\n\nWhat works best for you?',
      quickReplies: ['In-person meeting', 'LINE video call', 'Send proposal by email first', 'I have some questions', 'นัดพบในเกาะ'],
      autoReply: 'Perfect! Let me find a time that works.\n\n📅 This week options:\n🕐 Morning (9am-12pm)\n🕐 Afternoon (2pm-5pm)\n🕐 Evening (after 6pm)\n\nWhat day suits you?',
    }},
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
    label: 'Contract Signing', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Ready to Start Saving ☀️',
        subheadline: 'Review and sign your island solar installation contract. Digital signature — sign from your phone or laptop.',
        ctaText: 'Sign My Contract →',
      },
      benefits: [
        { icon: '📋', title: 'Clear Contract Terms', description: 'No hidden fees. Equipment specs, installation scope, and warranty terms all in plain English (and Thai).' },
        { icon: '✍️', title: 'Digital Signature', description: 'Sign from anywhere — no printing, no faxing' },
        { icon: '🛡️', title: '25-Year Panel Warranty', description: 'Marine-grade panels with salt-air performance guarantee' },
        { icon: '📞', title: 'Questions Before Signing?', description: 'Call or LINE us — we want you 100% comfortable before you sign' },
      ],
    }},
  }},
  { id: 'tp-deposit', type: 'touchpoint', position: { x: 1800, y: 300 }, data: {
    label: '30% Deposit — PromptPay / Bank Transfer / Stripe', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Secure Your Installation Date',
        subheadline: '30% deposit confirms your slot and begins equipment procurement. Pay via PromptPay, Thai bank transfer, or international card (Stripe).',
        ctaText: 'Pay Deposit →',
      },
      benefits: [
        { icon: '📱', title: 'PromptPay', description: 'Instant THB transfer via QR code — fastest for Thai residents' },
        { icon: '🏦', title: 'Bank Transfer', description: 'Thai or international bank transfer accepted' },
        { icon: '💳', title: 'Stripe (Card)', description: 'Visa/Mastercard via Stripe — for international clients' },
      ],
    }},
  }},
  { id: 'tp-crm', type: 'touchpoint', position: { x: 1800, y: 450 }, data: {
    label: 'CRM Onboarding → Project Created', type: 'page',
    url: 'https://energy-tm.com/tools/crm',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Welcome to TM Energy ☀️',
        subheadline: 'Your island solar project is live. Track permits, installation milestones, and system performance from your dashboard.',
        ctaText: 'View My Project →',
        ctaUrl: 'https://energy-tm.com/tools/crm',
      },
      benefits: [
        { icon: '📊', title: 'Project Dashboard', description: 'Real-time status: permit stage, equipment delivery, installation schedule' },
        { icon: '📑', title: 'Document Center', description: 'PEA permits, installation records, and warranty docs in one place' },
        { icon: '📱', title: 'LINE Notifications', description: 'Get notified at every milestone via LINE — the way we communicate on the island' },
        { icon: '⚡', title: 'Live System Monitoring', description: 'See your system\'s output and savings in real time once live' },
      ],
    }},
  }},

  // ── KPIs: Funnel Performance ───────────────────────────────────
  { id: 'kpi-cac', type: 'kpi', position: { x: 1800, y: 600 }, data: {
    label: 'CAC', value: '$100-200', target: '< $200', trend: 'down',
  }},
  { id: 'kpi-cr', type: 'kpi', position: { x: 2000, y: 600 }, data: {
    label: 'Lead → Close CR', value: '8-15%', target: '> 10%', trend: 'up',
  }},
  { id: 'kpi-cycle', type: 'kpi', position: { x: 1800, y: 750 }, data: {
    label: 'Sales Cycle', value: '2 mo avg', target: '1-4 mo', trend: 'down',
  }},
  { id: 'kpi-ltv', type: 'kpi', position: { x: 2000, y: 750 }, data: {
    label: 'LTV', value: '$6,000-20,000', target: '> $8K',
  }},
]

export const tmFunnelEdges: Edge[] = [
  // Ads → Landing Pages
  { id: 'e-admeta-lpmain', source: 'ad-meta-expat', target: 'lp-main', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-admeta-rt-lpcalc', source: 'ad-meta-retarget', target: 'lp-calculator', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adgoog-lpislands', source: 'ad-google', target: 'lp-islands', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-adline-lpmain', source: 'ad-line', target: 'lp-main', animated: true, style: { stroke: '#22c55e' } },

  // Landing Pages → Lead Magnets
  { id: 'e-lpmain-lmguide', source: 'lp-main', target: 'lm-guide', style: { stroke: '#f59e0b' } },
  { id: 'e-lpislands-lmaudit', source: 'lp-islands', target: 'lm-audit', style: { stroke: '#f59e0b' } },
  { id: 'e-lpcalc-lmaudit', source: 'lp-calculator', target: 'lm-audit', style: { stroke: '#f59e0b' } },
  { id: 'e-lpmain-lmline', source: 'lp-main', target: 'lm-line', style: { stroke: '#22c55e' } },

  // Lead Magnets → Decision
  { id: 'e-lmguide-dec', source: 'lm-guide', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmaudit-dec', source: 'lm-audit', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmline-dec', source: 'lm-line', target: 'dec-qualified', style: { stroke: '#27272a' } },

  // Decision → Nurture (yes) or Retarget (no)
  { id: 'e-dec-welcome', source: 'dec-qualified', target: 'email-welcome', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-dec-retarget', source: 'dec-qualified', target: 'ad-meta-retarget', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Email sequence flow
  { id: 'e-em1-em2', source: 'email-welcome', target: 'email-casestudy', style: { stroke: '#8b5cf6' } },
  { id: 'e-em2-em3', source: 'email-casestudy', target: 'email-pea', style: { stroke: '#8b5cf6' } },
  { id: 'e-em3-em4', source: 'email-pea', target: 'email-urgency', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-line', source: 'email-urgency', target: 'msg-line-followup', style: { stroke: '#22c55e' } },

  // Nurture → Proposal
  { id: 'e-em4-visit', source: 'email-urgency', target: 'tp-site-visit', style: { stroke: '#f59e0b' } },
  { id: 'e-line-visit', source: 'msg-line-followup', target: 'tp-site-visit', style: { stroke: '#22c55e' } },

  // Proposal flow
  { id: 'e-visit-prop', source: 'tp-site-visit', target: 'tp-proposal', style: { stroke: '#27272a' } },
  { id: 'e-prop-meeting', source: 'tp-proposal', target: 'tp-meeting', style: { stroke: '#27272a' } },
  { id: 'e-meeting-dec', source: 'tp-meeting', target: 'dec-close', style: { stroke: '#27272a' } },

  // Close decision
  { id: 'e-decclose-contract', source: 'dec-close', target: 'tp-contract', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-nurture', source: 'dec-close', target: 'email-pea', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Close flow
  { id: 'e-contract-deposit', source: 'tp-contract', target: 'tp-deposit', style: { stroke: '#27272a' } },
  { id: 'e-deposit-crm', source: 'tp-deposit', target: 'tp-crm', style: { stroke: '#27272a' } },

  // Stage connectors
  { id: 'e-st1-st2', source: 'stage-landing', target: 'stage-leadmag', style: { stroke: '#f59e0b' } },
  { id: 'e-st2-st3', source: 'stage-leadmag', target: 'stage-nurture', style: { stroke: '#f59e0b' } },
  { id: 'e-st3-st4', source: 'stage-nurture', target: 'stage-proposal', style: { stroke: '#f59e0b' } },
  { id: 'e-st4-st5', source: 'stage-proposal', target: 'stage-close', style: { stroke: '#f59e0b' } },
]
