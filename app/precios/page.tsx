import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";

const TITLE = "Precios de ReGest — 20 €/mes con 1 mes gratis";
const DESCRIPTION =
  "Cuánto cuesta ReGest, el ERP para autónomos de reformas y construcción: 20 €/mes más IVA, con un mes gratis de prueba, sin permanencia y sin coste por obra ni por factura.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "precio ReGest",
    "cuánto cuesta ReGest",
    "precio ERP autónomos",
    "software gestión de obras precio",
    "programa facturación autónomos precio",
    "ERP construcción y reformas precio",
  ],
  alternates: { canonical: "/precios" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://regest.es/precios",
    siteName: "ReGest",
    locale: "es_ES",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQ = [
  {
    q: "¿Cuánto cuesta ReGest?",
    a: "ReGest cuesta 20 € al mes más IVA por empresa. Incluye todas las funciones: clientes, obras, presupuestos, facturación de venta y de compra con OCR, exportación a Excel para la gestoría y el panel de control.",
  },
  {
    q: "¿El precio lleva IVA?",
    a: "El precio es de 20 € al mes más el IVA correspondiente. En la factura que recibes verás el desglose.",
  },
  {
    q: "¿Cómo funciona el mes gratis de prueba?",
    a: "Tienes un mes completo para usar ReGest con tus obras reales. Si al terminar decides no continuar, no pagas nada y no hay que cancelar ningún cobro.",
  },
  {
    q: "¿Hay permanencia o contrato de un año?",
    a: "No. Es una suscripción mensual: sigues mientras te sirva y la dejas cuando quieras.",
  },
  {
    q: "¿El precio cambia según el número de obras o de facturas?",
    a: "No. Es tarifa plana: 20 € al mes independientemente de cuántas obras, presupuestos, clientes o facturas manejes.",
  },
  {
    q: "¿Puedo llevar varias empresas?",
    a: "Sí, puedes cambiar entre varias empresas desde la misma cuenta. Si necesitas más de una empresa activa a la vez, escríbenos y lo vemos.",
  },
  {
    q: "¿Las actualizaciones y el soporte están incluidos?",
    a: "Sí. Todas las mejoras que vamos publicando y la ayuda por email entran en la cuota, sin coste adicional.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "ReGest",
      description:
        "ERP para autónomos y pequeñas empresas de construcción y reformas: clientes, obras, presupuestos, facturas y proveedores en una sola app.",
      brand: { "@type": "Brand", name: "ReGest" },
      offers: {
        "@type": "Offer",
        price: "20",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20",
          priceCurrency: "EUR",
          unitCode: "MON",
          billingIncrement: 1,
        },
        description: "20 €/mes más IVA, con 1 mes gratis de prueba y sin permanencia.",
        availability: "https://schema.org/InStock",
        url: "https://regest.es/precios",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://regest.es" },
        { "@type": "ListItem", position: 2, name: "Precios", item: "https://regest.es/precios" },
      ],
    },
  ],
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Header />
      <main>
        <section className="bg-regest-green-light/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <nav className="text-xs text-regest-dark-soft/60" aria-label="Ruta de navegación">
              <Link href="/" className="hover:text-regest-dark">
                Inicio
              </Link>{" "}
              / <span className="text-regest-dark-soft/80">Precios</span>
            </nav>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
                Precios de ReGest
              </h1>
              <p className="mt-4 text-lg text-regest-dark-soft/80">
                Un solo plan, con todo dentro: 20 € al mes más IVA por empresa.
                Sin permanencia, sin coste por obra ni por factura, y con un mes
                gratis para probarlo con tus obras reales.
              </p>
            </div>

            <div className="mt-10">
              <PricingCard />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-regest-dark sm:text-3xl">
            Preguntas frecuentes sobre el precio
          </h2>
          <dl className="mt-8 divide-y divide-black/5">
            {FAQ.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-semibold text-regest-dark">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-regest-dark-soft/85">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-2xl border border-black/5 bg-regest-green-light/30 p-6 text-center">
            <p className="text-regest-dark-soft/85">
              ¿Te queda alguna duda? Cuéntanos cómo llevas tus obras hoy y te
              enseñamos ReGest en directo.
            </p>
            <Link
              href="/#contacto"
              className="mt-4 inline-block rounded-full bg-regest-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark"
            >
              Pide tu mes gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
