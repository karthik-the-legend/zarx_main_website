import { Suspense } from "react";
import Link from "next/link";
import { CalendarClock, Clock3, FileLock2, Handshake, KeyRound, Mail, MapPin, MessageCircle, Phone, ShieldCheck, UserPlus } from "lucide-react";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { contactFaqs } from "@/content/company";
import { facts } from "@/content/facts";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { buttonStyles, ButtonArrow } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import BriefForm, { BriefFormFromUrl } from "@/components/ContactForm";

export const metadata = pageMetadata({
  title: "Contact ZARX | Book a Free 30-Minute Call",
  description:
    "Book a free call or send your brief. A founder replies within one working day with next steps, a rough timeline and a budget range.",
  path: "/contact",
  image: "/og/contact.png",
});

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Contact" }];

const nextSteps = [
  { when: "Within 1 working day", what: "A founder reads your brief and replies." },
  { when: "Within 3 days", what: "A 30-minute call to understand your goals and constraints." },
  { when: "Within 5 days", what: "A short proposal: approach, timeline and budget range." },
  { when: "Kickoff", what: "Usually a 1–2 week Discovery Sprint with a fixed quote." },
];

export default function ContactPage() {
  const privacyEmail = facts.grievanceOfficer?.email ?? site.email;
  const ways = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    facts.whatsapp && { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${facts.whatsapp}` },
    facts.phone && { icon: Phone, label: "Phone (Mon–Fri, 10:00–19:00 IST)", value: facts.phone, href: `tel:${facts.phone.replace(/\s/g, "")}` },
    {
      icon: MapPin,
      label: facts.registeredOffice ? "Office (visits by appointment)" : "Location",
      value: facts.registeredOffice ?? `${site.location.city}, ${site.location.country}`,
      href: facts.registeredOffice ? `https://www.google.com/maps/search/${encodeURIComponent(facts.registeredOffice)}` : undefined,
    },
    { icon: Handshake, label: "Partnerships", value: "Investors & partners", href: "/partners" },
    { icon: UserPlus, label: "Careers", value: "Join the team", href: "/careers" },
    { icon: ShieldCheck, label: "Data & privacy requests", value: privacyEmail, href: `mailto:${privacyEmail}` },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Let's talk about what you're building"
        lead="Book a call if you're ready to talk, or send a short brief and a founder will reply within one working day."
      />

      {/* Two doors */}
      <Section tone="subtle" labelledBy="doors-title">
        <h2 id="doors-title" className="sr-only">Two ways to start</h2>
        <div className="grid gap-6 lg:grid-cols-12">
          <div id="book" className="scroll-mt-28 rounded-lg border border-line bg-canvas p-6 sm:p-8 lg:col-span-4 lg:self-start">
            <CalendarClock aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.75} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Book a free 30-minute call</h3>
            {facts.bookingUrl ? (
              <>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  Pick a time that suits you. Slots are in IST and shown in your local time.
                </p>
                <a
                  href={facts.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="contact_booking"
                  className={buttonStyles({ size: "lg", className: "mt-6 w-full" })}
                >
                  Choose a time
                  <ButtonArrow />
                </a>
              </>
            ) : (
              <>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  Send the short brief with “I&apos;d like a 30-minute call first” ticked, and a founder will
                  send you times that suit your time zone.
                </p>
                <Link href="/contact?call=1#estimate" data-cta="contact_request_call" className={buttonStyles({ size: "lg", className: "mt-6 w-full" })}>
                  Request a call
                  <ButtonArrow />
                </Link>
              </>
            )}
            <p className="mt-4 text-sm text-muted">No pitch deck needed.</p>
          </div>

          <div id="estimate" className="scroll-mt-28 rounded-lg border border-line bg-canvas p-6 shadow-sm sm:p-8 lg:col-span-8">
            <h3 className="text-xl font-semibold tracking-tight">Get a ballpark estimate in 24 hours</h3>
            <p className="mb-7 mt-1 text-sm text-muted">Three short steps. A founder replies with a rough timeline and budget range.</p>
            <Suspense fallback={<BriefForm />}>
              <BriefFormFromUrl />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <section aria-label="Our promises" className="border-b border-line">
        <ul className="container-page flex flex-wrap gap-x-8 gap-y-3 py-6 text-sm font-medium">
          <li className="flex items-center gap-2"><FileLock2 aria-hidden="true" className="h-4 w-4 text-accent" />NDA on request</li>
          <li className="flex items-center gap-2"><KeyRound aria-hidden="true" className="h-4 w-4 text-accent" />You own 100% of the code</li>
          <li className="flex items-center gap-2"><Clock3 aria-hidden="true" className="h-4 w-4 text-accent" />Reply within 1 working day</li>
        </ul>
      </section>

      {/* What happens next + other ways */}
      <Section labelledBy="next-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">What happens next</p>
            <h2 id="next-title" className="text-h2">From brief to kickoff in a week</h2>
            <ol className="mt-8 space-y-5">
              {nextSteps.map((s, i) => (
                <li key={s.when} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-white">{i + 1}</span>
                  <div>
                    <p className="font-semibold">{s.when}</p>
                    <p className="text-[0.9375rem] text-muted">{s.what}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal>
            <p className="eyebrow mb-4">Other ways to reach us</p>
            <h2 className="text-h2">Prefer another channel?</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ways.map((w) => {
                const inner = (
                  <>
                    <w.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{w.label}</span>
                      <span className="block break-words text-[0.9375rem] font-medium">{w.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={w.label}>
                    {w.href ? (
                      <a href={w.href} className="flex h-full gap-3 rounded-md border border-line p-4 transition-colors hover:border-ink/20">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex h-full gap-3 rounded-md border border-line p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <FaqSection items={contactFaqs} tone="subtle" intro={<>Anything else? <a href={`mailto:${site.email}`} className="link-underline text-ink">Email us</a>.</>} />
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbLd(crumbs, "/contact") }} />
    </>
  );
}
