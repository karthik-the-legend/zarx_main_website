import type { LucideIcon } from "lucide-react";
import {
  BadgeIndianRupee,
  Bot,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Code2,
  Eye,
  FileLock2,
  FlaskConical,
  Gamepad2,
  GitBranch,
  Handshake,
  KanbanSquare,
  KeyRound,
  Layers,
  LifeBuoy,
  Lightbulb,
  MessagesSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  UsersRound,
  Video,
} from "lucide-react";
import { facts } from "@/content/facts";
import { withFacts } from "@/content/engagements";

type Faq = { question: string; answer: string };
const present = <T,>(items: (T | null | false)[]) => items.filter(Boolean) as T[];

/* ─── Audiences ("Who we build for") ───────────────────────────── */

export const audiences: {
  icon: LucideIcon;
  quote: string;
  who: string;
  text: string;
  typical: string;
  links: { label: string; href: string }[];
}[] = [
  {
    icon: Lightbulb,
    quote: "I have an idea and a deadline",
    who: "Founders",
    text: "Test the idea with real users before you spend your runway.",
    typical: "Typical project: a Discovery Sprint, then an MVP Build.",
    links: [
      { label: "Web Platforms", href: "/services/web-platforms" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    icon: Rocket,
    quote: "We're funded and behind on the roadmap",
    who: "Startups",
    text: "Add a senior squad without a six-month hiring cycle.",
    typical: "Typical project: a Dedicated Squad on a monthly plan.",
    links: [
      { label: "How we work", href: "/process" },
      { label: "Engagement models", href: "/#engagements" },
    ],
  },
  {
    icon: Bot,
    quote: "We need AI that actually works",
    who: "Businesses",
    text: "Turn one costly manual workflow into a measured AI pilot.",
    typical: "Typical project: an AI Opportunity Workshop, then a 4-week AI Pilot.",
    links: [{ label: "AI Builders & Automation", href: "/services/ai-automation" }],
  },
  {
    icon: Gamepad2,
    quote: "We're building a game or on-chain product",
    who: "Game & Web3 teams",
    text: "Specialists in Unity, real-time multiplayer and audit-ready smart contracts.",
    typical: "Typical project: a Playable Prototype or a Web3 Feasibility Sprint.",
    links: [
      { label: "Mobile & Gaming", href: "/services/mobile-gaming" },
      { label: "Web3 Products", href: "/services/web3" },
    ],
  },
];

/* ─── Home: AI, used honestly ──────────────────────────────────── */

export const aiAccelerates = [
  "Project scaffolding",
  "First-draft code and tests",
  "Design variations",
  "Documentation",
  "QA test cases",
  "Data clean-up",
];

export const peopleDecide = [
  "Architecture",
  "Security and code review",
  "UX decisions",
  "Anything that touches payments, user data or production",
];

/* ─── Solutions ────────────────────────────────────────────────── */

export const goals: {
  id: string;
  goal: string;
  services: string[];
  team: string;
  timeline: string;
  engagement: string;
}[] = [
  {
    id: "launch",
    goal: "Launch my first product",
    services: ["ui-ux-design", "web-platforms", "ai-automation"],
    team: "A product designer and web engineers, led by a senior lead, with AI specialists if your product needs them.",
    timeline: "8–12 weeks",
    engagement: "mvp-build",
  },
  {
    id: "ai",
    goal: "Add AI to a product or workflow",
    services: ["ai-automation", "web-platforms"],
    team: "AI engineers who design, evaluate and secure the workflow, with a web engineer for the interface.",
    timeline: "3–4 week pilot, then scale",
    engagement: "ai-pilot",
  },
  {
    id: "mobile",
    goal: "Launch a mobile app or game",
    services: ["mobile-gaming", "ui-ux-design", "animation"],
    team: "App or Unity engineers and a game-UI designer, with an animator for store trailers.",
    timeline: "10–16 weeks",
    engagement: "app-mvp",
  },
  {
    id: "web3",
    goal: "Build on-chain",
    services: ["web3", "web-platforms", "ui-ux-design"],
    team: "Smart-contract engineers, a web engineer for the dApp and a designer for onboarding.",
    timeline: "8–14 weeks, plus an independent audit",
    engagement: "build-to-audit",
  },
  {
    id: "fix",
    goal: "Fix a product users find confusing",
    services: ["ui-ux-design"],
    team: "A UX researcher and product designer, working with your developers.",
    timeline: "3–6 weeks",
    engagement: "ux-audit",
  },
  {
    id: "explain",
    goal: "Explain or sell my product visually",
    services: ["animation"],
    team: "A motion designer and 3D artist, with a scriptwriter for explainers.",
    timeline: "2–6 weeks",
    engagement: "product-explainer",
  },
];

/** Comparison table rows: timeline and lead engagement per service. */
export const serviceComparison: Record<string, { bestFor: string; timeline: string; engagement: string }> = {
  "web-platforms": { bestFor: "SaaS, marketplaces, dashboards", timeline: "8–10 weeks (MVP)", engagement: "web-mvp" },
  "mobile-gaming": { bestFor: "iOS, Android apps and casual games", timeline: "10–16 weeks", engagement: "app-mvp" },
  web3: { bestFor: "Smart contracts, dApps, wallets", timeline: "8–12 weeks + audit", engagement: "build-to-audit" },
  "ai-automation": { bestFor: "One workflow, automated and measured", timeline: "3–4 week pilot", engagement: "ai-pilot" },
  "ui-ux-design": { bestFor: "New products and confusing ones", timeline: "1–8 weeks", engagement: "full-product-design" },
  animation: { bestFor: "Explainers, trailers, UI motion", timeline: "1–6 weeks", engagement: "product-explainer" },
};

export const inclusions: { icon: LucideIcon; text: string }[] = [
  { icon: UserCheck, text: "A senior lead who stays from kickoff to launch" },
  { icon: BadgeIndianRupee, text: "A fixed quote for the agreed scope" },
  { icon: Video, text: "A live demo every week, in your browser or on your phone" },
  { icon: GitBranch, text: "Code in your own GitHub or GitLab from day one" },
  { icon: FlaskConical, text: "Automated tests and a QA pass before every release" },
  { icon: ShieldCheck, text: "Security review before launch (OWASP checklist)" },
  { icon: FileLock2, text: "Handover docs, credentials and a recorded walkthrough" },
  { icon: LifeBuoy, text: withFacts("{FreeFix}") },
];

/* ─── Why ZARX ─────────────────────────────────────────────────── */

export const reasons: { icon: LucideIcon; title: string; claim: string; proof: string | null; forYou: string }[] = [
  {
    icon: Sparkles,
    title: "AI-accelerated delivery pipeline",
    claim: "AI drafts scaffolding, tests and docs; engineers review every line.",
    proof: facts.stats.weeksToFirstBuild
      ? `${facts.stats.weeksToFirstBuild.value} ${facts.stats.weeksToFirstBuild.label} – ${facts.stats.weeksToFirstBuild.note}`
      : null,
    forYou: "A working product sooner, for less of your runway.",
  },
  {
    icon: Bot,
    title: "AI engineers on every team",
    claim: "Specialists who design, evaluate and secure AI features – not just write prompts.",
    proof: null,
    forYou: "AI that works on your data, not just in a demo.",
  },
  {
    icon: Gamepad2,
    title: "Game-studio design quality",
    claim: "We bring game-level polish – feel, feedback and motion – to every app.",
    proof: null,
    forYou: "Products users enjoy using and come back to.",
  },
  {
    icon: Layers,
    title: "Cost-efficiency without junior shortcuts",
    claim: "Senior people on every build; AI absorbs the busywork.",
    proof: null,
    forYou: "Fixed quotes and less spent on rework.",
  },
  {
    icon: Users,
    title: "Founder-first partnership",
    claim: "A founder joins every kickoff and every monthly review.",
    proof: null,
    forYou: "Someone senior who answers when it matters.",
  },
  {
    icon: KeyRound,
    title: "Product and IP thinking",
    claim: "We think like owners – roadmaps, metrics, defensibility – not order-takers.",
    proof: null,
    forYou:
      "You own 100% of your code, designs and data. Our general-purpose internal tools are licensed to you free, forever.",
  },
];

export const comparison = {
  columns: ["ZARX", "Freelancers", "Large agency", "Hiring in-house"],
  rows: [
    { label: "Time to start", values: ["Fast: a Discovery Sprint first", "Fast", "Slower: sales and onboarding", "Slowest: months to hire"] },
    { label: "Seniority of the people doing the work", values: ["Senior engineers on every build", "Varies person to person", "Often junior after the pitch", "Depends on who you can hire"] },
    { label: "Design, engineering and AI under one roof", values: ["Yes", "Rarely – you coordinate several", "Yes", "Only if you hire all three"] },
    { label: "Fixed quote", values: ["Yes, for the agreed scope", "Sometimes", "Varies", "No – salaries regardless of output"] },
    { label: "Who owns the IP", values: ["You, on payment", "Depends on the contract", "Usually you – check the contract", "You"] },
    { label: "Continuity if someone leaves", values: ["Person replaced; code and docs stay with you", "Risky – work can stall", "Good", "Risky – knowledge leaves with people"] },
    { label: "Long-term control", values: ["High – you own code and accounts", "Medium", "Medium", "Highest"] },
    { label: "Typical cost for an MVP", values: ["Mid – senior team, AI-assisted", "Lowest", "Highest", "High – salaries, hiring and tools"] },
  ],
};

export const commitments: string[] = [
  "A fixed quote for the agreed scope",
  "A live demo every week",
  "Code in your repository from day one",
  "Full IP assignment on payment",
  "NDA before detailed discussions, on request",
  facts.replacementDays
    ? `Any team member replaced within ${facts.replacementDays} working days if you ask`
    : "Any team member replaced if you ask",
  withFacts("{FreeFix}"),
  "Leave anytime with a complete handover",
];

export const wontDo = [
  "Start building before we agree what success looks like",
  "Hide junior staff behind a senior pitch",
  "Ship AI-written code that no engineer has reviewed",
  "Build real-money gambling products or token schemes without a product",
];

export const principles: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: UsersRound, title: "One accountable team", text: "Strategy, design, engineering and AI under one roof – no hand-offs between agencies." },
  { icon: Eye, title: "Progress you can see", text: "Working software every week instead of status reports." },
  { icon: ClipboardCheck, title: "Clear scope and milestones", text: "A written plan before build starts, and early warnings if anything needs to change." },
  { icon: KeyRound, title: "You own what we build", text: "Code, designs and documentation are yours, so you're never locked in." },
];

