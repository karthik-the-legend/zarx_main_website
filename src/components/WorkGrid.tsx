"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export type WorkCard = {
  slug: string;
  title: string;
  kind: string;
  client: string;
  industry: string;
  services: { slug: string; name: string }[];
  problem: string;
  result: string;
  image?: { src: string; alt: string };
  flagship?: boolean;
};

/** Reads ?service= so service pages can link straight to filtered work. */
export function WorkGridFromUrl({ cards }: { cards: WorkCard[] }) {
  const service = useSearchParams().get("service") ?? "";
  return <WorkGrid key={service} cards={cards} initialService={service} />;
}

export function WorkGrid({ cards, initialService = "" }: { cards: WorkCard[]; initialService?: string }) {
  const [service, setService] = useState(initialService);
  const [industry, setIndustry] = useState("");
  const [kind, setKind] = useState("");

  const services = Array.from(new Map(cards.flatMap((c) => c.services).map((s) => [s.slug, s])).values());
  const industries = Array.from(new Set(cards.map((c) => c.industry)));
  const kinds = Array.from(new Set(cards.map((c) => c.kind)));
  const shown = cards.filter(
    (c) => (!service || c.services.some((s) => s.slug === service)) && (!industry || c.industry === industry) && (!kind || c.kind === kind)
  );

  const filter = (label: string, value: string, set: (v: string) => void, options: { value: string; label: string }[]) =>
    options.length > 1 && (
      <label className="flex flex-col gap-1 text-sm font-medium">
        {label}
        <select value={value} onChange={(e) => set(e.target.value)} className="field cursor-pointer py-2.5">
          <option value="">All</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </label>
    );

  return (
    <>
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {filter("Service", service, setService, services.map((s) => ({ value: s.slug, label: s.name })))}
        {filter("Industry", industry, setIndustry, industries.map((i) => ({ value: i, label: i })))}
        {filter("Type", kind, setKind, kinds.map((k) => ({ value: k, label: k })))}
      </div>
      <p role="status" className="sr-only">{shown.length} case studies shown</p>
      <ul className="grid gap-6 md:grid-cols-2">
        {shown.map((c, i) => (
          <li key={c.slug} className={cn(i === 0 && c.flagship && "md:col-span-2")}>
            <Link href={`/work/${c.slug}`} className="group/card flex h-full flex-col overflow-hidden rounded-lg border border-line bg-canvas transition-colors hover:border-ink/20">
              {c.image && (
                // eslint-disable-next-line @next/next/no-img-element -- static export serves images as-is
                <img src={c.image.src} alt={c.image.alt} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              )}
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm text-muted">{c.kind} · {c.client} · {c.industry}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover/card:text-accent">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{c.problem}</p>
                <p className="mt-2 text-[0.9375rem] font-medium">{c.result}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.services.map((s) => (
                    <li key={s.slug} className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium">{s.name}</li>
                  ))}
                </ul>
                <span className="mt-auto pt-6 text-sm font-medium text-accent">Read case study →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="text-muted">No case studies match those filters yet.</p>}
    </>
  );
}
