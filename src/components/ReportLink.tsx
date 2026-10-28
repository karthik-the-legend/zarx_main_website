"use client";

import { site } from "@/lib/site";

/** "Report a broken link" with the missing URL pre-filled. */
export function ReportLink() {
  const report = () => {
    const url = window.location.href;
    const referrer = document.referrer || "unknown";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Broken link on the ZARX website")}&body=${encodeURIComponent(
      `This page was not found: ${url}\nI came from: ${referrer}`
    )}`;
  };
  return (
    <button type="button" onClick={report} className="text-sm font-medium text-accent underline underline-offset-2 hover:text-accent-hover">
      Report a broken link
    </button>
  );
}
