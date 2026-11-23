import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import Process from "@/components/landing/Process";
import { aboutPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { images } from "@/lib/images";
import { withLocale } from "@/lib/routes";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import TrustBadges from "@/components/site/TrustBadges";
import { FounderPortrait } from "@/components/site/FounderCard";
import { FOUNDER } from "@/lib/site";
import { ArrowRight, BadgeEuro, CalendarCheck, Check, LifeBuoy, MessagesSquare, type LucideIcon } from "lucide-react";

const trustIcons: LucideIcon[] = [BadgeEuro, CalendarCheck, MessagesSquare, LifeBuoy];

export default function AboutView({ locale }: { locale: Locale }) {
  const page = aboutPage;
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(page.h1, locale), path: "/ueber-uns/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-medium text-accent-dark">
                ClearPoint · Wien
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
                {tx(page.h1, locale)}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{tx(page.intro, locale)}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={images.about}
                alt={locale === "de" ? "Ruhiger Arbeitsplatz für Webprojekte in Wien" : "Calm workspace for web projects in Vienna"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pt-16 sm:pt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <TrustBadges
              locale={locale}
              variant="grid"
              title={locale === "de" ? "Darauf können Sie sich verlassen" : "What you can rely on"}
            />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.who.title, locale)}</h2>
            {page.who.paragraphs.map((p) => (
              <p key={p.de} className="mt-4 leading-relaxed text-muted">
                {tx(p, locale)}
              </p>
            ))}
          </div>
        </section>

        <Process />

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.trust.title, locale)}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.trust.items.map((item, index) => {
                const Icon = trustIcons[index % trustIcons.length];
                return (
                  <div
                    key={item.title.de}
                    className="group flex gap-5 rounded-2xl border border-border/60 bg-accent-soft/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-accent-deep shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-charcoal">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal">{tx(item.title, locale)}</h3>
                      <p className="mt-2 text-sm text-muted">{tx(item.text, locale)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-soft/40 py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16 lg:px-8">
            <div className="@container relative mx-auto aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-3xl shadow-sm">
              <FounderPortrait className="absolute inset-0 h-full w-full" />
            </div>
            <div>
              <p className="text-sm font-medium text-accent-dark">
                {tx(page.founder.title, locale)}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-charcoal sm:text-3xl">
                {FOUNDER.name || page.founder.name}
              </h2>
              <p className="mt-2 font-medium text-accent-dark">{FOUNDER.role[locale]}</p>
              <p className="mt-5 leading-relaxed text-muted">{tx(page.founder.text, locale)}</p>
              <h3 className="mt-10 text-xl font-semibold text-charcoal">{tx(page.tech.title, locale)}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {page.tech.items.map((item) => (
                  <li key={item.de} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={2} />
                    {tx(item, locale)}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-sm text-muted">{tx(page.note, locale)}</p>
              <Link
                href={withLocale("/kontakt/", locale)}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-accent-dark"
              >
                {tx(ui.common.consultCta, locale)}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
