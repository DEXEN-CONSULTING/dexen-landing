// Marca de Dexen: engrane de 8 dientes con centro abierto, en un viewBox de 24.
// Se genera, no se dibuja a mano, para que los dientes queden exactos.
export const GEAR_TEETH = 8;
export const GEAR_R_OUT = 11;
export const GEAR_R_IN = 8.4;

export const GEAR_PATH = (() => {
  const c = 12;
  const pts: string[] = [];
  for (let i = 0; i < GEAR_TEETH; i++) {
    const a = (i / GEAR_TEETH) * Math.PI * 2;
    const step = (Math.PI * 2) / GEAR_TEETH;
    const angs = [a - step * 0.32, a - step * 0.18, a + step * 0.18, a + step * 0.32];
    const rads = [GEAR_R_IN, GEAR_R_OUT, GEAR_R_OUT, GEAR_R_IN];
    angs.forEach((t, k) =>
      pts.push(`${(c + rads[k] * Math.cos(t)).toFixed(2)} ${(c + rads[k] * Math.sin(t)).toFixed(2)}`),
    );
  }
  const hole = 3.6;
  return `M${pts.join(" L")} Z M${c + hole} ${c} A${hole} ${hole} 0 1 0 ${c - hole} ${c} A${hole} ${hole} 0 1 0 ${c + hole} ${c} Z`;
})();
