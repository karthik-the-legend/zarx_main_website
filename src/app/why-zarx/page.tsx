import type { CSSProperties } from "react";
import { Ban, Wrench } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { cta, secondaryCta } from "@/lib/cta";
import { commitments, comparison, principles, reasons, tools, whyFaqs, wontDo } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { AudienceCards } from "@/components/AudienceCards";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Why Founders Choose ZARX | AI-Accelerated Studio",
  description:
    "Senior engineers, AI-assisted delivery, game-studio design quality and 100% IP ownership – and the written commitments we stand behind.",
  path: "/why-zarx",
  image: "/og/why-zarx.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Why ZARX" }];

export default function WhyZarxPage() {
  const secondary = secondaryCta();
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Why ZARX"
        title="Big-studio quality. Startup speed. Your IP."
        lead="You get senior engineers and designers who move fast because AI handles the repetitive work – and you own everything we build."
      >
        <ButtonLink href={cta.book.href} size="lg" data-cta="why_book">
          {cta.book.label}
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href={secondary.href} size="lg" variant="secondary" data-cta="why_secondary">
          {secondary.label}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="reasons-title">
        <SectionHeading id="reasons-title" eyebrow="What makes us different" title="Six reasons founders choose us" />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
              className="flex flex-col rounded-lg border border-line p-7"
            >
              <r.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-h3">{r.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{r.claim}</p>
              {r.proof && (
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Proof: </span>
                  {r.proof}
                </p>
              )}
              <p className="mt-auto border-t border-line pt-4 text-sm font-medium">
                <span className="text-accent">For you: </span>
                {r.forYou}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" labelledBy="compare-title">
        <SectionHeading
          id="compare-title"
          eyebrow="Honest comparison"
          title="How we compare"
          description="Every option has strengths. Here's where each one fits."
        />
        <div data-reveal className="overflow-x-auto rounded-lg border border-line bg-canvas" tabIndex={0} role="region" aria-label="Comparison of ZARX, freelancers, a large agency and hiring in-house">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead className="border-b border-line">
              <tr>
                <td className="px-5 py-4" />
                {comparison.columns.map((c, i) => (
                  <th key={c} scope="col" className={i === 0 ? "bg-accent-soft px-5 py-4 font-semibold text-accent" : "px-5 py-4 font-semibold"}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {comparison.rows.map((row) => (
                <tr key={row.label} className="align-top">
                  <th scope="row" className="px-5 py-4 font-medium">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={i === 0 ? "bg-accent-soft/60 px-5 py-4 font-medium" : "px-5 py-4 text-muted"}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section labelledBy="serve-title">
        <SectionHeading id="serve-title" eyebrow="Who we serve" title="Built for teams that need to move" />
        <AudienceCards showTypical />
      </Section>

      <Section tone="dark" labelledBy="commit-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">In writing</p>
            <h2 id="commit-title" className="text-h2">Promises we put in the contract</h2>
            <p className="mt-5 text-lead text-night-muted">Not a sales pitch – clauses you can hold us to.</p>
          </header>
          <div data-reveal className="lg:col-span-7">
            <CheckList items={commitments} tone="dark" className="grid gap-x-10 gap-y-4 space-y-0 sm:grid-cols-2" />
          </div>
        </div>
      </Section>

      <Section labelledBy="wont-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Our limits</p>
            <h2 id="wont-title" className="text-h2">What we won&apos;t do</h2>
          </header>
          <ul data-reveal className="space-y-4 lg:col-span-7">
            {wontDo.map((w) => (
              <li key={w} className="flex gap-3 text-[1.0625rem] leading-relaxed">
                <Ban aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-danger" strokeWidth={1.75} />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="work-with-title">
        <SectionHeading id="work-with-title" eyebrow="Working together" title="How we work with clients" />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li key={p.title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="border-t border-ink/15 pt-6">
              <p.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-h3">{p.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
        <div data-reveal className="mt-12 rounded-lg border border-line bg-canvas p-7">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Wrench aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.75} />
            The tools you&apos;ll see
          </h3>
          <CheckList items={tools} className="mt-4 grid gap-x-10 gap-y-3 space-y-0 sm:grid-cols-2" />
        </div>
      </Section>

      <FaqSection items={whyFaqs} />
      <CTABanner headline="See if we're the right fit in 30 minutes." />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/why-zarx") }} />
    </>
  );
}
