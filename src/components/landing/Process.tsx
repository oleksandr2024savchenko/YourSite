"use client";

import { Search, FileSignature, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

const stepIcons = [Search, FileSignature, Code2, Rocket];
const MILESTONE_INDEX = 1;

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const number = String(index + 1).padStart(2, "0");
            const milestone = index === MILESTONE_INDEX;

            return (
              <Reveal key={step.title} delay={0.08 * index} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    milestone
                      ? "border-accent bg-accent-soft/50"
                      : "border-border/80 bg-surface"
                  }`}
                >
                  {milestone && (
                    <span className="absolute -top-3 left-8 rounded-xl bg-accent-deep px-3 py-1 text-xs font-medium tracking-wide text-white">
                      {t.process.milestone}
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold tracking-tight text-accent-deep">
                      {number}
                    </span>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                        milestone
                          ? "bg-accent text-charcoal"
                          : "bg-accent-soft text-accent-deep"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