export const tools = [
  "A shared Slack or WhatsApp channel",
  "A Linear or Jira board you can open anytime",
  "A recorded 30-minute demo every Friday",
  "A monthly founder review of progress, risks and budget",
];

/* ─── Process ──────────────────────────────────────────────────── */

export const processSteps: {
  key: string;
  title: string;
  duration: string;
  happens: string;
  youGet: string;
  role: string;
  gate: string | null;
  ai?: boolean;
}[] = [
  {
    key: "discover",
    title: "Discover",
    duration: "1–2 weeks",
    happens: "Workshops, user and competitor research, scope and a technical plan.",
    youGet: "A product brief, a clickable prototype of the core flow and a fixed quote.",
    role: "Two or three workshops, plus access to data and stakeholders.",
    gate: "Approve the scope and quote – or walk away owning the brief and prototype.",
  },
  {
    key: "design",
    title: "Design",
    duration: "1–3 weeks",
    happens: "UX flows, UI design, a design system and user tests.",
    youGet: "Tested high-fidelity designs and a build plan.",
    role: "Review sessions, with feedback within 2 working days.",
    gate: "Sign off the designs.",
    ai: true,
  },
  {
    key: "build",
    title: "Build",
    duration: "4–10 weeks",
    happens: "1-week sprints, AI-assisted coding with engineer review, and QA.",
    youGet: "A live demo every Friday, a staging link and a task board you can see.",
    role: "A 30-minute weekly demo and quick answers on priorities.",
    gate: "Feature-complete sign-off.",
    ai: true,
  },
  {
    key: "launch",
    title: "Launch",
    duration: "1 week",
    happens: "Security review, performance tests, and store submission or deployment.",
    youGet: "Your live product, monitoring, handover docs and credentials.",
    role: "Final acceptance and launch communications.",
    gate: "Go-live approval.",
  },
  {
    key: "scale",
    title: "Scale",
    duration: "Ongoing",
    happens: withFacts("{FreeFix}, then an optional retainer for analytics, new features, AI improvements and live ops."),
    youGet: "A monthly report with metrics and a recommended roadmap.",
    role: "Share business priorities so we focus on what moves your numbers.",
    gate: null,
  },
];

