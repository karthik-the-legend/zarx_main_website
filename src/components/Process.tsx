import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { ProcessStrip } from "@/components/ui/ProcessStrip";

/** Home-page introduction to the five-stage process; details live on /process. */
export default function Process() {
  return (
    <Section id="process" tone="dark" labelledBy="process-title">
      <SectionHeading
        id="process-title"
        tone="dark"
        eyebrow="How it works"
        title="A clear path from idea to launch."
        description="A proven pipeline that turns ambiguous ideas into production-ready products — efficiently and without surprises."
      />
      <ProcessStrip tone="dark" />
      <div data-reveal className="mt-14">
        <ButtonLink href="/process" variant="inverse-secondary" size="lg">
          See how we work
          <ButtonArrow />
        </ButtonLink>
      </div>
    </Section>
  );
}
