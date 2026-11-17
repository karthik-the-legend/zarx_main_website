import type { LucideIcon } from "lucide-react";
import { Cpu, TrendingUp } from "lucide-react";

type Faq = { question: string; answer: string; draft?: boolean };

export type CategoryKey = "business" | "technology";

export type Category = {
  key: CategoryKey;
  slug: string;
  name: string;
  icon: LucideIcon;
  /** One word for the side of the business: "Grow" or "Build". */
  verb: string;
  /** Card copy on Home and in menus. */
  card: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  lead: string;
  intro: string[];
  faqs: Faq[];
  ctaHeadline: string;
  /** Copy waiting for ZARX sign-off; marked on staging builds. */
  draft?: boolean;
};

export const categories: Category[] = [
  {
    key: "business",
    slug: "business-consultancy",
    name: "Business Consultancy",
    icon: TrendingUp,
    verb: "Grow",
    card: "Digital and influencer marketing, fundraising and sponsorships, and brand partnerships that bring in customers, capital and the right allies.",
    seoTitle: "Business Consultancy: Marketing & Partnerships | ZARX",
    seoDescription:
      "Digital marketing, influencer campaigns, fundraising and sponsorship support, and brand partnerships for founders and growing brands. Book a free call.",
    headline: "Grow with the right customers, capital and partners",
    lead: "Digital and influencer marketing, fundraising and sponsorship support, and brand partnerships – planned around clear goals and reported in numbers you can check.",
    intro: [
      "Growth rarely comes from one channel. Some brands need more customers; others need investors, sponsors or a partner brand that opens a new audience. We plan the mix with you, run it, and report what's working.",
      "Every engagement starts with goals and measures agreed in writing, and every ad account, creator contract and partner conversation stays in your company's name.",
    ],
    faqs: [
      {
        question: "Do you guarantee sales, followers or funding?",
        answer:
          "No honest consultant can. We agree goals and measures with you up front, report against them every month, and tell you early when something isn't working – with a plan to change it. What we can promise is the work, the transparency and accounts that stay in your name.",
        draft: true,
      },
      {
        question: "Who owns the ad accounts, content and contacts?",
        answer:
          "You do. Ad, social and analytics accounts are opened in your company's name, creator and partner contracts are signed by you, and the content we produce for you is yours on payment. You can remove our access at any time.",
        draft: true,
      },
      {
        question: "How do you report results?",
        answer:
          "A short weekly update and a monthly report with the numbers behind it – spend, reach, leads, sales or meetings, depending on the goals we agreed – plus what we plan to change next month and why.",
        draft: true,
      },
      {
        question: "Can we start with just one service?",
        answer:
          "Yes. Most clients start with one – usually a Growth Audit or a focused campaign – and add others when the numbers justify it. Each service has a small first step with a fixed scope.",
        draft: true,
      },
    ],
    ctaHeadline: "Ready to grow?",
    draft: true,
  },
  {
    key: "technology",
    slug: "technology-consultancy",
    name: "Technology Consultancy",
    icon: Cpu,
    verb: "Build",
    card: "Web platforms, mobile apps and games, Web3, AI automation, UI/UX and animation – built by senior engineers, with AI doing the repetitive work.",
    seoTitle: "Technology Consultancy: Web, Mobile, AI & Web3 | ZARX",
    seoDescription:
      "Web platforms, mobile apps and games, Web3, AI automation, UI/UX design and animation. Senior engineers, AI-assisted delivery, 100% IP ownership.",
    headline: "From idea to reality. Built to scale.",
    lead: "We design, build and launch web, mobile, game, Web3 and AI products for founders and growing businesses. Senior engineers lead every build; AI handles the repetitive work, so you reach a working product sooner. You own every line of code.",
    intro: [
      "Most products need more than one skill. Pick one discipline or combine them – every build has one senior lead, one weekly demo and one fixed quote for the agreed scope.",
      "Code lives in your repository from day one, accounts are opened in your name, and the intellectual property is assigned to you on payment.",
    ],
    faqs: [],
    ctaHeadline: "Have an idea worth building?",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const categoryByKey = Object.fromEntries(categories.map((c) => [c.key, c])) as Record<CategoryKey, Category>;