export const communication: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessagesSquare,
    title: "Shared channel",
    text: facts.channelReplyHours
      ? `Slack or WhatsApp, with replies within ${facts.channelReplyHours} working hours.`
      : "Slack or WhatsApp, answered during working hours.",
  },
  { icon: KanbanSquare, title: "Live task board", text: "Linear or Jira, open to you anytime." },
  { icon: Video, title: "Friday demo", text: "30 minutes, recorded, every week of the build." },
  { icon: CalendarCheck, title: "Monthly founder review", text: "Progress, risks and budget with a ZARX founder." },
];

export const changeAndPayment: string[] = [
  facts.paymentSplit
    ? `A fixed quote per stage, with payments tied to milestones (${facts.paymentSplit}).`
    : "A fixed quote per stage, with payments tied to milestones.",
  "New ideas go into a change log with a cost and time estimate before any work starts.",
  "You can swap features of equal size at no extra cost.",
];

export const qualityGates = [
  "Code review on every change",
  "Automated tests on core flows",
  "Accessibility check",
  "Security review (OWASP)",
  "Performance budget (Core Web Vitals)",
  "Client acceptance",
];

export const needsFromYou = [
  "One decision-maker",
  "Brand assets and content",
  "Access to accounts and data",
  "Timely feedback – within 2 working days",
];

