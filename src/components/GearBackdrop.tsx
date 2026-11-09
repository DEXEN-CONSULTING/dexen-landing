"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { GEAR_PATH, GEAR_TEETH } from "./gear";

// Campo de engranes que embonan entre sí: tablero de ajedrez donde cada engrane gira
// al revés de sus vecinos y va desfasado medio diente, así los dientes caen en los huecos.
const S = 4.4; // escala del engrane (viewBox 24 -> ~97 px)
const D = 20.4 * S; // distancia entre centros: radio exterior + raíz + holgura
const COLS = 18;
const ROWS = 14;
const W = COLS * D;
const H = ROWS * D;
const HALF = 180 / GEAR_TEETH;

function GearSvg({ svgRef }: { svgRef: React.RefObject<SVGSVGElement | null> }) {
  const uses: ReactNode[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      uses.push(
        <use
          key={`${r}-${c}`}
          href={(r + c) % 2 ? "#gear-b" : "#gear-a"}
          transform={`translate(${(c + 0.5) * D} ${(r + 0.5) * D}) scale(${S})`}
        />,
      );
    }
  }
  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full text-blue"
      aria-hidden
    >
      <defs>
        <g id="gear-a">
          <path d={GEAR_PATH} transform="translate(-12 -12)" fill="currentColor" fillRule="evenodd" />
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite" />
        </g>
        <g id="gear-b">
          <path d={GEAR_PATH} transform="translate(-12 -12)" fill="currentColor" fillRule="evenodd" />
          <animateTransform attributeName="transform" type="rotate" from={HALF} to={HALF - 360} dur="24s" repeatCount="indefinite" />
        </g>
      </defs>
      {uses}
    </svg>
  );
}

// Fondo de engranes siempre visible y girando. Con reduced-motion queda quieto.
export default function GearBackdrop({ children, className = "" }: { children: ReactNode; className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) svgRef.current?.pauseAnimations();
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="gear-field pointer-events-none absolute inset-0">
        <GearSvg svgRef={svgRef} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
