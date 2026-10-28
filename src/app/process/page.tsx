import type { CSSProperties } from "react";
import { DoorOpen, Sparkles } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/lib/cta";
import { changeAndPayment, communication, needsFromYou, processFaqs, processSteps, qualityGates } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "How We Work: From Idea to Launch in 5 Stages | ZARX",
  description:
    "Discover, Design, Build, Launch, Scale – with weekly demos, fixed quotes and a go/no-go decision at every stage. See exactly how we work.",
  path: "/process",
  image: "/og/process.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Process" }];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Our process"
        title="No black boxes. A demo every week."
        lead="Every project follows the same five stages, with a decision point at the end of each one – so you only commit to the next step when you've seen the last."
      >
        <ButtonLink href={cta.book.href} size="lg" data-cta="process_book">
          {cta.book.label}
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href={cta.estimate.href} size="lg" variant="secondary" data-cta="process_estimate">
          Get a ballpark estimate
        </ButtonLink>
      </PageHero>

      <Section tone="dark" labelledBy="overview-title">
        <SectionHeading id="overview-title" tone="dark" eyebrow="At a glance" title="Five stages, five decisions" />
        <ProcessStrip tone="dark" />
      </Section>

      <Section labelledBy="stages-title">
        <SectionHeading
          id="stages-title"
          eyebrow="Stage by stage"
          title="What happens, what you get, what we need"
          description="Each stage ends with a decision gate. You never pay for a stage before approving the one before it."
        />
        <ol>
          {processSteps.map((step, i) => (
            <li key={step.key} data-reveal className="grid gap-8 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-12">
              <div className="lg:col-span-4">
                <p className="text-sm font-medium text-accent">
                  {String(i + 1).padStart(2, "0")} · {step.duration}
                </p>
                <h3 className="mt-2 flex flex-wrap items-center gap-3 text-2xl font-semibold tracking-tight">
                  {step.title}
                  {step.ai && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      <Sparkles aria-hidden="true" className="h-3 w-3" /> AI-assisted
                    </span>
                  )}
                </h3>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                <div>
                  <dt className="text-sm font-semibold">What happens</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.happens}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">What you get</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.youGet}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">Your role</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.role}</dd>
                </div>
                {step.gate && (
                  <div className="flex gap-3 rounded-md bg-subtle p-4 sm:col-span-2 lg:col-span-3">
                    <DoorOpen aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                    <div>
                      <dt className="text-sm font-semibold">Decision gate</dt>
                      <dd className="mt-1 text-[0.9375rem]">{step.gate}</dd>
                    </div>
                  </div>
                )}
              </dl>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="subtle" labelledBy="comms-title">
        <SectionHeading id="comms-title" eyebrow="Communication" title="You'll always know where things stand" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communication.map((c, i) => (
            <li key={c.title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="rounded-lg border border-line bg-canvas p-6">
              <c.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-4 text-h3">{c.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="change-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">Change and payment</p>
            <h2 id="change-title" className="text-h2">Change is normal. Surprise invoices aren&apos;t.</h2>
            <CheckList items={changeAndPayment} className="mt-8" />
          </div>
          <div data-reveal>
            <p className="eyebrow mb-4">Quality gates</p>
            <h2 className="text-h2">Nothing ships without passing these</h2>
            <CheckList items={qualityGates} className="mt-8 grid gap-x-8 gap-y-3 space-y-0 sm:grid-cols-2" />
          </div>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="needs-title">
        <SectionHeading id="needs-title" eyebrow="Your side" title="What we need from you" align="start" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {needsFromYou.map((n, i) => (
            <li key={n} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="border-t border-ink/15 pt-5 text-[1.0625rem] font-medium">
              {n}
            </li>
          ))}
        </ul>
      </Section>

      <FaqSection items={processFaqs} />
      <CTABanner headline="Start with a Discovery Sprint. Decide with a prototype in hand." />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/process") }} />
    </>
  );
}
