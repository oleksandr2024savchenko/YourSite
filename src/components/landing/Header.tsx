"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { homeHref, sectionHref } from "@/lib/links";
import type { Locale } from "@/i18n/dictionary";

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`relative flex items-center rounded-2xl border border-border bg-surface/80 p-1 ${
        compact ? "w-full" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {(["en", "de"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={`relative z-10 rounded-xl px-2.5 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
              compact ? "flex-1" : ""
            } ${active ? "text-accent-dark" : "text-muted hover:text-charcoal"}`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId={compact ? "lang-pill-mobile" : "lang-pill"}
                className="absolute inset-0 rounded-xl bg-accent-soft"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{code}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const anchor = (id: string) => sectionHref(pathname, id);

  const navLinks = [
    { href: anchor("benefits"), label: t.nav.benefits },
    { href: anchor("services"), label: t.nav.services },
    { href: anchor("about"), label: t.nav.about },
    { href: anchor("process"), label: t.nav.process },
    { href: anchor("pricing"), label: t.nav.pricing },
    { href: anchor("faq"), label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href={homeHref()} className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft transition-all duration-300 group-hover:bg-accent/25">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-deep" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-charcoal">
            ClearPoint
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-all duration-300 hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={anchor("contact")}
            className="inline-flex items-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-charcoal transition-all duration-300 hover:bg-surface-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-300 hover:bg-surface-soft hover:text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle compact />
            <a
              href={anchor("contact")}
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-accent-deep hover:text-white"
              onClick={() => setOpen(false)}
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
