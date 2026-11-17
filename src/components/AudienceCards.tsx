import type { CSSProperties } from "react";
import Link from "next/link";
import { audiences } from "@/content/company";
import type { CategoryKey } from "@/content/categories";
import { cn } from "@/lib/utils";

/** "Pick the line that sounds like you" cards, each linking to its best-fit pages. */
export function AudienceCards({ category, showTypical = false }: { category?: CategoryKey; showTypical?: boolean }) {
  const items = category ? audiences.filter((a) => a.category === category) : audiences;
  return (
    <ul className={cn("grid gap-6 md:grid-cols-2", items.length === 4 && "xl:grid-cols-4")}>
      {items.map((a, i) => (
        <li
          key={a.quote}
          data-reveal
          style={{ "--reveal-delay": `${(i % 4) * 70}ms` } as CSSProperties}
          className="flex flex-col rounded-lg border border-line bg-canvas p-7 sm:p-8"
        >
          <a.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
          <p className="mt-5 text-xl font-semibold tracking-tight">“{a.quote}”</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            <span className="font-medium text-ink">{a.who}:</span> {a.text}
          </p>
          {showTypical && <p className="mt-3 text-sm text-muted">{a.typical}</p>}
          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {a.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex rounded-full border border-line px-3 py-1.5 text-[0.8125rem] font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
