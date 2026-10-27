import type { CSSProperties } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { leaders } from "@/content/leaders";
import { values } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buttonStyles } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { LinkedInIcon } from "@/components/ui/Icons";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "Meet the leadership of ZARX Technologies: Aniket Singh, Founder, Managing Director & CEO, and Karthik K S, Director & Chief Technology Officer.",
  path: "/leadership",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Leadership" }];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Leadership"
        title="The minds behind ZARX."
        lead="A founder-led team with the conviction to build differently — and the technical depth to deliver on that promise."
      />

      <Section labelledBy="team-title">
        <h2 id="team-title" className="sr-only">
          Our leaders
        </h2>
        <div className="space-y-20 lg:space-y-28">
          {leaders.map((leader, i) => (
            <article
              key={leader.name}
              data-reveal
              aria-labelledby={`leader-${i}`}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
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
                <h3 id={`leader-${i}`} className="mt-2 text-h2">
                  {leader.name}
                </h3>
                <p className="mt-2 text-lg font-medium text-accent">{leader.role}</p>
                <p className="mt-6 max-w-prose text-lead text-muted">{leader.bio}</p>
                <p className="mt-8 text-sm font-semibold">Focus areas</p>
                <CheckList items={leader.focus} className="mt-3" />
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: "secondary", className: "mt-8" })}
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Connect on LinkedIn
                  <span className="sr-only">with {leader.name} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="subtle" labelledBy="values-title">
        <SectionHeading
          id="values-title"
          eyebrow="What we believe"
          title="The principles we lead by."
          description="They shape every decision we make — on our own products and on yours."
        />
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <li
              key={value.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="border-t border-ink pt-6"
            >
              <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-h3">{value.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{value.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        title="Work with the team behind ZARX."
        text="A senior team member is involved from your very first conversation. Tell us what you're building."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Why ZARX", href: "/why-zarx" }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbLd(crumbs, "/leadership"),
            ...leaders.map((leader) => ({
              "@type": "Person",
              name: leader.name,
              jobTitle: leader.role,
              worksFor: { "@type": "Organization", name: site.legalName, url: site.url },
              sameAs: [leader.linkedin.split("?")[0]],
            })),
          ],
        }}
      />
    </>
  );
}
