import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Services />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
