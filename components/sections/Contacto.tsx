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
    value: "Lun–Vie 8:00 AM – 5:00 PM",
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              Estamos Para Servirle
            </h2>
            <p className="text-stone-600 mb-10 text-lg leading-relaxed">
              Contáctenos para agendar su cita o resolver sus dudas. Estamos a su disposición.
            </p>
            <ul className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-5 group">
                  <span className="w-12 h-12 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white text-brand-primary transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="mt-1">
                    <p className="text-sm font-bold tracking-wide text-brand-primary uppercase mb-1">{label}</p>
                    <p className="text-stone-700 leading-relaxed text-base">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <form className="space-y-5 p-8 rounded-2xl border border-stone-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-stone-200/50">
            <div className="space-y-2.5">
              <Label htmlFor="name" className="text-stone-700 font-semibold">Nombre</Label>
              <Input id="name" placeholder="Su nombre" className="border-stone-200 focus-visible:ring-brand-primary bg-stone-50/50 py-6" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="phone" className="text-stone-700 font-semibold">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="Su teléfono" className="border-stone-200 focus-visible:ring-brand-primary bg-stone-50/50 py-6" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="email" className="text-stone-700 font-semibold">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" className="border-stone-200 focus-visible:ring-brand-primary bg-stone-50/50 py-6" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="service" className="text-stone-700 font-semibold">Servicio de Interés</Label>
              <select
                id="service"
                className="flex h-12 w-full rounded-md border border-stone-200 bg-stone-50/50 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-colors"
              >
                <option value="">Seleccione un servicio</option>
                {servicesOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="message" className="text-stone-700 font-semibold">Mensaje</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escriba su mensaje..."
                className="flex w-full rounded-md border border-stone-200 bg-stone-50/50 px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-colors min-h-[120px] resize-y"
              />
            </div>
            <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] shadow-brand-primary/20 transition-all hover:-translate-y-0.5 rounded-full py-6 text-base font-bold mt-2">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
