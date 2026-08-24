export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Teléfonos españoles (fijo o móvil): 9 dígitos empezando por 6, 7, 8 o 9,
// con prefijo opcional +34 / 0034. Se normaliza quitando espacios, guiones
// y paréntesis antes de comparar, para admitir formatos tipo "600 000 000".
const SPANISH_PHONE_PATTERN = /^(?:\+34|0034)?[6789]\d{8}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const normalized = value.replace(/[\s()-]/g, "");
  return SPANISH_PHONE_PATTERN.test(normalized);
}
