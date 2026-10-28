// Single source of truth for business details used in the UI, metadata and
// structured data. Set NEXT_PUBLIC_SITE_URL to the production domain.
export const site = {
  name: "ZARX Technologies",
  shortName: "ZARX",
  legalName: "ZARX Technologies Pvt. Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zarxtechnologies.com").replace(/\/$/, ""),
  title: "ZARX | AI-Accelerated Product Studio, New Delhi",
  /** One-line positioning from the brief. */
  positioning:
    "ZARX is a founder-led product studio that uses AI-assisted engineering to design, build and launch web, mobile, game, Web3 and AI products in weeks, and hands you 100% of the code and IP.",
  /** Short promise for headers and meta. */
  promise: "Senior product engineering, accelerated by AI.",
  tagline: "From idea to reality. Built to scale.",
  description:
    "Founder-led studio building web, mobile, game, Web3 and AI products in weeks. Senior engineers, AI-assisted delivery, 100% IP ownership. Book a free call.",
  email: "info@zarxtechnologies.com",
  location: { city: "New Delhi", country: "India", countryCode: "IN" },
  founders: ["Aniket Singh", "Karthik K S"],
} as const;

/** "/solutions" -> "/solutions/": pages are exported as folders (trailingSlash in next.config.js). */
export function withSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

/** Absolute URL for a page, e.g. for sitemaps and structured data. */
export function absoluteUrl(path: string) {
  return `${site.url}${withSlash(path)}`;
}
