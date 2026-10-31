/**
 * FACTS ONLY THE FOUNDERS CAN SUPPLY
 *
 * Everything in square brackets in the rebuild brief lives here. A value left as
 * `null` (or an empty list) is never shown as a placeholder: the sentence, card or
 * whole section that needs it is hidden until it is filled in.
 *
 * Rule from the brief: every number must be provable. Only fill a field when you
 * hold the record that backs it, then run `npm run deploy`.
 */

type Stat = { value: string; label: string; note: string };

export const facts = {
  /* ── Contact & booking ─────────────────────────────────────────── */
  /** Cal.com / Calendly link for "Book a free 30-minute call". */
  bookingUrl: null as string | null,
  /** Displayed phone number, e.g. "+91 98765 43210" (Mon–Fri, 10:00–19:00 IST). */
  phone: "+91 70220 77516" as string | null,
  /** WhatsApp number in international format, digits only, e.g. "919876543210". */
  whatsapp: "917022077516" as string | null,
  /** Registered office address (shown in the footer, contact page and facts box). */
  registeredOffice: null as string | null,
  /** Direct founder emails for the Leadership page. */
  founderEmails: { "Aniket Singh": null as string | null, "Karthik K S": null as string | null },

  /* ── Company identifiers ───────────────────────────────────────── */
  cin: null as string | null,
  gstin: null as string | null,
  /** e.g. "December 2025". */
  incorporated: null as string | null,
  /** e.g. "8 engineers, designers and animators". */
  teamSize: null as string | null,
  /** DPIIT Startup India recognition number, only once granted. */
  dpiitNumber: null as string | null,

  /* ── Privacy (DPDP) ────────────────────────────────────────────── */
  /** Named person responsible for personal data and grievances. */
  grievanceOfficer: { name: "Karthik K S", email: "karthikks1112@gmail.com" } as { name: string; email: string } | null,
  /** How long enquiry data is kept if no project starts. */
  dataRetentionMonths: null as number | null,

  /* ── Contract-backed commitments ───────────────────────────────── */
  /** Days of free post-launch fixes written into every contract. */
  freeFixDays: null as number | null,
  /** Working days to replace a team member on request. */
  replacementDays: null as number | null,
  /** Working hours to reply in the shared project channel. */
  channelReplyHours: null as number | null,
  /** Milestone payment split, e.g. "30/40/30". */
  paymentSplit: null as string | null,

  /* ── Proof (each needs a record behind it) ─────────────────────── */
  stats: {
    /** e.g. { value: "50+", label: "products shipped by the ZARX team", note: "Includes work by our founders before ZARX was incorporated in 2025." } */
    productsShipped: null as Stat | null,
    /** e.g. { value: "6 weeks", label: "from kickoff to first working build", note: "Median across 9 projects, 2025–26." } */
    weeksToFirstBuild: null as Stat | null,
    /** Shorter form for the hero micro-proof row, e.g. "First working demo in 6 weeks". */
    firstDemoLine: null as string | null,
  },
  /** Sectors with real shipped projects, e.g. ["Gaming", "Fintech"]. */
  industries: [] as string[],
  /** Partners page traction cards, each backed by records, e.g. { value: "12", label: "Projects delivered", note: "Since incorporation" }. */
  traction: [] as Stat[],
  /** "As of" date for the traction cards, e.g. "October 2026". */
  tractionAsOf: null as string | null,
  /** Referral fee, e.g. "10%". */
  referralFee: null as string | null,

  /* ── Prices ("starting from"), keyed by engagement id in engagements.ts ── */
  /** e.g. { "discovery-sprint": "₹1,50,000 (≈ $1,800)" } */
  prices: {} as Record<string, string>,

  /* ── Profiles (only active accounts) ───────────────────────────── */
  socials: {
    linkedin: "https://www.linkedin.com/company/zarx-technologies-pvt-ltd/" as string | null,
    x: null as string | null,
    instagram: null as string | null,
    github: null as string | null,
    behance: null as string | null,
  },
  /** Review profiles, shown in the trust strip once a rating exists. */
  reviews: [] as { site: string; rating: string; url: string }[],

  /* ── Integrations ──────────────────────────────────────────────── */
  /**
   * Web3Forms access key (free at web3forms.com). When set, the brief, investor and
   * careers forms submit straight to the founders' inbox. When null, they open the
   * visitor's email app with the message pre-filled.
   */
  web3formsKey: "1de18c84-0538-4803-ad97-f967bd505742" as string | null,
};

export const hasBooking = () => Boolean(facts.bookingUrl);
export const priceFor = (id: string) => facts.prices[id] ?? null;
