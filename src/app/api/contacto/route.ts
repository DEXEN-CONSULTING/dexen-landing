import { NextResponse } from "next/server";

// Envío por Resend (https://resend.com). Variables en Vercel:
//   RESEND_API_KEY · CONTACT_TO (destino [POR CONFIRMAR]) · CONTACT_FROM (remitente de un dominio verificado)
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const str = (k: string, max: number) => String(body[k] ?? "").trim().slice(0, max);
  if (str("sitio", 200)) return NextResponse.json({ ok: true }); // honeypot

  const nombre = str("nombre", 120);
  const empresa = str("empresa", 160);
  const contacto = str("contacto", 160);
  const problema = str("problema", 3000);
  if (!nombre || !empresa || !contacto || !problema) {
    return NextResponse.json({ error: "Faltan campos por llenar." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) {
    console.error("contacto: faltan RESEND_API_KEY / CONTACT_TO / CONTACT_FROM");
    return NextResponse.json({ error: "El formulario todavía no está conectado." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Diagnóstico: ${empresa} (${nombre})`,
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nContacto: ${contacto}\n\nProblema:\n${problema}\n`,
    }),
  });
  if (!res.ok) {
    console.error("contacto: resend", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "No se pudo enviar." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
