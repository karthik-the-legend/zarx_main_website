/**
 * Case studies and ZARX products for /work. Add only work with written client
 * approval of names, screenshots and numbers (or an approved anonymised version).
 * While this list is empty, Work is hidden from navigation and calls to action.
 */
export type CaseStudy = {
  slug: string;
  /** Title states the outcome, e.g. "How Acme launched a booking app in 9 weeks". */
  title: string;
  kind: "Client project" | "ZARX product";
  /** "Client under NDA – Fintech" is fine for anonymised work. */
  client: string;
  industry: string;
  location?: string;
  services: string[];
  team?: string;
  duration?: string;
  platforms?: string[];
  problem: string;
  result: string;
  challenge: string;
  approach: { title: string; text: string }[];
  /** Image paths under /public/work/<slug>/ with captions. */
  gallery: { src: string; alt: string; caption: string }[];
  results: { value: string; label: string; how: string }[];
  quote?: { text: string; name: string; role: string; photo?: string; linkedin?: string };
  stack: string[];
  flagship?: boolean;
};

export const cases: CaseStudy[] = [];

export const hasWork = () => cases.length > 0;
