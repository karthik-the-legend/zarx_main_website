"use client";

import { createContext, useContext, useId, useRef, useState, type ReactNode } from "react";
import type { CategoryKey } from "@/content/categories";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const views: { key: CategoryKey; label: string }[] = [
  { key: "business", label: "Business" },
  { key: "technology", label: "Technology" },
];

const ViewContext = createContext<{ view: CategoryKey; setView: (v: CategoryKey) => void; id: string } | null>(null);

function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("ViewTabs and ViewPanel must sit inside a ViewSwitch.");
  return ctx;
}

/** Shares one Business | Technology choice across several sections, so their tabs stay in step. */
export function ViewSwitch({ initial = "business", children }: { initial?: CategoryKey; children: ReactNode }) {
  const [view, setView] = useState<CategoryKey>(initial);
  const id = useId();
  return <ViewContext.Provider value={{ view, setView, id }}>{children}</ViewContext.Provider>;
}

/** Business | Technology tabs for one section; `name` ties them to that section's panels. */
export function ViewTabs({ name, label, tone = "default" }: { name: string; label: string; tone?: "default" | "dark" }) {
  const { view, setView, id } = useView();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const dark = tone === "dark";

  const choose = (key: CategoryKey) => {
    if (key === view) return;
    setView(key);
    track("view_toggle", { view: key, section: name });
  };
  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? views.length - 1 : (i + (e.key === "ArrowRight" ? 1 : -1) + views.length) % views.length;
    choose(views[next].key);
    tabs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn("inline-flex rounded-full border p-1", dark ? "border-white/15 bg-white/5" : "border-line bg-canvas")}
    >
      {views.map((v, i) => {
        const selected = v.key === view;
        return (
          <button
            key={v.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`${id}-${name}-tab-${v.key}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${id}-${name}-${v.key}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => choose(v.key)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-fast",
              selected
                ? dark
                  ? "bg-night-fg text-night"
                  : "bg-ink text-white"
                : dark
                  ? "text-night-muted hover:text-night-fg"
                  : "text-muted hover:text-ink"
            )}
          >
            {v.label}
          </button>
        );
      })}
    </div>
  );
}

/** Content for one view of a section; hidden (but still in the page) while the other view is chosen. */
export function ViewPanel({ name, view, children }: { name: string; view: CategoryKey; children: ReactNode }) {
  const ctx = useView();
  return (
    <div
      role="tabpanel"
      id={`${ctx.id}-${name}-${view}`}
      aria-labelledby={`${ctx.id}-${name}-tab-${view}`}
      hidden={ctx.view !== view}
    >
      {children}
    </div>
  );
}
