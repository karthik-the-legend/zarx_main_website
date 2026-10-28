import type { CSSProperties } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { leaders } from "@/content/leaders";
import { values } from "@/content/company";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink, buttonStyles } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { LinkedInIcon } from "@/components/ui/Icons";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Leadership Team | ZARX Technologies",
  description:
    "Meet Aniket Singh, Founder & CEO, and Karthik K S, Director & CTO, and the team behind ZARX's AI-accelerated product studio in New Delhi.",
  path: "/leadership",
  image: "/og/leadership.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Leadership" }];

export default function LeadershipPage() {
  const companyFacts = [
    { label: "Legal name", value: site.legalName },
    { label: "Incorporated", value: facts.incorporated },
    { label: "CIN", value: facts.cin },
    { label: "Headquarters", value: `${site.location.city}, ${site.location.country}` },
    { label: "Team size", value: facts.teamSize },
    { label: "Recognition", value: facts.dpiitNumber && `DPIIT Startup India (${facts.dpiitNumber})` },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Leadership"
        title="The people accountable for your product"
        lead="ZARX is led by its founders, and they stay close to every project – from the first call to the monthly review."
      />

      <Section labelledBy="team-title">
        <h2 id="team-title" className="sr-only">Founders</h2>
        <div className="space-y-20 lg:space-y-28">
          {leaders.map((leader, i) => (
            <article key={leader.name} data-reveal aria-labelledby={`leader-${i}`} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-last")}>
                <div className="overflow-hidden rounded-lg bg-subtle">
                  <Image
                    src={leader.image}
                    alt={`Portrait of ${leader.name}, ${leader.role} at ZARX Technologies`}
                    placeholder="blur"
                    loading={i === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1200px) 460px, (min-width: 1024px) 38vw, 92vw"
                    className="aspect-[4/5] w-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-muted">{leader.location}</p>
                <h3 id={`leader-${i}`} className="mt-2 text-h2">{leader.name}</h3>
                <p className="mt-2 text-lg font-medium text-accent">{leader.role}</p>
                {leader.knownFor && <p className="mt-3 font-medium">{leader.knownFor}</p>}
                <p className="mt-6 max-w-prose text-lead text-muted">{leader.bio}</p>
                <p className="mt-8 text-sm font-semibold">At ZARX, accountable for</p>
                <CheckList items={leader.accountableFor} className="mt-3" />
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                  {leader.focus.map((f) => (
                    <li key={f} className="rounded-full bg-subtle px-3 py-1 text-sm">{f}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: "secondary" })}>
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                    <span className="sr-only">: {leader.name} (opens in a new tab)</span>
                  </a>
                  {leader.email && (
                    <a href={`mailto:${leader.email}`} className={buttonStyles({ variant: "secondary" })}>
                      <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                      Email {leader.name.split(" ")[0]}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {facts.teamSize && (
        <Section tone="subtle" labelledBy="crew-title">
          <SectionHeading id="crew-title" eyebrow="The team" title="The team behind the work" align="start" />
          <p data-reveal className="text-lead">{facts.teamSize}, working across engineering, design, AI, games and animation.</p>
          <ArrowLink href="/careers" className="mt-6">We&apos;re hiring – see Careers</ArrowLink>
        </Section>
      )}

      <Section tone={facts.teamSize ? "default" : "subtle"} labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="What we believe" title="Values, and what they look like in practice" />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties} className="border-t border-ink pt-6">
              <h3 className="text-h3">{v.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{v.text}</p>
            </li>
          ))}
        </ul>
        {!facts.teamSize && (
          <ArrowLink href="/careers" className="mt-12">Want to build with us? See Careers</ArrowLink>
        )}
      </Section>

      <Section labelledBy="facts-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Company facts</p>
            <h2 id="facts-title" className="text-h2">The company behind the studio</h2>
          </header>
          <dl data-reveal className="divide-y divide-line rounded-lg border border-line lg:col-span-8">
            {companyFacts.map((f) => (
              <div key={f.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="font-medium sm:col-span-2">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTABanner headline="Talk to a founder, not a sales rep." primaryLabel="Book a call with a founder" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbLd(crumbs, "/leadership"),
            ...leaders.map((leader) => ({
              "@type": "Person",
              name: leader.name,
              jobTitle: leader.role,
              image: `${site.url}${leader.image.src}`,
              worksFor: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.legalName },
              sameAs: [leader.linkedin.split("?")[0]],
            })),
          ],
        }}
      />
    </>
  );
}
