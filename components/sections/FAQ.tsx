"use client";

import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "¿Cuándo debo consultar a un gastroenterólogo?",
        answer:
            "Debe consultar si presenta síntomas persistentes como dolor abdominal, acidez frecuente, cambios en el hábito intestinal, sangrado digestivo, pérdida de peso inexplicable o dificultad para tragar. También se recomienda una consulta preventiva a partir de los 45 años para evaluación del colon.",
    },
    {
        question: "¿Cómo me preparo para una endoscopia digestiva?",
        answer:
            "Generalmente se requiere un ayuno de 8 a 12 horas antes del procedimiento. Debe informar sobre los medicamentos que toma, especialmente anticoagulantes. En la consulta previa se le darán instrucciones específicas según su caso y el tipo de estudio a realizar.",
    },
    {
        question: "¿Es dolorosa la colonoscopia?",
        answer:
            "La colonoscopia se realiza bajo sedación, por lo que no sentirá dolor durante el procedimiento. Puede experimentar una leve distensión abdominal después, que se resuelve rápidamente. El equipo médico estará atento a su comodidad en todo momento.",
    },
    {
        question: "¿Cuánto tiempo dura una consulta gastroenterológica?",
        answer:
            "La primera consulta suele durar entre 30 y 45 minutos, ya que incluye una evaluación completa de su historial médico, síntomas y examen físico. Las consultas de seguimiento pueden ser más breves, de 15 a 20 minutos, dependiendo de su caso.",
    },
    {
        question: "¿Qué enfermedades trata la gastroenterología?",
        answer:
            "La gastroenterología abarca enfermedades del esófago, estómago, intestino delgado, colon, hígado, vesícula biliar y páncreas. Esto incluye reflujo, gastritis, úlceras, síndrome de intestino irritable, enfermedad inflamatoria intestinal, hepatitis, cálculos biliares y más.",
    },
    {
        question: "¿Aceptan seguros médicos?",
        answer:
            "Sí, trabajamos con los principales seguros médicos del país. Le recomendamos contactarnos con anticipación para confirmar la cobertura de su plan específico y los pasos necesarios para su autorización.",
    },
];

export function FAQ() {
    return (
        <section
            id="preguntas-frecuentes"
            className="py-16 md:py-24 bg-stone-50 border-t border-stone-200"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-16 items-start">
                    {/* Left column: header + CTA */}
                    <div className="flex flex-col gap-6">
                        <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-xs font-semibold text-brand-primary tracking-wider uppercase">
                            <HelpCircle size={14} />
                            FAQ
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                            Preguntas Frecuentes
                        </h2>

                        <div className="bg-gray-200 w-full h-80 rounded-2xl">

                        </div>

                        <p className="text-stone-600 leading-relaxed">
                            Respuestas a las consultas más comunes de nuestros pacientes.
                            Si tiene alguna otra pregunta, no dude en contactarnos.
                        </p>

                        <Link
                            href="#contacto"
                            className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 shadow-md shadow-brand-primary/20 transition-colors mt-2"
                        >
                            <MessageCircle size={16} />
                            Contáctenos
                        </Link>
                    </div>

                    {/* Right column: accordion */}
                    <div className="self-center rounded-2xl border border-stone-200 bg-white shadow-sm p-2">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                    className="border-b border-stone-100 last:border-b-0 px-4"
                                >
                                    <AccordionTrigger className="text-base font-semibold text-stone-800 hover:text-brand-primary hover:no-underline py-5 cursor-pointer">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-stone-600 leading-relaxed pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
