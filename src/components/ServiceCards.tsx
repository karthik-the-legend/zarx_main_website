import type { CSSProperties } from "react";
import Link from "next/link";
import type { CategoryKey } from "@/content/categories";
import { serviceHref, servicesIn } from "@/content/services";
import { ButtonArrow } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** One category's services as cards (Home, Solutions and the category pages share copy and order). */
export function ServiceCards({ category }: { category: CategoryKey }) {
  const items = servicesIn(category);
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2",
        items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      {items.map((service, i) => (
        // Reveal the link, not the cell, so the grid lines never show through.
        <li key={service.slug} className="bg-canvas">
          <Link
            href={serviceHref(service)}
            data-reveal
            data-cta={`service_card_${service.slug}`}
            style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
            className="group/link flex h-full flex-col p-7 transition-colors duration-base hover:bg-subtle md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-canvas text-ink transition-colors duration-base group-hover/link:border-accent/30 group-hover/link:text-accent">
                <service.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="text-right text-xs font-medium text-muted">{service.name}</span>
            </div>
            <h3 className="mt-8 text-h3">{service.card.headline}</h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{service.card.line}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Deliverables">
              {service.card.chips.map((chip) => (
                <li key={chip} className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium text-ink group-hover/link:bg-canvas">
                  {chip}
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent">
              Explore
              <ButtonArrow />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
