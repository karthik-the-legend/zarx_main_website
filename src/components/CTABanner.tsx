import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

type Action = { label: string; href: string };

export default function CTABanner({
  eyebrow = "Ready to start?",
  title = "Your next product starts here.",
  text = "Stop compromising between cost and quality. ZARX gives you enterprise-grade engineering with startup-friendly economics.",
  primary = { label: "Discuss your idea", href: "/contact" },
  secondary = { label: "Explore solutions", href: "/solutions" },
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: Action;
  secondary?: Action | null;
}) {
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-night text-night-fg">
      <div className="container-page py-[clamp(4rem,3rem+4vw,6.5rem)]">
        <div data-reveal className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 id="cta-title" className="text-h2">
              {title}
            </h2>
            <p className="mt-5 max-w-prose text-lead text-night-muted">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} variant="inverse" size="lg">
              {primary.label}
              <ButtonArrow />
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="inverse-secondary" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
