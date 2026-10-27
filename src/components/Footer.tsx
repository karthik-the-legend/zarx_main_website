import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";

const columns = [
  {
    title: "Solutions",
    links: services.map((s) => ({ label: s.short, href: `/solutions/${s.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Why ZARX", href: "/why-zarx" },
      { label: "Leadership", href: "/leadership" },
      { label: "Investors & partners", href: "/investors" },
      { label: "Our process", href: "/process" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Start a project", href: "/contact" },
      { label: "All solutions", href: "/solutions" },
      { label: "FAQ", href: "/contact#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-night text-night-fg">
      <div className="container-page">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="ZARX Technologies — home" className="inline-block">
              <Logo tone="light" className="w-[6.5rem]" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-night-muted">
              {site.legalName} — turning ideas into real-time digital experiences using AI,
              design and engineering. Based in {site.location.city}, building for the world.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-6 inline-block text-sm font-medium text-night-fg"
            >
              {site.email}
            </a>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
              <h2 className="text-sm font-medium text-night-fg">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-night-muted transition-colors duration-fast hover:text-night-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </p>
          <a href="#main" className="inline-flex items-center gap-1.5 transition-colors hover:text-night-fg">
            Back to top
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 13V3M4 7l4-4 4 4" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
