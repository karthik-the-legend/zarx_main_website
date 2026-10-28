"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { buttonStyles, ButtonArrow } from "@/components/ui/Button";
import { submitForm } from "@/lib/submit";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  placeholder?: string;
  wide?: boolean;
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/**
 * Short enquiry form with visible labels, plain error messages, a honeypot
 * instead of a CAPTCHA, and the privacy notice beside the button.
 */
export function SimpleForm({
  subject,
  fields,
  submitLabel,
  notice,
  event,
  successText,
}: {
  subject: string;
  fields: FieldDef[];
  submitLabel: string;
  notice: string;
  event?: string;
  successText: string;
}) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(fields.map((f) => [f.name, ""])));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");
  const [trap, setTrap] = useState("");

  const validate = () => {
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = values[f.name]?.trim() ?? "";
      if (f.required && !v) next[f.name] = `Please enter ${f.label.toLowerCase()}.`;
      else if (f.type === "email" && v && !emailOk(v)) next[f.name] = "Please enter a valid email address, like name@company.com.";
    }
    return next;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (trap) return; // bots fill the hidden field; people never see it
    const found = validate();
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const emailField = fields.find((f) => f.type === "email");
      const result = await submitForm({
        subject,
        replyTo: emailField ? values[emailField.name] : undefined,
        fields: Object.fromEntries(fields.map((f) => [f.label, values[f.name]])),
      });
      if (event) track(event);
      setStatus(result);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-md border border-success/25 bg-success/[0.06] p-5 text-[0.9375rem]">
        {successText}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>Leave this empty</label>
        <input id={`${uid}-website`} name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>
      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const err = errors[f.name];
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setValues((v) => ({ ...v, [f.name]: e.target.value })),
          "aria-invalid": err ? true : undefined,
          "aria-describedby": err ? `${id}-error` : undefined,
          required: f.required,
          className: "field",
        };
        return (
          <div key={f.name} className={cn((f.wide || f.type === "textarea") && "sm:col-span-2")}>
            <label htmlFor={id} className="mb-2 block text-sm font-medium">
              {f.label}{" "}
              {f.required ? <span className="text-danger" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={4} placeholder={f.placeholder} className="field resize-y" />
            ) : f.type === "select" ? (
              <select {...common} className="field cursor-pointer">
                <option value="">Choose one</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input {...common} type={f.type ?? "text"} autoComplete={f.autoComplete} placeholder={f.placeholder} />
            )}
            {err && (
              <p id={`${id}-error`} className="mt-2 text-sm text-danger">{err}</p>
            )}
          </div>
        );
      })}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-muted">
          {notice}{" "}
          <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>.
        </p>
        <button type="submit" disabled={status === "sending"} className={buttonStyles({ size: "lg", className: "shrink-0" })}>
          {status === "sending" ? "Sending…" : submitLabel}
          <ButtonArrow />
        </button>
      </div>
      <div role="status" aria-live="polite" className="sm:col-span-2">
        {status === "mailto" && (
          <p className="rounded-md border border-line bg-subtle p-4 text-sm">
            Your email app should now be open with your message ready – press send to reach us.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md border border-danger/30 bg-danger/[0.06] p-4 text-sm text-danger">
            Something went wrong sending the form. Please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
