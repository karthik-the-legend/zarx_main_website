import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/content/services";
import { cases } from "@/content/work";
import { articles } from "@/content/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority });
  return [
    page("/", 1),
    page("/solutions", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/why-zarx", 0.8),
    page("/process", 0.8),
    page("/leadership", 0.7),
    page("/partners", 0.6),
    page("/contact", 0.9),
    page("/careers", 0.5),
    page("/trust", 0.5),
    page("/privacy", 0.3),
    page("/terms", 0.3),
    page("/cookies", 0.3),
    // Work and Insights are listed once they have real content.
    ...(cases.length ? [page("/work", 0.8), ...cases.map((c) => page(`/work/${c.slug}`, 0.7))] : []),
    ...(articles.length ? [page("/insights", 0.7), ...articles.map((a) => ({ ...page(`/insights/${a.slug}`, 0.6), lastModified: a.date }))] : []),
  ];
}
