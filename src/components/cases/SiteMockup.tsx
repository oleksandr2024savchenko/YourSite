import { Briefcase, Calculator, Check, Landmark, Lock, Phone as PhoneIcon, Puzzle, Scale, TriangleAlert, Zap } from "lucide-react";
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

const isDark = (theme: MockTheme) => theme.ink === "#ffffff";
const lineColor = (theme: MockTheme) => (isDark(theme) ? "rgba(255,255,255,0.3)" : "rgba(20,30,40,0.14)");

/* ================= AFTER · clinic ================= */

function ClinicAfterDesktop({ theme }: { theme: MockTheme }) {
  const slots = ["08:30", "09:15", "10:00", "11:30", "14:00", "15:45"];
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
        <span className="rounded-full px-[1.6cqw] py-[0.7cqw] text-[1.25cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
          {theme.cta}
        </span>
      </div>
      <div className="mt-[4cqw] grid flex-1 grid-cols-[1.15fr_1fr] items-center gap-[4cqw]">
        <div>
          <p className="text-[1.2cqw] font-semibold tracking-[0.2em] uppercase" style={{ color: theme.primary }}>
            Wien 1010
          </p>
          <p className="mt-[1cqw] text-[3.6cqw] leading-[1.08] font-semibold tracking-tight">{theme.headline}</p>
          <p className="mt-[1.6cqw] text-[1.45cqw] leading-snug opacity-70">{theme.sub}</p>
          <div className="mt-[2.4cqw] flex gap-[1.2cqw]">
            <span className="rounded-full px-[2cqw] py-[1cqw] text-[1.35cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
              {theme.cta}
            </span>
            <span className="rounded-full border px-[2cqw] py-[1cqw] text-[1.35cqw]" style={{ borderColor: lineColor(theme) }}>
              Unser Team
            </span>
          </div>
        </div>
        <div className="rounded-[1.6cqw] bg-white p-[2cqw] shadow-sm">
          <p className="text-[1.7cqw] font-semibold">Nächste freie Termine</p>
          <p className="mt-[0.4cqw] text-[1.3cqw] opacity-60">Mo, 14. · Prophylaxe</p>
          <div className="mt-[1.4cqw] grid grid-cols-3 gap-[1cqw]">
            {slots.map((slot, i) => (
              <span
                key={slot}
                className="rounded-[0.8cqw] py-[0.8cqw] text-center text-[1.3cqw] font-medium"
                style={i === 2 ? { background: theme.primary, color: theme.onPrimary } : { background: theme.soft }}
              >
                {slot}
              </span>
            ))}
          </div>
          <span className="mt-[1.6cqw] block rounded-full py-[1cqw] text-center text-[1.4cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
            Termin bestätigen
          </span>
        </div>
      </div>
      <div className="mt-[3cqw] grid grid-cols-3 gap-[1.6cqw]">
        {["Prophylaxe", "Implantate", "Ästhetik"].map((item) => (
          <div key={item} className="flex items-center gap-[1cqw] rounded-[1cqw] p-[1.2cqw]" style={{ background: theme.soft }}>
            <span className="block h-[2.4cqw] w-[2.4cqw] shrink-0 rounded-full" style={{ background: theme.primary, opacity: 0.85 }} />
            <span className="text-[1.3cqw] font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClinicAfterPhone({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col px-[7cqw] py-[6cqw]" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[2cqw] text-[6cqw] font-semibold">
          <span className="block h-[5cqw] w-[5cqw] rounded-full" style={{ background: theme.primary }} />
          Zahnmedizin
        </span>
        <span className="flex flex-col gap-[1.6cqw]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-[1.2cqw] w-[7cqw] rounded-full" style={{ background: theme.ink, opacity: 0.6 }} />
          ))}
        </span>
      </div>
      <p className="mt-[12cqw] text-[10cqw] leading-[1.08] font-semibold tracking-tight">{theme.headline}</p>
      <p className="mt-[5cqw] text-[5cqw] leading-snug opacity-70">{theme.sub}</p>
      <div className="mt-[8cqw] rounded-[5cqw] bg-white p-[5cqw] shadow-sm">
        <p className="text-[5cqw] font-semibold">Heute frei</p>
        <div className="mt-[3cqw] grid grid-cols-3 gap-[2cqw]">
          {["09:15", "11:30", "15:45"].map((slot, i) => (
            <span
              key={slot}
              className="rounded-[2cqw] py-[2cqw] text-center text-[4.4cqw] font-medium"
              style={i === 1 ? { background: theme.primary, color: theme.onPrimary } : { background: theme.soft }}
            >
              {slot}
            </span>
          ))}
        </div>
      </div>
      <span className="mt-auto block rounded-full py-[4cqw] text-center text-[5.2cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
        {theme.cta}
      </span>
    </div>
  );
}

