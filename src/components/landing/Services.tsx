"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/images";
import Reveal from "./Reveal";

const accents = [
  "from-accent-soft to-surface",
  "from-slate-soft to-surface",
  "from-beige/80 to-surface",
  "from-accent-soft/70 to-surface",
  "from-slate-soft/80 to-surface",
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-surface-soft/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.services.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <Reveal key={service.title} delay={0.08 * index} className="h-full">
              <a
                href="#contact"
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b ${accents[index % accents.length]} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md`}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={images.services[index]}
                    alt={service.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-8 pt-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-6 flex-1">
                    <p className="text-xs font-medium tracking-wide text-charcoal">
                      {t.services.gainLabel}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      {service.gain.map((step, stepIndex) => (
                        <span
                          key={step}
                          className="inline-flex items-center gap-2 text-sm text-muted"
                        >
                          {stepIndex > 0 && (
                            <ArrowRight
                              className="h-3.5 w-3.5 text-accent-deep"
                              strokeWidth={2}
                            />
                          )}
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep transition-all duration-300 group-hover:text-charcoal">
                    {t.services.discuss}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
