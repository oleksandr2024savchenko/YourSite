import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import Reveal from "@/components/landing/Reveal";
import {
  otherServiceSlugs,
  primaryServiceSlugs,
  type ServiceSlug,
} from "@/lib/services";
import { getService } from "@/content/service-pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { images } from "@/lib/images";
import { servicePath, withLocale } from "@/lib/routes";

function ServiceIndexCard({
  slug,
  locale,
  index,
}: {
  slug: ServiceSlug;
  locale: Locale;
  index: number;
}) {
  const page = getService(slug);
  return (
    <Reveal delay={0.05 * index}>
      <article className="group overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={images.services[slug]}
            alt={tx(page.imageAlt, locale)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-accent-deep/0 transition-colors duration-300 group-hover:bg-accent-deep/10" />
        </div>
        <div className="p-7">
          <h2 className="text-xl font-semibold text-charcoal">{tx(page.h1, locale)}</h2>
          <p className="mt-2 text-sm font-medium text-accent-dark">
            {tx(page.priceFrom, locale)} · {tx(page.timeline, locale)}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {tx(page.summary, locale)}
          </p>
          <Link
            href={withLocale(servicePath(slug), locale)}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-dark transition-all duration-300 group-hover:gap-1.5 hover:text-charcoal"
          >
            {locale === "de" ? "Zur Leistungsseite" : "Open service page"}
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesIndexView({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale}>
      <main className="flex-1">
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
              ClearPoint
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
              {locale === "de"
                ? "Leistungen: Website erstellen lassen in Wien"
                : "Services: have a website built in Vienna"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              {locale === "de"
                ? "Jede Leistung hat eine eigene Seite, eigene Preise, eigene FAQ. Die Startseite verkauft das Studio – hier wählen Sie den passenden Einstieg."
                : "Each service has its own page, prices and FAQ. The homepage sells the studio – here you pick the right entry."}
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {primaryServiceSlugs.map((slug, index) => (
              <ServiceIndexCard key={slug} slug={slug} locale={locale} index={index} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-charcoal">
              {tx(ui.services.otherTitle, locale)}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {otherServiceSlugs.map((slug, index) => (
                <ServiceIndexCard key={slug} slug={slug} locale={locale} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
