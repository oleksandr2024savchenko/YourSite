"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { caseStudies, portfolioVoices } from "@/content/portfolio";
import { paths, withLocale } from "@/lib/routes";
import CaseStudyCard from "@/components/cases/CaseStudyCard";
import Reveal from "./Reveal";

export default function References({ variant = "home" }: { variant?: "home" | "page" }) {
  const { t, locale } = useLanguage();
  const isPage = variant === "page";

  return (
    <section id="references" className="scroll-mt-20 bg-surface-soft/40 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-accent-dark">{t.work.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{t.work.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.work.description}</p>
          </Reveal>
        )}

        {isPage ? (
          <div className="space-y-20 sm:space-y-28">
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug}>
                <CaseStudyCard item={item} locale={locale} variant="full" reverse={index % 2 === 1} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:mt-14 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <Reveal
                key={item.slug}
                delay={0.08 * index}
                className="h-full w-[88%] max-w-[22rem] shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
              >
                <CaseStudyCard item={item} locale={locale} variant="compact" />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className={isPage ? "mt-16 max-w-3xl" : "mt-6 max-w-3xl"}>
          <p className="text-xs leading-relaxed text-muted">{tx(ui.cases.conceptNote, locale)}</p>
        </Reveal>

        {portfolioVoices.length > 0 && (
          <>
            <Reveal className="mt-12 max-w-2xl sm:mt-20">
              <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{t.work.voicesTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t.work.voicesDescription}</p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioVoices.map((voice, index) => (
                <Reveal key={tx(voice.name, locale)} delay={0.08 * index} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-8 shadow-sm">
                    <Quote className="h-5 w-5 text-accent-deep" strokeWidth={1.75} />
                    <p className="mt-4 text-sm leading-relaxed text-muted">{tx(voice.quote, locale)}</p>
                    <p className="mt-6 font-semibold text-charcoal">{tx(voice.name, locale)}</p>
                    <p className="mt-1 text-sm text-muted">{tx(voice.role, locale)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {!isPage && (
          <Reveal delay={0.12} className="mt-10">
            <Link
              href={withLocale(paths.references, locale)}
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent-dark hover:text-charcoal"
            >
              {t.work.viewAll}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
