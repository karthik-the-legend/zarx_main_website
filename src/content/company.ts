import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BrainCircuit,
  Building2,
  Eye,
  FileCheck2,
  Gamepad2,
  Globe,
  Handshake,
  KeyRound,
  Layers,
  Lightbulb,
  Network,
  Rocket,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import { site } from "@/lib/site";

type Faq = { question: string; answer: string };

/* ─── Why ZARX ─────────────────────────────────────────────── */

export const differentiators: {
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
  benefits: string[];
}[] = [
  {
    icon: BrainCircuit,
    title: "AI-assisted development pipelines",
    summary: "AI at every stage, from ideation to deployment — so you ship faster with fewer iterations.",
    detail:
      "AI is built into how we work, not bolted on. We use large language models, custom prompt engineering and AI toolchains across research, specification, design exploration, coding, testing and documentation — with experienced people reviewing every output.",
    benefits: ["Faster iterations from idea to working software", "More of your budget spent on product, less on repetitive work"],
  },
  {
    icon: Zap,
    title: "In-house prompt engineers",
    summary: "Specialists who turn founder vision into specifications both AI and developers can build from.",
    detail:
      "Our prompt engineers sit between your vision and the build. They turn conversations into precise, testable specifications that AI systems and human developers can both execute — removing ambiguity before it turns into rework.",
    benefits: ["Fewer misunderstandings and change requests", "Specifications you can reuse with any future team"],
  },
  {
    icon: Gamepad2,
    title: "Game-industry design quality",
    summary: "AAA game-studio thinking applied to startup products, at a fraction of the enterprise cost.",
    detail:
      "We bring game-studio craft — feedback loops, motion, 3D and spatial UX — to everyday products, so your app feels responsive and memorable instead of generic.",
    benefits: ["Interfaces people enjoy coming back to", "A product that stands out in demos and pitches"],
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-efficient, future-scalable",
    summary: "Built right the first time. No throwaway MVPs.",
    detail:
      "Clean architecture, reusable components and documented decisions mean your MVP becomes the foundation of your product — not something you rewrite after you raise.",
    benefits: ["Lower total cost over the life of the product", "Room to grow without starting over"],
  },
  {
    icon: Users,
    title: "Founder-first mindset",
    summary: "We build like co-founders, not vendors.",
    detail:
      "We question assumptions, protect your runway, prioritise ruthlessly and tell you what we would do if it were our own money. Your outcome is the measure of our work.",
    benefits: ["Honest advice on scope and priorities", "A partner invested in your success"],
  },
  {
    icon: Lightbulb,
    title: "IP & product thinking",
    summary: "Defensible intellectual property, not just features.",
    detail:
      "We help you build an advantage competitors can't easily copy: proprietary workflows, data advantages and architecture choices that become your product's moat.",
    benefits: ["A stronger story for investors", "Technology that compounds in value"],
  },
];

export const audiences: {
  icon: LucideIcon;
  title: string;
  description: string;
  note: string;
  needs: string[];
  services: string[];
}[] = [
  {
    icon: Lightbulb,
    title: "Early-stage founders",
    description:
      "You have the idea but need someone who can architect, design and build an MVP that investors take seriously — without burning your pre-seed budget.",
    note: "No tech team yet? We become your tech team.",
    needs: ["A clickable prototype to validate the idea", "An investor-ready MVP", "A technical partner before you hire a CTO"],
    services: ["ui-ux-design", "web-platforms", "mobile-gaming-apps"],
  },
  {
    icon: Rocket,
    title: "Scaling startups",
    description:
      "Your product has traction. Now you need enterprise-grade architecture, performance optimisation and a design system that scales with your user base.",
    note: "Post-seed? Let's 10× your product infrastructure.",
    needs: ["Re-architecture for growth and performance", "A design system that keeps the product consistent", "AI features that set you apart"],
    services: ["web-platforms", "ai-automation", "ui-ux-design"],
  },
  {
    icon: Building2,
    title: "Mid-size businesses",
    description:
      "You've outgrown your basic website or app. It's time for a professional-grade digital presence that matches your ambition and market position.",
    note: "Upgrade from basic to world-class.",
    needs: ["A modern website that generates leads", "Customer portals and internal tools", "AI automation for manual operations"],
    services: ["web-platforms", "ai-automation", "animation-visual-systems"],
  },
  {
    icon: Gamepad2,
    title: "Gaming & media IP builders",
    description:
      "Building a game, interactive experience or media product? We bring game-engine thinking, 3D interfaces and immersive UX to every pixel.",
    note: "Let's build something players remember.",
    needs: ["Game prototypes and launch builds", "3D worlds, characters and motion", "Web and Web3 experiences around your IP"],
    services: ["mobile-gaming-apps", "animation-visual-systems", "web3"],
  },
];

