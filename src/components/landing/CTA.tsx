"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 px-6 pb-24 lg:px-8 lg:pb-32">
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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@yoursite.at"
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-soft"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@yoursite.at"
                className="inline-flex items-center rounded-2xl border border-white/20 px-7 py-3.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                hello@yoursite.at
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
