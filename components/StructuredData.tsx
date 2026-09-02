const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReGest",
  description:
    "ERP para autónomos y pequeñas empresas de construcción y reformas: clientes, obras, presupuestos, facturas y proveedores en una sola app.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://regest.es",
  image: "https://regest.es/opengraph-image",
  audience: {
    "@type": "Audience",
    audienceType: "Autónomos y pequeñas empresas de construcción y reformas",
  },
  areaServed: "ES",
  inLanguage: "es",
  offers: {
    "@type": "Offer",
    price: "20",
    priceCurrency: "EUR",
    description: "20 €/mes más IVA, con 1 mes gratis de prueba y sin permanencia.",
    url: "https://regest.es/precios",
  },
  publisher: {
    "@type": "Organization",
    name: "ReGest",
    url: "https://regest.es",
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  );
}
