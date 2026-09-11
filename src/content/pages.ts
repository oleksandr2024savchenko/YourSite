import { c } from "./copy";
import { CONTACT_EMAIL, CONTACT_PHONE, NAP, SITE_NAME } from "@/lib/site";

export const aboutPage = {
  seoTitle: c("Über uns | ClearPoint Wien", "About us | ClearPoint Vienna"),
  seoDescription: c(
    "ClearPoint ist ein Webstudio in Wien: klare Preise, nachvollziehbarer Prozess, SEO-Basis und DSGVO. Wer die Seiten baut, wie wir arbeiten, warum Unternehmen uns beauftragen.",
    "ClearPoint is a web studio in Vienna: clear prices, a readable process, SEO basics and GDPR. Who builds the sites, how we work, why companies hire us.",
  ),
  h1: c("Websites für Wiener Unternehmen – mit klarem Punkt.", "Websites for Vienna businesses – with a clear point."),
  intro: c(
    "ClearPoint plant und entwickelt Websites, die ein Angebot verständlich machen und zu einer Anfrage führen. Wir arbeiten für lokale Betriebe, Selbstständige und Unternehmen in Wien und Umgebung – ohne Agenturtheater und ohne Baukasten-Standard.",
    "ClearPoint plans and builds websites that make an offer understandable and lead to an enquiry. We work for local firms, independents and companies in Vienna and around – without agency theatre and without builder defaults.",
  ),
  who: {
    title: c("Wer wir sind", "Who we are"),
    paragraphs: [
      c(
        "ClearPoint ist ein kompaktes Studio, keine anonyme Produktionskette. Projekte laufen mit einer klaren Ansprechperson: von der Struktur über Design und Umsetzung bis zum Launch.",
        "ClearPoint is a compact studio, not an anonymous production chain. Projects run with one clear counterpart: from structure through design and build to launch.",
      ),
      c(
        "Wir bauen keine Universallösungen für jede Branche der Welt. Der Fokus liegt auf Unternehmen, deren Kundschaft in Österreich sucht, vergleicht und dann schreibt oder anruft.",
        "We do not build universal solutions for every industry on earth. The focus is companies whose customers in Austria search, compare and then write or call.",
      ),
      c(
        "Erfahrung zeigt sich in der Arbeit: Relaunch mit URL-Plan, Onepage mit ehrlichem SEO-Limit, Shop mit Checkout und Rechtstexten. Wir nennen nur das als Fakt, was der Prozess wirklich abbildet.",
        "Experience shows in the work: relaunch with a URL plan, one-pager with an honest SEO limit, shop with checkout and legal pages. We only state as fact what the process actually covers.",
      ),
    ],
  },
  trust: {
    title: c("Warum uns Unternehmen beauftragen", "Why companies hire us"),
    items: [
      { title: c("Transparente Preise", "Transparent prices"), text: c("Startpreis, Leistungsumfang, Add-ons – schriftlich vor dem Kickoff.", "Starting price, scope, add-ons – in writing before kickoff.") },
      { title: c("Nachvollziehbare Fristen", "Readable timelines"), text: c("1–2 Wochen für schlanke Seiten, länger wenn Shop oder viele URLs.", "1–2 weeks for lean pages, longer for a shop or many URLs.") },
      { title: c("Direkte Kommunikation", "Direct communication"), text: c("Eine Person, die das Projekt kennt. Antwort in der Regel innerhalb von 24 Stunden.", "One person who knows the project. A reply usually within 24 hours.") },
      { title: c("Support nach dem Launch", "Support after launch"), text: c("Wartung als echtes Angebot, nicht als nachgeschobene Überraschung.", "Maintenance as a real offer, not a surprise added later.") },
    ],
  },
  founder: {
    title: c("Studioleitung", "Studio lead"),
    name: "ClearPoint",
    role: c("Konzept, Design und Umsetzung", "Concept, design and build"),
    text: c(
      "Verantwortlich für den roten Faden: Was die Seite sagen soll, wie sie aufgebaut ist und wie sie technisch hält. Für Fotos und Teamseiten setzen wir auf ehrliche Darstellung – ohne Stock-Gesichter als angebliche Mitarbeitende.",
      "Responsible for the thread: what the site should say, how it is structured and how it holds technically. For photos and team pages we keep it honest – no stock faces as supposed staff.",
    ),
  },
  tech: {
    title: c("Technik und Standards", "Technology and standards"),
    items: [
      c("SEO-Basis: Title, Description, Canonical, Sitemap, interne Links", "SEO basics: title, description, canonical, sitemap, internal links"),
      c("Performance und Mobile First", "Performance and mobile first"),
      c("DSGVO: Formular-Einwilligung, Datenschutz, kein Tracking vor Consent", "GDPR: form consent, privacy, no tracking before consent"),
      c("CMS dort, wo Pflege nötig ist", "CMS where editing is needed"),
    ],
  },
  note: c(
    "Referenzen zeigen, wie ein Auftritt wirkt: klares Angebot, ruhiges Design, Weg zur Anfrage.",
    "References show how a presence works: a clear offer, calm design, a path to an enquiry.",
  ),
};

