import Image from "next/image";

// Capturas reales de los sitios en vivo (tomadas 2026-11-10, public/casos/).
// Los textos salen del propio sitio de cada cliente. Sin métricas: PRODUCT.md las marca [POR CONFIRMAR].
type Case = { slug: string; name: string; domain: string; sector: string; body: string };

const cases: Case[] = [
  {
    slug: "daisies",
    name: "Daisies",
    domain: "daisies.mx",
    sector: "Salud digital",
    body: "Sitio de una clínica digital: una membresía que reúne ginecología, nutrición, psicología y más especialidades.",
  },
  {
    slug: "melaque",
    name: "Melaque West Coast",
    domain: "melaquewestcoastrealstate.com",
    sector: "Bienes raíces",
    body: "Catálogo de casas y terrenos en Melaque y la Costa Alegre, en español e inglés.",
  },
  {
    slug: "udga",
    name: "UDGÅ Capital",
    domain: "udgacapital.com.mx",
    sector: "Desarrollo inmobiliario",
    body: "Terrenos en aportación para desarrollos comerciales, industriales, residenciales y verticales en Jalisco.",
  },
  {
    slug: "heredabienes",
    name: "Heredabienes",
    domain: "heredabienes.com.mx",
    sector: "Escrituración y sucesiones",
    body: "Regularización de propiedades, sucesiones y escrituración en Jalisco.",
  },
  {
    slug: "pensionmas",
    name: "Pensión+",
    domain: "pensionmas.com.mx",
    sector: "Afore y pensiones",
    body: "Asesoría de retiro con calculadora de pensión para Ley 73 y Ley 97.",
  },
];

function CaseCard({ c, featured }: { c: Case; featured: boolean }) {
  return (
    <li className={featured ? "md:col-span-2" : undefined}>
      <figure className="group">
        <div className="relative pb-6 pr-6 sm:pb-8 sm:pr-10">
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_24px_60px_-32px_rgba(10,31,110,0.45)]">
            <div className="flex items-center gap-2 border-b border-ink/10 bg-paper-2 px-3 py-2">
              <span aria-hidden className="flex gap-1.5">
                <span className="size-2 rounded-full bg-ink/15" />
                <span className="size-2 rounded-full bg-ink/15" />
                <span className="size-2 rounded-full bg-ink/15" />
              </span>
              <span className="mx-auto truncate rounded bg-white px-3 py-0.5 text-[12px] text-ink-3">{c.domain}</span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={`/casos/${c.slug}-desktop.jpg`}
                alt={`Página de inicio de ${c.name} en escritorio`}
                fill
                sizes={featured ? "(min-width: 1200px) 1100px, 100vw" : "(min-width: 768px) 560px, 100vw"}
                className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div
            className={`absolute bottom-0 right-0 overflow-hidden rounded-[18px] border-[5px] border-ink bg-ink shadow-[0_20px_40px_-20px_rgba(10,31,110,0.6)] ${
              featured ? "w-[22%] max-w-[190px]" : "w-[27%] max-w-[130px]"
            }`}
          >
            <div className="relative aspect-[390/844]">
              <Image
                src={`/casos/${c.slug}-mobile.jpg`}
                alt={`Página de inicio de ${c.name} en celular`}
                fill
                sizes="190px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        <figcaption className="mt-5 max-w-[52ch]">
          <p className="text-[13px] text-ink-3">
            {c.sector} · Sitio web
          </p>
          <h3 className="mt-1 text-[22px] font-normal leading-tight tracking-[-0.02em]">{c.name}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{c.body}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default function CaseStudies() {
  return (
    <ul className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
      {cases.map((c, i) => (
        <CaseCard key={c.slug} c={c} featured={i === 0} />
      ))}
    </ul>
  );
}
