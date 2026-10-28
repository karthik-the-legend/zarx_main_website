import type { Metadata } from "next";
import { site, withSlash } from "@/lib/site";

/**
 * Per-page metadata. `title` is used exactly as written (the brief gives each
 * page's full SEO title, max 60 characters). `image` is a 1200x630 card in
 * /public/og/; pages without their own card use the site default.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og/default.png",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  path = withSlash(path);
  const card = { url: image, width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      images: [card],
    },
    twitter: { card: "summary_large_image", title, description, images: [card.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
