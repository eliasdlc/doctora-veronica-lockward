"use client";

import { motion } from "framer-motion";
import { Play, Facebook } from "lucide-react";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

interface LocalVideo {
    type: "local";
    src: string;
    poster?: string;
    title: string;
    description: string;
}

interface FacebookEmbed {
    type: "facebook";
    url: string;
    title: string;
    description: string;
}

type PublicacionItem = LocalVideo | FacebookEmbed;

const publicaciones: PublicacionItem[] = [
    {
        type: "local",
        src: "/videos/reel-eii.mp4",
        poster: "/videos/reel-eii-poster.webp",
        title: "Enfermedad Inflamatoria Intestinal",
        description: "Conoce más sobre el diagnóstico y tratamiento de la EII",
    },
    {
        type: "facebook",
        url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCLINICAUNIONMEDICA%2Fposts%2Fpfbid0Boy8SRadt8BYmnDX53U6geLN6Cu8ueUpKwt465Rindp8jjygmQuv8L67u7mu9w5Gl&show_text=true&width=500",
        title: "Publicación en Facebook",
        description: "Síguenos en Facebook para más contenido educativo",
    },
];

function Caption({ item }: { item: PublicacionItem }) {
    return (
        <div className="p-4 text-center border-t border-stone-100">
            <div className="flex items-center justify-center gap-1.5 mb-1">
                {item.type === "facebook" ? (
                    <Facebook size={12} style={{ color: "#1877F2" }} />
                ) : (
                    <Play size={12} className="text-brand-accent fill-brand-accent" />
                )}
                <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: item.type === "facebook" ? "#1877F2" : undefined }}
                >
                    {item.type === "facebook" ? "Facebook" : "Video"}
                </span>
            </div>
            <h3 className="font-bold text-brand-primary text-sm leading-snug">{item.title}</h3>
            <p className="text-stone-500 text-xs mt-1 leading-relaxed">{item.description}</p>
        </div>
    );
}

export function Publicaciones() {
    const video = publicaciones.find((p): p is LocalVideo => p.type === "local");
    const fbPost = publicaciones.find((p): p is FacebookEmbed => p.type === "facebook");

    return (
        <section id="publicaciones" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">

                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-12"
                >
                    <motion.p variants={fadeInUp} className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
                        Contenido educativo
                    </motion.p>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-brand-primary">
                        Publicaciones
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 text-stone-500 max-w-xl mx-auto">
                        Información médica confiable sobre gastroenterología y enfermedades inflamatorias intestinales.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center"
                >
                    {/* Video — mismo alto que el FB card en desktop */}
                    {video && (
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] bg-white border border-stone-200 w-full max-w-[280px] lg:max-w-none lg:w-[394px] shrink-0"
                        >
                            {/* Mobile: aspect 9/16 · Desktop: flex-1 para igualar altura con FB card */}
                            <div className="relative aspect-[9/16] lg:aspect-auto lg:flex-1 lg:min-h-0">
                                <video
                                    src={video.src}
                                    poster={video.poster}
                                    controls
                                    playsInline
                                    autoPlay
                                    loop
                                    muted
                                    preload="auto"
                                    aria-label={video.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <Caption item={video} />
                        </motion.div>
                    )}

                    {/* Facebook post — ancho exacto del embed, sin gap */}
                    {fbPost && (
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] bg-white border border-stone-200 w-full lg:w-fit shrink-0"
                        >
                            <div className="overflow-x-auto">
                                <iframe
                                    src={fbPost.url}
                                    width="500"
                                    height="700"
                                    style={{ border: "none", display: "block", width: "500px" }}
                                    scrolling="no"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen
                                    title={fbPost.title}
                                />
                            </div>
                            <Caption item={fbPost} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
