"use client";

import { useEffect, useRef } from "react";
import ServiceVisual, { type ServiceKind } from "./ServiceVisual";

export type Service = { title: string; body: string; limit: string | null; kind: ServiceKind };

// Tarjetas que se apilan al hacer scroll: cada una es sticky y la siguiente se le encima.
// El scroll es el nativo (sin scroll-jacking); sólo se calcula cuánto quedó tapada cada
// tarjeta para encogerla y oscurecerla un poco. Con reduced-motion se queda la pila sin efecto.
const HEADER = 80; // px: header sticky (h-16) + aire
const STEP = 18; // px: cuánto asoma el borde de cada tarjeta tapada

export default function ServiceStack({ services }: { services: Service[] }) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>(".stack-item"));
    const cards = items.map((li) => li.querySelector<HTMLElement>("[data-card]")!);
    let tops: number[] = [];
    let raf = 0;

    // Si una tarjeta no cabe en pantalla (móvil), se pega por abajo: top negativo,
    // así se lee completa antes de que la siguiente la tape.
    const layout = () => {
      const vh = window.innerHeight;
      tops = items.map((li, i) => Math.min(HEADER + i * STEP, vh - li.offsetHeight - 16));
      items.forEach((li, i) => (li.style.top = `${tops[i]}px`));
    };

    const update = () => {
      raf = 0;
      cards.forEach((card, i) => {
        const next = items[i + 1];
        if (!next) return;
        const dist = next.getBoundingClientRect().top - tops[i + 1];
        const p = Math.min(1, Math.max(0, 1 - dist / card.offsetHeight));
        card.style.setProperty("--covered", p.toFixed(4));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      layout();
      onScroll();
    };
    layout();
    update();
    const ro = new ResizeObserver(onResize);
    items.forEach((li) => ro.observe(li));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol ref={listRef} className="mt-14 flex flex-col gap-8 pb-4 md:gap-10">
      {services.map((s, i) => (
        <li key={s.title} className="stack-item" style={{ top: HEADER + i * STEP }}>
          <div
            data-card
            className="stack-card grid items-center gap-10 rounded-xl border border-ink/10 bg-white px-5 py-10 shadow-[0_-10px_40px_-24px_rgba(10,31,110,0.35)] sm:px-8 md:grid-cols-[1fr_1.15fr] md:gap-16 md:px-12 md:py-14"
          >
            <div className="max-w-[52ch]">
              <p className="tabular text-[13px] text-ink-3">
                {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[26px] font-normal leading-tight tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed">{s.body}</p>
              {s.limit && <p className="mt-3 text-[15px] leading-relaxed text-ink-3">{s.limit}</p>}
            </div>
            <div className="px-2 py-4 sm:px-4">
              <ServiceVisual kind={s.kind} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
