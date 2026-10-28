import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { facts } from "@/content/facts";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Cookie Notice | ZARX Technologies",
  description: "The cookies and browser storage the ZARX Technologies website uses: none for tracking or advertising.",
  path: "/cookies",
});

// Keep this list in sync if an analytics or booking tool is added; non-essential
// cookies then need a consent banner before they load.
export default function CookiesPage() {
  return (
    <LegalPage
      path="/cookies"
      label="Cookie Notice"
      eyebrow="Legal"
      title="Cookie Notice"
      lead="Short version: this website sets no tracking or advertising cookies, so there's no cookie banner to click through."
    >
      <h2>What this website stores</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>How long</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>zarx-brief-draft</td>
            <td>Browser storage (not a cookie)</td>
            <td>Keeps your unfinished project brief so you don&apos;t lose your answers. It never leaves your device.</td>
            <td>Until you send the form or clear your browser data</td>
          </tr>
        </tbody>
      </table>
      <p>That&apos;s the complete list. We don&apos;t use analytics, advertising or social-media tracking cookies.</p>

      <h2>Third-party sites</h2>
      <p>
        When you follow a link to another website – such as LinkedIn
        {facts.whatsapp ? ", WhatsApp" : ""}
        {facts.bookingUrl ? " or our calendar booking page" : ""} – that site may set its own cookies under its own policy.
      </p>

      <h2>If this changes</h2>
      <p>
        If we ever add tools that use non-essential cookies, we&apos;ll list each one here with its purpose and duration,
        and ask for your consent before they load. See our <Link href="/privacy">Privacy Policy</Link> for how we handle
        personal data.
      </p>
    </LegalPage>
  );
}
