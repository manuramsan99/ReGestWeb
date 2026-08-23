const STEPS = [
  {
    number: "01",
    title: "El cliente te llama",
    description:
      "Abres su ficha y con un botón arrancas una obra nueva. Sin duplicar datos, sin empezar de cero.",
  },
  {
    number: "02",
    title: "Montas el presupuesto",
    description:
      "Mano de obra, materiales, empleados y otros conceptos. El IVA y el margen se calculan solos.",
  },
  {
    number: "03",
    title: "Lo mandas en PDF",
    description:
      "Elige entre 5 plantillas (Clásica, Moderna, Minimalista, Profesional, Creativa) con tu logo y tu color.",
  },
  {
    number: "04",
    title: "La obra avanza",
    description:
      "De Borrador a Aceptado y En curso hasta Completado. Siempre sabes en qué punto está cada una.",
  },
  {
    number: "05",
    title: "Facturas y cobras",
    description:
      "Factura, proforma o rectificativa, con vencimientos y cobros parciales. Al emitir, queda todo bloqueado.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-regest-green-light/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
            De un cliente a una obra cobrada, sin salir de la app
          </h2>
          <p className="mt-4 text-lg text-regest-dark-soft/80">
            El mismo recorrido que ya sigues hoy en tu cabeza, pero ordenado y
            sin que se te pierda nada por el camino.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-black/5 bg-white p-6"
            >
              <span className="text-sm font-bold text-regest-green">
                {step.number}
              </span>
              <h3 className="mt-3 font-semibold text-regest-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-regest-dark-soft/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