/* ─── Process ──────────────────────────────────────────────── */

export const processSteps: {
  title: string;
  summary: string;
  activities: string[];
  outputs: string[];
  yourRole: string;
}[] = [
  {
    title: "Idea & vision mapping",
    summary: "We deep-dive into your vision, market position and growth goals. No wireframes yet — just strategy.",
    activities: [
      "Working sessions on your vision, users and business model",
      "Market and competitor scan",
      "Success metrics and constraints",
      "Prioritising the first release",
    ],
    outputs: ["Product brief", "Prioritised feature list", "Initial roadmap and estimate"],
    yourRole: "Share your vision, context and any existing research, and join one or two working sessions.",
  },
  {
    title: "AI + human prompt engineering",
    summary: "Our prompt engineers translate your vision into executable specs using AI-assisted architecture planning.",
    activities: [
      "Turning the brief into detailed specifications",
      "AI-assisted architecture planning",
      "Technical risk review",
      "Choosing the right technology stack",
    ],
    outputs: ["Functional specification", "System architecture", "Milestone plan"],
    yourRole: "Review the specification and confirm priorities before design begins.",
  },
  {
    title: "Design & prototype",
    summary: "UI/UX design, 3D elements, motion systems and interactive prototypes — validated before a line of code.",
    activities: [
      "User flows and wireframes",
      "Visual design and design system",
      "3D and motion where they add value",
      "Prototype testing with real users",
    ],
    outputs: ["High-fidelity designs", "Interactive prototype", "Design system"],
    yourRole: "Give feedback at each review and, if possible, introduce us to a few target users.",
  },
  {
    title: "Build & deploy",
    summary: "Production-grade engineering with CI/CD, testing and cloud-native deployment. Launch-ready, not demo-ready.",
    activities: [
      "Development in short, reviewable cycles",
      "Automated testing and code review",
      "CI/CD and cloud deployment",
      "Security and performance checks",
    ],
    outputs: ["Production-ready product", "Deployment pipeline", "Technical documentation"],
    yourRole: "Join regular demos, try new features and approve each release.",
  },
  {
    title: "Scale & upgrade",
    summary: "Post-launch optimisation, feature expansion and performance scaling. We grow with you.",
    activities: [
      "Monitoring, analytics and performance tuning",
      "New features driven by real user data",
      "Infrastructure scaling",
      "AI and automation upgrades",
    ],
    outputs: ["Improvement roadmap", "Regular releases", "Performance reviews"],
    yourRole: "Share business priorities so we focus on what moves your numbers.",
  },
];

export const principles: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: UsersRound,
    title: "One accountable team",
    text: "Strategy, design, engineering and AI under one roof — no hand-offs between agencies and no finger-pointing.",
  },
  {
    icon: Eye,
    title: "Progress you can see",
    text: "Regular demos of working software instead of status reports, so you always know where things stand.",
  },
  {
    icon: FileCheck2,
    title: "Clear scope and milestones",
    text: "A written plan with milestones before build starts, and early warnings if anything needs to change.",
  },
  {
    icon: KeyRound,
    title: "You own what we build",
    text: "Source code, designs and documentation are handed over to you, so you're never locked in.",
  },
];

export const processFaqs: Faq[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Every project is different. After discovery you receive a written plan with milestones and dates, so you know when to expect each stage.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "Your goals, any existing material — brand, research, designs or code — and one person who can make decisions and give feedback quickly.",
  },
  {
    question: "What if our requirements change mid-project?",
    answer:
      "They often do. We review the change with you, explain its impact on scope, cost and timeline, and only proceed once you agree.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Scale & upgrade is part of our process — monitoring, improvements and new features — or a clean handover to your own team.",
  },
];

