import { cta, secondaryCta } from "@/lib/cta";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

/** The navy band every page ends with. On a service page, `service` pre-selects it in the estimate form. */
export default function CTABanner({
  headline = "Ready to grow or build something new?",
  primaryLabel = cta.book.label,
  service,
}: {
  headline?: string;
  primaryLabel?: string;
  service?: string;
}) {
  const fallback = secondaryCta();
  const secondary = service ? { label: cta.estimate.label, href: `/contact?service=${service}#estimate` } : fallback;
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-night text-night-fg">
      <div className="container-page py-[clamp(4rem,3rem+4vw,6.5rem)]">
        <div data-reveal className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Let&apos;s talk</p>
            <h2 id="cta-title" className="text-h2">
              {headline}
            </h2>
            <p className="mt-5 max-w-prose text-lead text-night-muted">
              Tell us what you&apos;re working on. A founder replies within one working day with next
              steps, a rough timeline and a budget range.
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.book.href} variant="inverse" size="lg" data-cta="band_book">
                {primaryLabel}
                <ButtonArrow />
              </ButtonLink>
              <ButtonLink
                href={secondary.href}
                variant="inverse-secondary"
                size="lg"
                data-cta={service ? `band_estimate_${service}` : "band_secondary"}
              >
                {secondary.label}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-night-muted">NDA on request. You own what we make for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
