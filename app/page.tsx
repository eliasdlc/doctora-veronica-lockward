import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Servicios } from "@/components/sections/Servicios";
import { SobreMi } from "@/components/sections/SobreMi";
import { Articulos } from "@/components/sections/Articulos";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonios } from "@/components/sections/Testimonios";
import { CTASection } from "@/components/sections/CTASection";
import { Contacto } from "@/components/sections/Contacto";
import { Mapa } from "@/components/sections/Mapa";
import { Afiliaciones } from "@/components/sections/Afiliaciones";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Servicios />
        <SobreMi />
        <Articulos />
        <FAQ />
        <Testimonios />
        <CTASection />
        <Contacto />
        <Afiliaciones />
        <Mapa />
        <Footer />
      </main>
    </>
  );
}

