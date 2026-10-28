"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonStyles, ButtonArrow } from "@/components/ui/Button";

export type RouterGoal = {
  id: string;
  goal: string;
  services: { slug: string; name: string }[];
  team: string;
  timeline: string;
  price: string;
};

/** "What are you trying to do?" tabs; each reveals the recommended mix of services. */
export function GoalRouter({ goals }: { goals: RouterGoal[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const goal = goals[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const last = goals.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div role="tablist" aria-label="Your goal" aria-orientation="vertical" className="flex flex-col gap-2 lg:col-span-5">
        {goals.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`goal-tab-${g.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="goal-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "flex items-center justify-between rounded-md border px-5 py-4 text-left text-[0.9375rem] font-medium transition-colors duration-fast",
              i === active ? "border-accent bg-accent-soft text-ink" : "border-line bg-canvas text-ink hover:border-ink/20"
            )}
          >
            “{g.goal}”
            <span aria-hidden="true" className={cn("text-muted", i === active && "text-accent")}>→</span>
          </button>
        ))}
      </div>

      <div
        id="goal-panel"
        role="tabpanel"
        aria-labelledby={`goal-tab-${goal.id}`}
        className="rounded-lg border border-line bg-canvas p-7 sm:p-9 lg:col-span-7"
      >
        <p className="text-sm font-medium text-muted">Recommended</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {goal.services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent transition-colors hover:border-accent"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-muted">Who you&apos;ll work with</dt>
            <dd className="mt-1 text-[0.9375rem] leading-relaxed">{goal.team}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Typical timeline</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight">{goal.timeline}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Budget</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight">{goal.price}</dd>
          </div>
        </dl>
        <Link
          href={`/contact?service=${goal.services[0].slug}#estimate`}
          data-cta={`router_${goal.id}`}
          className={buttonStyles({ size: "lg", className: "mt-9" })}
        >
          Plan this with us
          <ButtonArrow />
        </Link>
      </div>
    </div>
  );
}
