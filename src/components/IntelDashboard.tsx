"use client";

import type { CSSProperties, ReactNode } from "react";
import { useTick } from "./useTick";

// Dashboard ilustrativo. TODOS los números son simulados y la UI lo dice
// ("Datos simulados"): Dexen no publica cifras de clientes (PRODUCT.md).

const feedPool = [
  { ch: "WhatsApp", t: "Agente agendó una cita para el jueves 16:30" },
  { ch: "Instagram", t: "Post del día publicado" },
  { ch: "Odoo", t: "Factura timbrada y enviada al cliente" },
  { ch: "Web", t: "Lead calificado entregado a ventas" },
  { ch: "Correo", t: "Recordatorio de pago enviado" },
  { ch: "Voz", t: "Llamada atendida, resumen en el CRM" },
  { ch: "Odoo", t: "Inventario bajo mínimo en 3 productos" },
  { ch: "Blog", t: "Artículo programado para mañana 9:00" },
];

const channels = ["WhatsApp", "Instagram", "Web", "Correo", "Voz"];

function wave(k: number) {
  return 52 + 16 * Math.sin(k / 2.4) + 9 * Math.sin(k / 1.05 + 1) + 6 * Math.cos(k / 4.2);
}

function series(tick: number, n = 26) {
  return Array.from({ length: n }, (_, i) => wave(tick + i));
}

function linePath(pts: number[], w: number, h: number) {
  const max = 90;
  const min = 15;
  const step = w / (pts.length - 1);
  return pts
    .map((v, i) => `${i ? "L" : "M"}${(i * step).toFixed(1)},${(h - ((v - min) / (max - min)) * h).toFixed(1)}`)
    .join(" ");
}

