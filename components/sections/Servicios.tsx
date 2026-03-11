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
    <section id="servicios" className="py-16 md:py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Columna Izquierda - Sticky */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 flex flex-col gap-6 text-left">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent bg-brand-accent/10 text-xs font-semibold tracking-wide uppercase text-brand-primary"
              >
                Especialidades
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800"
              >
                Servicios
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-stone-600 leading-relaxed text-base md:text-lg"
              >
                Atención especializada en gastroenterología para cuidar su salud digestiva. Opciones de tratamiento de última generación para problemas digestivos agudos y crónicos.
              </motion.p>
            </div>
          </div>

          {/* Columna Derecha - Tarjetas de servicio */}
          <div className="lg:w-2/3">

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
        </div>
      </div>
    </section>
  );
}
