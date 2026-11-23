import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import ValueProposition from "@/components/landing/ValueProposition";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import References from "@/components/landing/References";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import SiteShell from "@/components/site/SiteShell";
import TrustBadges from "@/components/site/TrustBadges";
import type { Locale } from "@/i18n/dictionary";
import { ArrowRight, SearchCheck } from "lucide-react";
import Link from "next/link";
import { withLocale } from "@/lib/routes";


export default function HomeView({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale}>
      <main className="flex-1">
        <Hero />
        <TrustBadges locale={locale} />
        <Benefits />
        <Services />
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="group mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-accent/40 bg-gradient-to-br from-accent-soft/70 via-surface to-surface px-5 py-8 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-10">
            <div className="flex gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-accent-deep shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 sm:flex">
                <SearchCheck className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-dark uppercase">
                  {locale === "de" ? "Gratis · Antwort in 24 Stunden" : "Free · reply within 24 hours"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-charcoal">
                  {locale === "de" ? "Kostenloser Website Check" : "Free website check"}
                </h2>
                <p className="mt-3 max-w-2xl text-muted">
                  {locale === "de"
                    ? "Technik, Mobile, SEO und DSGVO – wir prüfen Ihre aktuelle Website und sagen ehrlich, ob ein Relaunch nötig ist oder kleine Fixes reichen."
                    : "Technology, mobile, SEO and GDPR – we review your current website and tell you honestly whether you need a relaunch or small fixes are enough."}
                </p>
              </div>
            </div>
            <Link
              href={withLocale("/website-check/", locale)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
            >
              {locale === "de" ? "Check anfordern" : "Request the check"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <ValueProposition />
        <Process />
        <References />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </SiteShell>
  );
}
