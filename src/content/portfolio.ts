import type { ServiceSlug } from "@/lib/services";
import { c, type Copy } from "./copy";

/**
 * Visual theme for the CSS-only browser/phone mockups in the case studies.
 * Mockup copy is German on purpose: it shows the client's Austrian website.
 */
export type MockTheme = {
  brand: string;
  domain: string;
  nav: string[];
  headline: string;
  sub: string;
  cta: string;
  /** Primary brand colour (buttons, accents). */
  primary: string;
  /** Text colour on top of `primary`. */
  onPrimary: string;
  /** Page background of the "after" design. */
  bg: string;
  /** Headline / text colour of the "after" design. */
  ink: string;
  /** Soft tint for cards and panels. */
  soft: string;
  widget: "booking" | "services" | "callback";
  /** Year shown in the outdated "before" footer. */
  oldYear: string;
};

export type CaseMetric = { value: string; label: Copy };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: Copy;
  scope: Copy;
  problem: Copy;
  solution: Copy;
  result: Copy;
  metrics: CaseMetric[];
  tags: string[];
  service: ServiceSlug;
  theme: MockTheme;
};

/**
 * Concept case studies. They show how we would solve typical briefs in Vienna –
 * clearly labelled as concepts, not as real clients. Replace or extend with
 * real projects (and real numbers) as soon as they are live.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "zahnarztpraxis-wien-1010",
    client: "Zahnarztpraxis Wien 1010",
    industry: c("Medizin · Zahnmedizin", "Healthcare · Dentistry"),
    scope: c("Relaunch mit Online-Terminbuchung", "Relaunch with online booking"),
    problem: c(
      "Website aus 2014, auf dem Smartphone kaum bedienbar, Termine nur per Telefon. Die Ordination war vormittags dauerbesetzt, Neupatient:innen sprangen ab.",
      "Website from 2014, barely usable on a phone, appointments by phone only. The practice line was busy every morning and new patients dropped off.",
    ),
    solution: c(
      "Neue Struktur nach Behandlungen, ruhiges Praxis-Design, Online-Terminbuchung direkt im Hero und DSGVO-konforme Formulare ohne Drittanbieter-Tracking.",
      "New structure by treatment, a calm practice design, online booking right in the hero and GDPR-compliant forms without third-party tracking.",
    ),
    result: c(
      "Termin in drei Klicks statt Warteschleife – mobil wie am Desktop.",
      "An appointment in three clicks instead of a phone queue – on mobile and desktop.",
    ),
    metrics: [
      { value: "99/100", label: c("PageSpeed mobil", "PageSpeed mobile") },
      { value: "< 0,8 s", label: c("Ladezeit (LCP)", "Load time (LCP)") },
      { value: "3 Klicks", label: c("bis zum Termin", "to an appointment") },
    ],
    tags: ["Next.js", "Tailwind CSS", "Online-Termin", "DSGVO"],
    service: "website-relaunch",
    theme: {
      brand: "Zahnmedizin Muster",
      domain: "zahnarzt-muster.at",
      nav: ["Behandlungen", "Team", "Praxis", "Kontakt"],
      headline: "Ihr Lächeln in besten Händen.",
      sub: "Zahnarztpraxis im 1. Bezirk – modern, ruhig, ohne lange Wartezeiten.",
      cta: "Termin online buchen",
      primary: "#2f7d8c",
      onPrimary: "#ffffff",
      bg: "#f4f8f9",
      ink: "#15333a",
      soft: "#dcebee",
      widget: "booking",
      oldYear: "2014",
    },
  },
  {
    slug: "kanzlei-steuerberatung-wien",
    client: "Kanzlei & Steuerberatung Wien",
    industry: c("Recht · Steuerberatung", "Law · Tax advisory"),
    scope: c("Business Website mit SEO-Struktur", "Business website with SEO structure"),
    problem: c(
      "Alle Leistungen auf einer langen Seite, kein Impressum nach § 5 ECG, Cookie-Banner ohne echte Einwilligung. Bei Google kaum sichtbar für „Steuerberater Wien“.",
      "Every service on one long page, no imprint under § 5 ECG, a cookie banner without real consent. Hardly visible on Google for “tax advisor Vienna”.",
    ),
    solution: c(
      "Eigene Seiten pro Fachgebiet, klare Erstberatungs-Strecke, vollständige Rechtstexte, Consent-Management und strukturierte Daten für Google.",
      "A page per practice area, a clear first-consultation path, complete legal pages, consent management and structured data for Google.",
    ),
    result: c(
      "Seriöser Auftritt, der Mandant:innen vorqualifiziert und rechtlich sauber ist.",
      "A credible presence that pre-qualifies clients and is legally clean.",
    ),
    metrics: [
      { value: "98/100", label: c("Lighthouse SEO", "Lighthouse SEO") },
      { value: "12", label: c("indexierbare Fachseiten", "indexable practice pages") },
      { value: "100 %", label: c("DSGVO & ECG", "GDPR & ECG") },
    ],
    tags: ["Next.js", "SEO-Struktur", "Schema.org", "Consent"],
    service: "business-website",
    theme: {
      brand: "Muster & Partner",
      domain: "kanzlei-muster.at",
      nav: ["Fachgebiete", "Kanzlei", "Wissen", "Kontakt"],
      headline: "Recht und Steuern mit Klarheit.",
      sub: "Beratung für Unternehmen und Private in Wien – persönlich und verständlich.",
      cta: "Erstberatung vereinbaren",
      primary: "#b89b5e",
      onPrimary: "#16203a",
      bg: "#f7f5f0",
      ink: "#16203a",
      soft: "#e9e3d5",
      widget: "services",
      oldYear: "2012",
    },
  },
  {
    slug: "meisterbetrieb-elektro-wien",
    client: "Meisterbetrieb Elektro & Installationen",
    industry: c("Handwerk · Elektrotechnik", "Trades · Electrical"),
    scope: c("Landing Page für Google Ads", "Landing page for Google Ads"),
    problem: c(
      "Google-Anzeigen liefen auf die alte Startseite. Kein Telefon-Button, kein Rückruf-Formular, Ladezeit über 6 Sekunden – das Werbebudget verpuffte.",
      "Google ads pointed at the old homepage. No call button, no callback form, load time over 6 seconds – the ad budget fizzled out.",
    ),
    solution: c(
      "Schnelle Landing Page pro Leistung mit Klick-zum-Anruf, Rückruf in 2 Feldern, Einsatzgebiet Wien & Umgebung und Conversion-Tracking nach Consent.",
      "A fast landing page per service with click-to-call, a two-field callback form, Vienna service area and conversion tracking after consent.",
    ),
    result: c(
      "Jeder Anzeigenklick landet dort, wo er anrufen oder anfragen kann.",
      "Every ad click lands where it can call or enquire.",
    ),
    metrics: [
      { value: "0,7 s", label: c("Ladezeit mobil", "Load time mobile") },
      { value: "97/100", label: c("Lighthouse Performance", "Lighthouse performance") },
      { value: "2 Felder", label: c("bis zur Rückruf-Anfrage", "to a callback request") },
    ],
    tags: ["Landing Page", "Google Ads", "Click-to-Call", "Tracking"],
    service: "landing-page",
    theme: {
      brand: "Elektro Muster",
      domain: "elektro-muster.at",
      nav: ["Leistungen", "Notdienst", "Referenzen"],
      headline: "Elektriker in Wien – Termin noch diese Woche.",
      sub: "Meisterbetrieb für Installationen, E-Check und Smart Home.",
      cta: "Jetzt anrufen",
      primary: "#f2b705",
      onPrimary: "#1c1f24",
      bg: "#1c1f24",
      ink: "#ffffff",
      soft: "#2b2f36",
      widget: "callback",
      oldYear: "2016",
    },
  },
];

/** Real client voices. Intentionally empty until we have real quotes – never invent them. */
export type PortfolioVoice = {
  quote: Copy;
  name: Copy;
  role: Copy;
};

export const portfolioVoices: PortfolioVoice[] = [];