function Spark({ seed, className = "" }: { seed: number; className?: string }) {
  const pts = Array.from({ length: 12 }, (_, i) => wave(seed + i * 1.7));
  return (
    <svg viewBox="0 0 100 28" className={`h-7 w-full ${className}`} aria-hidden preserveAspectRatio="none">
      <path d={linePath(pts, 100, 28)} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function FloatCard({
  className,
  delay,
  children,
}: {
  className: string;
  delay: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`float-card rounded-md border border-ink/10 bg-white p-4 text-ink shadow-[0_18px_40px_-18px_rgba(10,31,110,0.55)] ${className}`}
      style={{ "--float-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="text-[12px] text-ink-3">{children}</p>;
}

export default function IntelDashboard() {
  const { ref, tick } = useTick(2200, 6);

  const pts = series(tick);
  const W = 560;
  const H = 150;
  const line = linePath(pts, W, H);
  const area = `${line} L${W},${H} L0,${H} Z`;

  const kpis = [
    { k: "Mensajes atendidos hoy", v: (1284 + tick * 3).toLocaleString("es-MX") },
    { k: "Respuesta mediana", v: ["9 s", "11 s", "8 s", "10 s"][tick % 4] },
    { k: "Leads calificados", v: String(37 + Math.floor(tick / 2)) },
    { k: "Publicaciones al día", v: "7 / 7" },
  ];

  const feed = Array.from({ length: 4 }, (_, i) => {
    const idx = (((tick - i) % feedPool.length) + feedPool.length) % feedPool.length;
    return { ...feedPool[idx], key: tick - i, mins: i === 0 ? "ahora" : `hace ${i * 2} min` };
  });

  return (
    <div ref={ref} className="grid grid-cols-2 items-stretch gap-3 xl:grid-cols-[220px_minmax(0,1fr)_220px] xl:items-center xl:gap-x-6 xl:gap-y-5">
      {/* Panel central */}
      <div className="relative z-10 col-span-2 mb-3 overflow-hidden xl:col-span-1 xl:col-start-2 xl:row-span-3 xl:row-start-1 xl:mb-0 rounded-lg border border-white/12 bg-[#0d2585] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-[13px] text-white/70">Operación · tu empresa</span>
          </div>
          <div className="flex items-center gap-3 text-[12px]">
            <span className="hidden rounded-sm border border-white/20 px-2 py-0.5 text-white/60 sm:inline">Datos simulados</span>
            <span className="flex items-center gap-1.5 text-[#8ff0b5]">
              <span className="live-dot h-2 w-2 rounded-full bg-[#4ade80]" />
              En vivo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.k} className="bg-[#0d2585] px-5 py-4">
              <p className="text-[12px] text-white/55">{k.k}</p>
              <p key={k.v} className="tick-in tabular mt-1 text-[24px] font-light tracking-[-0.02em] text-white">
                {k.v}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-[1.6fr_1fr]">
          <div className="bg-[#0d2585] px-5 pb-5 pt-4">
            <div className="flex items-baseline justify-between">
              <p className="text-[13px] text-white/80">Conversaciones por hora</p>
              <p className="text-[12px] text-white/45">últimas 24 h</p>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-[150px] w-full" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="dash-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#5b84ff" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#5b84ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((y) => (
                <line key={y} x1="0" x2={W} y1={H * y} y2={H * y} stroke="rgba(255,255,255,0.08)" />
              ))}
              <path d={area} fill="url(#dash-area)" className="morph" />
              <path d={line} fill="none" stroke="#8eaaff" strokeWidth="2" className="morph draw" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-5 grid grid-cols-5 items-end gap-3">
              {channels.map((c, i) => {
                const h = 30 + 60 * Math.abs(Math.sin((tick + i * 2.1) / 2.7));
                return (
                  <div key={c} className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-full items-end">
                      <div className="bar-grow w-full rounded-sm bg-[#5b84ff]" style={{ height: `${h}%` }} />
                    </div>
                    <span className="text-[11px] text-white/55">{c}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#0d2585] px-5 pb-5 pt-4">
            <p className="text-[13px] text-white/80">Actividad</p>
            <ul className="mt-3 space-y-2.5" aria-live="off">
              {feed.map((f, i) => (
                <li
                  key={f.key}
                  className={`${i === 0 ? "feed-in" : ""} rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5`}
                  style={{ opacity: 1 - i * 0.18 }}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#8eaaff]">{f.ch}</span>
                    <span className="text-white/40">{f.mins}</span>
                  </div>
                  <p className="mt-0.5 text-[13px] leading-snug text-white/90">{f.t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjetas flotantes: en escritorio flanquean el panel sin taparlo; en móvil, rejilla debajo */}
        <FloatCard delay="0s" className="xl:col-start-1 xl:row-start-1">
          <Label>Leads calificados · semana</Label>
          <p className="tabular mt-1 text-[26px] font-light tracking-[-0.02em]">+{38 + (tick % 5)}</p>
          <Spark seed={tick} className="mt-1 text-blue" />
        </FloatCard>

        <FloatCard delay="-2.2s" className="xl:col-start-1 xl:row-start-2 xl:-mr-3 xl:ml-3">
          <div className="flex items-center gap-2">
            <span className="live-dot h-2 w-2 rounded-full bg-[#22c55e]" />
            <Label>Agente activo</Label>
          </div>
          <p className="mt-1.5 text-[15px] font-medium leading-snug">24/7 en WhatsApp, Instagram y web</p>
        </FloatCard>

        <FloatCard delay="-4s" className="xl:col-start-1 xl:row-start-3">
          <div className="flex items-center gap-2 text-blue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" />
            </svg>
            <span className="text-[12px] font-medium">Hallazgo</span>
          </div>
          <p className="mt-1.5 text-[14px] leading-snug">Martes 19:00 es tu mejor hora para publicar. Ya se reprogramó la semana.</p>
        </FloatCard>

        <FloatCard delay="-1.2s" className="xl:col-start-3 xl:row-start-1">
          <Label>Citas agendadas por el agente</Label>
          <p className="tabular mt-1 text-[26px] font-light tracking-[-0.02em]">{12 + (tick % 4)} hoy</p>
          <p className="text-[12px] text-ink-3">sin que nadie contestara</p>
        </FloatCard>

        <FloatCard delay="-3.1s" className="xl:col-start-3 xl:row-start-2 xl:-ml-3 xl:mr-3">
          <Label>Cobranza</Label>
          <p className="mt-1 text-[15px] font-medium leading-snug">4 recordatorios enviados hoy</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-2">
            <div className="bar-grow h-full rounded-full bg-blue" style={{ width: `${55 + (tick % 4) * 10}%` }} />
          </div>
        </FloatCard>

        <FloatCard delay="-5s" className="xl:col-start-3 xl:row-start-3">
          <div className="flex items-center gap-2 text-[#b45309]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
            </svg>
            <span className="text-[12px] font-medium">Alerta de inventario</span>
          </div>
          <p className="mt-1.5 text-[14px] leading-snug">3 productos bajo mínimo. Orden de compra sugerida en Odoo.</p>
        </FloatCard>
    </div>
  );
}
