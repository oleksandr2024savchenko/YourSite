"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL } from "@/lib/links";
import Reveal from "./Reveal";

const fieldClass =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-charcoal transition-all duration-300 placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";

const labelClass = "block text-xs font-medium tracking-wide text-charcoal";

export default function CTA() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // Static export has no backend — hand the enquiry to the visitor's mail client.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `${t.cta.form.name}: ${form.name}`,
      `${t.cta.form.email}: ${form.email}`,
      `${t.cta.form.company}: ${form.company}`,
      `${t.cta.form.projectType} ${form.projectType}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${t.cta.form.submit} — ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Calendar className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {t.cta.description}
              </p>
              <p className="mt-8 text-sm tracking-wide text-white/60">
                {t.cta.reassurance}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="cta-name" className={labelClass}>
                    {t.cta.form.name}
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="cta-email" className={labelClass}>
                    {t.cta.form.email}
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="cta-company" className={labelClass}>
                    {t.cta.form.company}
                  </label>
                  <input
                    id="cta-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => update("company")(e.target.value)}
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="cta-project" className={labelClass}>
                    {t.cta.form.projectType}
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="cta-project"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={(e) => update("projectType")(e.target.value)}
                      className={`${fieldClass} appearance-none pr-11 ${
                        form.projectType ? "" : "text-muted"
                      }`}
                    >
                      <option value="" disabled>
                        {t.cta.form.projectTypePlaceholder}
                      </option>
                      {t.cta.form.projectTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-accent-deep"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cta-message" className={labelClass}>
                    {t.cta.form.message}
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    className={`mt-2 resize-none ${fieldClass}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
              >
                {t.cta.form.submit}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
