"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { home } from "@/content/home";
import { ui } from "@/content/ui";
import { caseStudies } from "@/content/portfolio";
import { paths, withLocale } from "@/lib/routes";
import SiteMockup from "@/components/cases/SiteMockup";

export default function HomeHero({ locale }: { locale: Locale }) {
  const copy = home.hero;
  const showcase = caseStudies[0];
  const [mode, setMode] = useState<"before" | "after">("after");

  return (
    <section className="hero-atmosphere relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <p className="text-sm font-medium text-accent-dark">{tx(copy.eyebrow, locale)}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] text-charcoal sm:text-6xl lg:text-[4.3rem]">
            {tx(copy.headlineStart, locale)} <em>{tx(copy.headlineAccent, locale)}</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{tx(copy.sub, locale)}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={withLocale(paths.contact, locale)}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-accent-dark"
            >
              {tx(copy.primary, locale)}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={withLocale(paths.websiteCheck, locale)}
              className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-charcoal underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent-dark"
            >
              {tx(copy.secondary, locale)}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {copy.facts.map((fact) => (
              <li key={fact.de} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-deep" strokeWidth={2.5} />
                {tx(fact, locale)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <figure aria-label={`${showcase.client} – ${tx(mode === "after" ? ui.cases.after : ui.cases.before, locale)}`}>
            <SiteMockup theme={showcase.theme} mode={mode} />
          </figure>
          <div className="mt-5 flex items-center gap-4">
            <div role="group" aria-label={showcase.client} className="inline-flex rounded-full border border-border bg-surface p-1 shadow-sm">
              {(["before", "after"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={mode === value}
                  onClick={() => setMode(value)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 ${
                    mode === value ? "bg-charcoal text-white" : "text-muted hover:text-charcoal"
                  }`}
                >
                  {tx(value === "after" ? ui.cases.after : ui.cases.before, locale)}
                </button>
              ))}
            </div>
            <p className="hidden font-hand text-2xl leading-none text-accent-dark sm:block" aria-hidden>
              ← {tx(copy.note, locale)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
