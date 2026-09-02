# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@PROJECT_STATUS.md

`PROJECT_STATUS.md` es el contexto vivo del proyecto (estado, pendientes,
decisiones de diseño) — léelo siempre. Este archivo solo añade lo que no está
allí: comandos y detalles de arquitectura.

## Norma: registrar los cambios confirmados

Cada vez que el usuario dé por bueno un cambio, añade una línea en el "Registro
de cambios" del final de este archivo (fecha `YYYY-MM-DD` + qué se hizo + qué
archivos toca). Solo cambios confirmados por el usuario, no trabajo en progreso.

## Comandos

```bash
npm run dev      # servidor de desarrollo (next dev)
npm run build    # build de producción + type-check (úsalo para verificar cambios)
npm run start    # sirve el build
```

No hay tests configurados. `npm run lint` está roto en Next 16 (`next lint` fue
retirado); verifica los cambios con `npm run build`. Para que el formulario de
contacto funcione en local, copia `.env.local.example` a `.env.local` y rellena
`RESEND_API_KEY` (las otras dos tienen fallback en el código).

## Arquitectura

Landing de marketing en **Next.js 16 (App Router)** + React 19 + TypeScript
strict + **Tailwind CSS v4**. La app real de ReGest vive en otro repo
(`app.regest.es`); aquí solo está `regest.es`.

- **Tailwind v4 sin `tailwind.config.js`**: el tema se define con `@theme` en
  `app/globals.css` (tokens `regest-green`, `regest-dark`, …). Usa clases como
  `bg-regest-green`, nunca hex sueltos.
- **Server vs Client Components**: casi todo son Server Components estáticos. Son
  Client Components (`"use client"`) solo: `ContactForm`, `Header`, `HashLink`,
  `CookieConsentBanner`, `CookiePreferencesButton`.
- **`HashLink`** (`components/HashLink.tsx` + `lib/scrollToSection.ts`): toda la
  navegación interna a secciones va por aquí — en la home hace scroll suave sin
  escribir `#ancla` en la URL; fuera de la home enlaza a `/#ancla`. No uses
  `<a href="#...">` a pelo para navegación de menú.
- **Páginas**: `/` (home, secciones en `app/page.tsx`), `/precios` (página
  dedicada con FAQ + schema, usa `Header`/`Footer` completos) y las 4 legales.
- **`lib/validation.ts`**: `isValidEmail` / `isValidPhone` se usan **igual en
  cliente y en servidor** (`ContactForm` y `app/api/contact/route.ts`). Mantén
  ambas rutas de validación en sync.
- **`app/api/contact/route.ts`**: valida, honeypot anti-spam (`company`), envía
  aviso interno + email de confirmación de marca (`lib/emailTemplates.ts`) vía
  Resend. La confirmación al remitente no bloquea la respuesta si falla.
- **Iconos e imágenes sociales generados por código**: `app/icon.tsx`,
  `apple-icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx` — no hay assets
  estáticos ni carpeta `public/`.
- **Páginas legales**: `app/{aviso-legal,privacidad,cookies,terminos}/` usan
  `components/LegalPage.tsx` y los datos de `lib/legalInfo.ts` (con placeholders
  `[NOMBRE]`/`[NIF]`/`[DIRECCIÓN]` pendientes de rellenar).
- **`app/page.tsx`** compone todas las secciones en orden; añadir/reordenar una
  sección se hace ahí. La nav del `Header` (`NAV_ITEMS`) apunta a `id`s de
  sección — si renombras un `id`, actualízala.

## Nota sobre el bloque de reglas de Next.js

`AGENTS.md` contiene un bloque `<!-- BEGIN:nextjs-agent-rules -->` que `next dev`
regenera automáticamente. Si aparece como cambio sin commitear, haz commit junto
con tu trabajo en lugar de descartarlo.

## Registro de cambios

- **2026-09-02** — Añadido `ToDoList.md` con el plan de mejoras SEO/conversión
  derivado de `Auditoria_SEO_Conversion_ReGest.md` (tandas A-E, dificultad y
  dependencias). Trabajo pendiente en la rama `mejoras-seo`.
- **2026-09-02** — SEO de precios: nueva página `app/precios/page.tsx` (canonical
  `/precios`, metadata propia, JSON-LD `Product`+`Offer`+`FAQPage`+`BreadcrumbList`,
  7 FAQ de precio). Tarjeta extraída a `components/PricingCard.tsx` (compartida por
  la sección de la home y la página). `components/Pricing.tsx` ahora enlaza a
  `/precios`. `app/sitemap.ts` incluye `/precios` (prioridad 0.8). `Hero` añade
  microcopy "Desde 20 €/mes" con enlace a `/precios`. `HashLink` ahora enlaza a
  `/#seccion` cuando no está en la home (para que la nav funcione desde subpáginas).
  Precio mostrado como "20 €/mes + IVA".
- **2026-09-02** — Sección de precios: nuevo `components/Pricing.tsx` (plan
  único 20 €/mes con 1 mes gratis de prueba), añadida a `app/page.tsx` tras
  `SocialProof`, entrada "Precios" (`#precios`) en `NAV_ITEMS` de
  `components/Header.tsx`, y `offers` (20 EUR) en el JSON-LD de
  `components/StructuredData.tsx`.
- **2026-09-02** — Resuelto el conflicto de merge en `CLAUDE.md` (marcadores
  commiteados en `c7456b0`); ahora importa `AGENTS.md` + `PROJECT_STATUS.md` y
  añade comandos y notas de arquitectura.
