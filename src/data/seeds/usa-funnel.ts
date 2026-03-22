import type { Node, Edge } from '@xyflow/react'

export const usaFunnelNodes: Node[] = [
  // ── Ad Campaigns (top) ──────────────────────────────────────────
  { id: 'ad-google-crm', type: 'touchpoint', position: { x: 0, y: 0 }, data: {
    label: 'Google Ads — "solar CRM" / "solar software"', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'Solar CRM Built for Installers | 14-Day Free Trial',
      primaryText: 'The all-in-one solar software your team will actually use. Manage leads, generate proposals, and track every project — from first call to final inspection.',
      description: 'Trusted by solar installers across the US. Integrates with Aurora, EnergySage, and Google Solar API. No credit card required.',
      callToAction: 'Start Free Trial',
      destinationUrl: 'app.usasolaros.com/signup',
      variants: [
        { headline: 'Stop Losing Solar Leads in Spreadsheets', primaryText: 'Solar OS gives your team one place for every lead, proposal, and project. See your full pipeline at a glance. Close faster. Start free.' },
        { headline: 'Solar Proposals in Under 10 Minutes | Solar OS', primaryText: 'Your reps are wasting 2 hours on every proposal. Solar OS auto-generates branded proposals with Aurora data — approved before the site visit ends.' },
      ],
    }},
  }},
  { id: 'ad-google-retarget', type: 'touchpoint', position: { x: 0, y: 150 }, data: {
    label: 'Google Retargeting — Trial Abandoners', type: 'ad',
    url: 'https://ads.google.com',
    asset: { contentType: 'ad', content: {
      platform: 'google',
      headline: 'Your Solar OS Trial Is Still Waiting',
      primaryText: 'You started a trial but haven\'t set up your pipeline yet. It takes 8 minutes. Your competitors are closing leads you\'re still tracking in a spreadsheet.',
      callToAction: 'Finish Setup',
      destinationUrl: 'app.usasolaros.com/onboarding',
      variants: [
        { headline: '20% Off — Solar OS Trial Ending Soon', primaryText: 'Your 14-day free trial ends in 48 hours. Lock in 20% off your first 3 months before it expires. Solo from $39/mo.' },
      ],
    }},
  }},
  { id: 'ad-meta', type: 'touchpoint', position: { x: 0, y: 300 }, data: {
    label: 'Meta Ads — Solar Installer Facebook Groups', type: 'ad',
    url: 'https://business.facebook.com/adsmanager',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'Your Solar Business Runs on Spreadsheets. It Doesn\'t Have To.',
      primaryText: '📋 Leads scattered across email, Excel, and sticky notes?\n⚡ Proposals taking 3 hours to put together?\n😤 No idea which reps are closing?\n\nSolar OS fixes all of this. One app. Leads → proposals → projects → monitoring.\n\n14-day free trial. No credit card. Setup in 8 minutes.',
      description: 'The CRM built specifically for solar installers',
      callToAction: 'Start Free Trial',
      destinationUrl: 'app.usasolaros.com/signup',
      imagePrompt: 'Clean SaaS dashboard screenshot showing a solar pipeline with deal stages, proposal status, and a map of active projects',
      variants: [
        { headline: 'How SunRise Solar Closed 47% More Deals', primaryText: '🚀 After switching to Solar OS, SunRise Solar:\n✅ Cut proposal time from 3 hrs → 18 min\n✅ Increased close rate from 12% → 17.5%\n✅ Grew from 4 to 11 reps in one year\n\nSee what Solar OS can do for your team. Free 14-day trial.' },
      ],
    }},
  }},
  { id: 'ad-linkedin', type: 'touchpoint', position: { x: 0, y: 450 }, data: {
    label: 'LinkedIn Ads — Solar Professionals (Title targeting)', type: 'ad',
    url: 'https://www.linkedin.com/campaignmanager',
    asset: { contentType: 'ad', content: {
      platform: 'linkedin',
      headline: 'Solar OS — The CRM Your Sales Team Will Actually Use',
      primaryText: 'Most solar companies are running their operations on HubSpot + Excel + a prayer.\n\nSolar OS is purpose-built for solar installers:\n• Lead management with source tracking\n• One-click proposal generation (Aurora integration)\n• Project pipeline from permit to PTO\n• Team performance dashboards\n\nGrowth plan: $149/mo for unlimited reps. 14-day free trial.',
      description: 'Built for solar installation companies — not generic SMB CRMs',
      callToAction: 'Book a Demo',
      destinationUrl: 'usasolaros.com/demo',
      imagePrompt: 'Professional dark-mode dashboard showing solar project pipeline with stages: Lead, Proposal Sent, Permit Filed, Installation, PTO',
    }},
  }},
  { id: 'ad-reddit', type: 'touchpoint', position: { x: 0, y: 600 }, data: {
    label: 'Reddit Ads — r/solar, r/solarenergy', type: 'ad',
    url: 'https://ads.reddit.com',
    asset: { contentType: 'ad', content: {
      platform: 'meta',
      headline: 'We built a CRM specifically for solar installers — free trial',
      primaryText: 'Hey r/solar — We\'re a small team that got tired of watching solar contractors lose deals because their tools weren\'t built for this industry.\n\nSolar OS: leads, proposals, project tracking, monitoring — all in one place. Aurora integration. No spreadsheets.\n\nWe\'re offering a 14-day free trial (no CC). Would love feedback from people who actually install solar.',
      callToAction: 'Try Free',
      destinationUrl: 'app.usasolaros.com/signup',
    }},
  }},

  // ── KPIs: Ad Performance ────────────────────────────────────────
  { id: 'kpi-cpc', type: 'kpi', position: { x: 0, y: 760 }, data: {
    label: 'CPC (Google)', value: '$3-8', target: '< $5',
  }},
  { id: 'kpi-ctr', type: 'kpi', position: { x: 200, y: 760 }, data: {
    label: 'CTR', value: '2-4%', target: '> 3%', trend: 'up',
  }},

  // ── Stage 1: Landing Pages ──────────────────────────────────────
  { id: 'stage-landing', type: 'stage', position: { x: 450, y: 0 }, data: {
    label: 'Landing Pages', funnelStage: '1',
    description: 'High-intent traffic capture',
  }},
  { id: 'lp-main', type: 'touchpoint', position: { x: 450, y: 150 }, data: {
    label: 'Main Landing Page', type: 'page',
    url: 'https://usasolaros.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'The Solar CRM That Closes More Deals',
        subheadline: 'Solar OS gives your team one platform for leads, proposals, project tracking, and monitoring. Purpose-built for US solar installers. Start your free 14-day trial — no credit card required.',
        ctaText: 'Start Free 14-Day Trial →',
        ctaUrl: 'https://app.usasolaros.com/signup',
      },
      benefits: [
        { icon: '⚡', title: 'Proposals in 10 Minutes', description: 'Auto-generate branded proposals with Aurora or manual entry. Send before you leave the driveway.' },
        { icon: '📊', title: 'Full Pipeline Visibility', description: 'See every lead, every deal, every rep — in real time. No more status update meetings.' },
        { icon: '🔌', title: 'Aurora & EnergySage Integration', description: 'Pull design data directly into your proposals. No copy-paste, no errors.' },
        { icon: '📱', title: 'Works in the Field', description: 'Mobile-first design. Your reps can log site visits, update statuses, and send proposals from the job site.' },
      ],
      socialProof: [
        { quote: 'We went from 12% to 17.5% close rate in 90 days. The pipeline view alone changed how our sales team operates.', author: 'Marcus T.', role: 'Owner, SunRise Solar (Arizona)' },
        { quote: 'Proposal time dropped from 3 hours to 18 minutes. I don\'t know how we ran without it.', author: 'Jessica L.', role: 'Sales Director, Pacific Solar Group' },
        { quote: 'Finally a CRM that knows what a PTO date is. We don\'t have to explain our workflow to generic software anymore.', author: 'Derek W.', role: 'Operations Manager, BrightPath Energy' },
      ],
      faq: [
        { q: 'Is this different from HubSpot or Salesforce?', a: 'Yes — Solar OS is purpose-built for solar. It understands your workflow: Lead → Site Visit → Proposal → Permit → Installation → PTO. No custom fields, no workarounds.' },
        { q: 'Can I import my existing leads?', a: 'Yes. CSV import, CRM migration, and API connections available on all plans. We also offer a done-for-you migration on Growth and Enterprise plans.' },
        { q: 'Does it integrate with Aurora?', a: 'Yes — Aurora integration is available on the Growth plan. Pull system designs directly into proposals with one click.' },
        { q: 'What happens after the 14-day trial?', a: 'You choose a plan. Solo ($49/mo), Growth ($149/mo), or Enterprise ($399/mo). Cancel anytime.' },
      ],
    }},
  }},
  { id: 'lp-g2', type: 'touchpoint', position: { x: 450, y: 300 }, data: {
    label: 'G2 Profile — Solar CRM category', type: 'page',
    url: 'https://g2.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar OS on G2 — #1 Solar CRM for Installation Companies',
        subheadline: 'Read verified reviews from solar contractors across the US. Compare Solar OS against JobNimbus, Scoop Solar, and generic CRMs.',
        ctaText: 'Read Reviews on G2',
        ctaUrl: 'https://g2.com/products/solar-os',
      },
      benefits: [
        { icon: '⭐', title: '4.8/5 Rating', description: 'Based on verified reviews from solar installation companies' },
        { icon: '🏆', title: 'Leader Badge', description: 'G2 Leader in Solar CRM category, Spring 2026' },
        { icon: '📋', title: 'Proposal Speed', description: 'Highest-rated feature: proposal generation' },
        { icon: '🔄', title: 'Ease of Migration', description: 'Users rate migration from other CRMs as painless' },
      ],
      socialProof: [
        { quote: 'Best solar-specific CRM on the market. The proposal generator pays for itself on the first deal.', author: 'Ryan K.', role: 'G2 Verified Reviewer' },
        { quote: 'We evaluated 6 CRMs. Solar OS was the only one that understood how solar sales actually works.', author: 'Priya S.', role: 'G2 Verified Reviewer' },
      ],
    }},
  }},
  { id: 'lp-capterra', type: 'touchpoint', position: { x: 450, y: 450 }, data: {
    label: 'Capterra Listing — Solar Software', type: 'page',
    url: 'https://www.capterra.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar OS — Capterra\'s Top-Rated Solar Business Software',
        subheadline: 'Manage your entire solar business from one dashboard. Leads, proposals, projects, monitoring, and team performance. Starting at $49/mo.',
        ctaText: 'Compare & Start Free Trial',
        ctaUrl: 'https://app.usasolaros.com/signup',
      },
      benefits: [
        { icon: '🥇', title: 'Capterra Shortlist 2026', description: 'Recognized as a top performer in solar software' },
        { icon: '💰', title: 'Best Value Rating', description: 'Highest value-for-price score in the category' },
        { icon: '📞', title: 'Support Rating 4.9/5', description: 'US-based support team with solar industry expertise' },
        { icon: '🔧', title: 'Feature Completeness', description: 'Only solar CRM covering full lifecycle from lead to monitoring' },
      ],
    }},
  }},
  { id: 'lp-calculator', type: 'touchpoint', position: { x: 450, y: 600 }, data: {
    label: 'ROI Calculator', type: 'page',
    url: 'https://usasolaros.com/calculator',
    asset: { contentType: 'form', content: {
      title: 'Solar OS ROI Calculator',
      description: 'See how much time and money Solar OS saves your business. Enter your team size and current workflow to get a custom ROI breakdown.',
      fields: [
        { name: 'team_size', label: 'Number of Sales Reps', type: 'select', required: true, options: ['1 (Solo)', '2-5', '6-15', '16-50', '50+'] },
        { name: 'deals_per_month', label: 'Deals Closed Per Month', type: 'text', required: true },
        { name: 'avg_deal_value', label: 'Average Deal Value ($)', type: 'text', required: true },
        { name: 'proposal_time', label: 'Hours Spent Per Proposal', type: 'select', required: true, options: ['< 1 hour', '1-2 hours', '2-4 hours', '4+ hours'] },
        { name: 'current_crm', label: 'Current Tool', type: 'select', options: ['Spreadsheets', 'HubSpot', 'Salesforce', 'JobNimbus', 'Scoop Solar', 'Other CRM', 'Nothing'] },
        { name: 'email', label: 'Work Email', type: 'email', required: true },
      ],
      submitLabel: 'Calculate My ROI →',
      successMessage: 'Your ROI report is on its way! Check your email for a full breakdown of time saved and revenue potential.',
    }},
  }},

  // ── Stage 2: Lead Magnets ──────────────────────────────────────
  { id: 'stage-leadmag', type: 'stage', position: { x: 850, y: 0 }, data: {
    label: 'Lead Magnets', funnelStage: '2',
    description: 'Email capture & trial activation',
  }},
  { id: 'lm-trial', type: 'touchpoint', position: { x: 850, y: 150 }, data: {
    label: '14-Day Free Trial (no CC required)', type: 'form',
    url: 'https://app.usasolaros.com/signup',
    asset: { contentType: 'form', content: {
      title: 'Start Your Free 14-Day Trial',
      description: 'No credit card required. Full access to all features. Setup takes 8 minutes.',
      fields: [
        { name: 'first_name', label: 'First Name', type: 'text', required: true },
        { name: 'last_name', label: 'Last Name', type: 'text', required: true },
        { name: 'email', label: 'Work Email', type: 'email', required: true },
        { name: 'company', label: 'Company Name', type: 'text', required: true },
        { name: 'team_size', label: 'Team Size', type: 'select', required: true, options: ['Just me', '2-5', '6-15', '16-50', '50+'] },
        { name: 'password', label: 'Password', type: 'text', required: true },
      ],
      submitLabel: 'Create Free Account →',
      successMessage: 'Welcome to Solar OS! Check your email to verify your account, then we\'ll walk you through your first 5 minutes.',
    }},
  }},
  { id: 'lm-playbook', type: 'touchpoint', position: { x: 850, y: 300 }, data: {
    label: 'PDF: "Solar Business Growth Playbook"', type: 'page',
    url: 'https://usasolaros.com/playbook',
    asset: { contentType: 'leadMagnet', content: {
      title: 'The Solar Business Growth Playbook: From $1M to $10M ARR',
      description: '47-page guide covering the exact systems, processes, and tools that fast-growing US solar installation companies use to scale. Real data from 200+ Solar OS customers.',
      format: 'pdf',
      gateFields: ['First Name', 'Work Email', 'Company Size'],
      previewPoints: [
        'The 5-stage pipeline model top solar companies use (with conversion benchmarks)',
        'How to cut proposal time by 80% without sacrificing quality',
        'Team structure templates for 5-person, 15-person, and 50-person companies',
        'Lead source ROI analysis: Google vs. Meta vs. referral vs. EnergySage',
        'The metrics that predict churn — and what to do about them',
        'Case study: SunRise Solar\'s path from 40 to 220 installs/month',
      ],
    }},
  }},
  { id: 'lm-roi', type: 'touchpoint', position: { x: 850, y: 450 }, data: {
    label: 'ROI Calculator Report (gated email)', type: 'form',
    url: 'https://usasolaros.com/calculator',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Your Solar OS ROI Report',
      description: 'Based on your team size and deal volume, we calculate exactly how much time and revenue you\'re leaving on the table without the right CRM.',
      format: 'calculator',
      gateFields: ['Work Email', 'Team Size', 'Monthly Deal Volume'],
      previewPoints: [
        'Hours saved per month on proposals (at your team size)',
        'Revenue impact of a 1% close rate improvement',
        'Break-even analysis: Solar OS cost vs. gains',
        'Projected ARR increase in 12 months',
        'Comparison benchmark vs. industry top quartile',
      ],
    }},
  }},
  { id: 'lm-compare', type: 'touchpoint', position: { x: 850, y: 600 }, data: {
    label: 'Competitor Comparison Guide (vs JobNimbus, Salesforce)', type: 'page',
    url: 'https://usasolaros.com/compare',
    asset: { contentType: 'leadMagnet', content: {
      title: 'Solar CRM Comparison Guide 2026: Solar OS vs. The Alternatives',
      description: 'Honest, feature-by-feature comparison of Solar OS against JobNimbus, Scoop Solar, HubSpot, and Salesforce. Includes pricing, migration effort, and solar-specific features.',
      format: 'pdf',
      gateFields: ['Work Email', 'Current Tool'],
      previewPoints: [
        'Side-by-side feature matrix (25 categories)',
        'True cost of ownership including setup and training',
        'Migration effort rating for each platform',
        'Solar-specific features: what generic CRMs can\'t do',
        'Unbiased ratings from G2 and Capterra',
        'Which platform wins for each company stage',
      ],
    }},
  }},

  // ── Decision: Trial Qualified? ──────────────────────────────────
  { id: 'dec-qualified', type: 'decision', position: { x: 850, y: 760 }, data: {
    question: 'Trial activated + Day 3 login?',
    yesLabel: 'Engaged', noLabel: 'Re-engage',
  }},

  // ── Stage 3: Email Sequences ───────────────────────────────────
  { id: 'stage-nurture', type: 'stage', position: { x: 1250, y: 0 }, data: {
    label: 'Onboarding Drip', funnelStage: '3',
    description: '6-email SaaS onboarding sequence',
  }},
  { id: 'email-welcome', type: 'touchpoint', position: { x: 1250, y: 150 }, data: {
    label: 'Day 0: Welcome + Quick Start Guide', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Welcome to Solar OS — your first 8 minutes',
      preheader: 'You\'re in. Here\'s how to get your first lead logged before the day is over.',
      sendDay: 0,
      body: '<p>Hey [First Name],</p><p>Welcome to Solar OS. You just made the same move that 200+ solar installation companies have made — and most of them tell us they wish they\'d done it sooner.</p><p>Here\'s the fastest path to your first value moment:</p><ol><li><strong>Step 1 (2 min):</strong> <a href="https://app.usasolaros.com/leads/import">Import your existing leads</a> — CSV or manual entry</li><li><strong>Step 2 (3 min):</strong> <a href="https://app.usasolaros.com/pipeline">Set up your pipeline stages</a> — we pre-fill the standard solar stages for you</li><li><strong>Step 3 (3 min):</strong> <a href="https://app.usasolaros.com/proposal/new">Generate your first proposal</a> — pick a template and see the output</li></ol><p>That\'s it. 8 minutes to a working solar CRM.</p><p>Questions? Reply to this email — our team reads every response.</p><p>— The Solar OS Team</p>',
      ctaText: 'Go to Your Dashboard →',
      ctaUrl: 'https://app.usasolaros.com/dashboard',
    }},
  }},
  { id: 'email-quickwins', type: 'touchpoint', position: { x: 1250, y: 280 }, data: {
    label: 'Day 2: Quick Wins — Import your first leads', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Do this one thing in Solar OS today',
      preheader: 'It takes 4 minutes and will change how your week looks',
      sendDay: 2,
      body: '<p>Hey [First Name],</p><p>Quick check-in — have you imported your leads yet?</p><p>We know the "set up the CRM" task keeps getting pushed. So let\'s make it tiny:</p><p><strong>Just import 10 leads. That\'s the whole task.</strong></p><p>Here\'s why it matters: once your leads are in Solar OS, you\'ll immediately see which ones have been sitting too long, which reps own which accounts, and where your pipeline is actually stuck.</p><p>Most users who import leads on day 1 or 2 convert to paid at 3x the rate of those who wait.</p><p><a href="https://app.usasolaros.com/leads/import">→ Import leads now (CSV or manual)</a></p><p>If you\'re on mobile, you can also add leads one at a time from the field — try it after your next site visit.</p>',
      ctaText: 'Import My Leads →',
      ctaUrl: 'https://app.usasolaros.com/leads/import',
    }},
  }},
  { id: 'email-features', type: 'touchpoint', position: { x: 1250, y: 410 }, data: {
    label: 'Day 5: Feature Deep-Dive — Pipeline + Proposals', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'The two features Solar OS customers use most (and why)',
      preheader: 'Pipeline view + Proposal generator — here\'s how to unlock both',
      sendDay: 5,
      body: '<p>Hey [First Name],</p><p>After talking to hundreds of solar installers, two features stand out as the ones that actually move the needle on revenue:</p><h3>1. Pipeline View</h3><p>Your full deal flow at a glance — by stage, by rep, by close probability. Drag and drop to update status. Filter by date, lead source, or team member.</p><p><a href="https://app.usasolaros.com/pipeline">→ Open your pipeline</a></p><h3>2. Proposal Generator</h3><p>Select a system size, pick a template, and Solar OS auto-populates your company branding, equipment specs, financial projections, and financing options. One click to send as a PDF or shareable link.</p><p>Average time: 18 minutes (down from 2-4 hours with manual proposals).</p><p><a href="https://app.usasolaros.com/proposal/new">→ Generate a test proposal</a></p><p>If you\'re on Growth plan or above, Aurora integration means your design data flows in automatically.</p>',
      ctaText: 'Try the Proposal Generator →',
      ctaUrl: 'https://app.usasolaros.com/proposal/new',
    }},
  }},
  { id: 'email-social', type: 'touchpoint', position: { x: 1250, y: 540 }, data: {
    label: 'Day 9: Social Proof — "How SunRise Solar grew 3x"', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'How SunRise Solar grew from 40 to 220 installs/month',
      preheader: 'The operations changes that made the difference',
      sendDay: 9,
      body: '<p>Hey [First Name],</p><p>18 months ago, Marcus at SunRise Solar (Arizona) was running his 8-person team on HubSpot + Google Sheets. He was losing track of leads, proposals took 3 hours each, and he had no visibility into why his close rate had dropped to 11%.</p><p>Here\'s what changed after Solar OS:</p><ul><li><strong>Month 1:</strong> Imported 340 leads, found 60 that had gone cold with no follow-up. Re-engaged 14 of them. Closed 4.</li><li><strong>Month 3:</strong> Proposal time dropped to 18 minutes. Reps started sending proposals same-day. Close rate climbed to 15%.</li><li><strong>Month 6:</strong> Hired 3 new reps. Onboarding took 2 days instead of 2 weeks because the system enforced the right process.</li><li><strong>Month 12:</strong> 220 installs/month. 17.5% close rate. Marcus spends Fridays reviewing dashboards instead of chasing status updates.</li></ul><p>Marcus\'s words: <em>"The pipeline view alone changed how our sales team operates."</em></p><p>You\'re 9 days into your trial. What\'s your pipeline looking like?</p>',
      ctaText: 'View My Pipeline →',
      ctaUrl: 'https://app.usasolaros.com/pipeline',
    }},
  }},
  { id: 'email-expiry', type: 'touchpoint', position: { x: 1250, y: 670 }, data: {
    label: 'Day 12: Trial Expiry — 2 days left reminder', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Your Solar OS trial ends in 48 hours',
      preheader: 'Everything you\'ve built stays — if you choose a plan',
      sendDay: 12,
      body: '<p>Hey [First Name],</p><p>Two days left on your Solar OS trial.</p><p>Everything you\'ve set up — your leads, pipeline stages, proposal templates, and team members — stays exactly as is when you upgrade. You won\'t lose a single thing.</p><p>Here\'s a quick recap of what\'s been happening in your account during the trial:</p><ul><li>📋 [X] leads imported or created</li><li>📊 [X] pipeline stages configured</li><li>📄 [X] proposals generated</li></ul><p><strong>Choose the plan that fits your team:</strong></p><ul><li><strong>Solo — $49/mo:</strong> 1 user, full CRM + proposals. Best for owner-operators.</li><li><strong>Growth — $149/mo:</strong> Unlimited users, Aurora integration, team dashboards. Best for 2-15 person teams.</li><li><strong>Enterprise — $399/mo:</strong> Custom onboarding, API access, dedicated support. Best for scaling companies.</li></ul><p>Not sure which plan? Reply and I\'ll help you figure it out in 2 minutes.</p>',
      ctaText: 'Choose My Plan →',
      ctaUrl: 'https://app.usasolaros.com/billing',
    }},
  }},
  { id: 'email-discount', type: 'touchpoint', position: { x: 1250, y: 800 }, data: {
    label: 'Day 14: Last Chance — 20% off first 3 months', type: 'email',
    asset: { contentType: 'email', content: {
      subject: 'Last chance: 20% off Solar OS (expires tonight)',
      preheader: 'Solo from $39/mo · Growth from $119/mo — today only',
      sendDay: 14,
      body: '<p>Hey [First Name],</p><p>Your trial ends today. I\'m going to make this simple:</p><p><strong>Use code GROW20 for 20% off your first 3 months. Expires at midnight.</strong></p><ul><li>Solo: $49 → $39/mo</li><li>Growth: $149 → $119/mo</li><li>Enterprise: $399 → $319/mo</li></ul><p>After 3 months, you pay the regular rate. Cancel anytime, no questions asked.</p><p>If price is a concern, the Growth plan pays for itself the first time one of your reps sends a proposal in 18 minutes instead of 3 hours.</p><p>If you\'re not ready — no hard feelings. We\'ll be here when you are.</p><p>But if you\'ve been on the fence: this is the moment.</p>',
      ctaText: 'Redeem 20% Off →',
      ctaUrl: 'https://app.usasolaros.com/billing?coupon=GROW20',
    }},
  }},
  { id: 'msg-webinar', type: 'message', position: { x: 1250, y: 930 }, data: {
    content: 'Join our live Solar OS demo — see a full project lifecycle in 30 minutes. Reserve your spot.',
    language: 'EN',
  }},

  // ── Stage 4: Proposal / Demo ───────────────────────────────────
  { id: 'stage-proposal', type: 'stage', position: { x: 1650, y: 0 }, data: {
    label: 'Demo & Proposal', funnelStage: '4',
    description: 'Demo call → custom migration plan',
  }},
  { id: 'tp-demo', type: 'touchpoint', position: { x: 1650, y: 150 }, data: {
    label: 'Demo Call (30 min Calendly)', type: 'form',
    url: 'https://usasolaros.com/demo',
    asset: { contentType: 'form', content: {
      title: 'Book a 30-Minute Solar OS Demo',
      description: 'We\'ll walk through your specific workflow, answer every question, and build your pipeline live during the call. No slides, no fluff.',
      fields: [
        { name: 'first_name', label: 'First Name', type: 'text', required: true },
        { name: 'last_name', label: 'Last Name', type: 'text', required: true },
        { name: 'email', label: 'Work Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'phone' },
        { name: 'company', label: 'Company Name', type: 'text', required: true },
        { name: 'team_size', label: 'Team Size', type: 'select', required: true, options: ['Just me', '2-5', '6-15', '16-50', '50+'] },
        { name: 'current_tools', label: 'What are you using today?', type: 'select', options: ['Spreadsheets', 'HubSpot', 'Salesforce', 'JobNimbus', 'Scoop Solar', 'Other'] },
        { name: 'biggest_pain', label: 'Biggest operations pain right now?', type: 'textarea' },
      ],
      submitLabel: 'Book My Demo →',
      successMessage: 'You\'re booked! Check your email for a calendar invite and a short prep form so we can make the most of our 30 minutes.',
    }},
  }},
  { id: 'tp-migration', type: 'touchpoint', position: { x: 1650, y: 300 }, data: {
    label: 'Custom Migration Plan (data import offer)', type: 'page',
    url: 'https://app.usasolaros.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'We\'ll Migrate Your Data For You',
        subheadline: 'Switching CRMs is painful. That\'s why Solar OS Growth and Enterprise plans include a done-for-you migration. Your leads, deals, and history — moved over in 48 hours.',
        ctaText: 'Start Migration →',
        ctaUrl: 'https://app.usasolaros.com/billing?plan=growth',
      },
      benefits: [
        { icon: '📦', title: 'Full Data Import', description: 'Leads, contacts, deal history, notes, and documents — all migrated' },
        { icon: '⏱️', title: '48-Hour Turnaround', description: 'Most migrations complete within 2 business days' },
        { icon: '✅', title: 'Zero Data Loss', description: 'We verify every record before and after migration' },
        { icon: '🤝', title: 'Dedicated Onboarding Call', description: '1-hour call to configure your pipeline and train your team' },
      ],
      socialProof: [
        { quote: 'We had 2,200 leads in HubSpot. The Solar OS team migrated everything in 36 hours and nothing was missing.', author: 'Tom B.', role: 'CEO, Desert Sun Solar (Nevada)' },
      ],
    }},
  }},
  { id: 'tp-onboard-plan', type: 'touchpoint', position: { x: 1650, y: 450 }, data: {
    label: 'Team Onboarding Proposal (Enterprise)', type: 'page',
    url: 'https://app.usasolaros.com',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Enterprise Onboarding — Your Team Live in 5 Days',
        subheadline: 'For teams of 15+, Solar OS Enterprise includes a custom onboarding program. We configure your pipeline, train your reps, and integrate your tools — so day one feels like day ninety.',
        ctaText: 'Get Enterprise Onboarding →',
        ctaUrl: 'https://usasolaros.com/demo',
      },
      benefits: [
        { icon: '🏗️', title: 'Custom Pipeline Build', description: 'We configure your stages, fields, and automations to match your process' },
        { icon: '👩‍💻', title: 'Rep Training Sessions', description: 'Live training for your entire sales and ops team' },
        { icon: '🔌', title: 'Integration Setup', description: 'Aurora, EnergySage, Slack, and your existing tools connected for you' },
        { icon: '📞', title: 'Dedicated Account Manager', description: 'Direct line to a solar industry expert for the first 90 days' },
      ],
      faq: [
        { q: 'How long does enterprise onboarding take?', a: '5 business days from contract signature to full team live on the platform.' },
        { q: 'Can we customize the pipeline stages?', a: 'Yes — we build your pipeline from scratch based on your actual sales and operations workflow.' },
        { q: 'Is there a minimum contract length?', a: 'Enterprise plans start at 12 months. Month-to-month available at a premium.' },
      ],
    }},
  }},

  // ── Decision: Ready to close? ──────────────────────────────────
  { id: 'dec-close', type: 'decision', position: { x: 1650, y: 620 }, data: {
    question: 'Selects a plan?',
    yesLabel: 'Checkout', noLabel: 'Objections',
  }},

  // ── Stage 5: Close ─────────────────────────────────────────────
  { id: 'stage-close', type: 'stage', position: { x: 2050, y: 0 }, data: {
    label: 'Close', funnelStage: '5',
    description: 'Stripe checkout + team onboarding',
  }},
  { id: 'tp-solo', type: 'touchpoint', position: { x: 2050, y: 150 }, data: {
    label: 'Stripe — Solo Plan $49/mo', type: 'page',
    url: 'https://app.usasolaros.com/billing',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar OS Solo — $49/month',
        subheadline: 'Everything a one-person solar operation needs. Full CRM, unlimited leads, proposal generator, and project tracking. No team features, no upsell pressure.',
        ctaText: 'Start Solo Plan →',
        ctaUrl: 'https://app.usasolaros.com/billing?plan=solo',
      },
      benefits: [
        { icon: '👤', title: '1 User Seat', description: 'Perfect for owner-operators and solo installers' },
        { icon: '♾️', title: 'Unlimited Leads', description: 'No limits on contacts, deals, or proposals' },
        { icon: '📄', title: 'Proposal Generator', description: 'Branded proposals with financial projections' },
        { icon: '📊', title: 'Pipeline Tracking', description: 'Your full deal flow in one view' },
      ],
    }},
  }},
  { id: 'tp-growth', type: 'touchpoint', position: { x: 2050, y: 300 }, data: {
    label: 'Stripe — Growth Plan $149/mo', type: 'page',
    url: 'https://app.usasolaros.com/billing',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar OS Growth — $149/month',
        subheadline: 'For teams of 2-15 solar professionals. Unlimited users, Aurora integration, team dashboards, and done-for-you data migration.',
        ctaText: 'Start Growth Plan →',
        ctaUrl: 'https://app.usasolaros.com/billing?plan=growth',
      },
      benefits: [
        { icon: '👥', title: 'Unlimited Users', description: 'Add every rep, PM, and admin at no extra cost' },
        { icon: '🔌', title: 'Aurora Integration', description: 'Pull design data directly into proposals' },
        { icon: '📈', title: 'Team Dashboards', description: 'Rep performance, pipeline health, and close rate tracking' },
        { icon: '📦', title: 'Data Migration Included', description: 'We move your existing data in 48 hours' },
      ],
      socialProof: [
        { quote: 'Growth plan is the sweet spot for our 9-person team. Aurora integration alone saves us 90 minutes a day.', author: 'Alex P.', role: 'Operations Lead, Skyline Solar (Texas)' },
      ],
    }},
  }},
  { id: 'tp-enterprise', type: 'touchpoint', position: { x: 2050, y: 450 }, data: {
    label: 'Stripe — Enterprise Plan $399/mo', type: 'page',
    url: 'https://app.usasolaros.com/billing',
    asset: { contentType: 'landing', content: {
      hero: {
        headline: 'Solar OS Enterprise — $399/month',
        subheadline: 'For scaling solar companies of 15+ people. Custom onboarding, API access, dedicated account manager, and SLA-backed support.',
        ctaText: 'Talk to Sales →',
        ctaUrl: 'https://usasolaros.com/demo',
      },
      benefits: [
        { icon: '🏗️', title: 'Custom Onboarding', description: '5-day team onboarding program included' },
        { icon: '🔑', title: 'Full API Access', description: 'Build integrations with your existing tech stack' },
        { icon: '📞', title: 'Dedicated Account Manager', description: 'Direct access to a solar operations expert' },
        { icon: '🛡️', title: 'SLA Support', description: '4-hour response time, 99.9% uptime guarantee' },
      ],
      faq: [
        { q: 'Can we negotiate an annual contract?', a: 'Yes — annual plans include 2 months free. Contact sales for multi-year pricing.' },
        { q: 'Is there a per-seat cost for large teams?', a: 'No — Enterprise is unlimited users. Flat monthly rate regardless of team size.' },
      ],
    }},
  }},

  // ── KPIs: Funnel Performance ───────────────────────────────────
  { id: 'kpi-cac', type: 'kpi', position: { x: 2050, y: 620 }, data: {
    label: 'CAC', value: '$150-300', target: '< $200', trend: 'down',
  }},
  { id: 'kpi-trial-cr', type: 'kpi', position: { x: 2250, y: 620 }, data: {
    label: 'Trial → Paid CR', value: '12-20%', target: '> 15%', trend: 'up',
  }},
  { id: 'kpi-mrr', type: 'kpi', position: { x: 2050, y: 770 }, data: {
    label: 'MRR Target', value: '$50K', target: '$100K', trend: 'up',
  }},
  { id: 'kpi-churn', type: 'kpi', position: { x: 2250, y: 770 }, data: {
    label: 'Monthly Churn', value: '< 3%', target: '< 2%', trend: 'down',
  }},
  { id: 'kpi-arpu', type: 'kpi', position: { x: 2050, y: 920 }, data: {
    label: 'ARPU', value: '$180', target: '$200', trend: 'up',
  }},
]

