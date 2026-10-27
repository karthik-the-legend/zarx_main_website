import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Per-page metadata with its own canonical URL and social cards. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  // A page-level openGraph object replaces the inherited one, so the shared
  // card image from app/opengraph-image.png has to be listed again here.
  const image = { url: "/opengraph-image.png", width: 1200, height: 630, alt: site.title };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: site.name,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}
