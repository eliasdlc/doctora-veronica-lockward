"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-stone-800 text-stone-100 border-t border-stone-700">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para Cuidar su Salud Digestiva?
        </h2>
        <p className="text-stone-300 mb-8">
          Agende su cita hoy y reciba una atención gastroenterológica profesional y personalizada.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-stone-600 hover:bg-stone-500 text-white font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar por WhatsApp
          </Link>
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-500 text-stone-100 hover:bg-stone-700 font-semibold transition-colors"
          >
            Llamar Ahora
            <Phone className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
