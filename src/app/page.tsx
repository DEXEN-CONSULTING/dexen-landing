import Image from "next/image";
import type { ReactNode } from "react";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import GearBackdrop from "@/components/GearBackdrop";
import HeroPanel from "@/components/HeroPanel";
import ProcessSteps from "@/components/ProcessSteps";
import IntelDashboard from "@/components/IntelDashboard";
import ServiceStack, { type Service } from "@/components/ServiceStack";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { site } from "@/site";

// Nombres autorizados por Ricardo el 2026-11-05.
// Daisies: solo el sitio web.
// Melaque, Heredabienes y Daisies son lockup (marca + texto), igual que en sus propios sitios:
// marca de inmobiliaria/MWRS/brand/templates/mark-ink.svg y de lidfi/heredabienes/public/iconblue.png.
// Balance óptico: cada logo lleva su alto visible en px (los PNG -trim no traen margen),
// más bajo cuanto más ancho, para que todos pesen parecido en la banda.
type Client = {
  name: string;
  logo?: { src: string; w: number; h: number; height: number };
  lockup?: { mark: string; w: number; h: number; height: number; gap: number; text: ReactNode };
};
const clients: Client[] = [
  {
    name: "Daisies",
    lockup: {
      mark: "/logos/daisies-trim.png",
      w: 276,
      h: 276,
      height: 28,
      gap: 7,
      text: <span className="text-[25px] font-semibold leading-none tracking-[-0.035em]">daisies</span>,
    },
  },
  {
    name: "Melaque West Coast",
    lockup: {
      mark: "/logos/melaque.svg",
      w: 120,
      h: 61,
      height: 30,
      gap: 8,
      text: (
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold uppercase tracking-[0.07em]">Melaque West Coast</span>
          <span className="mt-1 text-[8px] uppercase tracking-[0.34em]">Real Estate</span>
        </span>
      ),
    },
  },
  { name: "UDGA", logo: { src: "/logos/udg-trim.png", w: 302, h: 210, height: 40 } },
  {
    name: "Heredabienes",
    lockup: {
      mark: "/logos/heredabienes-trim.png",
      w: 202,
      h: 243,
      height: 28,
      gap: 7,
      text: <span className="text-[16px] font-extrabold tracking-[-0.02em]">HEREDABIENES.</span>,
    },
  },
  { name: "Chipsi", logo: { src: "/logos/chipsi.svg", w: 353, h: 129, height: 27 } },
  { name: "Terapi", logo: { src: "/logos/terapi.svg", w: 336, h: 96, height: 24 } },
  { name: "Pensión+", logo: { src: "/logos/pensionmas.png", w: 818, h: 191, height: 29 } },
];

const services: Service[] = [
  {
    title: "Contenido automático",
    kind: "contenido",
    body: "Publicación en redes y blog que sale todos los días sin que nadie de tu equipo la empuje.",
    limit: null,
  },
  {
    title: "Agentes de IA y automatización",
    kind: "agentes",
    body: "IA que contesta, agenda, cotiza y da seguimiento por WhatsApp, Instagram, web, voz y correo.",
    limit: "No cierra ventas complejas ni sustituye a tu vendedor: filtra, responde lo repetitivo y te entrega el lead caliente.",
  },
  {
    title: "Software, web y ERP",
    kind: "erp",
    body: "Sitios, portales, apps e implementación de Odoo por fases, con soporte después de salir a producción.",
    limit: "Nunca cotizamos un ERP sin diagnóstico previo.",
  },
  {
    title: "Marca y desarrollo creativo",
    kind: "marca",
    body: "Identidad y sistema de diseño para que todo lo anterior se vea como una sola empresa.",
    limit: null,
  },
];

