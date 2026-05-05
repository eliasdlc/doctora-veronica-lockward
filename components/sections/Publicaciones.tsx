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

function FacebookPost({ item }: { item: FacebookEmbed }) {
    return (
        <div className="relative w-full overflow-hidden rounded-t-2xl" style={{ height: "812px" }}>
            <iframe
                src={item.url}
                width="500"
                height="812"
                style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title={item.title}
            />
        </div>
    );
}

function LocalVideo({ item }: { item: LocalVideo }) {
    return (
        <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
            <video
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                autoPlay
                loop
                muted
                preload="auto"
                aria-label={item.title}
                title={item.title}
                className="w-full h-full object-cover rounded-t-2xl"
            />
        </div>
    );
}

export function Publicaciones() {
    return (
        <section id="publicaciones" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Heading */}
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

                {/* Grid */}
                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className={
                        publicaciones.length === 1
                            ? "flex justify-center"
                            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                    }
                >
                    {publicaciones.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(8_62_36_/_0.08)] bg-white border border-stone-200 w-full max-w-[380px]"
                        >
                            {item.type === "facebook" ? (
                                <FacebookPost item={item} />
                            ) : (
                                <LocalVideo item={item} />
                            )}

                            {/* Caption */}
                            <div className="p-4 text-center">
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
