// [POR CONFIRMAR] correo de contacto. Vacío = la línea "O escríbenos a" no se muestra.
// [POR CONFIRMAR] dominio. Mientras no exista, la URL canónica sale de Vercel
// (VERCEL_PROJECT_PRODUCTION_URL). Al comprar dominio: NEXT_PUBLIC_SITE_URL=https://...
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelProd ? `https://${vercelProd}` : "http://localhost:3000"),
  name: "Dexen Consulting",
  title: "Dexen Consulting · Sistemas que operan solos",
  description:
    "Implementamos agentes de IA, contenido automático, software y ERP, y los mantenemos corriendo. Diagnóstico primero, sin cotizar a ciegas.",
  locale: "es_MX",
  // [POR CONFIRMAR] datos del responsable para el Aviso de privacidad (LFPDPPP 2025)
  // y los Términos. Sin ellos el aviso legalmente está incompleto.
  legal: {
    razonSocial: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
    domicilio: process.env.NEXT_PUBLIC_LEGAL_ADDRESS ?? "",
    jurisdiccion: process.env.NEXT_PUBLIC_LEGAL_JURISDICTION ?? "",
    actualizado: "9 de noviembre de 2026",
  },
  blue: "#1d4ff0",
  blueInk: "#0a1f6e",
};
