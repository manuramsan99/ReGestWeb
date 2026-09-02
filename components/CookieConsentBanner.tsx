"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCookieConsent,
  OPEN_PREFERENCES_EVENT,
  setCookieConsent,
} from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);

    function handleOpenPreferences() {
      setVisible(true);
    }

    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function handleChoice(status: "accepted" | "rejected") {
    setCookieConsent(status);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-regest-dark p-5 text-white shadow-2xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/80">
          Usamos cookies técnicas necesarias para que la web funcione y, si nos
          das permiso, cookies de analítica para entender cómo la usas. Más
          info en nuestra{" "}
          <Link href="/cookies" className="underline hover:text-white">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-white/40"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-full bg-regest-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
