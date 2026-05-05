import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.doctoralockward.do";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Verónica Lockward | Gastroenteróloga en Santiago, R.D.",
    template: "%s | Dra. Verónica Lockward",
  },
  description:
    "Gastroenteróloga e internista con más de 30 años de experiencia en Santiago, República Dominicana. Especialista en Enfermedad Inflamatoria Intestinal, endoscopia digestiva, colonoscopia y enfermedades hepáticas. Primer Centro de Excelencia en EII certificado por PANCCO en R.D.",
  keywords: [
    "gastroenteróloga Santiago",
    "gastroenterólogo República Dominicana",
    "enfermedad de Crohn",
    "colitis ulcerosa",
    "EII República Dominicana",
    "endoscopia digestiva Santiago",
    "colonoscopia Santiago RD",
    "Verónica Lockward",
    "doctora Lockward",
    "gastroenterología Santiago RD",
    "enfermedades inflamatorias intestino",
    "Unión Médica del Norte gastroenterología",
  ],
  authors: [{ name: "Dra. Verónica Lockward" }],
  creator: "Dra. Verónica Lockward",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: SITE_URL,
    siteName: "Dra. Verónica Lockward — Gastroenteróloga",
    title: "Dra. Verónica Lockward | Gastroenteróloga en Santiago, R.D.",
    description:
      "Especialista en Enfermedad Inflamatoria Intestinal, endoscopia digestiva y colonoscopia. Más de 30 años de experiencia. Líder del primer Centro de Excelencia en EII en República Dominicana.",
    images: [
      {
        url: "/images/doctora/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Dra. Verónica Lockward — Gastroenteróloga en Santiago, República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Verónica Lockward | Gastroenteróloga en Santiago, R.D.",
    description:
      "Especialista en EII, endoscopia digestiva y colonoscopia. Más de 30 años de experiencia en Santiago, República Dominicana.",
    images: ["/images/doctora/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: "Dra. Verónica Lockward",
      url: SITE_URL,
      image: `${SITE_URL}/images/doctora/sobre-mi.webp`,
      description:
        "Gastroenteróloga e internista con más de 30 años de experiencia. Especialista en Enfermedad Inflamatoria Intestinal, endoscopia digestiva y colonoscopia. Líder del primer Centro de Excelencia en EII certificado por PANCCO en República Dominicana.",
      medicalSpecialty: ["Gastroenterology", "Internal Medicine"],
      knowsAbout: [
        "Enfermedad de Crohn",
        "Colitis Ulcerosa",
        "Endoscopia Digestiva",
        "Colonoscopia",
        "Resección Endoscópica de la Mucosa (EMR)",
        "Enfermedades Hepáticas",
        "Pancreatitis",
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Pontificia Universidad Católica Madre y Maestra (PUCMM)" },
        { "@type": "CollegeOrUniversity", name: "Universidad de Río Piedras, Puerto Rico" },
        { "@type": "CollegeOrUniversity", name: "Universidad de San Antonio, Madrid" },
      ],
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      telephone: "+1-809-226-8686",
      email: "veronicalockr@hotmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago de los Caballeros",
        addressCountry: "DO",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: "Clínica Universitaria Unión Médica del Norte — Gastroenterología",
      url: SITE_URL,
      image: `${SITE_URL}/images/doctora/og-image.webp`,
      description:
        "Primer Centro de Excelencia en el Manejo de las Enfermedades Inflamatorias del Intestino (EII) en República Dominicana, certificado por PANCCO en 2025.",
      telephone: "+1-809-226-8686",
      email: "veronicalockr@hotmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Clínica Universitaria Unión Médica del Norte",
        addressLocality: "Santiago de los Caballeros",
        addressRegion: "Santiago",
        addressCountry: "DO",
      },
      medicalSpecialty: "Gastroenterology",
      availableService: [
        { "@type": "MedicalProcedure", name: "Endoscopia Digestiva" },
        { "@type": "MedicalProcedure", name: "Colonoscopia" },
        { "@type": "MedicalProcedure", name: "Resección Endoscópica de la Mucosa (EMR)" },
        { "@type": "MedicalTherapy", name: "Manejo de Enfermedad de Crohn" },
        { "@type": "MedicalTherapy", name: "Manejo de Colitis Ulcerosa" },
      ],
      sameAs: [SITE_URL],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuándo debo consultar a un gastroenterólogo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debe consultar si presenta dolor abdominal recurrente, acidez o reflujo, distensión, náuseas o vómitos repetidos, estreñimiento persistente, diarrea frecuente, sangrado rectal, pérdida de peso sin explicación, anemia, fatiga o dificultad para tragar. También es clave una colonoscopia preventiva desde los 45 años.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué enfermedades trata la gastroenterología?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La gastroenterología evalúa y trata enfermedades del aparato digestivo, como reflujo, gastritis, trastornos intestinales, sangrado digestivo, alteraciones del hígado, pólipos y prevención del cáncer colorrectal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Aceptan seguros médicos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, trabajamos con seguros médicos. Le recomendamos contactarnos antes de la cita para confirmar autorizaciones, copagos y documentación requerida.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué métodos de pago tienen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aceptamos pagos en efectivo y transferencias bancarias.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <WhatsAppButton />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