/* ─── General FAQ (contact page) ───────────────────────────── */

export const faqs: Faq[] = [
  {
    question: "What does ZARX Technologies build?",
    answer:
      "Web platforms and high-performance websites, mobile and gaming apps, Web3 products, custom AI builders and automation systems, 2D and 3D UI/UX design, and 2D and 3D animation and visual systems.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Early-stage founders, scaling startups, mid-size businesses and gaming and media IP builders — from pre-seed to post-Series A.",
  },
  {
    question: "I don't have a tech team. Can you still help?",
    answer:
      "Yes. If you have zero tech team, we become your tech team — architecting, designing and building an MVP that investors take seriously.",
  },
  {
    question: "Can you work alongside our existing team?",
    answer:
      "Yes. We can lead a build end to end, or work with your in-house designers and developers on a specific product or feature.",
  },
  {
    question: "Will you sign an NDA?",
    answer: "Yes. We're happy to sign a non-disclosure agreement before you share confidential details.",
  },
  {
    question: "What happens after I send an enquiry?",
    answer:
      "We review your project within 24 hours, a senior team member reaches out for discovery, and you receive a tailored roadmap and proposal.",
  },
  {
    question: "Where is ZARX based?",
    answer: `ZARX Technologies is headquartered in ${site.location.city}, ${site.location.country}, and works with founders worldwide.`,
  },
];

/* ─── Investors & partners ─────────────────────────────────── */

export const pillars: { icon: LucideIcon; title: string; summary: string; detail: string }[] = [
  {
    icon: Target,
    title: "IP-first technology company",
    summary: "Proprietary systems, reusable frameworks and IP that compound with every project.",
    detail:
      "ZARX doesn't build for others and move on. Every engagement strengthens a library of proprietary systems, frameworks and workflows that make the next product faster and better.",
  },
  {
    icon: Layers,
    title: "Scalable technology stack",
    summary: "Cloud-native architecture from the first thousand users to millions.",
    detail:
      "Products run on proven, cloud-native architecture designed to scale without re-engineering — reducing risk for clients and increasing the reuse value of what we build.",
  },
  {
    icon: Globe,
    title: "Global ambition, Indian roots",
    summary: "India's engineering talent, global product standards.",
    detail:
      "Headquartered in New Delhi with a vision to serve founders worldwide, ZARX combines deep engineering talent with the product and design standards of global markets.",
  },
  {
    icon: TrendingUp,
    title: "Compounding growth engine",
    summary: "AI-assisted pipelines that get faster and smarter with every project.",
    detail:
      "Each project improves our prompts, components and pipelines. Capability grows on a curve rather than in a straight line tied to headcount.",
  },
];

export const flywheel: { title: string; text: string }[] = [
  {
    title: "Client products",
    text: "We design and engineer products for founders and businesses across web, mobile, AI, Web3 and 3D.",
  },
  {
    title: "Reusable systems",
    text: "Each build refines our AI pipelines, components and frameworks — making every next project faster.",
  },
  {
    title: "Proprietary IP",
    text: "That compounding base powers ZARX's own products and gaming IP, building long-term enterprise value.",
  },
];

export const partnerships: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: TrendingUp, title: "Strategic investment", text: "Back an IP-first technology company built to compound." },
  { icon: Network, title: "Technology partnerships", text: "Integrate platforms, tools or infrastructure into what we build." },
  { icon: Handshake, title: "Co-development & IP", text: "Build products or gaming IP together, with shared upside." },
  { icon: Users, title: "Referral partners", text: "Introduce founders who need a product team you can vouch for." },
];

/* ─── Leadership ───────────────────────────────────────────── */

export const values: { title: string; text: string }[] = [
  { title: "Founder-first", text: "We judge our work by your outcome, not by hours billed." },
  { title: "Built right the first time", text: "Every shortcut today is a rewrite tomorrow. We'd rather get it right." },
  { title: "IP compounds", text: "What we learn on every project makes the next one faster and better." },
  { title: "Craft matters", text: "The details users feel — speed, motion, clarity — are the product." },
];
