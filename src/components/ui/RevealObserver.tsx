"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives the [data-reveal] scroll animations defined in globals.css.
 * Renders nothing; sections stay server components and only opt in with
 * a data attribute. Re-runs on every client-side navigation, before paint,
 * so a new page never flashes hidden content.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Anything already on screen stays visible, so enabling reveals never flashes.
    const viewportHeight = window.innerHeight;
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportHeight) el.classList.add("is-revealed");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-revealed")) observer.observe(el);
    });
    root.classList.add("reveal-ready");

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
