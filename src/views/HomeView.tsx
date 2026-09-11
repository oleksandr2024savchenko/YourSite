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
import TrustStrip from "@/components/site/TrustStrip";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import Link from "next/link";
import { withLocale } from "@/lib/routes";

const trust = [
  { de: "Fixpreis vor dem Start", en: "Fixed price before we start" },
  { de: "SEO-Basis inklusive", en: "SEO basics included" },
  { de: "Mobile First", en: "Mobile first" },
  { de: "DSGVO-konform", en: "GDPR compliant" },
  { de: "Für Wien & Umgebung", en: "For Vienna and around" },
  { de: "Antwort in 24 Stunden", en: "Reply within 24 hours" },
];

export default function HomeView({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale}>
      <main className="flex-1">
        <Hero />
        <TrustStrip items={trust.map((item) => tx(item, locale))} />
        <Benefits />
        <Services />
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-accent-soft/40 px-8 py-10 sm:px-12">
            <h2 className="text-2xl font-semibold text-charcoal">
              {locale === "de"
                ? "Kostenloser Website Check"
                : "Free website check"}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              {locale === "de"
                ? "Technik, SEO, Mobile und Conversion – als Einstieg, bevor Sie relaunchen oder Anzeigen schalten."
                : "Technology, SEO, mobile and conversion – as a starting point before you relaunch or run ads."}
            </p>
            <Link
              href={withLocale("/website-check/", locale)}
              className="mt-6 inline-flex rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-charcoal"
            >
              {locale === "de" ? "Check starten" : "Start the check"}
            </Link>
          </div>
        </section>
        <ValueProposition />
        <Process />
        <References pageLink />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </SiteShell>
  );
}
