import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { articles } from "@/content/insights";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Insights: Building, Launching & Scaling Products | ZARX",
  description:
    "Practical guides on building, launching and scaling digital products – MVP costs, AI pilots, mobile and games, Web3 and design – from the people who build them.",
  path: "/insights",
  image: "/og/insights.png",
  noindex: articles.length === 0,
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Insights" }];
const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Insights"
        title="Notes from the build floor"
        lead="Practical guides on building, launching and scaling digital products – written by the people who build them."
      />
      <Section labelledBy="articles-title">
        <h2 id="articles-title" className="sr-only">Articles</h2>
        {sorted.length ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((a) => (
              <li key={a.slug} className="flex flex-col rounded-lg border border-line p-7">
                <p className="text-sm font-medium text-accent">{a.category}</p>
                <h3 className="mt-2 text-h3">
                  <Link href={`/insights/${a.slug}`} className="hover:text-accent">{a.title}</Link>
                </h3>
                <p className="mt-3 text-[0.9375rem] text-muted">{a.summary[0]}</p>
                <p className="mt-auto pt-5 text-sm text-muted">
                  {a.author} · <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingMinutes} min read
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p data-reveal className="max-w-2xl rounded-lg border border-line bg-subtle p-8 text-lead text-muted">
            Our first guides are on the way. Until then, the FAQs on each service page answer the questions we hear
            most – from what an MVP costs to how we measure an AI pilot.
          </p>
        )}
      </Section>
      <CTABanner />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/insights") }} />
    </>
  );
}
