import type { CSSProperties } from "react";
import { Lock, TriangleAlert } from "lucide-react";
import type { MockTheme } from "@/content/portfolio";

/**
 * CSS-only browser + phone mockup of a client website. Everything scales with
 * container query units (cqw), so the mockup stays crisp at any card width and
 * costs no image bytes. Purely decorative: wrap it with a labelled figure.
 */

function Bars({ widths, color, height = "1.1cqw" }: { widths: string[]; color: string; height?: string }) {
  return (
    <div className="flex flex-col gap-[0.9cqw]">
      {widths.map((w, i) => (
        <span key={i} className="block rounded-full" style={{ width: w, height, background: color }} />
      ))}
    </div>
  );
}

function AfterWidget({ theme }: { theme: MockTheme }) {
  const panel: CSSProperties = { background: theme.soft, color: theme.ink };
  if (theme.widget === "booking") {
    const slots = ["08:30", "09:15", "10:00", "11:30", "14:00", "15:45"];
    return (
      <div className="rounded-[1.6cqw] p-[2cqw] shadow-sm" style={{ background: "#fff", color: theme.ink }}>
        <p className="text-[1.7cqw] font-semibold">Nächste freie Termine</p>
        <p className="mt-[0.4cqw] text-[1.3cqw] opacity-60">Mo, 14. · Prophylaxe</p>
        <div className="mt-[1.4cqw] grid grid-cols-3 gap-[1cqw]">
          {slots.map((slot, i) => (
            <span
              key={slot}
              className="rounded-[0.8cqw] py-[0.8cqw] text-center text-[1.3cqw] font-medium"
              style={i === 2 ? { background: theme.primary, color: theme.onPrimary } : panel}
            >
              {slot}
            </span>
          ))}
        </div>
        <span
          className="mt-[1.6cqw] block rounded-full py-[1cqw] text-center text-[1.4cqw] font-semibold"
          style={{ background: theme.primary, color: theme.onPrimary }}
        >
          Termin bestätigen
        </span>
      </div>
    );
  }
  if (theme.widget === "services") {
    const items = ["Steuerberatung", "Unternehmensrecht", "Lohnverrechnung", "Gründung"];
    return (
      <div className="flex flex-col gap-[1cqw]">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-[1cqw] px-[1.6cqw] py-[1.2cqw] shadow-sm"
            style={{ background: "#fff", color: theme.ink }}
          >
            <span className="text-[1.5cqw] font-medium">{item}</span>
            <span className="text-[1.5cqw]" style={{ color: theme.primary }}>
              →
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-[1.6cqw] p-[2cqw]" style={{ background: theme.soft, color: theme.ink }}>
      <p className="text-[1.7cqw] font-semibold">Rückruf in 15 Minuten</p>
      <span className="mt-[1.4cqw] block rounded-[0.8cqw] bg-white/10 px-[1.2cqw] py-[1cqw] text-[1.3cqw] opacity-70">
        Ihr Name
      </span>
      <span className="mt-[0.9cqw] block rounded-[0.8cqw] bg-white/10 px-[1.2cqw] py-[1cqw] text-[1.3cqw] opacity-70">
        Telefonnummer
      </span>
      <span
        className="mt-[1.4cqw] block rounded-full py-[1cqw] text-center text-[1.4cqw] font-semibold"
        style={{ background: theme.primary, color: theme.onPrimary }}
      >
        Rückruf anfordern
      </span>
    </div>
  );
}

function AfterDesktop({ theme }: { theme: MockTheme }) {
  const muted = theme.ink === "#ffffff" ? "rgba(255,255,255,0.35)" : "rgba(20,30,40,0.14)";
  return (
    <div className="flex h-full flex-col px-[3.5cqw] py-[2.4cqw]" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[0.8cqw] text-[1.7cqw] font-semibold tracking-tight">
          <span className="block h-[1.6cqw] w-[1.6cqw] rounded-full" style={{ background: theme.primary }} />
          {theme.brand}
        </span>
        <span className="flex items-center gap-[2cqw] text-[1.3cqw] opacity-70">
          {theme.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <span
          className="rounded-full px-[1.6cqw] py-[0.7cqw] text-[1.25cqw] font-semibold"
          style={{ background: theme.primary, color: theme.onPrimary }}
        >
          {theme.cta}
        </span>
      </div>
      <div className="mt-[4cqw] grid flex-1 grid-cols-[1.15fr_1fr] items-center gap-[4cqw]">
        <div>
          <p className="text-[1.2cqw] font-semibold tracking-[0.2em] uppercase" style={{ color: theme.primary }}>
            Wien
          </p>
          <p className="mt-[1cqw] text-[3.6cqw] leading-[1.08] font-semibold tracking-tight">{theme.headline}</p>
          <p className="mt-[1.6cqw] text-[1.45cqw] leading-snug opacity-70">{theme.sub}</p>
          <div className="mt-[2.4cqw] flex gap-[1.2cqw]">
            <span
              className="rounded-full px-[2cqw] py-[1cqw] text-[1.35cqw] font-semibold"
              style={{ background: theme.primary, color: theme.onPrimary }}
            >
              {theme.cta}
            </span>
            <span className="rounded-full border px-[2cqw] py-[1cqw] text-[1.35cqw]" style={{ borderColor: muted }}>
              Mehr erfahren
            </span>
          </div>
        </div>
        <AfterWidget theme={theme} />
      </div>
      <div className="mt-[3cqw] grid grid-cols-3 gap-[1.6cqw]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-[1cqw] rounded-[1cqw] p-[1.2cqw]" style={{ background: theme.soft }}>
            <span className="block h-[2.4cqw] w-[2.4cqw] shrink-0 rounded-full" style={{ background: theme.primary, opacity: 0.85 }} />
            <Bars widths={["80%", "55%"]} color={muted} height="0.9cqw" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeDesktop({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col bg-[#e6e6e6] font-serif text-[#222]">
      <div className="border-b-[0.4cqw] border-[#7a7a7a] bg-gradient-to-b from-[#b9c4d0] to-[#8796a8] px-[2cqw] py-[1.6cqw] text-center">
        <p className="text-[2.6cqw] font-bold text-white [text-shadow:0.2cqw_0.2cqw_0_#334]">{theme.brand}</p>
        <p className="text-[1.2cqw] text-white/90 italic">Herzlich Willkommen auf unserer Homepage!</p>
      </div>
      <div className="flex gap-[1.6cqw] bg-[#d4d4d4] px-[2cqw] py-[0.8cqw] text-[1.25cqw] text-[#0000ee] underline">
        <span>Startseite</span>
        {theme.nav.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <span>Gästebuch</span>
      </div>
      <div className="flex flex-1 gap-[1.6cqw] p-[1.6cqw]">
        <div className="w-[22%] space-y-[0.8cqw] border border-[#aaa] bg-[#f4f4f4] p-[1cqw] text-[1.15cqw] text-[#0000ee] underline">
          <p className="font-bold text-[#222] no-underline">Navigation</p>
          <p>» Aktuelles</p>
          <p>» Über uns</p>
          <p>» Anfahrt</p>
          <p>» Downloads (PDF)</p>
          <p>» Links</p>
        </div>
        <div className="flex-1 border border-[#aaa] bg-white p-[1.4cqw]">
          <p className="text-[1.9cqw] font-bold text-[#8b0000]">Willkommen!</p>
          <div className="mt-[1cqw] flex gap-[1.2cqw]">
            <div className="flex h-[9cqw] w-[13cqw] shrink-0 items-center justify-center border border-[#999] bg-[#ccc] text-[1cqw] text-[#666]">
              foto1.jpg
            </div>
            <Bars widths={["100%", "96%", "100%", "88%", "93%", "60%"]} color="#c9c9c9" height="0.9cqw" />
          </div>
          <div className="mt-[1.4cqw]">
            <Bars widths={["100%", "97%", "91%", "100%", "45%"]} color="#d3d3d3" height="0.9cqw" />
          </div>
          <p className="mt-[1.4cqw] text-[1.15cqw]">
            Terminvereinbarung bitte <u className="text-[#0000ee]">telefonisch</u> Mo–Fr 8–12 Uhr.
          </p>
        </div>
      </div>
      <div className="bg-[#8796a8] px-[2cqw] py-[0.7cqw] text-center text-[1.05cqw] text-white">
        © {theme.oldYear} {theme.brand} | Besucher: 004.211 | Optimiert für 1024×768
      </div>
    </div>
  );
}

function AfterPhone({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col px-[7cqw] py-[6cqw]" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[2cqw] text-[6cqw] font-semibold">
          <span className="block h-[5cqw] w-[5cqw] rounded-full" style={{ background: theme.primary }} />
          {theme.brand.split(" ")[0]}
        </span>
        <span className="flex flex-col gap-[1.6cqw]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-[1.2cqw] w-[7cqw] rounded-full" style={{ background: theme.ink, opacity: 0.6 }} />
          ))}
        </span>
      </div>
      <p className="mt-[12cqw] text-[10cqw] leading-[1.08] font-semibold tracking-tight">{theme.headline}</p>
      <p className="mt-[5cqw] text-[5cqw] leading-snug opacity-70">{theme.sub}</p>
      <span
        className="mt-[8cqw] block rounded-full py-[4cqw] text-center text-[5.2cqw] font-semibold"
        style={{ background: theme.primary, color: theme.onPrimary }}
      >
        {theme.cta}
      </span>
      <div className="mt-[8cqw] space-y-[4cqw]">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-[4cqw] rounded-[4cqw] p-[4cqw]" style={{ background: theme.soft }}>
            <span className="block h-[8cqw] w-[8cqw] shrink-0 rounded-full" style={{ background: theme.primary }} />
            <Bars widths={["90%", "60%"]} color={theme.ink === "#ffffff" ? "rgba(255,255,255,0.3)" : "rgba(20,30,40,0.15)"} height="2.4cqw" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforePhone({ theme }: { theme: MockTheme }) {
  // The old desktop layout squeezed onto a phone: tiny, unreadable, sideways scrolling.
  return (
    <div className="relative h-full overflow-hidden bg-[#e6e6e6]">
      <div className="absolute top-0 left-0 w-[260%] origin-top-left scale-[0.62] @container">
        <div className="aspect-[16/10]">
          <BeforeDesktop theme={theme} />
        </div>
      </div>
      <div className="absolute inset-x-[6cqw] bottom-[8cqw] rounded-[3cqw] bg-[#8b0000]/90 px-[4cqw] py-[3cqw] text-center text-[4.6cqw] font-medium text-white">
        Nicht mobil-optimiert
      </div>
    </div>
  );
}

export default function SiteMockup({
  theme,
  mode,
  className = "",
}: {
  theme: MockTheme;
  mode: "before" | "after";
  className?: string;
}) {
  const after = mode === "after";
  return (
    <div className={`relative pr-[9%] pb-[7%] ${className}`} aria-hidden>
      <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_18px_50px_-20px_rgba(44,47,51,0.35)]">
        <div className="flex items-center gap-2 border-b border-black/5 bg-[#f3f3f1] px-3 py-2">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </span>
          <span className="mx-auto flex max-w-[60%] min-w-0 items-center gap-1 truncate rounded-md bg-white px-3 py-0.5 text-[10px] text-[#6b716c]">
            {after ? (
              <Lock className="h-2.5 w-2.5 shrink-0 text-[#28a745]" strokeWidth={2.5} />
            ) : (
              <TriangleAlert className="h-2.5 w-2.5 shrink-0 text-[#d9480f]" strokeWidth={2.5} />
            )}
            <span className="truncate">
              {after ? "https://" : "http://"}
              {theme.domain}
            </span>
          </span>
        </div>
        <div className="@container aspect-[16/10]">{after ? <AfterDesktop theme={theme} /> : <BeforeDesktop theme={theme} />}</div>
      </div>
      <div className="absolute right-0 bottom-0 w-[27%] rounded-[1.1rem] border-[3px] border-charcoal bg-charcoal p-[2px] shadow-[0_16px_40px_-14px_rgba(44,47,51,0.55)]">
        <div className="@container aspect-[9/19] overflow-hidden rounded-[0.9rem]">
          {after ? <AfterPhone theme={theme} /> : <BeforePhone theme={theme} />}
        </div>
      </div>
    </div>
  );
}
