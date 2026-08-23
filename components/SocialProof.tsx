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
      <div className="rounded-2xl border border-black/5 bg-regest-green-light/40 p-10 text-center">
        <p className="text-xl font-semibold leading-relaxed text-regest-dark sm:text-2xl">
          Ya en uso real por autónomos de reformas, gestionando sus obras con
          ReGest cada día.
        </p>
        <p className="mt-3 text-sm text-regest-dark-soft/70">
          Todavía no somos una gran cifra — preferimos que lo compruebes tú
          mismo antes de prometerte una.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="rounded-2xl border border-black/5 bg-white p-6"
          >
            <p className="text-sm leading-relaxed text-regest-dark-soft/90">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-regest-dark">
              {t.author}
            </p>
            <p className="text-xs text-regest-dark-soft/60">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
