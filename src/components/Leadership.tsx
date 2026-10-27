import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { leaders } from "@/content/leaders";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";

/** Home-page introduction to the leadership team; full profiles live on /leadership. */
export default function Leadership() {
  return (
    <Section id="leadership" labelledBy="leadership-title">
      <SectionHeading
        id="leadership-title"
        eyebrow="Leadership"
        title="The minds behind ZARX."
        description="A founder-led team with the conviction to build differently — and the technical depth to deliver on that promise."
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {leaders.map((leader, i) => (
          <li
            key={leader.name}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
          >
            <Link
              href="/leadership"
              className="group/card flex items-center gap-6 rounded-lg border border-line p-5 transition-colors duration-base hover:bg-subtle sm:p-6"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-subtle sm:h-28 sm:w-28">
                <Image
                  src={leader.image}
                  alt=""
                  placeholder="blur"
                  sizes="112px"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">{leader.name}</h3>
                <p className="mt-1 text-[0.9375rem] font-medium text-accent">{leader.role}</p>
                <p className="mt-1 text-sm text-muted">{leader.location}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div data-reveal className="mt-10">
        <ArrowLink href="/leadership">Meet the leadership</ArrowLink>
      </div>
    </Section>
  );
}
