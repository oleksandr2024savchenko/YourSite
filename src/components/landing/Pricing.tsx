"use client";

import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.pricing.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.pricing.description}
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, index) => {
            const featured = index === 1;
            return (
              <Reveal key={tier.name} delay={0.08 * index} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    featured
                      ? "border-accent/50 bg-accent-soft/70 lg:-translate-y-2 lg:shadow-md"
                      : "border-border/80 bg-surface"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-xl bg-accent-deep px-3 py-1 text-xs font-medium tracking-wide text-white">
                      {t.pricing.popular}
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-charcoal">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">
                      {tier.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {tier.description}
                    </p>
                  </div>

                  <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                    {t.pricing.included}
                  </p>
                  <ul className="mt-4 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep"
                          strokeWidth={2}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                      featured
                        ? "bg-accent text-charcoal shadow-sm hover:bg-accent-deep hover:text-white"
                        : "border border-border bg-surface text-charcoal hover:border-accent/40 hover:bg-accent-soft/50"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
