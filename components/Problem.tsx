const PAIN_POINTS = [
  { icon: "📝", title: "El presupuesto vive en un Word suelto" },
  { icon: "🧾", title: "Los tickets se acumulan en el coche" },
  { icon: "💬", title: "WhatsApp es tu sistema de pedidos" },
  { icon: "❓", title: "No sabes qué obra te deja margen" },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
          Así gestiona hoy la mayoría de autónomos de reformas
        </h2>
        <p className="mt-4 text-lg text-regest-dark-soft/80">
          No por falta de ganas — porque nadie les ha dado algo mejor que sea
          igual de rápido que un papel y un boli.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {PAIN_POINTS.map((point) => (
          <div
            key={point.title}
            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-regest-green-light/40 p-4 text-center sm:gap-3 sm:p-6"
          >
            <span className="text-2xl sm:text-3xl">{point.icon}</span>
            <p className="text-xs font-semibold leading-snug text-regest-dark sm:text-sm">
              {point.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
