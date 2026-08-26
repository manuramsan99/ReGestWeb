// TODO(placeholder): testimonios de ejemplo para maquetar el diseño.
// Sustituir por citas reales de clientes antes de publicar — no son
// opiniones genuinas y no deben quedarse así en producción.
const TESTIMONIALS = [
  {
    quote:
      "Antes perdía media tarde metiendo tickets en un Excel. Ahora hago la foto y ya está.",
    author: "Antonio",
    role: "Reformas integrales — Getafe",
  },
  {
    quote:
      "Le abro obra nueva al cliente con un botón desde su ficha. Antes tenía la mitad apuntado en un cuaderno.",
    author: "Marta",
    role: "Fontanería y reformas — Valencia",
  },
  {
    quote:
      "Mando el presupuesto en PDF con mi logo y mi color, y el cliente lo ve en el momento desde el móvil.",
    author: "Javier",
    role: "Construcción y reformas — Alicante",
  },
];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-regest-dark sm:text-3xl">
          Nuestros autónomos nos avalan
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-regest-dark-soft/60">
          Y seguimos mejorando cada día para ser el software de referencia en
          reformas y construcción.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="relative flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 pt-9 shadow-sm"
          >
            <span className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-regest-green font-serif text-lg leading-none text-white shadow-md">
              &rdquo;
            </span>
            <p className="flex-1 text-sm leading-relaxed text-regest-dark-soft/90">
              {t.quote}
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-regest-green-light text-sm font-bold text-regest-green-dark">
                {t.author[0]}
              </span>
              <div>
                <p className="text-sm font-semibold text-regest-dark">{t.author}</p>
                <p className="text-xs text-regest-dark-soft/60">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
