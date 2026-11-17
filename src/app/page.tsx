import Image from "next/image";
import Link from "next/link";
import { Check, UserCheck } from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { CategoryCards } from "@/components/CategoryCards";
import { ServiceCards } from "@/components/ServiceCards";
import { AudienceCards } from "@/components/AudienceCards";
import { EngagementCards } from "@/components/EngagementCards";
import { FaqSection } from "@/components/FaqSection";
import { MetricCards, type Metric } from "@/components/MetricCards";
import { ViewPanel, ViewSwitch, ViewTabs } from "@/components/ViewSwitch";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BuiltWith, TrustStrip } from "@/components/ui/TrustStrip";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { ArrowLink, ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { DraftBlock } from "@/components/ui/Draft";
import { JsonLd } from "@/components/ui/JsonLd";
import { aiAccelerates, homeFaqs, peopleDecide } from "@/content/company";
import { categories } from "@/content/categories";
import { businessEngagements, homeEngagements } from "@/content/engagements";
import { facts } from "@/content/facts";
import { serviceHref, servicesIn } from "@/content/services";
import { cases } from "@/content/work";
import { articles } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  image: "/og/home.png",
});

// Organization schema limited to facts stated on the site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/zarx-wordmark-dark.png`,
      email: site.email,
      ...(facts.phone ? { telephone: facts.phone.replace(/\s/g, "") } : {}),
      slogan: site.promise,
      description: site.positioning,
      address: {
        "@type": "PostalAddress",
        ...(facts.registeredOffice ? { streetAddress: facts.registeredOffice } : {}),
        addressLocality: site.location.city,
        addressCountry: site.location.countryCode,
      },
      sameAs: [facts.socials.linkedin, facts.socials.x, facts.socials.instagram, facts.socials.github].filter(Boolean),
      hasOfferCatalog: categories.map((c) => ({
        "@type": "OfferCatalog",
        name: c.name,
        url: absoluteUrl(`/services/${c.slug}`),
        itemListElement: servicesIn(c.key).map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(serviceHref(s)) },
        })),
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function Home() {
  const proofStats = [facts.stats.productsShipped, facts.stats.weeksToFirstBuild].filter(Boolean) as Metric[];
  const metrics: Metric[] = proofStats.length
    ? [
        ...proofStats,
        {
          value: "24 hours",
          label: "to review your brief",
          note: "A founder reads every enquiry and replies within one working day.",
        },
      ]
    : [];
  const flagship = cases.find((c) => c.flagship) ?? cases[0];
  const otherCases = cases.filter((c) => c !== flagship).slice(0, 2);

  return (
    <>
      <Hero />
      <TrustStrip showTech={false} />

      <Section id="practices" labelledBy="practices-title">
        <SectionHeading
          id="practices-title"
          eyebrow="What we do"
          title="Two practices, one team"
          description="Grow the business, build the product – or both. One senior lead keeps the plan together."
          draft
        />
        <CategoryCards />
      </Section>

      {metrics.length > 0 && (
        <Section labelledBy="numbers-title">
          <SectionHeading id="numbers-title" eyebrow="By the numbers" title="Proof, not promises" align="start" />
          <MetricCards items={metrics} />
        </Section>
      )}

      <Section id="who" tone="subtle" labelledBy="who-title">
        <SectionHeading
          id="who-title"
          eyebrow="Find your starting point"
          title="Built for teams that need to move"
          description="Pick the line that sounds like you. We'll show you where to start."
        />
        {categories.map((c) => (
          <div key={c.key} className="mt-12 first-of-type:mt-0">
            <h3 data-reveal className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              <c.icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.75} />
              {c.verb} · {c.name}
            </h3>
            {c.draft && <DraftBlock className="-mt-3" />}
            <AudienceCards category={c.key} />
          </div>
        ))}
      </Section>

      <Section id="business" labelledBy="business-title">
        <SectionHeading
          id="business-title"
          eyebrow="Business Consultancy"
          title="Four ways we help you grow"
          description="Use one or combine them. Every engagement has one senior lead and goals agreed in writing."
          draft
        />
        <ServiceCards category="business" />
        <div data-reveal className="mt-10">
          <ArrowLink href="/services/business-consultancy">Explore Business Consultancy</ArrowLink>
        </div>
      </Section>

      <Section id="services" tone="subtle" labelledBy="services-title">
        <SectionHeading
          id="services-title"
          eyebrow="Technology Consultancy"
          title="Six ways we take you from idea to launch"
          description="Pick one discipline or combine them. Every build has one senior lead and one weekly demo."
        />
        <ServiceCards category="technology" />
        <BuiltWith className="mt-8" />
        <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <ArrowLink href="/services/technology-consultancy">Explore Technology Consultancy</ArrowLink>
          <ArrowLink href="/solutions">Not sure which you need? Start with your goal</ArrowLink>
        </div>
      </Section>

      {flagship && (
        <Section labelledBy="work-title">
          <SectionHeading id="work-title" eyebrow="Selected work" title="Products we've taken from idea to live" />
          <article data-reveal className="grid gap-8 overflow-hidden rounded-lg border border-line bg-canvas lg:grid-cols-2">
            {flagship.gallery[0] && (
              <Image
                src={flagship.gallery[0].src}
                alt={flagship.gallery[0].alt}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            )}
            <div className="p-7 sm:p-9">
              <p className="text-sm text-muted">{flagship.client} · {flagship.industry}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{flagship.title}</h3>
              <p className="mt-3 text-muted">{flagship.problem}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {flagship.results.slice(0, 3).map((r) => (
                  <li key={r.label}>
                    <p className="text-2xl font-semibold tracking-tight">{r.value}</p>
                    <p className="text-sm text-muted">{r.label}</p>
                  </li>
                ))}
              </ul>
              <ArrowLink href={`/work/${flagship.slug}`} className="mt-7">Read the case study</ArrowLink>
            </div>
          </article>
          {otherCases.length > 0 && (
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {otherCases.map((c) => (
                <li key={c.slug} className="rounded-lg border border-line bg-canvas p-7">
                  <p className="text-sm text-muted">{c.client} · {c.industry}</p>
                  <h3 className="mt-2 text-h3">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted">{c.result}</p>
                  <ArrowLink href={`/work/${c.slug}`} className="mt-5">Read the case study</ArrowLink>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-10">
            <ButtonLink href="/work" variant="secondary" data-cta="home_all_work">See all work</ButtonLink>
          </div>
        </Section>
      )}

      <Section tone={flagship ? "subtle" : "default"} labelledBy="ai-title">
        <SectionHeading
          id="ai-title"
          eyebrow="Technology · AI, used honestly"
          title="Where AI speeds us up, and where people stay in charge"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-lg border border-line bg-subtle p-7 sm:p-8">
            <h3 className="text-h3">AI accelerates</h3>
            <ul className="mt-5 space-y-3">
              {aiAccelerates.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem]">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="rounded-lg border border-line p-7 sm:p-8" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <h3 className="text-h3">Senior people decide</h3>
            <ul className="mt-5 space-y-3">
              {peopleDecide.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem]">
                  <UserCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p data-reveal className="mt-8 font-medium">
          Every line of AI-assisted code is reviewed by a ZARX engineer before it ships.
        </p>
      </Section>

      {/* One Business | Technology choice drives both the process and the engagement models. */}
      <ViewSwitch>
        <Section id="process" tone="dark" labelledBy="process-title">
          <SectionHeading
            id="process-title"
            tone="dark"
            eyebrow="How it works"
            title="A clear path from first call to results"
            description="Five steps, a decision point at the end of each, and progress you can see every week."
          />
          <div data-reveal className="-mt-4 mb-12">
            <ViewTabs name="process" label="Show the process for" tone="dark" />
          </div>
          <ViewPanel name="process" view="business">
            <DraftBlock />
            <ProcessStrip tone="dark" category="business" />
            <div className="mt-14">
              <ButtonLink href="/services/business-consultancy" variant="inverse-secondary" size="lg" data-cta="home_process_business">
                Explore Business Consultancy
                <ButtonArrow />
              </ButtonLink>
            </div>
          </ViewPanel>
          <ViewPanel name="process" view="technology">
            <ProcessStrip tone="dark" category="technology" />
            <div className="mt-14">
              <ButtonLink href="/process" variant="inverse-secondary" size="lg" data-cta="home_process_technology">
                See the full process
                <ButtonArrow />
              </ButtonLink>
            </div>
          </ViewPanel>
        </Section>

        <Section id="engagements" tone="subtle" labelledBy="engagements-title">
          <SectionHeading
            id="engagements-title"
            eyebrow="Ways to work with us"
            title="Start small. Scale when it works."
            description="Every quote is fixed for its stated scope. No surprise invoices."
          />
          <div data-reveal className="-mt-4 mb-12">
            <ViewTabs name="engagements" label="Show ways to work for" />
          </div>
          <ViewPanel name="engagements" view="business">
            <DraftBlock />
            <EngagementCards ids={businessEngagements} />
          </ViewPanel>
          <ViewPanel name="engagements" view="technology">
            <EngagementCards ids={homeEngagements} />
          </ViewPanel>
        </Section>
      </ViewSwitch>

      {articles.length >= 3 && (
        <Section labelledBy="insights-title">
          <SectionHeading id="insights-title" eyebrow="Insights" title="Notes from the build floor" />
          <ul className="grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug} className="rounded-lg border border-line bg-canvas p-7">
                <p className="text-sm text-muted">{a.category}</p>
                <h3 className="mt-2 text-h3">
                  <Link href={`/insights/${a.slug}`} className="hover:text-accent">{a.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-muted">{a.summary[0]}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FaqSection items={homeFaqs} tone={articles.length >= 3 ? "subtle" : "default"} />
      <CTABanner />
      <JsonLd data={jsonLd} />
    </>
  );
}
