import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx, type Copy } from "@/content/copy";
import { home } from "@/content/home";
import { paths, withLocale } from "@/lib/routes";

const toneDot = { good: "bg-emerald-500", warn: "bg-amber-400", bad: "bg-rose-500" } as const;

/** Lead magnet with a tangible preview of what the free check report looks like. */
export default function CheckTeaser({ locale }: { locale: Locale }) {
  const copy = home.check;
  return (
    <section className="bg-surface-soft/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-medium text-accent-dark">{tx(copy.eyebrow, locale)}</p>
          <h2 className="mt-3 text-4xl text-charcoal sm:text-5xl">{tx(copy.title, locale)}</h2>
          <ol className="mt-8 space-y-4">
            {copy.points.map((point, index) => (
              <li key={point.de} className="flex gap-4 text-charcoal/85">
                <span className="font-display text-2xl leading-none text-accent-dark">{index + 1}</span>
                {tx(point, locale)}
              </li>
            ))}
          </ol>
          <Link
            href={withLocale(paths.websiteCheck, locale)}
            className="group mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-dark"
          >
            {tx(copy.cta, locale)}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative">
          <p className="absolute -top-9 right-2 rotate-[-4deg] font-hand text-2xl text-accent-dark sm:right-8" aria-hidden>
            {tx(copy.handNote, locale)} ↓
          </p>
          <div className="rotate-[1deg] rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_60px_-30px_rgba(44,47,51,0.35)] sm:p-8">
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
              <p className="font-display text-2xl text-charcoal">{tx(copy.reportTitle, locale)}</p>
              <p className="text-xs text-muted">{tx(copy.sampleLabel, locale)} · ihre-firma.at</p>
            </div>
            <ul className="divide-y divide-border/70">
              {copy.rows.map((row) => (
                <li key={row.label.de} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                  <span className="flex items-center gap-3 text-charcoal">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${toneDot[row.tone]}`} aria-hidden />
                    {tx(row.label, locale)}
                  </span>
                  <span className="text-right text-muted">{typeof row.value === "string" ? row.value : tx(row.value as Copy, locale)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-accent-soft/70 px-4 py-3 text-sm font-medium text-charcoal">{tx(copy.verdict, locale)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
