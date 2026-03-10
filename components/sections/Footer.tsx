"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo + descripción */}
          <div>
            <Link href="#inicio" className="inline-block mb-3">
              <span className="text-lg font-bold text-white">Dra. Verónica Lockward</span>
            </Link>
            <p className="text-sm text-stone-400">
              Gastroenterología especializada. Atención personalizada para su salud digestiva.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-400 hover:text-brand-accent transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-brand-accent transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-5">Contacto</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-accent" />
                </span>
                809-226-8686 ext. 4316
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-accent" />
                </span>
                veronicalockr@hotmail.com
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                </span>
                <span className="leading-relaxed">Ave. Juan Pablo Duarte No. 176, Suite 316, Santiago, RD</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario */}
          <div>
            <h3 className="font-semibold text-white mb-5">Horario de Atención</h3>
            <div className="flex items-start gap-3 text-sm text-stone-400">
              <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-brand-accent" />
              </span>
              <p className="leading-relaxed">Lunes a Viernes: <br /> <span className="text-stone-300">8:00 AM – 5:00 PM</span><br /><span className="mt-1 block">Sábado: según cita</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Dra. Verónica Lockward. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-stone-500">Hecho por</p>
            <Link href="https://decruce.dev" className="text-sm text-stone-500 hover:text-brand-accent transition-colors font-bold">Elias De La Cruz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
