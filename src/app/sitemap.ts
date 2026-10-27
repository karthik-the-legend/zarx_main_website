import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/solutions", "/why-zarx", "/process", "/leadership", "/investors", "/contact"];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/solutions/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
