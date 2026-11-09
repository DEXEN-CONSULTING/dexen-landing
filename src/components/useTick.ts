"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const RM = "(prefers-reduced-motion: reduce)";
function subscribe(cb: () => void) {
  const mq = window.matchMedia(RM);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

// Contador que avanza cada `ms` sólo mientras el elemento está en pantalla.
// Con prefers-reduced-motion se queda fijo en `still` (un estado final legible).
export function useTick(ms: number, still = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(still);
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(RM).matches,
    () => false,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduced) return;
    const id = setInterval(() => setTick((t) => t + 1), ms);
    return () => clearInterval(id);
  }, [visible, reduced, ms]);

  return { ref, tick: reduced ? still : tick, visible };
}
