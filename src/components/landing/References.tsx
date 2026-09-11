"use client";

import Link from "next/link";
import { LayoutGrid, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { withLocale } from "@/lib/routes";
import Reveal from "./Reveal";

const projectTones = [
  "from-accent-soft to-surface",
  "from-slate-soft to-surface",
  "from-beige/80 to-surface",
];

const SLOTS = 3;

export default function References() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="references"
      className="scroll-mt-20 bg-surface-soft/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.work.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.work.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.work.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: SLOTS }, (_, index) => (
            <Reveal key={`project-${index}`} delay={0.08 * index} className="h-full">
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b ${projectTones[index]} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md`}
              >
                <div className="relative flex h-44 items-center justify-center bg-accent-soft/40">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-accent-deep shadow-sm">
                    <LayoutGrid className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-charcoal">
                    {t.work.projectSlot}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t.work.projectHint}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.work.voicesTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.work.voicesDescription}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: SLOTS }, (_, index) => (
            <Reveal key={`voice-${index}`} delay={0.08 * index} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                  <Quote className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-charcoal">
                  {t.work.voiceSlot}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.work.voiceHint}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-14">
          <Link
            href={withLocale("/kontakt/", locale)}
            className="inline-flex text-sm font-medium text-accent-dark hover:text-charcoal"
          >
            {t.work.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
