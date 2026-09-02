import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "ReGest — El ERP para autónomos de reformas y construcción";
const DESCRIPTION =
  "Lleva tus clientes, obras, presupuestos, facturas y proveedores desde una sola app. Sustituye el papel, el Excel suelto y el WhatsApp con proveedores.";

export const metadata: Metadata = {
  metadataBase: new URL("https://regest.es"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software gestión obras",
    "ERP autónomos construcción",
    "programa presupuestos reformas",
    "facturación autónomos reformas",
    "gestión de obras para autónomos",
    "app facturas reformas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://regest.es",
    siteName: "ReGest",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
