import { Section } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

/** Home-page introduction for investors and partners; details live on /investors. */
export default function Investor() {
  return (
    <Section id="investors" tone="subtle" labelledBy="investors-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <header data-reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">For investors & partners</p>
          <h2 id="investors-title" className="text-h2">
            Building the future of digital craft.
          </h2>
          <p className="mt-5 max-w-prose text-lead text-muted">
            ZARX Technologies is not a services company that scales by headcount.
            We&apos;re building a technology engine that scales through IP, AI and
            compounding capabilities.
          </p>
          <ButtonLink href="/investors" variant="secondary" className="mt-8">
            Explore the opportunity
            <ButtonArrow />
          </ButtonLink>
        </header>

        <figure data-reveal className="lg:col-span-7 lg:pt-10">
          <blockquote className="border-l-2 border-accent pl-6 text-2xl font-medium leading-snug tracking-tight sm:pl-8 sm:text-[2rem]">
            <p>
              &ldquo;We turn ideas into real-time digital experiences using AI, design and
              engineering —{" "}
              <span className="text-muted">at a cost founders can actually afford.</span>
              &rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 pl-6 text-sm text-muted sm:pl-8">
            Core philosophy, ZARX Technologies Pvt. Ltd.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
