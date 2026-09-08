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
        <section className="hero-atmosphere py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-charcoal">
              {tx(page.h1, locale)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{tx(page.intro, locale)}</p>
          </div>
        </section>
        <Pricing />
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.extrasTitle, locale)}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.extras.map((item) => (
                <div key={item.title.de} className="rounded-2xl border border-border/80 p-7">
                  <h3 className="font-semibold text-charcoal">{tx(item.title, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{tx(item.text, locale)}</p>
                </div>
              ))}
            </div>
            <Link
              href={withLocale("/kontakt/", locale)}
              className="mt-10 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal"
            >
              {locale === "de" ? "Unverbindlich anfragen" : "Enquire without obligation"}
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
