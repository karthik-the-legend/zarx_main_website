import type { CSSProperties } from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { services, getService } from "@/content/services";
import { audiences } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink, ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckIcon, CheckList } from "@/components/ui/Lists";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Web platforms, mobile and gaming apps, Web3 products, custom AI and automation, UI/UX design, and 2D & 3D animation — designed and engineered by one team at ZARX Technologies.",
  path: "/solutions",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Solutions" }];

const inclusions = [
  "Discovery and a written plan before any build work",
  "Strategy, design and engineering in one team",
  "Testing and quality assurance at every stage",
  "Launch support and clear documentation",
  "Source code and designs handed over to you",
  "Options for ongoing support after launch",
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Solutions"
        title="Everything you need to take an idea to market — under one roof."
        lead="From the first wireframe to a product at scale, ZARX brings strategy, design, engineering and AI together in one team. Choose a single discipline, or combine them into an end-to-end build."
      >
        <ButtonLink href="/contact" size="lg">
          Discuss your project
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="/process" size="lg" variant="secondary">
          See how we work
        </ButtonLink>
      </PageHero>

      {/* Services */}
      <section aria-label="Our solutions" className="py-section">
        <div className="container-page">
          {services.map((service, i) => (
            <article
              key={service.slug}
              data-reveal
              aria-labelledby={`service-${service.slug}`}
              className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-accent">
                    <service.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`service-${service.slug}`} className="mt-6 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                  <Link href={`/solutions/${service.slug}`} className="transition-colors hover:text-accent">
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">{service.summary}</p>
                <ArrowLink href={`/solutions/${service.slug}`} className="mt-6">
                  Explore {service.short}
                </ArrowLink>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm font-medium text-muted">What we build</p>
                <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {service.offerings.map((offering) => (
                    <li key={offering.title} className="flex gap-3">
                      <CheckIcon className="mt-1 text-accent" />
                      <div>
                        <p className="text-[0.9375rem] font-medium">{offering.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">{offering.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Where to start */}
      <Section tone="subtle" labelledBy="start-title">
        <SectionHeading
          id="start-title"
          eyebrow="Not sure where to start?"
          title="Find the right starting point."
          description="Most products combine several disciplines. Here's where teams like yours usually begin — we'll shape the exact mix with you during discovery."
        />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {audiences.map((audience, i) => (
            // Reveal the content, not the cell, so the grid lines never show through.
            <li key={audience.title} className="bg-canvas">
              <div
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as CSSProperties}
                className="h-full p-7 md:p-8"
              >
                <audience.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <h3 className="mt-5 text-h3">{audience.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{audience.note}</p>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted">Recommended</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {audience.services.map((slug) => {
                    const service = getService(slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/solutions/${slug}`}
                          className="inline-flex rounded-full border border-line px-3 py-1.5 text-[0.8125rem] font-medium transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          {service.short}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Inclusions */}
      <Section labelledBy="includes-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Every engagement</p>
            <h2 id="includes-title" className="text-h2">
              What&apos;s always included.
            </h2>
            <p className="mt-5 max-w-prose text-lead text-muted">
              Whatever you build with us, you get the same foundations — so the product is
              ready for real users, not just a demo.
            </p>
          </header>
          <div data-reveal className="lg:col-span-7 lg:pt-2">
            <CheckList items={inclusions} className="grid gap-x-10 gap-y-4 space-y-0 sm:grid-cols-2" />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Tell us what you're building."
        text="Share a few details. We review every enquiry within 24 hours, and a senior team member will follow up with next steps."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Why ZARX", href: "/why-zarx" }}
      />

      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/solutions") }} />
    </>
  );
}
