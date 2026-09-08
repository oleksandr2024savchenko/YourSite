"use client";

import { useEffect, type ReactNode } from "react";
import type { Locale } from "@/i18n/dictionary";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Header from "./Header";
import Footer from "./Footer";
import StickyCta from "./StickyCta";
import JsonLd from "./JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";

function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "de" ? "de" : "en";
  }, [locale]);
  return null;
}

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LanguageProvider initialLocale={locale}>
      <HtmlLang locale={locale} />
      <JsonLd data={localBusinessJsonLd()} />
      <Header />
      <div className="flex flex-1 flex-col pb-16 lg:pb-0">{children}</div>
      <Footer />
      <StickyCta />
    </LanguageProvider>
  );
}
