import type { Locale } from "@/i18n/dictionary";
import SiteShell from "@/components/site/SiteShell";
import TrustBadges from "@/components/site/TrustBadges";
import FaqList from "@/components/site/FaqList";
import JsonLd from "@/components/site/JsonLd";
import References from "@/components/landing/References";
import HomeHero from "@/components/home/HomeHero";
import ProblemSection from "@/components/home/ProblemSection";
import PackagesTeaser from "@/components/home/PackagesTeaser";
import Timeline from "@/components/home/Timeline";
import CheckTeaser from "@/components/home/CheckTeaser";
import ContactLetter from "@/components/home/ContactLetter";
import { home } from "@/content/home";
import { tx } from "@/content/copy";
import { faqJsonLd } from "@/lib/schema";

/**
 * Homepage, deliberately short: each section has its own shape
 * (statement, comparison list, cases, packages, dark timeline, report preview, FAQ, letter + form).
 */
export default function HomeView({ locale }: { locale: Locale }) {
  const faq = home.faq.items.map((item) => ({ question: tx(item.q, locale), answer: tx(item.a, locale) }));
  return (
    <SiteShell locale={locale}>
      <JsonLd data={faqJsonLd(faq)} />
      <main className="flex-1">
        <HomeHero locale={locale} />
        <TrustBadges locale={locale} />
        <ProblemSection locale={locale} />
        <References />
        <PackagesTeaser locale={locale} />
        <Timeline locale={locale} />
        <CheckTeaser locale={locale} />
        <FaqList items={faq} eyebrow={tx(home.faq.eyebrow, locale)} title={tx(home.faq.title, locale)} />
        <ContactLetter locale={locale} />
      </main>
    </SiteShell>
  );
}
