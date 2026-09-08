"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import { servicePages } from "@/content/service-pages";
import { dictionaries } from "@/i18n/dictionary";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, NAP } from "@/lib/site";
import { paths, withLocale } from "@/lib/routes";
import { isServiceSlug, serviceMenu } from "@/lib/services";

export default function Footer() {
  const { locale, t } = useLanguage();
  const year = new Date().getFullYear();

  const company = [
    { label: tx(ui.nav.about, locale), href: withLocale(paths.about, locale) },
    { label: tx(ui.nav.pricing, locale), href: withLocale(paths.preise, locale) },
    { label: tx(ui.nav.blog, locale), href: withLocale(paths.blog, locale) },
    { label: tx(ui.nav.contact, locale), href: withLocale(paths.contact, locale) },
  ];

  const services = serviceMenu.map((item) => ({
    label: isServiceSlug(item.slug)
      ? tx(servicePages[item.slug].menuName, locale)
      : locale === "de"
        ? "Website Check"
        : "Website check",
    href: withLocale(item.href, locale),
  }));

  const legal = [
    { label: dictionaries[locale].footer.links.impressum, href: withLocale(paths.impressum, locale) },
    { label: dictionaries[locale].footer.links.privacy, href: withLocale(paths.datenschutz, locale) },
    { label: dictionaries[locale].footer.links.terms, href: withLocale(paths.agb, locale) },
  ];

  return (
    <footer className="border-t border-border bg-surface-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={withLocale("/", locale)} className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-deep" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-charcoal">
                ClearPoint
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <span>
                  {tx(ui.common.area, locale)} {NAP.areaServed}
                  <br />
                  {NAP.city}, {NAP.country}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent-deep" />
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-charcoal">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent-deep" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-charcoal">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {[
            [locale === "de" ? "Unternehmen" : "Company", company],
            [locale === "de" ? "Leistungen" : "Services", services],
            [locale === "de" ? "Rechtliches" : "Legal", legal],
          ].map(([group, links]) => (
            <div key={group as string}>
              <p className="text-sm font-semibold text-charcoal">{group as string}</p>
              <ul className="mt-4 space-y-2.5">
                {(links as { label: string; href: string }[]).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted hover:text-charcoal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {year} ClearPoint. {t.footer.copyright}
          </p>
          <p className="text-sm text-muted">
            {NAP.city}, {NAP.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
