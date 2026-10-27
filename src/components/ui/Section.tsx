import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "subtle" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-canvas text-ink",
  subtle: "bg-subtle text-ink",
  dark: "on-dark bg-night text-night-fg",
};

export function Section({
  id,
  tone = "default",
  className,
  labelledBy,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-section", tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "split",
  tone = "default",
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** "split" puts the description beside the title on large screens. */
  align?: "split" | "start" | "center";
  tone?: Tone;
  className?: string;
}) {
  const mutedText = tone === "dark" ? "text-night-muted" : "text-muted";

  return (
    <header
      data-reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "split" && "grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 id={id} className="text-h2">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "text-lead",
            mutedText,
            align === "split" && "max-w-prose lg:col-span-5 lg:pb-1",
            align === "start" && "mt-5 max-w-prose",
            align === "center" && "mx-auto mt-5 max-w-prose"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
