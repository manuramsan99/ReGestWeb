"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToHash } from "@/lib/scrollToSection";

type HashLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: `#${string}`;
};

// Como <a href="#seccion">, pero sin dejar el #seccion pegado en la URL.
export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    scrollToHash(href);
    onClick?.(event);
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
