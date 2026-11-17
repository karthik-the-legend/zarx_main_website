import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { categories, getCategory } from "@/content/categories";
import { serviceHref, servicesIn } from "@/content/services";
import { solutionsFaqs } from "@/content/company";
import { businessEngagements, homeEngagements } from "@/content/engagements";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { BuiltWith } from "@/components/ui/TrustStrip";
import { DraftTag } from "@/components/ui/Draft";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { ServiceCards } from "@/components/ServiceCards";
import { EngagementCards } from "@/components/EngagementCards";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category);
  if (!category) return {};
  return pageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/services/${category.slug}`,
    image: `/og/${category.slug}.png`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).category);
  if (!category) notFound();

  const business = category.key === "business";
  const draft = category.draft ?? false;
  const path = `/services/${category.slug}`;
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/solutions" },
    { label: category.name },
  ];
  const list = servicesIn(category.key);
  const faqs = business ? category.faqs : solutionsFaqs.slice(0, 4);

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={category.name} title={category.headline} lead={category.lead} draft={draft}>
        <ButtonLink href={cta.book.href} size="lg" data-cta={`category_book_${category.key}`}>
          {cta.book.label}
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href={cta.estimate.href} size="lg" variant="secondary" data-cta={`category_estimate_${category.key}`}>
          {cta.estimate.label}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="intro-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">
              {category.verb}
              {draft && <DraftTag />}
            </p>
            <h2 id="intro-title" className="text-h2">
              {business ? "Customers, capital and partners – planned together" : "One senior team for design, engineering and AI"}
            </h2>
          </header>
          <div data-reveal className="space-y-5 text-lead text-muted lg:col-span-7">
            {category.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="list-title">
        <SectionHeading
          id="list-title"
          eyebrow="Services"
          title={business ? "Four ways we help you grow" : "Six ways we take you from idea to launch"}
          description={
            business
              ? "Use one or combine them. Every engagement has one senior lead and goals agreed in writing."
              : "Pick one discipline or combine them. Every build has one senior lead and one weekly demo."
          }
          draft={draft}
        />
        <ServiceCards category={category.key} />
        {!business && <BuiltWith className="mt-8" />}
      </Section>

      <Section tone="dark" labelledBy="how-title">
        <SectionHeading
          id="how-title"
          tone="dark"
          eyebrow="How we work"
          title={business ? "From audit to growth, in five steps" : "A clear path from first call to launch"}
          description={
            business
              ? "Goals first, then the plan, then the work – with numbers you can check every week."
              : "Five stages, a decision point at the end of each, and a live demo every week of the build."
          }
          draft={draft}
        />
        <ProcessStrip tone="dark" category={category.key} />
        {!business && (
          <div data-reveal className="mt-14">
            <ButtonLink href="/process" variant="inverse-secondary" size="lg">
              See the full process
              <ButtonArrow />
            </ButtonLink>
          </div>
        )}
      </Section>

      <Section tone="subtle" labelledBy="start-title">
        <SectionHeading
          id="start-title"
          eyebrow="Ways to start"
          title="Start small. Scale when it works."
          description="Every quote is fixed for its stated scope. No surprise invoices."
          draft={draft}
        />
        <EngagementCards ids={business ? businessEngagements : homeEngagements} />
      </Section>

      {faqs.length > 0 && <FaqSection items={faqs} />}
      <CTABanner headline={category.ctaHeadline} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "OfferCatalog",
              name: category.name,
              description: category.lead,
              url: absoluteUrl(path),
              provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.legalName },
              itemListElement: list.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(serviceHref(s)) },
              })),
            },
            breadcrumbLd(crumbs, path),
          ],
        }}
      />
    </>
  );
}
