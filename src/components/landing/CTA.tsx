"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-8 py-16 text-center sm:px-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <Calendar className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              {t.cta.description}
            </p>

            <div className="mt-10 flex flex-col items-center">
              <a
                href="mailto:hello@yoursite.at"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-base font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-md"
              >
                {t.cta.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-sm tracking-wide text-white/60">
                {t.cta.reassurance}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
