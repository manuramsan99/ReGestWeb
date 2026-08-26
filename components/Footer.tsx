import Link from "next/link";
import { CookiePreferencesButton } from "./CookiePreferencesButton";
import { Logo } from "./Logo";

const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terminos", label: "Términos de uso" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-regest-dark-soft/70 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Logo markClassName="h-7 w-7" />
          <p className="text-xs text-regest-dark-soft/50">
            Seguimos mejorando cada día para ser el software de referencia en
            reformas.
          </p>
        </div>
        <p>© {new Date().getFullYear()} ReGest. Hecho en España para gente de obra.</p>
      </div>
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-black/5 px-6 pt-6 text-xs text-regest-dark-soft/60 md:justify-start">
        {LEGAL_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-regest-dark">
            {link.label}
          </Link>
        ))}
        <CookiePreferencesButton />
      </div>
    </footer>
  );
}
