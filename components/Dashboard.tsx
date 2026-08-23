const STATS = [
  {
    label: "En obras (pipeline)",
    value: "18.450 €",
    hint: "Presupuestado y aceptado, todavía sin facturar",
  },
  {
    label: "Facturado de verdad",
    value: "9.230 €",
    hint: "Lo cobrado, no solo lo contratado",
  },
  {
    label: "Beneficio",
    value: "2.980 €",
    hint: "Descontado coste de materiales y mano de obra",
  },
];

const TOP_CLIENTS = [
  { name: "Comunidad C/ Alcalá 24", value: "6.400 €" },
  { name: "Fincas Ruiz S.L.", value: "4.150 €" },
  { name: "Marta G.", value: "3.020 €" },
];

export function Dashboard() {
  return (
    <section id="panel" className="bg-regest-green-light/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-regest-green-dark">
              Panel de control
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
              La foto real de tu negocio, no la que crees que tienes
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-regest-dark-soft/80">
              Cuánto tienes en obras, cuánto has cobrado de verdad y cuánto
              beneficio te queda después de materiales y mano de obra — sin
              montar una hoja de cálculo para averiguarlo.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-regest-dark-soft/70">
              Y un ranking de tus mejores clientes, para saber a quién merece
              la pena cuidar.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-xl">
            <div className="grid gap-3 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-regest-green-light/50 p-4"
                >
                  <p className="text-xs font-medium text-regest-dark-soft/70">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-regest-dark">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-regest-dark-soft/60">
                    {stat.hint}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-black/5 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-regest-dark-soft/60">
                Mejores clientes
              </p>
              <div className="mt-3 space-y-2">
                {TOP_CLIENTS.map((client, i) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-between rounded-lg bg-regest-green-light/30 px-4 py-2.5 text-sm"
                  >
                    <span className="text-regest-dark-soft">
                      <span className="mr-2 font-bold text-regest-green">
                        {i + 1}
                      </span>
                      {client.name}
                    </span>
                    <span className="font-semibold text-regest-dark">
                      {client.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
