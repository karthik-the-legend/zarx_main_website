import type { ReactNode } from "react";
import { withFacts } from "@/content/engagements";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/Lists";
import { JsonLd, faqLd } from "@/components/ui/JsonLd";

/** FAQ block with FAQPage schema. Answers are written as complete 40–80 word replies. */
export function FaqSection({
  items,
  title = "Questions, answered.",
  intro,
  tone = "default",
  id = "faq",
}: {
  items: { question: string; answer: string }[];
  title?: string;
  intro?: ReactNode;
  tone?: "default" | "subtle";
  id?: string;
}) {
  const faqs = items.map((f) => ({ question: f.question, answer: withFacts(f.answer) }));
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <header data-reveal className="lg:col-span-4">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 id={`${id}-title`} className="text-h2">
            {title}
          </h2>
          {intro && <p className="mt-5 text-lead text-muted">{intro}</p>}
        </header>
        <FaqList items={faqs} className="lg:col-span-8" />
      </div>
      <JsonLd data={{ "@context": "https://schema.org", ...faqLd(faqs) }} />
    </Section>
  );
}
