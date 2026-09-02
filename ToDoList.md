# ToDoList — Mejoras SEO y conversión (regest.es)

Origen: `Auditoria_SEO_Conversion_ReGest.md` (auditoría del 2026-09-02).
Rama de trabajo: `mejoras-seo`.

Leyenda dificultad de **código**: 🟢 trivial (<1 h) · 🟡 bajo (1-4 h) · 🟠 medio (medio día - 1 día) · 🔴 continuo.
`[dep]` = depende de algo que no es programar.

---

## Ya hecho (fase inicial de precios/SEO — commit `e55058a`)

- [x] Página `/precios` con metadata propia, canonical, OG/Twitter.
- [x] JSON-LD en `/precios`: `Product` + `Offer` + `FAQPage` (7 preguntas) + `BreadcrumbList`.
- [x] `components/PricingCard.tsx` compartido (home + `/precios`).
- [x] `/precios` en `app/sitemap.ts` (prioridad 0.8).
- [x] `Hero` con microcopy "Desde 20 €/mes" enlazando a `/precios`.
- [x] `HashLink` enlaza a `/#seccion` fuera de la home (nav funcional desde subpáginas).
- [x] `offers` en el JSON-LD de la home (`components/StructuredData.tsx`) apuntando a `/precios`.

## Verificado que ya estaba bien (no tocar)

- [x] Inter cargada con `next/font` (autohospedada), no enlace a Google Fonts.
- [x] `app/opengraph-image.tsx`, `app/icon.tsx`, `app/twitter-image.tsx` se prerenderizan estáticos (`○ Static` en el build).
- [x] Un único H1 en la home, progresión limpia de H2.
- [x] Canonical, Open Graph (16 tags) y Twitter Card bien formados.
- [x] Campo Teléfono ya marcado como "(opcional)".

---

## Tanda A — código puro, sin dependencias externas (empezar por aquí)

- [ ] 🟢 **FAQ + schema en la home.** Reutilizar el patrón de `app/precios/page.tsx`
      (array `FAQ` + JSON-LD `FAQPage`). Extraer un componente `components/Faq.tsx`
      compartido. Insertar bloque de 4-5 preguntas antes de `<FinalCta />` en
      `app/page.tsx`. Preguntas sugeridas: "¿sustituye a mi gestoría?", "¿necesito
      instalar algo o formar a alguien?", "¿funciona con mala cobertura en la obra?",
      "¿puedo llevar varias empresas?".
- [ ] 🟢 **Keywords literales en texto visible.** Que "software de gestión de obras"
      y "ERP para autónomos de la construcción" aparezcan tal cual en algún H2 o en
      el primer párrafo bajo el hero. No forzar el H1 (mejor que venda beneficio).
      Coordinar con el tono de marca antes de tocar copy.
