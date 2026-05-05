"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Award, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

const ORCID_ID = "0009-0002-4107-1756";

export function Certificaciones() {
    const [certOpen, setCertOpen] = useState(false);

    return (
        <section id="certificaciones" className="py-16 md:py-24 bg-white border-t border-stone-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-12"
                >
                    <motion.p variants={fadeInUp} className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
                        Reconocimientos
                    </motion.p>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-brand-primary">
                        Certificaciones & Reconocimientos
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 text-stone-500 max-w-xl mx-auto">
                        Respaldo internacional a la calidad y excelencia del centro de atención integral en Enfermedad Inflamatoria Intestinal.
                    </motion.p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Card 1 — Centro EII */}
                    <motion.div
                        variants={fadeInUp}
                        className="border border-stone-200 rounded-2xl p-6 shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] hover:shadow-[0_20px_50px_rgb(8_62_36_/_0.10)] transition-shadow duration-300 flex flex-col items-center text-center gap-4"
                    >
                        <div className="w-36 h-36 rounded-xl overflow-hidden bg-stone-50 border border-stone-100 flex items-center justify-center p-3">
                            <Image
                                src="/logos/centro-eii.jpg"
                                alt="Centro de Enfermedad Inflamatoria Intestinal"
                                width={128}
                                height={128}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-1.5 mb-1.5">
                                <Award size={14} className="text-brand-accent" />
                                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">Centro de Excelencia</span>
                            </div>
                            <h3 className="font-bold text-brand-primary text-base leading-snug">
                                Centro de Enfermedad Inflamatoria Intestinal
                            </h3>
                            <p className="text-stone-500 text-sm mt-2 leading-relaxed">
                                Primer Centro de Excelencia en EII reconocido en la República Dominicana — Clínica Universitaria Unión Médica del Norte.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 — Certificación PANCCO / Bureau Veritas */}
                    <motion.div
                        variants={fadeInUp}
                        className="border border-stone-200 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] hover:shadow-[0_20px_50px_rgb(8_62_36_/_0.10)] transition-shadow duration-300 cursor-pointer group"
                        onClick={() => setCertOpen(true)}
                    >
                        <div className="relative h-52 bg-stone-100">
                            <Image
                                src="/certificados/bureau-veritas-pancco.jpg"
                                alt="Certificación PANCCO Bureau Veritas"
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <span className="absolute top-3 right-3 bg-brand-accent text-brand-primary text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                NIVEL EXCELENTE
                            </span>
                        </div>
                        <div className="p-5 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-1.5">
                                <BadgeCheck size={14} className="text-brand-accent" />
                                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">Bureau Veritas</span>
                            </div>
                            <h3 className="font-bold text-brand-primary text-base leading-snug">Certificación PANCCO</h3>
                            <p className="text-stone-400 text-xs mt-1.5">Toca para ver el certificado completo</p>
                        </div>
                    </motion.div>

                    {/* Card 3 — ORCID */}
                    <motion.div
                        variants={fadeInUp}
                        className="border border-stone-200 rounded-2xl p-6 shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] hover:shadow-[0_20px_50px_rgb(8_62_36_/_0.10)] transition-shadow duration-300 flex flex-col items-center text-center gap-4"
                    >
                        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "#A6CE3920" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-14 h-14" aria-hidden="true">
                                <circle cx="128" cy="128" r="128" fill="#A6CE39" />
                                <path
                                    d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-1.5 mb-1.5">
                                <ExternalLink size={14} style={{ color: "#A6CE39" }} />
                                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#A6CE39" }}>ORCID</span>
                            </div>
                            <h3 className="font-bold text-brand-primary text-base leading-snug">Perfil de Investigadora</h3>
                            <p className="text-stone-500 text-sm mt-2 leading-relaxed mb-4">
                                Publicaciones e investigaciones verificadas internacionalmente.
                            </p>
                            <a
                                href={`https://orcid.org/${ORCID_ID}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-85 active:scale-95"
                                style={{ backgroundColor: "#A6CE39", color: "#1a1a1a" }}
                            >
                                <ExternalLink size={13} />
                                Ver perfil ORCID
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Lightbox */}
            <Dialog open={certOpen} onOpenChange={setCertOpen}>
                <DialogContent className="max-w-xl p-2 bg-white">
                    <DialogTitle className="sr-only">Certificación PANCCO Bureau Veritas — Nivel Excelente</DialogTitle>
                    <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                        <Image
                            src="/certificados/bureau-veritas-pancco.jpg"
                            alt="Certificación PANCCO Bureau Veritas — Nivel Excelente"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
