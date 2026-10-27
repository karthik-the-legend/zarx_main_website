import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Top of every inner page: breadcrumb, eyebrow, H1, lead and actions. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-labelledby="page-title"
      className={cn(
        "border-b border-line pb-[clamp(3.5rem,2.5rem+4vw,6rem)] pt-[calc(var(--header-h)+clamp(2rem,1.25rem+3vw,4rem))]",
        className
      )}
    >
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="animate-rise-visible mb-10 md:mb-14">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-ink">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p className="eyebrow animate-rise-visible mb-5">{eyebrow}</p>
          <h1 id="page-title" className="animate-rise-visible text-page" style={{ "--delay": "60ms" } as React.CSSProperties}>
            {title}
          </h1>
          <p
            className="animate-rise-visible mt-6 max-w-2xl text-lead text-muted"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {children && (
            <div
              className="animate-rise-visible mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
