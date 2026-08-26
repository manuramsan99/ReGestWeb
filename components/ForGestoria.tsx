const BENEFITS = [
  "IVA desglosado por tipo, listo para la declaración.",
  "Filtros por obra, cliente o rango de fechas.",
  "Retenciones de IRPF ya calculadas.",
  "Excel o CSV, compatible con su programa de siempre.",
];

const INVOICES = [
  { id: "2026-045", client: "Comunidad C/ Alcalá 24", base: "1.850,00 €", vat: "21%", total: "2.238,50 €" },
  { id: "2026-046", client: "Fincas Ruiz S.L.", base: "3.200,00 €", vat: "21%", total: "3.872,00 €" },
  { id: "2026-047", client: "Marta G.", base: "940,00 €", vat: "10%", total: "1.034,00 €" },
];

export function ForGestoria() {
  return (
    <section id="gestoria" className="bg-regest-dark py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid min-w-0 gap-14 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              Para tu gestoría
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tu gestoría deja de perseguirte cada mes por los números
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Con un clic exportas todas tus facturas a Excel o CSV. Tu
              gestoría recibe los números ya organizados, sin que tengas que
              picar nada a mano ni depender de otra herramienta.
            </p>
            <ul className="mt-7 space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-regest-green/20 text-xs font-bold text-regest-green">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-regest-green/20 text-lg">
                  📊
                </span>
                <div>
                  <p className="text-sm font-semibold">facturas_agosto_2026.xlsx</p>
                  <p className="text-xs text-white/50">Generado automáticamente</p>
                </div>
              </div>
              <span className="rounded-full bg-regest-green/20 px-3 py-1 text-xs font-semibold text-regest-green">
                Listo
              </span>
            </div>

            <div className="mt-4 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full min-w-[420px] border-collapse text-left text-xs">
                <thead className="bg-white/5 text-white/50">
                  <tr>
                    <th className="px-3 py-2 font-medium">Factura</th>
                    <th className="px-3 py-2 font-medium">Cliente</th>
                    <th className="px-3 py-2 text-right font-medium">Base</th>
                    <th className="px-3 py-2 text-right font-medium">IVA</th>
                    <th className="px-3 py-2 text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {INVOICES.map((invoice) => (
                    <tr key={invoice.id} className="border-t border-white/10">
                      <td className="px-3 py-2.5 text-white/60">{invoice.id}</td>
                      <td className="px-3 py-2.5">{invoice.client}</td>
                      <td className="px-3 py-2.5 text-right text-white/70">{invoice.base}</td>
                      <td className="px-3 py-2.5 text-right text-white/70">{invoice.vat}</td>
                      <td className="px-3 py-2.5 text-right font-semibold">{invoice.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
