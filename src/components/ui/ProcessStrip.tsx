import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { processSteps } from "@/content/company";
import { withFacts } from "@/content/engagements";

type Step = { title: string; meta?: string; text?: string; tag?: string };

/** Numbered steps: horizontal on desktop, vertical on mobile. */
export function Timeline({ steps, tone = "default" }: { steps: Step[]; tone?: "default" | "dark" }) {
  const dark = tone === "dark";
  const cols = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6" }[steps.length] ?? "lg:grid-cols-5";
  return (
    <ol className={cn("grid lg:gap-8", cols)}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li
            key={`${step.title}-${i}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0"
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-0 left-5 top-12 w-px lg:left-14 lg:right-[-2rem] lg:top-5 lg:h-px lg:w-auto",
                  dark ? "bg-white/10" : "bg-line"
                )}
              />
            )}
            <span
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium tabular-nums",
                dark ? "border-white/15 bg-night-raised text-night-fg" : "border-line bg-canvas text-ink"
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1.5 lg:pt-8">
              {step.meta && (
                <p className={cn("text-sm font-medium", dark ? "text-night-accent" : "text-accent")}>{step.meta}</p>
              )}
              <h3 className={cn("text-h3", step.meta && "mt-1", dark && "text-night-fg")}>{step.title}</h3>
              {step.text && (
                <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", dark ? "text-night-muted" : "text-muted")}>
                  {step.text}
                </p>
              )}
              {step.tag && (
                <span
                  className={cn(
                    "mt-3 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
                    dark ? "bg-white/10 text-night-fg" : "bg-accent-soft text-accent"
                  )}
                >
                  {step.tag}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** The five ZARX stages with durations (Home snapshot, service pages, Process overview). */
export function ProcessStrip({ tone = "default", detailed = false }: { tone?: "default" | "dark"; detailed?: boolean }) {
  return (
    <Timeline
      tone={tone}
      steps={processSteps.map((s) => ({
        title: s.title,
        meta: s.duration,
        text: detailed ? withFacts(s.happens) : s.key === "build" ? "A live demo every week." : undefined,
        tag: s.ai ? "AI-assisted" : undefined,
      }))}
    />
  );
}
