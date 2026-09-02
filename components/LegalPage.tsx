import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-black/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="ReGest">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-regest-dark-soft transition-colors hover:text-regest-dark"
          >
            ← Volver a la web
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-regest-dark sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-regest-dark-soft/60">
          Última actualización: {updated}
        </p>
        <div className="mt-10 space-y-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-regest-dark">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-regest-dark-soft/90">
        {children}
      </div>
    </section>
  );
}
