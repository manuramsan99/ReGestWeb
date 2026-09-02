"use client";

import { openCookiePreferences } from "@/lib/cookieConsent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="underline decoration-transparent transition-colors hover:text-regest-dark hover:decoration-current"
    >
      Preferencias de cookies
    </button>
  );
}
