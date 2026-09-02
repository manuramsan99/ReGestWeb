import { HashLink } from "./HashLink";

const INCLUDED = [
  "Clientes, obras, presupuestos y facturas sin límite",
  "Facturas de compra con OCR en tu navegador",
  "5 plantillas de presupuesto en PDF con tu marca",
  "Exportación a Excel/CSV para tu gestoría",
  "Varias empresas en la misma cuenta",
  "Panel de control con tu foto financiera real",
];

// Tarjeta de precio reutilizable: sección de la home y página /precios.
export function PricingCard() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border-t-4 border-regest-green bg-white shadow-sm">
      <div className="p-8">
        <span className="inline-flex items-center rounded-full bg-regest-green-light px-3 py-1 text-xs font-semibold text-regest-green-dark">
          1 mes gratis de prueba
        </span>
        <div className="mt-5 flex items-baseline gap-1">
          <span className="text-5xl font-extrabold tracking-tight text-regest-dark">
            20 €
          </span>
          <span className="text-lg font-medium text-regest-dark-soft/70">
            / mes + IVA
          </span>
        </div>
        <p className="mt-2 text-sm text-regest-dark-soft/70">
          Empieza con un mes gratis. Si no te encaja, lo dejas y no pagas nada.
        </p>

        <HashLink
          href="#contacto"
          className="mt-7 block rounded-full bg-regest-green px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark"
        >
          Pide tu mes gratis
        </HashLink>
      </div>

      <ul className="space-y-3 border-t border-black/5 bg-regest-green-light/20 p-8">
        {INCLUDED.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-regest-dark-soft/90"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-regest-green/15 text-xs font-bold text-regest-green-dark">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
