import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import References from "@/components/landing/References";
import { referencesPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { withLocale } from "@/lib/routes";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ui } from "@/content/ui";

export default function ReferencesView({ locale }: { locale: Locale }) {
  const page = referencesPage;
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(ui.nav.references, locale), path: "/referenzen/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
              ClearPoint · Wien
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
              {tx(page.h1, locale)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {tx(page.intro, locale)}
            </p>
          </div>
        </section>
        <References />
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href={withLocale("/kontakt/", locale)}
              className="inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal"
            >
              {tx(ui.common.consultCta, locale)}
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
