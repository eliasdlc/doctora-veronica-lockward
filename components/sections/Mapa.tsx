"use client";

import { motion } from "framer-motion";

export function Mapa() {
  return (
    <section id="mapa" className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 md:py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden border border-stone-200/60 bg-stone-200 aspect-[4/3] md:aspect-video w-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-stone-200/50"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.92933782988666!2d-70.68070385554081!3d19.459278873044045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c586220f8fc7%3A0xa9e4f859b5317f17!2sAv.%20Juan%20Pablo%20Duarte%20174%2C%20Santiago%20de%20los%20Caballeros%2051000!5e0!3m2!1ses!2sdo!4v1772768431593!5m2!1ses!2sdo"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion del consultorio"></iframe>
        </motion.div>
      </div>
    </section>
  );
}
