"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import { CONTACT_EMAIL, FORM_ENDPOINT } from "@/lib/site";
import { withLocale } from "@/lib/routes";

const fieldClass =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-charcoal transition-all duration-300 placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";
const labelClass = "block text-xs font-medium tracking-wide text-charcoal";

export default function ContactForm({
  locale,
  defaultProject,
  compact = false,
}: {
  locale: Locale;
  defaultProject?: string;
  compact?: boolean;
}) {
  const copy = ui.form;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: defaultProject ?? "",
    message: "",
    dsgvo: false,
  });

  const update = (field: keyof typeof form) => (value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.dsgvo) return;
    setStatus("sending");

    const payload = {
      name: form.name,
      email: form.email,
      company: form.company,
      website: form.website,
      projectType: form.projectType,
      message: form.message,
      _subject: `ClearPoint: ${form.projectType || "Anfrage"}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent-deep" />
        <h3 className="mt-4 text-xl font-semibold text-charcoal">
          {tx(copy.successTitle, locale)}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {tx(copy.successText, locale)}
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-accent-dark hover:text-charcoal"
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              email: "",
              company: "",
              website: "",
              projectType: defaultProject ?? "",
              message: "",
              dsgvo: false,
            });
          }}
        >
          {tx(copy.another, locale)}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "space-y-4"}>
      <div className={compact ? "space-y-4" : "space-y-4"}>
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            {tx(copy.name, locale)}
          </label>
          <input
            id="lead-name"
            name="name"
            required
            value={form.name}
            onChange={(e) => update("name")(e.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className={labelClass}>
            {tx(copy.email, locale)}
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="lead-company" className={labelClass}>
            {tx(copy.company, locale)}
          </label>
          <input
            id="lead-company"
            name="company"
            value={form.company}
            onChange={(e) => update("company")(e.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="lead-website" className={labelClass}>
            {tx(copy.website, locale)}
          </label>
          <input
            id="lead-website"
            name="website"
            value={form.website}
            onChange={(e) => update("website")(e.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="lead-project" className={labelClass}>
            {tx(copy.projectType, locale)}
          </label>
          <select
            id="lead-project"
            name="projectType"
            required
            value={form.projectType}
            onChange={(e) => update("projectType")(e.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              {tx(copy.projectTypePlaceholder, locale)}
            </option>
            {copy.projectOptions.map((option) => (
              <option key={option.de} value={tx(option, locale)}>
                {tx(option, locale)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-message" className={labelClass}>
            {tx(copy.message, locale)}
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message")(e.target.value)}
            className={`mt-2 resize-none ${fieldClass}`}
          />
        </div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            required
            checked={form.dsgvo}
            onChange={(e) => update("dsgvo")(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-accent-deep"
          />
          <span>
            {tx(copy.dsgvo, locale)}{" "}
            <Link
              href={withLocale("/datenschutz/", locale)}
              className="font-medium text-accent-dark underline-offset-2 hover:underline"
            >
              {tx(copy.dsgvoLink, locale)}
            </Link>
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          {tx(copy.error, locale)}{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md disabled:opacity-70"
      >
        {status === "sending" ? tx(copy.sending, locale) : tx(copy.submit, locale)}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
