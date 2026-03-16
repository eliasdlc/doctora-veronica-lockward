"use client";

import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis. Ut scelerisque, justo eu fringilla fringilla, magna nunc mattis nunc, tempus posuere augue turpis et mi. Praesent congue dolor elit. Suspendisse ornare dapibus vestibulum.",
    },
    {
        question: "¿Cómo me preparo para una endoscopia digestiva?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis. Ut scelerisque, justo eu fringilla fringilla, magna nunc mattis nunc, tempus posuere augue turpis et mi. Praesent congue dolor elit. Suspendisse ornare dapibus vestibulum.",
    },
    {
        question: "¿Cuánto tiempo dura una consulta gastroenterológica?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis. Ut scelerisque, justo eu fringilla fringilla, magna nunc mattis nunc, tempus posuere augue turpis et mi. Praesent congue dolor elit. Suspendisse ornare dapibus vestibulum.",
    },
    {
        question: "¿Qué enfermedades trata la gastroenterología?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis. Ut scelerisque, justo eu fringilla fringilla, magna nunc mattis nunc, tempus posuere augue turpis et mi. Praesent congue dolor elit. Suspendisse ornare dapibus vestibulum.",
    },
    {
        question: "¿Aceptan seguros médicos?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis. Ut scelerisque, justo eu fringilla fringilla, magna nunc mattis nunc, tempus posuere augue turpis et mi. Praesent congue dolor elit. Suspendisse ornare dapibus vestibulum.",
    },
];

export function FAQ() {
    return (
        <section
            id="preguntas-frecuentes"
            className="py-16 md:py-24 bg-stone-50 border-t border-stone-200 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-16 items-start">
                    {/* Left column: header + CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-6 lg:sticky lg:top-28"
                    >
                        <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-xs font-semibold text-brand-primary tracking-wider uppercase">
                            <HelpCircle size={14} />
                            FAQ
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                            Preguntas Frecuentes
                        </h2>

                        <p className="text-stone-600 leading-relaxed text-lg">
                            Respuestas a las consultas más comunes de nuestros pacientes.
                            Si tiene alguna otra pregunta, no dude en contactarnos.
                        </p>

                        <div className="mt-4 flex flex-col gap-4 p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
                            <h3 className="font-semibold text-brand-primary flex items-center gap-2">
                                <MessageCircle size={18} />
                                ¿Sigue con dudas?
                            </h3>
                            <p className="text-sm text-stone-600">
                                Nuestro equipo está disponible para responder cualquier inquietud sobre sus síntomas o procedimientos.
                            </p>
                            <Link
                                href="#contacto"
                                className="inline-flex w-fit items-center gap-2 px-6 py-2.5 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary/90 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all hover:-translate-y-0.5"
                            >
                                Contáctenos
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right column: accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="self-center rounded-2xl border border-stone-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 lg:p-6"
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
