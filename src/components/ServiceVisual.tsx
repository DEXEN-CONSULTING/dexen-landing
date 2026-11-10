"use client";

import type { CSSProperties, ReactNode } from "react";
import { brandFonts } from "./brandFonts";
import { GEAR_PATH } from "./gear";
import { useTick } from "./useTick";

// Mini demos por servicio. Ilustrativas: ningún número es de un cliente.

function Chip({ className, delay = "0s", children }: { className: string; delay?: string; children: ReactNode }) {
  return (
    <div
      className={`float-card absolute z-10 flex items-center gap-1.5 rounded-md border border-ink/10 bg-white px-3 py-2 text-[12px] font-medium text-ink shadow-[0_12px_28px_-14px_rgba(10,31,110,0.5)] ${className}`}
      style={{ "--float-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 18 18" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M3 9.5l3.5 3.5L15 4.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Frame({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="relative h-full rounded-md border border-line bg-white p-4 sm:p-5">
      <p className="text-[12px] text-ink-3">{title}</p>
      {children}
    </div>
  );
}

/* 1. Contenido automático: la parrilla de la semana se llena sola */
type PostKind = "foto" | "reel" | "carrusel" | "blog" | "frase" | "dato" | "producto" | "historia";
const posts: { kind: PostKind; ch: string; at: string }[] = [
  { kind: "foto", ch: "IG", at: "Lun 09:00" },
  { kind: "blog", ch: "Blog", at: "Lun 11:00" },
  { kind: "reel", ch: "TikTok", at: "Mar 19:00" },
  { kind: "carrusel", ch: "IG", at: "Mié 13:00" },
  { kind: "frase", ch: "FB", at: "Jue 10:00" },
  { kind: "dato", ch: "IG", at: "Vie 18:00" },
  { kind: "producto", ch: "FB", at: "Sáb 12:00" },
  { kind: "historia", ch: "IG", at: "Dom 20:00" },
];

function PostArt({ kind }: { kind: PostKind }) {
  switch (kind) {
    case "foto":
      return (
        <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
          <rect width="40" height="40" fill="#dbe4fd" />
          <circle cx="29" cy="12" r="5" fill="#f4c27a" />
          <path d="M0 32 13 18l9 9 6-5 12 11v7H0Z" fill="#1d4ff0" />
          <path d="M0 36 10 28l8 6 9-4 13 6v4H0Z" fill="#0a1f6e" />
        </svg>
      );
    case "reel":
      return (
        <div className="relative h-full w-full bg-[#111214]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,#2a55e6_0,transparent_60%)] opacity-80" />
          <span className="absolute left-1/2 top-1/2 grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90">
            <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden><path d="M2 1l7 4-7 4Z" fill="#111214" /></svg>
          </span>
          <span className="absolute inset-x-1.5 bottom-1.5 h-[3px] rounded-full bg-white/25">
            <span className="block h-full w-2/5 rounded-full bg-white" />
          </span>
        </div>
      );
    case "carrusel":
      return (
        <div className="relative h-full w-full bg-[#f3ece2] p-1.5">
          <div className="absolute right-1 top-1 h-[62%] w-[62%] rounded-[2px] bg-[#e2d5c3]" />
          <div className="absolute left-1.5 top-2 h-[62%] w-[62%] rounded-[2px] bg-white shadow-sm">
            <span className="absolute left-1 top-1.5 h-[3px] w-3/4 rounded-full bg-ink/70" />
            <span className="absolute left-1 top-3 h-[3px] w-1/2 rounded-full bg-ink/30" />
          </div>
          <span className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-[3px]">
            <i className="h-[3px] w-[3px] rounded-full bg-ink/70" />
            <i className="h-[3px] w-[3px] rounded-full bg-ink/25" />
            <i className="h-[3px] w-[3px] rounded-full bg-ink/25" />
          </span>
        </div>
      );
    case "blog":
      return (
        <div className="flex h-full w-full flex-col gap-[3px] bg-white p-1.5">
          <div className="mb-0.5 h-[38%] w-full rounded-[2px] bg-[linear-gradient(135deg,#8faaf6,#1d4ff0)]" />
          <span className="h-[3px] w-full rounded-full bg-ink/75" />
          <span className="h-[3px] w-4/5 rounded-full bg-ink/75" />
          <span className="mt-0.5 h-[2px] w-full rounded-full bg-ink/20" />
          <span className="h-[2px] w-full rounded-full bg-ink/20" />
          <span className="h-[2px] w-2/3 rounded-full bg-ink/20" />
        </div>
      );
    case "frase":
      return (
        <div className="flex h-full w-full flex-col justify-between bg-[#0a1f6e] p-1.5 text-white">
          <span className="font-serif text-[18px] leading-[0.7] text-[#8faaf6]">&ldquo;</span>
          <div className="flex flex-col gap-[3px]">
            <span className="h-[3px] w-full rounded-full bg-white/85" />
            <span className="h-[3px] w-3/4 rounded-full bg-white/85" />
            <span className="mt-0.5 h-[2px] w-1/3 rounded-full bg-white/40" />
          </div>
        </div>
      );
    case "dato":
      return (
        <div className="flex h-full w-full flex-col justify-between bg-[#eef1f6] p-1.5">
          <span className="tabular text-[13px] font-semibold leading-none tracking-[-0.03em] text-blue">72%</span>
          <div className="flex h-[45%] items-end gap-[3px]">
            {[40, 65, 50, 85, 72].map((h, i) => (
              <span key={i} className={`flex-1 rounded-t-[1px] ${i === 3 ? "bg-blue" : "bg-ink/20"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    case "producto":
      return (
        <div className="relative h-full w-full bg-[#f6efe6]">
          <div className="absolute left-1/2 top-[44%] h-[46%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-[#0a1f6e]">
            <span className="absolute inset-x-1 top-1/3 h-[3px] rounded-full bg-white/60" />
          </div>
          <span className="absolute bottom-1.5 left-1.5 rounded-[2px] bg-white px-1 text-[7px] font-semibold leading-[11px] text-ink">$349</span>
        </div>
      );
    case "historia":
      return (
        <div className="relative h-full w-full bg-[linear-gradient(160deg,#1d4ff0,#0a1f6e)]">
          <span className="absolute inset-x-1.5 top-1.5 flex gap-[2px]">
            <i className="h-[2px] flex-1 rounded-full bg-white" />
            <i className="h-[2px] flex-1 rounded-full bg-white/35" />
            <i className="h-[2px] flex-1 rounded-full bg-white/35" />
          </span>
          <span className="absolute bottom-2 left-1/2 h-[9px] w-3/5 -translate-x-1/2 rounded-full border border-white/70" />
        </div>
      );
  }
}

function ContentViz() {
  const { ref, tick } = useTick(900, 8);
  const done = tick % 11; // 0..8 publicados + pausa
  return (
    <div ref={ref} className="relative h-[330px]">
      <Frame title="Parrilla de la semana · se publica sola">
        <div className="mt-3 grid grid-cols-4 gap-2">
          {posts.map((p, i) => {
            const state = i < done ? "done" : i === done ? "now" : "next";
            return (
              <div key={i} className="flex min-w-0 flex-col gap-1">
                <div
                  className={`relative aspect-square overflow-hidden rounded-[4px] border transition-[opacity,filter,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    state === "next" ? "border-dashed border-ink/20 opacity-45 grayscale" : "border-ink/10"
                  } ${state === "now" ? "pulse-ring" : ""}`}
                >
                  <PostArt kind={p.kind} />
                  <span className="absolute left-1 top-1 rounded-[2px] bg-white/90 px-1 text-[8px] font-medium leading-[12px] text-ink">{p.ch}</span>
                  {state === "done" && (
                    <span className="pop-in absolute bottom-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-white text-blue shadow-sm">
                      <Check />
                    </span>
                  )}
                </div>
                <span className={`tabular truncate text-[10px] transition-colors duration-500 ${state === "done" ? "text-ink-2" : "text-ink-3"}`}>
                  {p.at}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between text-[12px]">
          <span className="text-ink-3">Instagram · Facebook · TikTok · Blog</span>
          <span className="tabular text-ink-2">{Math.min(done, 8)} / 8 publicados</span>
        </div>
      </Frame>
      <Chip className="-right-2 -top-4 sm:-right-5" delay="-1s">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#22c55e]" /> Siguiente: {posts[Math.min(done, 7)].at}
      </Chip>
      <Chip className="-bottom-4 left-4" delay="-2.6s">
        <Check className="text-blue" /> Nadie tuvo que apretar «publicar»
      </Chip>
    </div>
  );
}

/* 2. Agentes: conversación que termina en cita, con lo que el agente hizo detrás */
const chat: { from: "c" | "a" | "typing"; t?: string; at?: string }[] = [
  { from: "c", t: "Hola, ¿tienen lugar el jueves?", at: "10:42" },
  { from: "typing" },
  { from: "a", t: "¡Hola, Mariana! Sí. Tengo 11:00 o 16:30 con la Dra. Ruiz. ¿Cuál te acomoda?", at: "10:42" },
  { from: "c", t: "16:30, porfa", at: "10:43" },
  { from: "typing" },
  { from: "a", t: "Listo, quedó el jueves 16:30. Te mando la ubicación y te recuerdo un día antes.", at: "10:43" },
];

// Qué hizo el agente detrás de cada mensaje (se marca cuando la conversación llega a `at`).
const actions = [
  { at: 1, t: "Reconoció a la clienta", d: "Ya estaba en el CRM" },
  { at: 2, t: "Consultó la agenda", d: "2 huecos el jueves" },
  { at: 4, t: "Agendó la cita", d: "Jue 16:30 · Dra. Ruiz" },
  { at: 5, t: "Programó recordatorio", d: "Miércoles 16:30" },
  { at: 5, t: "Avisó a recepción", d: "Sin intervención humana" },
];

function BotAvatar() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8faaf6" />
          <stop offset="1" stopColor="#1d4ff0" />
        </linearGradient>
        <clipPath id="av-clip">
          <circle cx="20" cy="20" r="20" />
        </clipPath>
      </defs>
      <g clipPath="url(#av-clip)">
        <rect width="40" height="40" fill="url(#av-bg)" />
        <path d="M6 42c1.5-8 7-12 14-12s12.5 4 14 12z" fill="#0a1f6e" />
        <path d="M16.5 27h7v4.5a3.5 3.5 0 0 1-7 0z" fill="#e8b996" />
        <path d="M11.5 19c0-7 3.8-10.5 8.5-10.5s8.5 3.5 8.5 10.5v6.5c-1.5 1-3 1.5-4.5 1.5V17h-8v10c-1.5 0-3-.5-4.5-1.5z" fill="#2a1a12" />
        <ellipse cx="20" cy="19.5" rx="6" ry="7" fill="#f1c7a5" />
        <path d="M13.8 17.5c1.5-4 4-5.5 6.2-5.5 2.6 0 5 1.6 6.2 5.2-3.2-.2-7-1.2-9.4-3.4-.8 1.6-1.8 2.8-3 3.7z" fill="#2a1a12" />
        <circle cx="17.6" cy="20" r=".9" fill="#2a1a12" />
        <circle cx="22.4" cy="20" r=".9" fill="#2a1a12" />
        <path d="M18 23.4c1.2.9 2.8.9 4 0" fill="none" stroke="#b5654a" strokeWidth=".9" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function AgentViz() {
  const { ref, tick } = useTick(1400, chat.length + 1);
  const step = tick % (chat.length + 4);
  const shown = chat.slice(0, step + 1).filter((m, i, arr) => m.from !== "typing" || i === arr.length - 1);
  const typing = shown[shown.length - 1]?.from === "typing";
  const booked = step >= chat.length - 1;
  return (
    <div ref={ref} className="relative h-[340px]">
      <div className="grid h-full overflow-hidden rounded-md border border-line bg-white sm:grid-cols-[1.45fr_1fr]">
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
            <BotAvatar />
            <div className="min-w-0 leading-tight">
              <p className="flex items-center gap-1 truncate text-[13px] font-medium text-ink">
                Ana · Clínica Sur
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-blue" aria-hidden>
                  <path d="M8 0l2 1.6 2.5-.2.7 2.4 2.1 1.4-.8 2.4.8 2.4-2.1 1.4-.7 2.4-2.5-.2L8 16l-2-1.6-2.5.2-.7-2.4L.7 10.8 1.5 8.4.7 6l2.1-1.4.7-2.4 2.5.2z" fill="currentColor" />
                  <path d="M5 8.2l2 2 4-4.2" fill="none" stroke="#fff" strokeWidth="1.6" />
                </svg>
              </p>
              <p className="text-[11px] text-ink-3">{typing ? "escribiendo…" : "Asistente de citas · WhatsApp"}</p>
            </div>
          </div>
          <ul className="flex flex-1 flex-col justify-end gap-2 overflow-hidden bg-paper-2/60 px-3 py-3">
            {shown.map((m, i) =>
              m.from === "typing" ? (
                <li key={`t${i}`} className="feed-in flex w-fit gap-1 rounded-lg rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
                  <span className="typing-dot" />
                  <span className="typing-dot" style={{ animationDelay: ".15s" }} />
                  <span className="typing-dot" style={{ animationDelay: ".3s" }} />
                </li>
              ) : (
                <li
                  key={`m${i}-${m.t}`}
                  className={`feed-in max-w-[86%] rounded-lg px-3 py-2 text-[12.5px] leading-snug shadow-sm ${
                    m.from === "c" ? "self-end rounded-br-sm bg-blue text-white" : "rounded-bl-sm bg-white text-ink"
                  }`}
                >
                  {m.t}
                  <span className={`ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[10px] ${m.from === "c" ? "text-white/70" : "text-ink-3"}`}>
                    {m.at}
                    {m.from === "a" && (
                      <svg viewBox="0 0 18 12" className="h-2.5 w-3.5 text-blue" aria-hidden>
                        <path d="M1 6.5l3 3L10 2.5M7 9.5l1 0L15 2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    )}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="hidden flex-col border-l border-line px-4 py-3 sm:flex">
          <p className="text-[11px] text-ink-3">Lo que hizo el agente</p>
          <ol className="mt-3 flex flex-col gap-3">
            {actions.map((a) => {
              const done = step >= a.at;
              return (
                <li key={a.t} className={`flex gap-2 transition-opacity duration-700 ${done ? "opacity-100" : "opacity-35"}`}>
                  <span
                    className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors duration-700 ${
                      done ? "border-blue bg-blue text-white" : "border-ink/20 bg-white text-transparent"
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[12px] font-medium text-ink">{a.t}</span>
                    <span className="block text-[11px] text-ink-3">{a.d}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <Chip className="-right-2 -top-4 sm:-right-5" delay="-0.5s">
        Respondió en 8 s
      </Chip>
      <Chip
        className={`-bottom-4 left-4 transition-opacity duration-500 ${booked ? "opacity-100" : "opacity-40"}`}
        delay="-2s"
      >
        <Check className="text-blue" /> Cita creada en tu agenda
      </Chip>
    </div>
  );
}

/* 3. Software y ERP: documentos que avanzan solos por el flujo */
const stages = ["Cotización", "Pedido", "Factura", "Cobrado"];
const docs = [
  { id: "S0142", amt: "$18,400", off: 0 },
  { id: "S0143", amt: "$6,950", off: 2 },
  { id: "S0144", amt: "$42,100", off: 3 },
];

function ErpViz() {
  const { ref, tick } = useTick(1400, 2);
  return (
    <div ref={ref} className="relative h-[250px]">
      <Frame title="Odoo · flujo de ventas">
        <div className="mt-3 grid grid-cols-4 gap-1.5 text-center text-[11px] text-ink-3">
          {stages.map((s) => (
            <span key={s} className="rounded-sm bg-paper-2 py-1">
              {s}
            </span>
          ))}
        </div>
        <div className="relative mt-3 h-[132px]">
          {docs.map((d, row) => {
            const st = (tick + d.off) % 5; // 0..3 etapas, 4 = sale y reaparece
            const hidden = st === 4;
            const paid = st === 3;
            return (
              <div
                key={d.id}
                className="absolute h-[38px] w-1/4 px-0.5 transition-[left,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ top: row * 46, left: `${Math.min(st, 3) * 25}%`, opacity: hidden ? 0 : 1 }}
              >
                <div
                  className={`flex h-full flex-col justify-center rounded-sm border px-2 text-[11px] leading-tight ${
                    paid ? "border-blue bg-blue text-white" : "border-line bg-white text-ink"
                  }`}
                >
                  <span className="font-medium">{d.id}</span>
                  <span className={`tabular ${paid ? "text-white/80" : "text-ink-3"}`}>{d.amt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Frame>
      <Chip className="-right-2 -top-4 sm:-right-5" delay="-1.4s">
        <Check className="text-blue" /> Factura timbrada
      </Chip>
      <Chip className="-bottom-4 left-4" delay="-3s">
        Inventario y cobranza en un solo lugar
      </Chip>
    </div>
  );
}

/* 4. Marca: la tipografía se prueba en vivo mientras el sitio se arma */
const palette = ["#0a1f6e", "#1d4ff0", "#8faaf6", "#e9eefc", "#111214"];
const BUILD = 6; // bloques del sitio

function Block({ on, className, children }: { on: boolean; className: string; children?: ReactNode }) {
  return (
    <div
      className={`rounded-[3px] border transition-[background-color,border-color,opacity,translate] duration-700 ease-out ${
        on ? "translate-y-0 border-transparent opacity-100" : "translate-y-1 border-dashed border-ink/20 bg-transparent opacity-60"
      } ${className}`}
    >
      <div className={`h-full transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0"}`}>{children}</div>
    </div>
  );
}

function BrandViz() {
  const { ref, tick } = useTick(1000, BUILD + 2);
  const built = tick % (BUILD + 4);
  const fi = Math.floor(tick / 3) % brandFonts.length;
  const f = brandFonts[fi];
  const active = tick % palette.length;
  return (
    <div ref={ref} className="relative h-[340px]">
      <div className="grid h-full gap-3 sm:grid-cols-[1fr_1.35fr]">
        {/* Especimen tipográfico */}
        <div className="hidden flex-col rounded-md border border-line p-4 transition-colors duration-700 sm:flex" style={{ background: f.bg }}>
          <p className="text-[11px] text-ink-3">Tipografía</p>
          <div className="relative mt-2 flex-1">
            {brandFonts.map((x, i) => (
              <div
                key={x.name}
                className={`${x.className} absolute inset-0 flex flex-col justify-center transition-[opacity,translate] duration-700 ease-out ${
                  i === fi ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ color: x.accent }}
              >
                <span className="text-[64px] leading-none" style={{ fontWeight: x.weight, fontStyle: x.italic ? "italic" : "normal" }}>
                  Aa
                </span>
                <span className="mt-2 text-[22px] leading-tight" style={{ fontWeight: x.weight }}>
                  Tu marca
                </span>
              </div>
            ))}
          </div>
          <p className="tabular text-[11px] text-ink-2">
            {f.name} · {f.style}
          </p>
          <div className="mt-3 flex gap-1">
            {palette.map((c, i) => (
              <span
                key={c}
                className="h-6 flex-1 rounded-sm border border-ink/10 transition-transform duration-500"
                style={{ background: c, transform: i === active ? "translateY(-4px)" : "none" }}
              />
            ))}
          </div>
        </div>

        {/* Sitio en construcción */}
        <div className="flex flex-col overflow-hidden rounded-md border border-line bg-white">
          <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-3 py-2">
            <span aria-hidden className="flex gap-1">
              <span className="size-1.5 rounded-full bg-ink/20" />
              <span className="size-1.5 rounded-full bg-ink/20" />
              <span className="size-1.5 rounded-full bg-ink/20" />
            </span>
            <span className="mx-auto rounded bg-white px-2.5 py-0.5 text-[10px] text-ink-3">tumarca.mx</span>
          </div>
          <div className="relative h-[2px] bg-paper-2">
            <div className="h-full bg-blue transition-[width] duration-700 ease-out" style={{ width: `${(Math.min(built, BUILD) / BUILD) * 100}%` }} />
          </div>
          <div className="flex flex-1 flex-col gap-2.5 p-3">
            <Block on={built > 0} className="h-5">
              <div className="flex h-full items-center justify-between px-1">
                <span className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" style={{ color: f.accent }} aria-hidden>
                    <path d={GEAR_PATH} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <span className="h-1.5 w-8 rounded-full bg-ink/70" />
                </span>
                <span className="flex gap-2">
                  <span className="h-1 w-5 rounded-full bg-ink/25" />
                  <span className="h-1 w-5 rounded-full bg-ink/25" />
                  <span className="h-1 w-5 rounded-full bg-ink/25" />
                </span>
              </div>
            </Block>
            <div className="grid grid-cols-[1.2fr_1fr] gap-2.5">
              <div className="flex flex-col gap-2">
                <Block on={built > 1} className="h-[52px]">
                  <div className="relative h-full">
                    {brandFonts.map((x, i) => (
                      <span
                        key={x.name}
                        className={`${x.className} absolute inset-0 text-[19px] leading-[1.05] transition-opacity duration-700 ${i === fi ? "opacity-100" : "opacity-0"}`}
                        style={{ color: x.accent, fontWeight: x.weight, fontStyle: x.italic ? "italic" : "normal" }}
                      >
                        Hecho a tu medida
                      </span>
                    ))}
                  </div>
                </Block>
                <Block on={built > 2} className="h-6">
                  <div className="flex h-full flex-col justify-center gap-1">
                    <span className="h-1 w-full rounded-full bg-ink/20" />
                    <span className="h-1 w-3/4 rounded-full bg-ink/20" />
                  </div>
                </Block>
                <Block on={built > 3} className="h-6">
                  <div className="flex h-full items-center gap-1.5">
                    <span className="h-full w-16 rounded-[3px] transition-colors duration-700" style={{ background: f.accent }} />
                    <span className="h-full w-12 rounded-[3px] border border-ink/25" />
                  </div>
                </Block>
              </div>
              <Block on={built > 4} className="h-full min-h-[96px]">
                <div className="h-full rounded-[3px] transition-[background] duration-700" style={{ background: `linear-gradient(140deg, ${f.bg}, ${f.accent})` }} />
              </Block>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <Block key={i} on={built > 5} className="h-[54px]">
                  <div className="flex h-full flex-col gap-1 rounded-[3px] bg-paper-2 p-1.5">
                    <span className="h-5 rounded-sm transition-colors duration-700" style={{ background: i === 1 ? f.accent : f.bg }} />
                    <span className="h-1 w-3/4 rounded-full bg-ink/25" />
                    <span className="h-1 w-1/2 rounded-full bg-ink/15" />
                  </div>
                </Block>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Chip className="-right-2 -top-4 sm:-right-5" delay="-1s">
        {built >= BUILD ? (
          <>
            <Check className="text-blue" /> Sitio listo
          </>
        ) : (
          <>Construyendo · {Math.min(built, BUILD)}/{BUILD}</>
        )}
      </Chip>
      <Chip className="-bottom-4 left-4" delay="-2.4s">
        <Check className="text-blue" /> Una sola empresa en todos lados
      </Chip>
    </div>
  );
}

export type ServiceKind = "contenido" | "agentes" | "erp" | "marca";

export default function ServiceVisual({ kind }: { kind: ServiceKind }) {
  return (
    <div aria-hidden className="select-none">
      {kind === "contenido" && <ContentViz />}
      {kind === "agentes" && <AgentViz />}
      {kind === "erp" && <ErpViz />}
      {kind === "marca" && <BrandViz />}
    </div>
  );
}
