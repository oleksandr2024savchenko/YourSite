"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-surface-soft/50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.faq.description}
          </p>
        </Reveal>

        <div className="mt-14 space-y-3">
          {t.faq.items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <Reveal key={item.question} delay={0.05 * index}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all duration-300 ${
                    open ? "border-accent/50" : "border-border/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 hover:bg-accent-soft/25"
                  >
                    <span className="text-base font-medium tracking-tight text-charcoal">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        open
                          ? "bg-accent text-charcoal"
                          : "bg-accent-soft text-accent-deep"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
