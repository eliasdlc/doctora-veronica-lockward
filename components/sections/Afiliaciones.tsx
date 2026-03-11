"use client";

import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Organization {
    name: string;
    shortName: string;
    logo?: string;
}

const organizations: Organization[] = [
    { name: "Asociación Médica de Santiago", shortName: "AMS" },
    { name: "Colegio Médico Dominicano de Santiago", shortName: "CMD", logo: "/logos/CMD.png" },
    { name: "Sociedad de Gastroenterología de Santiago", shortName: "SGS", logo: "/logos/SGS.png" },
    { name: "Clínica Universitaria Unión Médica del Norte", shortName: "UMN", logo: "/logos/UMN.jpg" },
    { name: "European Crohn's and Colitis Organisation", shortName: "ECCO", logo: "/logos/ECCO.png" },
];

export function Afiliaciones() {
    return (
        <section id="afiliaciones" className="py-5 md:py-8 bg-white border-t border-stone-200 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
                >
                    {organizations.map((org) => (
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                            key={org.shortName}
                            className="group flex flex-col items-center gap-2"
                            title={org.name}
                        >
                            {/* Organization Logo */}
                            {org.logo ? (
                                <div className="w-30 h-30 rounded-xl bg-white border border-stone-200 overflow-hidden flex items-center justify-center p-2 group-hover:border-brand-accent/50 group-hover:shadow-soft transition-all duration-300">
                                    <Image src={org.logo} alt={org.name} width={80} height={80} className="w-full h-full object-contain transition-all duration-500" />
                                </div>
                            ) : (
                                <div className="w-30 h-30 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center p-2 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5 transition-colors duration-300">
                                    <Building2 className="w-7 h-7 text-stone-400 group-hover:text-brand-primary transition-colors" />
                                </div>
                            )}
                            <span className="text-xs font-semibold text-stone-500 group-hover:text-stone-700 transition-colors">
                                {org.shortName}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
