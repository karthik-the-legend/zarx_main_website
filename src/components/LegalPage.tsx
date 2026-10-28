import type { ReactNode } from "react";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";

export const LEGAL_UPDATED = "29 October 2026";

/** Shared layout for Privacy, Terms, Cookies and Trust: plain language, short sections. */
export function LegalPage({
  path,
  label,
  eyebrow,
  title,
  lead,
  children,
}: {
  path: string;
  label: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label }];
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} lead={lead} />
      <section className="py-section">
        <div className="container-page">
          <div
            className={[
              "mx-auto max-w-3xl text-[1.0625rem] leading-relaxed",
              "[&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight first:[&_h2]:mt-0",
              "[&_h3]:mt-6 [&_h3]:font-semibold",
              "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
              "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2",
              "[&_table]:mt-6 [&_table]:w-full [&_table]:text-left [&_table]:text-[0.9375rem] [&_td]:border-t [&_td]:border-line [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top [&_th]:pb-2 [&_th]:pr-4 [&_th]:text-sm [&_th]:font-semibold",
            ].join(" ")}
          >
            {children}
            <p className="!mt-14 border-t border-line pt-6 text-sm text-muted">Last updated: {LEGAL_UPDATED}</p>
          </div>
        </div>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, path) }} />
    </>
  );
}
