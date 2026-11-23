"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleAlert, Lightbulb, TrendingUp } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import type { CaseStudy } from "@/content/portfolio";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { serviceHref } from "@/lib/services";
import { withLocale } from "@/lib/routes";
import { getService } from "@/content/service-pages";
import SiteMockup from "./SiteMockup";

function BeforeAfterToggle({
  mode,
  onChange,
  locale,
  label,
}: {
  mode: "before" | "after";
  onChange: (mode: "before" | "after") => void;
  locale: Locale;
  label: string;
}) {
  const options = [
    { value: "before" as const, text: tx(ui.cases.before, locale) },
    { value: "after" as const, text: tx(ui.cases.after, locale) },
  ];
  return (
    <div role="group" aria-label={label} className="inline-flex rounded-full border border-border bg-surface p-1 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={mode === option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
            mode === option.value ? "bg-charcoal text-white shadow-sm" : "text-muted hover:text-charcoal"
          }`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

function Metrics({ item, locale, dense = false }: { item: CaseStudy; locale: Locale; dense?: boolean }) {
  return (
    <dl className={`grid grid-cols-3 gap-2 ${dense ? "" : "sm:gap-3"}`}>
      {item.metrics.map((metric) => (
        <div key={metric.value} className="rounded-xl border border-border/80 bg-surface px-3 py-3">
          <dt className="sr-only">{tx(metric.label, locale)}</dt>
          <dd>
            <span className={`block font-semibold tracking-tight text-charcoal ${dense ? "text-base" : "text-lg sm:text-xl"}`}>
              {metric.value}
            </span>
            <span className="mt-0.5 block text-[11px] leading-snug text-muted sm:text-xs">{tx(metric.label, locale)}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-slate-soft px-2.5 py-1 text-[11px] font-medium text-charcoal/80">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyCard({
  item,
  locale,
  variant = "compact",
  reverse = false,
}: {
  item: CaseStudy;
  locale: Locale;
  variant?: "compact" | "full";
  reverse?: boolean;
}) {
  const [mode, setMode] = useState<"before" | "after">("after");
  const mockLabel = `${item.client} – ${tx(mode === "after" ? ui.cases.after : ui.cases.before, locale)}`;

  if (variant === "compact") {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
        <div className="relative bg-gradient-to-br from-accent-soft/70 via-surface-soft to-beige/60 px-5 pt-6 pb-4">
          <figure aria-label={mockLabel}>
            <SiteMockup theme={item.theme} mode={mode} className="transition-transform duration-500 group-hover:scale-[1.02]" />
          </figure>
          <div className="mt-4 flex items-center justify-between gap-2">
            <BeforeAfterToggle mode={mode} onChange={setMode} locale={locale} label={item.client} />
            <span className="rounded-full bg-surface/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-accent-dark uppercase">
              {tx(ui.cases.conceptBadge, locale)}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate uppercase">{tx(item.industry, locale)}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-charcoal">{item.client}</h3>
          <p className="mt-1 text-sm font-medium text-accent-dark">{tx(item.scope, locale)}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{tx(item.result, locale)}</p>
          <div className="mt-5">
            <Metrics item={item} locale={locale} dense />
          </div>
          <div className="mt-4">
            <Tags tags={item.tags} />
          </div>
        </div>
      </article>
    );
  }

  const service = getService(item.service);
  const blocks = [
    { icon: CircleAlert, title: ui.cases.problem, text: item.problem, tone: "bg-beige/70 text-charcoal" },
    { icon: Lightbulb, title: ui.cases.solution, text: item.solution, tone: "bg-slate-soft text-slate" },
    { icon: TrendingUp, title: ui.cases.result, text: item.result, tone: "bg-accent-soft text-accent-deep" },
  ];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="rounded-3xl bg-gradient-to-br from-accent-soft/70 via-surface-soft to-beige/60 p-5 sm:p-8">
          <figure aria-label={mockLabel}>
            <SiteMockup theme={item.theme} mode={mode} />
            <figcaption className="sr-only">{mockLabel}</figcaption>
          </figure>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <BeforeAfterToggle mode={mode} onChange={setMode} locale={locale} label={item.client} />
            <span className="text-xs text-muted">{tx(ui.cases.toggleHint, locale)}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate uppercase">{tx(item.industry, locale)}</p>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-accent-dark uppercase">
            {tx(ui.cases.conceptBadge, locale)}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">{item.client}</h3>
        <p className="mt-2 font-medium text-accent-dark">{tx(item.scope, locale)}</p>
        <div className="mt-6 space-y-4">
          {blocks.map(({ icon: Icon, title, text, tone }) => (
            <div key={title.de} className="group/block flex gap-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover/block:-translate-y-0.5 ${tone}`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">{tx(title, locale)}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{tx(text, locale)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <Metrics item={item} locale={locale} />
          <p className="mt-2 text-[11px] text-muted">{tx(ui.cases.metricsNote, locale)}</p>
        </div>
        <div className="mt-5">
          <Tags tags={item.tags} />
        </div>
        <Link
          href={withLocale(serviceHref(item.service), locale)}
          className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent-dark transition-colors hover:text-charcoal"
        >
          {tx(ui.cases.serviceLink, locale)}: {tx(service.menuName, locale)}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
