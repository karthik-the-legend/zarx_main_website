import type { CSSProperties } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { getService, serviceHref, servicesIn } from "@/content/services";
import { categories, categoryByKey, type CategoryKey } from "@/content/categories";
import { businessInclusions, goals, inclusions, serviceComparison, solutionsFaqs } from "@/content/company";
import { priceLine } from "@/content/engagements";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { DraftTag } from "@/components/ui/Draft";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { GoalRouter, type RouterGoal } from "@/components/GoalRouter";
import { ServiceCards } from "@/components/ServiceCards";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Business & Technology Services | ZARX Solutions",
  description:
    "Ten services across two practices: marketing, influencers, fundraising and partnerships, plus web, mobile, Web3, AI, design and animation. Start with your goal.",
  path: "/solutions",
  image: "/og/solutions.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Solutions" }];

const routerGoals: RouterGoal[] = goals.map((g) => ({
  id: g.id,
  category: g.category === "business" ? "Business" : "Technology",
  goal: g.goal,
  services: g.services.map((slug) => {
    const s = getService(slug);
    return { slug, name: s?.name ?? slug, href: s ? serviceHref(s) : "/solutions" };
  }),
  team: g.team,
  timeline: g.timeline,
  price: priceLine(g.engagement),
}));

/** Comparison table for one practice; the last column names technologies or platforms and tools. */
function CompareTable({ category }: { category: CategoryKey }) {
  const business = category === "business";
  const name = categoryByKey[category].name;
  return (
    <div data-reveal>
      <h3 className="mb-4 text-h3">
        {name}
        {business && <DraftTag />}
      </h3>
      <div className="overflow-x-auto rounded-lg border border-line bg-canvas" tabIndex={0} role="region" aria-label={`${name} comparison table`}>
        <table className="w-full min-w-[56rem] text-left text-sm">
          <thead className="border-b border-line bg-subtle text-xs uppercase tracking-[0.08em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Service</th>
              <th scope="col" className="px-5 py-4 font-semibold">Best for</th>
              <th scope="col" className="px-5 py-4 font-semibold">Typical timeline</th>
              <th scope="col" className="px-5 py-4 font-semibold">Starting from</th>
              <th scope="col" className="px-5 py-4 font-semibold">Key deliverables</th>
              <th scope="col" className="px-5 py-4 font-semibold">{business ? "Main platforms/tools" : "Main technologies"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {servicesIn(category).map((s) => {
              const row = serviceComparison[s.slug];
              return (
                <tr key={s.slug} className="align-top">
                  <th scope="row" className="px-5 py-4 font-semibold">
                    <Link href={serviceHref(s)} className="hover:text-accent">{s.name}</Link>
                  </th>
                  <td className="px-5 py-4 text-muted">{row.bestFor}</td>
                  <td className="px-5 py-4">{row.timeline}</td>
                  <td className="px-5 py-4">{facts.prices[row.engagement] ? `from ${facts.prices[row.engagement]}` : "Fixed quote after a call"}</td>
                  <td className="px-5 py-4 text-muted">{s.deliverables.slice(0, 3).join(", ")}</td>
                  <td className="px-5 py-4 text-muted">{s.tech.flatMap((g) => g.items).slice(0, 3).join(", ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InclusionGrid({ title, items, draft = false }: { title: string; items: { icon: LucideIcon; text: string }[]; draft?: boolean }) {
  return (
    <div>
      <h3 data-reveal className="mb-5 text-h3">
        {title}
        {draft && <DraftTag />}
      </h3>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.text} className="bg-canvas">
            <div data-reveal style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as CSSProperties} className="h-full p-6">
              <item.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <p className="mt-4 text-[0.9375rem] font-medium leading-snug">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Solutions"
        title="Tell us the goal. We'll assemble the team."
        lead="Growth and technology often go together. Start with what you want to achieve and we'll show you which of our ten services – across Business and Technology Consultancy – get you there."
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
        <SectionHeading
          id="services-title"
          eyebrow="Our services"
          title="Ten services, two practices"
          description="Business Consultancy helps you grow; Technology Consultancy builds the products behind that growth."
        />
        <div className="space-y-14">
          {categories.map((c) => (
            <div key={c.key}>
              <h3 data-reveal className="mb-6 flex items-center gap-2 text-h3">
                <c.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <Link href={`/services/${c.slug}`} className="hover:text-accent">{c.name}</Link>
                {c.draft && <DraftTag />}
              </h3>
              <ServiceCards category={c.key} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="subtle" labelledBy="compare-title">
        <SectionHeading id="compare-title" eyebrow="Side by side" title="Compare at a glance" align="start" />
        <div className="space-y-12">
          <CompareTable category="business" />
          <CompareTable category="technology" />
        </div>
      </Section>

      <Section labelledBy="included-title">
        <SectionHeading id="included-title" eyebrow="Included, always" title="The standards every ZARX project ships with" />
        <div className="space-y-12">
          <InclusionGrid title="Every business engagement" items={businessInclusions} draft />
          <InclusionGrid title="Every technology build" items={inclusions} />
        </div>
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
