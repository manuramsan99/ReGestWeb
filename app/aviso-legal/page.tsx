import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_ENTITY } from "@/lib/legalInfo";

export const metadata: Metadata = {
  title: "Aviso legal — ReGest",
  description: "Datos identificativos del titular de regest.es conforme a la LSSI-CE.",
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="24 de agosto de 2026">
      <LegalSection title="1. Datos identificativos">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se informa de los siguientes datos: este sitio web,
          accesible en <strong>{LEGAL_ENTITY.domain}</strong>, es titularidad de:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Titular: {LEGAL_ENTITY.name} (autónomo/a)</li>
          <li>NIF: {LEGAL_ENTITY.nif}</li>
          <li>Domicilio: {LEGAL_ENTITY.address}</li>
          <li>
            Email de contacto:{" "}
            <a href={`mailto:${LEGAL_ENTITY.email}`} className="text-regest-green hover:underline">
              {LEGAL_ENTITY.email}
            </a>
          </li>
          <li>
            Actividad: desarrollo y comercialización de software de gestión
            (ERP) para autónomos y pequeñas empresas del sector de la
            construcción y la reforma.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          Este sitio web tiene carácter informativo y comercial: presenta
          ReGest y permite a los interesados ponerse en contacto con nosotros.
          No permite el alta de usuarios ni la contratación online. El acceso
          y uso de la aplicación ReGest, disponible en{" "}
          <strong>{LEGAL_ENTITY.appDomain}</strong>, se rige por sus propias
          condiciones, ajenas a este sitio web.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario y
          conlleva la aceptación de las condiciones recogidas en nuestros{" "}
          <a href="/terminos" className="text-regest-green hover:underline">
            Términos de uso
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          La marca ReGest, el logotipo, el diseño, los textos, imágenes y
          demás contenidos de este sitio web son propiedad de{" "}
          {LEGAL_ENTITY.name} o se utilizan con la debida autorización. Queda
          prohibida su reproducción, distribución o transformación total o
          parcial sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Legislación aplicable y jurisdicción">
        <p>
          Este aviso legal se rige por la legislación española. Para
          cualquier controversia derivada del acceso o uso de este sitio web,
          las partes se someten a los juzgados y tribunales que correspondan
          conforme a la normativa de protección de consumidores y usuarios
          aplicable, o en su defecto, a los del domicilio del titular indicado
          en el apartado 1.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
