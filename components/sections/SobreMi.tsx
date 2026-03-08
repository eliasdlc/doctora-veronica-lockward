"use client";

import { BookOpen, Award } from "lucide-react";

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
              Gastroenteróloga
            </p>
            <p className="text-stone-600 leading-relaxed">
              Médica especialista en Medicina Interna y Gastroenterología con amplia experiencia en el diagnóstico y tratamiento de enfermedades del sistema digestivo. Comprometida con la salud y bienestar de sus pacientes a través de una atención personalizada y basada en evidencia.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-stone-600" />
                </span>
                <div>
                  <span className="font-medium text-stone-800">Publicaciones y hospitales afiliados</span>
                  <p className="text-sm text-stone-600">Resumen o enlaces según contenido final.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-stone-600" />
                </span>
                <div>
                  <span className="font-medium text-stone-800">Certificaciones</span>
                  <p className="text-sm text-stone-600">Especialidad y certificaciones profesionales.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
