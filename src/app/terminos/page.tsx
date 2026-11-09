import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/SiteChrome";
import { Canal, responsable } from "@/components/legal";
import { site } from "@/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio de ${site.name}.`,
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>
        Estos términos regulan el uso de este sitio, operado por <strong>{responsable}</strong> («Dexen»). Si no estás de
        acuerdo con ellos, no uses el sitio.
      </p>

      <h2>1. Qué es este sitio</h2>
      <p>
        Un sitio informativo sobre los servicios de Dexen: contenido automático, agentes de IA y automatización, software,
        web, ERP y marca. Desde aquí puedes pedir una llamada de diagnóstico.
      </p>

      <h2>2. La información no es una oferta</h2>
      <p>
        Lo que describe este sitio es informativo. No constituye una oferta vinculante ni una cotización. Cada proyecto se
        contrata con una propuesta y un contrato por escrito, que definen alcance, precio, tiempos y lo que no se incluye.
        Si algo de este sitio contradice una propuesta firmada, manda la propuesta.
      </p>

      <h2>3. Ejemplos y datos ilustrativos</h2>
      <p>
        Los tableros, conversaciones, cifras y flujos que aparecen como demostración usan datos simulados. Muestran cómo se
        ve un sistema funcionando; no son resultados de un cliente ni una promesa de resultados.
      </p>

      <h2>4. Uso permitido</h2>
      <ul>
        <li>No envíes por el formulario información falsa, de terceros sin su permiso ni datos sensibles.</li>
        <li>No intentes vulnerar, saturar ni extraer de forma automatizada el contenido del sitio.</li>
        <li>No uses el sitio para fines ilícitos.</li>
      </ul>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Los textos, el diseño, la marca Dexen y su logotipo son de Dexen o se usan con autorización. Los nombres y logotipos
        de clientes que aparecen en el sitio pertenecen a sus titulares y se muestran con su permiso, sólo como referencia
        de trabajo realizado.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        Procuramos que el sitio esté disponible y que su información sea correcta, pero no garantizamos que esté libre de
        errores o interrupciones. Dexen no responde por daños derivados del uso de la información del sitio fuera de una
        relación contractual. Las garantías y responsabilidades de un servicio contratado son las de su contrato.
      </p>

      <h2>7. Enlaces a terceros</h2>
      <p>Si el sitio enlaza a sitios de terceros, Dexen no controla ni responde por su contenido ni sus prácticas.</p>

      <h2>8. Datos personales</h2>
      <p>
        El tratamiento de los datos que nos compartes se rige por nuestro <Link href="/privacidad">Aviso de privacidad</Link>.
      </p>

      <h2>9. Cambios</h2>
      <p>Podemos actualizar estos términos. La versión vigente es la publicada en esta página con su fecha.</p>

      <h2>10. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
        {site.legal.jurisdiccion
          ? ` Para cualquier controversia, las partes se someten a los tribunales de ${site.legal.jurisdiccion}.`
          : " Para cualquier controversia, las partes se someten a los tribunales competentes en México."}
      </p>

      <h2>11. Contacto</h2>
      <p>
        Dudas sobre estos términos: <Canal />.
      </p>
    </LegalPage>
  );
}
