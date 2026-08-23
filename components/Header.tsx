import Link from "next/link";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#panel", label: "Panel de control" },
  { href: "#ocr", label: "Facturas por foto" },
  { href: "#gestoria", label: "Para tu gestoría" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" aria-label="ReGest">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-regest-dark-soft transition-colors hover:text-regest-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-regest-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-regest-green"
        >
          Pide acceso
        </a>
      </div>
    </header>
  );
}
