/**
 * Articles for /insights. Each answers one question a buyer types, in 1,200–2,000
 * words, with a short summary. Have a lawyer review legal topics (gaming law, Web3
 * compliance, DPDP) before publishing. While empty, Insights stays out of the nav;
 * the Home teaser appears once three articles are published.
 */
export type Article = {
  slug: string;
  title: string;
  category: "Product & MVP" | "AI" | "Mobile & Games" | "Web3" | "Design" | "Company news";
  author: string;
  /** ISO date, e.g. "2026-11-12". */
  date: string;
  readingMinutes: number;
  summary: [string, string, string];
  /** Sections with H2s phrased as questions. Paragraph strings are plain text. */
  sections: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
  relatedService: string;
  faqs?: { question: string; answer: string }[];
};

export const articles: Article[] = [];

export const hasInsights = () => articles.length > 0;
