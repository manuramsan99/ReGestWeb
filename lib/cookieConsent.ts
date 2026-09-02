export type CookieConsentStatus = "accepted" | "rejected";

const STORAGE_KEY = "regest-cookie-consent";
export const OPEN_PREFERENCES_EVENT = "regest:open-cookie-preferences";

export function getCookieConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(status: CookieConsentStatus) {
  window.localStorage.setItem(STORAGE_KEY, status);
}

// Úsalo antes de cargar cualquier script de analítica (Google Analytics,
// Vercel Analytics, etc.): solo debe inyectarse si esto devuelve true.
export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
