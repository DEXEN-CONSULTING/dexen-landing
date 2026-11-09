import type { Metadata } from "next";
import { LegalPage } from "@/components/SiteChrome";
import { Canal, responsable } from "@/components/legal";
import { site } from "@/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad integral de ${site.name} conforme a la LFPDPPP.`,
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <LegalPage title="Aviso de privacidad">
      <p>
        Este aviso se emite conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
        (LFPDPPP), publicada en el Diario Oficial de la Federación el 20 de marzo de 2025, y su normativa aplicable.
      </p>

      <h2>1. Responsable</h2>
      <p>
        <strong>{responsable}</strong> («Dexen», «nosotros») es responsable del tratamiento de tus datos personales.
        {site.legal.domicilio && <> Domicilio para oír y recibir notificaciones: {site.legal.domicilio}.</>} Contacto en
        materia de privacidad: <Canal />.
      </p>

      <h2>2. Datos que recabamos</h2>
      <p>Sólo los que nos das en el formulario de contacto:</p>
      <ul>
        <li>Nombre.</li>
        <li>Empresa.</li>
        <li>Correo electrónico o teléfono, para responderte.</li>
        <li>La descripción del problema que nos compartes.</li>
      </ul>
      <p>
        No solicitamos datos personales sensibles, financieros ni patrimoniales. Te pedimos no incluirlos en la descripción
        del problema.
      </p>

      <h2>3. Para qué los usamos</h2>
      <p>Finalidades necesarias para la relación que nos solicitas:</p>
      <ul>
        <li>Responder tu mensaje y agendar la llamada de diagnóstico.</li>
        <li>Evaluar si el proyecto encaja con nuestros servicios y, en su caso, preparar una propuesta.</li>
        <li>Dar seguimiento a la conversación comercial que tú iniciaste.</li>
      </ul>
      <p>
        No usamos tus datos para finalidades secundarias: no los vendemos, no los usamos para publicidad de terceros y no
        te suscribimos a listas de correo.
      </p>

      <h2>4. Con quién los compartimos</h2>
      <p>
        No transferimos tus datos a terceros. Para operar este sitio usamos proveedores que los tratan por cuenta nuestra
        y bajo nuestras instrucciones (encargados): alojamiento del sitio (Vercel Inc.) y envío del correo que genera el
        formulario (Resend). Estos proveedores pueden almacenar información fuera de México.
      </p>
      <p>Sólo entregaremos datos a una autoridad cuando una ley o resolución lo exija.</p>

      <h2 id="derechos-arco">5. Derechos ARCO</h2>
      <p>
        Tienes derecho a acceder a tus datos, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así
        como a revocar tu consentimiento o limitar su uso. Para ejercerlos, escríbenos por <Canal /> con:
      </p>
      <ul>
        <li>Tu nombre y un medio para responderte.</li>
        <li>Un documento que acredite tu identidad o, en su caso, la de tu representante.</li>
        <li>La descripción clara del derecho que quieres ejercer y de los datos involucrados.</li>
      </ul>
      <p>
        Te responderemos en un máximo de 20 días hábiles y, si procede, haremos efectiva la solicitud dentro de los 15 días
        hábiles siguientes, conforme a la LFPDPPP. Si consideras que tu derecho no fue atendido, puedes acudir a la
        autoridad competente en materia de protección de datos personales.
      </p>

      <h2>6. Cuánto tiempo los conservamos</h2>
      <p>
        Mientras dure la conversación comercial y, si no se concreta un proyecto, hasta 12 meses después del último
        contacto. Después los eliminamos o los bloqueamos conforme a la ley.
      </p>

      <h2 id="cookies">7. Cookies y tecnologías similares</h2>
      <p>
        Este sitio no usa cookies de publicidad ni de rastreo de terceros. Nuestro proveedor de alojamiento puede registrar
        datos técnicos (dirección IP, navegador, páginas visitadas) para operar y proteger el sitio. Puedes bloquear las
        cookies desde la configuración de tu navegador sin que el sitio deje de funcionar.
      </p>

      <h2>8. Cambios a este aviso</h2>
      <p>
        Cualquier cambio se publicará en esta misma página con su fecha de actualización. Si un cambio afecta las
        finalidades, te pediremos tu consentimiento antes de aplicarlo.
      </p>

      <h2>9. Consentimiento</h2>
      <p>
        Al enviar el formulario de contacto consientes el tratamiento de tus datos en los términos de este aviso.
      </p>
    </LegalPage>
  );
}
