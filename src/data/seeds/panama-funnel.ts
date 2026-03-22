import type { Node, Edge } from '@xyflow/react'

export const panamaFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-meta', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'Meta Ads — Solar Savings', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'Reduce Your Electricity Bill by 70%',
      primaryText: '☀️ Panama gets 2,000+ hours of sun per year — your roof is a goldmine.\n\nHotel and business owners in Pedasí, Chitré, and Coronado are already saving $500-2,000/month with solar.\n\n📊 Get your free ROI report in 60 seconds →',
      description: 'Free solar assessment for Panama businesses',
      callToAction: 'Get Free Quote',
      destinationUrl: 'solaris-panama.com',
      imagePrompt: 'Aerial view of solar panels on a Panama resort roof with ocean in background',
      variants: [
        { headline: 'Your Roof Is Losing You Money Every Day', primaryText: '🏨 Hotels in Panama pay $3,000-8,000/month in electricity. What if you could cut that by 70%?\n\nSolaris installs commercial solar systems with $0 down (PPA option).\n\nFree site assessment → Custom proposal in 48h' },
        { headline: 'Su Techo Ya Genera Dinero. Solo Falta Activarlo.', primaryText: '🇵🇦 Más de 50 empresas en Panamá ya ahorran con energía solar.\n\nEvaluación gratuita de su techo en 60 segundos.\nPropuesta personalizada en 48 horas.\nFinanciamiento disponible (EPC o PPA).' },
      ],
    }},
  }},
  { id: 'ad-meta-retarget', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'Meta Retargeting — Calculator Visitors', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'You Were Close to Saving $18,000/Year',
      primaryText: '📊 You used our solar calculator and saw the numbers.\n\nDon\'t let $1,500/month in savings slip away.\n\nBook a free 15-min call with our Panama solar specialist →',
      callToAction: 'Book Free Call',
      destinationUrl: 'solaris-panama.com/book',
      imagePrompt: 'ROI dashboard showing savings graph going up',
    }},
  }},
  { id: 'ad-google', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Google Ads — "Solar Panama" Keywords', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'Solar Panels Panama — Cut Bills 70% | Free Assessment',
      primaryText: 'Commercial & residential solar installations across Panama. EPC & PPA financing available. 25-year warranty. ROI in 3-5 years.',
      description: 'Get a free site assessment and custom proposal in 48 hours. Solaris — trusted by 50+ Panama businesses.',
      callToAction: 'Get Free Quote',
      destinationUrl: 'solaris-panama.com',
    }},
  }},
  { id: 'ad-google-local', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'Google Local — Town Pages SEO', type: 'ad',
    url: 'https://solaris-panama.com/towns/solar-chitre.html',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'Solar Panels in Chitré — #1 Local Installer | Solaris',
      primaryText: 'Chitré businesses save $800-3,000/month with solar. Free site assessment by our Azuero team. Commercial & residential.',
      description: 'Local installations in Chitré, Las Tablas, Pedasí. 25-year panel warranty. Financing available.',
      callToAction: 'Get Local Quote',
      destinationUrl: 'solaris-panama.com/towns/solar-chitre.html',
    }},
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
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Su Techo Ya Genera Dinero. Solo Falta Activarlo.',
        subheadline: 'Commercial and residential solar installations across Panama. Cut electricity costs by 70%. Free assessment in 60 seconds.',
        ctaText: 'Calculate My Savings →',
        ctaUrl: 'https://solaris-panama.com/#calculator',
      },
      benefits: [
        { icon: '⚡', title: '70% Bill Reduction', description: 'Average savings for Panama commercial clients' },
        { icon: '🏗️', title: '$0 Down Options', description: 'PPA financing — pay from your savings' },
        { icon: '🛡️', title: '25-Year Warranty', description: 'Tier-1 panels with performance guarantee' },
        { icon: '📊', title: 'ROI in 3-5 Years', description: 'Panama sunshine = fast payback' },
      ],
      socialProof: [
        { quote: 'We cut our hotel electricity bill from $4,200 to $1,100/month. Solaris handled everything.', author: 'Carlos M.', role: 'Hotel Owner, Pedasí' },
        { quote: 'The PPA option meant zero upfront cost. We started saving from month one.', author: 'Andrea R.', role: 'Supermarket Chain Manager' },
      ],
      faq: [
        { q: 'How much does a system cost?', a: '$15,000-80,000 depending on size. PPA option available with $0 down.' },
        { q: 'How long does installation take?', a: '2-6 weeks for commercial, 1-2 weeks for residential.' },
        { q: 'Do you handle permits?', a: 'Yes — we manage all permits and grid connection paperwork.' },
      ],
    }},
  }},
  { id: 'lp-hotel', type: 'touchpoint', position: { x: 400, y: 300 }, data: {
    label: 'Hotel/Resort Landing', type: 'page',
    url: 'https://solaris-panama.com/towns/solar-pedasi.html',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar Energy for Panama Hotels & Resorts',
        subheadline: 'Turn your flat roof into a revenue generator. Eco-brand your property while cutting costs by $2,000-5,000/month.',
        ctaText: 'Get Hotel Assessment →',
      },
      benefits: [
        { icon: '🏨', title: 'Hotel-Specific Design', description: 'Systems designed around guest experience' },
        { icon: '🌿', title: 'Eco-Certification', description: 'Boost bookings with green credentials' },
        { icon: '💰', title: 'PPA = No Capex', description: 'Power Purchase Agreement option available' },
        { icon: '📈', title: '15-20% More Bookings', description: 'Eco-conscious travelers prefer green hotels' },
      ],
      socialProof: [
        { quote: 'Our TripAdvisor eco-badge and solar panels increased bookings by 22% in the first season.', author: 'Marco D.', role: 'Boutique Hotel, Pedasí' },
      ],
    }},
  }},
  { id: 'lp-calculator', type: 'touchpoint', position: { x: 400, y: 450 }, data: {
    label: 'ROI Calculator', type: 'page',
    url: 'https://crm.solaris-panama.com/tools/calculator',
    asset: { contentType: 'form', content: {
      title: 'Solar Savings Calculator',
      description: 'See exactly how much you can save with solar in 60 seconds.',
      fields: [
        { name: 'monthly_bill', label: 'Monthly Electricity Bill ($)', type: 'text', required: true },
        { name: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Hotel/Resort', 'Commercial', 'Residential', 'Industrial', 'Agricultural'] },
        { name: 'roof_area', label: 'Approximate Roof Area (m²)', type: 'text' },
        { name: 'location', label: 'Location', type: 'select', options: ['Panama City', 'Pedasí', 'Chitré', 'Coronado', 'David', 'Bocas del Toro', 'Other'] },
        { name: 'email', label: 'Email', type: 'email', required: true },
      ],
      submitLabel: 'Calculate My Savings →',
      successMessage: 'Your personalized ROI report has been sent to your email!',
    }},
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 750, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'Email capture & qualification',
  }},
  { id: 'lm-guide', type: 'touchpoint', position: { x: 750, y: 150 }, data: {
    label: 'PDF: "Guía Solar Panamá 2026"', type: 'page',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Guía Solar Panamá 2026',
      description: 'The complete guide to solar energy for Panama businesses. Market data, financing options, ROI analysis, and case studies.',
      format: 'pdf',
      gateFields: ['Full Name', 'Email', 'Business Type'],
      previewPoints: [
        'Panama solar irradiance data by region',
        'EPC vs PPA financing comparison',
        '5 real case studies with ROI numbers',
        'Step-by-step permit process explained',
        'Tax incentives and government programs',
      ],
    }},
  }},
  { id: 'lm-roi', type: 'touchpoint', position: { x: 750, y: 300 }, data: {
    label: 'Custom ROI Report (gated)', type: 'form',
    url: 'https://crm.solaris-panama.com/tools/calculator',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Your Personalized Solar ROI Report',
      description: 'Based on your electricity bill and location, we calculate your exact savings, payback period, and system size.',
      format: 'calculator',
      gateFields: ['Email', 'Monthly Bill ($)', 'Location'],
      previewPoints: [
        'Monthly and annual savings projection',
        'Recommended system size (kW)',
        'Payback period calculation',
        'EPC vs PPA cost comparison',
        '25-year financial forecast',
      ],
    }},
  }},
  { id: 'lm-whatsapp', type: 'touchpoint', position: { x: 750, y: 450 }, data: {
    label: 'WhatsApp Opt-in', type: 'whatsapp',
    asset: { contentType: 'whatsapp', content: {
      greeting: '¡Hola! 👋 Soy el asistente de Solaris Panamá.\n\n¿Le gustaría recibir una evaluación solar gratuita de su propiedad?\n\nEscriba "SÍ" para comenzar.',
      quickReplies: ['SÍ, quiero evaluar', '¿Cuánto cuesta?', 'Ver caso de éxito', '¿Tienen financiamiento?'],
      autoReply: '¡Genial! Para preparar su evaluación, necesito:\n\n1️⃣ Su factura mensual de electricidad\n2️⃣ Tipo de propiedad (hotel, comercial, residencial)\n3️⃣ Ubicación\n\n¿Puede enviarme esta información?',
    }},
  }},

  // ── Decision: Qualified? ────────────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 750, y: 600 }, data: {
    question: 'Roof > 50m² & Bill > $200/mo?',
    yesLabel: 'Qualified', noLabel: 'Nurture',
  }},

  // ── Stage 3: Email Sequences ───────────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1100, y: 0 }, data: {
    label: 'Email Nurture', funnelStage: '3',
    description: '4-email drip over 14 days',
  }},
  { id: 'email-welcome', type: 'touchpoint', position: { x: 1100, y: 150 }, data: {
    label: 'Day 0: Welcome + ROI Summary', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Your Solar Savings Report — $18,240/year potential',
      preheader: 'Based on your electricity bill, here\'s what solar can do for you',
      sendDay: 0,
      body: '<p>Hi [Name],</p><p>Thanks for using our solar calculator! Based on your <strong>$[bill]/month</strong> electricity bill in <strong>[location]</strong>, here\'s your summary:</p><h3>Your Projected Savings</h3><ul><li>💰 <strong>Monthly savings:</strong> $[savings]/month</li><li>📊 <strong>Annual savings:</strong> $[annual]/year</li><li>⏱️ <strong>Payback period:</strong> [years] years</li><li>⚡ <strong>System size:</strong> [kw] kW</li></ul><p>Want to see the full detailed report with financing options (EPC vs PPA)?</p>',
      ctaText: 'View Full Report →',
      ctaUrl: 'https://solaris-panama.com/report/[id]',
    }},
  }},
  { id: 'email-casestudy', type: 'touchpoint', position: { x: 1100, y: 280 }, data: {
    label: 'Day 3: Case Study — Hotel Pedasi', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'How a Pedasí hotel cut their bill from $4,200 to $1,100/month',
      preheader: 'Real numbers from a real Panama installation',
      sendDay: 3,
      body: '<p>Hi [Name],</p><p>Last week, I shared your savings potential. Today, let me show you a real example.</p><h3>🏨 Case Study: Boutique Hotel, Pedasí</h3><ul><li><strong>Before:</strong> $4,200/month electricity</li><li><strong>System:</strong> 45 kW rooftop solar</li><li><strong>After:</strong> $1,100/month (74% reduction)</li><li><strong>Payback:</strong> 3.8 years</li><li><strong>Bonus:</strong> TripAdvisor eco-badge → 22% booking increase</li></ul><p>Their system has been running for 14 months with zero issues.</p><p>Would you like to see what a similar system would look like for your property?</p>',
      ctaText: 'Get My Free Assessment →',
      ctaUrl: 'https://solaris-panama.com/assessment',
    }},
  }},
  { id: 'email-financing', type: 'touchpoint', position: { x: 1100, y: 410 }, data: {
    label: 'Day 7: EPC vs PPA Financing', type: 'email',
    asset: { contentType: 'email', content: {
      subject: '$0 down solar? Here\'s how PPA works in Panama',
      preheader: 'Two financing options — one fits every business',
      sendDay: 7,
      body: '<p>Hi [Name],</p><p>One of the biggest questions we get: <em>"Do I have to pay $30,000+ upfront?"</em></p><p><strong>Short answer: No.</strong></p><h3>Option 1: EPC (You Own It)</h3><ul><li>You pay for the system upfront ($15K-80K)</li><li>You own 100% of the energy savings</li><li>ROI in 3-5 years, then 20+ years of free electricity</li></ul><h3>Option 2: PPA ($0 Down)</h3><ul><li>We install the system at no cost to you</li><li>You buy the electricity at a discounted rate (30-40% cheaper)</li><li>No maintenance costs — we handle everything</li><li>Contract term: 15-20 years</li></ul><p>Most of our hotel clients choose PPA. Most residential clients choose EPC.</p>',
      ctaText: 'Compare Options for My Property →',
      ctaUrl: 'https://solaris-panama.com/financing',
    }},
  }},
  { id: 'email-urgency', type: 'touchpoint', position: { x: 1100, y: 540 }, data: {
    label: 'Day 14: Limited Site Assessments', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Last 3 free assessments this month — [Name], are you in?',
      preheader: 'Our Panama team has limited availability',
      sendDay: 14,
      body: '<p>Hi [Name],</p><p>Quick update — our Azuero team has <strong>3 free site assessment slots left this month</strong>.</p><p>Each assessment includes:</p><ul><li>✅ Drone roof survey</li><li>✅ Shade analysis</li><li>✅ Custom system design</li><li>✅ Financial proposal (EPC + PPA options)</li><li>✅ Permit timeline estimate</li></ul><p>Value: $500 — yours free if you book before [date].</p><p>Interested?</p>',
      ctaText: 'Book My Free Assessment →',
      ctaUrl: 'https://crm.solaris-panama.com/tools/scanner',
    }},
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
    asset: { contentType: 'form', content: {
      title: 'Free Solar Site Assessment',
      description: 'Our team will evaluate your roof remotely using satellite imagery and provide a custom proposal within 48 hours.',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
        { name: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Hotel/Resort', 'Commercial Building', 'Supermarket', 'Industrial', 'Residential', 'Agricultural'] },
        { name: 'address', label: 'Property Address', type: 'text', required: true },
        { name: 'monthly_bill', label: 'Monthly Electricity Bill ($)', type: 'text', required: true },
        { name: 'notes', label: 'Additional Notes', type: 'textarea' },
      ],
      submitLabel: 'Request Free Assessment →',
      successMessage: 'Assessment request received! Our team will contact you within 24 hours.',
    }},
  }},
  { id: 'tp-proposal', type: 'touchpoint', position: { x: 1450, y: 300 }, data: {
    label: 'Custom Proposal PDF', type: 'page',
    url: 'https://crm.solaris-panama.com/tools/proposal-generator',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Your Custom Solar Proposal',
        subheadline: 'System design, financial analysis, and installation timeline — tailored to your property.',
        ctaText: 'Download Proposal PDF',
      },
      benefits: [
        { icon: '📐', title: 'Custom System Design', description: 'Panel layout optimized for your roof' },
        { icon: '💰', title: 'Financial Analysis', description: 'EPC vs PPA side-by-side comparison' },
        { icon: '📅', title: 'Installation Timeline', description: 'From permit to power-on schedule' },
        { icon: '🔧', title: 'Equipment Specs', description: 'Tier-1 panels and inverter details' },
      ],
    }},
  }},
  { id: 'tp-call', type: 'touchpoint', position: { x: 1450, y: 450 }, data: {
    label: 'Video Call / In-Person Meeting', type: 'whatsapp',
    asset: { contentType: 'whatsapp', content: {
      greeting: 'Hola [Name] 👋\n\nSoy [Rep] de Solaris Panamá. Su propuesta personalizada está lista.\n\n¿Le gustaría agendar una llamada de 15 minutos para revisarla juntos?',
      quickReplies: ['Sí, agendar llamada', 'Envíar propuesta por email', 'Tengo preguntas', 'Llamar ahora'],
      autoReply: '¡Perfecto! ¿Qué horario le conviene?\n\n🕐 Mañana (9am-12pm)\n🕐 Tarde (2pm-5pm)\n🕐 Otro horario',
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
    label: 'Contract Signing (DocuSign)', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Ready to Start Saving',
        subheadline: 'Review and sign your solar installation contract. Digital signature via DocuSign.',
        ctaText: 'Sign Contract →',
      },
      benefits: [
        { icon: '📋', title: 'Contract Review', description: 'Clear terms, no hidden fees' },
        { icon: '✍️', title: 'Digital Signature', description: 'Sign from anywhere via DocuSign' },
        { icon: '🛡️', title: '25-Year Warranty', description: 'Included in every installation' },
        { icon: '📞', title: 'Support Line', description: 'Questions? Call us before signing' },
      ],
    }},
  }},
  { id: 'tp-deposit', type: 'touchpoint', position: { x: 1800, y: 300 }, data: {
    label: '30% Deposit via Wire/Stripe', type: 'page',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Secure Your Installation Date',
        subheadline: '30% deposit to begin procurement. Pay via wire transfer or credit card (Stripe).',
        ctaText: 'Pay Deposit →',
      },
    }},
  }},
  { id: 'tp-onboard', type: 'touchpoint', position: { x: 1800, y: 450 }, data: {
    label: 'CRM Onboarding → Project Created', type: 'page',
    url: 'https://crm.solaris-panama.com/projects',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Welcome to Solaris ☀️',
        subheadline: 'Your project has been created. Track permits, installation progress, and system performance from your dashboard.',
        ctaText: 'View My Project →',
        ctaUrl: 'https://crm.solaris-panama.com/projects',
      },
      benefits: [
        { icon: '📊', title: 'Project Dashboard', description: 'Real-time status updates' },
        { icon: '📑', title: 'Document Center', description: 'All permits and contracts in one place' },
        { icon: '📱', title: 'Mobile Access', description: 'Check progress from your phone' },
        { icon: '🔔', title: 'Notifications', description: 'Get notified at every milestone' },
      ],
    }},
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
