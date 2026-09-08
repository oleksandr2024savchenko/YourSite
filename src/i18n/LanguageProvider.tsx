"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionary";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLocale = "de",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const value = useMemo(
    () => ({
      locale: initialLocale,
      t: dictionaries[initialLocale] as Dictionary,
    }),
    [initialLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
