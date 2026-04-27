"use client";

import { Calendar, BookOpen, Tag } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";
import articleImage25742 from "@/assets/images/WhatsApp Image 2026-04-26 at 2.57.42 PM.jpeg";
import articleImage25416 from "@/assets/images/WhatsApp Image 2026-04-26 at 2.54.16 PM.jpeg";
import articleImage30025 from "@/assets/images/WhatsApp Image 2026-04-26 at 3.00.25 PM.jpeg";
import articleImage30348 from "@/assets/images/WhatsApp Image 2026-04-26 at 3.03.48 PM.jpeg";
import articleImage30445 from "@/assets/images/WhatsApp Image 2026-04-26 at 3.04.45 PM.jpeg";

interface Article {
    id: number;
    title: string;
    category: string;
    tags: string[];
    date: string;
    image: string | StaticImageData;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Panel de expertos en enfermedades inflamatorias",
        category: "Enfermedades Inflamatorias Intestinales",
        tags: ["Enfermedades Inflamatorias Intestinales", "Manejo"],
        date: "15 Feb 2026",
        image: articleImage30348,
    },
    {
        id: 2,
        title: "Certificacion de Centro de Excelencia de la enfermedad inflamatorias cronicas del intestino",
        category: "Enfermedades Inflamatorias Intestinales",
        tags: ["Enfermedades Inflamatorias Intestinales", "Prevención"],
        date: "26 Abr 2026",
        image: articleImage30445,
    },
    {
        id: 3,
        title: "Cáncer colorrectal: de la detección temprana a la prevención efectiva",
        category: "Prevención",
        tags: ["Cáncer Colorrectal", "Prevención"],
        date: "26 Abr 2026",
        image: articleImage30025,
    },
    {
        id: 4,
        title: "Actividad académica sobre enfermedades hepáticas emergentes.",
        category: "Enfermedades Hepáticas",
        tags: ["Enfermedades Hepáticas", "Nutrición"],
        date: "20 Dic 2025",
        image: articleImage25742,
    },
    {
        id: 5,
        title: "Participación en el congreso panamericano de CRHON y colitis.",
        category: "Congresos",
        tags: ["CRHON", "Colitis"],
        date: "5 Dic 2025",
        image: articleImage25416,
    },
];


// Tarjeta destacada: imagen como hero de fondo, contenido superpuesto en overlay
function FeaturedArticle({ article }: { article: Article }) {
    return (
        <motion.article
            variants={fadeInUp}
            className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl shadow-soft-lg flex flex-col justify-end min-h-[420px] h-full max-w-7xl"
        >
            {/* Ken Burns — slow ambient zoom on featured image */}
            <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
            />

            {/* Overlay degradado de abajo hacia arriba para legibilidad */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10" />

            {/* Contenido */}
            <div className="relative z-20 p-7 flex flex-col gap-3">
                {/* Categoría */}
                <Badge className="w-fit gap-1.5 bg-brand-accent text-brand-primary text-xs font-semibold px-3 py-1 border-0">
                    <BookOpen size={12} />
                    {article.category}
                </Badge>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {article.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {article.tags.map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-white/70 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full"
                        >
                            <Tag size={10} />
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs">
                    <Calendar size={13} />
                    {article.date}
                </div>
            </div>
        </motion.article>
    );
}

// Tarjeta secundaria: imagen en la mitad superior, contenido en la mitad inferior
function ArticleCard({ article }: { article: Article }) {
    return (
        <motion.article
            variants={fadeInUp}
            className="group flex flex-col rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden group-hover:shadow-soft group-hover:-translate-y-1 group-hover:border-brand-accent/40 transition-all duration-300 h-full"
        >
            {/* Imagen header — altura fija */}
            <div className="relative h-44 shrink-0 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                />
                {/* Badge de categoría superpuesta en la esquina */}
                <div className="absolute bottom-3 left-3">
                    <Badge className="gap-1 bg-brand-accent text-brand-primary text-xs font-semibold px-2.5 py-1 border-0 shadow-sm">
                        {article.category}
                    </Badge>
                </div>
            </div>

            {/* Contenido textual */}
            <div className="flex flex-col flex-1 justify-between p-5 gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-stone-800 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 text-xs text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full"
                            >
                                <Tag size={9} />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center text-xs text-stone-400 font-medium">
                        <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export function Articulos() {
    const [featured, ...rest] = articles;

    // Duplicamos las cards para crear el efecto de loop infinito.
    const marqueeCards = [...rest, ...rest];

    return (
        <section
            id="articulos"
            className="py-16 md:py-24 bg-stone-50/50 border-t border-stone-200 overflow-hidden"
        >
            <div className="mx-auto px-6 lg:px-8">
                {/* Cabecera */}
                <motion.header
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-xs font-semibold text-brand-primary tracking-wider uppercase mb-4">
                        <BookOpen size={14} />
                        Trayectoria Profesional
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                        Congresos y Actividades Destacadas
                    </h2>
                    <p className="mt-3 text-stone-600 max-w-2xl mx-auto text-lg">
                        Una muestra de eventos, ponencias y espacios académicos en los que la
                        Dra. Verónica Lockward ha participado.
                    </p>
                </motion.header>

                {/* Contenedor principal con Stagger */}
                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex flex-col gap-6 w-full"
                >
                    <div className="w-full flex items-center justify-center">
                        <FeaturedArticle article={featured} />
                    </div>

                    {/* Marquee de tarjetas secundarias */}
                    <div className="overflow-hidden -mx-4">
                        <div className="flex gap-6 w-max p-4 animate-marquee marquee-track">
                            {marqueeCards.map((article, i) => (
                                <div key={`${article.id}-${i}`} className="w-[300px] shrink-0">
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}