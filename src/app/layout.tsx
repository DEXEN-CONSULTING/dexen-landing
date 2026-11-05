import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dexen Consulting · Sistemas que operan solos",
  description:
    "Implementamos agentes de IA, contenido automático, software y ERP, y los mantenemos corriendo. Diagnóstico primero, sin cotizar a ciegas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
