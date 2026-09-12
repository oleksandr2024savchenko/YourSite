import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Tag,
} from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { getService } from "@/content/service-pages";
import type { ServiceSlug } from "@/lib/services";
import { images } from "@/lib/images";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/site";
import { paths, servicePath, withLocale } from "@/lib/routes";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import Reveal from "@/components/landing/Reveal";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import TrustStrip from "@/components/site/TrustStrip";
import FaqList from "@/components/site/FaqList";
import ContactForm from "@/components/site/ContactForm";
import JsonLd from "@/components/site/JsonLd";
import SiteShell from "@/components/site/SiteShell";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md sm:w-auto";
const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-charcoal transition-all duration-300 hover:border-accent/50 hover:bg-surface sm:w-auto";

function relatedHref(id: ServiceSlug | "website-check") {
  return id === "website-check" ? paths.websiteCheck : servicePath(id);
}

function relatedName(id: ServiceSlug | "website-check", locale: Locale) {
  if (id === "website-check") return locale === "de" ? "Website Check" : "Website check";
  return tx(getService(id).menuName, locale);
}

export default function ServiceLanding({
  slug,
  locale,
}: {
  slug: ServiceSlug;
  locale: Locale;
}) {
  const page = getService(slug);
  const contact = withLocale(paths.contact, locale);
  const faq = page.faq.map((item) => ({
    question: tx(item.question, locale),
    answer: tx(item.answer, locale),
  }));

  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [
              { name: tx(ui.breadcrumbs.home, locale), path: "/" },
              { name: tx(ui.breadcrumbs.services, locale), path: paths.services },
              { name: tx(page.menuName, locale), path: servicePath(slug) },
            ],
            locale,
          ),
          serviceJsonLd({
            name: tx(page.h1, locale),
            description: tx(page.seoDescription, locale),
            path: servicePath(slug),
            locale,
          }),
          faqJsonLd(faq),
        ]}
      />
      <main className="flex-1">
        <section className="hero-atmosphere relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <Breadcrumbs
              locale={locale}
              items={[
                { name: tx(ui.breadcrumbs.home, locale), path: "/" },
                { name: tx(ui.breadcrumbs.services, locale), path: paths.services },
                { name: tx(page.menuName, locale), path: servicePath(slug) },
              ]}
            />
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
                  ClearPoint · Wien
                </p>
                <h1 className="mt-4 text-[1.75rem] leading-[1.2] font-semibold tracking-tight break-words text-charcoal sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.15]">
                  {tx(page.h1, locale)}
                </h1>
                <p className="mt-3 text-lg font-medium text-accent-dark">
                  {tx(page.positioning, locale)}
                </p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  {tx(page.summary, locale)}
                </p>
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-charcoal">
                  <p className="inline-flex items-center gap-2">
                    <Tag className="h-4 w-4 text-accent-deep" />
                    {tx(ui.common.fromPrice, locale)}: {tx(page.priceFrom, locale)}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent-deep" />
                    {tx(ui.common.timeline, locale)}: {tx(page.timeline, locale)}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link href={contact} className={primaryButton}>
                    {tx(ui.common.consultCta, locale)}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={withLocale(paths.preise, locale)} className={secondaryButton}>
                    {tx(ui.nav.pricing, locale)}
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={images.services[slug]}
                      alt={tx(page.imageAlt, locale)}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip items={page.trust.map((item) => tx(item, locale))} />

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.problem.title, locale)}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {tx(page.problem.intro, locale)}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {page.problem.items.map((item, index) => (
                <Reveal key={item.title.de} delay={0.05 * index}>
                  <div className="h-full rounded-2xl border border-border/80 bg-surface p-7 shadow-sm">
                    <h3 className="text-lg font-semibold text-charcoal">
                      {tx(item.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tx(item.text, locale)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-soft/50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                  {tx(page.included.title, locale)}
                </h2>
                <ul className="mt-6 space-y-3">
                  {page.included.items.map((item) => (
                    <li key={item.de} className="flex items-start gap-3 text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent-deep" />
                      <span>{tx(item, locale)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                  {tx(page.audience.title, locale)}
                </h2>
                <p className="mt-6 text-xs font-semibold tracking-wide text-slate uppercase">
                  {tx(ui.common.fits, locale)}
                </p>
                <ul className="mt-3 space-y-2">
                  {page.audience.fits.map((item) => (
                    <li key={item.de} className="flex gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 text-accent-deep" />
                      {tx(item, locale)}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-semibold tracking-wide text-slate uppercase">
                  {tx(ui.common.notFits, locale)}
                </p>
                <ul className="mt-3 space-y-2">
                  {page.audience.notFits.map((item) => (
                    <li key={item.de} className="text-sm text-muted">
                      — {tx(item, locale)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.technical.title, locale)}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.technical.items.map((item, index) => (
                <Reveal key={item.title.de} delay={0.05 * index}>
                  <div className="rounded-2xl border border-border/80 bg-surface p-7">
                    <h3 className="text-lg font-semibold text-charcoal">
                      {tx(item.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tx(item.text, locale)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.business.title, locale)}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.business.items.map((item, index) => (
                <Reveal key={item.title.de} delay={0.05 * index}>
                  <div className="h-full rounded-2xl bg-accent-soft/50 p-7">
                    <h3 className="text-lg font-semibold text-charcoal">
                      {tx(item.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tx(item.text, locale)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {page.extras.map((block) => (
          <section key={block.title.de} className="pb-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                  {tx(block.title, locale)}
                </h2>
                {block.intro ? (
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                    {tx(block.intro, locale)}
                  </p>
                ) : null}
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {block.items.map((item) => (
                  <div key={item.title.de} className="rounded-2xl border border-border/80 p-6">
                    <h3 className="font-semibold text-charcoal">{tx(item.title, locale)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {tx(item.text, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-surface-soft/50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.process.title, locale)}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {page.process.steps.map((step, index) => (
                <Reveal key={step.title.de} delay={0.04 * index}>
                  <div className="h-full rounded-2xl border border-border/80 bg-surface p-7">
                    <p className="text-sm font-semibold text-accent-deep">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-charcoal">
                      {tx(step.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tx(step.text, locale)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.pricing.title, locale)}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {tx(page.pricing.intro, locale)}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-accent bg-accent-soft/50 p-8">
                <p className="text-3xl font-semibold text-charcoal">
                  {tx(page.priceFrom, locale)}
                </p>
                <p className="mt-6 text-xs font-semibold tracking-wide text-slate uppercase">
                  {tx(ui.common.included, locale)}
                </p>
                <ul className="mt-3 space-y-2">
                  {page.pricing.included.map((item) => (
                    <li key={item.de} className="flex gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 text-accent-deep" />
                      {tx(item, locale)}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-semibold tracking-wide text-slate uppercase">
                  {tx(ui.common.notIncluded, locale)}
                </p>
                <ul className="mt-3 space-y-2">
                  {page.pricing.excluded.map((item) => (
                    <li key={item.de} className="text-sm text-muted">
                      — {tx(item, locale)}
                    </li>
                  ))}
                </ul>
                <Link href={contact} className={`${primaryButton} mt-8 w-full`}>
                  {tx(ui.common.consultCta, locale)}
                </Link>
              </div>
              <div className="rounded-2xl border border-border/80 bg-surface p-8">
                <p className="text-sm font-semibold text-charcoal">Add-ons</p>
                <ul className="mt-4 divide-y divide-border/70">
                  {page.pricing.addons.map((addon) => (
                    <li key={addon.label.de} className="flex justify-between gap-4 py-3 text-sm">
                      <span className="text-muted">{tx(addon.label, locale)}</span>
                      <span className="font-semibold text-charcoal">
                        {tx(addon.price, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-semibold tracking-wide text-slate uppercase">
                  {locale === "de" ? "Preis hängt ab von" : "Price depends on"}
                </p>
                <ul className="mt-3 space-y-2">
                  {page.pricing.factors.map((item) => (
                    <li key={item.de} className="text-sm text-muted">
                      • {tx(item, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-soft/50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.cases.title, locale)}
              </h2>
              <p className="mt-3 text-sm text-muted">{tx(ui.common.demoNote, locale)}</p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.cases.items.map((item, index) => (
                <Reveal key={item.industry.de} delay={0.05 * index}>
                  <article className="h-full rounded-2xl border border-border/80 bg-surface p-7">
                    <p className="text-xs font-semibold tracking-wide text-accent-deep uppercase">
                      {tx(item.industry, locale)}
                    </p>
                    <h3 className="mt-4 font-semibold text-charcoal">
                      {locale === "de" ? "Aufgabe" : "Task"}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{tx(item.task, locale)}</p>
                    <h3 className="mt-4 font-semibold text-charcoal">
                      {locale === "de" ? "Lösung" : "Solution"}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{tx(item.solution, locale)}</p>
                    <h3 className="mt-4 font-semibold text-charcoal">
                      {locale === "de" ? "Erwarteter Effekt" : "Expected effect"}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{tx(item.result, locale)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.local.title, locale)}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {tx(page.local.text, locale)}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface-soft/40 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {tx(page.comparison.title, locale)}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                {tx(page.comparison.intro, locale)}
              </p>
            </Reveal>
            <div className="-mx-4 mt-10 overflow-x-auto overscroll-x-contain rounded-none border-y border-border/80 bg-surface sm:mx-0 sm:rounded-2xl sm:border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-accent-soft/60">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-charcoal"> </th>
                    <th className="px-5 py-4 font-semibold text-charcoal">
                      {tx(ui.common.diy, locale)}
                    </th>
                    <th className="px-5 py-4 font-semibold text-charcoal">
                      {tx(ui.common.pro, locale)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row.point.de} className="border-t border-border/70">
                      <td className="px-5 py-4 font-medium text-charcoal">
                        {tx(row.point, locale)}
                      </td>
                      <td className="px-5 py-4 text-muted">{tx(row.diy, locale)}</td>
                      <td className="px-5 py-4 text-muted">{tx(row.pro, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FaqList
          eyebrow="FAQ"
          title={locale === "de" ? "Fragen zu dieser Leistung" : "Questions about this service"}
          items={faq}
        />

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold text-charcoal">
              {tx(ui.common.related, locale)}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.related.map((id) => (
                <Link
                  key={id}
                  href={withLocale(relatedHref(id), locale)}
                  className="rounded-2xl border border-border bg-surface px-4 py-2 text-sm text-charcoal hover:border-accent/50"
                >
                  {relatedName(id, locale)}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-5 py-10 sm:px-12 sm:py-12 lg:grid-cols-2">
            <div>
              <ShieldCheck className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {tx(ui.common.consultCta, locale)}
              </h2>
              <p className="mt-4 text-white/70">
                {locale === "de"
                  ? "Formular, E-Mail, Telefon oder WhatsApp. Antwort in der Regel innerhalb von 24 Stunden."
                  : "Form, email, phone or WhatsApp. A reply usually within 24 hours."}
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/80">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4 text-accent" /> {CONTACT_EMAIL}
                </a>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 text-accent" /> {CONTACT_PHONE}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <ContactForm locale={locale} defaultProject={tx(page.menuName, locale)} compact />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
