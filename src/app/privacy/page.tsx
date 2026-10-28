import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { facts } from "@/content/facts";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy | ZARX Technologies",
  description: "What personal data ZARX Technologies collects through this website, why, how long we keep it, who processes it and how to exercise your rights.",
  path: "/privacy",
});

// Draft for legal review before launch (see the rebuild brief).
export default function PrivacyPage() {
  const contact = facts.grievanceOfficer;
  const contactEmail = contact?.email ?? site.email;
  const retention = facts.dataRetentionMonths
    ? `${facts.dataRetentionMonths} months from your last message, unless we start working together`
    : "only as long as we need to respond and follow up, unless we start working together";
  const processors = [
    "Google (Firebase Hosting) – hosts this website and keeps standard server logs.",
    "Hostinger – provides our email, where enquiries and replies are stored.",
    facts.web3formsKey && "Web3Forms – delivers the forms on this website to our inbox.",
    facts.bookingUrl && "Our calendar booking tool – when you book a call, it receives the details you enter there.",
  ].filter(Boolean) as string[];

  return (
    <LegalPage
      path="/privacy"
      label="Privacy Policy"
      eyebrow="Privacy"
      title="Privacy Policy"
      lead="Plain language: what we collect through this website, why, and the control you have over it."
    >
      <h2>Who we are</h2>
      <p>
        This website is run by {site.legalName}, {facts.registeredOffice ?? site.location.city}. Under India&apos;s Digital
        Personal Data Protection Act, 2023 (DPDP Act), we are the Data Fiduciary for the personal data described here.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Project briefs and enquiries:</strong> your name, work email, company, role, country, what you need, project stage, budget range, timeline, project details, any link you share, how you heard about us, and whether you&apos;d like an NDA, a call first or occasional emails.</li>
        <li><strong>Partner, investor and careers forms:</strong> your name, organisation, role, email, LinkedIn or portfolio link and your message.</li>
        <li><strong>Emails and calls:</strong> what you send us and notes from calls you book with us.</li>
        <li><strong>Usage data:</strong> our host keeps standard server logs (IP address, browser type, pages requested, time) for security and to keep the site running. We do not use analytics or advertising cookies.</li>
      </ul>
      <p>
        The brief form saves an unfinished draft in your own browser so you don&apos;t lose your answers. That draft
        stays on your device and is deleted when you send the form.
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>To reply to your enquiry, prepare an estimate or proposal, and schedule calls.</li>
        <li>To deliver projects we agree with you, and to consider partnership or job applications.</li>
        <li>To keep this website secure and working.</li>
        <li>To send occasional product-building insights – only if you tick that box.</li>
      </ul>

      <h2>Legal basis</h2>
      <p>
        We process this data with your consent, which you give when you send a form or email us. You can withdraw
        consent at any time, and withdrawing is as easy as giving it: email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry data {retention}. If we do work together, we keep project records for as long as the contract
        and the law require. Marketing preferences are kept until you unsubscribe.
      </p>

      <h2>Who we share it with</h2>
      <p>We never sell your data. These service providers process it on our behalf:</p>
      <ul>
        {processors.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <p>Some of these providers may process data outside India, under their own security and privacy commitments.</p>

      <h2>Your rights</h2>
      <ul>
        <li>Access a summary of the personal data we hold about you.</li>
        <li>Correct, complete or update it.</li>
        <li>Have it erased when it is no longer needed.</li>
        <li>Have a grievance about our handling of your data addressed.</li>
        <li>Nominate someone to exercise these rights for you in case of death or incapacity.</li>
      </ul>

      <h2>Data & grievance contact</h2>
      <p>
        {contact ? `${contact.name}, ` : ""}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We aim to respond within one working day. If you are not
        satisfied with our response, you may complain to the Data Protection Board of India.
      </p>

      <h2>Security and children</h2>
      <p>
        We protect your data with access controls, two-factor authentication on our accounts and encrypted connections.
        This website is meant for adults acting for a business; we do not knowingly collect data from children.
      </p>

      <h2>Changes</h2>
      <p>
        We&apos;ll update this page if the way we handle data changes, and change the date below. See also our{" "}
        <Link href="/cookies">Cookie Notice</Link> and <Link href="/trust">Trust Center</Link>.
      </p>
    </LegalPage>
  );
}
