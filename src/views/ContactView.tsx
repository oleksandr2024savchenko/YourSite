import type { Locale } from "@/i18n/dictionary";
import SiteShell from "@/components/site/SiteShell";
import ContactForm from "@/components/site/ContactForm";
import { contactPage } from "@/content/pages";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/site";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export default function ContactView({ locale }: { locale: Locale }) {
  const page = contactPage;
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(ui.nav.contact, locale), path: "/kontakt/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight break-words text-charcoal sm:text-4xl">
              {tx(page.h1, locale)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{tx(page.intro, locale)}</p>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">{tx(page.napTitle, locale)}</h2>
              <ul className="mt-8 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-accent-deep" />
                  {tx(ui.common.area, locale)}: {tx(page.area, locale)}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-accent-deep" />
                  <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 text-accent-deep" />
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-4 w-4 text-accent-deep" />
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {tx(ui.common.whatsapp, locale)}
                  </a>
                </li>
                <li>
                  {tx(ui.common.hours, locale)}: {tx(page.hours, locale)}
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">{tx(page.mapNote, locale)}</p>
              <a
                href={page.mapsHref}
                className="mt-4 inline-flex text-sm font-medium text-accent-dark"
                target="_blank"
                rel="noreferrer"
              >
                {tx(ui.common.map, locale)}
              </a>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title={tx(ui.common.map, locale)}
                  src="https://maps.google.com/maps?q=Wien%20Oesterreich&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-muted">
                {tx(ui.common.responseTime, locale)}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <ContactForm locale={locale} />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
