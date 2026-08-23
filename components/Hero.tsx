export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-regest-dark text-white">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-regest-green/25 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Ya en uso real por autónomos de reformas
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Deja el papel, el Excel suelto y el WhatsApp con proveedores.
            <span className="text-regest-green"> Llévalo todo desde una app.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            ReGest es el ERP para autónomos y pequeñas empresas de reformas y
            construcción. Clientes, obras, presupuestos, facturas y
            proveedores, de principio a fin, sin líos.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-regest-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark"
            >
              Pide acceso
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/40"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/50">Obra</p>
                <p className="font-semibold">Reforma baño — C/ Alcalá 24</p>
              </div>
              <span className="rounded-full bg-regest-green/20 px-3 py-1 text-xs font-semibold text-regest-green">
                En curso
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-white/50">
              {["Borrador", "Enviado", "Aceptado", "En curso", "Completado"].map(
                (step, i) => (
                  <span key={step} className="flex items-center gap-1">
                    <span
                      className={
                        i <= 3
                          ? "text-regest-green"
                          : "text-white/30"
                      }
                    >
                      {step}
                    </span>
                    {i < 4 && <span className="text-white/20">→</span>}
                  </span>
                )
              )}
            </div>
            <div className="mt-5 space-y-2.5">
              {[
                { label: "Mano de obra", value: "1.240,00 €" },
                { label: "Materiales", value: "890,50 €" },
                { label: "IVA (21%)", value: "447,71 €" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm"
                >
                  <span className="text-white/60">{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-lg bg-regest-green/15 px-4 py-3 text-sm font-semibold">
                <span>Total factura</span>
                <span>2.578,21 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
