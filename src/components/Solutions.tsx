import type { CSSProperties } from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

/** Home-page introduction to the six services; each card opens its detail page. */
export default function Solutions() {
  return (
    <Section id="solutions" labelledBy="solutions-title" className="border-t border-line">
      <SectionHeading
        id="solutions-title"
        eyebrow="What we build"
        title="Solutions, not services."
        description="We don't just design — we engineer experiences. Every solution is built with AI-assisted pipelines, product thinking and scalability from day one."
      />

      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          // Reveal the link, not the cell, so the grid lines never show through.
          <li key={service.slug} className="bg-canvas">
            <Link
              href={`/solutions/${service.slug}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
              className="group/link flex h-full flex-col p-7 transition-colors duration-base hover:bg-subtle md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-canvas text-ink transition-colors duration-base group-hover/link:border-accent/30 group-hover/link:text-accent">
                  <service.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-xs tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-h3">{service.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{service.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent">
                Learn more
                <ButtonArrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div data-reveal className="mt-10 flex justify-center">
        <ButtonLink href="/solutions" variant="secondary" size="lg">
          Explore all solutions
          <ButtonArrow />
        </ButtonLink>
      </div>
    </Section>
  );
}
