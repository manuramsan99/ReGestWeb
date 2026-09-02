const REASONS = [
  {
    icon: "🔗",
    title: "Todo conectado, nada duplicado",
    description: "Del cliente sale la obra, del presupuesto sale la factura.",
  },
  {
    icon: "🔒",
    title: "Trazabilidad legal de verdad",
    description: "Al emitir una factura, sus datos quedan bloqueados.",
  },
  {
    icon: "📄",
    title: "5 plantillas de presupuesto",
    description: "Con tu logo y tu color, listas para mandar en PDF.",
  },
  {
    icon: "🏢",
    title: "Varias empresas, una cuenta",
    description: "Cambia de negocio sin duplicar tu usuario.",
  },
  {
    icon: "📊",
    title: "Puente directo con tu gestoría",
    description: "Exporta a Excel o CSV con el IVA por tipo.",
  },
];

export function WhyReGest() {
  return (
    <section id="por-que-regest" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
          Por qué ReGest y no un Excel con más pestañas
        </h2>
        <p className="mt-4 text-lg text-regest-dark-soft/80">
          No es un ERP genérico con el nombre cambiado. Está pensado desde el
          primer día para obras de reforma y construcción.
        </p>
      </div>
      <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {REASONS.map((reason) => (
          <div key={reason.title} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-regest-green-light text-lg">
              {reason.icon}
            </span>
            <div>
              <h3 className="font-semibold text-regest-dark">{reason.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-regest-dark-soft/75">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
