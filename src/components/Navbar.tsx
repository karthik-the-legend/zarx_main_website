"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A completed navigation (including back/forward) always closes the mobile menu.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Mobile menu: lock scroll, move focus in, close on Escape or desktop resize.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    // Keep keyboard focus inside the menu while the page behind it is covered.
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-base ease-out",
        // No backdrop blur while open: it would become the containing block
        // for the fixed mobile panel below.
        open
          ? "border-line bg-canvas"
          : scrolled
            ? "border-line bg-canvas/85 shadow-xs backdrop-blur-md"
            : "border-transparent bg-canvas/0"
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="-m-2 rounded-sm p-2" aria-label="ZARX Technologies — home">
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-fast",
                      active ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-px h-px origin-left bg-ink transition-transform duration-base ease-out",
                        active ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Build with ZARX
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto bg-canvas lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex min-h-full flex-col pb-8 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            <li className="animate-rise">
              <Link
                ref={firstLinkRef}
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-xl font-medium tracking-tight text-ink"
              >
                Home
                <span aria-hidden="true" className="text-muted">
                  →
                </span>
              </Link>
            </li>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="animate-rise"
                style={{ "--delay": `${(i + 1) * 35}ms` } as React.CSSProperties}
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-4 text-xl font-medium tracking-tight",
                    isActive(link.href) ? "text-accent" : "text-ink"
                  )}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <ButtonLink href="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Build with ZARX
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
