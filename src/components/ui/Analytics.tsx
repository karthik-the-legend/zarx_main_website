"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/** Site-wide events: CTA clicks (any element with data-cta), 75% scroll, and page-type views. */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-cta]");
      if (el) track("cta_click", { label: el.dataset.cta || el.textContent?.trim() || "", page: pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    const service = pathname.match(/^\/services\/([^/]+)/)?.[1];
    if (service) track("service_page_view", { service });
    const caseStudy = pathname.match(/^\/work\/([^/]+)/)?.[1];
    if (caseStudy) track("case_study_view", { case: caseStudy });

    let sent = false;
    const onScroll = () => {
      if (sent) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.75) {
        sent = true;
        track("scroll_75", { page: pathname });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

/** Fires one event when mounted, e.g. page_404. */
export function TrackEvent({ event, props }: { event: string; props?: Record<string, string> }) {
  useEffect(() => {
    track(event, { url: window.location.pathname, ...props });
  }, [event, props]);
  return null;
}
