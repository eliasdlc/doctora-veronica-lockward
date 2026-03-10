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
    icon: HeartPulse,
    title: "Enfermedad Inflamatoria Intestinal (EII)",
    description:
      "Diagnóstico y manejo de la enfermedad de Crohn y la colitis ulcerosa. Centro de Excelencia en EII certificado por PANCCO, el primero en República Dominicana.",
  },
  {
    icon: Camera,
    title: "Endoscopia Digestiva",
    description:
      "Endoscopia de vías altas y procedimientos de Resección Endoscópica de la Mucosa (EMR). Certificada ASGE STAR para EMR del tracto gastrointestinal bajo.",
  },
  {
    icon: Activity,
    title: "Colonoscopia y Cáncer Colorrectal",
    description:
      "Detección temprana y prevención del cáncer colorrectal mediante colonoscopia. Especial atención en pacientes jóvenes de 15 a 45 años sin antecedentes conocidos.",
  },
  {
    icon: FileSearch,
    title: "Enfermedad Hepática Grasa (MASLD)",
    description:
      "Evaluación, diagnóstico y estratificación de riesgo de la enfermedad hepática esteatósica asociada a disfunción metabólica (MASLD/MAFLD).",
  },
  {
    icon: Stethoscope,
    title: "Consulta Gastroenterológica General",
    description:
      "Evaluación integral del sistema digestivo: reflujo, gastritis, síndrome de intestino irritable, patología del tracto GI superior e inferior.",
  },
  {
    icon: Syringe,
    title: "Pancreatitis",
    description:
      "Manejo de pancreatitis aguda, pancreatitis autoinmune y su overlap con hepatitis autoinmune, con enfoque en las guías de manejo actualizadas.",
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
