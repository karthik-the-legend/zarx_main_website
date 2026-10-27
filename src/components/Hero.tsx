import type { CSSProperties } from "react";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

const facts = [
  { value: "50+", label: "Projects delivered" },
  { value: "3×", label: "Faster deployment" },
  { value: "24h", label: "Review of new enquiries" },
];

const stages = [
  { title: "Idea & vision mapping", detail: "Strategy, market, growth goals", status: "done" },
  { title: "AI + human prompt engineering", detail: "Vision into executable specs", status: "done" },
  { title: "Design & prototype", detail: "UI/UX, 3D, motion, validation", status: "active" },
  { title: "Build & deploy", detail: "CI/CD, testing, cloud-native", status: "next" },
  { title: "Scale & upgrade", detail: "Optimise, expand, grow", status: "next" },
] as const;

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-section pt-[calc(var(--header-h)+clamp(3rem,2rem+5vw,6.5rem))]"
    >
      <div className="container-page grid items-center gap-16 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-7">
          <p className="eyebrow animate-rise-visible mb-6">AI-powered product engineering</p>

          <h1 id="hero-title" className="animate-rise-visible text-display" style={delay(60)}>
            From idea to reality.
            <span className="block text-muted">Built to scale.</span>
          </h1>

          <p className="animate-rise-visible mt-6 max-w-[34rem] text-lead text-muted" style={delay(140)}>
            ZARX Technologies combines AI-powered development, game-grade visuals and
            production-ready engineering to build web, mobile, Web3 and AI products for
            founders and future-focused businesses.
          </p>

          <div
            className="animate-rise-visible mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(220)}
          >
            <ButtonLink href="/contact" size="lg">
              Build with ZARX
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href="/solutions" size="lg" variant="secondary">
              View capabilities
            </ButtonLink>
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
            style={delay(300)}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[0.8125rem] leading-snug text-muted">{fact.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight tabular-nums sm:text-[1.75rem]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Illustrative pipeline; the Process section carries the same content accessibly. */}
        <div className="animate-rise xl:col-span-5" style={delay(200)} aria-hidden="true">
          <div className="relative isolate mx-auto max-w-lg xl:max-w-none">
            <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[1.75rem] bg-subtle sm:-inset-x-8" />
            <div className="overflow-hidden rounded-lg border border-line bg-canvas shadow-lg">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <p className="text-sm font-medium">Build pipeline</p>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                  Example project
                </span>
              </div>

              <ol className="divide-y divide-line">
                {stages.map((stage, i) => (
                  <li key={stage.title} className="flex items-center gap-4 px-5 py-3.5">
                    <span
                      className={
                        stage.status === "done"
                          ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
                          : stage.status === "active"
                            ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-white"
                            : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-xs text-muted"
                      }
                    >
                      {stage.status === "done" ? (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3.5 8.5l3 3 6-7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={
                          stage.status === "next"
                            ? "truncate text-sm font-medium text-muted"
                            : "truncate text-sm font-medium"
                        }
                      >
                        {stage.title}
                      </p>
                      <p className="truncate text-xs text-muted">{stage.detail}</p>
                      {stage.status === "active" && (
                        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-accent-soft">
                          <div className="animate-fill h-full w-3/5 rounded-full bg-accent" style={delay(700)} />
                        </div>
                      )}
                    </div>
                    <span
                      className={
                        stage.status === "done"
                          ? "hidden text-xs text-success sm:block"
                          : stage.status === "active"
                            ? "hidden text-xs font-medium text-accent sm:block"
                            : "hidden text-xs text-muted sm:block"
                      }
                    >
                      {stage.status === "done" ? "Complete" : stage.status === "active" ? "In progress" : "Queued"}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="flex items-center justify-between gap-4 bg-subtle px-5 py-3.5 text-xs text-muted">
                <span>Idea → production</span>
                <span className="tabular-nums">Stage 3 of 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
