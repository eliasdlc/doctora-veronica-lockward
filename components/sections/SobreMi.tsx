"use client";

import Image from "next/image";
import { BookOpen, Award, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, stagger, viewportOnce } from "@/lib/motion";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formación Especializada",
    description:
      "Post-grado en Medicina Interna y Gastroenterología — PUCMM / Hospital Regional Universitario José María Cabral y Báez. Fellow en Enfermedades Crónicas del Intestino, Universidad de Río Piedras, Puerto Rico.",
  },
  {
    icon: BookOpen,
    title: "30+ Publicaciones y Presentaciones",
    description:
      "Autora de trabajos de investigación en gastroenterología presentados en congresos nacionales e internacionales, incluido el Congreso Panamericano y el Congreso Centroamericano y del Caribe.",
  },
  {
    icon: Award,
    title: "Certificación ASGE STAR en EMR",
    description:
      "Certificada por la American Society for Gastrointestinal Endoscopy (ASGE) en Resección Endoscópica de la Mucosa (EMR) del tracto gastrointestinal bajo.",
  },
  {
    icon: Star,
    title: "1er Centro de Excelencia en EII en RD",
    description:
      "Lidera el primer Centro de Excelencia en el Manejo de las Enfermedades Inflamatorias del Intestino (EII) en República Dominicana, certificado por PANCCO en 2025.",
  },
];

export function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="py-16 md:py-24 bg-amber-50/60 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-16 items-center">
          {/* Imagen — ~45% */}
          <motion.div
            className="relative"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Portrait reveal mask */}
            <motion.div
              className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-stone-200 shadow-soft relative"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <Image
                src="/images/doctora/sobre-mi.webp"
                alt="Dra. Verónica Lockward en el podio de la Clínica Unión Médica del Norte"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* Texto — ~55% */}
          <motion.div
            className="flex flex-col gap-6"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent bg-brand-accent/10 text-xs font-semibold tracking-wide uppercase text-brand-primary"
            >
              Conozca a la Doctora
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800"
            >
              Dra. Verónica Lockward
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl font-semibold text-brand-primary"
            >
              Internista · Gastroenteróloga
            </motion.p>
            <motion.p variants={fadeInUp} className="text-stone-600 leading-relaxed">
              Médica internista y gastroenteróloga con más de 30 años de
              experiencia clínica. Egresada de la PUCMM, desarrolló sus
              especialidades en el Hospital Regional Universitario José María
              Cabral y Báez y se subespecializó como fellow en Enfermedades
              Crónicas del Intestino en la Universidad de Río Piedras, Puerto
              Rico. Cuenta además con un Máster en Gestión y Dirección de
              Centros Hospitalarios de la Universidad de San Antonio, Madrid
              (2016).
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-stone-600 leading-relaxed text-base md:text-lg"
            >
              Ejerce en la Clínica Universitaria Unión Médica del Norte,
              Santiago, donde lidera el primer Centro de Excelencia en el
              Manejo de Enfermedades Inflamatorias del Intestino certificado
              por PANCCO en República Dominicana.
            </motion.p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {credentials.map(({ icon: Icon, title, description }) => (
                <motion.li
                  variants={fadeInUp}
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-stone-100 shadow-sm hover:shadow-soft hover:border-brand-accent/50 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 text-brand-primary">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="font-bold text-stone-800 group-hover:text-brand-primary transition-colors duration-300 block">{title}</span>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">{description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
