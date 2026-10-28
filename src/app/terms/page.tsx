import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Terms of Use | ZARX Technologies",
  description: "The terms for using the ZARX Technologies website, its content and its articles.",
  path: "/terms",
});

// Draft for legal review before launch (see the rebuild brief).
export default function TermsPage() {
  return (
    <LegalPage path="/terms" label="Terms of Use" eyebrow="Legal" title="Terms of Use" lead="The rules for using this website. Client projects are governed by their own signed contracts, not these terms.">
      <h2>Using this website</h2>
      <p>
        This website is provided by {site.legalName}. By using it you agree to these terms. Please don&apos;t misuse it –
        for example by trying to break its security, overload it or submit false information through its forms.
      </p>

      <h2>Our content</h2>
      <p>
        The text, design, graphics, logos and code of this website belong to {site.legalName} or its licensors. You may
        read, share links to and quote short extracts with attribution. Please ask before copying larger parts or using
        our brand.
      </p>

      <h2>Articles and guides</h2>
      <p>
        Articles, FAQs and guides on this website are general information, written in good faith. They are not legal,
        financial or tax advice, and we don&apos;t guarantee they suit your situation. Where we mention laws or rules,
        check with your own adviser before acting.
      </p>

      <h2>Estimates and proposals</h2>
      <p>
        Ballpark estimates are indicative ranges, not quotes. Prices, scope and commitments become binding only in a
        signed proposal or contract.
      </p>

      <h2>Links to other websites</h2>
      <p>We link to other websites for convenience. We are not responsible for their content or how they handle your data.</p>

      <h2>Liability</h2>
      <p>
        We work to keep this website accurate and available, but we provide it &ldquo;as is&rdquo;. To the extent the law
        allows, we are not liable for losses arising from your use of it.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. The courts at New Delhi have exclusive jurisdiction over any
        dispute about them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>. For personal data, see our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
