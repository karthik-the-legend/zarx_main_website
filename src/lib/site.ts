// Single source of truth for business details used in the UI, metadata and
// structured data. Set NEXT_PUBLIC_SITE_URL to the production domain.
export const site = {
  name: "ZARX Technologies",
  legalName: "ZARX Technologies Pvt. Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zarxtechnologies.com").replace(/\/$/, ""),
  title: "ZARX Technologies — From Idea to Reality",
  tagline: "Bridging Realms, Powering the Metaverse",
  description:
    "AI-powered development, game-grade visuals, and production-ready engineering for founders and future-focused businesses. We build digital experiences that scale.",
  email: "info@zarxtechnologies.com",
  location: { city: "New Delhi", country: "India", countryCode: "IN" },
  founder: "Aniket Singh",
} as const;

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Why ZARX", href: "/why-zarx" },
  { label: "Process", href: "/process" },
  { label: "Leadership", href: "/leadership" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
] as const;
