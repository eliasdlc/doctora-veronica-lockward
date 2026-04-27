"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-brand-primary to-stone-900 border-t border-brand-primary/20 relative overflow-hidden text-white">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      {/* Ambient breathing glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{ opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[600px] h-[400px] rounded-full bg-brand-accent blur-[120px]" />
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          ¿Listo para Cuidar su Salud Digestiva?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-stone-200 mb-10 text-lg md:text-xl leading-relaxed">
          Agende su cita hoy y reciba una atención gastroenterológica profesional y personalizada.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-brand-primary font-bold hover:bg-white transition-all duration-300 shadow-soft-accent hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.span>
            Agendar por WhatsApp
          </Link>
          <Link
            href="tel:+18092268686"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-brand-accent/30 text-white hover:bg-white/10 font-bold transition-all duration-300 w-full sm:w-auto justify-center hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
          >
            Llamar Ahora
            <Phone className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
