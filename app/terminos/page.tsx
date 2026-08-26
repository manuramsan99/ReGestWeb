import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_ENTITY } from "@/lib/legalInfo";

export const metadata: Metadata = {
  title: "Términos de uso — ReGest",
  description: "Condiciones de uso del sitio web regest.es.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos de uso" updated="24 de agosto de 2026">
      <LegalSection title="1. Objeto y aceptación">
        <p>
          Estos términos regulan el acceso y uso del sitio web{" "}
          {LEGAL_ENTITY.domain} (en adelante, &ldquo;el sitio web&rdquo;),
          titularidad de {LEGAL_ENTITY.name} (ver{" "}
          <a href="/aviso-legal" className="text-regest-green hover:underline">
            Aviso legal
          </a>
          ). Al navegar por este sitio web aceptas estas condiciones. Si no
          estás de acuerdo, te pedimos que no lo utilices.
        </p>
      </LegalSection>

      <LegalSection title="2. Acceso y uso del sitio web">
        <p>
          El acceso a este sitio web es gratuito y no requiere registro. El
          usuario se compromete a hacer un uso lícito y diligente del sitio
          web, sin incurrir en actividades fraudulentas, ilícitas o que
          puedan dañar, inutilizar o sobrecargar el sitio o impedir su normal
          funcionamiento.
        </p>
      </LegalSection>

      <LegalSection title="3. El formulario de contacto">
        <p>
          El sitio web incluye un formulario para que puedas ponerte en
          contacto con nosotros. Al usarlo te comprometes a facilitar datos
          veraces y a no utilizarlo con fines distintos a los de solicitar
          información sobre ReGest. El tratamiento de los datos que nos
          facilites se describe en nuestra{" "}
          <a href="/privacidad" className="text-regest-green hover:underline">
            Política de privacidad
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web (textos, imágenes, marca,
          logotipo y diseño) están protegidos por derechos de propiedad
          intelectual e industrial, tal y como se detalla en el{" "}
          <a href="/aviso-legal" className="text-regest-green hover:underline">
            Aviso legal
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. La aplicación ReGest">
        <p>
          Este sitio web es un escaparate informativo del producto ReGest. El
          acceso y uso de la propia aplicación, disponible en{" "}
          <strong>{LEGAL_ENTITY.appDomain}</strong>, así como el tratamiento
          de los datos de tu negocio dentro de ella (clientes, obras,
          facturas, etc.), se rigen por sus propias condiciones de
          contratación y política de privacidad, independientes de este
          documento, que se te presentarán al darte de alta como cliente.
        </p>
      </LegalSection>

      <LegalSection title="6. Exclusión de garantías y responsabilidad">
        <p>
          ReGest es un producto en desarrollo activo: la información de este
          sitio web (funciones, capturas, plantillas) refleja el estado
          actual del producto y puede cambiar sin previo aviso a medida que
          evoluciona. Haremos lo posible por mantener el sitio web disponible
          y actualizado, pero no garantizamos la ausencia de interrupciones o
          errores.
        </p>
      </LegalSection>

      <LegalSection title="7. Modificación de estos términos">
        <p>
          Podemos actualizar estos términos para adaptarlos a cambios
          legislativos, técnicos o del propio sitio web. La versión vigente
          es siempre la publicada en esta página, con la fecha de última
          actualización indicada arriba.
        </p>
      </LegalSection>

      <LegalSection title="8. Legislación aplicable y jurisdicción">
        <p>
          Estos términos se rigen por la legislación española. Cualquier
          controversia se someterá a los juzgados y tribunales que
          correspondan conforme a la normativa de protección de consumidores
          y usuarios aplicable, o en su defecto, a los del domicilio del
          titular indicado en el{" "}
          <a href="/aviso-legal" className="text-regest-green hover:underline">
            Aviso legal
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
