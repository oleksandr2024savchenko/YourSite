"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  hubServiceSlug,
  pricingOtherSlugs,
  pricingPrimarySlugs,
  serviceHref,
  type ServiceSlug,
} from "@/lib/services";
import { withLocale } from "@/lib/routes";
import { getService } from "@/content/service-pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import Reveal from "./Reveal";

const FEATURED_SLUG = "business-website";

export default function Pricing() {
  const { t, locale } = useLanguage();
  const hubPage = getService(hubServiceSlug);

  const renderCard = (slug: ServiceSlug, index: number) => {
    const page = getService(slug);
    const featured = slug === FEATURED_SLUG;
    return (
      <Reveal
        key={slug}
        delay={0.08 * index}
        className="h-full w-[85%] max-w-[20rem] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
      >
        <div
          className={`group relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
            featured
              ? "border-accent bg-accent-soft/60 lg:-translate-y-2 lg:shadow-md hover:lg:-translate-y-3"
              : "border-border/80 bg-surface hover:border-accent/40"
          }`}
        >
          {featured && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-xl bg-accent-deep px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap text-white">
              {t.pricing.popular}
            </span>
          )}

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-slate uppercase">
              {tx(page.menuName, locale)}
            </h3>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">
              {tx(page.priceFrom, locale)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tx(page.positioning, locale)}
            </p>
          </div>

          <p className="mt-6 text-xs font-medium tracking-wide text-charcoal">
            {t.pricing.included}
          </p>
          <ul className="mt-3 flex-1 space-y-2.5">
            {page.pricing.included.map((feature) => (
              <li
                key={feature.de}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep"
                  strokeWidth={2}
                />
                <span>{tx(feature, locale)}</span>
              </li>
            ))}
          </ul>

          <Link
            href={withLocale("/kontakt/", locale)}
            className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-center text-sm font-medium transition-all duration-300 ${
              featured
                ? "bg-accent text-charcoal shadow-sm hover:bg-accent-deep hover:text-white"
                : "border border-border bg-surface text-charcoal hover:border-accent/40 hover:bg-accent-soft/50"
            }`}
          >
            {tx(page.menuName, locale)}
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href={withLocale(serviceHref(slug), locale)}
            className="mt-2.5 inline-flex items-center justify-center gap-1.5 rounded-2xl px-5 py-2.5 text-center text-sm font-medium text-accent-dark transition-all duration-300 hover:bg-accent-soft/60"
          >
            {t.pricing.details}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </Reveal>
    );
  };

  return (
    <section id="pricing" className="scroll-mt-20 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <Reveal delay={0.05} className="mt-8 sm:mt-14">
          <div className="flex flex-col gap-6 rounded-3xl border border-accent/40 bg-accent-soft/50 p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-deep uppercase">
                {tx(ui.services.hubEyebrow, locale)}
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight text-charcoal sm:text-2xl">
                {tx(hubPage.menuName, locale)} · {tx(hubPage.priceFrom, locale)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {tx(ui.services.hubHint, locale)}
              </p>
            </div>
            <Link
              href={withLocale(serviceHref(hubServiceSlug), locale)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
            >
              {t.pricing.details}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pt-4 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pt-2 sm:pb-0 lg:grid-cols-4">
          {pricingPrimarySlugs.map((slug, index) => renderCard(slug, index))}
        </div>

        <Reveal className="mt-12 max-w-2xl sm:mt-20">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {tx(ui.services.otherTitle, locale)}
          </h2>
        </Reveal>
        <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {pricingOtherSlugs.map((slug, index) => renderCard(slug, index))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-border/80 bg-surface p-6 text-center shadow-sm sm:p-8">
            <div>
              <p className="text-xl font-semibold tracking-tight text-charcoal">
                {t.pricing.helper.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t.pricing.helper.description}
              </p>
            </div>
            <Link
              href={withLocale("/preise/", locale)}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md sm:w-auto"
            >
              {t.pricing.helper.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted">
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
