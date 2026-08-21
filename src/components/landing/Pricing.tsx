"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { serviceHref, serviceSlugs } from "@/lib/services";
import Reveal from "./Reveal";

const FEATURED_INDEX = 3;

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

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, index) => {
            const featured = index === FEATURED_INDEX;
            return (
              <Reveal key={tier.name} delay={0.08 * index} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    featured
                      ? "border-accent bg-accent-soft/60 lg:-translate-y-2 lg:shadow-md"
                      : "border-border/80 bg-surface"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-xl bg-accent-deep px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap text-white">
                      {t.pricing.popular}
                    </span>
                  )}

                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">
                      {tier.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {tier.description}
                    </p>
                  </div>

                  <p className="mt-6 text-xs font-medium tracking-wide text-charcoal">
                    {t.pricing.included}
                  </p>
                  <ul className="mt-3 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep"
                          strokeWidth={2}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="text-xs font-medium tracking-wide text-charcoal">
                      {t.pricing.gainLabel}
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                      {tier.gain.map((step, stepIndex) => (
                        <span
                          key={step}
                          className="inline-flex items-center gap-1.5 text-sm text-muted"
                        >
                          {stepIndex > 0 && (
                            <ArrowRight
                              className="h-3.5 w-3.5 text-accent-deep"
                              strokeWidth={2}
                            />
                          )}
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-center text-sm font-medium transition-all duration-300 ${
                      featured
                        ? "bg-accent text-charcoal shadow-sm hover:bg-accent-deep hover:text-white"
                        : "border border-border bg-surface text-charcoal hover:border-accent/40 hover:bg-accent-soft/50"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>

                  <Link
                    href={serviceHref(serviceSlugs[index])}
                    className="mt-2.5 inline-flex items-center justify-center gap-1.5 rounded-2xl px-5 py-2.5 text-center text-sm font-medium text-accent-dark transition-all duration-300 hover:bg-accent-soft/60"
                  >
                    {t.pricing.details}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-border/80 bg-surface p-8 text-center shadow-sm">
            <div>
              <p className="text-xl font-semibold tracking-tight text-charcoal">
                {t.pricing.helper.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t.pricing.helper.description}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
            >
              {t.pricing.helper.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted">
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
