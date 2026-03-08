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
    <footer className="bg-stone-800 text-stone-200 border-t border-stone-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
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
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                +1 (809) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                contacto@ejemplo.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Calle Ejemplo 123, Ciudad
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario */}
          <div>
            <h3 className="font-semibold text-white mb-4">Horario de Atención</h3>
            <div className="flex items-start gap-2 text-sm text-stone-400">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <p>Lunes a Viernes: 8:00 – 17:00<br />Sábado: según cita</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Dra. Verónica Lockward. Todos los derechos reservados.
          </p>
          <p className="text-sm text-stone-500">
            Desarrollado por [su nombre o agencia]
          </p>
        </div>
      </div>
    </footer>
  );
}
