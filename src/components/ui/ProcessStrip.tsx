import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { processSteps } from "@/content/company";

/** The five ZARX stages as a compact timeline: horizontal on desktop, vertical on mobile. */
export function ProcessStrip({ tone = "default" }: { tone?: "default" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="grid lg:grid-cols-5 lg:gap-8">
      {processSteps.map((step, i) => {
        const isLast = i === processSteps.length - 1;
        return (
          <li
            key={step.title}
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
              <h3 className={cn("text-h3", dark && "text-night-fg")}>{step.title}</h3>
              <p
                className={cn(
                  "mt-2.5 text-[0.9375rem] leading-relaxed",
                  dark ? "text-night-muted" : "text-muted"
                )}
              >
                {step.summary}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
