import { c, type Copy } from "./copy";

export const ui = {
  nav: {
    home: c("Home", "Home"),
    services: c("Leistungen", "Services"),
    pricing: c("Preise", "Pricing"),
    about: c("Über uns", "About"),
    blog: c("Blog", "Blog"),
    contact: c("Kontakt", "Contact"),
    cta: c("Beratung anfragen", "Request a consult"),
    openMenu: c("Menü öffnen", "Open menu"),
    closeMenu: c("Menü schließen", "Close menu"),
    allServices: c("Alle Leistungen", "All services"),
  },
  form: {
    name: c("Ihr Name", "Your name"),
    email: c("E-Mail", "Email"),
    company: c("Unternehmen", "Company"),
    website: c("Aktuelle Website (falls vorhanden)", "Current website (if any)"),
    projectType: c("Welche Website benötigen Sie?", "Which website do you need?"),
    projectTypePlaceholder: c("Bitte auswählen", "Please select"),
    projectOptions: [
      c("Website erstellen lassen", "Have a website built"),
      c("Business Website", "Business website"),
      c("Onepage Website", "One-page website"),
      c("Landing Page", "Landing page"),
      c("Website Relaunch", "Website relaunch"),
      c("Online-Shop", "Online shop"),
      c("Website Check", "Website check"),
      c("Support und Wartung", "Support and maintenance"),
      c("Ich bin mir noch nicht sicher", "I am not sure yet"),
    ],
    message: c("Ihr Anliegen", "Your message"),
    dsgvo: c(
      "Ich willige ein, dass ClearPoint meine Angaben zur Bearbeitung der Anfrage verarbeitet. Hinweise stehen in der Datenschutzerklärung.",
      "I agree that ClearPoint may process my details to handle this enquiry. Details are in the privacy policy.",
    ),
    dsgvoLink: c("Datenschutzerklärung", "Privacy policy"),
    submit: c("Anfrage senden", "Send enquiry"),
    sending: c("Wird gesendet …", "Sending …"),
    successTitle: c("Danke, Ihre Anfrage ist unterwegs.", "Thank you, your enquiry is on its way."),
    successText: c(
      "Wir antworten in der Regel innerhalb von 24 Stunden. Prüfen Sie ggf. auch den Spam-Ordner der Bestätigung.",
      "We usually reply within 24 hours. Please also check the spam folder for any confirmation.",
    ),
    error: c(
      "Senden hat nicht geklappt. Schreiben Sie uns direkt per E-Mail – das Formular hat die Nachricht nicht verloren, sie liegt noch in den Feldern.",
      "Sending did not work. Email us directly – the form has not lost your message, it is still in the fields.",
    ),
    another: c("Weitere Anfrage", "Another enquiry"),
  },
  sticky: {
    label: c("Unverbindliche Beratung", "No-obligation consult"),
    cta: c("Jetzt anfragen", "Enquire now"),
  },
  breadcrumbs: {
    home: c("Home", "Home"),
    services: c("Leistungen", "Services"),
    blog: c("Blog", "Blog"),
  },
  common: {
    included: c("Enthalten", "Included"),
    notIncluded: c("Nicht enthalten", "Not included"),
    fits: c("Passt, wenn", "Fits if"),
    notFits: c("Passt nicht, wenn", "Does not fit if"),
    diy: c("Baukasten / Template", "Builder / template"),
    pro: c("ClearPoint", "ClearPoint"),
    related: c("Passende Leistungen", "Related services"),
    readMore: c("Artikel lesen", "Read article"),
    viewService: c("Leistung ansehen", "View service"),
    fromPrice: c("Startpreis", "Starting price"),
    timeline: c("Zeitrahmen", "Timeline"),
    demoNote: c(
      "Beispielprojekte zur Illustration – keine erfundenen Kundenstimmen.",
      "Sample projects for illustration – not invented testimonials.",
    ),
    updated: c("Aktualisiert", "Updated"),
    author: c("Autor", "Author"),
    consultCta: c("Kostenloses Erstgespräch", "Free discovery call"),
    toolsExternal: c("Öffnet ein externes Tool", "Opens an external tool"),
    phone: c("Telefon", "Phone"),
    email: c("E-Mail", "Email"),
    whatsapp: c("WhatsApp", "WhatsApp"),
    hours: c("Erreichbarkeit", "Availability"),
    area: c("Tätig in", "Active in"),
    map: c("Karte: Wien", "Map: Vienna"),
  },
};

export function tUi<T>(value: Copy | T, locale: "de" | "en"): T extends Copy ? string : T {
  if (value && typeof value === "object" && "de" in value && "en" in value) {
    return (value as Copy)[locale] as T extends Copy ? string : T;
  }
  return value as T extends Copy ? string : T;
}
