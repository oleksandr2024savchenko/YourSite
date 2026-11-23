"use client";

import type { Locale } from "@/i18n/dictionary";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";

/** Segmented "Vorher / Nachher" switch with a sliding pill (pure CSS transition). */
export default function BeforeAfterToggle({
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
    <div role="group" aria-label={label} className="relative inline-grid grid-cols-2 rounded-full border border-border bg-surface p-1 shadow-sm">
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-charcoal shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: mode === "after" ? "translateX(100%)" : "translateX(0)" }}
      />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={mode === option.value}
          onClick={() => onChange(option.value)}
          className={`relative z-10 min-w-[5.25rem] rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 ${
            mode === option.value ? "text-white" : "text-muted hover:text-charcoal"
          }`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
