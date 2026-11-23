"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Clock, FileText, Languages, LifeBuoy, Minus, Plus } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { c, tx } from "@/content/copy";
import { getService } from "@/content/service-pages";
import { serviceIcons } from "@/lib/service-icons";
import { withLocale } from "@/lib/routes";
import {
  FEATURED_PACKAGE,
  calcPackages,
  calculateEstimate,
  formatEuro,
  maintenancePlans,
  packageKeys,
  type MaintenanceKey,
  type PackageKey,
} from "@/content/pricing";

const t = {
  eyebrow: c("Kostenrechner", "Cost calculator"),
  title: c("Was kostet Ihre Website? In 30 Sekunden geschätzt.", "What will your website cost? Estimated in 30 seconds."),
  intro: c(
    "Wählen Sie Paket und Umfang – Sie sehen sofort einen Richtwert. Das verbindliche Fixpreis-Angebot bekommen Sie nach dem Erstgespräch.",
    "Pick a package and scope – you instantly see a guide price. The binding fixed-price quote follows the first call.",
  ),
  type: c("1. Art der Website", "1. Type of website"),
  pages: c("2. Anzahl der Seiten", "2. Number of pages"),
  pagesFixed: c("Eine Seite – Umfang über Sektionen", "One page – scope via sections"),
  pagesIncluded: c("inklusive", "included"),
  languages: c("3. Zusätzliche Sprachen", "3. Additional languages"),
  languagesHint: c("z. B. Englisch für internationale Kundschaft", "e.g. English for international clients"),
  copy: c("4. Texterstellung durch uns", "4. Copywriting by us"),
  copyHint: c("SEO-optimierte Texte statt eigener Vorlage", "SEO-optimised copy instead of your own draft"),
  maintenance: c("5. Wartung nach dem Launch", "5. Maintenance after launch"),
  firstMonthFree: c("1. Monat gratis", "1st month free"),
  estimate: c("Ihre Schätzung", "Your estimate"),
  oneOff: c("einmalig, netto", "one-off, net"),
  monthly: c("monatlich", "per month"),
  launch: c("Launch in", "Launch in"),
  base: c("Paket", "Package"),
  extraPages: c("Zusatzseiten", "Extra pages"),
  extraLanguages: c("Sprachen", "Languages"),
  copyLine: c("Texterstellung", "Copywriting"),
  cta: c("Mit dieser Schätzung anfragen", "Enquire with this estimate"),
  disclaimer: c(
    "Richtwert ohne USt. Zahlung 50 % bei Start, 50 % nach Abnahme. Laufende Fremdkosten (Domain, Zahlungsanbieter) sind nicht enthalten.",
    "Guide price excl. VAT. Payment 50% at start, 50% on approval. Third-party running costs (domain, payment providers) are not included.",
  ),
  less: c("Weniger", "Fewer"),
  more: c("Mehr", "More"),
  pagesUnit: c("Seiten", "pages"),
  langUnit: c("Sprache(n)", "language(s)"),
};

