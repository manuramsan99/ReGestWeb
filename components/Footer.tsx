import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-regest-dark-soft/70 md:flex-row">
        <Logo markClassName="h-7 w-7" />
        <p>© {new Date().getFullYear()} ReGest. Hecho en España para gente de obra.</p>
      </div>
    </footer>
  );
}
