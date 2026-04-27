export const WHATSAPP_NUMBER = "18098447072";

export interface WhatsAppFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  preferredTime?: string;
  message: string;
}

export function buildWhatsAppMessage(data: WhatsAppFormData): string {
  const lines: string[] = [
    `Hola, Dra. Verónica Lockward. Mi nombre es ${data.name} y me gustaría agendar una consulta.`,
    "",
    `• Servicio de interés: ${data.service}`,
    `• Teléfono de contacto: ${data.phone}`,
  ];

  if (data.email) lines.push(`• Correo: ${data.email}`);
  if (data.preferredTime && data.preferredTime !== "Sin preferencia") {
    lines.push(`• Horario preferido: ${data.preferredTime}`);
  }

  lines.push("", data.message, "", "Quedo atenta/o a su respuesta. ¡Muchas gracias!");

  return lines.join("\n");
}

export function buildWhatsAppUrl(data: WhatsAppFormData): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
}
