"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/dictionary";
import { withLocale } from "@/lib/routes";
import SiteShell from "./SiteShell";

export default function RedirectNotice({
  locale,
  to,
}: {
  locale: Locale;
  to: string;
}) {
  const href = withLocale(to, locale);
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <SiteShell locale={locale}>
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-2xl font-semibold text-charcoal">
          {locale === "de" ? "Diese Seite ist umgezogen." : "This page has moved."}
        </h1>
        <p className="mt-4 text-muted">
          <Link href={href} className="text-accent-dark underline">
            {locale === "de" ? "Weiter zur aktuellen URL" : "Continue to the current URL"}
          </Link>
        </p>
      </main>
    </SiteShell>
  );
}
