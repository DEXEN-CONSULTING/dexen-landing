import Link from "next/link";
import { GEAR_PATH } from "./gear";
import { site } from "@/site";

export function DexenMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={GEAR_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#inteligencia", label: "Inteligencia" },
  { href: "/#casos", label: "Casos" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#compromisos", label: "Compromisos" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="Dexen, inicio" className="flex items-center gap-2.5 text-[24px] no-underline">
          <DexenMark className="h-[28px] w-[28px] text-blue" />
          <span className="font-semibold tracking-[-0.02em]">Dexen</span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 text-[14px] md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-ink-2 no-underline transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contacto"
          className="border border-ink px-4 py-2 text-[14px] font-medium no-underline transition-colors hover:bg-ink hover:text-paper"
        >
          Pedir diagnóstico
        </Link>
      </div>
    </header>
  );
}

const cols = [
  {
    t: "Servicios",
    links: [
      { href: "/#servicios", l: "Contenido automático" },
      { href: "/#servicios", l: "Agentes de IA y automatización" },
      { href: "/#servicios", l: "Software, web y ERP" },
      { href: "/#servicios", l: "Marca y desarrollo creativo" },
    ],
  },
  {
    t: "Dexen",
    links: [
      { href: "/#inteligencia", l: "Inteligencia operativa" },
      { href: "/#proceso", l: "Cómo trabajamos" },
      { href: "/#compromisos", l: "Lo que decimos antes de firmar" },
      { href: "/#contacto", l: "Contacto" },
    ],
  },
  {
    t: "Legal",
    links: [
      { href: "/terminos", l: "Términos y condiciones" },
      { href: "/privacidad", l: "Aviso de privacidad" },
      { href: "/privacidad#derechos-arco", l: "Derechos ARCO" },
      { href: "/privacidad#cookies", l: "Cookies" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-blue-ink text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-white/15 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="text-[14px] text-[#a9b6ee]">¿Algo de tu operación se hace a mano todos los días?</p>
            <p className="mt-3 max-w-[18ch] text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.04] tracking-[-0.035em]">
              Eso es lo que automatizamos.
            </p>
          </div>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 self-start bg-white px-7 py-4 text-[15px] font-medium text-blue-ink no-underline transition-colors hover:bg-[#e9eefc] md:self-auto"
          >
            Pedir diagnóstico
            <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>

        {/* Columnas */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-[22px] text-white no-underline">
              <DexenMark className="h-6 w-6" />
              <span className="font-semibold tracking-[-0.02em]">Dexen</span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-[#c3cdf5]">
              Sistemas que operan solos: agentes de IA, contenido automático, software y ERP. Los instalamos y los mantenemos corriendo.
            </p>
            <ul className="mt-6 space-y-2 text-[14px] text-[#c3cdf5]">
              <li>Atención en todo México</li>
              <li>Diagnóstico de 30 min sin costo</li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="text-white underline">
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
          {cols.map((c) => (
            <nav key={c.t} aria-label={c.t}>
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#8ea0e6]">{c.t}</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {c.links.map((l) => (
                  <li key={l.l}>
                    <Link href={l.href} className="text-white/85 no-underline transition-colors hover:text-white hover:underline">
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra legal */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-[13px] text-[#a9b6ee] md:flex-row md:items-center md:justify-between">
          <p className="tabular">
            © {year} {site.legal.razonSocial || site.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terminos" className="text-[#a9b6ee] no-underline hover:text-white">
              Términos
            </Link>
            <Link href="/privacidad" className="text-[#a9b6ee] no-underline hover:text-white">
              Privacidad
            </Link>
            <a href="#" className="text-[#a9b6ee] no-underline hover:text-white">
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>

      {/* Marca de agua */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="footer-word mx-auto -mb-[0.2em] max-w-[1200px] px-4 text-center text-[clamp(6rem,24vw,19rem)] font-semibold leading-[0.8] tracking-[-0.06em] sm:px-8">
          Dexen
        </p>
      </div>
    </footer>
  );
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="mx-auto max-w-[760px] px-4 py-16 sm:px-8 md:py-24">
        <p className="text-[14px] text-ink-3">Última actualización: {site.legal.actualizado}</p>
        <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-[1.05] tracking-[-0.035em]">{title}</h1>
        <div className="legal mt-12">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
