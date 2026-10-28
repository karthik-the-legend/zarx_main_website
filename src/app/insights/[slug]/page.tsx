import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { articles } from "@/content/insights";
import { leaders } from "@/content/leaders";
import { getService } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { CheckList, FaqList } from "@/components/ui/Lists";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/ui/JsonLd";
import CTABanner from "@/components/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/** Static export needs at least one path; with no articles yet, a placeholder renders the 404 page. */
export function generateStaticParams() {
  return articles.length ? articles.map((a) => ({ slug: a.slug })) : [{ slug: "coming-soon" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return { title: "Article", robots: { index: false } };
  return pageMetadata({ title: `${a.title} | ZARX Insights`, description: a.summary.join(" "), path: `/insights/${a.slug}` });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const path = `/insights/${a.slug}`;
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: a.category }];
  const author = leaders.find((l) => l.name === a.author);
  const service = getService(a.relatedService);
  const date = new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={a.category} title={a.title} lead={`${date} · ${a.readingMinutes} min read`} />
      <Section labelledBy="article-body">
        <article className="mx-auto max-w-3xl">
          <h2 id="article-body" className="sr-only">Article</h2>
          <div className="flex items-center gap-4">
            {author && (
              <Image src={author.image} alt="" placeholder="blur" sizes="48px" className="h-12 w-12 rounded-full object-cover object-[center_20%]" />
            )}
            <p className="text-sm">
              <span className="font-medium">{a.author}</span>
              {author && <span className="block text-muted">{author.role} · <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">LinkedIn</a></span>}
            </p>
          </div>

          <aside className="mt-10 rounded-lg border border-line bg-subtle p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">In short</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.9375rem]">
              {a.summary.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </aside>

          {a.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-[1.0625rem] leading-relaxed">{p}</p>
              ))}
            </section>
          ))}

          <section className="mt-12 rounded-lg border border-line p-6">
            <h2 className="text-lg font-semibold">Key takeaways</h2>
            <CheckList items={a.takeaways} className="mt-4" />
          </section>

          {a.faqs && a.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight">Questions readers ask</h2>
              <FaqList items={a.faqs} className="mt-6" />
            </section>
          )}

          {service && (
            <div className="mt-12 rounded-lg bg-accent-soft p-6">
              <p className="font-semibold">{service.card.headline}</p>
              <p className="mt-1 text-[0.9375rem] text-muted">{service.card.line}</p>
              <ArrowLink href={`/services/${service.slug}`} className="mt-4">Explore {service.name}</ArrowLink>
            </div>
          )}
          <p className="mt-10 text-sm"><Link href="/insights" className="text-accent">← All insights</Link></p>
        </article>
      </Section>
      <CTABanner />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: a.title,
              description: a.summary.join(" "),
              datePublished: a.date,
              url: absoluteUrl(path),
              author: { "@type": "Person", name: a.author, ...(author ? { sameAs: [author.linkedin.split("?")[0]] } : {}) },
              publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.legalName },
              inLanguage: "en-IN",
            },
            breadcrumbLd(crumbs, path),
            ...(a.faqs?.length ? [faqLd(a.faqs)] : []),
          ],
        }}
      />
    </>
  );
}
