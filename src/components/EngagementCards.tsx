import type { CSSProperties } from "react";
import { engagements, priceLine, withFacts } from "@/content/engagements";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/Lists";
import { cn } from "@/lib/utils";

/** Engagement-model cards: name, best for, duration, starting price, what's included, CTA. */
export function EngagementCards({ ids, service }: { ids: string[]; service?: string }) {
  const items = ids.map((id) => engagements[id]).filter(Boolean);
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2", items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
      {items.map((e, i) => {
        const query = new URLSearchParams({ engagement: e.id, ...(service ? { service } : {}) });
        return (
          <li
            key={e.id}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
            className="flex flex-col rounded-lg border border-line bg-canvas p-6 sm:p-7"
          >
            <p className="text-sm font-medium text-accent">{e.duration}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{e.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Best for: {e.bestFor}</p>
            <p className="mt-5 border-t border-line pt-5 text-lg font-semibold tracking-tight">{priceLine(e.id)}</p>
            <CheckList items={e.includes.map(withFacts)} className="mt-5 space-y-2.5 [&_li]:text-sm" />
            <div className="mt-auto pt-7">
              <ButtonLink
                href={`/contact?${query.toString()}#estimate`}
                variant="secondary"
                className="w-full"
                data-cta={`engagement_${e.id}`}
              >
                Plan this with us
              </ButtonLink>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
