import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck, CircleX, Info, MessageCircleWarning, Target } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { getService, services } from "@/content/services";
import { withFacts } from "@/content/engagements";
import { cases, hasWork } from "@/content/work";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink, ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckIcon, CheckList } from "@/components/ui/Lists";
import { Timeline } from "@/components/ui/ProcessStrip";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { EngagementCards } from "@/components/EngagementCards";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: `/og/service-${service.slug}.png`,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const discussHref = `/contact?service=${service.slug}#estimate`;
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: service.name },
  ];
  const featured = cases.find((c) => c.services.includes(service.slug));
  const related = service.related.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={service.name}
        title={service.headline}
        lead={service.subhead}
        after={
          <ul className="flex flex-col gap-x-6 gap-y-2.5 text-sm text-muted sm:flex-row sm:flex-wrap">
            {service.proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckIcon className="text-accent" />
                {p}
              </li>
            ))}
          </ul>
        }
      >
        <ButtonLink href={discussHref} size="lg" data-cta={`service_discuss_${service.slug}`}>
          Discuss your project
          <ButtonArrow />
        </ButtonLink>
        {hasWork() ? (
          <ButtonLink href={`/work?service=${service.slug}`} size="lg" variant="secondary" data-cta={`service_work_${service.slug}`}>
            See {service.name} work
          </ButtonLink>
        ) : (
          <ButtonLink href={cta.book.href} size="lg" variant="secondary" data-cta={`service_book_${service.slug}`}>
            {cta.book.label}
          </ButtonLink>
        )}
      </PageHero>

      {/* 2. Sound familiar? */}
      <Section tone="subtle" labelledBy="pains-title">
        <SectionHeading id="pains-title" eyebrow="Sound familiar?" title="The problems we hear most" align="start" />
        <ul className="grid gap-6 md:grid-cols-3">
          {service.pains.map((pain, i) => (
            <li
              key={pain}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="rounded-lg border border-line bg-canvas p-7"
            >
              <MessageCircleWarning aria-hidden="true" className="h-5 w-5 text-muted" strokeWidth={1.75} />
              <p className="mt-4 text-lg font-medium leading-snug tracking-tight">{pain}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Outcomes */}
      <Section labelledBy="outcomes-title">
        <SectionHeading id="outcomes-title" eyebrow="Outcomes" title="What changes for you" align="start" />
        <ul className="grid gap-x-10 gap-y-10 md:grid-cols-3">
          {service.outcomes.map((outcome, i) => (
            <li
              key={outcome}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="border-t border-ink pt-6"
            >
              <Target aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <p className="mt-4 text-[1.0625rem] font-medium leading-relaxed">{outcome}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Capabilities */}
      <Section tone="subtle" labelledBy="capabilities-title">
        <SectionHeading id="capabilities-title" eyebrow="Capabilities" title="What we build" />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c, i) => (
            // Reveal the content, not the cell, so the grid lines never show through.
            <li key={c.title} className="bg-canvas">
              <div data-reveal style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties} className="h-full p-7 md:p-8">
                <h3 className="text-h3">{c.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{c.text}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.chips.map((chip) => (
                    <li key={chip} className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium">{chip}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. Featured case study (only once one exists for this service) */}
      {featured && (
        <Section labelledBy="case-title">
          <SectionHeading id="case-title" eyebrow="Featured work" title={featured.title} align="start" />
          <div data-reveal className="grid gap-8 rounded-lg border border-line p-7 sm:p-9 lg:grid-cols-2">
            <div>
              <p className="text-sm text-muted">{featured.client} · {featured.industry}</p>
              <p className="mt-3 text-lead">{featured.problem}</p>
              {featured.quote && (
                <blockquote className="mt-6 border-l-2 border-accent pl-5 text-muted">
                  “{featured.quote.text}” <span className="block text-sm text-ink">– {featured.quote.name}, {featured.quote.role}</span>
                </blockquote>
              )}
              <ArrowLink href={`/work/${featured.slug}`} className="mt-6">Read the case study</ArrowLink>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {featured.results.slice(0, 3).map((r) => (
                <li key={r.label} className="rounded-md bg-subtle p-5">
                  <p className="text-2xl font-semibold tracking-tight">{r.value}</p>
                  <p className="text-sm text-muted">{r.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* 6. Deliverables */}
      <Section labelledBy="deliverables-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Deliverables</p>
            <h2 id="deliverables-title" className="text-h2">What you walk away with</h2>
            <p className="mt-5 text-lead text-muted">Everything is yours at handover: in your repository, your accounts and your files.</p>
          </header>
          <div data-reveal className="lg:col-span-8">
            <CheckList items={service.deliverables} className="grid gap-x-10 gap-y-3.5 space-y-0 sm:grid-cols-2" />
          </div>
        </div>
      </Section>

      {/* 7. Timeline */}
      <Section tone="dark" labelledBy="timeline-title">
        <SectionHeading
          id="timeline-title"
          tone="dark"
          eyebrow="Timeline"
          title={service.timeline.title}
          description="A typical engagement, week by week. Your plan is confirmed in the Discovery Sprint."
        />
        <Timeline tone="dark" steps={service.timeline.steps.map((s) => ({ meta: s.when, title: withFacts(s.what) }))} />
      </Section>

      {/* 8. Technologies */}
      <Section labelledBy="tech-title">
        <SectionHeading id="tech-title" eyebrow="Technologies" title="What we build with" description="We choose the stack that fits your product, not the other way round." />
        <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.tech.map((group) => (
            <div key={group.group} className="bg-canvas p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{group.group}</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-line px-3 py-1 text-sm">{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 9. Ways to start */}
      <Section tone="subtle" labelledBy="start-title">
        <SectionHeading id="start-title" eyebrow="Ways to start" title="Pick the size of the first step" description="Each option has a fixed scope and a fixed quote." />
        <EngagementCards ids={service.engagements} service={service.slug} />
      </Section>

      {/* 10. Right fit / not a fit */}
      <Section labelledBy="fit-title">
        <SectionHeading id="fit-title" eyebrow="Right fit" title="Are we right for this?" align="start" />
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-lg border border-line p-7 sm:p-8">
            <h3 className="text-h3">Great fit if you…</h3>
            <ul className="mt-5 space-y-3">
              {service.fit.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                  <CircleCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={1.75} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="rounded-lg border border-line bg-subtle p-7 sm:p-8" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
            <h3 className="text-h3">Probably not a fit if you…</h3>
            <ul className="mt-5 space-y-3">
              {service.notFit.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                  <CircleX aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted" strokeWidth={1.75} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 11. Quality & security */}
      <Section tone="subtle" labelledBy="quality-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Quality & security</p>
            <h2 id="quality-title" className="text-h2">Standards this work ships with</h2>
          </header>
          <div data-reveal className="space-y-8 lg:col-span-8">
            <CheckList items={service.quality} className="grid gap-x-10 gap-y-3.5 space-y-0 sm:grid-cols-2" />
            {service.note && (
              <aside className="flex gap-4 rounded-md border border-line bg-canvas p-5 text-sm leading-relaxed text-muted">
                <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ink" strokeWidth={1.75} />
                <div>
                  <p className="font-semibold text-ink">{service.note.title}</p>
                  <p className="mt-1">{service.note.text}</p>
                  {service.note.source && <p className="mt-2 text-xs">Source: {service.note.source}</p>}
                </div>
              </aside>
            )}
          </div>
        </div>
      </Section>

      {/* 12. FAQ */}
      <FaqSection
        items={service.faqs}
        title="Common questions"
        intro={
          <>
            Something else on your mind?{" "}
            <Link href={discussHref} className="link-underline text-ink">Ask us directly</Link>.
          </>
        }
      />

      {/* 13. Related services */}
      <Section tone="subtle" labelledBy="related-title">
        <SectionHeading id="related-title" eyebrow="Often paired with" title="Services that work well together" align="start" />
        <ul className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/services/${r.slug}`}
                className="group/link flex h-full flex-col rounded-lg border border-line bg-canvas p-7 transition-colors hover:border-ink/20"
              >
                <r.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <p className="mt-4 text-sm font-medium text-muted">{r.name}</p>
                <h3 className="mt-1 text-h3">{r.card.headline}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
                  Explore <ButtonArrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner headline={service.ctaHeadline} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: service.name,
              serviceType: service.name,
              description: service.subhead,
              url: absoluteUrl(path),
              provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.legalName, url: site.url },
              areaServed: "Worldwide",
            },
            breadcrumbLd(crumbs, path),
          ],
        }}
      />
    </>
  );
}
