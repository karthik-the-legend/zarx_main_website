import { hasWork } from "@/content/work";

/** The three calls to action from the brief, worded the same everywhere. */
export const cta = {
  book: { label: "Book a free 30-minute call", short: "Book a free call", href: "/contact#book" },
  work: { label: "See our work", href: "/work" },
  estimate: { label: "Get a ballpark estimate in 24 hours", short: "Get an estimate", href: "/contact#estimate" },
};

/** "See our work" once real work is published; until then, the low-commitment estimate. */
export const secondaryCta = () => (hasWork() ? cta.work : cta.estimate);
