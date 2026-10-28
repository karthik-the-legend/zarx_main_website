import type { CSSProperties } from "react";

export type Metric = { value: string; label: string; note: string };

/** Big number, label, and a footnote saying exactly what it counts (proof rules). */
export function MetricCards({ items }: { items: Metric[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {items.map((m, i) => (
        <li
          key={m.label}
          data-reveal
          style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
          className="rounded-lg border border-line bg-canvas p-7"
        >
          <p className="text-[2.75rem] font-semibold leading-none tracking-tight tabular-nums">{m.value}</p>
          <p className="mt-3 font-medium">{m.label}</p>
          <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">{m.note}</p>
        </li>
      ))}
    </ul>
  );
}
