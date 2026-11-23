import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { home } from "@/content/home";
import { getService } from "@/content/service-pages";
import { serviceHref } from "@/lib/services";
import { paths, withLocale } from "@/lib/routes";

/** Three main packages as plain rows; the popular one is the only dark block. */
export default function PackagesTeaser({ locale }: { locale: Locale }) {
  const copy = home.packages;
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent-dark">{tx(copy.eyebrow, locale)}</p>
            <h2 className="mt-3 text-4xl text-charcoal sm:text-5xl">{tx(copy.title, locale)}</h2>
          </div>
          <Link
            href={`${withLocale(paths.preise, locale)}#kostenrechner`}
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent-dark"
          >
            <Calculator className="h-4 w-4" strokeWidth={1.75} />
            {tx(copy.calcLink, locale)}
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {copy.items.map((item) => {
            const featured = item.slug === "business-website";
            const name = tx(getService(item.slug).menuName, locale);
            return (
              <Link
                key={item.slug}
                href={withLocale(serviceHref(item.slug), locale)}
                className={`group flex flex-col rounded-3xl p-7 transition-colors duration-300 sm:p-8 ${
                  featured ? "bg-charcoal text-white lg:order-2" : "border border-border bg-surface hover:border-accent"
                } ${item.slug === "website-relaunch" ? "lg:order-1" : ""} ${item.slug === "onepage-website" ? "lg:order-3" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className={`text-sm font-medium ${featured ? "text-accent" : "text-accent-dark"}`}>{name}</p>
                  {featured && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{tx(copy.popular, locale)}</span>
                  )}
                </div>
                <p className="mt-5 font-display text-5xl leading-none">{tx(item.price, locale)}</p>
                <p className={`mt-2 text-sm ${featured ? "text-white/60" : "text-muted"}`}>
                  {locale === "de" ? "Online in" : "Live in"} {tx(item.time, locale)}
                </p>
                <p className={`mt-6 flex-1 leading-relaxed ${featured ? "text-white/85" : "text-charcoal/80"}`}>{tx(item.fit, locale)}</p>
                <span className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${featured ? "text-white" : "text-charcoal"}`}>
                  {locale === "de" ? "Details & Leistungsumfang" : "Details & scope"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{tx(copy.more, locale)}</p>
          <Link href={withLocale(paths.preise, locale)} className="inline-flex items-center gap-1.5 font-medium text-charcoal hover:text-accent-dark">
            {tx(copy.allLink, locale)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
