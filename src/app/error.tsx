"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[100svh] flex-col justify-center pb-24 pt-[calc(var(--header-h)+4rem)]">
      <p className="eyebrow mb-4">Something went wrong</p>
      <h1 className="max-w-2xl text-page">We couldn&apos;t load this page.</h1>
      <p className="mt-5 max-w-prose text-lead text-muted">
        Please try again. If the problem continues, email {site.email}.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className={buttonStyles({ size: "lg" })}>
          Try again
        </button>
        <Link href="/" className={buttonStyles({ size: "lg", variant: "secondary" })}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
