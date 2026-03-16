"use client";

import { ArrowRight, Calendar, Clock, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Article {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    date: string;
    readTime: string;
    image: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Artículo 1",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis.",
        category: "Salud Digestiva",
        tags: ["Digestión", "Bienestar", "Prevención"],
        date: "15 Feb 2026",
        readTime: "8 min",
        image: "/images/doctora/hero-investigacion.webp",
    },
    {
        id: 2,
        title: "Artículo 2",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis.",
        category: "Prevención",
        tags: ["Gastrointestinal", "Dieta"],
        date: "28 Ene 2026",
        readTime: "6 min",
        image: "/images/doctora/hero-congreso.webp",
    },
    {
        id: 3,
        title: "Artículo 3",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis.",
        category: "Tecnología Médica",
        tags: ["Endoscopía", "Diagnóstico"],
        date: "10 Ene 2026",
        readTime: "5 min",
        image: "/images/doctora/hero-conferencia.webp",
    },
    {
        id: 4,
        title: "Artículo 4",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis.",
        category: "Nutrición",
        tags: ["Microbioma", "Neurología"],
        date: "20 Dic 2025",
        readTime: "7 min",
        image: "/images/doctora/hero-investigacion.webp",
    },
    {
        id: 5,
        title: "Artículo 5",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ornare pulvinar. Fusce luctus euismod facilisis.",
        category: "Procedimientos",
        tags: ["Colonoscopía", "Pacientes"],
        date: "5 Dic 2025",
        readTime: "9 min",
        image: "/images/doctora/hero-congreso.webp",
    },
];

// Variantes de animación para Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
} as const;

// Tarjeta destacada: imagen como hero de fondo, contenido superpuesto en overlay
function FeaturedArticle({ article }: { article: Article }) {
    return (
        <Link
            href={`/articulos/${article.id}`}
            className="lg:col-span-2 lg:row-span-2 block group max-w-7xl"
        >
            <motion.article
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-end min-h-[420px] h-full"
            >
                {/* Imagen hero de fondo */}
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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

                    <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-3">
                        {article.excerpt}
                    </p>

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

                    {/* Meta: fecha y tiempo */}
                    <div className="flex items-center gap-3 mt-2 text-white/70 text-xs">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={13} />
                            {article.date}
                        </span>
                        <span className="text-white/40">·</span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={13} />
                            {article.readTime} de lectura
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

// Tarjeta secundaria: imagen en la mitad superior, contenido en la mitad inferior
function ArticleCard({ article }: { article: Article }) {
    return (
        <Link href={`/articulos/${article.id}`} className="block group h-full">
            <motion.article
                variants={itemVariants}
                className="flex flex-col rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group-hover:-translate-y-1 group-hover:border-brand-accent/40 transition-all duration-300 h-full"
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
                        <p className="text-stone-500 text-sm line-clamp-2">
                            {article.excerpt}
                        </p>
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

                        {/* Meta + CTA */}
                        <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {article.date}
                                </span>
                                <span>·</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {article.readTime}
                                </span>
                            </div>
                            <span className="flex items-center gap-0.5 text-brand-primary font-bold">
                                Leer
                                <ArrowRight
                                    size={13}
                                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

export function Articulos() {
    const [featured, ...rest] = articles;

    // Duplicamos las cards para crear el efecto de loop infinito.
    const marqueeCards = [...rest, ...rest];

    return (
        <section
            id="articulos"
            className="py-8 md:py-12 bg-stone-50/50 border-t border-stone-200 overflow-hidden"
        >
            <div className="mx-auto px-6 lg:px-8">
                {/* Cabecera */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-xs font-semibold text-brand-primary tracking-wider uppercase mb-4">
                        <BookOpen size={14} />
                        Artículos Médicos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                        Publicaciones Recientes
                    </h2>
                    <p className="mt-3 text-stone-600 max-w-2xl mx-auto text-lg">
                        Mantente informado con guías sobre salud digestiva, prevención y bienestar,
                        escritas directamente por la Dra. Verónica Lockward.
                    </p>
                </motion.header>

                {/* Contenedor principal con Stagger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6 w-full"
                >
                    <div className="w-full flex items-center justify-center">
                        <FeaturedArticle article={featured} />
                    </div>

                    {/* Marquee de tarjetas secundarias */}
                    <div className="overflow-hidden -mx-4">
                        <div className="flex gap-6 w-max p-4 animate-marquee hover:paused">
                            {marqueeCards.map((article, i) => (
                                <div key={`${article.id}-${i}`} className="w-[300px] shrink-0">
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Botón "Ver todos" */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/articulos"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
                    >
                        Explorar todos los artículos
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}