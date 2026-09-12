import {
  BadgeEuro,
  Clock,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

function iconFor(label: string): LucideIcon {
  const value = label.toLowerCase();
  if (value.includes("fixpreis") || value.includes("fixed price")) {
    return BadgeEuro;
  }
  if (value.includes("seo")) {
    return Search;
  }
  if (value.includes("mobile")) {
    return Smartphone;
  }
  if (value.includes("dsgvo") || value.includes("gdpr")) {
    return ShieldCheck;
  }
  if (value.includes("wien") || value.includes("vienna")) {
    return MapPin;
  }
  if (value.includes("24")) {
    return Clock;
  }
  return ShieldCheck;
}

export default function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => {
            const Icon = iconFor(item);
            return (
              <li key={item}>
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-border/80 bg-surface-soft/70 px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent-soft hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-charcoal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-xs font-medium leading-snug tracking-wide text-charcoal sm:text-sm">
                    {item}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
