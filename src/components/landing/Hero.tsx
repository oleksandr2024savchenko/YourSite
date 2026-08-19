"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-atmosphere relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.28]" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(44,47,51,0.07) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-5 text-sm font-medium tracking-[0.18em] text-accent-deep uppercase"
          >
            {t.hero.brand}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            {t.hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-2xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-charcoal transition-all duration-300 hover:border-accent/50 hover:bg-surface"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-accent-soft shadow-sm">
            {/* Native img: more reliable than next/image for GitHub Pages static export */}
            <img
              src={images.hero}
              alt={t.hero.imageCaption}
              width={1024}
              height={1280}
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="rounded-2xl border border-white/50 bg-white/80 p-5">
                <p className="text-xs font-medium tracking-wider text-accent-deep uppercase">
                  {t.hero.imageCaption}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-charcoal">
                  {t.hero.imageTitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