- [ ] 🟢 **Textarea del formulario opcional.** En `components/ContactForm.tsx` el
      `<textarea name="message">` es `required` sin avisar. Quitar `required` (o
      marcarlo "(opcional)") y placeholder que dé permiso a ser breve ("una frase
      basta"). Nota: `app/api/contact/route.ts` hoy valida `message` como
      obligatorio — quitar esa comprobación también.
- [ ] 🟡 **Andamiaje `next/image` + carpeta `public/`.** Crear `public/`, primer uso
      de `<Image>` en el repo, dejar listo el patrón (width/height explícitos, WebP,
      `priority` solo en el elemento LCP). Sin esto no se pueden hacer los puntos de
      capturas ni el lead magnet.

## Tanda B — código fácil pero `[dep]` decisión de negocio

- [ ] 🟢 `[dep]` **Enlace secundario a WhatsApp junto al formulario.**
      `<a href="https://wa.me/34XXXXXXXXX">` como opción secundaria, no en lugar del
      form. Necesita: número de WhatsApp Business y decisión de publicarlo.
- [ ] 🟡 `[dep]` **Texto del botón del form según el CTA de origen.** Hoy los CTA
      hacen scroll a `#contacto` sin cambiar la URL. Hay que pasar el motivo del
      clic (query `?motivo=mes-gratis` o estado compartido) para: (a) cambiar el
      encabezado del form ("Vamos a activar tu mes gratis" vs "Cuéntanos tu caso"),
      (b) cambiar el texto del botón ("Quiero mi mes gratis" en vez de "Enviar
      mensaje"). Decisión: qué variantes de copy.
- [ ] 🟢 **Línea de expectativa junto al botón "Enviar".** "Te respondemos en menos
      de 24h, sin compromiso" + quizá mini-cita de cliente real. (La frase es
      trivial; la cita real `[dep]` de tener testimonios reales.)

## Tanda C — capturas de producto (prioridad 1 de la auditoría)

> Código 🟡 bajo. El grueso del trabajo es `[dep]`: sacar las capturas de la app
> real, recortarlas y usar **datos de ejemplo, nunca de un cliente real**.

- [ ] 🟡 `[dep]` Captura de una de las 5 plantillas de presupuesto en PDF, junto a la
      sección "De un cliente a una obra cobrada". `alt="Plantilla de presupuesto de
      reforma en PDF generada por ReGest"`.
- [ ] 🟡 `[dep]` Captura del flujo OCR (foto del ticket + datos extraídos) en la
      sección "Fotografía el ticket". Sustituye la maqueta de texto actual de
      `components/OcrFeature.tsx`.
- [ ] 🟡 `[dep]` Captura del panel de control con datos de ejemplo, en la sección de
      KPIs (`components/Dashboard.tsx`).

## Tanda D — contenido / posicionamiento (prioridad media-alta, esfuerzo continuo)

> Infraestructura una vez (🟠), luego cada pieza es principalmente redacción.

- [ ] 🟠 **Decidir sistema de blog/recursos.** Nueva ruta `app/recursos/` o
      `app/blog/`. Opciones: MDX, CMS ligero, o páginas `.tsx` a mano. Incluir:
      layout de artículo, listado, y **sitemap generado** (hoy `app/sitemap.ts` es
      un array a mano — no escala).
- [ ] 🟠 **Página pilar** "Del presupuesto a la factura sin salir de una app" con
      las keywords principales literales, sirviendo de hub que enlaza al resto.

### Tanda 1 de contenido (0-30 días, ganchos ya escritos en la home)

- [ ] 🔴 "Plantilla de presupuesto de reforma gratis" → kw *plantilla presupuesto
      reforma gratis*. Descargable real (PDF/Excel) + CTA a probar ReGest.
      `[dep]` diseñar la plantilla. Decisión: descarga directa o captura de email.
- [ ] 🔴 "Excel para gestionar obras: por qué se queda corto" → kw *gestión de obras
      en excel*. Expande la sección `components/WhyReGest.tsx` a página propia.
- [ ] 🔴 "Cómo facturar una reforma paso a paso (IVA, IRPF, vencimientos)" → kw
      *cómo facturar una reforma* / *modelo factura autónomo obras*.

### Tanda 2 de contenido (30-90 días)

- [ ] 🔴 "Digitalizar facturas de proveedor con el móvil (OCR)" → kw *OCR facturas
      proveedores* / *digitalizar tickets obra*. Con demo visual.
- [ ] 🔴 `[dep]` "VeriFactu para autónomos de reformas: qué cambia en 2026" → kw
      *VeriFactu autónomos reformas*. **Antes de escribir: confirmar el estado real
      de compliance VeriFactu en la app.** Si no está implementado, contenido solo
      educativo ("qué es y cómo te afecta"), sin prometer funcionalidad.

### Tanda 3 de contenido (90+ días)

- [ ] 🔴 "ReGest vs. llevar la obra en Excel y WhatsApp" → comparativa de marca,
      formato tabla.
- [ ] 🔴 "Cómo pasar los números a la gestoría sin perder tiempo" → kw *exportar
      facturas excel gestoría*. Apunta al canal secundario (gestorías).
- [ ] 🔴 `[dep]` "Casos de uso reales" → sustituir "ya en uso real" por 1-2 mini
      casos con cifras concretas **cuando existan clientes reales que lo permitan**.

## Tanda E — verificación / medición

- [ ] 🟢 Correr Lighthouse / PageSpeed Insights sobre `regest.es` y `/precios` para
      tener cifras reales de LCP/CLS/TBT. Rehacer **después** de añadir las capturas
      (es cuando la velocidad deja de estar garantizada por defecto).
- [ ] 🟢 `[dep]` Revisar si hay analítica de eventos (más allá del cookie consent)
      para poder medir conversión de los CTA. Si no, decidir herramienta.

---

## Notas de arquitectura a recordar

- `app/sitemap.ts` es un array **a mano**: cada página nueva necesita su línea.
  Para el blog conviene generarlo.
- No hay `public/` ni uso de `next/image` todavía — la Tanda A lo deja montado.
- Patrón de FAQ + JSON-LD ya resuelto en `app/precios/page.tsx`, copiar de ahí.
- La meta `keywords` tag no cuenta para SEO (Google la ignora); lo que cuenta es
  el texto visible.
