import { FileLock2, KeyRound, ShieldCheck, Star, UserCheck } from "lucide-react";
import { facts } from "@/content/facts";
import { cn } from "@/lib/utils";

const builtWith = ["Next.js", "React Native", "Flutter", "Unity", "Node.js", "Python", "Solidity", "OpenAI", "Anthropic", "AWS", "Figma"];

/**
 * Trust strip under heroes. Only real slots render: review ratings and the
 * DPIIT badge appear once they exist in facts.ts. Client logos are added here
 * only with written permission.
 */
export function TrustStrip({ showTech = true, className }: { showTech?: boolean; className?: string }) {
  const items = [
    ...facts.reviews.map((r) => ({ icon: Star, text: `${r.site} ${r.rating}`, href: r.url })),
    ...(facts.dpiitNumber ? [{ icon: ShieldCheck, text: "DPIIT-recognised startup", href: undefined }] : []),
    { icon: FileLock2, text: "NDA on request", href: undefined },
    { icon: KeyRound, text: "100% IP and code ownership", href: undefined },
    { icon: UserCheck, text: "Senior engineers on every build", href: undefined },
  ];

  return (
    <section aria-label="Why teams trust ZARX" className={cn("border-y border-line bg-subtle", className)}>
      <div className="container-page py-6">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium">
          {items.map((item) => (
            <li key={item.text} className="flex items-center gap-2">
              <item.icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.75} />
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
        {showTech && (
          <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-line pt-4 text-sm text-muted">
            <span className="mr-2 text-xs font-semibold uppercase tracking-[0.12em]">Built with</span>
            {builtWith.map((t, i) => (
              <span key={t}>
                {t}
                {i < builtWith.length - 1 && <span aria-hidden="true" className="ml-2 text-line">·</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
