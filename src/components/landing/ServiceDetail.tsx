"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Mail,
  Phone,
  Tag,
  Wallet,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/images";
import { CONTACT_EMAIL, mailtoHref } from "@/lib/links";
import { serviceDetailCopy, serviceIndex, type ServiceSlug } from "@/lib/services";
import Reveal from "./Reveal";

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const { t } = useLanguage();
  const labels = t.serviceDetail;
  const { detail, tier } = serviceDetailCopy(t, slug);

  const mailBody = (intro: string) =>
    `${intro} ${tier.name} (${tier.price})${labels.mailFields}`;

  const orderHref = mailtoHref({
    subject: `${labels.mailSubject}: ${tier.name}`,
    body: mailBody(labels.mailIntro),
  });

  const questionHref = mailtoHref({
    subject: `${labels.mailSubject}: ${tier.name}`,
    body: mailBody(labels.mailQuestionIntro),
  });

  const primaryButton =
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-charcoal shadow-sm transition-all duration-300 hover:bg-accent-deep hover:text-white hover:shadow-md";
  const secondaryButton =
    "inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-charcoal transition-all duration-300 hover:border-accent/50 hover:bg-surface";

  const facts = [
    { icon: Tag, label: labels.startingPrice, value: tier.price },
    { icon: Clock, label: labels.timelineLabel, value: detail.timeline },
    { icon: Wallet, label: labels.paymentLabel, value: labels.payment },
  ];

  return (
    <main className="flex-1">
      <section className="hero-atmosphere relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-all duration-300 hover:text-charcoal"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-[0.16em] text-accent-deep uppercase">
                {labels.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {tier.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-accent-dark">
                {detail.positioning}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {detail.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={orderHref} className={primaryButton}>
                  {labels.requestCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={questionHref} className={secondaryButton}>
                  {labels.questionsCta}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-sm">
                <div className="relative aspect-[4/3]">
                  {/* Native img keeps the static export simple on GitHub Pages */}
                  <img
                    src={images.services[serviceIndex(slug)]}
                    alt={tier.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <dl className="divide-y divide-border/70">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start gap-3 px-6 py-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
                        <fact.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <div>
                        <dt className="text-xs font-medium tracking-wide text-muted">
                          {fact.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-semibold text-charcoal">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft/50 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {labels.idealForTitle}
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-accent-deep"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                {labels.deliverablesTitle}
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-accent-deep"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-8 py-12 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {labels.midCtaTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                {labels.midCtaDescription}
              </p>
            </div>
            <a href={orderHref} className={`${primaryButton} shrink-0`}>
              {labels.requestCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              {labels.conditionsTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {detail.conditions.map((condition, index) => (
              <Reveal key={condition.title} delay={0.06 * index}>
                <div className="h-full rounded-2xl border border-border/80 bg-surface p-7 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                  <p className="text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-charcoal">
                    {condition.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {condition.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="details-pricing"
        className="scroll-mt-20 bg-surface-soft/50 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              {labels.pricingTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {labels.pricingDescription}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-accent bg-accent-soft/60 p-8 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                  {labels.basePriceLabel}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-charcoal">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>

                <p className="mt-7 text-xs font-medium tracking-wide text-charcoal">
                  {labels.includedTitle}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep"
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={orderHref} className={`${primaryButton} mt-8 w-full`}>
                  {labels.requestCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-8 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                  {labels.addonsTitle}
                </p>
                <ul className="mt-5 divide-y divide-border/70">
                  {detail.addons.map((addon) => (
                    <li
                      key={addon.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <span className="text-sm text-muted">{addon.label}</span>
                      <span className="text-sm font-semibold whitespace-nowrap text-charcoal">
                        {addon.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <p className="text-xs font-medium tracking-wide text-charcoal">
                    {labels.noteTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {labels.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-[#353a3f] to-[#3a4a49] px-8 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {labels.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {labels.finalCtaDescription}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={orderHref} className={primaryButton}>
                {labels.requestCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={questionHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                {labels.consultationCta}
              </a>
            </div>

            <p className="mt-10 text-sm text-white/50">{labels.contactHint}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 transition-all duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" />
                {CONTACT_EMAIL}
              </a>
              <a
                href="tel:+431234567890"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" />
                +43 1 234 567 890
              </a>
            </div>

            <div className="mt-10">
              <Link
                href="/#pricing"
                className="text-sm font-medium text-white/60 transition-all duration-300 hover:text-white"
              >
                {labels.backHome}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