/* ─── Leadership ───────────────────────────────────────────────── */

export const values: { title: string; text: string }[] = [
  { title: "Ownership", text: withFacts("We ship it, we fix it: {freeFix} on everything we deliver.") },
  { title: "Candour", text: "We tell you early when something is off track, with a plan to fix it." },
  { title: "Craft", text: "Game-studio polish in every product: feel, feedback and motion." },
  { title: "Founder-first", text: "A founder joins every kickoff and every monthly review." },
];

/* ─── Investors & Partners ─────────────────────────────────────── */

export const thesis: { title: string; text: string }[] = [
  { title: "Services pay the bills", text: "Client projects fund operations from day one." },
  {
    title: "The pipeline gets faster",
    text: "Each project adds reusable tools, templates and AI workflows, so delivery time and cost keep falling.",
  },
  {
    title: "Our own products",
    text: "We use the same pipeline to build ZARX-owned products in games and AI.",
  },
];

export const marketFacts: { stat: string; text: string; source: string }[] = [
  {
    stat: "40%",
    text: "of enterprise apps are expected to include task-specific AI agents by 2026, up from under 5% in 2025.",
    source: "Gartner, via Process Excellence Network",
  },
  {
    stat: "~30%",
    text: "of enterprise application software revenue – over $450 billion – could come from agentic AI by 2035, up from 2% in 2025.",
    source: "Gartner, via Process Excellence Network",
  },
];

export const partnerWays: { icon: LucideIcon; title: string; forWho: string; youGet: string; weGet: string; cta: string }[] = [
  {
    icon: Handshake,
    title: "Referral partners",
    forWho: "Agencies, consultants and accelerators",
    youGet: "A referral fee on the first-year value of projects you introduce, paid when the client pays.",
    weGet: "Introductions to founders who need a senior product team.",
    cta: "Become a referral partner",
  },
  {
    icon: Network,
    title: "Technology partners",
    forWho: "Cloud, AI, Web3 and game-engine companies",
    youGet: "Joint solutions, case studies and co-marketing.",
    weGet: "Early access and deeper expertise in your platform.",
    cta: "Talk about a technology partnership",
  },
  {
    icon: Code2,
    title: "White-label delivery",
    forWho: "Agencies without in-house engineering",
    youGet: "We build; you keep the client relationship, under NDA.",
    weGet: "Steady, well-scoped project work.",
    cta: "Discuss white-label work",
  },
  {
    icon: Building2,
    title: "Co-build / venture studio",
    forWho: "Founders with deep domain expertise",
    youGet: "A product team that shares the build risk, on terms agreed case by case.",
    weGet: "A stake in products we believe in.",
    cta: "Pitch a co-build",
  },
];

export const clarityLine =
  "Client deliverables always belong to the client. ZARX's IP is its general-purpose tooling and its own products – never a client's code, designs or data.";

export const investorDisclaimer =
  "This page is for information only. It is not an offer or invitation to subscribe to or purchase securities of ZARX Technologies Pvt. Ltd. Any investment will be made only through a private placement in line with the Companies Act, 2013.";

export const governance = present([
  "Registered private limited company",
  "Statutory filings up to date",
  "Founder contacts on the Leadership page",
]);

/* ─── FAQs ─────────────────────────────────────────────────────── */