export const usaFunnelEdges: Edge[] = [
  // Ads → Landing Pages
  { id: 'e-adgoog-lpmain', source: 'ad-google-crm', target: 'lp-main', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-adgoog-rt-lmtrial', source: 'ad-google-retarget', target: 'lm-trial', animated: true, style: { stroke: '#ef4444' } },
  { id: 'e-admeta-lpmain', source: 'ad-meta', target: 'lp-main', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-adli-lpg2', source: 'ad-linkedin', target: 'lp-g2', animated: true, style: { stroke: '#0ea5e9' } },
  { id: 'e-adreddit-lpmain', source: 'ad-reddit', target: 'lp-main', animated: true, style: { stroke: '#f97316' } },

  // Landing Pages → Lead Magnets
  { id: 'e-lpmain-lmtrial', source: 'lp-main', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lpmain-lmplaybook', source: 'lp-main', target: 'lm-playbook', style: { stroke: '#f59e0b' } },
  { id: 'e-lpcalc-lmroi', source: 'lp-calculator', target: 'lm-roi', style: { stroke: '#f59e0b' } },
  { id: 'e-lpg2-lmtrial', source: 'lp-g2', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lpcapterra-lmtrial', source: 'lp-capterra', target: 'lm-trial', style: { stroke: '#f59e0b' } },
  { id: 'e-lpmain-lmcompare', source: 'lp-main', target: 'lm-compare', style: { stroke: '#f59e0b' } },

  // Lead Magnets → Decision
  { id: 'e-lmtrial-dec', source: 'lm-trial', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmplaybook-dec', source: 'lm-playbook', target: 'dec-qualified', style: { stroke: '#27272a' } },
  { id: 'e-lmroi-dec', source: 'lm-roi', target: 'dec-qualified', style: { stroke: '#27272a' } },

  // Decision → Nurture or Re-engage
  { id: 'e-dec-welcome', source: 'dec-qualified', target: 'email-welcome', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-dec-retarget', source: 'dec-qualified', target: 'ad-google-retarget', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Email sequence flow
  { id: 'e-em1-em2', source: 'email-welcome', target: 'email-quickwins', style: { stroke: '#8b5cf6' } },
  { id: 'e-em2-em3', source: 'email-quickwins', target: 'email-features', style: { stroke: '#8b5cf6' } },
  { id: 'e-em3-em4', source: 'email-features', target: 'email-social', style: { stroke: '#8b5cf6' } },
  { id: 'e-em4-em5', source: 'email-social', target: 'email-expiry', style: { stroke: '#8b5cf6' } },
  { id: 'e-em5-em6', source: 'email-expiry', target: 'email-discount', style: { stroke: '#8b5cf6' } },
  { id: 'e-em6-webinar', source: 'email-discount', target: 'msg-webinar', style: { stroke: '#22c55e' } },

  // Nurture → Demo
  { id: 'e-em5-demo', source: 'email-expiry', target: 'tp-demo', style: { stroke: '#f59e0b' } },
  { id: 'e-webinar-demo', source: 'msg-webinar', target: 'tp-demo', style: { stroke: '#22c55e' } },

  // Proposal flow
  { id: 'e-demo-migration', source: 'tp-demo', target: 'tp-migration', style: { stroke: '#27272a' } },
  { id: 'e-demo-onboard', source: 'tp-demo', target: 'tp-onboard-plan', style: { stroke: '#27272a' } },
  { id: 'e-migration-dec', source: 'tp-migration', target: 'dec-close', style: { stroke: '#27272a' } },
  { id: 'e-onboard-dec', source: 'tp-onboard-plan', target: 'dec-close', style: { stroke: '#27272a' } },

  // Close decision
  { id: 'e-decclose-solo', source: 'dec-close', target: 'tp-solo', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-growth', source: 'dec-close', target: 'tp-growth', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-enterprise', source: 'dec-close', target: 'tp-enterprise', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-decclose-nurture', source: 'dec-close', target: 'email-features', sourceHandle: 'no', style: { stroke: '#ef4444' } },

  // Stage connectors
  { id: 'e-st1-st2', source: 'stage-landing', target: 'stage-leadmag', style: { stroke: '#f59e0b' } },
  { id: 'e-st2-st3', source: 'stage-leadmag', target: 'stage-nurture', style: { stroke: '#f59e0b' } },
  { id: 'e-st3-st4', source: 'stage-nurture', target: 'stage-proposal', style: { stroke: '#f59e0b' } },
  { id: 'e-st4-st5', source: 'stage-proposal', target: 'stage-close', style: { stroke: '#f59e0b' } },
]
