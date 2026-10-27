import type { LucideIcon } from "lucide-react";
import { Blocks, BrainCircuit, Clapperboard, Globe, Palette, Smartphone } from "lucide-react";

type Item = { title: string; text: string };
type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  /** Short label for navigation, footer and the contact form. */
  short: string;
  title: string;
  /** One-liner used on cards. */
  summary: string;
  headline: string;
  intro: string;
  outcomes: Item[];
  offerings: Item[];
  deliverables: string[];
  /** Typical tools; confirm against the team's current stack. */
  stack: string[];
  idealFor: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "web-platforms",
    icon: Globe,
    short: "Web Platforms",
    title: "Web platforms & high-performance websites",
    summary:
      "Conversion-focused, fast web platforms built with modern frameworks — from landing pages that convert to full-scale SaaS dashboards.",
    headline: "Websites and web platforms that load fast, rank well and convert.",
    intro:
      "Your website is often the first conversation a customer has with your business. We design and engineer marketing sites, SaaS products and internal platforms on modern frameworks — fast on every device, easy for your team to update and built to grow with you.",
    outcomes: [
      {
        title: "Built for speed",
        text: "Performance is designed in from the first sprint, with Google's Core Web Vitals “good” thresholds — LCP within 2.5 s, INP within 200 ms, CLS under 0.1 — as the baseline.",
      },
      {
        title: "Found by the right people",
        text: "Semantic markup, structured data, clean URLs and metadata help search engines and AI answer engines understand exactly what you offer.",
      },
      {
        title: "Designed to convert",
        text: "A clear message hierarchy, one focused call to action per page and analytics that show what visitors actually do.",
      },
    ],
    offerings: [
      { title: "Marketing websites & landing pages", text: "Company sites, launch pages and campaign microsites with sharp messaging and fast load times." },
      { title: "SaaS products & dashboards", text: "Web apps with authentication, roles, billing and data-heavy dashboards that stay responsive." },
      { title: "Portals & internal tools", text: "Client portals, admin panels and operations tools that replace spreadsheets and manual work." },
      { title: "E-commerce & checkout", text: "Catalogues, carts and checkout flows connected to your payment and inventory systems." },
      { title: "Headless CMS websites", text: "Content your marketing team can edit without a developer, served through a fast, secure front end." },
      { title: "Performance & SEO rebuilds", text: "Audits and re-platforming for slow or dated sites, protecting rankings with careful redirects." },
    ],
    deliverables: [
      "UX flows, wireframes and high-fidelity designs",
      "Responsive front end built on a reusable component system",
      "Back end, APIs and database where the product needs them",
      "CMS set-up and a walkthrough for your team",
      "Technical SEO: metadata, sitemap, structured data and redirects",
      "Analytics and conversion tracking",
      "Automated deployment pipeline and production launch",
      "Source code and documentation handed over to you",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Headless CMS", "Vercel / AWS"],
    idealFor: [
      "Founders launching a product or company website",
      "Startups whose web app needs to scale",
      "Businesses replacing a slow or dated site",
    ],
    faqs: [
      {
        question: "How long does a website or web platform take?",
        answer:
          "It depends on scope — a focused marketing site is far quicker than a multi-role SaaS platform. After discovery you receive a written plan with milestones and dates before any build work starts.",
      },
      {
        question: "Will we be able to update the content ourselves?",
        answer:
          "Yes. Where content changes often we set up a CMS and walk your team through it, so routine updates don't need a developer.",
      },
      {
        question: "Can you redesign our site without losing search rankings?",
        answer:
          "We map your existing URLs, keep or redirect every one that matters and carry over metadata, so the move is as safe as possible for your rankings.",
      },
      {
        question: "Who owns the code?",
        answer: "You do. At handover you receive the repository, access credentials and documentation.",
      },
    ],
  },
  {
    slug: "mobile-gaming-apps",
    icon: Smartphone,
    short: "Mobile & Gaming Apps",
    title: "Mobile applications & gaming apps",
    summary:
      "Native and cross-platform apps with game-engine polish. Apps that users actually want to keep on their home screen.",
    headline: "Mobile apps and games people keep on their home screen.",
    intro:
      "We build native and cross-platform apps with the polish of a game studio — smooth interactions, considered onboarding and the engineering discipline app stores expect. For games, we take you from concept and playable prototype to a launch-ready build.",
    outcomes: [
      {
        title: "One codebase, both stores",
        text: "Cross-platform builds reach iOS and Android together. We go fully native when performance or device features demand it.",
      },
      {
        title: "Game-grade feel",
        text: "Micro-interactions, motion and responsive feedback borrowed from game design make everyday apps feel premium.",
      },
      {
        title: "Built for retention",
        text: "Onboarding, notifications and analytics designed around the moments that bring users back.",
      },
    ],
    offerings: [
      { title: "Cross-platform apps", text: "iOS and Android from a single codebase for faster delivery and simpler maintenance." },
      { title: "Native iOS & Android", text: "Platform-native builds for camera, sensors, AR or performance-critical experiences." },
      { title: "Casual & mobile games", text: "Gameplay prototypes, level design, game UI and launch-ready builds." },
      { title: "App back ends & APIs", text: "Authentication, real-time data, push notifications and admin dashboards." },
      { title: "Monetisation", text: "In-app purchases, subscriptions and ad integrations set up to platform guidelines." },
      { title: "Store launch & updates", text: "Store listings, release pipelines, crash monitoring and ongoing updates." },
    ],
    deliverables: [
      "Product or gameplay concept, user flows and wireframes",
      "Interactive prototype for early user feedback",
      "Production app for iOS and/or Android",
      "Back-end services, APIs and admin panel",
      "Analytics, crash reporting and push notifications",
      "App Store and Google Play submission support",
      "Source code, build pipeline and documentation",
    ],
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Unity", "Firebase", "Node.js", "PostgreSQL"],
    idealFor: [
      "Founders taking an app idea to its first release",
      "Businesses adding a mobile channel for customers",
      "Studios and creators building casual or mid-core games",
    ],
    faqs: [
      {
        question: "Cross-platform or native — which should we choose?",
        answer:
          "Cross-platform is the right default for most products: one codebase, faster releases, lower cost. We recommend native when you need deep device integration, complex graphics or maximum performance, and explain the trade-off for your case during discovery.",
      },
      {
        question: "Do you help publish to the App Store and Google Play?",
        answer:
          "Yes. We prepare the builds, store listings and compliance details, and support you through review and release.",
      },
      {
        question: "Do you build games as well as apps?",
        answer:
          "Yes. Game design is part of our DNA — from playable prototypes to polished game UI and launch builds.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We can stay on for updates, new features, OS upgrades and performance work, or hand everything over to your team with documentation.",
      },
    ],
  },
  {
    slug: "web3",
    icon: Blocks,
    short: "Web3 Products",
    title: "Web3 products & decentralised experiences",
    summary:
      "Token-gated platforms, NFT ecosystems, DeFi dashboards and DAO tooling built with real product thinking — not just smart contracts.",
    headline: "Web3 products that feel as simple as the apps people already use.",
    intro:
      "Many Web3 products lose people at the wallet prompt. We design and build token-gated platforms, NFT ecosystems, DeFi dashboards and DAO tooling with real product thinking — clear onboarding, readable transactions and interfaces mainstream users can trust.",
    outcomes: [
      {
        title: "Onboarding without friction",
        text: "Wallet connection, embedded or social sign-in where appropriate, and plain-language transaction prompts.",
      },
      {
        title: "Security-first engineering",
        text: "Established contract patterns, thorough automated testing and support for independent third-party audits before mainnet.",
      },
      {
        title: "Product, not just protocol",
        text: "Dashboards, analytics and admin tools that make your on-chain product usable every day.",
      },
    ],
    offerings: [
      { title: "Token-gated platforms", text: "Communities, content and memberships unlocked by token or NFT ownership." },
      { title: "NFT ecosystems", text: "Minting experiences, marketplaces and collections with utility beyond the image." },
      { title: "DeFi dashboards", text: "Portfolio, staking and analytics interfaces that make complex positions readable." },
      { title: "DAO tooling", text: "Proposal, voting, treasury and governance dashboards for decentralised organisations." },
      { title: "Smart contract integration", text: "Contract development and integration with your front end, indexers and back-end services." },
      { title: "Wallet & onboarding UX", text: "Multi-wallet support, embedded wallets and onboarding flows for people new to Web3." },
    ],
    deliverables: [
      "Product and user-flow design for on-chain and off-chain parts",
      "Smart contracts with automated test suites",
      "Testnet deployment for review before mainnet",
      "Web app with wallet connection and transaction UX",
      "Indexing, APIs and admin dashboards",
      "Audit preparation and support for third-party review",
      "Documentation and handover of contracts and code",
    ],
    stack: ["Solidity", "EVM networks", "Viem / Ethers.js", "WalletConnect", "The Graph", "IPFS", "Next.js", "TypeScript"],
    idealFor: [
      "Communities and creators launching token-gated experiences",
      "Founders building DeFi, NFT or DAO products",
      "Brands exploring digital ownership and loyalty",
    ],
    faqs: [
      {
        question: "Which blockchains do you work with?",
        answer:
          "We focus on Ethereum and EVM-compatible networks, and recommend a chain during discovery based on your users, fees and ecosystem.",
      },
      {
        question: "Do you audit smart contracts?",
        answer:
          "We test contracts thoroughly and follow established security patterns. For anything that handles real value we strongly recommend an independent third-party audit before mainnet, and help you prepare for it.",
      },
      {
        question: "Our users aren't crypto-native. Will the product still work for them?",
        answer:
          "That's where we focus. We design onboarding, wallet options and transaction prompts so newcomers understand what they're signing and why.",
      },
      {
        question: "Can you add Web3 features to an existing app?",
        answer:
          "Yes. Token-gating, wallet sign-in and NFT features can usually be integrated into an existing web or mobile product.",
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: BrainCircuit,
    short: "AI Builders",
    title: "Custom AI builders & automation systems",
    summary:
      "AI-powered tools, LLM integrations, automated workflows and intelligent dashboards that give your business a compound advantage.",
    headline: "AI systems that do real work inside your business.",
    intro:
      "We go beyond chatbots. We design, build and integrate AI tools, LLM-powered assistants and automated workflows that connect to your data and systems — with the guardrails and measurement you need to trust them in production.",
    outcomes: [
      {
        title: "Grounded in your data",
        text: "Assistants answer from your documents, knowledge base and systems — with sources — instead of guessing.",
      },
      {
        title: "Automation that takes action",
        text: "Agents and workflows that update records, route tickets, draft replies and trigger processes, with human approval where it matters.",
      },
      {
        title: "Measured and governed",
        text: "Evaluation sets, guardrails, logging and cost controls keep quality and spend visible after launch.",
      },
    ],
    offerings: [
      { title: "LLM integrations", text: "Add search, summarisation, generation and classification to the product you already have." },
      { title: "Knowledge assistants (RAG)", text: "Internal or customer-facing assistants that answer from your documents, with citations." },
      { title: "AI agents", text: "Multi-step agents that use tools and APIs to complete tasks, with approvals for sensitive actions." },
      { title: "Workflow automation", text: "Automate support triage, lead follow-up, document processing and reporting across your tools." },
      { title: "Intelligent dashboards", text: "Dashboards that explain trends and surface what needs attention — not just charts." },
      { title: "Custom AI builders", text: "Internal tools that let your team create, test and manage AI workflows themselves." },
    ],
    deliverables: [
      "Opportunity mapping and prioritised use cases",
      "Prompt and system design by our in-house prompt engineers",
      "Data pipelines, retrieval and integrations with your tools",
      "Production application or embedded AI feature",
      "Evaluation suite and quality benchmarks",
      "Guardrails, access controls and audit logging",
      "Monitoring, cost tracking and a runbook for your team",
    ],
    stack: ["OpenAI", "Anthropic Claude", "Open-source LLMs", "Python", "TypeScript", "Vector databases", "MCP", "Workflow automation tools"],
    idealFor: [
      "Teams buried in repetitive, manual work",
      "Products that need AI features customers will pay for",
      "Businesses with knowledge locked in documents and inboxes",
    ],
    faqs: [
      {
        question: "Is our data safe when we use AI?",
        answer:
          "We design for it: least-privilege access, provider settings that keep your data out of model training, and private or self-hosted models when data must stay inside your environment.",
      },
      {
        question: "How do you make sure the AI gives correct answers?",
        answer:
          "Before launch we build an evaluation set from real examples, ground answers in your sources, and add guardrails and human review for high-stakes actions. Quality is measured, not assumed.",
      },
      {
        question: "What will it cost to run?",
        answer:
          "Running costs depend on usage and model choice. We estimate them during discovery, pick the most cost-effective model for each task and add cost monitoring so there are no surprises.",
      },
      {
        question: "Can AI connect to the tools we already use?",
        answer:
          "Usually, yes — CRMs, help desks, databases, spreadsheets and internal APIs are common integrations.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    short: "UI/UX Design",
    title: "UI/UX design — 2D and 3D interfaces",
    summary:
      "Interface design that goes beyond static mockups: spatial, immersive and interaction-first experiences that users remember.",
    headline: "Interfaces people understand at a glance — and remember.",
    intro:
      "Good design is how a product earns trust before it says a word. We shape product strategy, UX and visual design for web, mobile and spatial experiences — from wireframes and design systems to immersive 3D interfaces that set your product apart.",
    outcomes: [
      {
        title: "Clarity first",
        text: "Research-led flows and information architecture, so users find what they need without thinking.",
      },
      {
        title: "A system, not screens",
        text: "A reusable design system keeps every new page and feature consistent — and faster to build.",
      },
      {
        title: "Memorable by design",
        text: "3D, motion and interaction details give your product a feel people recognise.",
      },
    ],
    offerings: [
      { title: "UX research & strategy", text: "User interviews, competitor reviews and journey mapping to find what matters most." },
      { title: "Wireframes & user flows", text: "Structure and flows validated before visual design begins." },
      { title: "UI & visual design", text: "High-fidelity interfaces for web, mobile and dashboards, aligned with your brand." },
      { title: "Design systems", text: "Tokens, components and documentation shared by designers and developers." },
      { title: "Interactive prototypes", text: "Clickable prototypes for user testing, stakeholder reviews and investor demos." },
      { title: "3D & spatial interfaces", text: "WebGL scenes, 3D product viewers and immersive interfaces that run in the browser." },
    ],
    deliverables: [
      "Research summary and prioritised UX recommendations",
      "User flows, sitemap and wireframes",
      "High-fidelity designs for every key screen and state",
      "Design system with components and tokens",
      "Interactive prototype",
      "Accessibility review against WCAG 2.2 AA",
      "Developer-ready handoff files and specifications",
    ],
    stack: ["Figma", "FigJam", "Spline", "Blender", "Three.js / WebGL", "Rive", "Lottie"],
    idealFor: [
      "Founders who need investor-ready product design",
      "Products carrying growing UX debt",
      "Brands that want an interface people talk about",
    ],
    faqs: [
      {
        question: "Can you design without building?",
        answer:
          "Yes. We can deliver design only, with a developer-ready handoff — or carry it through to build so nothing is lost in translation.",
      },
      {
        question: "Do you work with our existing brand?",
        answer:
          "Yes. We extend your brand into product design, or help evolve it if it no longer fits where you're heading.",
      },
      {
        question: "Won't 3D slow our product down?",
        answer:
          "Not when it's done properly. We set a performance budget, load 3D progressively and provide fallbacks for less powerful devices.",
      },
      {
        question: "How do you make designs accessible?",
        answer:
          "We design to WCAG 2.2 AA: sufficient contrast, readable type, visible focus states and flows that work with keyboards and screen readers.",
      },
    ],
  },
  {
    slug: "animation-visual-systems",
    icon: Clapperboard,
    short: "Animation & Motion",
    title: "2D & 3D animation and visual systems",
    summary:
      "Motion graphics, animated product demos, 3D brand worlds and visual identity systems that make your brand feel alive.",
    headline: "Motion and visuals that make your brand feel alive.",
    intro:
      "A few seconds of motion can explain more than a page of copy. We create product animations, explainer videos, 3D brand worlds and visual identity systems that give your brand a consistent, cinematic presence across web, apps, social and pitch decks.",
    outcomes: [
      {
        title: "Explain faster",
        text: "Product demos and explainers that make complex ideas obvious in seconds.",
      },
      {
        title: "Consistent everywhere",
        text: "Visual systems and motion guidelines keep every touchpoint unmistakably yours.",
      },
      {
        title: "Ready for every channel",
        text: "Exports sized and optimised for websites, apps, social, ads and presentations.",
      },
    ],
    offerings: [
      { title: "Product demos & explainers", text: "Animated walkthroughs that show what your product does and why it matters." },
      { title: "3D product visualisation", text: "Photoreal renders and animations of products, devices and environments." },
      { title: "3D brand worlds", text: "Distinctive 3D scenes and characters that become part of your identity." },
      { title: "UI & micro-animations", text: "Lightweight Lottie and Rive animations for websites and apps." },
      { title: "Motion for social & ads", text: "Short-form motion content designed for feeds and campaigns." },
      { title: "Visual identity systems", text: "Logo animation, colour, type and illustration systems with usage guidelines." },
    ],
    deliverables: [
      "Creative concept, script and storyboard",
      "Style frames for approval before production",
      "Final 2D or 3D animation",
      "Exports for web, social and presentations",
      "Lightweight in-product animation files (Lottie / Rive)",
      "Brand and motion guidelines",
    ],
    stack: ["After Effects", "Blender", "Cinema 4D", "Spline", "Rive", "Lottie", "Premiere Pro"],
    idealFor: [
      "Startups launching a product or raising a round",
      "Brands refreshing how they show up online",
      "Games and media IP that need characters and worlds",
    ],
    faqs: [
      {
        question: "How long does an explainer video take?",
        answer:
          "It depends on length, style and complexity. You'll get a schedule with clear checkpoints — script, storyboard, style frames, animation — before we begin.",
      },
      {
        question: "Can the animations be used inside our website or app?",
        answer:
          "Yes. We produce lightweight Lottie or Rive files for interfaces, so motion stays crisp without slowing the page down.",
      },
      {
        question: "Do you create 3D models from scratch?",
        answer: "Yes — products, environments and characters, built from reference images, sketches or existing models.",
      },
      {
        question: "How are revisions handled?",
        answer:
          "Every stage has its own review, so feedback lands early when changes are cheap. The exact number of revision rounds is agreed in your proposal.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
