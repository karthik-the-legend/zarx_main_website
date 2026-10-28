import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { cases } from "@/content/work";
import { getService } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { MetricCards } from "@/components/MetricCards";
import CTABanner from "@/components/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/**
 * Static export needs at least one path, so while there are no cases this
 * generates a single placeholder that renders the 404 page.
 */
export function generateStaticParams() {
  return cases.length ? cases.map((c) => ({ slug: c.slug })) : [{ slug: "coming-soon" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return { title: "Case study", robots: { index: false } };
  return pageMetadata({ title: `${c.title} | ZARX`, description: `${c.problem} ${c.result}`, path: `/work/${c.slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const path = `/work/${c.slug}`;
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: c.client }];
  const related = cases.filter((x) => x.slug !== c.slug).slice(0, 3);
  const snapshot = [
    { label: "Client", value: c.client },
    { label: "Industry", value: c.industry },
    { label: "Location", value: c.location },
    { label: "Services", value: c.services.map((s) => getService(s)?.name ?? s).join(", ") },
    { label: "Team", value: c.team },
    { label: "Duration", value: c.duration },
    { label: "Platforms", value: c.platforms?.join(", ") },
  ].filter((r): r is { label: string; value: string } => Boolean(r.value));

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={c.kind} title={c.title} lead={c.problem} />

      <Section labelledBy="challenge-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <dl className="h-fit divide-y divide-line rounded-lg border border-line bg-subtle lg:col-span-4">
            {snapshot.map((r) => (
              <div key={r.label} className="px-5 py-3.5">
                <dt className="text-xs uppercase tracking-[0.1em] text-muted">{r.label}</dt>
                <dd className="mt-1 font-medium">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">The challenge</p>
            <h2 id="challenge-title" className="sr-only">The challenge</h2>
            <p className="text-lead">{c.challenge}</p>

            <h2 className="mt-14 text-h2">Our approach</h2>
            <ol className="mt-6 space-y-5">
              {c.approach.map((a, i) => (
                <li key={a.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-sm font-medium">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-1 text-muted">{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {c.gallery.length > 0 && (
        <Section tone="subtle" labelledBy="built-title">
          <SectionHeading id="built-title" eyebrow="What we built" title="Inside the product" align="start" />
          <ul className="grid gap-6 md:grid-cols-2">
            {c.gallery.map((g) => (
              <li key={g.src}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export serves images as-is */}
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full rounded-lg border border-line" />
                  <figcaption className="mt-3 text-sm text-muted">{g.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section labelledBy="results-title">
        <SectionHeading id="results-title" eyebrow="Results" title="What changed" align="start" />
        <MetricCards items={c.results.map((r) => ({ value: r.value, label: r.label, note: r.how }))} />
        {c.quote && (
          <figure className="mt-12 max-w-3xl">
            <blockquote className="border-l-2 border-accent pl-6 text-2xl font-medium leading-snug tracking-tight">“{c.quote.text}”</blockquote>
            <figcaption className="mt-4 pl-6 text-sm text-muted">
              {c.quote.linkedin ? (
                <a href={c.quote.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline underline-offset-2">{c.quote.name}</a>
              ) : (
                <span className="font-medium text-ink">{c.quote.name}</span>
              )}
              , {c.quote.role}
            </figcaption>
          </figure>
        )}
        <ul className="mt-12 flex flex-wrap gap-2" aria-label="Tech stack">
          {c.stack.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>
          ))}
        </ul>
      </Section>

      {related.length > 0 && (
        <Section tone="subtle" labelledBy="related-title">
          <SectionHeading id="related-title" eyebrow="More work" title="Related case studies" align="start" />
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="rounded-lg border border-line bg-canvas p-6">
                <p className="text-sm text-muted">{r.client}</p>
                <h3 className="mt-2 text-h3"><Link href={`/work/${r.slug}`} className="hover:text-accent">{r.title}</Link></h3>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CTABanner headline="Want results like these?" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: c.title,
              description: c.problem,
              url: absoluteUrl(path),
              publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.legalName },
              ...(c.gallery[0] ? { image: `${site.url}${c.gallery[0].src}` } : {}),
            },
            breadcrumbLd(crumbs, path),
          ],
        }}
      />
    </>
  );
}