function Stepper({
  value,
  min,
  max,
  onChange,
  label,
  locale,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  label: string;
  locale: Locale;
}) {
  const btn =
    "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-charcoal transition-all duration-200 hover:border-accent hover:bg-accent-soft disabled:pointer-events-none disabled:opacity-40";
  return (
    <div className="flex items-center gap-3">
      <button type="button" className={btn} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label}: ${tx(t.less, locale)}`}>
        <Minus className="h-4 w-4" />
      </button>
      <output aria-live="polite" className="min-w-10 text-center text-lg font-semibold text-charcoal tabular-nums">
        {value}
      </output>
      <button type="button" className={btn} onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label}: ${tx(t.more, locale)}`}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function PriceCalculator({ locale }: { locale: Locale }) {
  const [pkg, setPkg] = useState<PackageKey>(FEATURED_PACKAGE);
  const [pages, setPages] = useState(calcPackages[FEATURED_PACKAGE].includedPages ?? 1);
  const [languages, setLanguages] = useState(0);
  const [copywriting, setCopywriting] = useState(false);
  const [maintenance, setMaintenance] = useState<MaintenanceKey>("basic");

  const current = calcPackages[pkg];
  const estimate = useMemo(
    () => calculateEstimate({ pkg, pages, languages, copywriting, maintenance }),
    [pkg, pages, languages, copywriting, maintenance],
  );

  const selectPackage = (key: PackageKey) => {
    setPkg(key);
    setPages(calcPackages[key].includedPages ?? 1);
  };

  const packageName = tx(getService(pkg).menuName, locale);
  const plan = maintenancePlans.find((p) => p.key === maintenance)!;
  const range = `${formatEuro(estimate.oneOff, locale)} – ${formatEuro(estimate.oneOffMax, locale)}`;

  const summary = [
    packageName,
    current.includedPages === null ? null : `${estimate.pages} ${tx(t.pagesUnit, locale)}`,
    languages > 0 ? `+${languages} ${tx(t.langUnit, locale)}` : null,
    copywriting ? tx(t.copyLine, locale) : null,
    plan.price > 0 ? `${tx(plan.label, locale)} (${formatEuro(plan.price, locale)}/${locale === "de" ? "Monat" : "month"})` : tx(plan.label, locale),
    `${locale === "de" ? "Schätzung" : "Estimate"}: ${range} ${locale === "de" ? "netto" : "net"}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const href = `${withLocale("/kontakt/", locale)}?${new URLSearchParams({ paket: pkg, kalkulation: summary }).toString()}#anfrage`;

  const lineItems = [
    { label: `${tx(t.base, locale)} ${packageName}`, value: estimate.lines.base },
    { label: `${tx(t.extraPages, locale)} (${estimate.extraPages})`, value: estimate.lines.pages },
    { label: `${tx(t.extraLanguages, locale)} (+${languages})`, value: estimate.lines.languages },
    { label: tx(t.copyLine, locale), value: estimate.lines.copy },
  ].filter((line) => line.value > 0);

  const optionCard = (active: boolean) =>
    `group flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
      active ? "border-accent bg-accent-soft/70 shadow-sm" : "border-border/80 bg-surface hover:-translate-y-0.5 hover:border-accent/50"
    }`;

  return (
    <section id="kostenrechner" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-dark">
            <Calculator className="h-4 w-4" strokeWidth={1.75} />
            {tx(t.eyebrow, locale)}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{tx(t.title, locale)}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{tx(t.intro, locale)}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem] lg:gap-10">
          <div className="space-y-8 rounded-3xl border border-border/80 bg-surface p-5 shadow-sm sm:p-8">
            <fieldset>
              <legend className="text-sm font-semibold text-charcoal">{tx(t.type, locale)}</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {packageKeys.map((key) => {
                  const Icon = serviceIcons[key];
                  const active = key === pkg;
                  return (
                    <button key={key} type="button" aria-pressed={active} onClick={() => selectPackage(key)} className={optionCard(active)}>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          active ? "bg-accent text-charcoal" : "bg-accent-soft text-accent-deep group-hover:bg-accent/60"
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-charcoal">{tx(getService(key).menuName, locale)}</span>
                        <span className="block text-xs text-muted">
                          {locale === "de" ? "ab" : "from"} {formatEuro(calcPackages[key].base, locale)}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <FileText className="h-4 w-4 text-accent-deep" strokeWidth={1.75} />
                  {tx(t.pages, locale)}
                </p>
                {current.includedPages === null ? (
                  <p className="mt-4 text-sm text-muted">{tx(t.pagesFixed, locale)}</p>
                ) : (
                  <div className="mt-4">
                    <Stepper value={pages} min={1} max={current.maxPages} onChange={setPages} label={tx(t.pages, locale)} locale={locale} />
                    <p className="mt-2 text-xs text-muted">
                      {current.includedPages} {tx(t.pagesIncluded, locale)} · +{formatEuro(current.extraPage, locale)} / {locale === "de" ? "Seite" : "page"}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <Languages className="h-4 w-4 text-accent-deep" strokeWidth={1.75} />
                  {tx(t.languages, locale)}
                </p>
                <div className="mt-4">
                  <Stepper value={languages} min={0} max={3} onChange={setLanguages} label={tx(t.languages, locale)} locale={locale} />
                  <p className="mt-2 text-xs text-muted">
                    +{formatEuro(current.extraLanguage, locale)} / {locale === "de" ? "Sprache" : "language"} · {tx(t.languagesHint, locale)}
                  </p>
                </div>
              </div>
            </div>

            <label className={`${optionCard(copywriting)} cursor-pointer`}>
              <input type="checkbox" className="h-5 w-5 shrink-0 accent-[var(--accent-deep)]" checked={copywriting} onChange={(e) => setCopywriting(e.target.checked)} />
              <span>
                <span className="block text-sm font-semibold text-charcoal">{tx(t.copy, locale)}</span>
                <span className="block text-xs text-muted">{tx(t.copyHint, locale)}</span>
              </span>
            </label>

            <fieldset>
              <legend className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                <LifeBuoy className="h-4 w-4 text-accent-deep" strokeWidth={1.75} />
                {tx(t.maintenance, locale)}
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {maintenancePlans.map((item) => (
                  <label key={item.key} className={`${optionCard(maintenance === item.key)} cursor-pointer`}>
                    <input
                      type="radio"
                      name="maintenance"
                      value={item.key}
                      checked={maintenance === item.key}
                      onChange={() => setMaintenance(item.key)}
                      className="h-4 w-4 shrink-0 accent-[var(--accent-deep)]"
                    />
                    <span>
                      <span className="block text-sm font-medium text-charcoal">{tx(item.label, locale)}</span>
                      <span className="block text-xs text-muted">
                        {item.price > 0 ? `${formatEuro(item.price, locale)} / ${locale === "de" ? "Monat" : "month"} · ${tx(t.firstMonthFree, locale)}` : "—"}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#1f3a36] to-[#24534e] p-6 text-white shadow-lg sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{tx(t.estimate, locale)}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums" aria-live="polite">
                {range}
              </p>
              <p className="mt-1 text-sm text-white/60">{tx(t.oneOff, locale)}</p>

              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                {lineItems.map((line) => (
                  <li key={line.label} className="flex justify-between gap-4 text-white/75">
                    <span>{line.label}</span>
                    <span className="tabular-nums">{formatEuro(line.value, locale)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                <div>
                  <p className="text-white/50">{tx(t.monthly, locale)}</p>
                  <p className="mt-1 font-semibold tabular-nums">{estimate.monthly > 0 ? formatEuro(estimate.monthly, locale) : "—"}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1 text-white/50">
                    <Clock className="h-3.5 w-3.5" /> {tx(t.launch, locale)}
                  </p>
                  <p className="mt-1 font-semibold">{tx(estimate.timeline, locale)}</p>
                </div>
              </div>

              <Link
                href={href}
                className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-white"
              >
                {tx(t.cta, locale)}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">{tx(t.disclaimer, locale)}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
