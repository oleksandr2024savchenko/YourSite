import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { home } from "@/content/home";
import { FOUNDER, SITE_NAME } from "@/lib/site";
import ContactForm from "@/components/site/ContactForm";
import FounderCard from "@/components/site/FounderCard";

/** Closing section: a short first-person note from the founder next to the enquiry form. */
export default function ContactLetter({ locale }: { locale: Locale }) {
  const copy = home.letter;
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="lg:pt-6">
          <p className="text-sm font-medium text-accent-dark">{tx(copy.eyebrow, locale)}</p>
          <blockquote className="mt-5 font-display text-[1.75rem] leading-[1.3] text-charcoal sm:text-[2.1rem]">
            „{tx(copy.text, locale)}“
          </blockquote>
          <p className="mt-6 font-hand text-4xl text-brass">{FOUNDER.name || SITE_NAME}</p>
          <div className="mt-8 border-t border-border pt-8">
            <FounderCard locale={locale} />
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-9">
          <h2 className="text-3xl text-charcoal">{tx(copy.formTitle, locale)}</h2>
          <p className="mt-2 mb-7 text-sm text-muted">{tx(copy.formNote, locale)}</p>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
