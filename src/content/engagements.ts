import { facts } from "@/content/facts";

export type Engagement = {
  id: string;
  name: string;
  duration: string;
  bestFor: string;
  includes: string[];
};

/** Fills commitment numbers from facts.ts, or falls back to wording without them. */
export function withFacts(text: string) {
  return text
    .replace(
      "{freeFix}",
      facts.freeFixDays ? `${facts.freeFixDays} days of free post-launch fixes` : "free post-launch fixes"
    )
    .replace("{FreeFix}", facts.freeFixDays ? `${facts.freeFixDays} days of free post-launch fixes` : "Free post-launch fixes");
}

/** Price line for a card: "from ₹…" once set in facts.ts, otherwise an honest fallback. */
export function priceLine(id: string) {
  const price = facts.prices[id];
  return price ? `from ${price}` : "Fixed quote after a free call";
}

const list: Engagement[] = [
  /* Studio-wide (Home) */
  {
    id: "discovery-sprint",
    name: "Discovery Sprint",
    duration: "1–2 weeks",
    bestFor: "Founders who want a clear scope and price before committing",
    includes: ["Scope and product brief", "Clickable prototype of the core flow", "Fixed quote for the build"],
  },
  {
    id: "mvp-build",
    name: "MVP Build",
    duration: "6–10 weeks",
    bestFor: "Taking a validated idea to a live product",
    includes: ["Design, build and launch", "A live demo every week", "{FreeFix}"],
  },
  {
    id: "ai-pilot",
    name: "AI Pilot",
    duration: "3–4 weeks",
    bestFor: "Proving one AI use case before you scale it",
    includes: ["One workflow automated", "Measured against today's baseline", "A clear call: scale, change or stop"],
  },
  {
    id: "dedicated-squad",
    name: "Dedicated Squad",
    duration: "Monthly",
    bestFor: "Funded teams that need senior capacity now",
    includes: ["Product manager, designer and engineers", "Weekly demos and a visible board", "Cancel with 30 days' notice"],
  },

  /* Web Platforms */
  {
    id: "web-mvp",
    name: "MVP Build",
    duration: "8–10 weeks",
    bestFor: "A custom web product, launched and ready to grow",
    includes: ["Design, build and launch", "Staging link from week 2", "{FreeFix}"],
  },
  {
    id: "rescue-audit",
    name: "Rescue Audit",
    duration: "1 week",
    bestFor: "Products another team built that now feel risky to change",
    includes: ["Code quality, security and performance review", "Written report", "Prioritised fix plan"],
  },

  /* Mobile & Gaming */
  {
    id: "playable-prototype",
    name: "Playable Prototype",
    duration: "3–4 weeks",
    bestFor: "Testing a game loop or app idea on real phones",
    includes: ["One core loop or flow", "Test builds on your phone", "Go / no-go recommendation"],
  },
  {
    id: "app-mvp",
    name: "App or Game MVP",
    duration: "10–16 weeks",
    bestFor: "A store-ready first release",
    includes: ["iOS and Android builds", "Store listings and submission", "{FreeFix}"],
  },
  {
    id: "live-ops-retainer",
    name: "Live-ops Retainer",
    duration: "Monthly",
    bestFor: "Apps and games that are live and need to grow",
    includes: ["Updates and store compliance", "A/B tests and events", "Monthly metrics report"],
  },

  /* Web3 */
  {
    id: "web3-feasibility",
    name: "Web3 Feasibility Sprint",
    duration: "1–2 weeks",
    bestFor: "Deciding whether on-chain is right for your product",
    includes: ["Utility design and chain choice", "Threat model", "Compliance questions for your counsel"],
  },
  {
    id: "build-to-audit",
    name: "Build to Audit",
    duration: "8–12 weeks",
    bestFor: "Contracts and app built ready for an independent audit",
    includes: ["Contracts with tests", "dApp and admin set-up", "Audit-ready documentation"],
  },
  {
    id: "contract-review",
    name: "Contract Review",
    duration: "1–2 weeks",
    bestFor: "Existing contracts before a formal audit",
    includes: ["Internal review of your contracts", "Findings by severity", "Fix recommendations"],
  },

  /* AI */
  {
    id: "ai-workshop",
    name: "AI Opportunity Workshop",
    duration: "2 days",
    bestFor: "Teams unsure where AI will pay off",
    includes: ["Workflow mapping with your team", "3–5 workflows ranked by value and feasibility", "A recommended first pilot"],
  },
  {
    id: "scale-operate",
    name: "Scale & Operate",
    duration: "Monthly",
    bestFor: "Pilots that proved their value",
    includes: ["Roll-out to more users and workflows", "Evaluation re-run on every change", "Cost and quality monitoring"],
  },

  /* UI/UX */
  {
    id: "ux-audit",
    name: "UX Audit",
    duration: "1–2 weeks",
    bestFor: "A live product users find confusing",
    includes: ["Heuristic review of key journeys", "Analytics review", "Prioritised fix list"],
  },
  {
    id: "prototype-sprint",
    name: "Prototype Sprint",
    duration: "2–3 weeks",
    bestFor: "Testing an idea before paying to build it",
    includes: ["Key journeys prototyped", "Tests with real users", "Findings and next steps"],
  },
  {
    id: "full-product-design",
    name: "Full Product Design",
    duration: "4–8 weeks",
    bestFor: "A new product, designed end to end",
    includes: ["Research, flows and screens", "Two rounds of user testing", "Design system and handoff"],
  },

  /* Animation */
  {
    id: "ui-motion-pack",
    name: "UI Motion Pack",
    duration: "1–2 weeks",
    bestFor: "Apps and sites that feel static",
    includes: ["Key interface animations", "Lottie or Rive files", "Reduced-motion fallbacks"],
  },
  {
    id: "product-explainer",
    name: "Product Explainer",
    duration: "4–5 weeks",
    bestFor: "A product that is hard to explain in words",
    includes: ["Script and storyboard", "60-second 2D/3D film", "Every format for web, stores and social"],
  },
  {
    id: "brand-motion-system",
    name: "Brand Motion System",
    duration: "3–6 weeks",
    bestFor: "Brands that look different on every channel",
    includes: ["Logo animation and transitions", "Motion guidelines", "Reusable templates"],
  },
];

export const engagements = Object.fromEntries(list.map((e) => [e.id, e])) as Record<string, Engagement>;

export const homeEngagements = ["discovery-sprint", "mvp-build", "ai-pilot", "dedicated-squad"];
