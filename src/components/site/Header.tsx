"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import { servicePages } from "@/content/service-pages";
import { isServiceSlug, serviceMenu } from "@/lib/services";
import { paths, switchLocalePath, withLocale } from "@/lib/routes";

function LanguageToggle({
  compact = false,
  locale,
}: {
  compact?: boolean;
  locale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`relative flex items-center rounded-2xl border border-border bg-surface/80 p-1 ${
        compact ? "w-full" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {(["de", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.push(switchLocalePath(pathname, code))}
            className={`relative z-10 rounded-xl px-2.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
              compact ? "min-h-11 flex-1 py-2" : "py-1.5"
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { locale } = useLanguage();
  const pathname = usePathname();
  const nav = ui.nav;

  const serviceLinks = serviceMenu.map((item) => {
    const name = isServiceSlug(item.slug)
      ? tx(servicePages[item.slug].menuName, locale)
      : locale === "de"
        ? "Website Check"
        : "Website check";
    return { href: withLocale(item.href, locale), label: name };
  });

  const links = [
    { href: withLocale(paths.preise, locale), label: tx(nav.pricing, locale) },
    { href: withLocale(paths.references, locale), label: tx(nav.references, locale) },
    { href: withLocale(paths.about, locale), label: tx(nav.about, locale) },
    { href: withLocale(paths.blog, locale), label: tx(nav.blog, locale) },
    { href: withLocale(paths.contact, locale), label: tx(nav.contact, locale) },
  ];

  const isActive = (href: string) => pathname === href || pathname === href.slice(0, -1);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setMobileServicesOpen(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={withLocale("/", locale)} className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft transition-all duration-300 group-hover:bg-accent/25">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-deep" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-charcoal">
            ClearPoint
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-all duration-300 hover:text-charcoal"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              {tx(nav.services, locale)}
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 w-72 pt-3">
                <div className="rounded-2xl border border-border bg-surface p-2 shadow-lg">
                  <Link
                    href={withLocale(paths.services, locale)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-accent-dark hover:bg-accent-soft/60"
                  >
                    {tx(nav.allServices, locale)}
                  </Link>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-3 py-2 text-sm ${
                        isActive(link.href)
                          ? "bg-accent-soft/70 text-charcoal"
                          : "text-muted hover:bg-surface-soft hover:text-charcoal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-charcoal ${
                isActive(link.href) ? "text-charcoal" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle locale={locale} />
          <Link
            href={withLocale(paths.contact, locale)}
            className="inline-flex items-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
          >
            {tx(nav.cta, locale)}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl p-2 text-charcoal transition-all duration-300 hover:bg-surface-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? tx(nav.closeMenu, locale) : tx(nav.openMenu, locale)}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[min(70dvh,calc(100dvh-4rem-env(safe-area-inset-top,0px)-5.5rem))] overflow-y-auto overscroll-contain border-t border-border/60 bg-background px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-surface-soft"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              {tx(nav.services, locale)}
              <ChevronDown
                className={`h-4 w-4 text-muted transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mb-1 flex flex-col gap-1 border-l border-border/80 pl-3">
                <Link
                  href={withLocale(paths.services, locale)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-accent-dark hover:bg-accent-soft/60"
                  onClick={() => setOpen(false)}
                >
                  {tx(nav.allServices, locale)}
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-surface-soft hover:text-charcoal"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-surface-soft hover:text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle compact locale={locale} />
            <Link
              href={withLocale(paths.contact, locale)}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-medium text-charcoal"
              onClick={() => setOpen(false)}
            >
              {tx(nav.cta, locale)}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
