"use client";

import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Article {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Articulo 0",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula tellus, interdum et sollicitudin nec, dapibus.",
        category: "Enfermedades Digestivas",
        date: "15 Feb 2026",
        readTime: "8 min",
    },
    {
        id: 2,
        title: "Articulo 1",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula tellus, interdum et sollicitudin nec, dapibus.",
        category: "Prevención",
        date: "28 Ene 2026",
        readTime: "6 min",
    },
    {
        id: 3,
        title: "Articulo 2",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit magna, dictum aliquet lacinia eget, dignissim at urna. Praesent nec. ",
        category: "Salud Digestiva",
        date: "10 Ene 2026",
        readTime: "5 min",
    },
    {
        id: 4,
        title: "Articulo 3",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit magna, dictum aliquet lacinia eget, dignissim at urna. Praesent nec. ",
        category: "Nutrición",
        date: "20 Dic 2025",
        readTime: "7 min",
    },
    {
        id: 5,
        title: "Articulo 4",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit magna, dictum aliquet lacinia eget, dignissim at urna. Praesent nec. ",
        category: "Nutrición",
        date: "20 Dic 2025",
        readTime: "7 min",
    }
];

// Variantes de animación para Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Cada tarjeta aparecerá 0.15s después de la anterior
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
} as const;

// Highlight card for the most recent article
function FeaturedArticle({ article }: { article: Article }) {
    return (
        <Link href={`/articulos/${article.title.toLowerCase().replace(/ /g, "-")}`} className="lg:col-span-2 lg:row-span-2 block group">
            <motion.article
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-brand-accent/30 bg-linear-to-br from-brand-primary to-brand-primary/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-end min-h-[400px] h-full"
            >
                {/* Fondo con leve animación en hover para dar sensación de vida sin marear */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-primary via-brand-primary/80 to-transparent z-0 transition-transform duration-700 group-hover:scale-105" />

                <div className="relative z-10 p-8 flex flex-col gap-4">
                    <Badge className="w-fit gap-1.5 bg-brand-accent text-brand-primary text-xs font-semibold px-3 py-1 border-0 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
                        <BookOpen size={12} />
                        {article.category}
                    </Badge>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {article.title}
                    </h3>
                    <p className="text-brand-light/90 text-sm md:text-base line-clamp-2 md:line-clamp-3">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-brand-light/80 text-xs md:text-sm">
                        <span className="flex items-center gap-1.5 backdrop-blur-sm bg-black/10 px-3 py-1.5 rounded-full">
                            <Calendar size={14} />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1.5 backdrop-blur-sm bg-black/10 px-3 py-1.5 rounded-full">
                            <Clock size={14} />
                            {article.readTime}
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

// Smaller article cards
function ArticleCard({ article }: { article: Article }) {
    return (
        <Link href={`/articulos/${article.title.toLowerCase().replace(/ /g, "-")}`} className="block group h-full">
            <motion.article
                variants={itemVariants}
                key={article.id}
                className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 shadow-sm group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:-translate-y-1 group-hover:border-brand-accent/40 transition-all duration-300 h-full min-h-[280px]"
            >
                <div className="flex flex-col gap-3">
                    <Badge
                        variant="outline"
                        className="w-fit gap-1.5 border-stone-300 text-stone-600 text-xs font-medium px-2.5 py-1"
                    >
                        {article.category}
                    </Badge>
                    <h3 className="text-lg md:text-xl font-bold text-stone-800 leading-snug group-hover:text-brand-primary transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-stone-600 text-sm line-clamp-2 mt-1">
                        {article.excerpt}
                    </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <div className="flex items-center gap-3 text-stone-500 text-xs font-medium">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {article.readTime}
                        </span>
                    </div>

                    <div className="flex items-center text-sm font-bold text-brand-primary mt-2">
                        Leer artículo
                        <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

export function Articulos() {
    const [featured, ...rest] = articles;

    // Duplicamos las cards para crear el efecto de loop infinito.
    // La animación desplaza el contenedor exactamente un 50% (= la primera copia),
    // y al llegar al final salta al inicio de forma imperceptible.
    const marqueeCards = [...rest, ...rest];

    return (
        <section
            id="articulos"
            className="py-8 md:py-12 bg-stone-50/50 border-t border-stone-200 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Cabecera con animación independiente */}
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
                    <FeaturedArticle article={featured} />

                    {/* Marquee: overflow-hidden en el wrapper, pero padding interno
                         para que las sombras de las cards no se corten */}
                    <div className="overflow-hidden -mx-4">
                        <div
                            className="flex gap-6 w-max px-4 py-4 animate-marquee hover:paused"
                        >
                            {marqueeCards.map((article, i) => (
                                <div key={`${article.id}-${i}`} className="w-[320px] shrink-0">
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
                    <Link // Changed to Link
                        href="/articulos" // Added href
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5" // Updated shadow
                    >
                        Explorar todos los artículos
                        <ArrowRight size={18} />
                    </Link> {/* Changed to Link */}
                </motion.div>
            </div>
        </section>
    );
}