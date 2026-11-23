import { BadgeEuro, Handshake, Rocket, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { c, tx, type Copy } from "@/content/copy";

type Badge = { icon: LucideIcon; title: Copy; text: Copy };

export const trustBadges: Badge[] = [
  {
    icon: ShieldCheck,
    title: c("100 % DSGVO-konform", "100% GDPR compliant"),
    text: c("Impressum nach § 5 ECG, Consent, sichere Formulare", "Imprint per § 5 ECG, consent, secure forms"),
  },
  {
    icon: Server,
    title: c("Serverstandort EU", "Servers in the EU"),
    text: c("Hosting in Deutschland oder Österreich", "Hosting in Germany or Austria"),
  },
  {
    icon: Rocket,
    title: c("Launch in 7–14 Tagen", "Launch in 7–14 days"),
    text: c("Statt Monate Warten bei der Agentur", "Instead of months of agency waiting"),
  },
  {
    icon: BadgeEuro,
    title: c("Fixpreis-Garantie", "Fixed-price guarantee"),
    text: c("50 % Start · 50 % nach Abnahme", "50% to start · 50% on approval"),
  },
  {
    icon: Handshake,
    title: c("Persönlich in Wien", "Personal contact in Vienna"),
    text: c("Ein Ansprechpartner, Handschlagqualität", "One contact person, a handshake you can trust"),
  },
];

/**
 * Austrian trust triggers. `strip` sits directly under the hero, `grid` is the
 * roomier variant for content pages such as "Über uns".
 */
export default function TrustBadges({
  locale,
  variant = "strip",
  title,
}: {
  locale: Locale;
  variant?: "strip" | "grid";
  title?: string;
}) {
  if (variant === "grid") {
    return (
      <div>
        {title ? <h2 className="text-2xl font-semibold text-charcoal">{title}</h2> : null}
        <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-5 ${title ? "mt-8" : ""}`}>
          {trustBadges.map(({ icon: Icon, title: badgeTitle, text }) => (
            <li
              key={badgeTitle.de}
              className="group rounded-2xl border border-border/80 bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-all duration-300 group-hover:bg-accent group-hover:text-charcoal">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-4 text-sm font-semibold text-charcoal">{tx(badgeTitle, locale)}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{tx(text, locale)}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section aria-label={locale === "de" ? "Ihre Vorteile" : "Your benefits"} className="border-y border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {trustBadges.map(({ icon: Icon, title: badgeTitle, text }, index) => (
            <li
              key={badgeTitle.de}
              className={`group flex items-start gap-3 ${index === trustBadges.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-charcoal">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm leading-snug font-semibold text-charcoal">{tx(badgeTitle, locale)}</span>
                <span className="mt-0.5 block text-xs leading-snug text-muted">{tx(text, locale)}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