export const referencesPage = {
  seoTitle: c("Referenzen | ClearPoint Wien", "Work | ClearPoint Vienna"),
  seoDescription: c(
    "Referenzen von ClearPoint in Wien: ausgewählte Websites und Stimmen von Auftraggebern. Business Website, Onepage, Relaunch und Shop.",
    "Work from ClearPoint in Vienna: selected websites and client voices. Business sites, one-pagers, relaunches and shops.",
  ),
  h1: c("Referenzen – Websites mit klarem Punkt.", "Work – websites with a clear point."),
  intro: c(
    "Ausgewählte Projekte für Unternehmen in Wien und Umgebung. Jede Seite macht ein Angebot verständlich und führt zur Anfrage.",
    "Selected projects for companies in Vienna and around. Each site makes an offer understandable and leads to an enquiry.",
  ),
};

export const contactPage = {
  seoTitle: c("Kontakt | ClearPoint Wien", "Contact | ClearPoint Vienna"),
  seoDescription: c(
    "Kontakt zu ClearPoint in Wien: Formular, E-Mail, Telefon. Servicegebiet Wien und Umgebung, Termine nach Vereinbarung, Antwort in 24 Stunden.",
    "Contact ClearPoint in Vienna: form, email, phone. Service area Vienna and around, appointments on request, reply within 24 hours.",
  ),
  h1: c("Kontakt – wir antworten innerhalb von 24 Stunden", "Contact – we reply within 24 hours"),
  intro: c(
    "Schildern Sie kurz Ihr Projekt. Sie erhalten eine Rückmeldung mit nächsten Schritten – unverbindlich.",
    "Briefly describe your project. You get a reply with next steps – no obligation.",
  ),
  napTitle: c("ClearPoint in Wien", "ClearPoint in Vienna"),
  area: c(NAP.areaServed, "Vienna and surrounding area"),
  hours: c(NAP.hours, "Appointments by arrangement"),
  mapNote: c(
    "Wir arbeiten als Service-Area-Studio in Wien. Ein Besuchstermin ist nach Vereinbarung möglich – ohne erfundenes Schaufenster.",
    "We work as a service-area studio in Vienna. A meeting is possible by arrangement – without an invented storefront.",
  ),
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Wien+Oesterreich",
};

export const pricingPage = {
  seoTitle: c("Webdesign Preise Wien | Website Kosten", "Web design prices Vienna | Website costs"),
  seoDescription: c(
    "Webdesign Preise in Wien: Fixpreis statt Überraschung. Relaunch ab 699 €, Onepage ab 1.499 €, Business Website ab 2.999 €, Shop ab 4.999 €. Was enthalten ist, was extra bleibt.",
    "Web design prices in Vienna: fixed price instead of surprises. Relaunch from €699, one-pager from €1,499, business site from €2,999, shop from €4,999. What is included, what stays extra.",
  ),
  h1: c("Webdesign Preise in Wien – Fixpreis statt Überraschungen", "Web design prices in Vienna – fixed price, not surprises"),
  intro: c(
    "Jeder Startpreis gilt für einen beschriebenen Umfang. Zusätzliche Seiten, Texte, Sprachen, Shops-Extras und laufende Gebühren (Hosting, Payment) weisen wir getrennt aus.",
    "Each starting price belongs to a described scope. Extra pages, copy, languages, shop extras and recurring fees (hosting, payment) are listed separately.",
  ),
  extrasTitle: c("Was zusätzlich anfallen kann", "What can be extra"),
  extras: [
    { title: c("Texte und Fotos", "Copy and photos"), text: c("Wenn Inhalte fehlen, entsteht Aufwand – als Option, nicht als stille Nachbelastung.", "If content is missing, effort appears – as an option, not a silent extra bill.") },
    { title: c("Laufende Gebühren", "Recurring fees"), text: c("Hosting, Domain, Zahlungsanbieter. Diese Beträge fließen an Dritte, nicht in unseren einmaligen Fixpreis.", "Hosting, domain, payment providers. These amounts go to third parties, not into our one-off fixed price.") },
    { title: c("Wartung", "Maintenance"), text: c("Optional ab 39 € im Monat, damit Updates und Formulare nicht einschlafen.", "Optional from €39 per month so updates and forms do not fall asleep.") },
  ],
};

