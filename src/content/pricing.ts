import { c, type Copy } from "./copy";

/** Packages shown in the comparison table and the calculator (one-off builds). */
export const packageKeys = ["website-relaunch", "onepage-website", "landing-page", "business-website", "online-shop"] as const;
export type PackageKey = (typeof packageKeys)[number];

export const FEATURED_PACKAGE: PackageKey = "business-website";

export type CellValue = boolean | Copy;

export const comparisonRows: { label: Copy; values: Record<PackageKey, CellValue> }[] = [
  {
    label: c("Startpreis (netto)", "Starting price (net)"),
    values: {
      "website-relaunch": c("ab 699 €", "from €699"),
      "onepage-website": c("ab 1.499 €", "from €1,499"),
      "landing-page": c("ab 1.799 €", "from €1,799"),
      "business-website": c("ab 2.999 €", "from €2,999"),
      "online-shop": c("ab 4.999 €", "from €4,999"),
    },
  },
  {
    label: c("Umfang", "Scope"),
    values: {
      "website-relaunch": c("bis 5 Seiten", "up to 5 pages"),
      "onepage-website": c("1 Seite, bis 6 Sektionen", "1 page, up to 6 sections"),
      "landing-page": c("1 Kampagnenseite", "1 campaign page"),
      "business-website": c("bis 8 Seiten", "up to 8 pages"),
      "online-shop": c("bis 50 Produkte", "up to 50 products"),
    },
  },
  {
    label: c("Launch", "Launch"),
    values: {
      "website-relaunch": c("5–7 Tage", "5–7 days"),
      "onepage-website": c("ca. 7 Tage", "about 7 days"),
      "landing-page": c("7–10 Tage", "7–10 days"),
      "business-website": c("10–14 Tage", "10–14 days"),
      "online-shop": c("3–4 Wochen", "3–4 weeks"),
    },
  },
  {
    label: c("SEO", "SEO"),
    values: {
      "website-relaunch": c("Rankings sichern, 301-Plan", "Keep rankings, 301 plan"),
      "onepage-website": c("SEO-Basis", "SEO basics"),
      "landing-page": c("Kampagnen-Setup", "Campaign setup"),
      "business-website": c("SEO-Struktur je Leistung", "SEO structure per service"),
      "online-shop": c("Produkt- & Kategorie-SEO", "Product & category SEO"),
    },
  },
  {
    label: c("Inhalte selbst pflegen (CMS)", "Edit content yourself (CMS)"),
    values: {
      "website-relaunch": c("optional", "optional"),
      "onepage-website": c("optional", "optional"),
      "landing-page": false,
      "business-website": true,
      "online-shop": true,
    },
  },
  {
    label: c("DSGVO, Impressum & Hosting in der EU", "GDPR, imprint & EU hosting"),
    values: {
      "website-relaunch": true,
      "onepage-website": true,
      "landing-page": true,
      "business-website": true,
      "online-shop": true,
    },
  },
  {
    label: c("Wartung: 1. Monat gratis", "Maintenance: 1st month free"),
    values: {
      "website-relaunch": true,
      "onepage-website": true,
      "landing-page": true,
      "business-website": true,
      "online-shop": true,
    },
  },
  {
    label: c("Upgrade-Garantie (12 Monate)", "Upgrade guarantee (12 months)"),
    values: {
      "website-relaunch": c("100 % anrechenbar", "100% credited"),
      "onepage-website": c("100 % anrechenbar", "100% credited"),
      "landing-page": c("100 % anrechenbar", "100% credited"),
      "business-website": false,
      "online-shop": false,
    },
  },
];

export const upgradeNote = c(
  "Upgrade-Garantie: Wechseln Sie innerhalb von 12 Monaten auf eine Business Website, rechnen wir 100 % des bezahlten Startpakets an.",
  "Upgrade guarantee: move to a business website within 12 months and we credit 100% of the starter package you paid.",
);

/* ---------- Calculator model ---------- */

export type CalcPackage = {
  key: PackageKey;
  base: number;
  /** Pages included in the base price; `null` = fixed single page. */
  includedPages: number | null;
  maxPages: number;
  extraPage: number;
  extraLanguage: number;
  timeline: Copy;
};

export const calcPackages: Record<PackageKey, CalcPackage> = {
  "website-relaunch": { key: "website-relaunch", base: 699, includedPages: 5, maxPages: 20, extraPage: 149, extraLanguage: 299, timeline: c("5–7 Tage", "5–7 days") },
  "onepage-website": { key: "onepage-website", base: 1499, includedPages: null, maxPages: 1, extraPage: 0, extraLanguage: 299, timeline: c("ca. 7 Tage", "about 7 days") },
  "landing-page": { key: "landing-page", base: 1799, includedPages: null, maxPages: 1, extraPage: 0, extraLanguage: 299, timeline: c("7–10 Tage", "7–10 days") },
  "business-website": { key: "business-website", base: 2999, includedPages: 8, maxPages: 25, extraPage: 199, extraLanguage: 499, timeline: c("10–14 Tage", "10–14 days") },
  "online-shop": { key: "online-shop", base: 4999, includedPages: 8, maxPages: 25, extraPage: 199, extraLanguage: 699, timeline: c("3–4 Wochen", "3–4 weeks") },
};

export const COPY_SINGLE_PAGE = 249;
export const COPY_PER_PAGE = 89;

export const maintenancePlans = [
  { key: "none", price: 0, label: c("Keine Wartung", "No maintenance") },
  { key: "basic", price: 49, label: c("Wartung Basic", "Maintenance Basic") },
  { key: "business", price: 89, label: c("Wartung Business + SEO-Report", "Maintenance Business + SEO report") },
] as const;

export type MaintenanceKey = (typeof maintenancePlans)[number]["key"];

export type CalcInput = {
  pkg: PackageKey;
  pages: number;
  languages: number;
  copywriting: boolean;
  maintenance: MaintenanceKey;
};

export function calculateEstimate(input: CalcInput) {
  const pkg = calcPackages[input.pkg];
  const pages = pkg.includedPages === null ? 1 : Math.max(1, Math.min(input.pages, pkg.maxPages));
  const extraPages = pkg.includedPages === null ? 0 : Math.max(0, pages - pkg.includedPages);
  const pagesCost = extraPages * pkg.extraPage;
  const languagesCost = input.languages * pkg.extraLanguage;
  const copyCost = input.copywriting ? (pkg.includedPages === null ? COPY_SINGLE_PAGE : Math.max(COPY_SINGLE_PAGE, pages * COPY_PER_PAGE)) : 0;
  const oneOff = pkg.base + pagesCost + languagesCost + copyCost;
  const monthly = maintenancePlans.find((plan) => plan.key === input.maintenance)?.price ?? 0;
  return {
    pages,
    extraPages,
    lines: { base: pkg.base, pages: pagesCost, languages: languagesCost, copy: copyCost },
    oneOff,
    /** Upper bound of the range: +15 %, rounded to 50 €. */
    oneOffMax: Math.ceil((oneOff * 1.15) / 50) * 50,
    monthly,
    timeline: pkg.timeline,
  };
}

export function formatEuro(value: number, locale: "de" | "en") {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
