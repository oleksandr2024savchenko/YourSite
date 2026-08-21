"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL, homeHref, sectionHref } from "@/lib/links";
import { serviceHref, serviceSlugs } from "@/lib/services";

type FooterLink = { label: string; href: string; route?: boolean };

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const anchor = (id: string) => sectionHref(pathname, id);

  const footerLinks: Record<string, FooterLink[]> = {
    [t.footer.groups.company]: [
      { label: t.footer.links.benefits, href: anchor("benefits") },
      { label: t.footer.links.services, href: anchor("services") },
      { label: t.footer.links.about, href: anchor("about") },
      { label: t.footer.links.process, href: anchor("process") },
      { label: t.footer.links.pricing, href: anchor("pricing") },
      { label: t.footer.links.faq, href: anchor("faq") },
      { label: t.footer.links.contact, href: anchor("contact") },
    ],
    [t.footer.groups.services]: t.services.items.map((item, index) => ({
      label: item.title,
      href: serviceHref(serviceSlugs[index]),
      route: true,
    })),
    [t.footer.groups.legal]: [
      { label: t.footer.links.privacy, href: "#" },
      { label: t.footer.links.impressum, href: "#" },
      { label: t.footer.links.terms, href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-surface-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href={homeHref()} className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-deep" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-charcoal">
                ClearPoint
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <span className="whitespace-pre-line">{t.footer.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent-deep" />
                <a
                  href="tel:+431234567890"
                  className="transition-all duration-300 hover:text-charcoal"
                >
                  +43 1 234 567 890
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent-deep" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-all duration-300 hover:text-charcoal"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-semibold text-charcoal">{group}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.route ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-all duration-300 hover:text-charcoal"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-all duration-300 hover:text-charcoal"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} ClearPoint GmbH. {t.footer.copyright}
          </p>
          <p className="text-sm text-muted">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
