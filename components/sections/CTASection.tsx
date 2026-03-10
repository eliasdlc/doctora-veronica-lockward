"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-brand-primary to-stone-900 border-t border-brand-primary/20 relative overflow-hidden text-white">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          ¿Listo para Cuidar su Salud Digestiva?
        </h2>
        <p className="text-stone-200 mb-10 text-lg md:text-xl leading-relaxed">
          Agende su cita hoy y reciba una atención gastroenterológica profesional y personalizada.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="https://wa.me/18098447072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-brand-primary font-bold hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-brand-accent/20 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar por WhatsApp
          </Link>
          <Link
            href="tel:+18092268686"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-brand-accent/30 text-white hover:bg-white/10 font-bold transition-all duration-300 w-full sm:w-auto justify-center hover:-translate-y-1"
          >
            Llamar Ahora
            <Phone className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
