import { Bebas_Neue, Caveat, Fraunces, Space_Mono } from "next/font/google";

// Sólo para el demo de "Marca y desarrollo creativo". preload:false para no
// meterle peso al primer render: se bajan cuando la tarjeta ya está en pantalla.
// Cada fuente va con una sola entrada (un weight, un style): el cargador de
// fuentes de Vercel falla con "queries have exactly one entry" si son listas.
const fraunces = Fraunces({ subsets: ["latin"], weight: "600", style: "italic", display: "swap", preload: false });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const caveat = Caveat({ subsets: ["latin"], weight: "700", display: "swap", preload: false });
const mono = Space_Mono({ subsets: ["latin"], weight: "700", display: "swap", preload: false });

export const brandFonts = [
  { name: "Fraunces", style: "Serif editorial", className: fraunces.className, weight: 600, italic: true, accent: "#0a1f6e", bg: "#f4efe6" },
  { name: "Bebas Neue", style: "Display condensada", className: bebas.className, weight: 400, italic: false, accent: "#111214", bg: "#ffd84a" },
  { name: "Caveat", style: "Manuscrita", className: caveat.className, weight: 700, italic: false, accent: "#7a2e1d", bg: "#fbe3d6" },
  { name: "Space Mono", style: "Monoespaciada técnica", className: mono.className, weight: 700, italic: false, accent: "#1d4ff0", bg: "#e9eefc" },
];
