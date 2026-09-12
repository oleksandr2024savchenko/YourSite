"use client";

import { Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "./Reveal";

export default function CTA() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-5 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Calendar className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {t.cta.description}
              </p>
              <p className="mt-8 text-sm tracking-wide text-white/60">
                {t.cta.reassurance}
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-sm sm:p-8">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
