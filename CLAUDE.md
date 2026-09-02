# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Qué es este repo

Landing page (marketing) de **ReGest**, un mini-ERP para autónomos y pequeñas
empresas de reformas y construcción en España. Este repositorio **solo contiene
la web pública**; el producto ReGest (Next.js + Supabase en Vercel) vive en otro
proyecto. `Prompt_Web_ReGest.md` es el brief original y es la fuente de verdad
para copy, funciones que se pueden mencionar y lo que **no** se debe prometer
(sin registro self-service ni recuperación de contraseña; "Usuarios y permisos"
y "Configuración contable" son de solo lectura hoy).

## Comandos

```bash
npm run dev      # servidor de desarrollo (next dev)
npm run build    # build de producción
npm run start    # sirve el build
npm run lint     # next lint
```

No hay tests ni framework de testing configurado.

## Stack y arquitectura

- **Next.js 16** (App Router) + **React 19** + **TypeScript strict**.
- **Tailwind CSS v4** vía `@tailwindcss/postcss` — sin `tailwind.config.js`. El
  tema se define con la directiva `@theme` en `app/globals.css` (colores de
  marca `regest-green`, `regest-dark`, etc. → usa clases como `bg-regest-green`).
- Fuente **Inter** cargada con `next/font/google` en `app/layout.tsx`, expuesta
  como `--font-inter` / clase `font-sans`.
- Alias de imports: `@/*` → raíz del repo (p. ej. `@/components/Hero`).
- Idioma del sitio: español (`<html lang="es">`). Todo el copy va en español.

### Estructura

- `app/page.tsx` — única página; ensambla las secciones en orden. Añadir o
  reordenar una sección se hace aquí.
- `app/layout.tsx` — `<html>`/`<body>`, fuente y `metadata` (SEO).
- `components/*.tsx` — una sección por archivo, todas **Server Components** sin
  estado (no hay `"use client"` en el proyecto). Export nombrado, no default.
  `Logo.tsx` exporta `Logo` y `LogoMark`.
- La navegación del `Header` y los CTA son anclas a `id`s de sección
  (`#como-funciona`, `#panel`, `#ocr`, `#gestoria`, `#contacto`). Si renombras
  un `id` de sección, actualiza `NAV_ITEMS` en `components/Header.tsx`.

### Convenciones al añadir/editar secciones

- Contenedor estándar: `mx-auto max-w-6xl px-6 py-24`.
- Usa los tokens de color de marca (`regest-*`), no hex sueltos.
- Los mockups de UI dentro de las secciones (tarjeta de obra, panel OCR, etc.)
  son **maquetas estáticas con datos de ejemplo hardcodeados**, no componentes
  reales del producto.

## Nota sobre el bloque de reglas de Next.js

`AGENTS.md` contiene un bloque `<!-- BEGIN:nextjs-agent-rules -->` que `next dev`
regenera automáticamente. Si aparece como cambio sin commitear, haz commit junto
con tu trabajo en lugar de descartarlo.
