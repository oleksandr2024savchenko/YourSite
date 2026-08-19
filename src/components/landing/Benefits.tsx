"use client";

import { Globe, Handshake, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

const itemIcons = [Globe, Handshake, TrendingUp];
const itemTones = [
  "bg-accent-soft text-accent-deep",
  "bg-slate-soft text-slate",
  "bg-beige/70 text-charcoal",
];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      className="scroll-mt-20 bg-surface-soft/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.benefits.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.benefits.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.benefits.items.map((item, index) => {
            const Icon = itemIcons[index];
            return (
              <Reveal key={item.title} delay={0.08 * index} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${itemTones[index]} transition-all duration-300 group-hover:-translate-y-0.5`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-14">
          <p className="text-center text-base font-medium leading-relaxed tracking-tight text-charcoal sm:text-lg lg:text-xl lg:whitespace-nowrap">
            {t.benefits.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