export const homeFaqs: Faq[] = [
  {
    question: "How much does it cost to build an MVP with ZARX?",
    answer:
      "It depends on what the first version must do: user roles, platforms, integrations and AI features. Most clients start with a 1–2 week Discovery Sprint that ends with a clickable prototype and a fixed quote for the build. You only commit to the build after seeing the plan and the price, and the quote stays fixed for the agreed scope.",
  },
  {
    question: "How long until I see a working product?",
    answer:
      "You see working software every week. After a 1–2 week Discovery Sprint and 1–3 weeks of design, the build runs in one-week sprints with a live demo every Friday, so the first clickable screens arrive within days of the build starting. A typical MVP is live in 6–10 weeks, depending on scope.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do. On payment, the intellectual property in everything we create for you – code, designs, content and data – is assigned to your company. Code lives in your own GitHub or GitLab from day one, and accounts are opened in your name. Only our general-purpose internal tools stay ours, and they're licensed to you free, forever.",
  },
  {
    question: "Will you sign an NDA before we talk details?",
    answer:
      "Yes. If you'd like an NDA before sharing details, tick the box on our brief form or ask on the first call, and we'll send one for signature. You're also welcome to send your own. Nothing you share is used for anything other than understanding and estimating your project.",
  },
  {
    question: "Do you work with clients outside India, and in which time zones?",
    answer:
      "Yes. We're based in New Delhi (IST, UTC+5:30) and work with founders in India and abroad. We schedule the weekly demo and monthly review in a window that overlaps your working day, keep a shared channel for quick questions, and record every demo so nobody has to join at an unreasonable hour.",
  },
  {
    question: "What happens after launch?",
    answer: withFacts(
      "Every build includes {freeFix} for bugs in what we delivered. After that you choose: an optional monthly retainer for monitoring, analytics, new features and AI improvements, or a clean handover to your own team with documentation, credentials and a recorded walkthrough. Either way, you get a recommended roadmap based on real usage."
    ),
  },
];

export const solutionsFaqs: Faq[] = [
  {
    question: "Can I hire you for just one service?",
    answer:
      "Yes. Many clients start with a single service – a UX audit, an AI pilot or a product explainer – and add others later if it makes sense. We'll tell you honestly when another discipline would help, but you're never required to buy a bundle. Each service has its own entry engagement with a fixed scope.",
  },
  {
    question: "Do I need a technical co-founder to work with you?",
    answer:
      "No. We work with many non-technical founders. A senior lead translates your goals into a technical plan, explains trade-offs in plain language and keeps you in control of decisions. You'll need one person who can make product decisions and give feedback quickly; you don't need to read code to work with us.",
  },
  {
    question: "Can you take over a product another team started?",
    answer:
      "Yes. We start with a short audit of the code, design, security and performance, so we both know what we're taking on. The audit ends with a written report and a prioritised plan: fix in place, rebuild in stages, or a mix. We only recommend a rewrite when it's cheaper than repairing what you have.",
  },
  {
    question: "How do you price projects that mix several services?",
    answer:
      "As one project with one fixed quote, not separate bills per service. The Discovery Sprint defines what each discipline contributes and when, and the quote covers the agreed scope across all of them. You get one senior lead and one weekly demo, whatever the mix of design, engineering, AI and animation.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short brief about what you're building and who it's for, any material you already have – brand, research, designs or code – and one person who can make decisions. Send the brief through our form or book a call. A founder replies within one working day with next steps, a rough timeline and a budget range.",
  },
];

export const whyFaqs: Faq[] = [
  {
    question: "Why should we trust a newer studio?",
    answer:
      "Because you take very little risk to find out. Every project starts with a short Discovery Sprint that ends with a prototype and a fixed quote, and you can walk away owning both. After that you see working software every week. Founders lead every engagement, the commitments on this page go into your contract, and you own the code from day one.",
  },
  {
    question: "How do you keep quality high with AI?",
    answer:
      "AI drafts; engineers decide. AI handles scaffolding, first-draft code, tests and documentation, and every line it writes is reviewed by a ZARX engineer before it ships. Architecture, security, UX and anything touching payments or user data stay with senior people. Automated tests, code review and a security check gate every release.",
  },
  {
    question: "Who will actually work on our project?",
    answer:
      "The senior lead you meet before you sign stays from kickoff to launch, supported by engineers and designers matched to your product. You'll know everyone's name and role, see their work in the weekly demo and on the task board, and a founder joins every kickoff and monthly review. If someone isn't working out, ask and we'll replace them.",
  },
  {
    question: "What if we're unhappy?",
    answer:
      "Tell us early – in the weekly demo, the shared channel or directly to a founder – and we'll agree a fix and a date. Because work is split into stages with sign-off gates, problems surface quickly and cost little to correct. If you decide to leave, you get a complete handover: code, designs, credentials and documentation.",
  },
];

