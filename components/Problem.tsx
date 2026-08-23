const PAIN_POINTS = [
  {
    title: "El presupuesto vive en un Word suelto",
    description:
      "Cada obra tiene su propia plantilla mal copiada de la anterior, y nunca sabes cuál es la versión buena.",
  },
  {
    title: "Los tickets de proveedor se acumulan en el coche",
    description:
      "Fotos sueltas, papeles arrugados, y a fin de mes toca adivinar en qué obra fue cada gasto.",
  },
  {
    title: "El WhatsApp con el proveedor es tu sistema de pedidos",
    description:
      "Los precios, los albaranes y las dudas se pierden entre mensajes de audio y fotos sin fecha.",
  },
  {
    title: "No sabes qué obra te está dejando margen de verdad",
    description:
      "Facturas, contratado y cobrado se llevan por separado, así que el beneficio real es una intuición.",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
          Así gestiona hoy la mayoría de autónomos de reformas
        </h2>
        <p className="mt-4 text-lg text-regest-dark-soft/80">
          No por falta de ganas — porque nadie les ha dado algo mejor que sea
          igual de rápido que un papel y un boli.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {PAIN_POINTS.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-black/5 bg-regest-green-light/40 p-6"
          >
            <h3 className="font-semibold text-regest-dark">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-regest-dark-soft/80">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
