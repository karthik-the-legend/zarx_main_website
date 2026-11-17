import type { CSSProperties } from "react";
import { Clock3, FileLock2, Gauge } from "lucide-react";
import { facts } from "@/content/facts";
import { categories } from "@/content/categories";
import { servicesIn } from "@/content/services";
import { cta, secondaryCta } from "@/lib/cta";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { DraftTag } from "@/components/ui/Draft";

/** Shorter names so the decorative card stays compact. */
const shortNames: Record<string, string> = {
  "fundraising-sponsorship": "Fundraising & Sponsorship",
  "mobile-gaming": "Mobile & Games",
  "ai-automation": "AI & Automation",
  "animation": "Animation",
};

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const secondary = secondaryCta();
  const microProof = [
    facts.stats.firstDemoLine && { icon: Gauge, text: facts.stats.firstDemoLine },
    { icon: Clock3, text: "A founder replies within 1 working day" },
    { icon: FileLock2, text: "NDA on request" },
  ].filter(Boolean) as { icon: typeof Gauge; text: string }[];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-[clamp(3.5rem,2.5rem+4vw,6rem)] pt-[calc(var(--header-h)+clamp(3rem,2rem+5vw,6rem))]"
    >
      <div className="container-page grid items-center gap-16 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-7">
          {/* Final hero copy is coming from ZARX; this follows the brief's suggested direction. */}
          <p className="eyebrow animate-rise-visible mb-6">
            Business &amp; technology consultancy
            <DraftTag />
          </p>

          <h1 id="hero-title" className="animate-rise-visible text-display" style={delay(60)}>
            Business growth and technology,
            <span className="block text-muted">under one roof.</span>
          </h1>

          <p className="animate-rise-visible mt-6 max-w-[38rem] text-lead text-muted" style={delay(140)}>
            We help brands and founders grow – with digital and influencer marketing, fundraising and
            brand partnerships – and build the web, mobile, AI and Web3 products behind that growth.
            Senior people lead every project, and you own everything we make.
          </p>

          <div className="animate-rise-visible mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(220)}>
            <ButtonLink href={cta.book.href} size="lg" data-cta="hero_book">
              {cta.book.label}
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href={secondary.href} size="lg" variant="secondary" data-cta="hero_secondary">
              {secondary.label}
            </ButtonLink>
          </div>

          <ul className="animate-rise mt-9 flex flex-col gap-x-6 gap-y-2.5 text-sm text-muted sm:flex-row sm:flex-wrap" style={delay(300)}>
            {microProof.map((item) => (
              <li key={item.text} className="flex items-center gap-2">
                <item.icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.75} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative summary of the two practices; the next section lists them for assistive tech. */}
        <div className="animate-rise xl:col-span-5" style={delay(200)} aria-hidden="true">
          <div className="relative isolate mx-auto max-w-lg xl:max-w-none">
            <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[1.75rem] bg-subtle sm:-inset-x-8" />
            <div className="overflow-hidden rounded-lg border border-line bg-canvas shadow-lg">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <p className="text-sm font-medium">One team, two practices</p>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">Grow + Build</span>
              </div>
              <div className="divide-y divide-line">
                {categories.map((c, ci) => (
                  <div key={c.key} className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="animate-pop flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-canvas text-accent"
                        style={delay(600 + ci * 420)}
                      >
                        <c.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{c.name}</p>
                        <p className="text-xs text-muted">{c.verb}</p>
                      </div>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {servicesIn(c.key).map((s, i) => (
                        <li
                          key={s.slug}
                          className="animate-pop rounded-full bg-subtle px-2.5 py-1 text-xs font-medium"
                          style={delay(700 + ci * 420 + i * 70)}
                        >
                          {shortNames[s.slug] ?? s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="bg-subtle px-5 py-3.5 text-xs text-muted">One senior lead coordinates both sides of your project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
