"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/images";
import {
  hubServiceSlug,
  otherServiceSlugs,
  primaryServiceSlugs,
  serviceHref,
  serviceSlugs,
  type ServiceSlug,
} from "@/lib/services";
import { withLocale } from "@/lib/routes";
import { getService } from "@/content/service-pages";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import Reveal from "./Reveal";

const accents = [
  "from-accent-soft to-surface",
  "from-slate-soft to-surface",
  "from-beige/80 to-surface",
  "from-accent-soft/70 to-surface",
  "from-slate-soft/80 to-surface",
  "from-beige/70 to-surface",
  "from-accent-soft/50 to-surface",
];

export default function Services() {
  const { t, locale } = useLanguage();
  const hubPage = getService(hubServiceSlug);

  const renderCard = (slug: ServiceSlug, index: number) => {
    const service = t.services.items[serviceSlugs.indexOf(slug)];
    return (
      <Reveal
        key={slug}
        delay={0.08 * index}
        className="h-full w-[85%] max-w-[21rem] shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
      >
        <div
          className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b ${accents[index % accents.length]} shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lg`}
        >
          <div className="relative h-44 overflow-hidden">
            <Image
              src={images.services[slug]}
              alt={service.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-accent-deep/0 transition-colors duration-300 group-hover:bg-accent-deep/10" />
          </div>

          <div className="flex flex-1 flex-col p-8 pt-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-charcoal">
              {service.title}
            </h3>
            {service.positioning ? (
              <p className="mt-2 text-sm font-medium text-accent-dark">
                {service.positioning}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>

            <div className="mt-6 flex-1">
              <p className="text-xs font-medium tracking-wide text-charcoal">
                {t.services.gainLabel}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                {service.gain.map((step, stepIndex) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2 text-sm text-muted"
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

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href={withLocale(serviceHref(slug), locale)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md sm:w-auto"
              >
                {t.services.details}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={withLocale("/kontakt/", locale)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep transition-all duration-300 hover:text-charcoal"
              >
                {t.services.discuss}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    );
  };

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-surface-soft/50 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.services.description}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 sm:mt-14">
          <div className="group relative grid overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent-soft/70 via-surface to-surface shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-lg lg:grid-cols-5">
            <div className="flex flex-col p-6 sm:p-10 lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-deep uppercase">
                {tx(ui.services.hubEyebrow, locale)}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(hubPage.menuName, locale)}
              </h3>
              <p className="mt-3 text-sm font-medium text-accent-dark sm:text-base">
                {tx(hubPage.positioning, locale)}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {tx(ui.services.hubHint, locale)}
              </p>
              <p className="mt-6 text-2xl font-semibold tracking-tight text-charcoal">
                {tx(hubPage.priceFrom, locale)}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <Link
                  href={withLocale(serviceHref(hubServiceSlug), locale)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md sm:w-auto"
                >
                  {t.services.details}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={withLocale("/kontakt/", locale)}
                  className="inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-accent-deep transition-all duration-300 hover:text-charcoal"
                >
                  {t.services.discuss}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative hidden min-h-[18rem] lg:col-span-2 lg:block">
              <Image
                src={images.services[hubServiceSlug]}
                alt={tx(hubPage.imageAlt, locale)}
                fill
                loading="lazy"
                sizes="40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/30 to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 max-w-2xl sm:mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {tx(ui.services.packagesTitle, locale)}
          </h2>
        </Reveal>
        <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:mt-10 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {primaryServiceSlugs.map((slug, index) => renderCard(slug, index))}
        </div>

        <Reveal className="mt-12 max-w-2xl sm:mt-20">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {tx(ui.services.otherTitle, locale)}
          </h2>
        </Reveal>
        <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:mt-10 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {otherServiceSlugs.map((slug, index) => renderCard(slug, index))}
        </div>
      </div>
    </section>
  );
}
