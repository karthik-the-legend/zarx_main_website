import { HandCoins, Handshake, Megaphone, Users } from "lucide-react";
import type { Service } from "@/content/services";

/**
 * Business Consultancy services. All copy here is a draft written from the
 * brief's suggested scope and is marked on staging until ZARX signs it off.
 * No statistics, client logos, testimonials or case studies until ZARX
 * supplies real ones.
 */
export const businessServices: Service[] = [
  {
    slug: "digital-marketing",
    category: "business",
    icon: Megaphone,
    name: "Digital Marketing",
    draft: true,
    seoTitle: "Digital Marketing Agency in New Delhi | ZARX",
    seoDescription:
      "SEO, Google and Meta ads, social media, content and email or WhatsApp marketing – planned around your goals and reported in numbers you can check.",
    card: {
      headline: "Marketing that brings in customers, not just clicks",
      line: "SEO, paid ads, social media, content, and email and WhatsApp campaigns.",
      chips: ["SEO", "Paid ads", "Social media"],
    },
    headline: "Marketing that brings in customers, not just clicks",
    subhead:
      "We plan and run SEO, Google and Meta ads, social media, content and email or WhatsApp campaigns around the goals that matter to your business – and report what every rupee did.",
    proof: ["Goals agreed before any spend", "Ad and analytics accounts in your name", "A monthly report with the real numbers"],
    pains: [
      "“We're spending on ads but can't tell what's working.”",
      "“Our social pages are busy, but nobody buys.”",
      "“Customers can't find us on Google.”",
    ],
    outcomes: [
      "A clear plan: which channels, what budget and what each one should deliver.",
      "Tracking set up properly, so every lead and sale can be traced to its source.",
      "Steady growth from search and content, not only from paid traffic.",
    ],
    capabilities: [
      { title: "Search engine optimisation", text: "Technical fixes, keyword research, on-page SEO and local search.", chips: ["SEO", "Local search"] },
      { title: "Paid ads", text: "Google Search, Performance Max, YouTube, Meta and LinkedIn campaigns.", chips: ["Google Ads", "Meta Ads"] },
      { title: "Social media management", text: "Content calendars, posting, community replies and reporting.", chips: ["Instagram", "LinkedIn"] },
      { title: "Content", text: "Articles, landing pages, short-form video scripts and ad creatives.", chips: ["Copy", "Creatives"] },
      { title: "Email & WhatsApp marketing", text: "Opt-in lists, newsletters, automated journeys and broadcasts.", chips: ["Email", "WhatsApp Business"] },
      { title: "Analytics & reporting", text: "GA4, conversion tracking, UTM links and live dashboards.", chips: ["GA4", "Dashboards"] },
    ],
    deliverables: [
      "Marketing audit and competitor review",
      "Channel plan with budget and goals",
      "Tracking and conversion set-up",
      "Ad campaigns and creatives",
      "Content and social calendar",
      "SEO fixes and keyword plan",
      "Email or WhatsApp journeys",
      "Live dashboard",
      "Monthly performance report",
      "Full account access, always in your name",
    ],
    timeline: {
      title: "Typical first 90 days",
      steps: [
        { when: "Weeks 1–2", what: "Audit, goals and tracking set-up" },
        { when: "Weeks 3–4", what: "Channel plan, creatives and first campaigns" },
        { when: "Weeks 5–8", what: "Weekly optimisation; SEO and content begin" },
        { when: "Weeks 9–12", what: "Scale what works, cut what doesn't" },
        { when: "Every month", what: "Report and plan for the next month" },
      ],
    },
    tech: [
      { group: "Ads", items: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads"] },
      { group: "Search", items: ["Google Search Console", "Google Business Profile", "Semrush or Ahrefs"] },
      { group: "Analytics", items: ["Google Analytics 4", "Google Tag Manager", "Looker Studio"] },
      { group: "Email & messaging", items: ["Mailchimp", "Brevo", "WhatsApp Business Platform"] },
      { group: "Content & social", items: ["Canva", "Figma", "Meta Business Suite"] },
    ],
    engagements: ["growth-audit", "campaign-sprint", "growth-retainer"],
    fit: [
      "Have a product or service people already buy",
      "Can set a monthly marketing budget",
      "Want decisions based on numbers",
      "Can approve content within a few days",
    ],
    notFit: ["Want followers or likes bought", "Need results within a week", "Can't share sales or lead numbers with us"],
    quality: [
      "Goals and measures agreed in writing before spend",
      "Conversion tracking checked before campaigns go live",
      "A weekly update and a monthly report",
      "Ad spend paid directly from your own account",
      "Opt-in consent for email and WhatsApp, in line with India's DPDP Act",
      "Access you can remove at any time",
    ],
    faqs: [
      {
        question: "How much should we spend on ads?",
        answer:
          "It depends on your goals, margins and how much you can test. In the Growth Audit we size a starting budget from your numbers – average order or deal value, conversion rates and competition – and recommend where to put it. Ad spend is paid from your own account, separate from our fee, so you always see where the money goes.",
      },
      {
        question: "How soon will we see results?",
        answer:
          "Paid ads can bring traffic and leads within days of launch, but the first weeks are about learning what works. SEO and content take longer – usually a few months before search traffic grows steadily. The plan sets expectations for each channel, and the weekly update shows progress against them.",
      },
      {
        question: "Who owns the ad accounts and content?",
        answer:
          "You do. Ad, analytics and social accounts are created in your company's name, with access given to us that you can remove at any time. Creatives, copy and content we make for you are yours on payment.",
      },
      {
        question: "Do you do WhatsApp marketing?",
        answer:
          "Yes, through the official WhatsApp Business Platform with approved message templates and opt-in lists. We only message people who have agreed to hear from you, in line with WhatsApp's policies and India's DPDP Act, and every message gives a way to opt out.",
      },
    ],
    related: ["influencer-marketing", "brand-partnerships", "web-platforms"],
    ctaHeadline: "Ready for marketing you can measure?",
  },
  {
    slug: "influencer-marketing",
    category: "business",
    icon: Users,
    name: "Influencer Marketing",
    draft: true,
    seoTitle: "Influencer Marketing Agency in India | ZARX",
    seoDescription:
      "Creator discovery and vetting, campaign strategy, negotiation, content coordination and reporting – with every sponsored post properly disclosed.",
    card: {
      headline: "Creators who reach the people you want",
      line: "Discovery, vetting, contracts, content and reporting for creator campaigns.",
      chips: ["Creator vetting", "Campaigns", "Reporting"],
    },
    headline: "Creator campaigns that reach the right people",
    subhead:
      "We find and vet creators whose audience matches your customers, plan the campaign, handle negotiation and contracts, coordinate the content and report what it delivered.",
    proof: ["Creators vetted for real, relevant audiences", "Every sponsored post clearly disclosed", "Tracked links and codes on every post"],
    pains: [
      "“We paid an influencer and got nothing back.”",
      "“Half their followers don't look real.”",
      "“We can't tell which creators actually drove sales.”",
    ],
    outcomes: [
      "A shortlist of creators whose audience matches your customers – checked for fake followers.",
      "Campaigns with clear briefs, fair contracts and content you approve before it goes live.",
      "Results tied to tracked links and codes, so you know which creators to work with again.",
    ],
    capabilities: [
      { title: "Discovery & vetting", text: "Audience checks, engagement quality and brand-safety review.", chips: ["Audience data", "Brand safety"] },
      { title: "Campaign strategy", text: "Goals, formats, platforms and timing for each campaign.", chips: ["Instagram", "YouTube"] },
      { title: "Negotiation & contracts", text: "Fees, usage rights, deliverables and dates agreed in writing.", chips: ["Contracts", "Usage rights"] },
      { title: "Content coordination", text: "Briefs, drafts, approvals and posting schedules.", chips: ["Briefs", "Approvals"] },
      { title: "Tracking & reporting", text: "UTM links, promo codes and a report per creator.", chips: ["UTM links", "Promo codes"] },
      { title: "Creator programmes", text: "Ambassador and affiliate programmes with creators who perform.", chips: ["Ambassadors", "Affiliates"] },
    ],
    deliverables: [
      "Campaign strategy and brief",
      "Vetted creator shortlist",
      "Negotiated fees and signed contracts",
      "Content calendar and approvals",
      "Tracked links and promo codes",
      "Disclosure check on every post",
      "Mid-campaign update",
      "Results report per creator",
      "Recommendations for the next campaign",
    ],
    timeline: {
      title: "Typical campaign",
      steps: [
        { when: "Week 1", what: "Goals, audience and brief" },
        { when: "Weeks 1–2", what: "Creator discovery and vetting" },
        { when: "Weeks 2–3", what: "Negotiation, contracts and content drafts" },
        { when: "Weeks 3–6", what: "Content goes live, tracked daily" },
        { when: "After the campaign", what: "Results report and next steps" },
      ],
    },
    tech: [
      { group: "Platforms", items: ["Instagram", "YouTube", "LinkedIn", "X"] },
      { group: "Tracking", items: ["UTM links", "Promo codes", "Google Analytics 4"] },
      { group: "Contracts", items: ["Google Workspace", "DocuSign", "Leegality"] },
      { group: "Content review", items: ["Canva", "Google Drive", "Frame.io"] },
    ],
    engagements: ["creator-shortlist", "creator-pilot", "creator-programme"],
    fit: [
      "Sell to people who follow creators",
      "Have a product people can try or see",
      "Can approve content quickly",
      "Want to measure sales, not just views",
    ],
    notFit: ["Want paid posts without disclosure", "Need guaranteed viral reach", "Want to buy followers or engagement"],
    quality: [
      "Goals and measures agreed before outreach",
      "Tracked links or codes for every creator",
      "Disclosure labels checked on every post",
      "Results per creator: reach, clicks and sales",
      "Final report with what to repeat and what to drop",
      "Contracts and content rights in your company's name",
    ],
    note: {
      title: "Disclosure rules",
      text: "In India, paid or gifted creator posts must be clearly labelled as advertising. We follow ASCI's guidelines for influencer advertising and the Department of Consumer Affairs' endorsement guidelines, and check every post before it goes live.",
      source: "ASCI Guidelines for Influencer Advertising in Digital Media (2021); Department of Consumer Affairs, “Endorsement Know-hows!” (2023)",
    },
    faqs: [
      {
        question: "How do you check whether a creator's followers are real?",
        answer:
          "We review the audience data creators share from their platform insights – location, age and engagement over time – and look for warning signs such as sudden follower spikes or comments that don't match the content. Creators who won't share their insights don't make the shortlist.",
      },
      {
        question: "Who pays the creators?",
        answer:
          "Usually you, directly, under contracts in your company's name, so payment terms and content rights stay with you. We negotiate the fees and terms and manage the process. If you'd rather we handle payments, we agree that in writing first.",
      },
      {
        question: "Can we reuse creator content in our ads?",
        answer:
          "Yes, if the contract allows it. We agree usage rights up front – where, for how long and in which formats you can use the content – so there are no surprises when you want to boost a post or use it on your website.",
      },
      {
        question: "Do sponsored posts have to say they're ads?",
        answer:
          "Yes. In India, paid or gifted creator content needs a clear disclosure such as “#ad” or “#collab”, under ASCI's guidelines and the government's endorsement guidelines. We write it into every brief and check each post before it goes live.",
      },
    ],
    related: ["digital-marketing", "brand-partnerships", "animation"],
    ctaHeadline: "Ready to work with the right creators?",
  },
  {
    slug: "fundraising-sponsorship",
    category: "business",
    icon: HandCoins,
    name: "Fundraising & Sponsorship Partnerships",
    draft: true,
    seoTitle: "Fundraising & Sponsorship Support | ZARX",
    seoDescription:
      "Investor- and sponsor-ready pitch material, partnership packages, outreach and introductions, and proposal and negotiation support for founders and events.",
    card: {
      headline: "Pitch material and outreach that open doors",
      line: "Decks, sponsorship packages, introductions and negotiation support.",
      chips: ["Pitch decks", "Sponsorships", "Outreach"],
    },
    headline: "Get ready for investors and sponsors – then get in front of them",
    subhead:
      "We prepare investor- and sponsor-ready material, build partnership packages, run outreach and introductions, and support you through proposals and negotiation.",
    proof: ["Material built on your real numbers", "Outreach in your name, with your approval", "A pipeline you can see at any time"],
    pains: [
      "“Investors keep asking questions our deck doesn't answer.”",
      "“We don't know which sponsors to approach, or what to offer them.”",
      "“Our outreach gets no replies.”",
    ],
    outcomes: [
      "A pitch deck and supporting material that answer the questions investors and sponsors ask.",
      "Sponsorship packages structured and priced so the right sponsors can say yes quickly.",
      "A targeted outreach list and a tracked pipeline, so you know where every conversation stands.",
    ],
    capabilities: [
      { title: "Pitch decks & narrative", text: "A story built on your numbers, market and plan.", chips: ["Pitch deck", "One-pager"] },
      { title: "Data room preparation", text: "Checklists and structure for the documents investors ask for.", chips: ["Data room", "Checklist"] },
      { title: "Sponsorship packages", text: "Tiers, benefits and pricing for events, content and communities.", chips: ["Packages", "Pricing"] },
      { title: "Target lists & introductions", text: "Investors, sponsors and brands that fit your stage and sector.", chips: ["Research", "Introductions"] },
      { title: "Outreach & follow-up", text: "Personalised outreach and follow-ups, tracked in one pipeline.", chips: ["Outreach", "CRM"] },
      { title: "Proposals & negotiation", text: "Proposals, preparation for calls and support on terms.", chips: ["Proposals", "Negotiation"] },
    ],
    deliverables: [
      "Pitch deck and one-page summary",
      "Data room checklist and structure",
      "Sponsorship packages and pricing",
      "Target list of investors or sponsors",
      "Outreach messages and follow-up plan",
      "Pipeline tracker you can open anytime",
      "Preparation notes for every meeting",
      "Proposal templates",
    ],
    timeline: {
      title: "Typical programme",
      steps: [
        { when: "Weeks 1–2", what: "Story, numbers and goals" },
        { when: "Weeks 2–3", what: "Deck, one-pager and packages" },
        { when: "Week 3", what: "Target list and outreach plan" },
        { when: "Weeks 4–12", what: "Outreach, introductions and follow-ups" },
        { when: "Throughout", what: "Proposal and negotiation support" },
      ],
    },
    tech: [
      { group: "Pitch material", items: ["Google Slides", "Keynote", "Figma"] },
      { group: "Data room", items: ["Google Drive", "Notion", "DocSend"] },
      { group: "Research", items: ["LinkedIn", "Tracxn", "Crunchbase"] },
      { group: "Pipeline", items: ["HubSpot CRM", "Google Sheets"] },
      { group: "Agreements", items: ["DocuSign", "Leegality"] },
    ],
    engagements: ["raise-readiness", "sponsorship-kit", "outreach-programme"],
    fit: [
      "Have a business or event with a clear story",
      "Can share your numbers openly with us",
      "Can take investor or sponsor meetings yourself",
      "Plan to raise or sell sponsorships in the next few months",
    ],
    notFit: ["Want a guarantee that someone will invest", "Need money within days", "Want shares offered to the public"],
    quality: [
      "Targets and timeline agreed before outreach",
      "Pipeline tracker updated every week",
      "Every message sent with your approval",
      "Fortnightly review of replies and next steps",
      "A summary of every conversation at the end",
      "All contacts and material stay yours",
    ],
    note: {
      title: "Investment rules",
      text: "Raising investment in India is regulated: any issue of shares must follow the Companies Act, 2013 and, where they apply, SEBI rules. We prepare material, research and introductions; your company secretary, lawyer or chartered accountant handles the legal terms.",
      link: { label: "Looking to invest in or partner with ZARX itself? See Investors & Partners", href: "/partners" },
    },
    faqs: [
      {
        question: "Do you guarantee that we'll raise money or find sponsors?",
        answer:
          "No. Whether someone invests or sponsors depends on your business, your terms and the market, and nobody can honestly promise it. What we do is make your case as strong and clear as possible, put it in front of people who fit, and help you run a disciplined process.",
      },
      {
        question: "Do you invest in companies or hold investor money?",
        answer:
          "No. We don't invest on clients' behalf, hold funds or sell shares. Money moves directly between you and your investors or sponsors, under agreements your own advisers review.",
      },
      {
        question: "What kinds of sponsorship do you help with?",
        answer:
          "Events, conferences, college fests, sports and esports teams, content series, communities and other properties with an audience brands want to reach. We define what a sponsor gets, price it, and approach brands that fit.",
      },
      {
        question: "How is this different from your Investors & Partners page?",
        answer:
          "That page is about investing in or partnering with ZARX itself. This service is for clients: we help your company prepare for, find and approach investors and sponsors.",
      },
    ],
    related: ["brand-partnerships", "digital-marketing", "ui-ux-design"],
    ctaHeadline: "Ready to make your case to investors or sponsors?",
  },
  {
    slug: "brand-partnerships",
    category: "business",
    icon: Handshake,
    name: "Brand Partnerships",
    draft: true,
    seoTitle: "Brand Partnerships & Co-Branding | ZARX",
    seoDescription:
      "Find the right partner brands, structure co-branding and collaboration deals, and run and measure partnerships that reach new customers.",
    card: {
      headline: "The right partner brands, on the right terms",
      line: "Partner research, co-branding deals, activation and measurement.",
      chips: ["Co-branding", "Collaborations", "Activation"],
    },
    headline: "Partnerships with brands your customers already love",
    subhead:
      "We identify the right partner brands, structure co-branding and collaboration deals, and run and measure the partnership so both sides see the value.",
    proof: ["Partners chosen for audience fit, not just size", "Terms agreed in writing before launch", "Shared results both brands can see"],
    pains: [
      "“We want to reach a new audience without paying for every impression.”",
      "“Our last collaboration was fun, but we can't say what it achieved.”",
      "“We don't know which brands would even say yes.”",
    ],
    outcomes: [
      "A shortlist of partner brands whose customers overlap with yours and who gain from working with you.",
      "Deals with clear roles, costs, rights and dates that both sides sign before launch.",
      "Partnerships measured with shared tracking, so you know which ones to renew.",
    ],
    capabilities: [
      { title: "Partner research & mapping", text: "Brands whose audience and values fit yours.", chips: ["Research", "Audience fit"] },
      { title: "Co-branding & collaborations", text: "Joint products, limited editions, content and events.", chips: ["Co-branding", "Collabs"] },
      { title: "Deal structure", text: "Roles, costs, revenue share, rights and exit terms.", chips: ["Terms", "Rights"] },
      { title: "Pitch & outreach", text: "Partnership decks and approaches to decision-makers.", chips: ["Pitch", "Outreach"] },
      { title: "Activation", text: "Launch plans across both brands' channels.", chips: ["Launch", "Cross-promotion"] },
      { title: "Measurement", text: "Shared links, codes and a report on what each partner delivered.", chips: ["Tracking", "Reports"] },
    ],
    deliverables: [
      "Partner map and shortlist",
      "Partnership pitch deck",
      "Outreach to shortlisted brands",
      "Deal terms and term sheet",
      "Co-branded asset guidelines",
      "Launch and activation plan",
      "Shared tracking links and codes",
      "Results report and renewal recommendation",
    ],
    timeline: {
      title: "Typical partnership",
      steps: [
        { when: "Weeks 1–2", what: "Goals and partner mapping" },
        { when: "Weeks 2–4", what: "Pitch and outreach" },
        { when: "Weeks 4–8", what: "Terms, contracts and creative" },
        { when: "Launch", what: "Activation across both brands" },
        { when: "After launch", what: "Measure, report and decide on renewal" },
      ],
    },
    tech: [
      { group: "Research & outreach", items: ["LinkedIn Sales Navigator", "HubSpot CRM"] },
      { group: "Co-branded assets", items: ["Canva", "Figma"] },
      { group: "Agreements", items: ["DocuSign", "Leegality"] },
      { group: "Tracking", items: ["UTM links", "Promo codes", "Google Analytics 4"] },
    ],
    engagements: ["partner-map", "partnership-deal", "partnerships-retainer"],
    fit: [
      "Have a brand with a clear audience",
      "Are open to sharing customers with a partner",
      "Can commit marketing time to a launch",
      "Want results measured on both sides",
    ],
    notFit: ["Want a logo swap with no shared goal", "Need a partner signed within a week", "Can't offer a partner anything in return"],
    quality: [
      "Goals for both brands agreed before outreach",
      "Shared tracking set up before launch",
      "A check-in midway through the partnership",
      "Results report for both partners",
      "A clear renew-or-stop recommendation",
      "Contracts in your company's name",
    ],
    faqs: [
      {
        question: "What makes a good brand partner?",
        answer:
          "An overlapping audience, matching values and something each side gains – new customers, content, credibility or reach. Size matters less than fit: a smaller brand your customers love often does more than a big name they ignore.",
      },
      {
        question: "Who signs the partnership agreement?",
        answer:
          "You and the partner brand. We prepare the terms, help negotiate them and recommend that your lawyer reviews the contract before you sign.",
      },
      {
        question: "How do you measure a partnership?",
        answer:
          "With shared tracking agreed before launch – partner-specific links, promo codes, landing pages and sign-up sources – plus each brand's own sales and reach numbers. Both brands see the same report.",
      },
      {
        question: "Can you help with co-branded products?",
        answer:
          "Yes. We help shape the idea, set out who designs, makes, sells and supports the product, and agree how costs and revenue are shared. Our design and animation teams can also create the packaging, content and launch campaign.",
      },
    ],
    related: ["influencer-marketing", "digital-marketing", "fundraising-sponsorship"],
    ctaHeadline: "Ready to find your next brand partner?",
  },
];
