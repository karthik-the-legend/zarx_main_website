import type { CSSProperties } from "react";
import Link from "next/link";
import { categories } from "@/content/categories";
import { serviceHref, servicesIn } from "@/content/services";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

/** The two practices side by side: description, their services as tags, and a link to each category page. */
export function CategoryCards() {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {categories.map((c, i) => (
        <li
          key={c.key}
          data-reveal
          style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
          className="flex flex-col rounded-lg border border-line bg-canvas p-7 sm:p-9"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent">
              <c.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="text-sm font-medium text-muted">{c.verb}</p>
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">{c.name}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{c.card}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${c.name} services`}>
            {servicesIn(c.key).map((s) => (
              <li key={s.slug}>
                <Link
                  href={serviceHref(s)}
                  className="inline-flex rounded-full border border-line px-3 py-1.5 text-[0.8125rem] font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <ButtonLink href={`/services/${c.slug}`} variant="secondary" data-cta={`home_category_${c.key}`}>
              Explore {c.name}
              <ButtonArrow />
            </ButtonLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
