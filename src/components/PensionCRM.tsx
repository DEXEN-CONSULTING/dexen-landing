// Recreación del panel y del flujo de Pensión+. Etapas, semáforo y pasos salen del
// código real (repo tulanaya: supabase/migrations/0001_init.sql, lib/review/evaluate.ts,
// lib/pipeline/plan.ts). Los nombres y montos de las filas son de ejemplo.
const stages = ["Nuevo", "Calificado", "Contrato", "Firmado", "Dispersado", "Pagado"];

const rows = [
  { n: "M. Hernández", st: "Firmado", rv: "Sale solo", c: "bg-emerald-500" },
  { n: "J. Ramírez", st: "Calificado", rv: "Revisar", c: "bg-amber-400" },
  { n: "L. Torres", st: "Contrato", rv: "Sale solo", c: "bg-emerald-500" },
  { n: "A. Gómez", st: "Nuevo", rv: "No enviar", c: "bg-red-500" },
];

export function PensionDashboard() {
  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-white text-[11px] shadow-[0_24px_60px_-36px_rgba(10,31,110,0.45)]">
      <div className="flex items-center justify-between border-b border-ink/10 bg-ink px-3 py-2 text-white">
        <span>Pensión+ · Panel de asesores</span>
        <span className="text-white/60">Leads</span>
      </div>
      <div className="flex flex-wrap gap-1 border-b border-line px-3 py-2">
        {stages.map((s, i) => (
          <span key={s} className={`rounded-full px-2 py-0.5 ${i === 1 ? "bg-blue text-white" : "bg-paper-2 text-ink-2"}`}>
            {s}
          </span>
        ))}
      </div>
      <div className="mx-3 mt-2 rounded border border-amber-300 bg-amber-50 px-2 py-1 text-amber-900">Casos esperan tu revisión</div>
      <table className="mt-1 w-full">
        <thead className="text-left text-ink-3">
          <tr>
            <th className="px-3 py-1.5 font-normal">Nombre</th>
            <th className="px-2 py-1.5 font-normal">Estatus</th>
            <th className="px-3 py-1.5 font-normal">Revisión</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.n} className="border-t border-line">
              <td className="px-3 py-1.5 text-ink">{r.n}</td>
              <td className="px-2 py-1.5 text-ink-2">{r.st}</td>
              <td className="px-3 py-1.5">
                <span className="inline-flex items-center gap-1.5 text-ink-2">
                  <span className={`size-1.5 rounded-full ${r.c}`} />
                  {r.rv}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const steps = ["Contacto", "Identificación", "Situación laboral", "Evaluación"];

export function PensionFlow() {
  return (
    <div className="rounded-lg border border-ink/10 bg-white p-4 text-[11px] shadow-[0_24px_60px_-36px_rgba(10,31,110,0.45)]">
      <p className="text-ink-3">Flujo de calificación</p>
      <ol className="mt-3 flex flex-wrap items-center gap-1.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            <span className="rounded border border-ink/15 bg-paper-2 px-2 py-1 text-ink">{s}</span>
            {i < steps.length - 1 && <span aria-hidden className="text-ink-3">→</span>}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded border border-red-200 bg-red-50 px-2 py-1.5 text-red-900">
          <b className="font-medium">No califica</b>
          <br />
          Menos de 46 días o retiro reciente
        </div>
        <div className="rounded border border-ink/15 bg-paper-2 px-2 py-1.5 text-ink">
          <b className="font-medium">Califica</b> → semáforo
          <br />
          <span className="text-emerald-700">Verde</span> sale solo · <span className="text-amber-700">Ámbar/Rojo</span> asesor
        </div>
      </div>
      <ol className="mt-2 flex flex-wrap items-center gap-1.5">
        {["Contrato", "Firma por WhatsApp", "Checklist", "Pagado"].map((s, i, a) => (
          <li key={s} className="flex items-center gap-1.5">
            <span className={`rounded px-2 py-1 ${i === a.length - 1 ? "bg-blue text-white" : "border border-ink/15 bg-paper-2 text-ink"}`}>{s}</span>
            {i < a.length - 1 && <span aria-hidden className="text-ink-3">→</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}
