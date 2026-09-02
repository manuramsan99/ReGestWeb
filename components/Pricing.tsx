import Link from "next/link";
import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section id="precios" className="bg-regest-green-light/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
            Un precio claro, sin letra pequeña
          </h2>
          <p className="mt-4 text-lg text-regest-dark-soft/80">
            Todo ReGest por una cuota fija al mes. Sin permanencia, sin coste por
            obra ni por factura.
          </p>
        </div>

        <div className="mt-10">
          <PricingCard />
        </div>

        <p className="mt-6 text-center text-sm text-regest-dark-soft/70">
          ¿Dudas sobre el mes gratis, el IVA o la permanencia?{" "}
          <Link
            href="/precios"
            className="font-semibold text-regest-green-dark hover:underline"
          >
            Ver precios y preguntas frecuentes
          </Link>
        </p>
      </div>
    </section>
  );
}
