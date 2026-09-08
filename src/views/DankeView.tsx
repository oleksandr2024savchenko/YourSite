import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import { withLocale } from "@/lib/routes";

export default function DankeView({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale}>
      <main className="mx-auto max-w-2xl flex-1 px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold text-charcoal">
          {locale === "de" ? "Danke für Ihre Anfrage." : "Thank you for your enquiry."}
        </h1>
        <p className="mt-5 text-muted">
          {locale === "de"
            ? "Wir antworten in der Regel innerhalb von 24 Stunden."
            : "We usually reply within 24 hours."}
        </p>
        <Link
          href={withLocale("/", locale)}
          className="mt-8 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal"
        >
          {locale === "de" ? "Zur Startseite" : "Back to home"}
        </Link>
      </main>
    </SiteShell>
  );
}
