import type { Locale } from "@/i18n/dictionary";
import SiteShell from "@/components/site/SiteShell";
import ContactForm from "@/components/site/ContactForm";
import { websiteCheckPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { images } from "@/lib/images";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ArrowUpRight, Gauge, Search, ServerCog, Smartphone, Target, type LucideIcon } from "lucide-react";

const pillarIcons: LucideIcon[] = [ServerCog, Search, Smartphone, Target];

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
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
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
              className="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-auto lg:h-full"
            />
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {page.pillars.map((item, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];
              return (
                <div
                  key={item.title.de}
                  className="group rounded-2xl border border-border/80 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-colors duration-300 group-hover:bg-accent group-hover:text-charcoal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-charcoal">{tx(item.title, locale)}</h2>
                  <p className="mt-2 text-sm text-muted">{tx(item.text, locale)}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="bg-surface-soft/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-charcoal">{tx(page.toolsTitle, locale)}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.tools.map((tool) => (
                <a
                  key={tool.title.de}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-border/80 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
                >
                  <h3 className="flex items-center gap-2 font-semibold text-charcoal">
                    <Gauge className="h-4 w-4 text-accent-deep" strokeWidth={1.75} />
                    {tx(tool.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{tx(tool.text, locale)}</p>
                  <p className="mt-4 text-sm font-medium text-accent-dark">
                    <span className="inline-flex items-center gap-1">
                      {tx(tool.cta, locale)}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
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
            <div className="rounded-3xl border border-border bg-surface p-5 sm:p-8">
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
