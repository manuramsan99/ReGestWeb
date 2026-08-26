# ReGest — Landing (regest.es)

Contexto persistente del proyecto. Léelo antes de tocar nada para no repetir trabajo ni pisar decisiones ya tomadas.

## Qué es esto

**ReGest** es un ERP real (no un prototipo) para autónomos y pequeñas empresas de
construcción/reformas en España — ya en uso en producción por un cliente, construido en
Next.js/Supabase/Vercel. Este repositorio **no es la app** (esa vive en `app.regest.es`),
es la **landing de marketing** en `regest.es`: presenta el producto y capta contactos.
Ver [Prompt_Web_ReGest.md](Prompt_Web_ReGest.md) para el brief original de contenido/tono.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4
- Resend para el envío de emails del formulario de contacto
- Desplegado en Vercel (proyecto "re-gest-web"), repo GitHub `manuramsan99/ReGestWeb`,
  rama `main` con auto-deploy. Dominio `regest.es` verificado en Vercel y en Resend.

## Estructura

- `app/page.tsx` — home, compone todas las secciones en orden
- `components/` — un componente por sección (`Hero`, `Problem`, `Dashboard`,
  `HowItWorks`, `OcrFeature`, `WhyReGest`, `ForGestoria`, `SocialProof`, `FinalCta`,
  `Header`, `Footer`, `Logo`) + utilidades (`ContactForm`, `CookieConsentBanner`,
  `CookiePreferencesButton`, `HashLink`, `LegalPage`, `StructuredData`)
- `app/aviso-legal/`, `/privacidad/`, `/cookies/`, `/terminos/` — páginas legales
- `app/api/contact/route.ts` — endpoint del formulario: valida, envía aviso interno a
  `hola@regest.es` y confirmación HTML al remitente (ambos vía Resend)
- `app/icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx` — iconos e
  imagen social generados por código (sin assets estáticos)
- `app/sitemap.ts`, `robots.ts` — SEO técnico
- `lib/` — `validation.ts` (email/teléfono, compartido cliente+servidor),
  `legalInfo.ts` (datos del titular, con placeholders), `cookieConsent.ts`,
  `emailTemplates.ts` (email HTML de confirmación), `scrollToSection.ts`

## Estado actual — Fase 1 completa

- Landing completa, todas las secciones con diseño revisado para ser compacto y visual
  (iconos en vez de párrafos largos, mockups reales tipo tabla en OCR/gestoría, evitando
  repetir el mismo patrón de tarjeta en cada sección)
- Header: enlace **"Iniciar sesión"** (verde, mismo estilo que "Pide acceso") →
  `https://app.regest.es`
- Navegación interna (menú, botones "Pide acceso"/"Ver cómo funciona") vía `HashLink`:
  hace scroll suave sin ensuciar la URL con `#ancla`
- Formulario de contacto real (ya no es un `mailto:` roto a un dominio equivocado):
  valida email/teléfono en cliente y servidor, honeypot anti-spam, envía aviso interno +
  confirmación HTML de marca al remitente
- Páginas legales completas (aviso legal, privacidad, cookies, términos) + banner de
  consentimiento de cookies funcional (aceptar/rechazar, reabrible desde el footer)
- Favicon + apple-icon con la marca (cuadrado verde, "R" blanca)
- SEO: `metadataBase`, Open Graph + Twitter Card con imagen de marca generada,
  `sitemap.xml`, `robots.txt`, JSON-LD `SoftwareApplication`, canonical en las 5 páginas,
  keywords de nicho en el `<head>`

## Pendiente / a vigilar antes o después de publicar cambios

- **[lib/legalInfo.ts](lib/legalInfo.ts)** tiene placeholders `[NOMBRE]`, `[NIF]`,
  `[DIRECCIÓN]` — rellenar con los datos reales del titular (autónomo) para que las 4
  páginas legales sean válidas de verdad
- **[components/SocialProof.tsx](components/SocialProof.tsx)**: los 3 testimonios
  (Antonio, Marta, Javier) son **ficticios**, marcados con un comentario `TODO` en el
  código — sustituir por citas reales de clientes en cuanto existan
- Variables de entorno: confirmar que `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y
  `CONTACT_FROM_EMAIL` están puestas en **Vercel** (Project Settings → Environment
  Variables), no solo en `.env.local` local
- SEO fase 2 sin decidir: ¿crear páginas propias para long-tail (ej. presupuestos,
  facturas OCR) para captar tráfico de búsqueda más allá de la marca? Ahora todo vive en
  una sola página con anclas
- El CTA principal "Pide acceso" lleva al formulario de contacto, no a un alta
  automática — es intencional, hoy no existe registro self-service en la app

## Decisiones de diseño a recordar

- Paleta: verde ReGest `#27AE9D` / gris oscuro `#222B2E`, tipografía Inter
- Cada sección debe tener un lenguaje visual **distinto** al resto (el feedback explícito
  fue que repetir la misma tarjeta blanca con borde en todas partes se sentía monótono)
- Antes de dar por bueno un cambio visual, verificar con capturas en escritorio y en los
  anchos móviles más pequeños (320–390px) — varias veces ha aparecido overflow horizontal
  ahí (tablas, headers con muchos elementos)
