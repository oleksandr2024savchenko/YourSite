import { c } from "./copy";

/** Copy for the homepage. Concrete, first-hand and short – no generic agency phrases. */
export const home = {
  hero: {
    eyebrow: c("Webdesign für KMU · Wien & ganz Österreich", "Web design for SMEs · Vienna & all of Austria"),
    headlineStart: c("Websites für Wiener Betriebe.", "Websites for Vienna businesses."),
    headlineAccent: c("Online in 14 Tagen, zum Fixpreis.", "Live in 14 days, at a fixed price."),
    sub: c(
      "Für Praxen, Kanzleien, Handwerk und Dienstleister, deren Website in die Jahre gekommen ist. Sie bekommen vorab einen schriftlichen Fixpreis – und zahlen die zweite Hälfte erst, wenn Ihnen das Ergebnis gefällt.",
      "For practices, law firms, trades and service businesses whose website has aged. You get a written fixed price up front – and pay the second half only once you like the result.",
    ),
    primary: c("Kostenloses Erstgespräch", "Free discovery call"),
    secondary: c("Website gratis prüfen lassen", "Get a free website check"),
    facts: [
      c("Fixpreis schriftlich", "Fixed price in writing"),
      c("50 % erst nach Abnahme", "50% only after approval"),
      c("Antwort in 24 h", "Reply within 24 h"),
    ],
    note: c("Probieren Sie's: vorher / nachher", "Try it: before / after"),
  },
  problem: {
    statement: c(
      "Ihre Kundschaft entscheidet in wenigen Sekunden, ob sie anruft – meistens am Handy.",
      "Your customers decide within seconds whether to call – mostly on their phone.",
    ),
    oftenTitle: c("Was wir in Wien oft sehen", "What we often see in Vienna"),
    usTitle: c("Was Sie bei uns bekommen", "What you get with us"),
    rows: [
      {
        often: c("Website von 2014, am Handy kaum lesbar", "A 2014 website, barely readable on a phone"),
        us: c("Mobil zuerst gebaut, lädt in unter einer Sekunde", "Built mobile-first, loads in under a second"),
      },
      {
        often: c("Impressum unvollständig, Cookie-Banner ohne echte Einwilligung", "Incomplete imprint, cookie banner without real consent"),
        us: c("Impressum nach § 5 ECG, DSGVO, Server in der EU", "Imprint per § 5 ECG, GDPR, servers in the EU"),
      },
      {
        often: c("Agentur-Angebot: 3 Monate, ab 5.000 €, Nachträge inklusive", "Agency quote: 3 months, €5,000+, change requests on top"),
        us: c("Online in 7–14 Tagen, ab 699 € – schriftlich vor dem Start", "Live in 7–14 days, from €699 – in writing before we start"),
      },
      {
        often: c("Nach dem Launch fühlt sich niemand zuständig", "After launch nobody feels responsible"),
        us: c("Ein Ansprechpartner in Wien – auch danach", "One contact person in Vienna – afterwards too"),
      },
    ],
  },
  packages: {
    eyebrow: c("Pakete", "Packages"),
    title: c("Drei Wege zur neuen Website", "Three ways to a new website"),
    popular: c("Beliebteste Wahl", "Most popular"),
    items: [
      {
        slug: "website-relaunch" as const,
        price: c("ab 699 €", "from €699"),
        time: c("5–7 Tage", "5–7 days"),
        fit: c("Die Inhalte passen, aber die Seite wirkt alt und ist am Handy mühsam.", "The content is fine, but the site looks old and is painful on a phone."),
      },
      {
        slug: "business-website" as const,
        price: c("ab 2.999 €", "from €2,999"),
        time: c("10–14 Tage", "10–14 days"),
        fit: c("Mehrere Leistungen, eigene Seiten dafür – und bei Google gefunden werden.", "Several services, a page for each – and being found on Google."),
      },
      {
        slug: "onepage-website" as const,
        price: c("ab 1.499 €", "from €1,499"),
        time: c("ca. 7 Tage", "about 7 days"),
        fit: c("Eine klare Seite reicht: wer Sie sind, was Sie tun, wie man Sie erreicht.", "One clear page is enough: who you are, what you do, how to reach you."),
      },
    ],
    allLink: c("Alle Pakete vergleichen", "Compare all packages"),
    calcLink: c("Kosten in 30 Sekunden schätzen", "Estimate costs in 30 seconds"),
    more: c("Außerdem: Landing Page ab 1.799 €, Online-Shop ab 4.999 €, Wartung ab 39 €/Monat.", "Also: landing page from €1,799, online shop from €4,999, maintenance from €39/month."),
  },
  timeline: {
    eyebrow: c("Ablauf", "Process"),
    title: c("Vom Erstgespräch bis online – in 14 Tagen.", "From first call to live – in 14 days."),
    note: c(
      "Beispiel Business Website. Relaunch und Onepage gehen schneller. Die Uhr läuft ab dem Tag, an dem Ihre Inhalte da sind.",
      "Example: business website. Relaunches and one-pagers are faster. The clock starts once your content is in.",
    ),
    steps: [
      {
        day: c("Tag 1", "Day 1"),
        title: c("Erstgespräch", "Discovery call"),
        text: c("30 Minuten per Telefon, Video oder bei Ihnen in Wien. Danach wissen Sie, welches Paket passt.", "30 minutes by phone, video or at your place in Vienna. Afterwards you know which package fits."),
      },
      {
        day: c("Tag 2", "Day 2"),
        title: c("Fixpreis schriftlich", "Fixed price in writing"),
        text: c("Umfang, Preis und Launch-Datum auf einer Seite. Erst wenn Sie zusagen: 50 % Anzahlung.", "Scope, price and launch date on one page. Only once you agree: 50% deposit."),
        pay: c("50 %", "50%"),
      },
      {
        day: c("Tag 3–6", "Day 3–6"),
        title: c("Entwurf zum Anklicken", "Clickable draft"),
        text: c("Sie sehen die Startseite am Handy und am Desktop. Zwei Feedbackrunden sind inklusive.", "You see the homepage on phone and desktop. Two feedback rounds are included."),
      },
      {
        day: c("Tag 7–12", "Day 7–12"),
        title: c("Umsetzung", "Build"),
        text: c("Alle Seiten, Formulare, Impressum & Datenschutz, SEO-Grundlagen, Tests auf echten Geräten.", "All pages, forms, imprint & privacy, SEO basics, tests on real devices."),
      },
      {
        day: c("Tag 13–14", "Day 13–14"),
        title: c("Abnahme & Launch", "Approval & launch"),
        text: c("Sie prüfen, wir schalten live. Erst jetzt zahlen Sie die zweite Hälfte.", "You check, we go live. Only now do you pay the second half."),
        pay: c("50 %", "50%"),
      },
    ],
    after: c("Danach: Wartung ab 39 €/Monat – der erste Monat ist gratis, monatlich kündbar.", "Afterwards: maintenance from €39/month – first month free, cancel monthly."),
  },
  check: {
    eyebrow: c("Gratis · Antwort in 24 Stunden", "Free · reply within 24 hours"),
    title: c("Kostenloser Website Check – ehrlich und in Klartext.", "Free website check – honest and in plain words."),
    points: [
      c("Ampel-Bewertung für Technik, Handy, Google und Recht", "Traffic-light rating for tech, mobile, Google and legal"),
      c("Die drei wichtigsten Baustellen – ohne Fachchinesisch", "The three most important issues – without jargon"),
      c("Klare Empfehlung: reparieren lassen oder neu machen", "A clear recommendation: fix it or rebuild"),
    ],
    cta: c("Check anfordern", "Request the check"),
    sampleLabel: c("Beispiel-Auszug", "Sample excerpt"),
    reportTitle: c("Website Check", "Website check"),
    rows: [
      { label: c("Ladezeit am Handy", "Load time on mobile"), value: "4,8 s", tone: "bad" as const },
      { label: c("Darstellung am Handy", "Mobile layout"), value: c("Buttons zu klein", "Buttons too small"), tone: "warn" as const },
      { label: c("Impressum (§ 5 ECG)", "Imprint (§ 5 ECG)"), value: c("UID fehlt", "VAT ID missing"), tone: "bad" as const },
      { label: c("Google-Titel & Beschreibung", "Google title & description"), value: c("in Ordnung", "fine"), tone: "good" as const },
      { label: c("HTTPS-Verschlüsselung", "HTTPS encryption"), value: c("aktiv", "active"), tone: "good" as const },
    ],
    verdict: c("Empfehlung: Relaunch – Inhalte behalten, Technik neu.", "Recommendation: relaunch – keep content, new tech."),
    handNote: c("das schicken wir Ihnen", "this is what you get"),
  },
  letter: {
    eyebrow: c("Ein Wort vorab", "A word up front"),
    text: c(
      "Ich betreue jedes Projekt persönlich – vom ersten Gespräch bis nach dem Launch. Sie haben eine Person, eine Telefonnummer und wissen immer, was als Nächstes passiert. Und wenn eine neue Website für Sie gerade keinen Sinn ergibt, sage ich Ihnen das im Erstgespräch. Ehrlich und ohne Verkaufsdruck.",
      "I look after every project personally – from the first call until after launch. You have one person, one phone number, and always know what happens next. And if a new website does not make sense for you right now, I will tell you in the first call. Honestly and without sales pressure.",
    ),
    formTitle: c("Erzählen Sie kurz von Ihrem Projekt", "Tell me briefly about your project"),
    formNote: c("Kostenlos · unverbindlich · Antwort innerhalb von 24 Stunden", "Free · no obligation · reply within 24 hours"),
  },
  faq: {
    eyebrow: c("FAQ", "FAQ"),
    title: c("Was Kund:innen vorher wissen wollen", "What clients want to know first"),
    items: [
      {
        q: c("Wie schnell ist meine Website online?", "How fast will my website be live?"),
        a: c(
          "Relaunch 5–7 Tage, Onepage ca. 7, Landing Page 7–10, Business Website 10–14 Tage, Online-Shop 3–4 Wochen. Die Uhr läuft ab dem Tag, an dem Texte und Bilder da sind – fehlen sie, schreiben wir die Texte gerne mit.",
          "Relaunch 5–7 days, one-pager about 7, landing page 7–10, business website 10–14 days, online shop 3–4 weeks. The clock starts once copy and images are in – if they are missing, we are happy to write the copy.",
        ),
      },
      {
        q: c("Was kostet das wirklich?", "What does it really cost?"),
        a: c(
          "Von 699 € (Relaunch) bis ab 4.999 € (Online-Shop), netto. Vor dem Start bekommen Sie einen schriftlichen Fixpreis. Mehr wird es nur, wenn Sie den Umfang später erweitern – und auch das erst nach Ihrem OK.",
          "From €699 (relaunch) to €4,999+ (online shop), net. Before we start you get a written fixed price. It only costs more if you extend the scope later – and only after your OK.",
        ),
      },
      {
        q: c("Wann bezahle ich?", "When do I pay?"),
        a: c(
          "50 % bei Auftrag, 50 % nach Ihrer Abnahme – also erst, wenn die Website so ist, wie Sie sie haben wollen. Zwei Feedbackrunden zum Entwurf sind inklusive.",
          "50% on order, 50% after your approval – so only once the website is the way you want it. Two feedback rounds on the draft are included.",
        ),
      },
      {
        q: c("Ist das rechtlich sauber – DSGVO, Impressum, Cookies?", "Is it legally sound – GDPR, imprint, cookies?"),
        a: c(
          "Ja. Impressum nach § 5 ECG, Datenschutzerklärung, Cookie-Einwilligung nur dort, wo sie nötig ist, und Hosting in der EU. Wir sind keine Anwälte, setzen die üblichen Anforderungen für österreichische Betriebe aber vollständig um.",
          "Yes. Imprint per § 5 ECG, privacy policy, cookie consent only where needed, and hosting in the EU. We are not lawyers, but we fully implement the usual requirements for Austrian businesses.",
        ),
      },
      {
        q: c("Brauche ich eigene Texte und Fotos?", "Do I need my own copy and photos?"),
        a: c(
          "Ideal, wenn Sie welche haben. Wenn nicht, schreiben wir die Texte (ab 249 €) und arbeiten mit lizenzierten Bildern, bis eigene Fotos da sind.",
          "Ideal if you have them. If not, we write the copy (from €249) and use licensed images until your own photos are ready.",
        ),
      },
      {
        q: c("Was passiert nach dem Launch?", "What happens after launch?"),
        a: c(
          "Die Website gehört Ihnen. Auf Wunsch betreuen wir sie ab 39 € im Monat: Updates, Backups, kleine Änderungen. Der erste Monat ist gratis, kündbar monatlich.",
          "The website is yours. If you like, we look after it from €39 a month: updates, backups, small changes. The first month is free, cancel monthly.",
        ),
      },
      {
        q: c("Ich habe schon eine Website. Lohnt sich ein Relaunch?", "I already have a website. Is a relaunch worth it?"),
        a: c(
          "Schicken Sie uns die Adresse für den kostenlosen Website Check. Sie bekommen innerhalb von 24 Stunden eine ehrliche Antwort – manchmal reichen ein paar gezielte Fixes.",
          "Send us the address for the free website check. You get an honest answer within 24 hours – sometimes a few targeted fixes are enough.",
        ),
      },
    ],
  },
};
