"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { HashLink } from "./HashLink";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#panel", label: "Panel de control" },
  { href: "#ocr", label: "Facturas por foto" },
  { href: "#gestoria", label: "Para tu gestoría" },
  { href: "#precios", label: "Precios" },
] as const;

export function Header() {
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <Link href="/" aria-label="ReGest" className="shrink-0" onClick={handleLogoClick}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <HashLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-regest-dark-soft transition-colors hover:text-regest-dark"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href="https://app.regest.es"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-regest-green px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-regest-green-dark sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Iniciar sesión
          </a>
          <HashLink
            href="#contacto"
            className="whitespace-nowrap rounded-full bg-regest-dark px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-regest-green sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Pide acceso
          </HashLink>
        </div>
      </div>
    </header>
  );
}
