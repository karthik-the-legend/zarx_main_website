"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { facts } from "@/content/facts";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";
import { replyByDate, submitForm } from "@/lib/submit";
import { buttonStyles, ButtonArrow } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const needOptions = ["Web platform", "Mobile app", "Game", "Web3", "AI automation", "UI/UX", "Animation", "Not sure"] as const;

/** Service page slug → the matching "What do you need?" chip. */
const serviceToNeed: Record<string, (typeof needOptions)[number]> = {
  "web-platforms": "Web platform",
  "mobile-gaming": "Mobile app",
  web3: "Web3",
  "ai-automation": "AI automation",
  "ui-ux-design": "UI/UX",
  animation: "Animation",
};

const stages = ["Idea", "Prototype", "Live product", "Scaling"];
const budgets = [
  { value: "Under ₹5L", usd: "under ≈ $6k" },
  { value: "₹5–15L", usd: "≈ $6k–17k" },
  { value: "₹15–40L", usd: "≈ $17k–45k" },
  { value: "₹40L+", usd: "≈ $45k+" },
  { value: "Not sure", usd: "" },
];
const timelines = ["ASAP", "1–3 months", "3–6 months", "Exploring"];
const sources = ["Search engine", "AI assistant", "LinkedIn", "Referral", "Event", "Other"];

type Values = {
  name: string;
  email: string;
  company: string;
  role: string;
  country: string;
  needs: string[];
  stage: string;
  budget: string;
  timeline: string;
  details: string;
  link: string;
  source: string;
  nda: boolean;
  callFirst: boolean;
  marketing: boolean;
};

const empty: Values = {
  name: "", email: "", company: "", role: "", country: "", needs: [], stage: "", budget: "", timeline: "",
  details: "", link: "", source: "", nda: false, callFirst: false, marketing: false,
};

const STORAGE_KEY = "zarx-brief-draft";
const steps = ["About you", "Your project", "Details"];
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function errorsFor(step: number, v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (step === 0) {
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your work email.";
    else if (!emailOk(v.email)) e.email = "Please enter a valid email address, like name@company.com.";
  }
  if (step === 1) {
    if (!v.stage) e.stage = "Please choose your stage.";
    if (!v.budget) e.budget = "Please choose a budget range, or “Not sure”.";
    if (!v.timeline) e.timeline = "Please choose a timeline.";
  }
  if (step === 2 && v.details.trim().length < 20) e.details = "Please tell us a little more (at least 20 characters).";
  return e;
}

/** Reads ?service=, ?engagement= and ?call= so links from other pages prefill the brief. */
export function BriefFormFromUrl() {
  const params = useSearchParams();
  const need = serviceToNeed[params.get("service") ?? ""];
  const engagement = params.get("engagement") ?? "";
  const callFirst = params.get("call") === "1";
  return <BriefForm key={`${need}-${engagement}-${callFirst}`} initialNeed={need} engagement={engagement} callFirst={callFirst} />;
}

