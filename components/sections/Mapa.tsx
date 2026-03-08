"use client";

export function Mapa() {
  return (
    <section id="mapa" className="bg-stone-100 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-200 aspect-video w-full flex items-center justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.92933782988666!2d-70.68070385554081!3d19.459278873044045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c586220f8fc7%3A0xa9e4f859b5317f17!2sAv.%20Juan%20Pablo%20Duarte%20174%2C%20Santiago%20de%20los%20Caballeros%2051000!5e0!3m2!1ses!2sdo!4v1772768431593!5m2!1ses!2sdo"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion del consultorio"></iframe>
        </div>
      </div>
    </section>
  );
}
