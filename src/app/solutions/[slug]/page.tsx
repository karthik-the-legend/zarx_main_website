import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { getService, services } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink, ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckList, FaqList, Tags } from "@/components/ui/Lists";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/ui/JsonLd";
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
    title: service.title,
    description: `${service.headline} ${service.summary}`,
    path: `/solutions/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/solutions/${service.slug}`;
  const contactHref = `/contact?topic=${service.slug}`;
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: service.short },
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={service.title} title={service.headline} lead={service.intro}>
        <ButtonLink href={contactHref} size="lg">
          Discuss your project
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="/process" size="lg" variant="secondary">
          See how we work
        </ButtonLink>
      </PageHero>

      {/* Outcomes */}
      <Section labelledBy="outcomes-title">
        <SectionHeading
          id="outcomes-title"
          eyebrow="Outcomes"
          title="What this means for your business."
          align="start"
        />
        <ul className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {service.outcomes.map((outcome, i) => (
            <li
              key={outcome.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="border-t border-ink pt-6"
            >
              <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-h3">{outcome.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{outcome.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Offerings */}
      <Section tone="subtle" labelledBy="offerings-title">
        <SectionHeading
          id="offerings-title"
          eyebrow="What we build"
          title="Capabilities, end to end."
          description={service.summary}
        />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((offering, i) => (
            // Reveal the content, not the cell, so the grid lines never show through.
            <li key={offering.title} className="bg-canvas">
              <div
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
                className="p-7 md:p-8"
              >
                <h3 className="text-h3">{offering.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{offering.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Deliverables, fit and stack */}
      <Section labelledBy="deliverables-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Deliverables</p>
            <h2 id="deliverables-title" className="text-h2">
              What you receive.
            </h2>
            <p className="mt-5 max-w-prose text-lead text-muted">
              Clear, tangible outputs at every stage — so you always know what you&apos;re
              paying for and what comes next.
            </p>
            <CheckList items={service.deliverables} className="mt-8" />
          </div>

          <aside data-reveal className="space-y-8 rounded-lg border border-line bg-subtle p-7 sm:p-9 lg:col-span-6 lg:self-start">
            <div>
              <h3 className="text-sm font-semibold">Ideal for</h3>
              <CheckList items={service.idealFor} className="mt-4" />
            </div>
            <div className="border-t border-line pt-8">
              <h3 className="text-sm font-semibold">Technologies we work with</h3>
              <p className="mb-4 mt-1 text-sm text-muted">We choose the stack that fits your product, not the other way round.</p>
              <Tags items={service.stack} />
            </div>
          </aside>
        </div>
      </Section>

      {/* Process */}
      <Section tone="subtle" labelledBy="delivery-title">
        <SectionHeading
          id="delivery-title"
          eyebrow="How we deliver"
          title="Five stages. No surprises."
          description={
            <>
              Every project follows the same proven path, from vision to scale.{" "}
              <ArrowLink href="/process" className="mt-3 flex w-fit">
                See the full process
              </ArrowLink>
            </>
          }
        />
        <ProcessStrip />
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 id="faq-title" className="text-h2">
              Common questions.
            </h2>
            <p className="mt-5 text-lead text-muted">
              Something else on your mind?{" "}
              <Link href={contactHref} className="link-underline text-ink">
                Ask us directly
              </Link>
              .
            </p>
          </header>
          <FaqList items={service.faqs} className="lg:col-span-8" />
        </div>
      </Section>

      {/* Related */}
      <section aria-labelledby="related-title" className="border-t border-line py-14">
        <div className="container-page">
          <h2 id="related-title" className="text-sm font-medium text-muted">
            Explore other solutions
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/solutions/${other.slug}`}
                  className="group/link inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <other.icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                  {other.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        eyebrow={service.short}
        title="Let's talk about your project."
        text="Tell us what you're building and where you are today. We review every enquiry within 24 hours and come back with a clear next step."
        primary={{ label: "Discuss your project", href: contactHref }}
        secondary={{ label: "All solutions", href: "/solutions" }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: service.title,
              serviceType: service.short,
              description: service.intro,
              url: absoluteUrl(path),
              provider: { "@type": "Organization", name: site.legalName, url: site.url },
              areaServed: "Worldwide",
            },
            breadcrumbLd(crumbs, path),
            faqLd(service.faqs),
          ],
        }}
      />
    </>
  );
}
