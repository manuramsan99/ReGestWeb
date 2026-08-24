import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { LEGAL_ENTITY } from "@/lib/legalInfo";

export const metadata: Metadata = {
  title: "Política de cookies — ReGest",
  description: "Qué cookies usa regest.es y cómo puedes gestionarlas.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="24 de agosto de 2026">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que un sitio web guarda en tu
          navegador para recordar información entre visitas, como tus
          preferencias. Aquí usamos también el almacenamiento local del
          navegador (localStorage) con la misma finalidad, así que en esta
          página nos referimos a ambos como &ldquo;cookies&rdquo;.
        </p>
      </LegalSection>

      <LegalSection title="2. Qué cookies usamos">
        <p className="font-semibold text-regest-dark">Cookies técnicas (siempre activas)</p>
        <p>
          Son imprescindibles para que el sitio web funcione. No requieren tu
          consentimiento.
        </p>
        <div className="overflow-x-auto rounded-lg border border-black/10">
          <table className="w-full min-w-[420px] border-collapse text-left text-xs">
            <thead className="bg-regest-green-light/50 text-regest-dark">
              <tr>
                <th className="px-3 py-2 font-semibold">Nombre</th>
                <th className="px-3 py-2 font-semibold">Finalidad</th>
                <th className="px-3 py-2 font-semibold">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-black/10">
                <td className="px-3 py-2 font-mono">regest-cookie-consent</td>
                <td className="px-3 py-2">Recuerda tu elección sobre cookies para no preguntarte en cada visita.</td>
                <td className="px-3 py-2">1 año</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-semibold text-regest-dark">Cookies de analítica (requieren tu permiso)</p>
        <p>
          Todavía no hemos activado ninguna herramienta de analítica.
          Cuando lo hagamos (por ejemplo, Google Analytics o Vercel
          Analytics), solo se cargará si aceptas las cookies de analítica en
          el aviso de cookies, y actualizaremos esta tabla con el detalle de
          cada cookie: nombre, finalidad, duración y proveedor.
        </p>
      </LegalSection>

      <LegalSection title="3. Cómo cambiar tu elección">
        <p>
          Puedes cambiar tu decisión en cualquier momento pulsando en{" "}
          <span className="inline-block">
            <CookiePreferencesButton />
          </span>
          , disponible también en el pie de página de todo el sitio web.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo desactivar cookies desde el navegador">
        <p>
          También puedes eliminar o bloquear las cookies desde la
          configuración de tu navegador (Chrome, Firefox, Safari, Edge). Ten
          en cuenta que bloquear las cookies técnicas puede hacer que el sitio
          web no recuerde tu elección y te vuelva a preguntar en cada visita.
        </p>
      </LegalSection>

      <LegalSection title="5. Más información">
        <p>
          Para saber cómo tratamos tus datos personales, consulta nuestra{" "}
          <a href="/privacidad" className="text-regest-green hover:underline">
            Política de privacidad
          </a>
          . Si tienes cualquier duda, escríbenos a{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`} className="text-regest-green hover:underline">
            {LEGAL_ENTITY.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
