import type { CSSProperties } from "react";
import { differentiators } from "@/content/company";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";

/** Home-page introduction to the ZARX difference; the full story lives on /why-zarx. */
export default function USP() {
  return (
    <Section id="usp" labelledBy="usp-title">
      <SectionHeading
        id="usp-title"
        eyebrow="The ZARX difference"
        title="Why ZARX is different."
        description="We're not another dev shop. We're an IP-first technology company that builds exceptional digital products for visionary founders."
      />

      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => (
          <li
            key={item.title}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
            className="border-t border-line pt-6"
          >
            <item.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
            <h3 className="mt-5 text-h3">{item.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.summary}</p>
          </li>
        ))}
      </ul>

      <div data-reveal className="mt-12">
        <ArrowLink href="/why-zarx">Why teams choose ZARX</ArrowLink>
      </div>
    </Section>
  );
}
