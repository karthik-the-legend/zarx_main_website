import { cn } from "@/lib/utils";

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("h-4 w-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

/** Bulleted list with check marks, for deliverables and benefits. */
export function CheckList({
  items,
  tone = "default",
  className,
}: {
  items: string[];
  tone?: "default" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-[0.9375rem] leading-relaxed",
            tone === "dark" ? "text-night-fg" : "text-ink"
          )}
        >
          <CheckIcon className={cn("mt-1", tone === "dark" ? "text-night-accent" : "text-accent")} />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Accessible FAQ built on native <details>; animates where the browser supports it. */
export function FaqList({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((faq) => (
        <details key={faq.question} className="faq-item border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-medium tracking-tight transition-colors hover:text-accent">
            {faq.question}
            <span
              aria-hidden="true"
              className="faq-icon relative h-4 w-4 shrink-0 text-muted transition-transform duration-base ease-out"
            >
              <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
            </span>
          </summary>
          <p className="max-w-prose pb-6 pr-10 text-[0.9375rem] leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Small pill tags, e.g. for technologies. */
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-canvas px-3 py-1 text-[0.8125rem] text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
