import type { Metadata } from "next";
import Link from "next/link";
import { ButtonArrow, ButtonLink, buttonStyles } from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[100svh] flex-col justify-center pb-24 pt-[calc(var(--header-h)+4rem)]">
      <p className="eyebrow mb-4">404</p>
      <h1 className="max-w-2xl text-page">This page doesn&apos;t exist.</h1>
      <p className="mt-5 max-w-prose text-lead text-muted">
        The link may be broken or the page may have moved. Try one of these instead.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonStyles({ size: "lg" })}>
          Back to home
          <ButtonArrow />
        </Link>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Contact us
        </ButtonLink>
      </div>
      <ul className="mt-12 flex flex-wrap gap-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/solutions/${service.slug}`}
              className="inline-flex rounded-full border border-line px-3 py-1.5 text-[0.8125rem] font-medium transition-colors hover:border-accent/40 hover:text-accent"
            >
              {service.short}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