export const processFaqs: Faq[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs take 8–14 weeks end to end: 1–2 weeks of discovery, 1–3 weeks of design, 4–10 weeks of build and a launch week. AI pilots take 3–4 weeks; audits and design sprints one to three. After discovery you get a written plan with dates for each stage, and the weekly demo shows whether you're on track.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "One person who can make decisions, your brand assets and any existing content, access to the accounts and data the project needs, and feedback within two working days during design and build. That's it. If you don't have brand assets or research yet, we can help create them as part of discovery.",
  },
  {
    question: "What if our requirements change mid-project?",
    answer:
      "Change is normal. New ideas go into a change log with a cost and time estimate before any work starts, so you decide with the numbers in front of you. You can also swap a planned feature for a new one of equal size at no extra cost. Nothing outside the agreed scope is billed without your written approval.",
  },
  {
    question: "Do you offer support after launch?",
    answer: withFacts(
      "Yes. Every build includes {freeFix} for bugs in what we delivered. After that you can choose an optional monthly retainer covering monitoring, analytics, new features, AI improvements or live ops, with a monthly metrics report – or take everything in-house with our handover documentation and recorded walkthrough."
    ),
  },
  {
    question: "What if we need to pause?",
    answer:
      "You can pause at the end of any sprint. We'll write down where things stand, merge and document the work so far, and agree a restart date. Because code lives in your repository and stages are paid by milestone, pausing doesn't strand your work or your money. Restarting may need a short ramp-up depending on how long the pause lasts.",
  },
  {
    question: "Can we bring our own developers?",
    answer:
      "Yes. Your developers can join our sprints, review our pull requests and take over parts of the build. We agree who owns what at kickoff, use your repository and tools, and keep the weekly demo for everyone. Many clients use this to hand the product over gradually to an in-house team.",
  },
  {
    question: "How do milestone payments work?",
    answer:
      "Each stage has a fixed quote, and payments are tied to milestones you can verify – usually an advance to start, a payment at a mid-build demo and the rest at launch acceptance. The exact split is agreed in your proposal. You never pay for a stage before you've approved the previous one.",
  },
  {
    question: "What if the project runs late?",
    answer:
      "You'll know early, because the weekly demo and task board show progress against the plan. If we're slipping, we say so straight away with the reason and options: adjust scope, add capacity or move the date. Delays caused by our own estimates don't cost you extra; changes you request are handled through the change log.",
  },
];

export const contactFaqs: Faq[] = [
  {
    question: "Is the first call really free, and what will we cover?",
    answer:
      "Yes, it's free and there's no obligation. In 30 minutes we'll understand what you're building, who it's for and what success looks like, ask about timeline and budget, and tell you honestly whether we're a good fit. If we are, we suggest a first step – usually a Discovery Sprint – with a rough timeline and budget range.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "Nothing formal – no pitch deck needed. It helps to know who the product is for, the problem it solves, any deadline you're working to and a rough budget range. If you already have designs, a prototype, research or code, have a link ready. Bring anyone who will make decisions on the project.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes. Tick the NDA box on the brief form, or ask on the call, and we'll send one for signature before you share details. You can also send your own. We treat everything you share as confidential and use it only to understand and estimate your project.",
  },
  {
    question: "How accurate is the 24-hour ballpark estimate?",
    answer:
      "It's a range, not a quote. Based on your brief, we compare your project with similar builds and give you a likely timeline and budget band, so you can decide whether to go further. The fixed quote comes after a Discovery Sprint, once scope is clear. If the ballpark changes a lot after discovery, we'll explain exactly why.",
  },
  {
    question: "Do you work with clients outside India? Which time zones?",
    answer:
      "Yes. We're based in New Delhi (IST, UTC+5:30) and work with founders in India and abroad. We schedule demos and reviews in a window that overlaps your working day, record every demo, and use a shared channel for quick questions, so different time zones don't slow the project down.",
  },
  {
    question: "What's the smallest project you take on?",
    answer:
      "Our smallest engagements are focused sprints: a 2-day AI Opportunity Workshop, a one-week Rescue Audit of an existing web product, a 1–2 week UX Audit or a 1–2 week UI Motion Pack. They're a low-risk way to work together, and each ends with something useful you keep whether or not you continue.",
  },
  {
    question: "How do payments work – INR and international?",
    answer:
      "Indian clients are invoiced in INR, with GST where it applies. International clients can pay in USD by international bank transfer. Payments are tied to milestones agreed in the quote, so you always pay for work you've seen. Exact terms are set out in your proposal before anything starts.",
  },
];
