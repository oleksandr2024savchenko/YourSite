import { Check, X } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { home } from "@/content/home";

/** One big statement, then a plain two-column comparison – deliberately no cards. */
export default function ProblemSection({ locale }: { locale: Locale }) {
  const copy = home.problem;
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl text-4xl leading-[1.08] text-charcoal sm:text-5xl lg:text-[3.6rem]">{tx(copy.statement, locale)}</h2>

        <div className="mt-14 grid gap-x-12 sm:mt-16 md:grid-cols-2">
          <p className="hidden pb-4 text-sm font-medium text-muted md:block">{tx(copy.oftenTitle, locale)}</p>
          <p className="hidden pb-4 text-sm font-medium text-accent-dark md:block">{tx(copy.usTitle, locale)}</p>
          {copy.rows.map((row) => (
            <div key={row.often.de} className="contents">
              <p className="flex items-start gap-3 border-t border-border py-5 text-muted">
                <X className="mt-1 h-4 w-4 shrink-0 text-slate" strokeWidth={2.25} aria-hidden />
                <span>
                  <span className="sr-only">{tx(copy.oftenTitle, locale)}: </span>
                  <span className="line-through decoration-slate/40">{tx(row.often, locale)}</span>
                </span>
              </p>
              <p className="flex items-start gap-3 border-border py-5 font-medium text-charcoal md:border-t">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={2.5} aria-hidden />
                <span>
                  <span className="sr-only">{tx(copy.usTitle, locale)}: </span>
                  {tx(row.us, locale)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
