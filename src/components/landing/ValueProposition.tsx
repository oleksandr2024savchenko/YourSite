"use client";

import Image from "next/image";
import { ShieldCheck, Users, MessageCircle, BadgeEuro } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/images";
import Reveal from "./Reveal";

const featureIcons = [ShieldCheck, Users, MessageCircle, BadgeEuro];
const featureTones = [
  "bg-accent-soft text-accent-deep",
  "bg-slate-soft text-slate",
  "bg-beige/70 text-charcoal",
  "bg-accent-soft/80 text-accent-deep",
];

export default function ValueProposition() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
            <Image
              src={images.about}
              alt={t.about.imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-soft/35 to-transparent" />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {t.about.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <Reveal key={feature.title} delay={0.06 * index}>
                <div className="group">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${featureTones[index]} transition-all duration-300 group-hover:-translate-y-0.5`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
