import type { CSSProperties } from "react";
import { MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { hiringSteps, roles, whyWorkHere } from "@/content/careers";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Timeline } from "@/components/ui/ProcessStrip";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { SimpleForm } from "@/components/SimpleForm";

export const metadata = pageMetadata({
  title: "Careers at ZARX | Build Products People Remember",
  description:
    "Join a small, senior team in New Delhi that ships games, apps and AI products – and uses AI to spend its time on the interesting problems.",
  path: "/careers",
  image: "/og/careers.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Careers" }];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Careers"
        title="Build products people remember"
        lead="Join a small, senior team that ships games, apps and AI products – and uses AI to spend its time on the interesting problems."
      >
        <ButtonLink href={roles.length ? "#roles" : "#apply"} size="lg" data-cta="careers_primary">
          {roles.length ? "See open roles" : "Send us your work"}
          <ButtonArrow />
        </ButtonLink>
      </PageHero>

      <Section labelledBy="why-title">
        <SectionHeading id="why-title" eyebrow="Why work here" title="What it's like to build at ZARX" />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkHere.map((w, i) => (
            <li key={w.title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="border-t border-ink pt-6">
              <h3 className="text-h3">{w.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="roles" tone="subtle" labelledBy="roles-title">
        <SectionHeading id="roles-title" eyebrow="Open roles" title="Where you could fit" align="start" />
        {roles.length ? (
          <ul className="divide-y divide-line rounded-lg border border-line bg-canvas">
            {roles.map((r) => (
              <li key={r.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-h3">{r.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                    <span>{r.type}</span>
                    <span className="flex items-center gap-1">
                      <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                      {r.location}{r.remote ? " · Remote OK" : ""}
                    </span>
                  </p>
                  <p className="mt-2 max-w-prose text-[0.9375rem] text-muted">{r.summary}</p>
                </div>
                <ButtonLink href={r.applyUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
                  Apply
                </ButtonLink>
              </li>
            ))}
          </ul>
        ) : (
          <p data-reveal className="max-w-prose rounded-lg border border-line bg-canvas p-7 text-lead text-muted">
            No open roles right now. We still want to hear from engineers, designers, AI specialists, game developers
            and animators whose work we&apos;d be proud to ship – send it below.
          </p>
        )}
      </Section>

      <Section labelledBy="hiring-title">
        <SectionHeading id="hiring-title" eyebrow="Hiring process" title="Four steps, no puzzles" />
        <Timeline steps={hiringSteps.map((s) => ({ title: s.title, text: s.text }))} />
      </Section>

      <Section id="apply" tone="subtle" labelledBy="apply-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Don&apos;t see your role?</p>
            <h2 id="apply-title" className="text-h2">Send us your work</h2>
            <p className="mt-5 text-lead text-muted">A link to things you&apos;ve built matters more to us than a CV.</p>
          </header>
          <div className="rounded-lg border border-line bg-canvas p-6 shadow-sm sm:p-8 lg:col-span-8">
            <SimpleForm
              subject="Careers – work submission"
              event="careers_form_submit"
              submitLabel="Send my work"
              notice={`We use these details only to consider you for a role at ZARX and to reply to you. Ask us to delete them anytime at ${facts.grievanceOfficer?.email ?? site.email}.`}
              successText="Thanks – we'll look at your work and reply."
              fields={[
                { name: "name", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "discipline", label: "Discipline", type: "select", required: true, options: ["Engineering", "Design", "AI", "Games", "Animation", "Other"] },
                { name: "portfolio", label: "Link to your work", type: "url", required: true, placeholder: "GitHub, portfolio, Behance, store link…" },
                { name: "message", label: "What do you want to build next?", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbLd(crumbs, "/careers"),
            ...roles.map((r) => ({
              "@type": "JobPosting",
              title: r.title,
              description: r.summary,
              datePosted: r.posted,
              employmentType: r.type.toUpperCase().replace("-", "_"),
              hiringOrganization: { "@type": "Organization", name: site.legalName, sameAs: site.url },
              jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: r.location, addressCountry: "IN" } },
              ...(r.remote ? { jobLocationType: "TELECOMMUTE" } : {}),
              directApply: false,
              url: r.applyUrl,
            })),
          ],
        }}
      />
    </>
  );
}
