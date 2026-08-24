import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_ENTITY } from "@/lib/legalInfo";

export const metadata: Metadata = {
  title: "Política de privacidad — ReGest",
  description: "Cómo tratamos tus datos personales en regest.es.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="24 de agosto de 2026">
      <LegalSection title="1. Responsable del tratamiento">
        <ul className="list-disc space-y-1 pl-5">
          <li>Responsable: {LEGAL_ENTITY.name}</li>
          <li>NIF: {LEGAL_ENTITY.nif}</li>
          <li>Domicilio: {LEGAL_ENTITY.address}</li>
          <li>
            Email:{" "}
            <a href={`mailto:${LEGAL_ENTITY.email}`} className="text-regest-green hover:underline">
              {LEGAL_ENTITY.email}
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Qué datos tratamos y con qué finalidad">
        <p>
          Cuando rellenas el formulario de contacto de este sitio web
          tratamos los datos que nos facilitas —nombre, email, teléfono
          (opcional) y el mensaje que nos escribes— con la única finalidad de
          responder a tu consulta y, si lo solicitas, mostrarte cómo funciona
          ReGest.
        </p>
        <p>No usamos estos datos para ninguna otra finalidad ni los usamos para elaborar perfiles.</p>
      </LegalSection>

      <LegalSection title="3. Legitimación">
        <p>
          La base legal para el tratamiento de tus datos es tu consentimiento,
          otorgado al rellenar y enviar voluntariamente el formulario de
          contacto.
        </p>
      </LegalSection>

      <LegalSection title="4. Cuánto tiempo conservamos tus datos">
        <p>
          Conservamos tus datos mientras dure la conversación derivada de tu
          consulta y, como máximo, durante 2 años desde tu último contacto con
          nosotros, salvo que solicites su supresión antes o que la ley exija
          un plazo distinto.
        </p>
      </LegalSection>

      <LegalSection title="5. A quién cedemos tus datos">
        <p>
          Para enviar los correos del formulario de contacto (tanto el aviso
          que recibimos nosotros como la confirmación que recibes tú) usamos
          Resend, un proveedor de envío de emails transaccionales que actúa
          como encargado del tratamiento. Resend puede procesar datos fuera
          del Espacio Económico Europeo bajo las garantías legales
          correspondientes (cláusulas contractuales tipo de la Comisión
          Europea).
        </p>
        <p>No cedemos tus datos a ningún otro tercero ni los vendemos.</p>
      </LegalSection>

      <LegalSection title="6. Tus derechos">
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso,
          rectificación, supresión, oposición, limitación del tratamiento y
          portabilidad escribiéndonos a{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`} className="text-regest-green hover:underline">
            {LEGAL_ENTITY.email}
          </a>
          , indicando el derecho que quieres ejercer y adjuntando una copia de
          tu DNI/NIF para verificar tu identidad.
        </p>
        <p>
          Si consideras que no hemos atendido correctamente tu solicitud,
          puedes presentar una reclamación ante la Agencia Española de
          Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-regest-green hover:underline"
          >
            www.aepd.es
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="7. Esta política y la aplicación ReGest">
        <p>
          Esta política de privacidad cubre únicamente este sitio web
          informativo ({LEGAL_ENTITY.domain}). El uso de la aplicación ReGest
          ({LEGAL_ENTITY.appDomain}) se rige por su propia política de
          privacidad: dentro de la aplicación, tú eres el responsable del
          tratamiento de los datos de tus propios clientes, obras y facturas.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          Este sitio web usa cookies técnicas y, si nos das tu consentimiento,
          cookies de analítica. Puedes consultar el detalle en nuestra{" "}
          <a href="/cookies" className="text-regest-green hover:underline">
            Política de cookies
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Cambios en esta política">
        <p>
          Podemos actualizar esta política para adaptarla a cambios
          legislativos o en el propio sitio web. La versión vigente es
          siempre la publicada en esta página, con la fecha de última
          actualización indicada arriba.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
