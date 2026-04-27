"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Phone, ShieldCheck, Award, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { fadeInUp, stagger } from "@/lib/motion";
import heroImage25519 from "@/assets/images/WhatsApp Image 2026-04-26 at 2.55.19 PM.jpeg";
import heroImage33054 from "@/assets/images/WhatsApp Image 2026-04-26 at 3.30.54 PM.jpeg";

interface Slide {
    id: number;
    src: string | StaticImageData;
    alt: string;
}

const slides: Slide[] = [
    {
        id: 1,
        src: "/images/doctora/hero-conferencia.webp",
        alt: "Dra. Verónica Lockward presentando en conferencia médica",
    },
    {
        id: 2,
        src: "/images/doctora/hero-congreso.webp",
        alt: "Dra. Verónica Lockward en el XXXIII Congreso Dominicano de Gastroenterología",
    },
    {
        id: 3,
        src: heroImage25519,
        alt: "Dra. Verónica Lockward presentando investigaciones en congreso médico",
    },
    {
        id: 4,
        src: heroImage33054,
        alt: "Dra. Verónica Lockward en el congreso panamericano de CRHON y colitis",
    },
];

const stats = [
    { icon: Award, value: "+30", label: "años de experiencia" },
    { icon: Heart, value: "+1,000", label: "pacientes atendidos" },
    { icon: ShieldCheck, value: "100%", label: "compromiso con tu salud" },
];


export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const bgRotate = useTransform(scrollYProgress, [0, 1], [3, 15]);

    // Magnetic CTA
    const btnX = useMotionValue(0);
    const btnY = useMotionValue(0);
    const springX = useSpring(btnX, { stiffness: 300, damping: 20 });
    const springY = useSpring(btnY, { stiffness: 300, damping: 20 });

    function handleBtnMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        btnX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        btnY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    }

    function handleBtnMouseLeave() {
        btnX.set(0);
        btnY.set(0);
    }

    return (
        <section
            ref={containerRef}
            id="inicio"
            className="relative overflow-hidden bg-linear-to-br from-white via-brand-accent/5 to-brand-accent/10"
        >
            {/* Ambient breathing radial glow */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-end justify-end"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[500px] h-[500px] rounded-full bg-brand-accent/20 blur-[100px] translate-x-1/4 translate-y-1/4" />
            </motion.div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-8 md:pb-24 md:pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Columna izquierda: texto + CTAs ── */}
                    <motion.div
                        className="flex flex-col gap-8"
                        style={{ y: textY, opacity: textOpacity }}
                        initial="hidden"
                        animate="visible"
                        variants={stagger(0.15)}
                    >
                        <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
                            <Badge
                                variant="outline"
                                className="w-fit gap-2 border-brand-accent bg-brand-accent/10 text-brand-primary px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
                            >
                                <ShieldCheck size={14} />
                                Gastroenterología Especializada
                            </Badge>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] w-full">
                                Gastroenterologia y Endoscopia Digestiva {" "}
                                <br />
                                <span className="text-brand-primary text-xl font-normal leading-tight mt-2 block w-fit max-w-md">
                                    Atención especializada en enfermedades inflamatorias cronicas del intestino.</span>
                            </h1>

                            <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-lg">
                                Soy la Dra. Verónica Lockward, ...
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
                            {/* Magnetic wrapper on primary CTA */}
                            <motion.div
                                onMouseMove={handleBtnMouseMove}
                                onMouseLeave={handleBtnMouseLeave}
                                style={{ x: springX, y: springY }}
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full bg-brand-primary text-brand-light hover:bg-brand-primary/90 px-8 shadow-soft hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-transform"
                                >
                                    <Link href="#contacto">
                                        <Phone size={16} />
                                        Agendar Consulta
                                    </Link>
                                </Button>
                            </motion.div>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full border-brand-primary text-brand-primary hover:bg-brand-primary/5 px-8 hover:-translate-y-1 active:translate-y-0 transition-transform"
                            >
                                <Link href="#servicios">Ver Servicios</Link>
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div className="flex flex-wrap items-center gap-6 pt-4 border-t border-stone-200" variants={fadeInUp}>
                            {stats.map(({ icon: Icon, value, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <Icon size={18} className="text-brand-accent" />
                                    <span className="text-sm font-semibold text-stone-800">
                                        {value}
                                    </span>
                                    <span className="text-sm text-stone-500">{label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Columna derecha: Carrusel de imágenes ── */}
                    <motion.div
                        className="relative flex items-center justify-center lg:justify-end"
                        style={{ y: imageY }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        {/* Decoración de fondo */}
                        <motion.div
                            className="absolute -z-10 w-[90%] h-[90%] rounded-3xl bg-brand-accent/15 translate-x-3 translate-y-3"
                            style={{ rotate: bgRotate }}
                        />

                        <div className="w-full max-w-md lg:max-w-lg">
                            <Carousel
                                opts={{ loop: true }}
                                plugins={[
                                    Autoplay({ delay: 4000, stopOnInteraction: false }),
                                ]}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {slides.map((slide, idx) => (
                                        <CarouselItem key={slide.id}>
                                            <div className="relative overflow-hidden rounded-2xl border-2 border-brand-accent/30 shadow-soft aspect-4/5">
                                                <Image
                                                    src={slide.src}
                                                    alt={slide.alt}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 512px"
                                                    className="object-cover"
                                                    priority={idx === 0}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                            </Carousel>

                            {/* Dots indicator */}
                            <div className="flex justify-center gap-2 mt-4">
                                {slides.map((slide) => (
                                    <div
                                        key={slide.id}
                                        className="w-2 h-2 rounded-full bg-brand-primary/30"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}