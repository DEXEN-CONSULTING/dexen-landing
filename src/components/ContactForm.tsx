"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "No se pudo enviar.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-line bg-paper p-8 md:p-10">
        <p className="text-[24px] font-light tracking-[-0.02em]">Recibimos tu mensaje.</p>
        <p className="mt-3 text-[17px] leading-relaxed text-ink-2">
          Te escribimos para agendar la llamada de diagnóstico.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[15px] text-blue underline underline-offset-4"
        >
          Enviar otro
        </button>
      </div>
    );
  }

  const field =
    "mt-2 block w-full border border-ink/20 bg-paper px-4 py-3.5 text-[17px] text-ink placeholder:text-ink-3 transition-colors hover:border-ink/40 focus:border-blue focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-blue/25 disabled:opacity-60 user-invalid:border-[#c62828]";

  return (
    <form noValidate onSubmit={onSubmit} className="bg-paper p-6 shadow-[0_18px_50px_-24px_rgba(10,31,110,0.28)] md:p-10" aria-describedby="form-nota">
      <fieldset disabled={status === "sending"} className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-[15px] font-medium">
            Nombre
            <input name="nombre" required autoComplete="name" maxLength={120} className={field} />
          </label>
          <label className="block text-[15px] font-medium">
            Empresa
            <input name="empresa" required autoComplete="organization" maxLength={160} className={field} />
          </label>
        </div>
        <label className="block text-[15px] font-medium">
          Correo o WhatsApp
          <input name="contacto" required maxLength={160} placeholder="Para responderte" className={field} />
        </label>
        <label className="block text-[15px] font-medium">
          ¿Qué problema quieres resolver?
          <textarea
            name="problema"
            required
            rows={5}
            maxLength={3000}
            placeholder="Ej.: perdemos mensajes de WhatsApp fuera de horario y nadie les da seguimiento."
            className={`${field} resize-y`}
          />
        </label>
        {/* honeypot */}
        <input type="text" name="sitio" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

        {status === "error" && (
          <p role="alert" className="border border-[#c62828]/30 bg-[#fdf3f3] px-4 py-3 text-[15px] text-[#8e1b1b]">
            {error} Vuelve a intentarlo en un momento.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-5">
          <button
            type="submit"
            className="inline-flex min-w-[13rem] items-center justify-center gap-2 bg-blue px-7 py-4 text-[16px] font-medium text-white transition-colors hover:bg-blue-deep disabled:cursor-wait"
          >
            {status === "sending" ? "Enviando…" : "Pedir diagnóstico"}
          </button>
          <p id="form-nota" className="text-[14px] text-ink-3">
            Sólo usamos tus datos para contestarte. Consulta el{" "}
            <Link href="/privacidad" className="text-ink-2 underline">
              Aviso de privacidad
            </Link>
            .
          </p>
        </div>
      </fieldset>
    </form>
  );
}
