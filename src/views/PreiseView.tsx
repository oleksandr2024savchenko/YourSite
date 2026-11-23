import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import Pricing from "@/components/landing/Pricing";
import { pricingPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { withLocale } from "@/lib/routes";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ui } from "@/content/ui";
import PackageComparison from "@/components/pricing/PackageComparison";
import PriceCalculator from "@/components/pricing/PriceCalculator";
import { ArrowRight, Calculator, Receipt, LifeBuoy, PenLine, type LucideIcon } from "lucide-react";

const extraIcons: LucideIcon[] = [PenLine, Receipt, LifeBuoy];

export default function PreiseView({ locale }: { locale: Locale }) {
  const page = pricingPage;
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(ui.nav.pricing, locale), path: "/preise/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
              {tx(page.h1, locale)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{tx(page.intro, locale)}</p>
            <a
              href="#kostenrechner"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl border border-border bg-surface/80 px-5 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface"
            >
              <Calculator className="h-4 w-4 text-accent-deep" strokeWidth={1.75} />
              {locale === "de" ? "Direkt zum Kostenrechner" : "Jump to the cost calculator"}
            </a>
          </div>
        </section>
        <Pricing />
        <section className="pb-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              {locale === "de" ? "Pakete im Vergleich" : "Packages compared"}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              {locale === "de"
                ? "Seiten, Launch-Zeit, SEO und Garantien auf einen Blick – die Business Website ist für die meisten KMU der beste Einstieg."
                : "Pages, launch time, SEO and guarantees at a glance – the business website is the best start for most SMEs."}
            </p>
            <div className="mt-10">
              <PackageComparison locale={locale} />
            </div>
          </div>
        </section>
        <PriceCalculator locale={locale} />
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.extrasTitle, locale)}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.extras.map((item, index) => {
                const Icon = extraIcons[index % extraIcons.length];
                return (
                  <div
                    key={item.title.de}
                    className="group rounded-2xl border border-border/80 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-colors duration-300 group-hover:bg-accent group-hover:text-charcoal">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-semibold text-charcoal">{tx(item.title, locale)}</h3>
                    <p className="mt-2 text-sm text-muted">{tx(item.text, locale)}</p>
                  </div>
                );
              })}
            </div>
            <Link
              href={withLocale("/kontakt/", locale)}
              className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white"
            >
              {locale === "de" ? "Unverbindlich anfragen" : "Enquire without obligation"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