/* ================= AFTER · editorial ================= */

const facade =
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1.2%, transparent 1.2% 9%), linear-gradient(160deg, #24345a 0%, #16203a 55%, #0e1528 100%)";

function EditorialAfterDesktop({ theme }: { theme: MockTheme }) {
  const areas = [
    { icon: Scale, title: "Steuerrecht", text: "Bilanz, Betriebsprüfung" },
    { icon: Briefcase, title: "Unternehmensrecht", text: "Gründung, Verträge" },
    { icon: Landmark, title: "Arbeitsrecht", text: "Beratung & Vertretung" },
    { icon: Calculator, title: "Lohnverrechnung", text: "Monatlich, digital" },
  ];
  return (
    <div className="flex h-full flex-col px-[3.5cqw] py-[2.2cqw]" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[1cqw]">
          <span
            className="flex h-[2.8cqw] w-[2.8cqw] items-center justify-center font-serif text-[1.2cqw]"
            style={{ background: theme.ink, color: theme.primary }}
          >
            M&amp;P
          </span>
          <span className="font-serif text-[1.8cqw] tracking-[0.04em]">{theme.brand}</span>
        </span>
        <span className="flex items-center gap-[2cqw] text-[1.25cqw] opacity-75">
          {theme.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <span className="px-[1.6cqw] py-[0.8cqw] text-[1.2cqw] font-semibold" style={{ background: theme.ink, color: theme.bg }}>
          {theme.cta}
        </span>
      </div>

      <div className="mt-[3cqw] grid flex-1 grid-cols-[1.08fr_0.92fr] items-center gap-[3.5cqw]">
        <div>
          <p className="flex items-center gap-[1cqw] text-[1.15cqw] font-semibold tracking-[0.22em] uppercase" style={{ color: theme.primary }}>
            <span className="block h-[0.2cqw] w-[3cqw]" style={{ background: theme.primary }} />
            Rechtsanwälte & Steuerberater
          </p>
          <p className="mt-[1.4cqw] font-serif text-[4.3cqw] leading-[1.04]">
            Recht und Steuern <span className="italic" style={{ color: theme.primary }}>mit Klarheit.</span>
          </p>
          <p className="mt-[1.5cqw] max-w-[90%] text-[1.4cqw] leading-snug opacity-70">{theme.sub}</p>
          <div className="mt-[2.2cqw] flex gap-[1.2cqw]">
            <span className="px-[2cqw] py-[1.1cqw] text-[1.35cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
              {theme.cta}
            </span>
            <span className="border px-[2cqw] py-[1.1cqw] text-[1.35cqw] font-medium" style={{ borderColor: theme.ink }}>
              Fachgebiete
            </span>
          </div>
          <div className="mt-[2.2cqw] flex gap-[2cqw] text-[1.15cqw] opacity-80">
            {["Seit 1998", "Mitglied der Kammer", "Termine auch per Video"].map((item) => (
              <span key={item} className="flex items-center gap-[0.5cqw]">
                <Check className="h-[1.3cqw] w-[1.3cqw]" style={{ color: theme.primary }} strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[22cqw]">
          <div className="absolute inset-0" style={{ background: facade }} />
          <div className="absolute inset-[1.2cqw] border" style={{ borderColor: "rgba(184,155,94,0.55)" }} />
          <div className="absolute top-[3cqw] left-1/2 -translate-x-1/2 text-center">
            <p className="font-serif text-[5cqw] leading-none" style={{ color: theme.primary }}>
              §
            </p>
            <p className="mt-[0.6cqw] text-[1cqw] tracking-[0.3em] text-white/60 uppercase">Wien · Innere Stadt</p>
          </div>
          <div className="absolute top-[2.4cqw] left-[-1.6cqw] bg-white px-[1.4cqw] py-[1cqw] shadow-lg">
            <p className="text-[1.9cqw] font-semibold leading-none">
              4,9 <span style={{ color: theme.primary }}>★</span>
            </p>
            <p className="mt-[0.4cqw] text-[1cqw] opacity-60">Google-Bewertungen</p>
          </div>
          <div className="absolute bottom-[2.4cqw] left-[-2cqw] w-[72%] bg-white p-[1.6cqw] shadow-xl">
            <p className="text-[1.05cqw] font-semibold tracking-[0.14em] uppercase" style={{ color: theme.primary }}>
              Nächster freier Termin
            </p>
            <p className="mt-[0.6cqw] font-serif text-[1.8cqw]">Di, 10:00 Uhr</p>
            <p className="mt-[0.3cqw] text-[1.1cqw] opacity-60">Erstberatung · 30 Min. · Kanzlei oder Video</p>
          </div>
        </div>
      </div>

      <div className="mt-[2.6cqw] grid grid-cols-4 gap-[1.2cqw]">
        {areas.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-[1cqw] bg-white p-[1.2cqw] shadow-sm">
            <span className="flex h-[3cqw] w-[3cqw] shrink-0 items-center justify-center" style={{ background: theme.soft, color: theme.ink }}>
              <Icon className="h-[1.6cqw] w-[1.6cqw]" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-[1.25cqw] font-semibold">{title}</span>
              <span className="block text-[1cqw] opacity-60">{text}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialAfterPhone({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col" style={{ background: theme.bg, color: theme.ink }}>
      <div className="px-[7cqw] pt-[6cqw] pb-[9cqw] text-white" style={{ background: facade }}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[2cqw]">
            <span className="flex h-[8cqw] w-[8cqw] items-center justify-center border font-serif text-[3.4cqw]" style={{ borderColor: theme.primary, color: theme.primary }}>
              M&amp;P
            </span>
            <span className="font-serif text-[5.4cqw]">Muster</span>
          </span>
          <span className="flex flex-col gap-[1.6cqw]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-[1cqw] w-[7cqw] bg-white/80" />
            ))}
          </span>
        </div>
        <p className="mt-[10cqw] text-[3.6cqw] tracking-[0.22em] uppercase" style={{ color: theme.primary }}>
          Recht · Steuern · Wien
        </p>
        <p className="mt-[3cqw] font-serif text-[10.5cqw] leading-[1.05]">
          Recht und Steuern <span className="italic" style={{ color: theme.primary }}>mit Klarheit.</span>
        </p>
        <span className="mt-[6cqw] block py-[3.6cqw] text-center text-[4.8cqw] font-semibold" style={{ background: theme.primary, color: theme.onPrimary }}>
          {theme.cta}
        </span>
      </div>
      <div className="-mt-[5cqw] space-y-[2.6cqw] px-[5cqw]">
        {[
          { icon: Scale, title: "Steuerrecht" },
          { icon: Briefcase, title: "Unternehmensrecht" },
          { icon: Landmark, title: "Arbeitsrecht" },
        ].map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-[3cqw] bg-white p-[3.4cqw] shadow-sm">
            <span className="flex h-[9cqw] w-[9cqw] items-center justify-center" style={{ background: theme.soft }}>
              <Icon className="h-[5cqw] w-[5cqw]" strokeWidth={1.75} />
            </span>
            <span className="flex-1 text-[4.6cqw] font-semibold">{title}</span>
            <span className="text-[5cqw]" style={{ color: theme.primary }}>
              →
            </span>
          </div>
        ))}
      </div>
      <p className="mt-auto pb-[6cqw] text-center text-[3.8cqw] opacity-70">
        <span style={{ color: theme.primary }}>★ 4,9</span> · Seit 1998 · Erstgespräch gratis
      </p>
    </div>
  );
}

/* ================= AFTER · bold ================= */

function BoldAfterDesktop({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col px-[3.5cqw] py-[2.4cqw]" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[1cqw] text-[1.8cqw] font-extrabold tracking-tight uppercase">
          <span className="flex h-[2.4cqw] w-[2.4cqw] items-center justify-center rounded-[0.5cqw] text-[1.6cqw]" style={{ background: theme.primary, color: theme.onPrimary }}>
            <Zap className="h-[1.5cqw] w-[1.5cqw]" fill="currentColor" strokeWidth={0} />
          </span>
          {theme.brand}
        </span>
        <span className="flex items-center gap-[2cqw] text-[1.3cqw] opacity-70">
          {theme.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <span className="rounded-[0.6cqw] px-[1.6cqw] py-[0.8cqw] text-[1.3cqw] font-bold" style={{ background: theme.primary, color: theme.onPrimary }}>
          <PhoneIcon className="mr-[0.6cqw] inline h-[1.3cqw] w-[1.3cqw]" strokeWidth={2.5} />
          Notdienst 24/7
        </span>
      </div>
      <div className="mt-[3.5cqw] grid flex-1 grid-cols-[1.3fr_1fr] items-center gap-[4cqw]">
        <div>
          <p className="inline-flex items-center gap-[0.8cqw] rounded-full px-[1.2cqw] py-[0.5cqw] text-[1.2cqw]" style={{ background: theme.soft }}>
            <span style={{ color: theme.primary }}>★★★★★</span> Meisterbetrieb seit 2004
          </p>
          <p className="mt-[1.6cqw] text-[4.2cqw] leading-[1.02] font-extrabold tracking-tight uppercase">{theme.headline}</p>
          <p className="mt-[1.6cqw] text-[1.45cqw] leading-snug opacity-70">{theme.sub}</p>
          <div className="mt-[2.4cqw] flex items-center gap-[1.6cqw]">
            <span className="rounded-[0.8cqw] px-[2.2cqw] py-[1.1cqw] text-[1.5cqw] font-bold" style={{ background: theme.primary, color: theme.onPrimary }}>
              {theme.cta}
            </span>
            <span className="text-[1.35cqw] opacity-70">oder Rückruf anfordern ↓</span>
          </div>
        </div>
        <div className="rounded-[1.4cqw] border-[0.25cqw] p-[2cqw]" style={{ borderColor: theme.primary, background: theme.soft }}>
          <p className="text-[1.7cqw] font-bold">Rückruf in 15 Minuten</p>
          <span className="mt-[1.4cqw] block rounded-[0.6cqw] bg-white/10 px-[1.2cqw] py-[1cqw] text-[1.3cqw] opacity-70">Ihr Name</span>
          <span className="mt-[0.9cqw] block rounded-[0.6cqw] bg-white/10 px-[1.2cqw] py-[1cqw] text-[1.3cqw] opacity-70">Telefonnummer</span>
          <span className="mt-[1.4cqw] block rounded-[0.6cqw] py-[1cqw] text-center text-[1.4cqw] font-bold" style={{ background: theme.primary, color: theme.onPrimary }}>
            Rückruf anfordern
          </span>
        </div>
      </div>
      <div className="mt-[3cqw] flex gap-[1.2cqw]">
        {["Installationen", "E-Check", "Smart Home", "Wallbox"].map((item) => (
          <span key={item} className="rounded-[0.6cqw] border px-[1.6cqw] py-[0.8cqw] text-[1.25cqw] font-medium" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function BoldAfterPhone({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full flex-col" style={{ background: theme.bg, color: theme.ink }}>
      <div className="flex items-center justify-between px-[7cqw] py-[6cqw]">
        <span className="flex items-center gap-[2cqw] text-[6cqw] font-extrabold uppercase">
          <span className="flex h-[7cqw] w-[7cqw] items-center justify-center rounded-[1.5cqw] text-[5cqw]" style={{ background: theme.primary, color: theme.onPrimary }}>
            <Zap className="h-[4.6cqw] w-[4.6cqw]" fill="currentColor" strokeWidth={0} />
          </span>
          Elektro
        </span>
        <span className="text-[5cqw] font-bold" style={{ color: theme.primary }}>
          24/7
        </span>
      </div>
      <div className="px-[7cqw]">
        <p className="text-[4.2cqw]" style={{ color: theme.primary }}>
          ★★★★★ <span className="text-white/70">Meisterbetrieb</span>
        </p>
        <p className="mt-[4cqw] text-[10.5cqw] leading-[1.02] font-extrabold uppercase">{theme.headline}</p>
        <div className="mt-[7cqw] flex flex-wrap gap-[2.4cqw]">
          {["Installation", "E-Check", "Smart Home"].map((item) => (
            <span key={item} className="rounded-[1.5cqw] border px-[3cqw] py-[1.6cqw] text-[4cqw]" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-[2.5cqw] p-[4cqw]" style={{ background: theme.soft }}>
        <span className="rounded-[2cqw] py-[4cqw] text-center text-[5cqw] font-bold" style={{ background: theme.primary, color: theme.onPrimary }}>
          <PhoneIcon className="mr-[1.5cqw] inline h-[4.6cqw] w-[4.6cqw]" strokeWidth={2.5} />
          Anrufen
        </span>
        <span className="rounded-[2cqw] border py-[4cqw] text-center text-[5cqw] font-bold" style={{ borderColor: theme.primary, color: theme.primary }}>
          Rückruf
        </span>
      </div>
    </div>
  );
}

/* ================= BEFORE · clinic: 2000s portal ================= */

function PortalBeforeDesktop({ theme }: { theme: MockTheme }) {
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

function PortalBeforePhone({ theme }: { theme: MockTheme }) {
  // The old desktop layout squeezed onto a phone: tiny, unreadable, sideways scrolling.
  return (
    <div className="relative h-full overflow-hidden bg-[#e6e6e6]">
      <div className="absolute top-0 left-0 w-[260%] origin-top-left scale-[0.62] @container">
        <div className="aspect-[16/10]">
          <PortalBeforeDesktop theme={theme} />
        </div>
      </div>
      <BeforeBadge>Nicht mobil-optimiert</BeforeBadge>
    </div>
  );
}

/* ================= BEFORE · editorial: Flash intro site ================= */

function FlashBeforeDesktop({ theme }: { theme: MockTheme }) {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#3a1414,#0b0b0b_70%)] p-[3cqw] font-serif">
      <div className="flex h-full w-[78%] flex-col border-[0.4cqw] border-[#8a6d2f] bg-gradient-to-b from-[#1b1b1b] to-[#050505] shadow-[0_0_3cqw_#000]">
        <div className="flex justify-center gap-[0.6cqw] border-b border-[#8a6d2f] bg-gradient-to-b from-[#5a4520] to-[#2a1f0c] py-[0.8cqw]">
          {["Home", "Kanzlei", "Team", "Kontakt", "Impressum"].map((item) => (
            <span
              key={item}
              className="border border-t-[#d9b96a] border-r-[#3a2a0c] border-b-[#3a2a0c] border-l-[#d9b96a] bg-gradient-to-b from-[#a8853f] to-[#5f4718] px-[1.2cqw] py-[0.3cqw] text-[1.05cqw] text-[#fff3cf] italic"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-[1.2cqw] tracking-[0.4em] text-[#b89b5e] uppercase">Willkommen bei</p>
          <p className="mt-[1cqw] bg-gradient-to-b from-[#fff1c1] via-[#d4af37] to-[#7a5a14] bg-clip-text text-[4cqw] font-bold text-transparent italic">
            {theme.brand}
          </p>
          <p className="mt-[0.6cqw] text-[1.3cqw] text-[#c9c9c9] italic">„Ihr Recht ist unsere Leidenschaft“</p>
          <div className="mt-[3cqw] w-[40%]">
            <div className="h-[1cqw] overflow-hidden border border-[#8a6d2f] bg-black">
              <div className="h-full w-[67%] bg-gradient-to-r from-[#7a5a14] to-[#d4af37]" />
            </div>
            <p className="mt-[0.6cqw] text-[1.1cqw] text-[#b89b5e]">Lade Intro … 67 %</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-[1.6cqw] pb-[1cqw] text-[1cqw] text-[#888]">
          <span>♫ Musik an/aus</span>
          <span className="text-[#d4af37] underline">Intro überspringen »</span>
        </div>
      </div>
      <p className="absolute right-[2cqw] bottom-[1cqw] text-[0.9cqw] text-[#555]">
        © {theme.oldYear} · Am besten im Internet Explorer 7 ansehen
      </p>
    </div>
  );
}

function FlashBeforePhone() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[5cqw] bg-[#0b0b0b] px-[10cqw] text-center">
      <div className="flex h-[30cqw] w-[30cqw] items-center justify-center rounded-[4cqw] border-[0.8cqw] border-dashed border-[#555] text-[14cqw] text-[#666]">
        <Puzzle className="h-[14cqw] w-[14cqw]" strokeWidth={1.5} />
      </div>
      <p className="text-[5.4cqw] font-semibold text-[#ddd]">Plug-in nicht unterstützt</p>
      <p className="text-[4.2cqw] leading-snug text-[#888]">Für diese Seite wird der Adobe Flash Player benötigt.</p>
      <BeforeBadge>Seite bleibt leer</BeforeBadge>
    </div>
  );
}

/* ================= BEFORE · bold: 2016 WordPress slider + popups ================= */

function SliderBeforeDesktop({ theme }: { theme: MockTheme }) {
  return (
    <div className="relative flex h-full flex-col bg-white font-sans text-[#333]">
      <div className="flex items-center justify-between bg-[#1e73be] px-[2.4cqw] py-[1.2cqw] text-white">
        <span className="text-[1.8cqw] font-bold">{theme.brand.toUpperCase()}</span>
        <span className="flex gap-[1.8cqw] text-[1.1cqw] tracking-[0.08em] uppercase">
          <span>Home</span>
          {theme.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
          <span>Blog</span>
        </span>
      </div>
      <div className="relative flex h-[42%] items-center justify-center bg-gradient-to-br from-[#9aa5ad] to-[#5f6b73]">
        <span className="absolute left-[1.6cqw] text-[3cqw] text-white/70">‹</span>
        <span className="absolute right-[1.6cqw] text-[3cqw] text-white/70">›</span>
        <div className="bg-black/40 px-[2.4cqw] py-[1.2cqw] text-center text-white">
          <p className="text-[2.4cqw] font-light tracking-[0.12em] uppercase">Willkommen bei {theme.brand}</p>
          <p className="mt-[0.4cqw] text-[1.2cqw]">Ihr Partner für alles rund um Strom</p>
        </div>
        <span className="absolute bottom-[1cqw] flex gap-[0.6cqw]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`block h-[0.9cqw] w-[0.9cqw] rounded-full ${i === 1 ? "bg-white" : "bg-white/40"}`} />
          ))}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-[2cqw] px-[3cqw] py-[2cqw]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-[0.8cqw]">
            <span className="block h-[3.6cqw] w-[3.6cqw] rounded-full bg-[#1e73be]/20" />
            <Bars widths={["90%", "70%"]} color="#ddd" height="0.8cqw" />
          </div>
        ))}
      </div>
      {/* Newsletter popup */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/55">
        <div className="relative w-[42%] bg-white p-[2cqw] text-center shadow-xl">
          <span className="absolute top-[0.6cqw] right-[1cqw] text-[1.6cqw] text-[#999]">×</span>
          <p className="text-[1.9cqw] font-bold text-[#1e73be]">Newsletter abonnieren!</p>
          <p className="mt-[0.6cqw] text-[1.1cqw] text-[#777]">Verpassen Sie keine Angebote mehr.</p>
          <span className="mt-[1.2cqw] block border border-[#ccc] px-[1cqw] py-[0.8cqw] text-left text-[1.1cqw] text-[#aaa]">E-Mail-Adresse</span>
          <span className="mt-[0.8cqw] block bg-[#e67e22] py-[0.8cqw] text-[1.2cqw] font-bold text-white">JETZT ANMELDEN</span>
        </div>
      </div>
      {/* Cookie banner */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-[2cqw] bg-[#222] px-[2cqw] py-[1.2cqw] text-[1.05cqw] text-white/80">
        <span>Diese Website verwendet Cookies. Durch die weitere Nutzung stimmen Sie der Verwendung zu.</span>
        <span className="shrink-0 bg-[#1e73be] px-[1.4cqw] py-[0.5cqw] text-white">OK</span>
      </div>
    </div>
  );
}

function SliderBeforePhone({ theme }: { theme: MockTheme }) {
  return (
    <div className="relative flex h-full flex-col bg-white text-[#333]">
      <div className="flex items-center justify-between bg-[#1e73be] px-[5cqw] py-[4cqw] text-white">
        <span className="text-[5cqw] font-bold">{theme.brand.split(" ")[0].toUpperCase()}</span>
        <span className="text-[6cqw]">☰</span>
      </div>
      <div className="flex h-[30%] items-center justify-center bg-gradient-to-br from-[#9aa5ad] to-[#5f6b73] px-[5cqw] text-center text-[5cqw] text-white">
        WILLKOMMEN BEI {theme.brand.toUpperCase()}
      </div>
      <div className="space-y-[3cqw] p-[5cqw]">
        <Bars widths={["100%", "90%", "95%", "60%"]} color="#ddd" height="2.4cqw" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/55 px-[8cqw]">
        <div className="relative w-full bg-white p-[6cqw] text-center">
          <span className="absolute top-[1cqw] right-[3cqw] text-[6cqw] text-[#bbb]">×</span>
          <p className="text-[6cqw] font-bold text-[#1e73be]">Newsletter!</p>
          <span className="mt-[4cqw] block bg-[#e67e22] py-[3cqw] text-[4.4cqw] font-bold text-white">ANMELDEN</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#222] px-[5cqw] py-[5cqw] text-[4cqw] leading-snug text-white/80">
        Diese Website verwendet Cookies …
        <span className="mt-[3cqw] block bg-[#1e73be] py-[2cqw] text-center text-white">OK</span>
      </div>
    </div>
  );
}

function BeforeBadge({ children }: { children: string }) {
  return (
    <div className="absolute inset-x-[6cqw] bottom-[8cqw] rounded-[3cqw] bg-[#8b0000]/90 px-[4cqw] py-[3cqw] text-center text-[4.6cqw] font-medium text-white">
      {children}
    </div>
  );
}

function Desktop({ theme, after }: { theme: MockTheme; after: boolean }) {
  if (theme.style === "editorial") return after ? <EditorialAfterDesktop theme={theme} /> : <FlashBeforeDesktop theme={theme} />;
  if (theme.style === "bold") return after ? <BoldAfterDesktop theme={theme} /> : <SliderBeforeDesktop theme={theme} />;
  return after ? <ClinicAfterDesktop theme={theme} /> : <PortalBeforeDesktop theme={theme} />;
}

function Phone({ theme, after }: { theme: MockTheme; after: boolean }) {
  if (theme.style === "editorial") return after ? <EditorialAfterPhone theme={theme} /> : <FlashBeforePhone />;
  if (theme.style === "bold") return after ? <BoldAfterPhone theme={theme} /> : <SliderBeforePhone theme={theme} />;
  return after ? <ClinicAfterPhone theme={theme} /> : <PortalBeforePhone theme={theme} />;
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
        <div className="@container relative aspect-[16/10]">
          <Desktop theme={theme} after={after} />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[27%] rounded-[1.1rem] border-[3px] border-charcoal bg-charcoal p-[2px] shadow-[0_16px_40px_-14px_rgba(44,47,51,0.55)]">
        <div className="@container aspect-[9/19] overflow-hidden rounded-[0.9rem]">
          <Phone theme={theme} after={after} />
        </div>
      </div>
    </div>
  );
}
