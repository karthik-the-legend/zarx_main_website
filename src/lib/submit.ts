import { facts } from "@/content/facts";
import { site } from "@/lib/site";

export type Submission = {
  subject: string;
  /** Label → value, in the order they should appear in the email. */
  fields: Record<string, string>;
  replyTo?: string;
};

/**
 * Delivers a form. With `facts.web3formsKey` set, it posts to Web3Forms, which
 * emails the founders' inbox. Without it, it opens the visitor's email app with
 * the message pre-filled (no data leaves the browser until they press send).
 */
export async function submitForm({ subject, fields, replyTo }: Submission): Promise<"sent" | "mailto"> {
  if (facts.web3formsKey) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: facts.web3formsKey,
        subject,
        from_name: "ZARX website",
        ...(replyTo ? { replyto: replyTo } : {}),
        ...fields,
      }),
    });
    const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (res.ok && data?.success) return "sent";
    throw new Error(data?.message || "The form could not be sent.");
  }

  const body = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value || "—"}`)
    .join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mailto";
}

/** Next working day (Mon–Fri) for "a founder will reply by …" messages. */
export function replyByDate(from = new Date()) {
  const d = new Date(from);
  do d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}
