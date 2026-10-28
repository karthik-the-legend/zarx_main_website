import type { LucideIcon } from "lucide-react";
import { Blocks, BrainCircuit, Clapperboard, Gamepad2, Globe, Palette } from "lucide-react";

type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  name: string;
  seoTitle: string;
  seoDescription: string;
  /** Card copy used on Home, Solutions and the mega-menu. */
  card: { headline: string; line: string; chips: string[] };
  headline: string;
  subhead: string;
  proof: string[];
  pains: string[];
  outcomes: string[];
  capabilities: { title: string; text: string; chips: string[] }[];
  deliverables: string[];
  timeline: { title: string; steps: { when: string; what: string }[] };
  tech: { group: string; items: string[] }[];
  engagements: string[];
  fit: string[];
  notFit: string[];
  quality: string[];
  /** Optional sourced context or compliance box. */
  note?: { title: string; text: string; source?: string };
  faqs: Faq[];
  related: string[];
  ctaHeadline: string;
};

export const services: Service[] = [
  {
    slug: "web-platforms",
    icon: Globe,
    name: "Web Platforms",
    seoTitle: "Web App & SaaS Development | ZARX",
    seoDescription:
      "SaaS products, dashboards and marketplaces built on Next.js and Node – fast, secure, and ready to scale without a rewrite. Book a free call.",
    card: {
      headline: "Web apps that load fast and scale with you",
      line: "SaaS products, marketplaces, dashboards and portals on proven stacks.",
      chips: ["SaaS", "Dashboards", "Marketplaces"],
    },
    headline: "Web apps that load fast and grow with you",
    subhead:
      "We build SaaS products, marketplaces, dashboards and portals on proven stacks, so your first version is fast, secure and ready to scale.",
    proof: [
      "Core Web Vitals in Google's “good” range at launch",
      "Live staging link from week 2",
      "Your cloud, your repo, your accounts",
    ],
    pains: [
      "“Our MVP slows down every time real users show up.”",
      "“The last team left code nobody can safely change.”",
      "“We've spent months building features nobody uses.”",
    ],
    outcomes: [
      "A launch-ready MVP, scoped to what your users need first.",
      "Pages that pass Core Web Vitals: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.",
      "An architecture that grows to multi-tenant and new markets without a rebuild.",
    ],
    capabilities: [
      { title: "SaaS & multi-tenant platforms", text: "Subscriptions, roles and team workspaces.", chips: ["Next.js", "PostgreSQL"] },
      { title: "Marketplaces & portals", text: "Listings, search, bookings and payouts.", chips: ["Node.js", "Redis"] },
      { title: "Dashboards & internal tools", text: "Real-time data, admin panels and reporting.", chips: ["React", "WebSockets"] },
      { title: "Payments & commerce", text: "Razorpay, UPI and Stripe, with GST-ready invoices.", chips: ["Razorpay", "Stripe"] },
      { title: "Integrations & APIs", text: "CRMs, ERPs, WhatsApp Business, webhooks and public APIs.", chips: ["REST", "Webhooks"] },
      { title: "Rescue & rebuild", text: "Audits, performance fixes and migration off legacy stacks.", chips: ["Audits", "Migration"] },
    ],
    deliverables: [
      "Architecture document",
      "Design system and screens",
      "Web app: front end and back end",
      "Admin panel",
      "Authentication and user roles",
      "Payments",
      "Analytics events set up",
      "CI/CD pipeline",
      "Staging and production on your cloud account",
      "Automated tests",
      "Technical docs and a recorded handover",
    ],
    timeline: {
      title: "Typical MVP",
      steps: [
        { when: "Week 1", what: "Discovery and scope" },
        { when: "Weeks 2–3", what: "UX and UI design" },
        { when: "Weeks 3–9", what: "Build in 1-week sprints, demo every Friday" },
        { when: "Week 10", what: "QA, security review, launch" },
        { when: "After launch", what: "{FreeFix}" },
      ],
    },
    tech: [
      { group: "Front end", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { group: "Back end", items: ["Node.js (NestJS, Express)", "Python (FastAPI)"] },
      { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis"] },
      { group: "Cloud", items: ["AWS", "Vercel", "Google Cloud"] },
      { group: "Payments", items: ["Razorpay", "Stripe"] },
    ],
    engagements: ["discovery-sprint", "web-mvp", "rescue-audit"],
    fit: [
      "Need a custom product, not a template site",
      "Can join a weekly 30-minute demo",
      "Want to own the code",
      "Plan to grow past the first version",
    ],
    notFit: [
      "Need a 5-page brochure site",
      "Need launch in under 3 weeks",
      "Want to change scope daily without a product owner",
    ],
    quality: [
      "OWASP Top 10 review before launch",
      "WCAG 2.2 AA accessibility",
      "Automated tests on core flows",
      "Uptime monitoring and daily backups",
      "Personal-data handling ready for India's DPDP Act: consent, export and deletion",
    ],
    faqs: [
      {
        question: "How much does a web app or SaaS MVP cost with ZARX?",
        answer:
          "It depends on scope: how many user roles, integrations and screens the first version needs. Most clients start with a 1–2 week Discovery Sprint that ends with a clickable prototype and a fixed quote for the build. You commit to the build only after you've seen the plan and the price, and the quote stays fixed for the agreed scope.",
      },
      {
        question: "Can you take over and fix a product another team built?",
        answer:
          "Yes. We start with a one-week Rescue Audit of the code, security and performance, then give you a written report and a prioritised fix plan. You can fix the riskiest parts first, rebuild in stages, or hand the plan to your own team. We only recommend a full rewrite if the audit shows it costs less than repairing what you have.",
      },
      {
        question: "Which tech stack will you use, and can we choose?",
        answer:
          "Our default is Next.js and TypeScript on the front end, Node.js or Python on the back end and PostgreSQL for data, because they are proven and easy to hire for. If you already have a stack, or a strong reason to use another, we compare the trade-offs during discovery and use what fits your product and your team.",
      },
      {
        question: "Who owns the hosting, domain and third-party accounts?",
        answer:
          "You do. We set up hosting, domains, payment gateways and other services in accounts your company owns, and work inside them with access you control. Code lives in your GitHub or GitLab from day one. At handover you already hold every credential, so there is nothing to transfer and no lock-in.",
      },
      {
        question: "Will the app be SEO-friendly and fast on mobile?",
        answer:
          "Yes. We use server rendering where it helps search, clean URLs, metadata and structured data. We test on mid-range phones and set a performance budget so pages meet Google's Core Web Vitals “good” thresholds at launch: LCP within 2.5 seconds, INP within 200 milliseconds and CLS under 0.1.",
      },
      {
        question: "Can you accept Indian and international payments?",
        answer:
          "Yes. We integrate Razorpay for UPI, cards and netbanking in India, and Stripe for international cards and subscriptions. We also set up GST-ready invoices, refunds and payment webhooks so your finance records stay accurate. The payment accounts are opened in your company's name, so the money and the data stay with you.",
      },
      {
        question: "What does post-launch support cost?",
        answer:
          "Every build includes {freeFix} for bugs in what we delivered. After that, support is optional: a monthly retainer covers monitoring, updates and new features, sized to the hours you need. You can also take everything in-house, because the handover docs and recorded walkthrough are written for exactly that.",
      },
    ],
    related: ["ui-ux-design", "ai-automation", "animation"],
    ctaHeadline: "Ready to put your product on the web?",
  },
  {
    slug: "mobile-gaming",
    icon: Gamepad2,
    name: "Mobile & Gaming Apps",
    seoTitle: "Mobile App & Game Development | ZARX",
    seoDescription:
      "iOS, Android and Unity games with game-studio polish – built to pass store review and keep users coming back. Senior team. Book a free call.",
    card: {
      headline: "Apps and games people keep opening",
      line: "iOS, Android and cross-platform apps, and Unity games, built for retention.",
      chips: ["iOS", "Android", "Unity"],
    },
    headline: "Apps and games people keep opening",
    subhead:
      "We design and build iOS, Android and cross-platform apps and Unity games with the feel of a game studio: smooth, fast and built for day-30 retention, not just the launch.",
    proof: [
      "Built to current App Store and Google Play rules",
      "60 fps target on mid-range Android phones",
      "Test builds on your phone every week",
    ],
    pains: [
      "“Users install, open once and never come back.”",
      "“Our app crashes on cheaper Android phones.”",
      "“Store review keeps rejecting our builds.”",
    ],
    outcomes: [
      "A store-approved app or game, built for retention as well as launch.",
      "Retention, crash and performance dashboards live from day one.",
      "A live-ops plan: what to update, test and monetise after launch.",
    ],
    capabilities: [
      { title: "Native & cross-platform apps", text: "One codebase or fully native, chosen per product.", chips: ["Swift", "Kotlin", "React Native", "Flutter"] },
      { title: "Casual & mid-core games", text: "2D and 3D games, level design and game economy.", chips: ["Unity", "C#"] },
      { title: "Real-time & multiplayer", text: "Leaderboards, matchmaking, chat and live events.", chips: ["Leaderboards", "Matchmaking"] },
      { title: "Monetisation", text: "In-app purchases, subscriptions and rewarded ads.", chips: ["IAP", "Subscriptions"] },
      { title: "Store launch & ASO", text: "Listings, screenshots, trailers and review compliance.", chips: ["App Store", "Google Play"] },
      { title: "Live ops & analytics", text: "A/B tests, remote config, crash and retention tracking.", chips: ["Remote config", "Crashlytics"] },
    ],
    deliverables: [
      "Game design doc or product spec",
      "UX flows and UI",
      "iOS and Android builds",
      "Back end and admin panel",
      "Analytics and crash reporting",
      "Store listings and creatives",
      "Release pipeline: TestFlight and Play internal testing",
      "Source code and asset files",
      "Handover and live-ops playbook",
    ],
    timeline: {
      title: "Typical app or casual game",
      steps: [
        { when: "Weeks 1–2", what: "Concept, core loop or user flows, prototype" },
        { when: "Weeks 3–4", what: "Art and UI" },
        { when: "Weeks 5–12", what: "Build in sprints, test build every Friday" },
        { when: "Weeks 13–14", what: "Soft launch in a test market" },
        { when: "Weeks 15–16", what: "Global launch, then live ops" },
      ],
    },
    tech: [
      { group: "Apps", items: ["Swift", "Kotlin", "React Native", "Flutter"] },
      { group: "Games", items: ["Unity (C#)"] },
      { group: "Back end", items: ["Firebase", "Node.js"] },
      { group: "Analytics", items: ["Firebase Analytics", "Crashlytics", "GameAnalytics"] },
      { group: "Ads", items: ["AdMob", "Unity Ads"] },
    ],
    engagements: ["playable-prototype", "app-mvp", "live-ops-retainer"],
    fit: [
      "Care about retention as much as launch",
      "Want one team for the app, back end and store",
      "Can test builds every week",
    ],
    notFit: [
      "Want a real-money, betting or cash-prize game – banned in India since 1 May 2026, and we don't build them",
      "Want a clone of an existing hit",
      "Need a launch in under 6 weeks",
    ],
    quality: [
      "Tested on real devices, including low-RAM Android phones",
      "Crash-free session target agreed before launch",
      "Store-policy check before every submission",
      "Child-safety and age-rating review for games",
      "Secure purchase validation on the server",
    ],
    note: {
      title: "Store rules we build to",
      text: "Since 28 April 2026, App Store uploads must be built with Xcode 26 and the iOS 26 SDK. From 31 August 2026, Google Play requires new apps and updates to target Android 16 (API level 36).",
      source: "Apple Developer; Google Play target API requirements",
    },
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "For most apps, cross-platform with React Native or Flutter is the right default: one codebase, faster releases and lower cost. We recommend native Swift and Kotlin when you need heavy device features, complex graphics or the last bit of performance. Games are usually built in Unity, which already targets both stores. We explain the trade-off for your product during discovery.",
      },
      {
        question: "How much does a mobile app or casual game cost?",
        answer:
          "It depends on features, art style, back end and how many platforms you launch on. Many clients start with a 3–4 week Playable Prototype that tests the core loop on real phones and ends with a fixed quote for the full build. That way you decide on the bigger spend with something playable in your hand.",
      },
      {
        question: "How do you get apps approved on the App Store and Google Play?",
        answer:
          "We build to the current store rules from the start, including Apple's Xcode 26 requirement and Google Play's Android 16 target. Before every submission we run a store-policy check covering privacy labels, permissions, payments and age ratings. If a reviewer raises an issue, we fix it and resubmit as part of the project, not as an extra.",
      },
      {
        question: "Do you build real-money or fantasy games?",
        answer:
          "No. We build social, casual and e-sports titles only. India's Online Gaming Act, 2025 bans real-money games and their advertising from 1 May 2026, so we don't build games with cash stakes, betting or cash prizes. We can help you design rewards, cosmetics and progression that keep players engaged without real-money play.",
      },
      {
        question: "Can you add multiplayer or leaderboards later?",
        answer:
          "Yes. If multiplayer is on your roadmap, we design the back end and game state so it can be added without a rewrite. Leaderboards, friends lists and live events are usually quick to add after launch. Real-time multiplayer takes more work, so we scope it as its own phase once your single-player retention looks healthy.",
      },
      {
        question: "Who owns the game assets, art and source code?",
        answer:
          "You do. On payment, the intellectual property in everything we create for you – code, art, animations, audio and design documents – is assigned to your company. Source code lives in your repository and asset files are handed over in their editable formats. Licensed third-party assets stay under their original licences, which we list for you.",
      },
      {
        question: "What happens after launch – updates, live ops, store changes?",
        answer:
          "Every build includes {freeFix} for bugs in what we delivered. After that, an optional Live-ops Retainer covers OS and store-rule updates, events, A/B tests and new content, with a monthly metrics report. Or we hand over to your team with a live-ops playbook that explains what to update, test and monetise.",
      },
    ],
    related: ["ui-ux-design", "animation", "web-platforms"],
    ctaHeadline: "Let's build the app your users keep.",
  },
  {
    slug: "web3",
    icon: Blocks,
    name: "Web3 Products",
    seoTitle: "Web3 & Smart Contract Development | ZARX",
    seoDescription:
      "Smart contracts, dApps and wallets built security-first – tested, audit-ready and designed for real users, not just crypto natives. Book a call.",
    card: {
      headline: "On-chain products built to pass an audit",
      line: "Smart contracts, dApps and wallets, built security-first.",
      chips: ["Smart contracts", "dApps", "Wallets"],
    },
    headline: "On-chain products built to pass an audit",
    subhead:
      "We design and build smart contracts, dApps and wallets with tested code, safe key management and onboarding that feels like a normal app – so your users never need to understand gas fees.",
    proof: [
      "Test suites on every contract",
      "Audit-ready code and documentation",
      "Multisig and role-based admin keys by default",
    ],
    pains: [
      "“We're nervous one bug could drain the treasury.”",
      "“Users drop off the moment we ask them to install a wallet.”",
      "“We're not sure what India's rules mean for our product.”",
    ],
    outcomes: [
      "Contracts with full test coverage on critical paths, ready for an external audit.",
      "Wallet-less or embedded-wallet onboarding that converts mainstream users.",
      "A clear map of the compliance questions to settle with your lawyer before launch.",
    ],
    capabilities: [
      { title: "Smart contracts", text: "Tokens, NFTs, staking, vesting and escrow.", chips: ["Solidity", "OpenZeppelin"] },
      { title: "dApps & dashboards", text: "Web front ends connected to on-chain data.", chips: ["Next.js", "wagmi / viem"] },
      { title: "Wallets & onboarding", text: "Embedded wallets, account abstraction and gasless transactions.", chips: ["Account abstraction"] },
      { title: "Tokenised loyalty, tickets & game items", text: "Utility users understand without a crypto glossary.", chips: ["ERC-721", "ERC-1155"] },
      { title: "Indexing & integrations", text: "Subgraphs, oracles, payment rails and off-chain APIs.", chips: ["The Graph", "Chainlink"] },
      { title: "Security & audit prep", text: "Threat modelling, test suites, audit coordination and fixes.", chips: ["Foundry", "Static analysis"] },
    ],
    deliverables: [
      "Architecture and threat model",
      "Smart contracts with tests",
      "Deployment scripts for testnet and mainnet",
      "Admin multisig set-up",
      "dApp front end",
      "Indexer or API",
      "Audit-ready documentation",
      "Post-audit fixes",
      "Runbook for upgrades and incidents",
    ],
    timeline: {
      title: "Typical build",
      steps: [
        { when: "Weeks 1–2", what: "Utility design and threat model" },
        { when: "Weeks 3–8", what: "Contracts and app in sprints, weekly testnet demo" },
        { when: "Weeks 9–11", what: "Independent audit by a firm you choose, then fixes" },
        { when: "Week 12", what: "Mainnet launch and monitoring" },
      ],
    },
    tech: [
      { group: "Chains", items: ["Ethereum", "Polygon", "Base", "Arbitrum"] },
      { group: "Contracts", items: ["Solidity", "OpenZeppelin", "Foundry", "Hardhat"] },
      { group: "Front end", items: ["Next.js", "wagmi", "viem"] },
      { group: "Data", items: ["The Graph", "Chainlink oracles"] },
    ],
    engagements: ["web3-feasibility", "build-to-audit", "contract-review"],
    fit: [
      "Have a use case that needs ownership, transparency or programmable payments",
      "Will fund an independent security audit",
      "Want mainstream users, not only crypto natives",
    ],
    notFit: [
      "Want a token launch with no product",
      "Want guaranteed-return schemes",
      "Want to skip the audit",
      "Prefer to stay anonymous as founders",
    ],
    quality: [
      "Threat model before any code",
      "Tests on every state-changing function",
      "Static analysis on every pull request",
      "No single-key admin rights in production",
      "Independent audit before mainnet",
      "Incident runbook and on-chain monitoring",
    ],
    note: {
      title: "Compliance note",
      text: "If your product exchanges, transfers or holds digital assets for users in India, it may need FIU-IND registration under the PMLA. We flag these questions during discovery and work alongside your legal counsel. This is not legal advice.",
    },
    faqs: [
      {
        question: "How much does smart contract development cost?",
        answer:
          "It depends on how many contracts you need, how complex the logic is and which chains you deploy to. We usually start with a 1–2 week Web3 Feasibility Sprint covering utility design, chain choice and a threat model, which ends with a fixed quote. Budget separately for an independent audit, which is paid directly to the audit firm you choose.",
      },
      {
        question: "Do you do the security audit yourselves?",
        answer:
          "No, and you shouldn't want us to. We prepare your contracts for audit with tests, static analysis, a threat model and clear documentation, then fix every finding. The audit itself should come from an independent firm you choose, so the people checking the code are not the people who wrote it.",
      },
      {
        question: "Which blockchain should we build on?",
        answer:
          "It depends on your users, fees and the ecosystem you need. We mostly build on Ethereum and EVM networks such as Polygon, Base and Arbitrum, where tooling and audit expertise are mature. During discovery we compare transaction costs, wallet support and liquidity for your use case, then recommend a chain with the reasons written down.",
      },
      {
        question: "Can users sign up without a crypto wallet?",
        answer:
          "Yes. With embedded wallets and account abstraction, users can sign up with an email or social login and get a wallet created for them in the background. We can sponsor gas fees so they never need to buy crypto to start. Experienced users can still connect their own wallet if they prefer.",
      },
      {
        question: "What are the rules for Web3 businesses in India?",
        answer:
          "If your product exchanges, transfers or holds digital assets on behalf of users in India, it may need to register with FIU-IND under the Prevention of Money Laundering Act. Tax and other rules may also apply. We flag these questions early in discovery and work alongside your legal counsel; we don't give legal advice ourselves.",
      },
      {
        question: "Can contracts be upgraded after launch?",
        answer:
          "They can be, if upgradeability is designed in from the start using proxy patterns, with upgrades controlled by a multisig and a time delay so users can see changes coming. Some products are better immutable for trust reasons. We discuss the trade-off with you, document the choice, and include an upgrade runbook at handover.",
      },
    ],
    related: ["web-platforms", "ui-ux-design", "mobile-gaming"],
    ctaHeadline: "Build on-chain without the sleepless nights.",
  },
  {
    slug: "ai-automation",
    icon: BrainCircuit,
    name: "AI Builders & Automation",
    seoTitle: "AI Agent & Automation Development | ZARX",
    seoDescription:
      "AI agents, RAG assistants and workflow automation, piloted in 3–4 weeks and measured against your baseline before you scale. Book a free call.",
    card: {
      headline: "AI that does real work, measured",
      line: "Agents, knowledge assistants and automations, piloted on one workflow first.",
      chips: ["Agents", "RAG", "Automation"],
    },
    headline: "AI that does real work, and proves it",
    subhead:
      "We build AI agents, knowledge assistants and automations around one costly workflow at a time, measure the result against today's baseline, and only then help you scale.",
    proof: [
      "Pilot live in 3–4 weeks",
      "Accuracy measured on your own data",
      "Your data is never used to train public models",
    ],
    pains: [
      "“We ran an AI demo that wowed everyone, then nothing reached production.”",
      "“Our team spends hours copying data between tools.”",
      "“We don't trust a chatbot to answer customers without making things up.”",
    ],
    outcomes: [
      "One workflow automated, with a before-and-after metric – hours saved, response time or error rate – agreed on day one.",
      "Answers grounded in your documents, with sources shown and an evaluation score.",
      "Predictable running costs per task, with alerts before they spike.",
    ],
    capabilities: [
      { title: "AI agents", text: "Multi-step assistants that use your tools and APIs, with approvals.", chips: ["Tool use", "MCP"] },
      { title: "Knowledge assistants (RAG)", text: "Answers from your docs, tickets and wikis, with citations.", chips: ["pgvector", "LlamaIndex"] },
      { title: "Workflow automation", text: "Email, CRM, invoices, WhatsApp, spreadsheets and back office.", chips: ["n8n", "APIs"] },
      { title: "AI features in your product", text: "Search, summaries, recommendations and copilots.", chips: ["LLM APIs"] },
      { title: "Evaluation, guardrails & LLMOps", text: "Test sets, monitoring, and cost and safety controls.", chips: ["Evals", "Tracing"] },
    ],
    deliverables: [
      "Workflow map and baseline metric",
      "Working pilot inside your tools",
      "Evaluation test set and score report",
      "Guardrails: permissions, human approval steps and content filters",
      "Cost dashboard",
      "Integration code in your repository",
      "Admin guide",
      "Scale-up plan",
    ],
    timeline: {
      title: "AI Pilot",
      steps: [
        { when: "Week 1", what: "Pick one workflow, measure the baseline, collect sample data" },
        { when: "Week 2", what: "Build the first version" },
        { when: "Week 3", what: "Evaluate on real cases, add guardrails" },
        { when: "Week 4", what: "Live with a small team, report results, decide: scale, change or stop" },
      ],
    },
    tech: [
      { group: "Models", items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Open models (Llama, Mistral)"] },
      { group: "Frameworks", items: ["LangChain / LangGraph", "LlamaIndex", "Model Context Protocol (MCP)"] },
      { group: "Data", items: ["PostgreSQL + pgvector"] },
      { group: "Automation", items: ["n8n"] },
      { group: "Ops", items: ["Evaluation harness", "Tracing", "Cost monitoring"] },
    ],
    engagements: ["ai-workshop", "ai-pilot", "scale-operate"],
    fit: [
      "Have a repetitive workflow with clear inputs and outputs",
      "Can share sample data",
      "Want a number to judge success by",
    ],
    notFit: [
      "Want “AI everywhere” with no target workflow",
      "Want fully autonomous agents with no human checks on money or customer data",
      "Want a demo for investors only",
    ],
    quality: [
      "Evaluation before launch, re-run on every change",
      "Human approval on payments, deletions and customer-facing actions",
      "Personal data minimised and masked; DPDP consent respected",
      "Prompt-injection and data-leak testing",
      "Model providers with no-training-on-your-data terms",
      "Cost caps per user and per day",
    ],
    note: {
      title: "Why we start with a measured pilot",
      text: "Gartner expects 40% of enterprise apps to include task-specific AI agents by 2026, but also predicts that over 40% of agentic AI projects will be cancelled by the end of 2027 because of cost, unclear value or weak risk controls. A baseline and an evaluation score are how you avoid becoming one of them.",
      source: "Gartner, via Process Excellence Network and W.Media",
    },
    faqs: [
      {
        question: "How much does an AI pilot cost, and what does it cost to run each month?",
        answer:
          "The pilot is a fixed-price, 3–4 week engagement scoped to one workflow. Running costs depend on how often the AI is used and which model each task needs, so we estimate them per task during the pilot and show them on a cost dashboard. Before you scale, you see the real monthly cost next to the hours or errors it saves.",
      },
      {
        question: "Will our data be used to train AI models?",
        answer:
          "No. We only use model providers whose business terms say your data is not used to train their models, and we configure accounts accordingly. Where data must stay in your own environment, we can use open models hosted in your cloud. We also minimise and mask personal data before it reaches any model.",
      },
      {
        question: "How do you stop the AI from making things up?",
        answer:
          "We ground answers in your own documents and show the sources, so people can check them. Before launch we build an evaluation set from real cases and score accuracy, and we re-run it after every change. For anything high-stakes – payments, deletions or replies to customers – a person approves the action first.",
      },
      {
        question: "Which AI model will you use?",
        answer:
          "The one that fits each task on cost, quality and data rules. We work with OpenAI, Anthropic Claude, Google Gemini and open models such as Llama and Mistral. A pilot often mixes them: a small, cheap model for routine steps and a stronger one for hard cases. Because the evaluation set is yours, switching models later is a measured decision.",
      },
      {
        question: "Can the AI work inside the tools we already use?",
        answer:
          "Usually, yes. We connect to CRMs, help desks, email, WhatsApp Business, spreadsheets, databases and internal APIs, so people keep working where they already are. We use each tool's official API or the Model Context Protocol, with the minimum permissions the workflow needs, and log every action the AI takes.",
      },
      {
        question: "What happens if the pilot doesn't hit the target?",
        answer:
          "Then you've learned that cheaply, in four weeks. The final report shows the measured result against the baseline and explains why it fell short, whether that is data quality, process or model limits. You decide to change the approach, try a different workflow, or stop. You keep the code, the evaluation set and the findings either way.",
      },
      {
        question: "Is it safe to use AI with customer data under India's DPDP Act?",
        answer:
          "It can be, with the right design. We collect only the personal data a workflow needs, mask it where possible, respect the consent your users gave, and use providers that don't train on your data. Access is logged and limited by role. We document data flows so your legal team can confirm compliance; we don't give legal advice ourselves.",
      },
    ],
    related: ["web-platforms", "ui-ux-design", "mobile-gaming"],
    ctaHeadline: "Pick one workflow. We'll show you the hours AI can give back.",
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    name: "UI/UX Design",
    seoTitle: "UI/UX Design for Apps, SaaS & Games | ZARX",
    seoDescription:
      "Research, prototypes and design systems tested with real users before a line of code – interfaces people understand on first use. Book a call.",
    card: {
      headline: "Interfaces users understand on first use",
      line: "Research, prototypes and design systems, tested with real users.",
      chips: ["Research", "Design systems", "Prototypes"],
    },
    headline: "Interfaces users understand on first use",
    subhead:
      "We research your users, prototype the key journeys and test them with real people, then deliver a design system your engineers can build from without guesswork.",
    proof: [
      "Clickable prototype before any code",
      "Tested with real users every round",
      "WCAG 2.2 AA accessible by default",
    ],
    pains: [
      "“Users sign up, get confused and leave.”",
      "“Every screen looks slightly different.”",
      "“Developers keep asking what the design is supposed to do.”",
    ],
    outcomes: [
      "Key journeys validated with target users before development starts.",
      "A design system that keeps every new screen consistent and faster to build.",
      "Fewer support tickets and higher completion on your core flow, tracked after launch.",
    ],
    capabilities: [
      { title: "User research", text: "Interviews, surveys, analytics and competitor review.", chips: ["Interviews", "Analytics"] },
      { title: "UX audits", text: "A heuristic review of an existing product, with a prioritised fix list.", chips: ["Heuristics"] },
      { title: "Information architecture & flows", text: "Journeys, sitemaps and onboarding.", chips: ["Journeys", "Onboarding"] },
      { title: "UI design", text: "Web, mobile and game interfaces – HUDs, menus and stores.", chips: ["Web", "Mobile", "Game UI"] },
      { title: "Prototyping & usability testing", text: "Clickable prototypes tested with real users.", chips: ["Figma", "Maze"] },
      { title: "Design systems", text: "Tokens, components and documentation for developers.", chips: ["Tokens", "Storybook"] },
    ],
    deliverables: [
      "Research summary and personas",
      "User flows",
      "Wireframes",
      "High-fidelity screens for mobile and desktop",
      "Clickable prototype",
      "Usability test report",
      "Design system in Figma: tokens, components and states",
      "Developer handoff with specs and assets",
    ],
    timeline: {
      title: "New product",
      steps: [
        { when: "Week 1", what: "Research and goals" },
        { when: "Week 2", what: "Flows and wireframes" },
        { when: "Week 3", what: "Prototype and first user tests" },
        { when: "Weeks 4–5", what: "Visual design and a second test round" },
        { when: "Week 6", what: "Design system and handoff" },
      ],
    },
    tech: [
      { group: "Design", items: ["Figma (incl. Dev Mode)", "FigJam"] },
      { group: "Testing", items: ["Maze"] },
      { group: "Behaviour data", items: ["Google Analytics", "Hotjar"] },
      { group: "Components", items: ["Storybook"] },
    ],
    engagements: ["ux-audit", "prototype-sprint", "full-product-design"],
    fit: [
      "Are about to build and want to de-risk it",
      "Have a product users find confusing",
      "Are scaling a team that needs one design language",
    ],
    notFit: ["Want a logo only", "Want designs with no user input at all", "Want a template reskin"],
    quality: [
      "WCAG 2.2 AA: contrast, focus and 24 px+ targets",
      "Every key flow tested with real users",
      "Designs annotated for all states: empty, loading and error",
      "Consistent tokens shared with code",
      "Research data stored with consent and deleted after the project",
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX, and do I need both?",
        answer:
          "UX is how the product works: the journeys, structure and decisions a user makes. UI is how it looks and feels: layout, type, colour and motion. A beautiful interface on a confusing journey still loses users, and a clear journey with a careless interface loses trust. For a new product you need both; for an existing one, an audit shows which matters more.",
      },
      {
        question: "How many users do you test with, and where do you find them?",
        answer:
          "Usually five to eight people per round, which is enough to find most serious usability problems. We recruit from your existing users where possible, otherwise from people who match your target profile through our network or a recruiting panel. Tests run remotely or in person, recorded with consent, and findings are shared after each round.",
      },
      {
        question: "Can you redesign our product without rebuilding it?",
        answer:
          "Often, yes. We start with a UX audit to find the changes with the biggest impact, then redesign in stages your developers can ship one at a time – usually the core flow first. A shared design system lets old and new screens sit together while you move over. We only suggest a rebuild if the current structure blocks the fixes.",
      },
      {
        question: "Do we get the Figma files and own the designs?",
        answer:
          "Yes. Design work happens in a Figma workspace your company owns, or is transferred to it at handover. On payment, the intellectual property in the designs, prototypes, research and design system is assigned to you. Fonts, icon sets and stock images stay under their own licences, which we list for you.",
      },
      {
        question: "Can you work with our in-house developers?",
        answer:
          "Yes. We hand off through Figma Dev Mode with specs, tokens and assets, join your stand-ups or reviews where useful, and answer questions as your team builds. If you use Storybook, we can deliver coded components that match the design system, so design and code don't drift apart over time.",
      },
      {
        question: "How long does a UX audit take?",
        answer:
          "A UX audit takes one to two weeks for most products. We review your key journeys against established usability heuristics, look at analytics to see where people drop off, and where possible watch a few real users try the product. You receive a prioritised list of fixes, ranked by impact and effort, that your team can start on straight away.",
      },
    ],
    related: ["web-platforms", "mobile-gaming", "animation"],
    ctaHeadline: "Let's make your product obvious to use.",
  },
  {
    slug: "animation",
    icon: Clapperboard,
    name: "Animation & Visual Systems",
    seoTitle: "Product Animation, Motion & 3D | ZARX",
    seoDescription:
      "Product explainers, app-store trailers, Lottie UI motion and 3D visuals that explain your product in seconds and load fast. Book a free call.",
    card: {
      headline: "Motion that explains and sells",
      line: "Product films, store trailers, interface motion and 3D visuals.",
      chips: ["Product films", "Lottie", "3D"],
    },
    headline: "Motion that explains and sells",
    subhead:
      "We make product films, store trailers, interface motion and 3D visuals that explain what you do in seconds – and deliver them as lightweight files that keep your site and app fast.",
    proof: [
      "Storyboard approved before animation starts",
      "Lightweight Lottie and Rive files for UI",
      "Every format for web, stores and social",
    ],
    pains: [
      "“People don't get what our product does from the homepage.”",
      "“Our app-store page doesn't turn visitors into installs.”",
      "“Our brand looks different on every channel.”",
    ],
    outcomes: [
      "A product story a first-time visitor understands in under 60 seconds.",
      "Store and ad creatives ready to A/B test, in every size you need.",
      "A motion and visual system your team can reuse without us.",
    ],
    capabilities: [
      { title: "Product explainers", text: "30–90 second 2D and 3D films with script and voice-over.", chips: ["After Effects"] },
      { title: "App-store & game trailers", text: "Screen captures, edits and in-engine footage.", chips: ["Unity", "Premiere Pro"] },
      { title: "UI & micro-interactions", text: "Lottie and Rive animations for apps and sites.", chips: ["Lottie", "Rive"] },
      { title: "3D product & character visuals", text: "Renders, turntables and game assets.", chips: ["Blender"] },
      { title: "Brand motion systems", text: "Logo animation, transitions and motion guidelines.", chips: ["Guidelines"] },
      { title: "Social & ad creative", text: "Short loops and cut-downs for every platform.", chips: ["9:16", "1:1"] },
    ],
    deliverables: [
      "Creative brief",
      "Script and storyboard",
      "Style frames",
      "Final animation in 16:9, 9:16 and 1:1",
      "Lottie and Rive files for developers",
      "Captions",
      "Source project files",
      "Motion guidelines PDF",
    ],
    timeline: {
      title: "60-second explainer",
      steps: [
        { when: "Week 1", what: "Brief and script" },
        { when: "Week 2", what: "Storyboard and style frames" },
        { when: "Weeks 3–4", what: "Animation and sound" },
        { when: "Week 5", what: "Revisions and delivery in all formats" },
      ],
    },
    tech: [
      { group: "Motion", items: ["After Effects", "Lottie (Bodymovin)", "Rive"] },
      { group: "3D", items: ["Blender"] },
      { group: "In-engine footage", items: ["Unity", "Unreal"] },
      { group: "Edit", items: ["Premiere Pro", "DaVinci Resolve"] },
    ],
    engagements: ["ui-motion-pack", "product-explainer", "brand-motion-system"],
    fit: [
      "Launch on app stores or run paid ads",
      "Have a product that is hard to explain in words",
      "Want motion that matches your product UI",
    ],
    notFit: [
      "Want unlimited revisions with no approved storyboard",
      "Need feature-film VFX",
      "Need delivery within a few days",
    ],
    quality: [
      "Two revision rounds at each stage, agreed up front",
      "Captions on every video",
      "Reduced-motion fallbacks for UI animation",
      "Licensed music, fonts and stock only",
      "Source files handed over",
    ],
    faqs: [
      {
        question: "How much does a product explainer video cost?",
        answer:
          "It depends on length, style and whether it is 2D, 3D or a mix. A typical 60-second explainer takes four to five weeks from brief to delivery. After a short call we send a fixed quote that covers the script, storyboard, animation, sound and every format you need, with revision rounds agreed up front.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Two revision rounds at each stage: script, storyboard, style frames and animation. Because you approve each stage before the next begins, feedback lands early, when changes are quick and cheap. Changes that go back on an approved stage are quoted separately, so there are no surprises on either side.",
      },
      {
        question: "Do we own the final files and the source projects?",
        answer:
          "Yes. On payment, the intellectual property in the animation, artwork and source project files is assigned to your company, and we hand over the editable files. Licensed music, fonts and stock footage stay under their own licences, which we buy in your name or list for you so you can keep using them correctly.",
      },
      {
        question: "Will animations slow down our website or app?",
        answer:
          "Not if they're built for the web. Interface animations are delivered as Lottie or Rive files, which are usually far smaller than video. Videos are compressed, lazy-loaded and given a poster image, so they don't delay the page. Every UI animation also respects the user's reduced-motion setting.",
      },
      {
        question: "Can you match our existing brand and UI?",
        answer:
          "Yes. We start from your brand guidelines and product UI, then build style frames for you to approve before any animation begins. If your brand doesn't have motion rules yet, we can create them as part of the project, so future videos and interface animation stay consistent without us.",
      },
      {
        question: "Can you make trailers from our game's actual gameplay?",
        answer:
          "Yes. We capture footage directly from your Unity or Unreal build, edit it into store and ad cuts, and add titles and motion graphics. Using real gameplay keeps trailers within App Store and Google Play rules, which require previews to show the actual product. We deliver every aspect ratio the stores and ad platforms ask for.",
      },
    ],
    related: ["ui-ux-design", "mobile-gaming", "web-platforms"],
    ctaHeadline: "Let's show the world what you've built.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