export const websiteCheckPage = {
  seoTitle: c("Kostenloser Website Check Wien | ClearPoint", "Free website check Vienna | ClearPoint"),
  seoDescription: c(
    "Kostenloser Website Check in Wien: Technik, SEO, Mobile und Conversion. Plus Tools für Performance, Sichtbarkeit und Barrierearmut – und eine professionelle Einschätzung.",
    "Free website check in Vienna: technology, SEO, mobile and conversion. Plus tools for performance, visibility and accessibility – and a professional review.",
  ),
  h1: c("Kostenloser Website Check für Wien", "Free website check for Vienna"),
  intro: c(
    "Vier Blickwinkel, bevor Sie relaunchen oder Anzeigen schalten: Technik, SEO, Mobile, Conversion. Sie können selbst Tools nutzen oder uns die URL schicken – wir antworten mit einer klaren Einschätzung.",
    "Four angles before you relaunch or run ads: technology, SEO, mobile, conversion. You can use tools yourself or send us the URL – we reply with a clear assessment.",
  ),
  pillars: [
    { title: c("Technik", "Technology"), text: c("HTTPS, Ladezeit, veraltete Systeme, kaputte Formulare.", "HTTPS, load time, outdated systems, broken forms.") },
    { title: c("SEO", "SEO"), text: c("Title, Description, H1, interne Links, lokale Signale für Wien.", "Title, description, H1, internal links, local signals for Vienna.") },
    { title: c("Mobile", "Mobile"), text: c("Lesbarkeit, Buttons, Menü, Formular auf dem Smartphone.", "Readability, buttons, menu, form on a phone.") },
    { title: c("Conversion", "Conversion"), text: c("Angebot, CTA, Vertrauen, nächster Schritt.", "Offer, CTA, trust, next step.") },
  ],
  toolsTitle: c("Kostenlose Analyse-Tools zum Selbstprüfen", "Free analysis tools to check yourself"),
  tools: [
    {
      title: c("SEO Check", "SEO check"),
      text: c("Snippets, Indexierung und strukturierte Daten grob prüfen.", "Roughly check snippets, indexing and structured data."),
      href: "https://search.google.com/test/rich-results",
      cta: c("Rich-Results-Test öffnen", "Open Rich Results test"),
    },
    {
      title: c("Performance Check", "Performance check"),
      text: c("Ladezeit am Mobilgerät und auf dem Desktop messen.", "Measure load time on mobile and desktop."),
      href: "https://pagespeed.web.dev/",
      cta: c("PageSpeed öffnen", "Open PageSpeed"),
    },
    {
      title: c("Sichtbarkeit Check", "Visibility check"),
      text: c("Wie Ihre Seite in der mobilen Suche wirken kann.", "How your page can appear in mobile search."),
      href: "https://search.google.com/test/mobile-friendly?hl=de",
      cta: c("Mobile-Test öffnen", "Open mobile test"),
    },
    {
      title: c("Accessibility Check", "Accessibility check"),
      text: c("Kontraste, Alternativtexte und Tastatur-Fallen finden.", "Find contrast issues, missing alt text and keyboard traps."),
      href: "https://wave.webaim.org/",
      cta: c("WAVE öffnen", "Open WAVE"),
    },
  ],
};

