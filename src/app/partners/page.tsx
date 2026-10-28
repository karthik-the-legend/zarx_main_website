import type { CSSProperties } from "react";
import { Landmark } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { clarityLine, governance, investorDisclaimer, marketFacts, partnerWays, thesis } from "@/content/company";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { MetricCards } from "@/components/MetricCards";
import { SimpleForm } from "@/components/SimpleForm";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Partner With ZARX | Investors & Partnerships",
  description:
    "Referral, technology and co-build partnerships with an AI-accelerated product studio – and a private channel for investor conversations.",
  path: "/partners",
  image: "/og/partners.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Investors & Partners" }];

const formNotice =
  "We use these details only to reply to you about this enquiry. Ask us to delete them anytime.";

export default function PartnersPage() {
  const ways = partnerWays.map((w) =>
    w.title === "Referral partners" && facts.referralFee
      ? { ...w, youGet: `A ${facts.referralFee} referral fee on the first-year value of projects you introduce, paid when the client pays.` }
      : w
  );

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Investors & Partners"
        title="Build the next wave of products with us"
        lead="ZARX funds its own product IP with client work, and every project sharpens the AI-assisted pipeline behind both."
      >
        <ButtonLink href="#partner" size="lg" data-cta="partners_become">
          Become a partner
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="#investors" size="lg" variant="secondary" data-cta="partners_investor">
          Request investor materials
        </ButtonLink>
      </PageHero>

      <Section labelledBy="thesis-title">
        <SectionHeading id="thesis-title" eyebrow="The thesis" title="Why the studio model compounds" />
        <ol className="grid gap-6 md:grid-cols-3">
          {thesis.map((t, i) => (
            <li key={t.title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="rounded-lg border border-line p-7">
              <span className="text-sm font-medium tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-h3">{t.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
        <p data-reveal className="mt-8 rounded-md border-l-2 border-accent bg-subtle px-6 py-5 text-[1.0625rem] font-medium leading-relaxed">
          {clarityLine}
        </p>
      </Section>

      {facts.traction.length > 0 && (
        <Section tone="subtle" labelledBy="traction-title">
          <SectionHeading
            id="traction-title"
            eyebrow="Traction"
            title="Where we are today"
            description={facts.tractionAsOf ? `As of ${facts.tractionAsOf}.` : undefined}
          />
          <MetricCards items={facts.traction} />
        </Section>
      )}

      <Section tone="dark" labelledBy="market-title">
        <SectionHeading id="market-title" tone="dark" eyebrow="Market" title="Why now" />
        <ul className="grid gap-6 md:grid-cols-2">
          {marketFacts.map((m, i) => (
            <li key={m.stat} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties} className="rounded-lg border border-white/10 bg-night-raised p-7 sm:p-8">
              <p className="text-[2.75rem] font-semibold leading-none tracking-tight">{m.stat}</p>
              <p className="mt-4 text-lead text-night-fg">{m.text}</p>
              <p className="mt-4 text-xs text-night-muted">Source: {m.source}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="ways-title">
        <SectionHeading id="ways-title" eyebrow="Ways to partner" title="Four ways to build together" />
        <ul className="grid gap-6 md:grid-cols-2">
          {ways.map((w, i) => (
            <li key={w.title} data-reveal style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as CSSProperties} className="flex flex-col rounded-lg border border-line p-7 sm:p-8">
              <w.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{w.title}</h3>
              <dl className="mt-4 space-y-3 text-[0.9375rem]">
                <div><dt className="inline font-medium">Who it&apos;s for: </dt><dd className="inline text-muted">{w.forWho}</dd></div>
                <div><dt className="inline font-medium">What you get: </dt><dd className="inline text-muted">{w.youGet}</dd></div>
                <div><dt className="inline font-medium">What we get: </dt><dd className="inline text-muted">{w.weGet}</dd></div>
              </dl>
              <a href="#partner" className="mt-auto inline-flex pt-6 text-sm font-medium text-accent hover:text-accent-hover" data-cta={`partner_${i}`}>
                {w.cta} →
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="partner" tone="subtle" labelledBy="partner-form-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Become a partner</p>
            <h2 id="partner-form-title" className="text-h2">Start a partnership conversation</h2>
            <p className="mt-5 text-lead text-muted">Tell us who you are and what you have in mind. A founder replies within one working day.</p>
          </header>
          <div className="rounded-lg border border-line bg-canvas p-6 shadow-sm sm:p-8 lg:col-span-8">
            <SimpleForm
              subject="Partnership enquiry"
              event="partner_form_submit"
              submitLabel="Send"
              notice={formNotice}
              successText="Thanks – a founder will reply within one working day."
              fields={[
                { name: "name", label: "Your name", required: true, autoComplete: "name" },
                { name: "company", label: "Company", required: true, autoComplete: "organization" },
                { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
                { name: "type", label: "Partnership type", type: "select", required: true, options: partnerWays.map((w) => w.title) },
                { name: "message", label: "What do you have in mind?", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="investors" labelledBy="investors-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">For investors</p>
            <h2 id="investors-title" className="text-h2">For investors</h2>
            <p className="mt-5 text-lead text-muted">
              We&apos;re happy to speak with investors who share our long-term view. Request our
              materials and a founder will be in touch.
            </p>
          </header>
          <div className="lg:col-span-8">
            <div className="rounded-lg border border-line p-6 sm:p-8">
              <SimpleForm
                subject="Investor materials request"
                event="investor_form_submit"
                submitLabel="Request materials"
                notice={formNotice}
                successText="Thanks – a founder will be in touch."
                fields={[
                  { name: "name", label: "Your name", required: true, autoComplete: "name" },
                  { name: "fund", label: "Fund or organisation", required: true, autoComplete: "organization" },
                  { name: "role", label: "Role" },
                  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                  { name: "linkedin", label: "LinkedIn profile", type: "url", placeholder: "https://www.linkedin.com/in/…" },
                  { name: "interest", label: "Area of interest", type: "select", options: ["Studio business", "Own products – games", "Own products – AI", "Something else"] },
                ]}
              />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">{investorDisclaimer}</p>
          </div>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="gov-title">
        <SectionHeading id="gov-title" eyebrow="Governance & trust" title="A company you can check" align="start" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {governance.map((g) => (
            <li key={g} className="flex items-center gap-3 rounded-md border border-line bg-canvas px-5 py-4 text-[0.9375rem] font-medium">
              <Landmark aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              {g}
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner headline="Let's find out if we should build together." />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/partners") }} />
    </>
  );
}
