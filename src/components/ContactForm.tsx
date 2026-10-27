"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";
import { buttonStyles, ButtonArrow } from "@/components/ui/Button";

type Fields = { topic: string; name: string; email: string; company: string; budget: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
export type Topic = { value: string; label: string };

const initial: Fields = { topic: "", name: "", email: "", company: "", budget: "", message: "" };

const budgets = [
  { value: "<5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "discuss", label: "Let's discuss" },
];

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address, like name@company.com.";
  if (values.message.trim().length < 10)
    errors.message = "Please tell us a little about your project (at least 10 characters).";
  return errors;
}

/**
 * Delivery: there is no backend, so submitting opens the visitor's email app
 * with the enquiry pre-filled, addressed to site.email. To use an API or a
 * service such as Resend or Formspree instead, replace `deliver` below.
 */
function deliver(values: Fields, topics: Topic[]) {
  const budget = budgets.find((b) => b.value === values.budget)?.label ?? "Not specified";
  const topic = topics.find((t) => t.value === values.topic)?.label;
  const subject = `${topic ? `${topic} enquiry` : "Project enquiry"} — ${values.name}${values.company ? ` (${values.company})` : ""}`;
  const body = [
    `Topic: ${topic ?? "Not specified"}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company / project: ${values.company || "—"}`,
    `Estimated budget: ${budget}`,
    "",
    values.message,
  ].join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Links such as /contact?topic=ai-automation preselect what the visitor came for.
 * Render inside <Suspense> with a plain <ContactForm> as the fallback, so the
 * statically generated page still contains a working form.
 */
export function ContactFormFromUrl({ topics }: { topics: Topic[] }) {
  const requested = useSearchParams().get("topic") ?? "";
  const topic = topics.some((t) => t.value === requested) ? requested : "";
  return <ContactForm key={topic} topics={topics} defaultTopic={topic} />;
}

export default function ContactForm({ topics, defaultTopic = "" }: { topics: Topic[]; defaultTopic?: string }) {
  const [values, setValues] = useState<Fields>({ ...initial, topic: defaultTopic });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name as keyof Fields]) setErrors(validate(next));
  };

  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    deliver(values, topics);
    setSentTo(values.name.trim().split(" ")[0]);
    setValues(initial);
    setTouched({});
  };

  const fieldProps = (name: keyof Fields) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: update,
    "aria-invalid": touched[name] && errors[name] ? true : undefined,
    "aria-describedby": touched[name] && errors[name] ? `contact-${name}-error` : undefined,
  });

  const error = (name: keyof Fields) =>
    touched[name] && errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="currentColor">
          <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 4.75h1.5v4.5h-1.5v-4.5zm0 5.75h1.5V12h-1.5v-1.5z" />
        </svg>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium">
          What can we help with? <span className="font-normal text-muted">(optional)</span>
        </label>
        <div className="relative">
          <select {...fieldProps("topic")} className="field cursor-pointer appearance-none pr-10">
            <option value="">Choose a topic</option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
            Your name <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("name")} onBlur={blur} type="text" autoComplete="name" required className="field" />
          {error("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
            Email address <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("email")}
            onBlur={blur}
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="you@company.com"
            className="field"
          />
          {error("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="mb-2 block text-sm font-medium">
            Company / project <span className="font-normal text-muted">(optional)</span>
          </label>
          <input {...fieldProps("company")} type="text" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="contact-budget" className="mb-2 block text-sm font-medium">
            Estimated budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="relative">
            <select {...fieldProps("budget")} className="field cursor-pointer appearance-none pr-10">
              <option value="">Select a range</option>
              {budgets.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          Tell us about your idea <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <textarea
          {...fieldProps("message")}
          onBlur={blur}
          required
          rows={5}
          placeholder="Your project, goals, timeline or specific requirements"
          className="field resize-y"
        />
        {error("message")}
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          <span className="text-danger" aria-hidden="true">*</span> Required. Sending opens
          your email app with your message ready to go.
        </p>
        <button type="submit" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto" })}>
          Start your build
          <ButtonArrow />
        </button>
      </div>

      <div role="status" aria-live="polite">
        {sentTo !== null && (
          <div className="animate-rise flex gap-3 rounded-sm border border-success/25 bg-success/[0.06] p-4 text-sm">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-success" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 8.5l3 3 6-7" />
            </svg>
            <p>
              <span className="font-medium">Thanks{sentTo ? `, ${sentTo}` : ""}.</span> Your email
              app should now be open with your enquiry — press send to reach us. If nothing
              opened, write to{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-accent underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
