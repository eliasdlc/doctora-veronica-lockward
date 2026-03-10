"use client";

import {
  Stethoscope,
  Camera,
  Activity,
  FileSearch,
  HeartPulse,
  Syringe,
} from "lucide-react";
import { motion } from "framer-motion";

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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="p-8 rounded-2xl border border-stone-200 bg-white shadow-sm flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand-accent/40 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 text-brand-primary">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 group-hover:text-brand-primary transition-colors duration-300">{title}</h3>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
