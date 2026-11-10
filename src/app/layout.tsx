import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { site } from "@/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "agentes de IA",
    "automatización con IA",
    "chatbot de WhatsApp para empresas",
    "contenido automático en redes",
    "implementación de Odoo",
    "ERP para empresas",
    "desarrollo de software a la medida",
    "consultoría de implementación",
    "México",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: site.blue,
  width: "device-width",
  initialScale: 1,
};

// Datos estructurados: solo hechos confirmados en PRODUCT.md. Sin dirección,
// teléfono ni redes porque no existen todavía.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      areaServed: { "@type": "Country", name: "México" },
      knowsLanguage: "es-MX",
      ...(site.email ? { email: site.email } : {}),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          ["Contenido automático y Ads", "Publicación en redes y blog que sale todos los días sin que nadie de tu equipo la empuje."],
          ["Agentes de IA y automatización", "IA que contesta, agenda, cotiza y da seguimiento por WhatsApp, Instagram, web, voz y correo."],
          ["Software, web y ERP", "Sitios, portales, apps e implementación de Odoo por fases, con soporte después de salir a producción."],
          ["Marca y desarrollo creativo", "Identidad y sistema de diseño para que todo lo anterior se vea como una sola empresa."],
        ].map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "es-MX",
      publisher: { "@id": `${site.url}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={hanken.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
