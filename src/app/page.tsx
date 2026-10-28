import Image from "next/image";
import Link from "next/link";
import { Check, UserCheck } from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { ServiceCards } from "@/components/ServiceCards";
import { AudienceCards } from "@/components/AudienceCards";
import { EngagementCards } from "@/components/EngagementCards";
import { FaqSection } from "@/components/FaqSection";
import { MetricCards, type Metric } from "@/components/MetricCards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { ArrowLink, ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { aiAccelerates, homeFaqs, peopleDecide } from "@/content/company";
import { homeEngagements } from "@/content/engagements";
import { facts } from "@/content/facts";
import { leaders } from "@/content/leaders";
import { services } from "@/content/services";
import { cases } from "@/content/work";
import { articles } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "ZARX | AI-Accelerated Product Studio, New Delhi",
  description:
    "Founder-led studio building web, mobile, game, Web3 and AI products in weeks. Senior engineers, AI-assisted delivery, 100% IP ownership. Book a free call.",
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
      slogan: site.promise,
      description: site.positioning,
      address: {
        "@type": "PostalAddress",
        ...(facts.registeredOffice ? { streetAddress: facts.registeredOffice } : {}),
        addressLocality: site.location.city,
        addressCountry: site.location.countryCode,
      },
      founder: leaders.map((l) => ({ "@type": "Person", name: l.name, jobTitle: l.role })),
      sameAs: [facts.socials.linkedin, facts.socials.x, facts.socials.instagram, facts.socials.github].filter(Boolean),
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
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
      <TrustStrip />

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
        <AudienceCards />
      </Section>

      <Section id="services" labelledBy="services-title">
        <SectionHeading
          id="services-title"
          eyebrow="What we build"
          title="Six ways we take you from idea to launch"
          description="Pick one discipline or combine them. Every build has one senior lead and one weekly demo."
        />
        <ServiceCards />
        <div data-reveal className="mt-10">
          <ArrowLink href="/solutions">Not sure which you need? Start with your goal</ArrowLink>
        </div>
      </Section>

      {flagship && (
        <Section tone="subtle" labelledBy="work-title">
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

      <Section labelledBy="ai-title">
        <SectionHeading
          id="ai-title"
          eyebrow="AI, used honestly"
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

      <Section id="process" tone="dark" labelledBy="process-title">
        <SectionHeading
          id="process-title"
          tone="dark"
          eyebrow="How it works"
          title="A clear path from first call to launch"
          description="Five stages, a decision point at the end of each, and a live demo every week of the build."
        />
        <ProcessStrip tone="dark" />
        <div data-reveal className="mt-14">
          <ButtonLink href="/process" variant="inverse-secondary" size="lg">
            See the full process
            <ButtonArrow />
          </ButtonLink>
        </div>
      </Section>

      <Section id="engagements" tone="subtle" labelledBy="engagements-title">
        <SectionHeading
          id="engagements-title"
          eyebrow="Ways to work with us"
          title="Start small. Scale when it works."
          description="Every quote is fixed for its stated scope. No surprise invoices."
        />
        <EngagementCards ids={homeEngagements} />
      </Section>

      <Section labelledBy="founders-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Why we started ZARX</p>
            <h2 id="founders-title" className="text-h2">
              We built ZARX for the founders we used to be
            </h2>
            <div className="mt-8 flex -space-x-3">
              {leaders.map((l) => (
                <Image
                  key={l.name}
                  src={l.image}
                  alt={l.name}
                  placeholder="blur"
                  sizes="80px"
                  className="h-20 w-20 rounded-full border-4 border-canvas object-cover object-[center_20%]"
                />
              ))}
            </div>
          </div>
          <div data-reveal className="lg:col-span-7">
            <div className="space-y-5 text-lead text-ink">
              <p>
                We kept seeing the same story. Founders paid for months of agency work, met
                a senior team at the pitch and a junior one on the project, and ended up with
                code they couldn&apos;t change and IP they didn&apos;t fully own.
              </p>
              <p>
                So we built the studio we wished we&apos;d had: senior people on every build, AI
                doing the repetitive work so you reach a working product sooner, and
                everything handed over – code, designs and accounts.
              </p>
              <p className="text-muted">
                Email us at{" "}
                <a href={`mailto:${site.email}`} className="link-underline text-ink">
                  {site.email}
                </a>{" "}
                – we read every message ourselves.
              </p>
            </div>
            <p className="mt-8 text-sm font-medium">
              {leaders.map((l) => l.name).join(" & ")}
              <span className="block font-normal text-muted">Founders, ZARX Technologies</span>
            </p>
            <ArrowLink href="/leadership" className="mt-6">Meet the leadership</ArrowLink>
          </div>
        </div>
      </Section>

      {articles.length >= 3 && (
        <Section tone="subtle" labelledBy="insights-title">
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

      <FaqSection items={homeFaqs} tone="subtle" />
      <CTABanner />
      <JsonLd data={jsonLd} />
    </>
  );
}
