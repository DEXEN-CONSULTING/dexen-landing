import type { ReactNode } from "react";

type Step = { t: string; d: string; icon: ReactNode };

const ic = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const steps: Step[] = [
  {
    t: "Llamada de diagnóstico",
    d: "30 minutos, sin costo. Nos cuentas el problema; nosotros preguntamos.",
    icon: (
      <svg {...ic}>
        <path d="M5 3.5h3.2l1.6 4-2 1.3a11 11 0 0 0 7.4 7.4l1.3-2 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5Z" />
      </svg>
    ),
  },
  {
    t: "Calificación",
    d: "Revisamos si el proyecto encaja con lo que hacemos. Si no, te lo decimos.",
    icon: (
      <svg {...ic}>
        <path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8z" />
      </svg>
    ),
  },
  {
    t: "Propuesta en 72 h",
    d: "Problema, solución, alcance, precio, tiempos y lo que no incluye.",
    icon: (
      <svg {...ic}>
        <path d="M6 2.5h8.5l4 4v15H6z" />
        <path d="M14.5 2.5v4h4M9 11h6.5M9 14.5h6.5M9 18h4" />
      </svg>
    ),
  },
  {
    t: "Validación técnica",
    d: "El técnico que lo va a construir revisa la propuesta antes de enviártela.",
    icon: (
      <svg {...ic}>
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />
      </svg>
    ),
  },
  {
    t: "Cierre",
    d: "Contrato y 50% del setup para arrancar.",
    icon: (
      <svg {...ic}>
        <path d="M14.5 4.5l5 5L9 20H4v-5z" />
        <path d="M12.5 6.5l5 5" />
      </svg>
    ),
  },
  {
    t: "Kickoff",
    d: "Con un responsable de tu lado nombrado por escrito.",
    icon: (
      <svg {...ic}>
        <path d="M5 21V3.5M5 4h11l-2.5 4 2.5 4H5" />
      </svg>
    ),
  },
];

export default function ProcessSteps({ children }: { children: ReactNode }) {
  return (
    <section id="proceso" aria-labelledby="proceso-t">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-28">
        {children}
        <ol className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="group border-b border-r border-line bg-paper p-7 md:p-9">
              <div className="flex items-start justify-between">
                <span className="text-blue transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:scale-110">
                  {s.icon}
                </span>
                <span className="tabular text-[15px] text-blue">{i + 1}</span>
              </div>
              <h3 className="mt-6 text-[21px] font-normal tracking-[-0.015em]">{s.t}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
