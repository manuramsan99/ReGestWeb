const REASONS = [
  {
    number: "01",
    title: "Todo conectado, nada duplicado",
    description:
      "Del cliente sale la obra, del presupuesto sale la factura. No vuelves a escribir el mismo dato dos veces.",
  },
  {
    number: "02",
    title: "Trazabilidad legal de verdad",
    description:
      "En cuanto emites una factura, sus datos quedan bloqueados. Nada se puede tocar después, como debe ser.",
  },
  {
    number: "03",
    title: "El OCR corre en tu navegador, no en la nube",
    description:
      "La foto del ticket se lee en tu propio dispositivo. No se manda a ningún servidor externo.",
  },
  {
    number: "04",
    title: "5 plantillas de presupuesto",
    description:
      "Clásica, Moderna, Minimalista, Profesional o Creativa — con tu logo y tu color, listas para mandar en PDF.",
  },
  {
    number: "05",
    title: "Varias empresas, una sola cuenta",
    description:
      "Si llevas más de un negocio, cambias entre empresas sin salir de ReGest ni duplicar tu usuario.",
  },
  {
    number: "06",
    title: "Puente directo con tu gestoría",
    description:
      "Exportación a Excel o CSV con el IVA por tipo. Le pasas los números sin depender de otra herramienta.",
  },
];

export function WhyReGest() {
  return (
    <section id="por-que-regest" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
          Por qué ReGest y no un Excel con más pestañas
        </h2>
        <p className="mt-4 text-lg text-regest-dark-soft/80">
          No es un ERP genérico con el nombre cambiado. Está pensado desde el
          primer día para obras de reforma y construcción.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason) => (
          <div
            key={reason.number}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <span className="text-sm font-bold text-regest-green">
              {reason.number}
            </span>
            <h3 className="mt-3 font-semibold text-regest-dark">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-regest-dark-soft/80">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
