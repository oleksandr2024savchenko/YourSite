"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import { servicePages } from "@/content/service-pages";
import { isServiceSlug, serviceMenu } from "@/lib/services";
import { paths, switchLocalePath, withLocale } from "@/lib/routes";

const ease = [0.22, 1, 0.36, 1] as const;

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease, delayChildren: 0.04, staggerChildren: 0.03 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease } },
};

const noopSubscribe = () => () => {};

/** Animated burger: three lines morph into an X. */
function BurgerIcon({ open }: { open: boolean }) {
  const line = "absolute left-0 h-[1.75px] w-5 rounded-full bg-current";
  const t = { duration: 0.3, ease };
  return (
    <span className="relative block h-4 w-5" aria-hidden>
      <motion.span className={line} style={{ top: 1 }} animate={open ? { top: 7, rotate: 45 } : { top: 1, rotate: 0 }} transition={t} />
      <motion.span className={line} style={{ top: 7 }} animate={{ opacity: open ? 0 : 1, scaleX: open ? 0.4 : 1 }} transition={t} />
      <motion.span className={line} style={{ top: 13 }} animate={open ? { top: 7, rotate: -45 } : { top: 13, rotate: 0 }} transition={t} />
    </span>
  );
}

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
  const canPortal = useSyncExternalStore(noopSubscribe, () => true, () => false);
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

  const closeMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  // Close menus on navigation (state adjustment during render instead of an effect).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

  // Lock page scroll while the mobile menu is open. Only <html> is locked: setting
  // overflow on <body> would turn it into its own scroll container (html uses
  // overflow-x: clip) and the sticky header would jump to the top of the document.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
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
            <AnimatePresence>
              {servicesOpen && (
              <motion.div
                  className="absolute left-0 top-full z-50 w-72 pt-3"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2, ease }}
                >
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
              </motion.div>
              )}
            </AnimatePresence>
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
            className="inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-accent-dark"
          >
            {tx(nav.cta, locale)}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl p-2 text-charcoal transition-all duration-300 hover:bg-surface-soft lg:hidden"
          onClick={() => (open ? closeMenu() : setOpen(true))}
          aria-label={open ? tx(nav.closeMenu, locale) : tx(nav.openMenu, locale)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <BurgerIcon open={open} />
        </button>
      </div>

      {canPortal &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top,0px))] bottom-0 z-[60] overflow-y-auto overscroll-contain border-t border-border/60 bg-background px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 lg:hidden"
              >
                <nav className="flex flex-col gap-1">
                  <motion.button
                    variants={itemVariants}
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-charcoal transition-colors duration-200 hover:bg-surface-soft"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {tx(nav.services, locale)}
                    <ChevronDown
                      className={`h-4 w-4 text-muted transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        key="services"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <div className="mb-1 flex flex-col gap-1 border-l border-border/80 pl-3">
                          <Link
                            href={withLocale(paths.services, locale)}
                            className="rounded-xl px-3 py-3 text-sm font-medium text-accent-dark transition-colors duration-200 hover:bg-accent-soft/60"
                            onClick={closeMenu}
                          >
                            {tx(nav.allServices, locale)}
                          </Link>
                          {serviceLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="rounded-xl px-3 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface-soft hover:text-charcoal"
                              onClick={closeMenu}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {links.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-3 py-3 text-base font-medium text-muted transition-colors duration-200 hover:bg-surface-soft hover:text-charcoal"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="mt-3">
                    <LanguageToggle compact locale={locale} />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href={withLocale(paths.contact, locale)}
                      className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-dark"
                      onClick={closeMenu}
                    >
                      {tx(nav.cta, locale)}
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
