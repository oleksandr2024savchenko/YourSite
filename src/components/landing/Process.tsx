"use client";

import { Search, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

const stepIcons = [Search, Code2, Rocket];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.process.description}
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute top-10 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            aria-hidden
          />

          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const number = String(index + 1).padStart(2, "0");
            return (
              <Reveal
                key={step.title}
                delay={0.08 * index}
                className="relative text-center md:px-4"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/25 bg-surface shadow-sm">
                  <Icon
                    className="h-6 w-6 text-accent-deep"
                    strokeWidth={1.75}
                  />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                  {t.process.stepLabel} {number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
