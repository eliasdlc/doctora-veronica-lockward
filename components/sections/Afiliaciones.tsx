"use client";

import { Building2 } from "lucide-react";

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
        <section className="py-4 md:py-6 bg-white border-t border-stone-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {organizations.map((org) => (
                        <div
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