export const legalPages = {
  impressum: {
    seoTitle: c("Impressum | ClearPoint", "Imprint | ClearPoint"),
    seoDescription: c(
      "Impressum von ClearPoint, Wien: Name, Kontakt, Servicegebiet, E-Mail und Telefon – Pflichtangaben nach österreichischem Recht.",
      "Imprint of ClearPoint, Vienna: name, contact, service area, email and phone – mandatory information under Austrian law.",
    ),
    h1: c("Impressum", "Imprint"),
    blocks: [
      {
        title: c("Medieninhaber", "Media owner"),
        text: c(
          `${SITE_NAME}\nTätig in ${NAP.areaServed}\n${NAP.country}\n\nE-Mail: ${CONTACT_EMAIL}\nTelefon: ${CONTACT_PHONE}\n${NAP.hours}`,
          `${SITE_NAME}\nActive in Vienna and surrounding area\nAustria\n\nEmail: ${CONTACT_EMAIL}\nPhone: ${CONTACT_PHONE}\nAppointments by arrangement`,
        ),
      },
      {
        title: c("Unternehmensgegenstand", "Business purpose"),
        text: c(
          "Planung, Gestaltung und Entwicklung von Websites sowie damit verbundene Beratung für Unternehmen in Österreich.",
          "Planning, design and development of websites and related consulting for companies in Austria.",
        ),
      },
      {
        title: c("Haftung für Inhalte und Links", "Liability for content and links"),
        text: c(
          "Die Inhalte dieser Website wurden sorgfältig erstellt. Für Vollständigkeit und Aktualität externer Links übernehmen wir keine Gewähr. Für den Inhalt verlinkter Seiten sind deren Betreiber verantwortlich.",
          "The content of this website was prepared with care. We do not warrant completeness or currency of external links. Operators of linked pages are responsible for their content.",
        ),
      },
      {
        title: c("EU-Streitschlichtung", "EU dispute resolution"),
        text: c(
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are not obliged to take part in dispute procedures before a consumer arbitration board.",
        ),
      },
    ],
  },
  datenschutz: {
    seoTitle: c("Datenschutz | ClearPoint", "Privacy | ClearPoint"),
    seoDescription: c(
      "Datenschutzerklärung von ClearPoint: welche Daten das Anfrageformular erhebt, Rechtsgrundlagen, Speicherdauer und Ihre Rechte nach DSGVO.",
      "Privacy policy of ClearPoint: which data the enquiry form collects, legal bases, retention and your GDPR rights.",
    ),
    h1: c("Datenschutzerklärung", "Privacy policy"),
    blocks: [
      {
        title: c("Verantwortlich", "Controller"),
        text: c(
          `${SITE_NAME}, tätig in ${NAP.areaServed}. Kontakt: ${CONTACT_EMAIL}, ${CONTACT_PHONE}.`,
          `${SITE_NAME}, active in Vienna and surrounding area. Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE}.`,
        ),
      },
      {
        title: c("Hosting", "Hosting"),
        text: c(
          "Diese Website wird statisch ausgeliefert. Der jeweilige Hoster verarbeitet dabei technisch notwendige Server-Logfiles (IP-Adresse, Zeitpunkt, User-Agent) zur Bereitstellung und Absicherung des Dienstes, Art. 6 Abs. 1 lit. f DSGVO.",
          "This website is delivered statically. The host processes technically necessary server log files (IP address, time, user agent) to provide and secure the service, Art. 6(1)(f) GDPR.",
        ),
      },
      {
        title: c("Anfrageformular", "Enquiry form"),
        text: c(
          `Wenn Sie das Formular nutzen, verarbeiten wir Name, E-Mail, optional Unternehmen, Projekttyp, Nachricht und die Einwilligung zur Verarbeitung. Zweck: Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich) und Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Zustellung erfolgt über den Formular-Dienst FormSubmit an ${CONTACT_EMAIL}. Speicherdauer: solange die Anfrage und gesetzliche Aufbewahrung es erfordern.`,
          `If you use the form we process name, email, optional company, project type, message and consent. Purpose: handling your enquiry. Legal bases: Art. 6(1)(b) GDPR (pre-contract) and Art. 6(1)(a) GDPR (consent). Delivery uses the FormSubmit service to ${CONTACT_EMAIL}. Retention: as long as the enquiry and legal duties require.`,
        ),
      },
      {
        title: c("E-Mail und Telefon", "Email and phone"),
        text: c(
          "Kontaktieren Sie uns direkt, verarbeiten wir die dabei übermittelten Daten zur Beantwortung, Art. 6 Abs. 1 lit. b oder f DSGVO.",
          "If you contact us directly we process the data you send in order to reply, Art. 6(1)(b) or (f) GDPR.",
        ),
      },
      {
        title: c("Cookies und Analyse", "Cookies and analytics"),
        text: c(
          "Wir setzen kein Marketing-Tracking ohne Einwilligung. Technisch notwendige Speicherung (z. B. Spracheinstellung lokal im Browser) bleibt auf Ihrem Gerät.",
          "We do not run marketing tracking without consent. Technically necessary storage (for example language locally in the browser) stays on your device.",
        ),
      },
      {
        title: c("Ihre Rechte", "Your rights"),
        text: c(
          "Sie haben Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf erteilter Einwilligungen. Beschwerden richten Sie an die Österreichische Datenschutzbehörde.",
          "You have the right of access, rectification, erasure, restriction, portability, objection and withdrawal of given consent. Complaints can be filed with the Austrian Data Protection Authority.",
        ),
      },
    ],
  },
  agb: {
    seoTitle: c("AGB | ClearPoint", "Terms | ClearPoint"),
    seoDescription: c(
      "Allgemeine Geschäftsbedingungen von ClearPoint: Ablauf, Fixpreis, Zahlung 50/50, Nutzungsrechte, Mitwirkung und Haftung für Webprojekte.",
      "Terms and conditions of ClearPoint: process, fixed price, 50/50 payment, usage rights, cooperation and liability for web projects.",
    ),
    h1: c("Allgemeine Geschäftsbedingungen", "Terms and conditions"),
    blocks: [
      {
        title: c("Geltung", "Scope"),
        text: c(
          "Diese Bedingungen gelten für die Planung, Gestaltung und Entwicklung von Websites durch ClearPoint, soweit im Einzelangebot nichts Abweichendes steht.",
          "These terms apply to planning, design and development of websites by ClearPoint unless the individual quote says otherwise.",
        ),
      },
      {
        title: c("Angebot und Fixpreis", "Quote and fixed price"),
        text: c(
          "Leistungen werden vor dem Start schriftlich beschrieben. Der Fixpreis gilt für diesen Umfang. Änderungen nach Auftragserteilung werden vor der Umsetzung angeboten.",
          "Services are described in writing before start. The fixed price covers that scope. Changes after the order are quoted before they are built.",
        ),
      },
      {
        title: c("Zahlung", "Payment"),
        text: c(
          "Soweit nicht anders vereinbart: 50 % bei Auftrag, 50 % nach Ihrer Freigabe und vor dem Go-Live. Wartung wird monatlich abgerechnet und ist monatlich kündbar.",
          "Unless agreed otherwise: 50% on order, 50% after your approval and before go-live. Maintenance is billed monthly and can be cancelled monthly.",
        ),
      },
      {
        title: c("Mitwirkung", "Cooperation"),
        text: c(
          "Sie stellen Inhalte, Zugänge und Feedback in den vereinbarten Fristen bereit. Verzögerungen auf Kundenseite verschieben den Zeitplan.",
          "You provide content, access and feedback within the agreed times. Delays on the client side move the schedule.",
        ),
      },
      {
        title: c("Rechte", "Rights"),
        text: c(
          "Nach vollständiger Zahlung erhalten Sie die Nutzungsrechte am vereinbarten Arbeitsergebnis. Vorhandene Drittbestandteile (Schriften, Stock, Libraries) bleiben bei deren Lizenzgebern.",
          "After full payment you receive usage rights in the agreed work. Existing third-party parts (fonts, stock, libraries) stay with their licensors.",
        ),
      },
      {
        title: c("Haftung", "Liability"),
        text: c(
          "Für leichte Fahrlässigkeit haften wir nicht, soweit nicht Leben, Körper, Gesundheit oder wesentliche Vertragspflichten betroffen sind. Rechtstexte ersetzen keine anwaltliche Beratung für Ihren konkreten Fall.",
          "We are not liable for slight negligence unless life, body, health or essential contractual duties are affected. Legal pages do not replace lawyer advice for your specific case.",
        ),
      },
    ],
  },
};
