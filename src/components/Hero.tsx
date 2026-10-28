import type { CSSProperties } from "react";
import { Clock3, FileLock2, Gauge } from "lucide-react";
import { facts } from "@/content/facts";
import { cta, secondaryCta } from "@/lib/cta";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

const stages = [
  { title: "Idea", detail: "Scope, users and success metrics", ai: false },
  { title: "Design", detail: "Flows, UI and user tests", ai: true },
  { title: "Build", detail: "Weekly sprints and live demos", ai: true },
  { title: "Launch", detail: "Security review, release, monitoring", ai: false },
  { title: "Scale", detail: "Analytics, new features, live ops", ai: false },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const secondary = secondaryCta();
  const microProof = [
    facts.stats.firstDemoLine && { icon: Gauge, text: facts.stats.firstDemoLine },
    { icon: Clock3, text: "A founder replies within 1 working day" },
    { icon: FileLock2, text: "NDA on request" },
  ].filter(Boolean) as { icon: typeof Gauge; text: string }[];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-[clamp(3.5rem,2.5rem+4vw,6rem)] pt-[calc(var(--header-h)+clamp(3rem,2rem+5vw,6rem))]"
    >
      <div className="container-page grid items-center gap-16 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-7">
          <p className="eyebrow animate-rise-visible mb-6">AI-accelerated product studio</p>

          <h1 id="hero-title" className="animate-rise-visible text-display" style={delay(60)}>
            From idea to reality.
            <span className="block text-muted">Built to scale.</span>
          </h1>

          <p className="animate-rise-visible mt-6 max-w-[36rem] text-lead text-muted" style={delay(140)}>
            We design, build and launch web, mobile, game, Web3 and AI products for founders and
            growing businesses. Senior engineers lead every build; AI handles the repetitive work,
            so you reach a working product sooner. You own every line of code.
          </p>

          <div className="animate-rise-visible mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(220)}>
            <ButtonLink href={cta.book.href} size="lg" data-cta="hero_book">
              {cta.book.label}
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href={secondary.href} size="lg" variant="secondary" data-cta="hero_secondary">
              {secondary.label}
            </ButtonLink>
          </div>

          <ul className="animate-rise mt-9 flex flex-col gap-x-6 gap-y-2.5 text-sm text-muted sm:flex-row sm:flex-wrap" style={delay(300)}>
            {microProof.map((item) => (
              <li key={item.text} className="flex items-center gap-2">
                <item.icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.75} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative pipeline; the process section describes the same stages for assistive tech. */}
        <div className="animate-rise xl:col-span-5" style={delay(200)} aria-hidden="true">
          <div className="relative isolate mx-auto max-w-lg xl:max-w-none">
            <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[1.75rem] bg-subtle sm:-inset-x-8" />
            <div className="overflow-hidden rounded-lg border border-line bg-canvas shadow-lg">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <p className="text-sm font-medium">Idea → production</p>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">How a build moves</span>
              </div>
              <ol className="relative px-5 py-2">
                <span className="absolute bottom-7 left-[2.125rem] top-7 w-px bg-line" />
                <span
                  className="animate-grow-y absolute bottom-7 left-[2.125rem] top-7 w-px origin-top bg-accent"
                  style={delay(600)}
                />
                {stages.map((stage, i) => (
                  <li key={stage.title} className="relative flex items-center gap-4 py-3">
                    <span
                      className="animate-pop relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-canvas text-xs font-medium text-accent"
                      style={delay(600 + i * 180)}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{stage.title}</p>
                      <p className="truncate text-xs text-muted">{stage.detail}</p>
                    </div>
                    {stage.ai && (
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">AI-assisted</span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="bg-subtle px-5 py-3.5 text-xs text-muted">A senior engineer reviews every AI-assisted step.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
