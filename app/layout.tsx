import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReGest — El ERP para autónomos de reformas y construcción",
  description:
    "Lleva tus clientes, obras, presupuestos, facturas y proveedores desde una sola app. Sustituye el papel, el Excel suelto y el WhatsApp con proveedores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
