import { Suspense } from "react";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { faqs } from "@/content/company";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/Lists";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/ui/JsonLd";
import ContactForm, { ContactFormFromUrl, type Topic } from "@/components/ContactForm";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with ZARX Technologies. Tell us about your idea — we review every enquiry within 24 hours and follow up with a tailored roadmap and proposal.",
  path: "/contact",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Contact" }];

const topics: Topic[] = [
  ...services.map((s) => ({ value: s.slug, label: s.short })),
  { value: "partnership", label: "Investment or partnership" },
  { value: "other", label: "Something else" },
];

const nextSteps = [
  "We review your project within 24 hours.",
  "A senior team member reaches out for discovery.",
  "You receive a tailored roadmap and proposal.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Start building"
        title="Let's build something extraordinary."
        lead="Whether you're a founder with a napkin sketch or a CEO planning a digital transformation — we're ready to talk. Tell us a little about your project and we'll take it from there."
      />

      <Section tone="subtle" labelledBy="form-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-canvas p-6 shadow-sm sm:p-8">
              <h2 id="form-title" className="text-xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <p className="mb-7 mt-1 text-sm text-muted">
                A few details help us come back with the right people and a useful first answer.
              </p>
              <Suspense fallback={<ContactForm topics={topics} />}>
                <ContactFormFromUrl topics={topics} />
              </Suspense>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <h2 className="text-sm font-semibold">Contact details</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-canvas">
                  <Mail aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a href={`mailto:${site.email}`} className="link-underline break-all font-medium hover:text-accent">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-canvas">
                  <MapPin aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-sm text-muted">Headquarters</p>
                  <p className="font-medium">
                    {site.location.city}, {site.location.country}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-sm font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-white">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-[0.9375rem] leading-relaxed text-ink">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="faq" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header data-reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 id="faq-title" className="text-h2">
              Questions, answered.
            </h2>
            <p className="mt-5 text-lead text-muted">
              Anything else?{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-ink">
                Email us
              </a>
              .
            </p>
          </header>
          <FaqList items={faqs} className="lg:col-span-8" />
        </div>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [breadcrumbLd(crumbs, "/contact"), faqLd(faqs)],
        }}
      />
    </>
  );
}
