"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "18098447072";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L0 24l6.335-1.508A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.002-1.367l-.358-.214-3.762.896.952-3.657-.234-.375A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip label */}
      <span className="mr-3 whitespace-nowrap rounded-lg bg-stone-800 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-200 group-hover:opacity-100">
        Agendar Cita
      </span>

      {/* Ping ring */}
      <span className="absolute right-0 h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-20" />

      {/* Main button */}
      <Link
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_30px_rgb(37,211,102,0.3)] transition-transform duration-200 hover:scale-110"
      >
        <WhatsAppIcon />
      </Link>
    </div>
  );
}
