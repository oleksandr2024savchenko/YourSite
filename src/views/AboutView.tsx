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
        <section className="hero-atmosphere py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
                ClearPoint · Wien
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-charcoal">
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

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.trust.title, locale)}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.trust.items.map((item) => (
                <div key={item.title.de} className="rounded-2xl bg-accent-soft/40 p-7">
                  <h3 className="font-semibold text-charcoal">{tx(item.title, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{tx(item.text, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-soft/40 py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.founder.title, locale)}</h2>
            <p className="mt-4 font-medium text-charcoal">
              {page.founder.name} · {tx(page.founder.role, locale)}
            </p>
            <p className="mt-4 leading-relaxed text-muted">{tx(page.founder.text, locale)}</p>
            <h3 className="mt-10 text-xl font-semibold text-charcoal">{tx(page.tech.title, locale)}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {page.tech.items.map((item) => (
                <li key={item.de}>• {tx(item, locale)}</li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted">{tx(page.note, locale)}</p>
            <Link
              href={withLocale("/kontakt/", locale)}
              className="mt-8 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal"
            >
              {tx(ui.common.consultCta, locale)}
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
