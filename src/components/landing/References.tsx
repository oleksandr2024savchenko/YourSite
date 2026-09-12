"use client";

import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { tx } from "@/content/copy";
import { portfolioProjects, portfolioVoices } from "@/content/portfolio";
import { paths, withLocale } from "@/lib/routes";
import Reveal from "./Reveal";

const projectTones = [
  "from-accent-soft to-surface",
  "from-slate-soft to-surface",
  "from-beige/80 to-surface",
];

const PLACEHOLDERS = 3;

export default function References({ pageLink = false }: { pageLink?: boolean }) {
  const { t, locale } = useLanguage();
  const projects = portfolioProjects;
  const voices = portfolioVoices;
  const projectSlots = projects.length > 0 ? projects : Array.from({ length: PLACEHOLDERS }, () => null);
  const voiceSlots = voices.length > 0 ? voices : Array.from({ length: PLACEHOLDERS }, () => null);

  return (
    <section
      id="references"
      className="scroll-mt-20 bg-surface-soft/40 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
            {t.work.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.work.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.work.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectSlots.map((project, index) => (
            <Reveal key={project ? tx(project.title, locale) : `project-${index}`} delay={0.08 * index} className="h-full">
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b ${projectTones[index % projectTones.length]} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md`}
              >
                <div className="relative h-44 overflow-hidden bg-accent-soft/40">
                  {project?.image ? (
                    <Image
                      src={project.image}
                      alt={tx(project.title, locale)}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-accent-deep shadow-sm">
                        <LayoutGrid className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8 pt-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  {project ? (
                    <>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-charcoal">
                        {tx(project.title, locale)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {tx(project.summary, locale)}
                      </p>
                      {project.href ? (
                        <Link
                          href={project.href}
                          className="mt-6 inline-flex text-sm font-medium text-accent-dark hover:text-charcoal"
                        >
                          {t.work.viewProject}
                        </Link>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {t.work.voicesTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.work.voicesDescription}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {voiceSlots.map((voice, index) => (
            <Reveal key={voice ? tx(voice.name, locale) : `voice-${index}`} delay={0.08 * index} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                  <Quote className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {voice ? (
                  <>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tx(voice.quote, locale)}
                    </p>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-charcoal">
                      {tx(voice.name, locale)}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{tx(voice.role, locale)}</p>
                  </>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-14">
          <Link
            href={withLocale(pageLink ? paths.references : paths.contact, locale)}
            className="inline-flex text-sm font-medium text-accent-dark hover:text-charcoal"
          >
            {pageLink ? t.work.viewAll : t.work.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
