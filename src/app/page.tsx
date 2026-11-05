import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { site } from "@/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#equipo", label: "Equipo" },
];

// Todo dato sale de PRODUCT.md §Operating Context / Capabilities. Nada inventado.
const facts = [
  { value: "30 min", label: "Llamada de diagnóstico, sin costo" },
  { value: "72 h", label: "Para tener la propuesta por escrito" },
  { value: "4", label: "Líneas de servicio, todas ya en producción" },
  { value: "2", label: "Personas: hablas con quien lo construye" },
];

// Nombres autorizados por Ricardo el 2026-11-05.
// Daisies: solo el sitio web. Heredabienes y Melaque: sin logo en disco todavía, van como texto.
const clients: { name: string; logo?: string; w?: number; h?: number }[] = [
  { name: "Daisies", logo: "/logos/daisies.png", w: 500, h: 500 },
  { name: "Melaque West Coast" },
  { name: "UDGA", logo: "/logos/udg.png", w: 500, h: 500 },
  { name: "Heredabienes" },
  { name: "Chipsi", logo: "/logos/chipsi.svg", w: 353, h: 129 },
  { name: "Terapi", logo: "/logos/terapi.svg", w: 300, h: 110 },
  { name: "Pensión+", logo: "/logos/pensionmas.png", w: 818, h: 191 },
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

const steps = [
  { t: "Llamada de diagnóstico", d: "30 minutos, sin costo. Nos cuentas el problema; nosotros preguntamos." },
  { t: "Calificación", d: "Revisamos si el proyecto encaja con lo que hacemos. Si no, te lo decimos." },
  { t: "Propuesta en 72 h", d: "Problema, solución, alcance, precio, tiempos y lo que no incluye." },
  { t: "Validación técnica", d: "El técnico que lo va a construir revisa la propuesta antes de enviártela." },
  { t: "Cierre", d: "Contrato y 50% del setup para arrancar." },
  { t: "Kickoff", d: "Con un responsable de tu lado nombrado por escrito." },
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

function HeroPanel() {
  const steps = [
    { w: "70%", h: "74%", c: "#c9d6fb", d: "0s" },
    { w: "56%", h: "62%", c: "#8faaf6", d: ".12s" },
    { w: "44%", h: "50%", c: "#5379ee", d: ".24s" },
    { w: "32%", h: "38%", c: "#2a55e6", d: ".36s" },
    { w: "20%", h: "26%", c: "#1238c4", d: ".48s" },
  ];
  return (
    <div aria-hidden className="ribbed aspect-[4/5] w-full rounded-md sm:aspect-[5/5] lg:aspect-[4/4.2]">
      {steps.map((s, i) => (
        <div
          key={i}
          className="step"
          style={{ width: s.w, height: s.h, background: s.c, animationDelay: s.d }}
        />
      ))}
      <div className="bar" style={{ left: "0%", width: "38%", top: "54%" }} />
      <div className="bar" style={{ left: "22%", width: "30%", top: "68%" }} />
      <div className="bar" style={{ left: "44%", width: "24%", top: "80%" }} />
      <div className="glass" />
      <div className="lines" />
    </div>
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
          <a href="#" className="flex items-baseline gap-1.5 text-[17px] no-underline">
            <span className="font-semibold tracking-[-0.02em]">Dexen</span>
            <span className="text-ink-3">/ Consulting</span>
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
        {/* Hero */}
        <section className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-16 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
          <div className="flex flex-col">
            <h1 className="text-[clamp(2.6rem,6.2vw,4.9rem)] font-light leading-[1.02] tracking-[-0.035em]">
              Sistemas que operan solos en tu empresa
            </h1>
            <div className="mt-10 lg:mt-auto lg:pt-16">
              <p className="max-w-[36ch] text-[19px] leading-[1.45] text-ink-2">
                Instalamos agentes de IA, contenido automático, software y ERP. Después los mantenemos corriendo y respondemos cuando algo se rompe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex min-w-[11rem] items-center justify-center gap-2 bg-blue px-6 py-3.5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-blue-deep"
                >
                  Pedir diagnóstico <Arrow />
                </a>
                <a
                  href="#proceso"
                  className="inline-flex min-w-[11rem] items-center justify-center border border-blue/40 px-6 py-3.5 text-[15px] font-medium text-blue no-underline transition-colors hover:border-blue hover:bg-blue/[0.04]"
                >
                  Cómo trabajamos
                </a>
              </div>
            </div>
          </div>
          <HeroPanel />
        </section>

        {/* Datos del proceso */}
        <section aria-label="Cómo es trabajar con Dexen" className="border-y border-line">
          <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-10 px-4 py-14 sm:px-8 md:grid-cols-4 md:py-20">
            {facts.map((f) => (
              <div key={f.value} className="pr-4 text-center md:px-6">
                <dt className="sr-only">{f.label}</dt>
                <dd className="tabular text-[clamp(2.4rem,4.6vw,3.6rem)] font-light leading-none tracking-[-0.03em]">
                  {f.value}
                </dd>
                <dd className="mx-auto mt-3 max-w-[18ch] text-[15px] leading-snug text-ink-2">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Logos */}
        <section aria-labelledby="clientes" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 md:py-20">
          <h2 id="clientes" className="text-center text-[15px] text-ink-3">
            Han trabajado con Dexen
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-8">
            {clients.map((c) => (
              <li key={c.name} className="flex h-12 items-center">
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={c.w}
                    height={c.h}
                    className={`logo-mark h-full w-auto max-w-[130px] object-contain ${c.w === c.h ? "scale-[1.6]" : ""}`}
                  />
                ) : (
                  <span className="logo-mark text-[19px] font-semibold tracking-[-0.02em] text-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ul>
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
        <section id="proceso" aria-labelledby="proceso-t" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 id="proceso-t" className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-[-0.03em]">
              Cómo trabajamos
            </h2>
            <p className="max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:pt-3">
              Primero el diagnóstico. Sin entender el problema no hay cotización.
            </p>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-paper p-7 md:p-9">
                <span className="tabular text-[15px] text-blue">{i + 1}</span>
                <h3 className="mt-6 text-[21px] font-normal tracking-[-0.015em]">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

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
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-10 text-[14px] text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            <span className="font-semibold text-ink">Dexen</span> / Consulting · México
          </p>
          <p className="tabular">© {new Date().getFullYear()} Dexen Consulting</p>
        </div>
      </footer>
    </>
  );
}
