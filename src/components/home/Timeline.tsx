import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { home } from "@/content/home";

/** The process as a real day-by-day timeline on a dark band, with the two payment moments marked. */
export default function Timeline({ locale }: { locale: Locale }) {
  const copy = home.timeline;
  return (
    <section className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-accent">{tx(copy.eyebrow, locale)}</p>
        <h2 className="mt-3 max-w-3xl text-4xl text-white sm:text-5xl">{tx(copy.title, locale)}</h2>
        <p className="mt-5 max-w-2xl text-white/60">{tx(copy.note, locale)}</p>

        <ol className="mt-14 grid gap-0 lg:grid-cols-5">
          {copy.steps.map((step, index) => (
            <li key={step.title.de} className="relative border-l border-white/15 pb-10 pl-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-6 lg:pb-0 lg:pl-0">
              <span
                className={`absolute top-0 -left-[5px] h-[9px] w-[9px] rounded-full lg:-top-[5px] lg:left-0 ${
                  index === copy.steps.length - 1 ? "bg-accent" : "bg-white/60"
                }`}
                aria-hidden
              />
              <p className="font-hand text-2xl leading-none text-accent">{tx(step.day, locale)}</p>
              <h3 className="mt-3 text-lg font-semibold">{tx(step.title, locale)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{tx(step.text, locale)}</p>
              {"pay" in step && step.pay ? (
                <p className="mt-4 inline-flex rounded-full border border-accent/50 px-3 py-1 text-xs text-accent">
                  {locale === "de" ? "Zahlung" : "Payment"} {tx(step.pay, locale)}
                </p>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">{tx(copy.after, locale)}</p>
      </div>
    </section>
  );
}
