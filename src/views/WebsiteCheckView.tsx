import type { Locale } from "@/i18n/dictionary";
import SiteShell from "@/components/site/SiteShell";
import ContactForm from "@/components/site/ContactForm";
import { websiteCheckPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { images } from "@/lib/images";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export default function WebsiteCheckView({ locale }: { locale: Locale }) {
  const page = websiteCheckPage;
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(page.h1, locale), path: "/website-check/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
                {tx(page.h1, locale)}
              </h1>
              <p className="mt-5 text-lg text-muted">{tx(page.intro, locale)}</p>
            </div>
            <img
              src={images.check}
              alt={
                locale === "de"
                  ? "Analyse einer Website auf Technik, SEO, Mobile und Conversion"
                  : "Analysing a website for technology, SEO, mobile and conversion"
              }
              className="h-full rounded-3xl object-cover"
            />
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {page.pillars.map((item) => (
              <div key={item.title.de} className="rounded-2xl border border-border/80 p-6">
                <h2 className="text-lg font-semibold text-charcoal">{tx(item.title, locale)}</h2>
                <p className="mt-3 text-sm text-muted">{tx(item.text, locale)}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-surface-soft/50 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.toolsTitle, locale)}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.tools.map((tool) => (
                <a
                  key={tool.title.de}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-border/80 bg-surface p-7 transition hover:border-accent/50"
                >
                  <h3 className="font-semibold text-charcoal">{tx(tool.title, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{tx(tool.text, locale)}</p>
                  <p className="mt-4 text-sm font-medium text-accent-dark">
                    {tx(tool.cta, locale)} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">
                {locale === "de"
                  ? "Professionelle Einschätzung anfragen"
                  : "Request a professional review"}
              </h2>
              <p className="mt-4 text-muted">
                {locale === "de"
                  ? "Schicken Sie uns Ihre URL. Wir prüfen die vier Punkte und sagen klar, ob ein Relaunch, eine Landing Page oder erst einmal Technik reicht."
                  : "Send us your URL. We review the four points and say clearly whether you need a relaunch, a landing page or first a technical fix."}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <ContactForm
                locale={locale}
                defaultProject={locale === "de" ? "Website Check" : "Website check"}
              />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
