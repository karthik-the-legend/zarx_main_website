import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/solutions", "/why-zarx", "/process", "/leadership", "/investors", "/contact"];
  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/solutions/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
