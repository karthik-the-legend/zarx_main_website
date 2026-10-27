import type { CSSProperties } from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { audiences, differentiators, principles } from "@/content/company";
import { getService } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Why ZARX",
  description:
    "AI-assisted pipelines, in-house prompt engineers, game-industry design quality and a founder-first mindset. Why founders and businesses choose ZARX Technologies to build their products.",
  path: "/why-zarx",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Why ZARX" }];

export default function WhyZarxPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Why ZARX"
        title="An IP-first technology partner — not another dev shop."
        lead="We build exceptional digital products for visionary founders and ambitious businesses. Here's what makes the way we work different, and what that means for you."
      >
        <ButtonLink href="/contact" size="lg">
          Start a project
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="/leadership" size="lg" variant="secondary">
          Meet the team
        </ButtonLink>
      </PageHero>

      {/* Differentiators */}
      <Section labelledBy="difference-title">
        <SectionHeading
          id="difference-title"
          eyebrow="The ZARX difference"
          title="Six reasons teams choose us."
          description="Each one exists to reduce your risk and get a better product to market sooner."
        />
        <ol>
          {differentiators.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-12"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-accent">
                    <item.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.summary}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[1.0625rem] leading-relaxed text-ink">{item.detail}</p>
                <p className="mt-6 text-sm font-medium text-muted">What this means for you</p>
                <CheckList items={item.benefits} className="mt-3" />
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Audiences */}
      <Section id="who-we-build-for" tone="subtle" labelledBy="audience-title">
        <SectionHeading
          id="audience-title"
          eyebrow="Who we build for"
          title="Built for builders."
          description="Whether you're pre-seed or post-Series A, a gaming studio or an enterprise — if you care about quality, speed and scalability, we're your team."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience, i) => (
            <li
              key={audience.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as CSSProperties}
              className="flex flex-col rounded-lg border border-line bg-canvas p-7 sm:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line">
                <audience.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{audience.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{audience.description}</p>
              <p className="mt-6 text-sm font-medium">Typical needs</p>
              <CheckList items={audience.needs} className="mt-3" />
              <div className="mt-auto pt-8">
                <p className="text-sm font-medium text-accent">{audience.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
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

      {/* Principles */}
      <Section labelledBy="principles-title">
        <SectionHeading
          id="principles-title"
          eyebrow="Working together"
          title="How we work with you."
          description="The commitments behind every engagement, whatever its size."
        />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <li
              key={principle.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="border-t border-line pt-6"
            >
              <principle.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-h3">{principle.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        title="Build with a team that thinks like a co-founder."
        text="Tell us where you are and where you want to go. We'll come back with an honest view of the fastest, most cost-effective way to get there."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our process", href: "/process" }}
      />

      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/why-zarx") }} />
    </>
  );
}
