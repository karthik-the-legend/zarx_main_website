type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

/**
 * Sends an event to whichever analytics tool is installed: Google Tag Manager /
 * GA4 (window.dataLayer) or a cookieless tool like Plausible (window.plausible).
 * With no tool installed it does nothing, so no cookies and no consent banner.
 *
 * Events from the brief: cta_click, estimate_form_start, estimate_form_submit,
 * call_booked, case_study_view, service_page_view, scroll_75, page_404.
 */
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event, ...props });
  window.plausible?.(event, { props });
}
