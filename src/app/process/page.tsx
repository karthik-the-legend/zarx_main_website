import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { processFaqs, processSteps } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { CheckList, FaqList } from "@/components/ui/Lists";
import { ProcessStrip } from "@/components/ui/ProcessStrip";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "How ZARX Technologies takes products from idea to launch: vision mapping, AI + human prompt engineering, design and prototype, build and deploy, then scale and upgrade.",
  path: "/process",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Process" }];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="How it works"
        title="A clear path from idea to launch — and beyond."
        lead="A proven five-stage pipeline that turns ambiguous ideas into production-ready products. AI accelerates every stage; experienced people make every decision."
      >
        <ButtonLink href="/contact" size="lg">
          Start a project
          <ButtonArrow />
        </ButtonLink>
        <ButtonLink href="/solutions" size="lg" variant="secondary">
          Explore solutions
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <Section tone="dark" labelledBy="overview-title">
        <SectionHeading
          id="overview-title"
          tone="dark"
          eyebrow="At a glance"
          title="Five stages. No surprises."
          description="Each stage ends with something you can see and approve before we move on."
        />
        <ProcessStrip tone="dark" />
      </Section>

      {/* Stages in detail */}
      <Section labelledBy="stages-title">
        <SectionHeading
          id="stages-title"
          eyebrow="In detail"
          title="What happens at each stage."
          description="What we do, what you receive and where your input matters most."
        />
        <ol>
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              className="grid gap-8 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14"
            >
              <div className="lg:col-span-4">
                <span className="text-5xl font-semibold tabular-nums tracking-tight text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.summary}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                <div>
                  <h4 className="text-sm font-semibold">What happens</h4>
                  <ul className="mt-3 space-y-2.5">
                    {step.activities.map((activity) => (
                      <li key={activity} className="text-[0.9375rem] leading-relaxed text-muted">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">What you get</h4>
                  <CheckList items={step.outputs} className="mt-3" />
                </div>
                <div className="rounded-md bg-subtle p-5 sm:col-span-2 lg:col-span-1">
                  <h4 className="text-sm font-semibold">Your role</h4>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.yourRole}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section tone="subtle" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 id="faq-title" className="text-h2">
              Working with us.
            </h2>
            <p className="mt-5 text-lead text-muted">
              More questions?{" "}
              <Link href="/contact#faq" className="link-underline text-ink">
                See all FAQs
              </Link>
              .
            </p>
          </header>
          <FaqList items={processFaqs} className="lg:col-span-8" />
        </div>
      </Section>

      <CTABanner
        title="Start with a conversation."
        text="Stage one begins with understanding your vision. Tell us about it, and we'll show you what the path from idea to launch could look like."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Why ZARX", href: "/why-zarx" }}
      />

      <JsonLd
        data={{ "@context": "https://schema.org", "@graph": [breadcrumbLd(crumbs, "/process"), faqLd(processFaqs)] }}
      />
    </>
  );
}
