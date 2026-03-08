"use client";

import Link from "next/link";
import { Phone, ShieldCheck, Award, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
    { id: 1, alt: "Dra. Verónica Lockward en consultorio" },
    { id: 2, alt: "Equipos de gastroenterología" },
    { id: 3, alt: "Consulta médica personalizada" },
];

const stats = [
    { icon: Award, value: "+30", label: "años de experiencia" },
    { icon: Heart, value: "+1,000", label: "pacientes atendidos" },
    { icon: ShieldCheck, value: "100%", label: "compromiso con tu salud" },
];

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative overflow-hidden bg-linear-to-br from-white via-brand-accent/5 to-brand-accent/10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Columna izquierda: texto + CTAs ── */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
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
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-brand-primary text-brand-light hover:bg-brand-primary/90 px-8 shadow-md shadow-brand-primary/20"
                            >
                                <Link href="#contacto">
                                    <Phone size={16} />
                                    Agendar Consulta
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full border-brand-primary text-brand-primary hover:bg-brand-primary/5 px-8"
                            >
                                <Link href="#servicios">Ver Servicios</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-stone-200">
                            {stats.map(({ icon: Icon, value, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <Icon size={18} className="text-brand-accent" />
                                    <span className="text-sm font-semibold text-stone-800">
                                        {value}
                                    </span>
                                    <span className="text-sm text-stone-500">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Columna derecha: Carrusel de imágenes ── */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        {/* Decoración de fondo */}
                        <div className="absolute -z-10 w-[90%] h-[90%] rounded-3xl bg-brand-accent/15 rotate-3 translate-x-3 translate-y-3" />

                        <div className="w-full max-w-md lg:max-w-lg">
                            <Carousel
                                opts={{ loop: true }}
                                plugins={[
                                    Autoplay({ delay: 4000, stopOnInteraction: false }),
                                ]}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {slides.map((slide) => (
                                        <CarouselItem key={slide.id}>
                                            <div className="relative overflow-hidden rounded-2xl border-2 border-brand-accent/30 shadow-lg aspect-4/5">
                                                {/* Placeholder — reemplazar con <Image /> real */}
                                                <div className="absolute inset-0 bg-linear-to-br from-brand-accent/20 via-brand-accent/5 to-brand-primary/10 flex flex-col items-center justify-center gap-4 p-8">
                                                    <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                                        <ShieldCheck
                                                            size={36}
                                                            className="text-brand-primary"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-stone-500 text-center font-medium">
                                                        {slide.alt}
                                                    </p>
                                                    <span className="text-xs text-stone-400">
                                                        Imagen {slide.id} — placeholder
                                                    </span>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="left-2 bg-white/80 backdrop-blur-sm border-brand-accent/30 hover:bg-brand-accent/20" />
                                <CarouselNext className="right-2 bg-white/80 backdrop-blur-sm border-brand-accent/30 hover:bg-brand-accent/20" />
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
                    </div>
                </div>
            </div>
        </section>
    );
}