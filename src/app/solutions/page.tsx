import type { CSSProperties } from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { getService, services } from "@/content/services";
import { goals, inclusions, serviceComparison, solutionsFaqs } from "@/content/company";
import { priceLine } from "@/content/engagements";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { GoalRouter, type RouterGoal } from "@/components/GoalRouter";
import { ServiceCards } from "@/components/ServiceCards";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Product Development Services | ZARX Solutions",
  description:
    "Web platforms, mobile and games, Web3, AI automation, UI/UX and animation – pick your goal and see the team, timeline and budget it takes.",
  path: "/solutions",
  image: "/og/solutions.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Solutions" }];

const routerGoals: RouterGoal[] = goals.map((g) => ({
  id: g.id,
  goal: g.goal,
  services: g.services.map((slug) => ({ slug, name: getService(slug)?.name ?? slug })),
  team: g.team,
  timeline: g.timeline,
  price: priceLine(g.engagement),
}));

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Solutions"
        title="Tell us the goal. We'll assemble the team."
        lead="Most products need more than one skill. Start with what you want to achieve and we'll show you which of our six services get you there."
      >
        <ButtonLink href={cta.book.href} size="lg" data-cta="solutions_book">
          {cta.book.label}
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href={cta.estimate.href} size="lg" variant="secondary" data-cta="solutions_estimate">
          Get a ballpark estimate
        </ButtonLink>
      </PageHero>

      <Section tone="subtle" labelledBy="goal-title">
        <SectionHeading id="goal-title" eyebrow="Start with your goal" title="What are you trying to do?" align="start" />
        <GoalRouter goals={routerGoals} />
      </Section>

      <Section labelledBy="services-title">
        <SectionHeading id="services-title" eyebrow="Our services" title="Six disciplines under one roof" />
        <ServiceCards />
      </Section>

      <Section tone="subtle" labelledBy="compare-title">
        <SectionHeading id="compare-title" eyebrow="Side by side" title="Compare at a glance" align="start" />
        <div data-reveal className="overflow-x-auto rounded-lg border border-line bg-canvas" tabIndex={0} role="region" aria-label="Service comparison table">
          <table className="w-full min-w-[56rem] text-left text-sm">
            <thead className="border-b border-line bg-subtle text-xs uppercase tracking-[0.08em] text-muted">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                <th scope="col" className="px-5 py-4 font-semibold">Best for</th>
                <th scope="col" className="px-5 py-4 font-semibold">Typical timeline</th>
                <th scope="col" className="px-5 py-4 font-semibold">Starting from</th>
                <th scope="col" className="px-5 py-4 font-semibold">Key deliverables</th>
                <th scope="col" className="px-5 py-4 font-semibold">Main technologies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {services.map((s) => {
                const row = serviceComparison[s.slug];
                return (
                  <tr key={s.slug} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold">
                      <Link href={`/services/${s.slug}`} className="hover:text-accent">{s.name}</Link>
                    </th>
                    <td className="px-5 py-4 text-muted">{row.bestFor}</td>
                    <td className="px-5 py-4">{row.timeline}</td>
                    <td className="px-5 py-4">{facts.prices[row.engagement] ? `from ${facts.prices[row.engagement]}` : "Fixed quote after a call"}</td>
                    <td className="px-5 py-4 text-muted">{s.deliverables.slice(0, 3).join(", ")}</td>
                    <td className="px-5 py-4 text-muted">{s.tech[0].items.slice(0, 3).join(", ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section labelledBy="included-title">
        <SectionHeading id="included-title" eyebrow="Included, always" title="The standards every ZARX build ships with" />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item, i) => (
            <li key={item.text} className="bg-canvas">
              <div data-reveal style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as CSSProperties} className="h-full p-6">
                <item.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <p className="mt-4 text-[0.9375rem] font-medium leading-snug">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {facts.industries.length > 0 && (
        <Section tone="subtle" labelledBy="industries-title">
          <SectionHeading id="industries-title" eyebrow="Industries" title="Where we've already shipped" align="start" />
          <ul className="flex flex-wrap gap-2">
            {facts.industries.map((i) => (
              <li key={i} className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium">{i}</li>
            ))}
          </ul>
        </Section>
      )}

      <FaqSection items={solutionsFaqs} tone="subtle" />
      <CTABanner />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/solutions") }} />
    </>
  );
}