export default function BriefForm({
  initialNeed,
  engagement = "",
  callFirst = false,
}: {
  initialNeed?: string;
  engagement?: string;
  callFirst?: boolean;
}) {
  const [values, setValues] = useState<Values>(() => {
    let saved: Partial<Values> = {};
    try {
      if (typeof window !== "undefined") saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {}
    const base = { ...empty, ...saved };
    if (initialNeed && !base.needs.includes(initialNeed)) base.needs = [...base.needs, initialNeed];
    if (callFirst) base.callFirst = true;
    return base;
  });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");
  const [trap, setTrap] = useState("");
  const started = useRef(false);
  const stepRef = useRef<HTMLFieldSetElement>(null);
  const international = values.country.trim() !== "" && !/^india$/i.test(values.country.trim());

  // Save progress so a visitor can come back to an unfinished brief.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {}
  }, [values]);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    if (!started.current) {
      started.current = true;
      track("estimate_form_start");
    }
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusFirst = (found: Partial<Record<keyof Values, string>>) => {
    const first = Object.keys(found)[0];
    if (first) stepRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const next = () => {
    const found = errorsFor(step, values);
    setErrors(found);
    if (Object.keys(found).length) return focusFirst(found);
    setStep((s) => s + 1);
    requestAnimationFrame(() => stepRef.current?.querySelector<HTMLElement>("input, select, textarea, button")?.focus());
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) return next();
    if (trap) return;
    const found = errorsFor(2, values);
    setErrors(found);
    if (Object.keys(found).length) return focusFirst(found);

    setStatus("sending");
    try {
      const budget = budgets.find((b) => b.value === values.budget);
      const result = await submitForm({
        subject: `Project brief – ${values.name}${values.company ? ` (${values.company})` : ""}`,
        replyTo: values.email,
        fields: {
          Name: values.name,
          "Work email": values.email,
          Company: values.company,
          Role: values.role,
          Country: values.country,
          "What they need": values.needs.join(", "),
          Stage: values.stage,
          Budget: budget?.usd && international ? `${values.budget} (${budget.usd})` : values.budget,
          Timeline: values.timeline,
          Engagement: engagement,
          Details: values.details,
          "Deck / Figma link": values.link,
          "Heard about us": values.source,
          "NDA requested": values.nda ? "Yes" : "No",
          "Prefers a call first": values.callFirst ? "Yes" : "No",
          "Marketing emails": values.marketing ? "Yes" : "No",
        },
      });
      track("estimate_form_submit", { service: values.needs.join("|"), budget: values.budget });
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setStatus(result);
    } catch {
      setStatus("error");
    }
  };

  const firstName = values.name.trim().split(" ")[0];

  if (status === "sent" || status === "mailto") {
    return (
      <div role="status" className="space-y-4 rounded-md border border-success/25 bg-success/[0.06] p-6">
        <p className="text-lg font-semibold">
          Thanks{firstName ? `, ${firstName}` : ""}.
        </p>
        <p className="text-[0.9375rem] leading-relaxed">
          {status === "mailto"
            ? "Your email app should now be open with your brief ready – press send to reach us. "
            : ""}
          A founder will reply by {replyByDate()} with next steps.
        </p>
        {facts.bookingUrl && (
          <p className="text-[0.9375rem]">
            Want to skip the wait?{" "}
            <a href={facts.bookingUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-2" data-cta="brief_success_book">
              Book a call now
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  const fieldError = (key: keyof Values) =>
    errors[key] ? (
      <p id={`brief-${key}-error`} className="mt-2 text-sm text-danger">{errors[key]}</p>
    ) : null;
  const aria = (key: keyof Values) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `brief-${key}-error` : undefined,
  });
  const choice = (key: "stage" | "budget" | "timeline", label: string, options: { value: string; hint?: string }[]) => (
    <fieldset {...aria(key)}>
      <legend className="mb-2 text-sm font-medium">
        {label} <span className="text-danger" aria-hidden="true">*</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
              values[key] === o.value ? "border-accent bg-accent-soft font-medium text-accent" : "border-line hover:border-ink/25"
            )}
          >
            <input type="radio" name={key} value={o.value} checked={values[key] === o.value} onChange={() => set(key, o.value)} className="sr-only" />
            {o.value}
            {o.hint && <span className="ml-1 text-xs text-muted">({o.hint})</span>}
          </label>
        ))}
      </div>
      {fieldError(key)}
    </fieldset>
  );

  const retention = facts.dataRetentionMonths
    ? `We keep them for ${facts.dataRetentionMonths} months unless we start working together.`
    : "We keep them only as long as we need to respond, unless we start working together.";
  const privacyEmail = facts.grievanceOfficer?.email ?? site.email;

  return (
    <form onSubmit={submit} noValidate>
      {/* Progress */}
      <div className="mb-8">
        <ol className="flex gap-2" aria-label="Form progress">
          {steps.map((label, i) => (
            <li key={label} className="flex-1">
              <span className={cn("block h-1 rounded-full", i <= step ? "bg-accent" : "bg-line")} />
              <span className={cn("mt-2 block text-xs", i === step ? "font-semibold text-ink" : "text-muted")} aria-current={i === step ? "step" : undefined}>
                {i + 1}. {label}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="brief-website">Leave this empty</label>
        <input id="brief-website" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      <fieldset ref={stepRef} className="min-w-0">
        <legend className="sr-only">{`Step ${step + 1} of ${steps.length}: ${steps[step]}`}</legend>

        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="brief-name" className="mb-2 block text-sm font-medium">Name <span className="text-danger" aria-hidden="true">*</span></label>
              <input id="brief-name" name="name" autoComplete="name" required value={values.name} onChange={(e) => set("name", e.target.value)} className="field" {...aria("name")} />
              {fieldError("name")}
            </div>
            <div>
              <label htmlFor="brief-email" className="mb-2 block text-sm font-medium">Work email <span className="text-danger" aria-hidden="true">*</span></label>
              <input id="brief-email" name="email" type="email" inputMode="email" autoComplete="email" required value={values.email} onChange={(e) => set("email", e.target.value)} className="field" placeholder="you@company.com" {...aria("email")} />
              {fieldError("email")}
            </div>
            <div>
              <label htmlFor="brief-company" className="mb-2 block text-sm font-medium">Company <span className="font-normal text-muted">(optional)</span></label>
              <input id="brief-company" name="company" autoComplete="organization" value={values.company} onChange={(e) => set("company", e.target.value)} className="field" />
            </div>
            <div>
              <label htmlFor="brief-role" className="mb-2 block text-sm font-medium">Role <span className="font-normal text-muted">(optional)</span></label>
              <input id="brief-role" name="role" autoComplete="organization-title" value={values.role} onChange={(e) => set("role", e.target.value)} className="field" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="brief-country" className="mb-2 block text-sm font-medium">Country <span className="font-normal text-muted">(optional)</span></label>
              <input id="brief-country" name="country" autoComplete="country-name" value={values.country} onChange={(e) => set("country", e.target.value)} className="field sm:max-w-xs" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-7">
            <fieldset>
              <legend className="mb-2 text-sm font-medium">What do you need? <span className="font-normal text-muted">(choose any)</span></legend>
              <div className="flex flex-wrap gap-2">
                {needOptions.map((n) => {
                  const on = values.needs.includes(n);
                  return (
                    <label
                      key={n}
                      className={cn(
                        "cursor-pointer rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
                        on ? "border-accent bg-accent-soft font-medium text-accent" : "border-line hover:border-ink/25"
                      )}
                    >
                      <input
                        type="checkbox"
                        name="needs"
                        checked={on}
                        onChange={() => set("needs", on ? values.needs.filter((x) => x !== n) : [...values.needs, n])}
                        className="sr-only"
                      />
                      {n}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            {choice("stage", "Stage", stages.map((s) => ({ value: s })))}
            {choice("budget", "Budget range", budgets.map((b) => ({ value: b.value, hint: international ? b.usd || undefined : undefined })))}
            {choice("timeline", "Timeline", timelines.map((t) => ({ value: t })))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="brief-details" className="mb-2 block text-sm font-medium">Tell us what you&apos;re building <span className="text-danger" aria-hidden="true">*</span></label>
              <textarea
                id="brief-details"
                name="details"
                rows={6}
                required
                value={values.details}
                onChange={(e) => set("details", e.target.value)}
                className="field resize-y"
                placeholder={"Who is it for?\nWhat problem does it solve?\nWhat does success look like?"}
                {...aria("details")}
              />
              {fieldError("details")}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="brief-link" className="mb-2 block text-sm font-medium">Link to a deck, doc or Figma <span className="font-normal text-muted">(optional)</span></label>
                <input id="brief-link" name="link" type="url" inputMode="url" value={values.link} onChange={(e) => set("link", e.target.value)} className="field" placeholder="https://" />
              </div>
              <div>
                <label htmlFor="brief-source" className="mb-2 block text-sm font-medium">How did you hear about us? <span className="font-normal text-muted">(optional)</span></label>
                <select id="brief-source" name="source" value={values.source} onChange={(e) => set("source", e.target.value)} className="field cursor-pointer">
                  <option value="">Choose one</option>
                  {sources.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-3 pt-1">
              {[
                { key: "nda" as const, label: "Please send an NDA before we discuss details" },
                { key: "callFirst" as const, label: "I'd like a 30-minute call first – send me some times" },
                { key: "marketing" as const, label: "Send me occasional product-building insights (optional)" },
              ].map((c) => (
                <label key={c.key} className="flex cursor-pointer items-start gap-3 text-[0.9375rem]">
                  <input
                    type="checkbox"
                    name={c.key}
                    checked={values[c.key]}
                    onChange={(e) => set(c.key, e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--color-accent))]"
                  />
                  {c.label}
                </label>
              ))}
            </div>
          </div>
        )}
      </fieldset>

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 lg:flex-row lg:items-end lg:justify-between">
        {step === steps.length - 1 ? (
          <p className="max-w-md text-xs leading-relaxed text-muted">
            We use these details only to respond to your enquiry and prepare an estimate. {retention} You can ask us
            to delete them anytime at{" "}
            <a href={`mailto:${privacyEmail}`} className="underline underline-offset-2">{privacyEmail}</a>. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>.
          </p>
        ) : (
          <p className="text-xs text-muted">Step {step + 1} of {steps.length}. Your answers are saved on this device as you go.</p>
        )}
        <div className="flex shrink-0 gap-3">
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className={buttonStyles({ variant: "secondary", size: "lg" })}>
              Back
            </button>
          )}
          <button type="submit" disabled={status === "sending"} className={buttonStyles({ size: "lg" })}>
            {step < steps.length - 1 ? "Continue" : status === "sending" ? "Sending…" : "Send my brief"}
            <ButtonArrow />
          </button>
        </div>
      </div>

      <div role="status" aria-live="polite">
        {status === "error" && (
          <p className="mt-5 rounded-md border border-danger/30 bg-danger/[0.06] p-4 text-sm text-danger">
            Something went wrong sending your brief. Please try again, or email{" "}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
