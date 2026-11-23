import { Check, Minus, Star } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { getService } from "@/content/service-pages";
import { FEATURED_PACKAGE, comparisonRows, packageKeys, upgradeNote, type CellValue } from "@/content/pricing";

function Cell({ value, locale }: { value: CellValue; locale: Locale }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto h-4 w-4 text-accent-deep" strokeWidth={2.25} aria-hidden />
        <span className="sr-only">{locale === "de" ? "Ja" : "Yes"}</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="mx-auto h-4 w-4 text-slate/60" strokeWidth={2} aria-hidden />
        <span className="sr-only">{locale === "de" ? "Nein" : "No"}</span>
      </>
    );
  }
  return <>{tx(value, locale)}</>;
}

export default function PackageComparison({ locale }: { locale: Locale }) {
  const popular = locale === "de" ? "Beliebteste Wahl" : "Most popular";
  return (
    <div>
      <div className="no-scrollbar relative -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table className="relative w-full min-w-[46rem] border-separate border-spacing-0 text-sm">
          <caption className="sr-only">{locale === "de" ? "Pakete im Vergleich" : "Packages compared"}</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[19%] pb-4 text-left align-bottom text-xs font-medium tracking-wide text-muted">
                {locale === "de" ? "Paket" : "Package"}
              </th>
              {packageKeys.map((key) => {
                const featured = key === FEATURED_PACKAGE;
                return (
                  <th
                    key={key}
                    scope="col"
                    className={`px-3 pt-4 pb-4 text-center align-bottom font-semibold text-charcoal ${
                      featured ? "rounded-t-2xl border-x border-t border-accent bg-accent-soft/70" : ""
                    }`}
                  >
                    {featured && (
                      <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-accent-dark px-2.5 py-0.5 text-[10px] font-medium tracking-wide whitespace-nowrap text-white">
                        <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} aria-hidden />
                        {popular}
                      </span>
                    )}
                    <span className="block">{tx(getService(key).menuName, locale)}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, rowIndex) => {
              const last = rowIndex === comparisonRows.length - 1;
              return (
                <tr key={row.label.de} className="group">
                  <th
                    scope="row"
                    className="border-t border-border/80 py-3.5 pr-3 text-left font-medium text-charcoal transition-colors group-hover:text-accent-dark"
                  >
                    {tx(row.label, locale)}
                  </th>
                  {packageKeys.map((key) => {
                    const featured = key === FEATURED_PACKAGE;
                    return (
                      <td
                        key={key}
                        className={`border-t px-3 py-3.5 text-center text-muted transition-colors group-hover:bg-surface-soft/60 ${
                          featured
                            ? `border-x border-x-accent border-t-accent/25 bg-accent-soft/70 font-medium text-charcoal group-hover:bg-accent-soft ${last ? "rounded-b-2xl border-b border-b-accent" : ""}`
                            : "border-border/80"
                        } ${rowIndex === 0 ? "font-semibold text-charcoal" : ""}`}
                      >
                        <Cell value={row.values[key]} locale={locale} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-muted">{tx(upgradeNote, locale)}</p>
    </div>
  );
}
