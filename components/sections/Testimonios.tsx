"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { fadeInUp, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    text: "Hola soy Angelica paciente de enfermedad de Cronh tengo más de 17 años tratando mi condición y gracias al seguimiento y los tratamiento adecuados despues de Dios y de mi dra Verónica lockward he podido llevar una vida normal y controlar mi Cronh. Gracias querida dra por siempre prepararse cada día más en enfermedades inflamatorias para darnos a nosotros sus pacientes mejor calidad de vida",
    name: "Angélica",
    role: "Paciente con Enfermedad de Crohn",
  },
  // Agregar más testimonios aquí
];

export function Testimonios() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const updateDots = useCallback(() => {
    if (api != null) setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateDots();
    api.on("select", updateDots);
    return () => {
      api.off("select", updateDots);
    };
  }, [api, updateDots]);

  const single = testimonials.length === 1;

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.header
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="mt-2 text-stone-600">
            Experiencias de quienes confían en nuestra atención.
          </p>
        </motion.header>

        <div className="relative p-8 w-full">
          <div className="flex flex-row w-full gap-2 items-center justify-center overflow-visible">

            {!single && (
              <button
                className="shrink-0 w-12 h-12 rounded-full border-2 border-transparent bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md z-10 flex items-center justify-center -mr-2 md:-mr-6"
                onClick={() => api?.scrollPrev()}
                aria-label="Anterior testimonio"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            <Carousel
              setApi={setApi}
              opts={{ loop: !single, align: "center" }}
              plugins={single ? [] : [Autoplay({ delay: 5000 })]}
              className="w-full"
            >
              <CarouselContent className="py-6 overflow-visible">
                {testimonials.map((t, i) => {
                  const isActive = single || current === i;

                  return (
                    <CarouselItem key={i} className={single ? "md:basis-1/2 mx-auto" : "md:basis-1/3"}>
                      <article
                        className={`p-8 rounded-2xl border bg-white text-center transition-all duration-500
                          ${isActive
                            ? "scale-100 opacity-100 shadow-soft border-brand-primary/20 ring-[4px] ring-brand-primary/5 cursor-default"
                            : "scale-[0.88] opacity-40 shadow-sm border-stone-200 cursor-pointer pointer-events-auto"
                          }`}
                        onClick={() => !isActive && api?.scrollTo(i)}
                      >
                        <Quote className="w-10 h-10 text-stone-300 mx-auto mb-4" aria-hidden />
                        <p className="text-stone-700 italic leading-relaxed mb-6">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="flex justify-center gap-1 mb-4" aria-hidden>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <Star key={n} className="w-5 h-5 fill-stone-400 text-stone-400" />
                          ))}
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-6">
                          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-2 border border-stone-200">
                            <User className="w-6 h-6 text-stone-400" />
                          </div>
                          <p className="font-semibold text-stone-800">{t.name}</p>
                          <p className="text-sm text-stone-500">{t.role}</p>
                        </div>
                      </article>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {!single && (
              <button
                className="shrink-0 w-12 h-12 rounded-full border-2 border-transparent bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md z-10 flex items-center justify-center -ml-2 md:-ml-6"
                onClick={() => api?.scrollNext()}
                aria-label="Siguiente testimonio"
              >
                <ArrowRight size={20} />
              </button>
            )}

          </div>

          {!single && (
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonios">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-brand-primary w-8" : "bg-stone-300 hover:bg-stone-400"
                  }`}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
