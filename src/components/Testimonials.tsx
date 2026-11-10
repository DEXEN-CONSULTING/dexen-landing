// Reseñas de directivos de clientes. SOLO citas reales, con permiso de la persona
// para publicar nombre, cargo y texto. Una entrada sin `quote` es un hueco: en
// desarrollo se ve como pendiente y en producción NO se renderiza.
type Review = { company: string; sector: string; person?: string; role?: string; quote?: string };

const reviews: Review[] = [
  { company: "Melaque West Coast", sector: "Bienes raíces" },
  { company: "UDGÅ Capital", sector: "Desarrollo inmobiliario" },
  { company: "Heredabienes", sector: "Escrituración y sucesiones" },
  { company: "Pensión+", sector: "Afore y pensiones" },
];

const isDev = process.env.NODE_ENV !== "production";

// En producción la sección y sus links (nav y footer) solo existen si hay al menos una cita real.
export const showReviews = isDev || reviews.some((r) => r.quote);

function initials(s: string) {
  return s
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const shown = reviews.filter((r) => r.quote || isDev);
  if (!shown.length) return null;
  return (
    <ul className="mt-14 grid gap-6 md:grid-cols-2">
      {shown.map((r) => {
        const pending = !r.quote;
        return (
          <li key={r.company}>
            <figure
              className={`flex h-full flex-col rounded-xl border bg-white p-7 md:p-9 ${
                pending ? "border-dashed border-ink/25" : "border-ink/10 shadow-[0_24px_60px_-40px_rgba(10,31,110,0.45)]"
              }`}
            >
              <svg aria-hidden width="28" height="22" viewBox="0 0 28 22" className="text-blue">
                <path d="M0 22V12.5C0 5.6 3.7 1.4 11 0l1.3 3C8.2 4.3 6.4 6.8 6.2 10H11v12H0Zm16 0V12.5C16 5.6 19.7 1.4 27 0l1 3c-4 1.3-5.8 3.8-6 7h5v12H16Z" fill="currentColor" />
              </svg>
              <blockquote className={`mt-5 flex-1 text-[19px] leading-relaxed ${pending ? "text-ink-3" : "text-ink"}`}>
                {pending ? "[Pendiente: cita real del directivo, con su permiso]" : `“${r.quote}”`}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-paper-2 text-[14px] text-ink-2">
                  {initials(r.person ?? r.company)}
                </span>
                <span>
                  <span className="block text-[16px] text-ink">{r.person ?? "[Nombre]"}</span>
                  <span className="block text-[14px] text-ink-3">
                    {r.role ?? "[Cargo]"} · {r.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
