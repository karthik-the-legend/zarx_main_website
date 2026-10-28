import { Suspense } from "react";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { cases } from "@/content/work";
import { getService } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { WorkGrid, WorkGridFromUrl, type WorkCard } from "@/components/WorkGrid";
import CTABanner from "@/components/CTABanner";

// While there is no approved work to show, the page exists but stays out of search.
export const metadata = pageMetadata({
  title: "Our Work: Apps, Games, AI & Web3 Case Studies | ZARX",
  description: "Real problems, what we built, and what changed for our clients – case studies from ZARX Technologies.",
  path: "/work",
  image: "/og/work.png",
  noindex: cases.length === 0,
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Work" }];

const cards: WorkCard[] = [...cases]
  .sort((a, b) => Number(Boolean(b.flagship)) - Number(Boolean(a.flagship)))
  .map((c) => ({
    slug: c.slug,
    title: c.title,
    kind: c.kind,
    client: c.client,
    industry: c.industry,
    services: c.services.map((slug) => ({ slug, name: getService(slug)?.name ?? slug })),
    problem: c.problem,
    result: c.result,
    image: c.gallery[0] && { src: c.gallery[0].src, alt: c.gallery[0].alt },
    flagship: c.flagship,
  }));

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Our work"
        title="Products we've taken from idea to live"
        lead="Real problems, what we built, and what changed for our clients."
      />

      <Section labelledBy="work-title">
        <h2 id="work-title" className="sr-only">Case studies</h2>
        {cards.length ? (
          <Suspense fallback={<WorkGrid cards={cards} />}>
            <WorkGridFromUrl cards={cards} />
          </Suspense>
        ) : (
          <div data-reveal className="max-w-2xl rounded-lg border border-line bg-subtle p-8">
            <p className="text-lead">
              We&apos;re preparing our first case studies with our clients&apos; written approval, so every
              name, screen and number you see here is real.
            </p>
            <p className="mt-4 text-muted">Until then, we&apos;re happy to walk you through relevant work on a call.</p>
            <ButtonLink href={cta.book.href} size="lg" className="mt-7" data-cta="work_empty_book">
              {cta.book.label}
              <ButtonArrow />
            </ButtonLink>
          </div>
        )}
      </Section>

      <CTABanner headline={cards.length ? "Want results like these?" : undefined} />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/work") }} />
    </>
  );
}
