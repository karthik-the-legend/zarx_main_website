"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Blocks, BrainCircuit, ChevronDown, Clapperboard, Gamepad2, Globe, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { cta } from "@/lib/cta";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

// Icons are mapped here so the menu data passed from the server stays serialisable.
const icons = { Globe, Gamepad2, Blocks, BrainCircuit, Palette, Clapperboard };
export type MenuService = { slug: string; name: string; line: string; icon: keyof typeof icons };

const about = [
  { label: "Why ZARX", href: "/why-zarx", text: "What makes us different, in writing" },
  { label: "Leadership", href: "/leadership", text: "The founders accountable for your product" },
  { label: "Investors & Partners", href: "/partners", text: "Partnerships and investor conversations" },
  { label: "Careers", href: "/careers", text: "Join a small, senior team" },
];

type Menu = "services" | "about" | null;

export default function Navbar({
  services,
  showWork,
  showInsights,
}: {
  services: MenuService[];
  showWork: boolean;
  showInsights: boolean;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Any completed navigation (including back/forward) closes every menu.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setMenu(null);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = isActive("/services") || isActive("/solutions");
  const aboutActive = about.some((a) => isActive(a.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop dropdowns close on Escape or a click outside the nav.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        navRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="menu-${menu}"]`)?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  // Mobile menu: lock scroll, keep focus inside, close on Escape or desktop resize.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    background.forEach((el) => el.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      background.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  const compact = scrolled && !open;
  const topLink = (href: string, label: string) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-fast",
          active ? "text-ink" : "text-muted hover:text-ink"
        )}
      >
        {label}
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-3.5 -bottom-px h-px origin-left bg-ink transition-transform duration-base ease-out",
            active ? "scale-x-100" : "scale-x-0"
          )}
        />
      </Link>
    );
  };
  const menuButton = (id: Exclude<Menu, null>, label: string, active: boolean) => (
    <button
      type="button"
      aria-expanded={menu === id}
      aria-controls={`menu-${id}`}
      onClick={() => setMenu((m) => (m === id ? null : id))}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors duration-fast",
        active || menu === id ? "text-ink" : "text-muted hover:text-ink"
      )}
    >
      {label}
      <ChevronDown
        aria-hidden="true"
        className={cn("h-3.5 w-3.5 transition-transform duration-base", menu === id && "rotate-180")}
        strokeWidth={2}
      />
    </button>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-base ease-out",
        // No backdrop blur while the mobile menu is open: it would become the
        // containing block for the fixed panel below.
        open || menu
          ? "border-line bg-canvas"
          : scrolled
            ? "border-line bg-canvas/85 shadow-xs backdrop-blur-md"
            : "border-transparent bg-canvas/0"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-[height] duration-base ease-out",
          compact ? "h-[3.75rem]" : "h-[var(--header-h)]"
        )}
      >
        <Link href="/" className="-m-2 rounded-sm p-2" aria-label="ZARX Technologies — home">
          <Logo priority />
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            <li>
              {menuButton("services", "Services", servicesActive)}
              <div
                id="menu-services"
                hidden={menu !== "services"}
                className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-lg"
              >
                <div className="container-page py-8">
                  <ul className="grid grid-cols-3 gap-2">
                    {services.map((s) => {
                      const Icon = icons[s.icon];
                      return (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group/item flex gap-4 rounded-md p-4 transition-colors hover:bg-subtle"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-canvas text-ink transition-colors group-hover/item:border-accent/30 group-hover/item:text-accent">
                              <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                            </span>
                            <span>
                              <span className="block text-[0.9375rem] font-medium">{s.name}</span>
                              <span className="mt-0.5 block text-sm leading-snug text-muted">{s.line}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-4 border-t border-line pt-5 text-sm">
                    <span className="text-muted">Not sure where to start? </span>
                    <Link href="/solutions" className="link-underline font-medium text-accent">
                      See Solutions →
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {showWork && <li>{topLink("/work", "Work")}</li>}
            <li>{topLink("/process", "Process")}</li>
            <li className="relative">
              {menuButton("about", "About", aboutActive)}
              <div
                id="menu-about"
                hidden={menu !== "about"}
                className="absolute left-0 top-[calc(100%+0.75rem)] w-80 rounded-lg border border-line bg-canvas p-2 shadow-lg"
              >
                <ul>
                  {about.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        aria-current={isActive(a.href) ? "page" : undefined}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-subtle"
                      >
                        <span className="block text-[0.9375rem] font-medium">{a.label}</span>
                        <span className="mt-0.5 block text-sm text-muted">{a.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {showInsights && <li>{topLink("/insights", "Insights")}</li>}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.estimate.href}
            data-cta="header_estimate"
            className="hidden px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink xl:inline-block"
          >
            {cta.estimate.short}
          </Link>
          <ButtonLink href={cta.book.href} data-cta="header_book" className="hidden sm:inline-flex">
            {cta.book.short}
          </ButtonLink>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-subtle lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-[1.125rem]">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-base ease-out",
                  open && "translate-y-[5.25px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-base ease-out",
                  open && "-translate-y-[5.25px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu. Visibility is a class, not the `hidden` attribute: the
          `flex` utility would override the attribute and keep it on screen. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--header-h)] flex-col bg-canvas lg:hidden",
          open ? "flex" : "hidden"
        )}
      >
        <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto pb-6 pt-2">
          <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Services</p>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug} className="animate-rise" style={{ "--delay": `${i * 30}ms` } as React.CSSProperties}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3.5 text-lg font-medium tracking-tight",
                    isActive(`/services/${s.slug}`) ? "text-accent" : "text-ink"
                  )}
                >
                  {s.name}
                  <span aria-hidden="true" className="text-muted">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solutions" onClick={() => setOpen(false)} className="block py-3.5 text-[0.9375rem] font-medium text-accent">
                Not sure where to start? See Solutions
              </Link>
            </li>
          </ul>

          <ul className="mt-2 divide-y divide-line border-b border-line">
            {[
              showWork && { href: "/work", label: "Work" },
              { href: "/process", label: "Process" },
              showInsights && { href: "/insights", label: "Insights" },
            ]
              .filter((l): l is { href: string; label: string } => Boolean(l))
              .map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3.5 text-lg font-medium tracking-tight",
                      isActive(l.href) ? "text-accent" : "text-ink"
                    )}
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-muted">→</span>
                  </Link>
                </li>
              ))}
          </ul>

          <p className="pb-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">About</p>
          <ul className="divide-y divide-line border-y border-line">
            {about.map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3.5 text-lg font-medium tracking-tight",
                    isActive(a.href) ? "text-accent" : "text-ink"
                  )}
                >
                  {a.label}
                  <span aria-hidden="true" className="text-muted">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-page border-t border-line bg-canvas py-4">
          <ButtonLink href={cta.book.href} size="lg" data-cta="mobile_book" className="w-full" onClick={() => setOpen(false)}>
            {cta.book.label}
          </ButtonLink>
          <Link
            href={cta.estimate.href}
            onClick={() => setOpen(false)}
            data-cta="mobile_estimate"
            className="mt-3 block text-center text-sm font-medium text-accent"
          >
            {cta.estimate.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
