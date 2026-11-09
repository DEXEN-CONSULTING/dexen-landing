import Link from "next/link";
import { site } from "@/site";

export const responsable = site.legal.razonSocial || site.name;

// Canal para ARCO y avisos: correo si existe; si no, el formulario.
export function Canal() {
  return site.email ? (
    <a href={`mailto:${site.email}`}>{site.email}</a>
  ) : (
    <>
      el <Link href="/#contacto">formulario de contacto</Link> de este sitio
    </>
  );
}
