"use client";

import {
  Stethoscope,
  Camera,
  Activity,
  FileSearch,
  HeartPulse,
  Syringe,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta Gastroenterológica",
    description:
      "Evaluación integral de su salud digestiva con enfoque personalizado y planes de tratamiento adaptados a sus necesidades.",
  },
  {
    icon: Camera,
    title: "Endoscopia Digestiva",
    description:
      "Procedimientos de endoscopia de vías digestivas altas para diagnóstico y seguimiento con tecnología de vanguardia.",
  },
  {
    icon: Activity,
    title: "Colonoscopia",
    description:
      "Estudio del colon para detección temprana, prevención y diagnóstico de condiciones del tracto digestivo bajo.",
  },
  {
    icon: FileSearch,
    title: "Estudios Diagnósticos",
    description:
      "Amplia gama de estudios de laboratorio e imagen para un diagnóstico preciso de enfermedades digestivas.",
  },
  {
    icon: HeartPulse,
    title: "Tratamiento de Enfermedades Digestivas",
    description:
      "Manejo integral de reflujo, gastritis, síndrome de intestino irritable y otras condiciones digestivas.",
  },
  {
    icon: Syringe,
    title: "Procedimientos Terapéuticos",
    description:
      "Intervenciones endoscópicas terapéuticas para el tratamiento de diversas patologías del sistema digestivo.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Servicios
          </h2>
          <p className="mt-2 text-stone-600 max-w-2xl mx-auto">
            Atención especializada en gastroenterología para cuidar su salud digestiva.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="p-6 rounded-xl border border-stone-200 bg-white shadow-sm flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-stone-600" />
              </div>
              <h3 className="text-lg font-bold text-stone-800">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
