export function FinalCta() {
  return (
    <section id="contacto" className="bg-regest-dark py-24 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Habla con nosotros y te enseñamos ReGest
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Todavía no hay alta automática. Cuéntanos cómo llevas tus obras hoy
          y te mostramos, en directo, cómo quedaría con ReGest.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hola@regestweb.com"
            className="rounded-full bg-regest-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark"
          >
            Escríbenos a hola@regestweb.com
          </a>
        </div>
      </div>
    </section>
  );
}
