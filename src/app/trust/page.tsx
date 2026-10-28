import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { facts } from "@/content/facts";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Trust Center: IP, Security & Data | ZARX",
  description:
    "How ZARX handles IP ownership, NDAs, client code and credentials, AI tools and personal data – one page for your IT and legal teams.",
  path: "/trust",
  image: "/og/trust.png",
});

// Every statement here must match the contract and how the team actually works.
export default function TrustPage() {
  const securityEmail = facts.grievanceOfficer?.email ?? site.email;
  return (
    <LegalPage
      path="/trust"
      label="Trust Center"
      eyebrow="Trust Center"
      title="IP, security and data – in one place"
      lead="Written for your IT, security and legal teams, so they can check how we work before you sign."
    >
      <h2>IP ownership</h2>
      <ul>
        <li>On payment, all intellectual property in what we create for you – code, designs, content and data – is assigned to your company.</li>
        <li>Code lives in your own GitHub or GitLab from day one; accounts and cloud resources are opened in your name.</li>
        <li>Only ZARX&apos;s pre-existing, general-purpose tools stay ours. Anything of them used in your product is licensed to you free, forever.</li>
        <li>Third-party libraries, fonts and assets stay under their original licences, which we list at handover.</li>
      </ul>

      <h2>NDA policy</h2>
      <p>
        We&apos;ll sign a mutual NDA before detailed discussions on request – ours or yours. Tick the NDA box on the{" "}
        <Link href="/contact#estimate">brief form</Link> or ask on the first call.
      </p>

      <h2>How we secure client code and credentials</h2>
      <ul>
        <li>Two-factor authentication on every account we use for your project.</li>
        <li>Least-privilege access: each person gets only the access their work needs, removed when they leave the project.</li>
        <li>Your repositories, cloud and third-party accounts stay owned by you; we work inside them with access you control.</li>
        <li>Code review on every change and a security review against the OWASP checklist before launch.</li>
      </ul>

      <h2>How we use AI tools with your code</h2>
      <ul>
        <li>We use only approved AI tools whose business terms say your code and data are not used to train their models.</li>
        <li>AI drafts scaffolding, tests and documentation; a ZARX engineer reviews every line before it ships.</li>
        <li>Secrets and personal data are kept out of AI prompts.</li>
      </ul>

      <h2>Personal data (DPDP Act)</h2>
      <p>
        When a project involves your users&apos; personal data, we build for consent, export and deletion, minimise what is
        collected, and document data flows for your legal team. For data you share with us through this website, see
        our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Incident response</h2>
      <p>
        If you suspect a security issue in anything we built or host for you, email{" "}
        <a href={`mailto:${securityEmail}`}>{securityEmail}</a> with &ldquo;Security&rdquo; in the subject. A founder
        responds, and we keep you informed until it is resolved.
      </p>
    </LegalPage>
  );
}
