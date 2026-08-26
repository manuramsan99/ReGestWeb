const STEPS = [
  {
    number: "1",
    title: "El cliente llama",
    description: "Abres su ficha y arrancas la obra con un botón.",
  },
  {
    number: "2",
    title: "Montas el presupuesto",
    description: "Mano de obra y materiales. El IVA se calcula solo.",
  },
  {
    number: "3",
    title: "Lo mandas en PDF",
    description: "5 plantillas, con tu logo y tu color.",
  },
  {
    number: "4",
    title: "La obra avanza",
    description: "De Aceptado a Completado, siempre a la vista.",
  },
  {
    number: "5",
    title: "Facturas y cobras",
    description: "Factura o proforma, con vencimientos y cobros.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-regest-green-light/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
            De un cliente a una obra cobrada, sin salir de la app
          </h2>
          <p className="mt-4 text-lg text-regest-dark-soft/80">
            El mismo recorrido que ya sigues hoy en tu cabeza, pero ordenado.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border-t-4 border-regest-green bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-regest-dark text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-3 font-semibold text-regest-dark">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-regest-dark-soft/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
