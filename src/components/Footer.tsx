import Link from "next/link";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";
import { facts } from "@/content/facts";
import { services } from "@/content/services";
import { hasWork } from "@/content/work";
import { hasInsights } from "@/content/insights";
import { Logo } from "@/components/ui/Logo";

type FooterLink = { label: string; href: string; external?: boolean };

const socialLabels: Record<keyof typeof facts.socials, string> = {
  linkedin: "LinkedIn",
  x: "X",
  instagram: "Instagram",
  github: "GitHub",
  behance: "Behance",
};

export default function Footer() {
  const privacyEmail = facts.grievanceOfficer?.email ?? site.email;
  const columns: { title: string; links: FooterLink[] }[] = [
    { title: "Services", links: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
    {
      title: "Company",
      links: [
        { label: "Why ZARX", href: "/why-zarx" },
        { label: "Process", href: "/process" },
        { label: "Leadership", href: "/leadership" },
        { label: "Investors & Partners", href: "/partners" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        ...(hasWork() ? [{ label: "Work", href: "/work" }] : []),
        ...(hasInsights() ? [{ label: "Insights", href: "/insights" }] : []),
        { label: "Solutions", href: "/solutions" },
        { label: "FAQs", href: "/contact#faq" },
        { label: "Trust Center", href: "/trust" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: site.email, href: `mailto:${site.email}`, external: true },
        ...(facts.phone ? [{ label: facts.phone, href: `tel:${facts.phone.replace(/\s/g, "")}`, external: true }] : []),
        ...(facts.whatsapp ? [{ label: "WhatsApp", href: `https://wa.me/${facts.whatsapp}`, external: true }] : []),
        { label: `${site.location.city}, ${site.location.country}`, href: "/contact" },
        { label: cta.book.short, href: cta.book.href },
      ],
    },
  ];
  const legalParts = [
    site.legalName,
    facts.cin && `CIN ${facts.cin}`,
    facts.gstin && `GSTIN ${facts.gstin}`,
    facts.registeredOffice ? `Registered office: ${facts.registeredOffice}` : site.location.city,
  ].filter(Boolean);
  const socials = (Object.keys(facts.socials) as (keyof typeof facts.socials)[]).filter((k) => facts.socials[k]);

  return (
    <footer className="on-dark border-t border-white/10 bg-night text-night-fg">
      <div className="container-page">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="ZARX Technologies — home" className="inline-block">
              <Logo tone="light" className="w-[6.5rem]" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-night-muted">{site.promise}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-night-muted">
              A founder-led product studio in {site.location.city}.
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {socials.map((k) => (
                  <li key={k}>
                    <a href={facts.socials[k]!} target="_blank" rel="noopener noreferrer" className="text-night-muted hover:text-night-fg">
                      {socialLabels[k]}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <h2 className="text-sm font-medium text-night-fg">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} className="break-all text-sm text-night-muted transition-colors duration-fast hover:text-night-fg">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-night-muted transition-colors duration-fast hover:text-night-fg">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="space-y-4 border-t border-white/10 py-6 text-xs text-night-muted">
          <p>{legalParts.join(" | ")}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy" className="hover:text-night-fg">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-night-fg">Terms of Use</Link></li>
            <li><Link href="/cookies" className="hover:text-night-fg">Cookie Notice</Link></li>
            <li><Link href="/trust" className="hover:text-night-fg">Trust Center</Link></li>
            <li>
              <a href={`mailto:${privacyEmail}`} className="hover:text-night-fg">
                Data & grievance contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
            <a href="#main" className="inline-flex items-center gap-1.5 transition-colors hover:text-night-fg">
              Back to top
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 13V3M4 7l4-4 4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
