import type { CSSProperties } from "react";
import { pageMetadata } from "@/lib/metadata";
import { flywheel, partnerships, pillars } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Investors & Partners",
  description:
    "ZARX Technologies is an IP-first technology company that scales through proprietary systems, AI-assisted pipelines and compounding capabilities. Explore investment and partnership opportunities.",
  path: "/investors",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Investors" }];
const contactHref = "/contact?topic=partnership";

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="For investors & partners"
        title="Building the future of digital craft."
        lead="ZARX Technologies is not a services company that scales by headcount. We're building a technology engine that scales through IP, AI and compounding capabilities."
      >
        <ButtonLink href={contactHref} size="lg">
          Discuss a partnership
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="/leadership" size="lg" variant="secondary">
          Meet the leadership
        </ButtonLink>
      </PageHero>

      {/* Philosophy */}
      <section aria-label="Core philosophy" className="py-section">
        <div className="container-page">
          <figure data-reveal className="mx-auto max-w-4xl">
            <blockquote className="text-[clamp(1.625rem,1.2rem+1.8vw,2.5rem)] font-medium leading-[1.25] tracking-tight">
              <p>
                &ldquo;We turn ideas into real-time digital experiences using AI, design and
                engineering —{" "}
                <span className="text-muted">at a cost founders can actually afford.</span>
                &rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Core philosophy, ZARX Technologies Pvt. Ltd.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Thesis */}
      <Section tone="subtle" labelledBy="thesis-title">
        <SectionHeading
          id="thesis-title"
          eyebrow="Investment thesis"
          title="Four reasons ZARX compounds."
          description="A services business funds the work. Proprietary IP and reusable systems are what make it scale."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as CSSProperties}
              className="rounded-lg border border-line bg-canvas p-7 sm:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-accent">
                <pillar.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-2 text-[0.9375rem] font-medium">{pillar.summary}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{pillar.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Model */}
      <Section tone="dark" labelledBy="model-title">
        <SectionHeading
          id="model-title"
          tone="dark"
          eyebrow="The model"
          title="How every project makes the next one stronger."
          description="Client work, reusable systems and proprietary IP form a loop — each turn adds capability that doesn't have to be rebuilt."
        />
        <ol className="grid gap-4 lg:grid-cols-3 lg:gap-0">
          {flywheel.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
              className="relative rounded-lg border border-white/10 bg-night-raised p-7 sm:p-8 lg:mr-10 lg:last:mr-0"
            >
              <span className="text-sm tabular-nums text-night-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-night-muted">{step.text}</p>
              {i < flywheel.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-8 top-1/2 hidden -translate-y-1/2 text-night-muted lg:block"
                >
                  <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Partnerships */}
      <Section labelledBy="partner-title">
        <SectionHeading
          id="partner-title"
          eyebrow="Ways to partner"
          title="Let's build value together."
          description="We're open to conversations with investors, technology companies and collaborators who share our long-term view."
        />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {partnerships.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="border-t border-line pt-6"
            >
              <item.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-h3">{item.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        eyebrow="Investors & partners"
        title="Start a strategic conversation."
        text="Tell us a little about yourself and what you have in mind. Our leadership team reviews every partnership enquiry personally."
        primary={{ label: "Discuss a partnership", href: contactHref }}
        secondary={{ label: "Meet the leadership", href: "/leadership" }}
      />

      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/investors") }} />
    </>
  );
}
