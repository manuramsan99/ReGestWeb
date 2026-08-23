export function ForGestoria() {
  return (
    <section id="gestoria" className="bg-regest-dark py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            ¿Tienes gestoría? Le ahorras un buen rato cada mes.
          </h2>
          <p className="mt-4 text-white/70">
            Exporta a Excel o CSV todas las facturas, con el IVA por tipo y
            los filtros que necesites. Tu gestoría recibe los números ya
            organizados, sin depender de otra herramienta.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
          <span className="text-lg">📊</span>
          <span className="text-white/80">
            facturas_agosto_2026.xlsx — listo para enviar
          </span>
        </div>
      </div>
    </section>
  );
}
