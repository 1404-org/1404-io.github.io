export const SITE = {
  name: '1404',
  title: '1404 — AI Agents for Business Operations',
  description: 'AI agent teams that handle executive operations, financial intelligence, business development, acquisitions, and exit preparation. Purpose-built for your business and connected to the systems you already use. We build and manage them.',
  url: 'https://1404.io',
  email: 'holden@1404.io',
  phone: '248-607-1414',
  booking: 'https://calendly.com/holden-1404/30min',
};

export const CLIENT_LOGOS = [
  { name: 'The Construct Group', src: '/logos/tcg.png', href: '/case-studies/tcg' },
  // { name: 'Higher Ground Landscaping', src: '/logos/hgl.png' },
] as const;

export const NAV_LINKS = [
  { label: 'Agents', href: '/agents' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Trust', href: '/trust' },
] as const;

export const FOOTER_SECTIONS = {
  product: [
    { label: 'Agent Suites', href: '/agents' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Work', href: '/work' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Trust', href: '/trust' },
  ],
} as const;

export const SUITES = [
  {
    name: 'Executive Operations',
    slug: 'executive-operations',
    description: 'Takes over the daily operational work that eats into leadership time. Email triage, morning intelligence briefs, meeting preparation, weekly scorecards, executive presentations, and operating reviews — handled every day without you thinking about it.',
    short: 'Daily operations, briefs, email, meetings, scorecards, executive decks.',
    replaces: 'Executive Assistant + Operations Coordinator',
    skills: [
      'Morning intelligence briefs',
      'Email triage and drafting',
      'Meeting preparation and follow-up',
      'Weekly and monthly scorecards',
      'Executive presentations',
      'Operating reviews',
      'Playbook-driven preferences per executive',
      'Calendar and scheduling coordination',
    ],
  },
  {
    name: 'Financial Intelligence',
    slug: 'financial-intelligence',
    description: 'Handles the financial reporting and analysis that companies either do manually in Excel or pay a fractional CFO to produce weeks after the fact. Cash flow forecasting, job costing, WIP schedules, monthly financials, bank packages, and revenue projections — all connected to your actual accounting data and updated continuously.',
    short: 'Cash flow, job costing, WIP, financials, bank packages, forecasting.',
    replaces: 'Fractional CFO + Financial Analyst',
    skills: [
      'Thirteen-week cash flow forecasting',
      'Job cost reporting and variance analysis',
      'WIP schedule generation',
      'Monthly financial packages',
      'Bank and surety packages',
      'Revenue forecasting',
      'Budget vs. actual analysis',
      'Profit and loss reporting',
    ],
  },
  {
    name: 'Business Development',
    slug: 'business-development',
    description: 'Runs the sales operations work that most companies either don\'t do or have the owner doing between meetings. Pipeline management, prospect research, outreach sequences, bid monitoring, proposal tracking, and win/loss analysis. The sales infrastructure most companies this size know they need but haven\'t built.',
    short: 'Pipeline, prospecting, outreach, bid tracking, proposals, analysis.',
    replaces: 'BDR + Sales Operations',
    skills: [
      'Pipeline management and tracking',
      'Prospect research and qualification',
      'Outreach automation and sequences',
      'Bid monitoring and alerts',
      'Proposal generation and tracking',
      'Win/loss analysis',
      'Competitor intelligence',
      'Territory and market mapping',
    ],
  },
  {
    name: 'Acquisitions',
    slug: 'acquisitions',
    description: 'For companies that are actively acquiring or building a roll-up strategy. Automates the research-heavy work of screening targets, building financial models, running due diligence, drafting LOIs, and tracking deal pipelines. Analyst-level deal research on an ongoing basis, instead of only when you have an active banking engagement.',
    short: 'Target screening, deal modeling, diligence, LOIs, pipeline tracking.',
    replaces: 'M&A Analyst + Deal Research',
    skills: [
      'Acquisition target screening',
      'Financial modeling and valuation',
      'Due diligence checklists and tracking',
      'Letter of intent drafting',
      'Deal pipeline management',
      'Counter-valuation analysis',
      'Integration planning',
      'Comparable transaction research',
    ],
  },
  {
    name: 'Exit & Liquidity',
    slug: 'exit-liquidity',
    description: 'For owners who are planning to sell their company within the next one to five years. Handles the preparation work that makes the difference between a smooth exit and a messy one — readiness scoring, data room assembly, CIM building, financial normalization, buyer-ready presentations, and KPI synthesis reports that answer the questions buyers ask during diligence.',
    short: 'Readiness scoring, data rooms, CIMs, valuations, buyer presentations.',
    replaces: 'Investment Banking Prep',
    skills: [
      'Exit readiness scoring and gap analysis',
      'Virtual data room assembly',
      'Confidential information memorandum',
      'Financial normalization',
      'Buyer-ready presentations',
      'KPI synthesis reports',
      'Valuation preparation',
      'Management presentation materials',
    ],
  },
] as const;
