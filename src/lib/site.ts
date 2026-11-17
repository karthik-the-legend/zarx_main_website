// Single source of truth for business details used in the UI, metadata and
// structured data. Set NEXT_PUBLIC_SITE_URL to the production domain.
export const site = {
  name: "ZARX Technologies",
  shortName: "ZARX",
  legalName: "ZARX Technologies Pvt. Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zarxtechnologies.com").replace(/\/$/, ""),
  title: "ZARX | Business & Technology Consultancy, New Delhi",
  /** One-line positioning. */
  positioning:
    "ZARX is a founder-led consultancy in New Delhi that helps brands and founders grow – through digital and influencer marketing, fundraising, sponsorships and brand partnerships – and build the web, mobile, Web3 and AI products behind that growth.",
  /** Short promise for headers and meta. */
  promise: "Business growth and technology, under one roof.",
  tagline: "Grow the business. Build the product.",
  description:
    "Business and technology consultancy in New Delhi: digital and influencer marketing, fundraising and brand partnerships, plus web, mobile, Web3 and AI builds.",
  /** Public inbox for enquiries, privacy requests and everything except hiring. */
  email: "info@zarxtechnologies.com",
  careersEmail: "careers@zarxtechnologies.com",
  location: { city: "New Delhi", country: "India", countryCode: "IN" },
} as const;

/** "/solutions" -> "/solutions/": pages are exported as folders (trailingSlash in next.config.js). */
export function withSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

/** Absolute URL for a page, e.g. for sitemaps and structured data. */
export function absoluteUrl(path: string) {
  return `${site.url}${withSlash(path)}`;
}

/** Staging builds (npm run deploy:staging) show draft markers and stay out of search. */
export const isStaging = process.env.NEXT_PUBLIC_STAGING === "1";
