import { MapPin } from "lucide-react";
import type { Locale } from "@/i18n/dictionary";
import { FOUNDER, NAP, SITE_NAME } from "@/lib/site";
import { localAsset } from "@/lib/images";

function initials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** Portrait slot for the founder. Falls back to a calm monogram until a photo is configured. */
export function FounderPortrait({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const label = FOUNDER.name || SITE_NAME;
  if (FOUNDER.photo) {
    return (
      <img
        src={localAsset(FOUNDER.photo)}
        alt={label}
        loading="lazy"
        decoding="async"
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center ${
        tone === "dark" ? "bg-gradient-to-br from-white/15 to-white/5 text-white/80" : "bg-gradient-to-br from-accent-soft via-surface-soft to-beige text-accent-dark"
      } ${className}`}
    >
      <span className="text-[clamp(1rem,30cqw,3.5rem)] font-semibold tracking-tight">{initials(label)}</span>
    </div>
  );
}

export default function FounderCard({ locale, tone = "light" }: { locale: Locale; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`flex items-center gap-4 ${dark ? "text-white" : "text-charcoal"}`}>
      <div className="@container relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
        <FounderPortrait tone={tone} className="h-full w-full" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold">{FOUNDER.name || SITE_NAME}</p>
        <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>{FOUNDER.role[locale]}</p>
        <p className={`mt-1 inline-flex items-center gap-1.5 text-xs ${dark ? "text-white/60" : "text-muted"}`}>
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
          {locale === "de" ? NAP.city : "Vienna"} · {locale === "de" ? "Termine nach Vereinbarung" : "Meetings by arrangement"}
        </p>
      </div>
    </div>
  );
}
