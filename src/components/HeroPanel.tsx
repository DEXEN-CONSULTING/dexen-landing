"use client";

import { useRef, type CSSProperties } from "react";

const steps = [
  { w: "70%", h: "74%", c: "#c9d6fb", d: "0s" },
  { w: "56%", h: "62%", c: "#8faaf6", d: ".12s" },
  { w: "44%", h: "50%", c: "#5379ee", d: ".24s" },
  { w: "32%", h: "38%", c: "#2a55e6", d: ".36s" },
  { w: "20%", h: "26%", c: "#1238c4", d: ".48s" },
];
// Delay negativo: al cargar ya van a medio camino, no entran todas juntas.
const bars = [
  { w: "38%", top: "54%", dur: "11s", delay: "-7s" },
  { w: "30%", top: "68%", dur: "8s", delay: "-2s" },
  { w: "24%", top: "80%", dur: "13s", delay: "-10s" },
];

// Hover: una luz detrás del vidrio sigue al cursor, los bloques se desplazan en
// paralaje según su profundidad y las tareas (barras) se aceleran.
export default function HeroPanel() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", ((e.clientX - r.left) / r.width).toFixed(3));
    el.style.setProperty("--py", ((e.clientY - r.top) / r.height).toFixed(3));
  }

  function setRate(rate: number) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.querySelectorAll(".bar").forEach((b) => b.getAnimations().forEach((a) => (a.playbackRate = rate)));
  }

  return (
    <div
      ref={ref}
      aria-hidden
      onPointerMove={onMove}
      onPointerEnter={() => setRate(3)}
      onPointerLeave={() => {
        setRate(1);
        ref.current?.style.setProperty("--px", "0.5");
        ref.current?.style.setProperty("--py", "0.5");
      }}
      className="ribbed aspect-[4/5] w-full rounded-md sm:aspect-[5/5] lg:aspect-auto lg:h-full lg:min-h-[380px]"
    >
      {steps.map((s, i) => (
        <div
          key={i}
          className="step"
          style={{ width: `calc(${s.w} + 40px)`, height: `calc(${s.h} + 24px)`, background: s.c, animationDelay: `${s.d}, ${1.6 + i * 1.3}s`, "--depth": i + 1 } as CSSProperties}
        />
      ))}
      {bars.map((b, i) => (
        <div
          key={i}
          className="bar"
          style={{ width: b.w, top: b.top, "--dur": b.dur, "--delay": b.delay } as CSSProperties}
        />
      ))}
      <div className="spot" />
      <div className="glass" />
      <div className="lines" />
    </div>
  );
}
