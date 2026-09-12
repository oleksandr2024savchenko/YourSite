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
      <div className="flex min-h-0 flex-1 flex-col pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
        {children}
        <Footer />
      </div>
      <StickyCta />
    </LanguageProvider>
  );
}
