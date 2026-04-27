"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { buildWhatsAppUrl, type WhatsAppFormData } from "@/lib/whatsapp";
import { fadeInUp, slideInLeft, slideInRight, stagger, viewportOnce } from "@/lib/motion";

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

const timeOptions = [
  "Sin preferencia",
  "Mañana (8am–12pm)",
  "Tarde (12pm–5pm)",
];

const empty: WhatsAppFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredTime: "",
  message: "",
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  return /^[+\d\s\-]{8,}$/.test(v.trim());
}

export function Contacto() {
  const [form, setForm] = useState<WhatsAppFormData>(empty);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);

  const set = (key: keyof WhatsAppFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const touch = (key: string) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  const errors = {
    name: !form.name.trim() || form.name.trim().length < 2,
    phone: !form.phone.trim() || !isValidPhone(form.phone),
    email: !!form.email && !isValidEmail(form.email),
    service: !form.service,
    message: !form.message.trim() || form.message.trim().length < 10,
  };

  const isValid = !errors.name && !errors.phone && !errors.email && !errors.service && !errors.message;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    if (!isValid) return;
    setSending(true);
    toast.success("Abriendo WhatsApp…", {
      description: "Tu mensaje está listo para enviar a la Dra. Lockward.",
    });
    setTimeout(() => {
      window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
      setSending(false);
    }, 350);
  }

  function fieldClass(key: keyof typeof errors) {
    const hasError = touched[key] && errors[key];
    return [
      "flex rounded-xl border bg-white px-4 pt-6 pb-2 text-sm transition-all duration-200",
      "focus-within:ring-2 focus-within:ring-brand-accent/40 focus-within:border-brand-primary",
      hasError ? "border-red-300 focus-within:ring-red-200 focus-within:border-red-400" : "border-stone-200",
    ].join(" ");
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-accent/15 px-3 py-1 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Estamos Para Servirle
          </h2>
          <p className="mt-3 text-stone-600 text-lg max-w-xl mx-auto">
            Complete el formulario y le enviaremos su solicitud directamente por WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — contact info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <ul className="space-y-6 mt-2">
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

            <div className="mt-10 p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-brand-primary" />
                <p className="font-semibold text-brand-primary text-sm">Respuesta rápida</p>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Su mensaje llegará directamente al equipo de la Dra. Lockward vía WhatsApp. Respondemos en horario de atención.
              </p>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 p-8 rounded-2xl border border-stone-200 bg-white shadow-soft"
          >
            {/* Name */}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Nombre <span className="text-red-400">*</span>
              </Label>
              <div className={fieldClass("name")}>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  onBlur={touch("name")}
                  placeholder="Su nombre completo"
                  aria-invalid={touched.name && errors.name ? "true" : undefined}
                  className="flex-1 bg-transparent outline-none text-stone-800 placeholder:text-stone-400 text-sm"
                />
              </div>
              {touched.name && errors.name && (
                <p className="text-xs text-red-500 mt-1">Ingrese su nombre (mínimo 2 caracteres).</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Teléfono <span className="text-red-400">*</span>
              </Label>
              <div className={fieldClass("phone")}>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  onBlur={touch("phone")}
                  placeholder="809-000-0000"
                  aria-invalid={touched.phone && errors.phone ? "true" : undefined}
                  className="flex-1 bg-transparent outline-none text-stone-800 placeholder:text-stone-400 text-sm"
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-500 mt-1">Ingrese un teléfono válido.</p>
              )}
            </div>

            {/* Email (optional) */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Correo electrónico <span className="text-stone-400">(opcional)</span>
              </Label>
              <div className={fieldClass("email")}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  onBlur={touch("email")}
                  placeholder="correo@ejemplo.com"
                  aria-invalid={touched.email && errors.email ? "true" : undefined}
                  className="flex-1 bg-transparent outline-none text-stone-800 placeholder:text-stone-400 text-sm"
                />
              </div>
              {touched.email && errors.email && (
                <p className="text-xs text-red-500 mt-1">Ingrese un correo válido.</p>
              )}
            </div>

            {/* Service */}
            <div className="space-y-1">
              <Label htmlFor="service" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Servicio de interés <span className="text-red-400">*</span>
              </Label>
              <div className={fieldClass("service")}>
                <select
                  id="service"
                  value={form.service}
                  onChange={set("service")}
                  onBlur={touch("service")}
                  aria-invalid={touched.service && errors.service ? "true" : undefined}
                  className="flex-1 bg-transparent outline-none text-stone-800 text-sm cursor-pointer"
                >
                  <option value="" disabled>Seleccione un servicio</option>
                  {servicesOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              {touched.service && errors.service && (
                <p className="text-xs text-red-500 mt-1">Seleccione un servicio.</p>
              )}
            </div>

            {/* Preferred time (optional) */}
            <div className="space-y-1">
              <Label htmlFor="preferredTime" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Horario preferido <span className="text-stone-400">(opcional)</span>
              </Label>
              <div className="flex rounded-xl border border-stone-200 bg-white px-4 pt-6 pb-2 text-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-accent/40 focus-within:border-brand-primary">
                <select
                  id="preferredTime"
                  value={form.preferredTime}
                  onChange={set("preferredTime")}
                  className="flex-1 bg-transparent outline-none text-stone-800 text-sm cursor-pointer"
                >
                  {timeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <Label htmlFor="message" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Mensaje <span className="text-red-400">*</span>
              </Label>
              <div className={`${fieldClass("message")} !pt-3`}>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  onBlur={touch("message")}
                  placeholder="Cuéntenos brevemente el motivo de su consulta..."
                  aria-invalid={touched.message && errors.message ? "true" : undefined}
                  className="flex-1 bg-transparent outline-none text-stone-800 placeholder:text-stone-400 text-sm resize-none min-h-[100px]"
                />
              </div>
              {touched.message && errors.message && (
                <p className="text-xs text-red-500 mt-1">Ingrese su mensaje (mínimo 10 caracteres).</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl py-6 text-base font-bold mt-2 transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ backgroundColor: "#25D366", color: "#083E24" }}
            >
              {sending ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Abriendo WhatsApp…</>
              ) : (
                <><Send className="w-5 h-5 mr-2" /> Enviar por WhatsApp</>
              )}
            </Button>

            <p className="text-center text-xs text-stone-400 mt-2">
              Al enviar, se abrirá WhatsApp con su mensaje listo para confirmar.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
