"use client";

import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface Organization {
    name: string;
    shortName: string;
}

// Organizations — replace shortName with <Image /> when logos are available
const organizations: Organization[] = [
    { name: "Asociación Médica de Santiago", shortName: "AMS" },
    { name: "Colegio Médico Dominicano de Santiago", shortName: "CMD" },
    { name: "Sociedad de Gastroenterología de Santiago", shortName: "SGS" },
    { name: "Clínica Universitaria Unión Médica del Norte", shortName: "UMN" },
    { name: "European Crohn's and Colitis Organisation", shortName: "ECCO" },
];

export function Afiliaciones() {
    return (
        <section className="py-10 md:py-16 bg-white border-t border-stone-200 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
                >
                    {organizations.map((org) => (
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                            key={org.shortName}
                            className="group flex flex-col items-center gap-2"
                            title={org.name}
                        >
                            {/* Logo placeholder — swap with <Image /> when assets are ready */}
                            <div className="w-20 h-20 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5 transition-colors">
                                <Building2 className="w-7 h-7 text-stone-400 group-hover:text-brand-primary transition-colors" />
                            </div>
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