function Arrow() {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2">
        Saltar al contenido
      </a>

<SiteHeader />

      <main id="contenido">
        {/* Hero + clientes: los logos cierran el primer viewport */}
        <section className="mx-auto grid max-w-[1200px] gap-8 px-4 pt-8 sm:px-8 md:pt-14 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[1fr_auto] lg:gap-x-16 lg:gap-y-0 lg:pt-10">
          <div className="flex flex-col lg:justify-center">
            <h1 className="text-[clamp(2.6rem,6.2vw,4.9rem)] font-light leading-[1.02] tracking-[-0.035em]">
              Sistemas que operan solos en tu empresa
            </h1>
            <div className="mt-6 lg:mt-8">
              <p className="max-w-[36ch] text-[18px] leading-[1.45] text-ink-2 sm:text-[19px]">
                Instalamos agentes de IA, contenido automático, software y ERP.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex min-w-[10rem] flex-1 items-center justify-center gap-2 bg-blue px-6 py-3.5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-blue-deep sm:flex-none"
                >
                  Pedir diagnóstico <Arrow />
                </a>
                <a
                  href="#proceso"
                  className="inline-flex min-w-[10rem] flex-1 items-center justify-center border border-blue/40 px-6 py-3.5 text-[15px] font-medium text-blue no-underline transition-colors hover:border-blue hover:bg-blue/[0.04] sm:flex-none"
                >
                  Cómo trabajamos
                </a>
              </div>
            </div>
          </div>

          <div aria-labelledby="clientes" role="region" className="order-2 min-w-0 lg:order-3 lg:col-span-2 lg:mt-6 lg:py-5">
            <h2 id="clientes" className="text-[14px] text-ink-3 lg:text-center">
              Han trabajado con Dexen
            </h2>
            {/* Móvil y tablet: una sola fila en movimiento. */}
            <div className="marquee -mx-4 mt-3 flex overflow-hidden sm:-mx-8 lg:hidden">
              <ul className="marquee-track flex w-max shrink-0 items-center gap-x-10 px-4">
                {clients.map((c) => (
                    <li key={c.name} className="flex h-12 shrink-0 items-center">
                      {c.lockup ? (
                        <span
                          className="logo-mark flex items-center whitespace-nowrap text-ink"
                          style={{ gap: c.lockup.gap }}
                          aria-label={c.name}
                          role="img"
                        >
                          <Image src={c.lockup.mark} alt="" width={c.lockup.w} height={c.lockup.h} style={{ height: c.lockup.height }} className="w-auto" />
                          <span aria-hidden="true">{c.lockup.text}</span>
                        </span>
                      ) : c.logo ? (
                        <Image
                          src={c.logo.src}
                          alt={c.name}
                          width={c.logo.w}
                          height={c.logo.h}
                          style={{ height: c.logo.height }}
                          className="logo-mark w-auto"
                        />
                      ) : null}
                    </li>
                  ))}
              </ul>
              <ul aria-hidden="true" className="marquee-track flex w-max shrink-0 items-center gap-x-10 px-4">
                {clients.map((c) => (
                    <li key={c.name} className="flex h-12 shrink-0 items-center">
                      {c.lockup ? (
                        <span
                          className="logo-mark flex items-center whitespace-nowrap text-ink"
                          style={{ gap: c.lockup.gap }}
                          aria-label={c.name}
                          role="img"
                        >
                          <Image src={c.lockup.mark} alt="" width={c.lockup.w} height={c.lockup.h} style={{ height: c.lockup.height }} className="w-auto" />
                          <span aria-hidden="true">{c.lockup.text}</span>
                        </span>
                      ) : c.logo ? (
                        <Image
                          src={c.logo.src}
                          alt={c.name}
                          width={c.logo.w}
                          height={c.logo.h}
                          style={{ height: c.logo.height }}
                          className="logo-mark w-auto"
                        />
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
            {/* Escritorio: fila estática. */}
            <ul className="mt-5 hidden items-center justify-between gap-x-8 lg:flex">
              {clients.map((c) => (
                    <li key={c.name} className="flex h-12 shrink-0 items-center">
                      {c.lockup ? (
                        <span
                          className="logo-mark flex items-center whitespace-nowrap text-ink"
                          style={{ gap: c.lockup.gap }}
                          aria-label={c.name}
                          role="img"
                        >
                          <Image src={c.lockup.mark} alt="" width={c.lockup.w} height={c.lockup.h} style={{ height: c.lockup.height }} className="w-auto" />
                          <span aria-hidden="true">{c.lockup.text}</span>
                        </span>
                      ) : c.logo ? (
                        <Image
                          src={c.logo.src}
                          alt={c.name}
                          width={c.logo.w}
                          height={c.logo.h}
                          style={{ height: c.logo.height }}
                          className="logo-mark w-auto"
                        />
                      ) : null}
                    </li>
                  ))}
            </ul>
          </div>

          <div className="order-3 pb-12 lg:order-2 lg:pb-0">
            <HeroPanel />
          </div>
        </section>

        {/* Inteligencia: dashboard ilustrativo */}
        <section id="inteligencia" aria-labelledby="inteligencia-t" className="dash-glow overflow-hidden text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
            <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h2 id="inteligencia-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
                Tu operación, medida y corriendo sola
              </h2>
              <div className="md:pt-3">
                <p className="max-w-[52ch] text-[18px] leading-relaxed text-[#c3cdf5]">
                  Cada agente, publicación y documento deja rastro. Lo juntamos en un tablero que te dice qué pasó, qué se atendió solo y dónde conviene moverte.
                </p>
              </div>
            </div>
            <div className="mt-14">
              <IntelDashboard />
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" aria-labelledby="servicios-t" className="bg-paper-2">
          <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
            <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h2 id="servicios-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
                Lo que instalamos
              </h2>
              <p className="max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:pt-3">
                No vendemos horas ni estrategia. Entregamos el sistema funcionando y cobramos por tenerlo corriendo: setup único más una renta mensual.
              </p>
            </div>
            <ServiceStack services={services} />
          </div>
        </section>

        {/* Casos */}
        <section id="casos" aria-labelledby="casos-t" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 id="casos-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
              Casos de estudio
            </h2>
            <p className="max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:pt-3">
              Proyectos que hicimos y que hoy están en uso. Las capturas de los sitios y de Instagram son reales; los paneles de Pensión+ son recreaciones con datos de ejemplo.
            </p>
          </div>
          <CaseStudies />
        </section>

        {/* Proceso */}
        <ProcessSteps>
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 id="proceso-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
              Cómo trabajamos
            </h2>
            <p className="max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:pt-3">
              Primero el diagnóstico. Sin entender el problema no hay cotización.
            </p>
          </div>
        </ProcessSteps>

        {/* Reseñas */}
        <section id="resenas" aria-labelledby="resenas-t" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
          <h2 id="resenas-t" className="max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
            Lo que dicen quienes ya trabajan con nosotros
          </h2>
          <Testimonials />
        </section>

        {/* Contacto */}
        <section id="contacto" aria-labelledby="contacto-t" className="border-t border-line bg-paper-2">
          <GearBackdrop>
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-20 sm:px-8 md:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 id="contacto-t" className="text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.03] tracking-[-0.035em]">
                Cuéntanos el problema
              </h2>
              <p className="mt-6 max-w-[42ch] text-[18px] leading-relaxed text-ink-2">
                Te escribimos para agendar la llamada de diagnóstico: 30 minutos, sin costo y sin compromiso.
              </p>
              {site.email && (
                <p className="mt-8 text-[16px] text-ink-2">
                  O escríbenos a{" "}
                  <a href={`mailto:${site.email}`} className="text-ink underline">
                    {site.email}
                  </a>
                </p>
              )}
            </div>
            <ContactForm />
          </div>
          </GearBackdrop>
        </section>
      </main>

<SiteFooter />
    </>
  );
}
