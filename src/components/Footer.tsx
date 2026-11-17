import Link from "next/link";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";
import { facts } from "@/content/facts";
import { categories } from "@/content/categories";
import { serviceHref, servicesIn } from "@/content/services";
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

const linkClass = "text-sm text-night-muted transition-colors duration-fast hover:text-night-fg";

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a href={link.href} className={`break-all ${linkClass}`}>
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const privacyEmail = facts.grievanceOfficer?.email ?? site.email;
  const serviceGroups = categories.map((c) => ({
    title: c.name,
    href: `/services/${c.slug}`,
    links: servicesIn(c.key).map((s) => ({ label: s.name, href: serviceHref(s) })),
  }));
  const company: FooterLink[] = [
    { label: "Why ZARX", href: "/why-zarx" },
    { label: "Process", href: "/process" },
    { label: "Investors & Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
  ];
  const resources: FooterLink[] = [
    ...(hasWork() ? [{ label: "Work", href: "/work" }] : []),
    ...(hasInsights() ? [{ label: "Insights", href: "/insights" }] : []),
    { label: "Solutions", href: "/solutions" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Trust Center", href: "/trust" },
  ];
  const contact: FooterLink[] = [
    { label: site.email, href: `mailto:${site.email}`, external: true },
    ...(facts.phone ? [{ label: facts.phone, href: `tel:${facts.phone.replace(/\s/g, "")}`, external: true }] : []),
    ...(facts.whatsapp ? [{ label: "WhatsApp", href: `https://wa.me/${facts.whatsapp}`, external: true }] : []),
    { label: `${site.location.city}, ${site.location.country}`, href: "/contact" },
    { label: cta.book.short, href: cta.book.href },
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
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/" aria-label="ZARX Technologies — home" className="inline-block">
              <Logo tone="light" className="w-[6.5rem]" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-night-muted">{site.promise}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-night-muted">
              A founder-led consultancy in {site.location.city}.
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

          <nav aria-label="Services" className="sm:col-span-2 lg:col-span-5">
            <h2 className="text-sm font-medium text-night-fg">Services</h2>
            <div className="mt-4 grid gap-8 sm:grid-cols-2">
              {serviceGroups.map((g) => (
                <div key={g.title}>
                  <h3>
                    <Link
                      href={g.href}
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-night-muted transition-colors duration-fast hover:text-night-fg"
                    >
                      {g.title}
                    </Link>
                  </h3>
                  <LinkList links={g.links} />
                </div>
              ))}
            </div>
          </nav>

          <div className="space-y-10 lg:col-span-2">
            <nav aria-label="Company">
              <h2 className="text-sm font-medium text-night-fg">Company</h2>
              <LinkList links={company} />
            </nav>
            <nav aria-label="Resources">
              <h2 className="text-sm font-medium text-night-fg">Resources</h2>
              <LinkList links={resources} />
            </nav>
          </div>

          <nav aria-label="Contact" className="lg:col-span-2">
            <h2 className="text-sm font-medium text-night-fg">Contact</h2>
            <LinkList links={contact} />
          </nav>
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
