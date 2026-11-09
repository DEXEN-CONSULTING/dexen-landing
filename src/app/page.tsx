import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import GearBackdrop from "@/components/GearBackdrop";
import HeroPanel from "@/components/HeroPanel";
import ProcessSteps from "@/components/ProcessSteps";
import { GEAR_PATH } from "@/components/gear";
import { site } from "@/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#equipo", label: "Equipo" },
];

function DexenMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={GEAR_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

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

const services = [
  {
    title: "Contenido automático",
    body: "Publicación en redes y blog que sale todos los días sin que nadie de tu equipo la empuje.",
    limit: null,
  },
  {
    title: "Agentes de IA y automatización",
    body: "IA que contesta, agenda, cotiza y da seguimiento por WhatsApp, Instagram, web, voz y correo.",
    limit: "No cierra ventas complejas ni sustituye a tu vendedor: filtra, responde lo repetitivo y te entrega el lead caliente.",
  },
  {
    title: "Software, web y ERP",
    body: "Sitios, portales, apps e implementación de Odoo por fases, con soporte después de salir a producción.",
    limit: "Nunca cotizamos un ERP sin diagnóstico previo.",
  },
  {
    title: "Marca y desarrollo creativo",
    body: "Identidad y sistema de diseño para que todo lo anterior se vea como una sola empresa.",
    limit: null,
  },
];

const packages = [
  {
    name: "Arranque",
    who: "Decide el dueño, en una reunión.",
    pitch: "Dejas de perder los mensajes que no contestas y publicas todos los días sin contratar a nadie.",
    cycle: "1 a 2 semanas",
  },
  {
    name: "Crecimiento",
    who: "Dueño y responsable de marketing.",
    pitch: "Costo por lead y tiempo de respuesta medidos, contra lo que hoy no se mide.",
    cycle: "3 a 6 semanas",
  },
  {
    name: "Empresa",
    who: "Comité, con el área de sistemas involucrada.",
    pitch: "Ahorro de horas-persona medido y trazabilidad de procesos.",
    cycle: "2 a 6 meses",
  },
];

const limits = [
  "No tocamos tu producción sin staging, respaldo verificado y una ventana acordada.",
  "Los riesgos se dicen antes de firmar: tokens que caducan, ventanas de Meta y lo que cada servicio no incluye.",
  "Atendemos pocos clientes a la vez. Si no hay cupo, te lo decimos.",
  "Sólo ofrecemos lo que ya construimos y opera hoy en producción.",
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

      <header className="sticky top-0 z-40 border-b border-transparent bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
          <a href="#" aria-label="Dexen, inicio" className="flex items-center gap-2.5 text-[24px] no-underline">
            <DexenMark className="h-[28px] w-[28px] text-blue" />
            <span className="font-semibold tracking-[-0.02em]">Dexen</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 text-[14px] md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-ink-2 no-underline transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="border border-ink px-4 py-2 text-[14px] font-medium no-underline transition-colors hover:bg-ink hover:text-paper"
          >
            Pedir diagnóstico
          </a>
        </div>
      </header>

      <main id="contenido">
        {/* Hero + clientes: los logos cierran el primer viewport */}
        <section className="mx-auto grid max-w-[1200px] gap-8 px-4 pt-8 sm:px-8 md:pt-14 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[1fr_auto] lg:gap-x-16 lg:gap-y-0 lg:pt-10">
          <div className="flex flex-col lg:justify-center">
            <h1 className="text-[clamp(2.6rem,6.2vw,4.9rem)] font-light leading-[1.02] tracking-[-0.035em]">
              Sistemas que operan solos en tu empresa
            </h1>
            <div className="mt-6 lg:mt-8">
              <p className="max-w-[36ch] text-[18px] leading-[1.45] text-ink-2 sm:text-[19px]">
                Instalamos agentes de IA, contenido automático, software y ERP. Después los mantenemos corriendo y respondemos cuando algo se rompe.
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
            <ul className="mt-14 border-t border-ink/15">
              {services.map((s) => (
                <li key={s.title} className="grid gap-4 border-b border-ink/15 py-9 md:grid-cols-[1fr_1.4fr] md:gap-16">
                  <h3 className="text-[24px] font-normal leading-tight tracking-[-0.02em]">{s.title}</h3>
                  <div className="max-w-[60ch]">
                    <p className="text-[17px] leading-relaxed">{s.body}</p>
                    {s.limit && <p className="mt-3 text-[15px] leading-relaxed text-ink-3">{s.limit}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

        {/* Paquetes */}
        <section id="paquetes" aria-labelledby="paquetes-t" className="bg-blue-ink text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
            <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h2 id="paquetes-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
                Tres paquetes. El diagnóstico decide cuál.
              </h2>
              <p className="max-w-[52ch] text-[18px] leading-relaxed text-[#c3cdf5] md:pt-3">
                Desde un negocio que decide su dueño hasta una empresa con comité y área de sistemas. El precio se cotiza después de la llamada, con el alcance por escrito.
              </p>
            </div>
            <div className="mt-14 grid border-t border-white/20 md:grid-cols-3">
              {packages.map((p, i) => (
                <article
                  key={p.name}
                  className={`border-b border-white/20 py-9 md:border-b-0 md:py-10 ${i > 0 ? "md:border-l md:pl-10" : ""} ${i < 2 ? "md:pr-10" : ""}`}
                >
                  <h3 className="text-[28px] font-light tracking-[-0.02em]">{p.name}</h3>
                  <p className="mt-2 text-[15px] text-[#a9b6ee]">{p.who}</p>
                  <p className="mt-8 text-[17px] leading-relaxed">{p.pitch}</p>
                  <p className="mt-8 text-[14px] text-[#a9b6ee]">
                    Implementación: <span className="tabular text-white">{p.cycle}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Límites + equipo */}
        <section id="equipo" aria-labelledby="equipo-t" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 id="equipo-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
                Dos personas. Atención directa.
              </h2>
              <p className="mt-6 max-w-[48ch] text-[18px] leading-relaxed text-ink-2">
                No somos una agencia grande y no lo fingimos. Hablas con quien diseña el sistema y con quien lleva tu cuenta.
              </p>
              <dl className="mt-12 divide-y divide-line border-y border-line">
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-6">
                  <dt className="text-[21px] tracking-[-0.015em]">Ricardo</dt>
                  <dd className="text-[16px] text-ink-2">Implementación y arquitectura</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-6">
                  <dt className="text-[21px] tracking-[-0.015em]">Dann</dt>
                  <dd className="text-[16px] text-ink-2">Comercial y cuentas</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-[24px] font-normal tracking-[-0.02em]">Lo que te decimos antes de firmar</h3>
              <ul className="mt-8 space-y-6">
                {limits.map((l) => (
                  <li key={l} className="flex gap-4 text-[17px] leading-relaxed">
                    <svg aria-hidden width="18" height="18" viewBox="0 0 18 18" className="mt-1 shrink-0 text-blue">
                      <path d="M3 9.5l3.5 3.5L15 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-10 text-[14px] text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            <span className="font-semibold text-ink">Dexen</span> · México
          </p>
          <p className="tabular">© {new Date().getFullYear()} Dexen Consulting</p>
        </div>
      </footer>
    </>
  );
}
