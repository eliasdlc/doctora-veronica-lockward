"use client";

import { useState, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, Star, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "María G.",
    role: "Paciente",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "Carlos R.",
    role: "Paciente",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "Ana L.",
    role: "Paciente",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "María G.",
    role: "Paciente",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "Carlos R.",
    role: "Paciente",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed efficitur metus. Nam augue mauris. ",
    name: "Ana L.",
    role: "Paciente",
  }
];

export function Testimonios() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

  return (
    <>
      <section id="testimonios" className="py-8 md:py-12 bg-stone-50 border-t border-stone-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="mt-2 text-stone-600">
              Experiencias de quienes confían en nuestra atención.
            </p>
          </header>



          <div className="relative p-8 w-full">
            <div className="flex flex-row w-full gap-2 items-center justify-center overflow-visible">

              <button className="shrink-0 w-12 h-12 rounded-full border-2 border-transparent 
               bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md z-10 flex items-center justify-center -mr-2 md:-mr-6"
                onClick={() => api?.scrollPrev()}
                aria-label="Anterior testimonio">
                <ArrowLeft size={20} />
              </button>

              <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} plugins={[Autoplay({ delay: 5000 })]} className="w-full">
                <CarouselContent className="py-6 overflow-visible">
                  {testimonials.map((t, i) => {
                    const isActive = current === i;

                    return (
                      <CarouselItem key={i} className="md:basis-1/3">
                        <article className={`p-8 rounded-2xl border bg-white text-center transition-all duration-500
                                            ${isActive ? "scale-100 opacity-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-brand-primary/10 border-brand-primary/20 ring-[4px] ring-brand-primary/5 cursor-default" : "scale-[0.85] opacity-40 shadow-sm border-stone-200 cursor-pointer pointer-events-auto"}`}
                          onClick={() => !isActive && api?.scrollTo(i)}>
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
                    )
                  })}
                </CarouselContent>
              </Carousel>

              <button className="shrink-0 w-12 h-12 rounded-full border-2 border-transparent 
               bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md z-10 flex items-center justify-center -ml-2 md:-ml-6"
                onClick={() => api?.scrollNext()}
                aria-label="Siguiente testimonio">
                <ArrowRight size={20} />
              </button>

            </div>

            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonios">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-brand-primary w-8" : "bg-stone-300 hover:bg-stone-400"
                    }`}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* FAB WhatsApp */}
      < a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-stone-700 text-white shadow-lg flex items-center justify-center hover:bg-stone-800 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a >
    </>
  );
}
