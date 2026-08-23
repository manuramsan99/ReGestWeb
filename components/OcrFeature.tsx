export function OcrFeature() {
  return (
    <section id="ocr" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-regest-green-light px-3 py-1 text-xs font-semibold text-regest-green-dark">
            La función estrella
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
            Fotografía el ticket. Olvídate del resto.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-regest-dark-soft/80">
            Le haces una foto a la factura o el ticket de un proveedor y
            ReGest lee por sí solo el proveedor, el NIF, el importe y la
            fecha. Sin escribir nada, sin picar datos a mano.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-regest-dark-soft/70">
            El reconocimiento de texto corre en tu propio navegador — la foto
            del ticket no se manda a ningún servicio externo.
          </p>
        </div>

        <div className="relative rounded-2xl border border-black/5 bg-regest-dark p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xl">
              🧾
            </div>
            <div>
              <p className="text-sm font-medium">ticket_proveedor.jpg</p>
              <p className="text-xs text-white/50">Leyendo con OCR local…</p>
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            {[
              { label: "Proveedor", value: "Suministros Martín S.L." },
              { label: "NIF", value: "B12345678" },
              { label: "Importe", value: "184,30 €" },
              { label: "Fecha", value: "12/08/2026" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm"
              >
                <span className="text-white/50">{row.label}</span>
                <span className="font-medium text-regest-green">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
