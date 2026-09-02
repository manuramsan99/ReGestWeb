"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scrollToSection";

type HashLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: `#${string}`;
};

// Como <a href="#seccion">, pero sin dejar el #seccion pegado en la URL.
// Fuera de la home (p. ej. /precios) no hay secciones a las que saltar, así que
// enlaza a "/#seccion" y deja que el navegador haga el salto al cargar la home.
export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const onHome = pathname === "/";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!onHome) return;
    event.preventDefault();
    scrollToHash(href);
    onClick?.(event);
  }

  return <a href={onHome ? href : `/${href}`} onClick={handleClick} {...props} />;
}
