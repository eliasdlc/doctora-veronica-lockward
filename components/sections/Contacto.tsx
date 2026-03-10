"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Ave. Juan Pablo Duarte No. 176, 3era Planta, Suite 316 — Clínica Unión Médica del Norte, Santiago, RD",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "809-226-8686 ext. 4316 · Cel: 809-844-7072",
  },
  {
    icon: Mail,
    label: "Email",
    value: "veronicalockr@hotmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun–Vie 8:00 – 17:00",
  },
];

const servicesOptions = [
  "Consulta Gastroenterológica",
  "Endoscopia Digestiva",
  "Colonoscopia",
  "Estudios Diagnósticos",
  "Otro",
];

export function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Estamos Para Servirle
            </h2>
            <p className="text-stone-600 mb-8">
              Contáctenos para agendar su cita o resolver sus dudas. Estamos a su disposición.
            </p>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-stone-600" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-stone-500">{label}</p>
                    <p className="text-stone-800">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <form className="space-y-4 p-6 rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-stone-700">Nombre</Label>
              <Input id="name" placeholder="Su nombre" className="border-stone-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-stone-700">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="Su teléfono" className="border-stone-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-700">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" className="border-stone-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service" className="text-stone-700">Servicio de Interés</Label>
              <select
                id="service"
                className="flex h-9 w-full rounded-md border border-stone-300 bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <option value="">Seleccione un servicio</option>
                {servicesOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-stone-700">Mensaje</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escriba su mensaje..."
                className="flex w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 min-h-[80px]"
              />
            </div>
            <Button type="submit" className="w-full bg-stone-700 hover:bg-stone-600 text-white">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
