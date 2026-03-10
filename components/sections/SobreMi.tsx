"use client";

import { BookOpen, Award, GraduationCap, Star } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-16 items-center">
          {/* Imagen — ~45% */}
          <div className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-stone-200 bg-stone-200 flex items-center justify-center">
              <span className="text-stone-500 text-sm text-center px-4">
                Foto personal / casual de la Doctora
              </span>
            </div>
          </div>

          {/* Texto — ~55% */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300 bg-white text-xs font-medium text-stone-600">
              Conozca a la Doctora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
              Dra. Verónica Lockward
            </h2>
            <p className="text-lg font-semibold text-stone-600">
              Internista · Gastroenteróloga
            </p>
            <p className="text-stone-600 leading-relaxed">
              Médica internista y gastroenteróloga con más de 20 años de
              experiencia clínica. Egresada de la PUCMM, desarrolló sus
              especialidades en el Hospital Regional Universitario José María
              Cabral y Báez y se subespecializó como fellow en Enfermedades
              Crónicas del Intestino en la Universidad de Río Piedras, Puerto
              Rico. Cuenta además con un Máster en Gestión y Dirección de
              Centros Hospitalarios de la Universidad de San Antonio, Madrid
              (2016).
            </p>
            <p className="text-stone-600 leading-relaxed">
              Ejerce en la Clínica Universitaria Unión Médica del Norte,
              Santiago, donde lidera el primer Centro de Excelencia en el
              Manejo de Enfermedades Inflamatorias del Intestino certificado
              por PANCCO en República Dominicana.
            </p>

            <ul className="space-y-4 mt-2">
              {credentials.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-stone-600" />
                  </span>
                  <div>
                    <span className="font-medium text-stone-800">{title}</span>
                    <p className="text-sm text-stone-600 mt-0.5">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
