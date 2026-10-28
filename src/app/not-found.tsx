import type { Metadata } from "next";
import Link from "next/link";
import { Home, LayoutGrid, Mail, Workflow } from "lucide-react";
import { hasWork } from "@/content/work";
import { ReportLink } from "@/components/ReportLink";
import { TrackEvent } from "@/components/ui/Analytics";

export const metadata: Metadata = {
  title: { absolute: "Page not found | ZARX" },
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  const links = [
    { href: "/", label: "Home", text: "Start from the top", icon: Home },
    { href: "/solutions", label: "Our services", text: "Six ways we build", icon: LayoutGrid },
    hasWork()
      ? { href: "/work", label: "Our work", text: "Case studies", icon: Workflow }
      : { href: "/process", label: "How we work", text: "Five stages, no surprises", icon: Workflow },
    { href: "/contact", label: "Contact us", text: "A founder replies in a day", icon: Mail },
  ];

  return (
    <div className="container-page flex min-h-[100svh] flex-col items-center justify-center pb-24 pt-[calc(var(--header-h)+3rem)] text-center">
      {/* Decorative: a pixel character walks along a broken pipeline. */}
      <svg aria-hidden="true" viewBox="0 0 320 70" className="w-full max-w-sm text-line">
        <line x1="0" y1="56" x2="155" y2="56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="205" y1="56" x2="320" y2="56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <g className="animate-walk text-accent">
          <rect x="2" y="30" width="14" height="14" fill="currentColor" />
          <rect x="5" y="34" width="3" height="3" fill="white" />
          <rect x="11" y="34" width="3" height="3" fill="white" />
          <rect x="3" y="44" width="4" height="8" fill="currentColor" />
          <rect x="11" y="44" width="4" height="8" fill="currentColor" />
        </g>
      </svg>
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="mt-4 max-w-2xl text-page">This level hasn&apos;t been built yet</h1>
      <p className="mt-5 max-w-prose text-lead text-muted">
        The page you&apos;re looking for has moved or never existed. Here&apos;s where to go instead.
      </p>
      <ul className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="flex h-full flex-col items-start rounded-lg border border-line p-5 text-left transition-colors hover:border-ink/20 hover:bg-subtle">
              <l.icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <span className="mt-4 font-semibold">{l.label}</span>
              <span className="mt-1 text-sm text-muted">{l.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ReportLink />
      </div>
      <TrackEvent event="page_404" />
    </div>
  );
}
