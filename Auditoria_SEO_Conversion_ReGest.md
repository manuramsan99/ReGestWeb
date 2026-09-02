# Auditoría web y plan de contenido — regest.es

Fecha: 2 de septiembre de 2026
Alcance: landing de marketing (regest.es), separada de la app (app.regest.es)

## Resumen ejecutivo

La landing está en buena forma técnica de base: un único H1, meta title y description bien orientados a la intención de búsqueda, canonical correcto, sitemap y robots.txt sin errores, y una página de precios reciente ya con FAQ y JSON-LD (Product, Offer, FAQPage, BreadcrumbList). El copy sigue el tono directo que pedía el brief original y evita las promesas que no tocan (registro público, seguridad certificada). Sobre eso, hay tres palancas claras para mover la aguja:

Primera, **no hay ni una sola pieza de contenido más allá de home y precios**. El sitemap solo tiene 6 URLs y ninguna es un artículo o página de aterrizaje adicional. Eso significa que, para búsquedas como "software gestión obras" o "ERP autónomos construcción", ReGest compite con una sola página contra competidores que tienen decenas de artículos, comparativas y plantillas descargables indexadas.

Segunda, **la página es enteramente texto y cajas con color, sin una sola imagen o mockup real** — ni de las 5 plantillas de presupuesto, ni del panel de control, ni del flujo de OCR fotografiando un ticket. El propio prompt original de la web pedía explícitamente "capturas o mockups" y "un ejemplo visual (foto → datos extraídos)", y eso no llegó a construirse. Para una audiencia de autónomos de obra que no confía a ciegas en software, ver la herramienta real antes de escribir sus datos en un formulario importa más que casi cualquier otro cambio de copy.

Tercera, el formulario de contacto es único y genérico para los cinco CTA distintos de la página (pedir acceso, ver precios, pedir mes gratis...), sin señales de confianza junto a él (tiempo de respuesta, qué pasa después de enviarlo) y sin una alternativa de contacto más natural para este público — WhatsApp — pese a que la propia página se posiciona precisamente contra el WhatsApp como método de gestión.

Ninguno de estos tres puntos requiere rehacer la web. Son añadidos incrementales sobre lo que ya existe.

## 1. SEO on-page

### Lo que ya está bien

El `<title>` de la home ("ReGest — El ERP para autónomos de reformas y construcción") y su meta description colocan la intención comercial y el problema en las primeras palabras, que es lo que Google recorta en el snippet. La estructura de encabezados es limpia: un único H1 y una progresión lógica de H2 por sección (problema → panel de control → flujo → OCR → comparativa → gestoría → prueba social → precio → CTA final). El canonical, el Open Graph completo (16 etiquetas) y el Twitter Card están bien formados, y `/precios` ya incorpora datos estructurados de `Product`, `Offer`, `FAQPage` y `BreadcrumbList` — es la página mejor optimizada técnicamente del sitio ahora mismo.

### Qué falta o se puede afinar

La meta keywords tag que declara "software gestión obras, ERP autónomos construcción, programa presupuestos reformas..." es una lista honesta de la intención, pero Google la ignora desde hace más de una década — no hace daño, pero tampoco cuenta como optimización; lo que sí cuenta es que esas frases aparezcan en el texto visible. Ahora mismo el H1 no contiene literalmente "software gestión obras" ni "ERP autónomos construcción" (usa "Llévalo todo desde una app"), y el subtitular se acerca ("ERP para autónomos y pequeñas empresas de reformas y construcción") pero con otro orden de palabras. No hace falta forzar el H1 — sigue siendo mejor un H1 que venda el beneficio — pero sí conviene que la frase exacta "software de gestión de obras" y "ERP para autónomos de la construcción" aparezcan tal cual en algún H2, en el primer párrafo bajo el hero o en el `alt` de las imágenes nuevas que se añadan (ver punto 2). Es la diferencia entre que Google infiera la relevancia y que la tenga confirmada en texto.

La home no tiene FAQ ni su schema — solo `/precios` lo tiene. Un bloque de 4-5 preguntas al final de la home (del tipo "¿sustituye a mi gestoría?", "¿necesito instalar algo o formar a nadie?", "¿funciona si tengo mala cobertura en la obra?", "¿puedo llevar varias empresas?") serviría dos propósitos a la vez: capturar featured snippets adicionales y resolver objeciones justo antes del CTA final, que es exactamente donde más pesan.

No hay ninguna página ni sección dedicada a VeriFactu. Es un tema que va a generar mucho volumen de búsqueda entre autónomos en 2026 por la obligatoriedad del nuevo sistema de facturación electrónica, y ya hay competidores (por ejemplo Cuidacasa) publicando contenido específico cruzando VeriFactu con gestión de obras. Aquí hay que ir con cuidado: antes de publicar nada que sugiera que ReGest ya cumple VeriFactu, confirmar con el estado real del producto — el contexto de la app no menciona compliance VeriFactu implementado. Si no lo está, el contenido debe quedarse en "qué es y cómo te afecta" (educativo, capta la búsqueda) sin prometer una funcionalidad que aún no existe; si se implementa, es un candidato fuerte a diferenciador central.

### Quick wins técnicos (verificar en el repo)

Confirmar que la fuente Inter se carga con `next/font` (autohospedada) y no como enlace a Google Fonts — evita una petición de red que bloquea el render. Confirmar que `app/opengraph-image.tsx` y `app/icon.tsx` están marcados como estáticos (`export const dynamic = 'force-static'` o equivalente) y no se regeneran en cada request — solo importa para el coste de servidor, no para la velocidad que percibe el visitante, pero es gratis de arreglar si no lo está ya.

## 2. Velocidad

No he podido tirar de datos en vivo de PageSpeed Insights (la API pública sin clave devolvió error 429 por límite de cuota); si quieres cifras exactas de LCP/CLS/TBT lo más rápido es correr Lighthouse desde Chrome DevTools o `https://pagespeed.web.dev/` directamente sobre regest.es y /precios — toma cinco minutos y te doy la lectura de los resultados si me pegas el JSON o las capturas.

Dicho esto, la arquitectura ya juega a favor: Next.js 16 con App Router y casi todo en Server Components (solo `ContactForm`, `Header`, `HashLink`, `CookieConsentBanner` y `CookiePreferencesButton` son cliente), sin carpeta `public/` ni imágenes estáticas pesadas, con iconos y OG images generados por código. En la práctica eso significa un HTML inicial ligero y poco JavaScript que hidratar — probablemente una Core Web Vitals decente ya de partida, precisamente *porque* no hay imágenes.

Y ahí está la tensión con el punto 1: en cuanto añadas capturas reales del producto (recomendado más abajo), la velocidad deja de estar garantizada por defecto y pasa a depender de cómo se sirvan esas imágenes. Para no perder lo que ya tienes: usar siempre `next/image` (nunca `<img>` suelto) con `width`/`height` explícitos para que no haya salto de layout (CLS), formato WebP/AVIF, y `priority` únicamente en la imagen que sea el elemento LCP de la home (probablemente la primera captura visible bajo el hero, si decides poner una ahí) — el resto con lazy loading por defecto. Con eso puedes añadir las 4-6 imágenes del punto 2 sin sacrificar la velocidad actual.

## 3. Sin imágenes de producto: el hueco más grande de la landing

Esto conecta SEO y conversión a la vez, por eso lo saco como bloque propio.

El prompt original que generó la web pedía explícitamente mockups de las 5 plantillas de PDF y un ejemplo visual del OCR (foto → datos extraídos), y hoy esas secciones están resueltas con cajas de texto estilizadas, no con imágenes reales. Funciona como demostración de concepto, pero para un autónomo de reformas que no es de software, ver la interfaz real — aunque sea una única captura de pantalla bien recortada — reduce el riesgo percibido de un modo que ningún párrafo de copy consigue. Es además contenido indexable en Google Imágenes con búsquedas del tipo "programa presupuestos reformas" o "factura reforma PDF", que hoy no captura nada porque no hay imágenes.

Recomendación concreta, de menor a mayor esfuerzo: (1) una captura real de una de las 5 plantillas de presupuesto en PDF junto a la sección de "De un cliente a una obra cobrada"; (2) una captura real del flujo OCR — foto del ticket a la izquierda, datos extraídos a la derecha — en la sección "Fotografía el ticket"; (3) una captura del panel de control con datos de ejemplo (no reales de ningún cliente) en la sección de KPIs. Cada imagen con `alt` descriptivo que incluya de forma natural la keyword de la sección (ej. `alt="Plantilla de presupuesto de reforma en PDF generada por ReGest"`), servidas con `next/image` como se explica en el punto anterior.

## 4. Plan de contenido para posicionar

El objetivo con "software gestión obras" y "ERP autónomos construcción" no se consigue solo optimizando la home — esas son búsquedas donde Google típicamente prefiere mostrar comparativas y contenido informativo junto a las páginas de producto, y ahí es donde compiten softwaredoit.es, motordepresupuestos.com o reformabot.com, que sí tienen blog. La home y /precios deben seguir siendo las páginas que capturan intención transaccional ("regest", "erp reformas precio"); el contenido nuevo va detrás de intención informativa y de comparación, y cada pieza enlaza a home o precios con un CTA.

Propongo montar una sección `/recursos` o `/blog` (nueva ruta en `app/`) con estas piezas, en tres tandas por impacto/esfuerzo:

**Tanda 1 — 0 a 30 días, esfuerzo bajo, ganchos ya escritos en la propia home**

| Página | Keyword objetivo | Ángulo |
|---|---|---|
| Plantilla de presupuesto de reforma gratis | "plantilla presupuesto reforma gratis" | Descargable real (PDF/Excel) a cambio de nada, con nota de "esto mismo pero automático, con tus márgenes calculados, lo hace ReGest" y CTA a probar. Es la keyword de mayor volumen de las investigadas y hoy no la captura nadie de ReGest. |
| Excel para gestionar obras: por qué se queda corto | "gestión de obras en excel" | Expande la sección ya existente "Por qué ReGest y no un Excel con más pestañas" a página propia con ejemplos concretos (versión desactualizada, sin trazabilidad, sin backup). Reutiliza copy que ya tienes. |
| Cómo facturar una reforma paso a paso (IVA, IRPF, vencimientos) | "cómo facturar una reforma" / "modelo factura autónomo obras" | Guía práctica; ancla natural hacia la función de facturación con retención de IRPF. |

**Tanda 2 — 30 a 90 días, la pieza diferencial**

| Página | Keyword objetivo | Ángulo |
|---|---|---|
| Digitalizar facturas de proveedor con el móvil (OCR) | "OCR facturas proveedores" / "digitalizar tickets obra" | Contenido explicativo + demo visual del OCR — es la función más diferencial de ReGest y hoy no tiene ninguna página propia fuera de un H2 en la home. |
| VeriFactu para autónomos de reformas: qué cambia en 2026 | "VeriFactu autónomos reformas" | Educativo, sin prometer compliance si aún no está implementado (ver nota del punto 1). Alto volumen esperado por la novedad regulatoria. |
| Del presupuesto a la factura sin salir de una app | "software gestión obras" / "ERP autónomos construcción" (pilar) | Página pilar que sí usa las keywords principales de forma literal, enlazando a todas las piezas anteriores y sirviendo de hub. |

**Tanda 3 — 90+ días, autoridad y comparación**

| Página | Keyword objetivo | Ángulo |
|---|---|---|
| ReGest vs. llevar la obra en Excel y WhatsApp | comparativa de marca | Landing de comparación honesta, formato tabla, para quien ya está evaluando alternativas. |
| Cómo pasar los números a la gestoría sin perder tiempo | "exportar facturas excel gestoría" | Apunta al canal secundario (gestorías) que ya menciona el brief. |
| Casos de uso reales (a medida que haya más clientes) | prueba social ampliada | Sustituye "ya en uso real" por 1-2 mini casos con cifras concretas cuando existan, sin inventar nada mientras tanto. |

Cada artículo debe llevar, como mínimo, un CTA a mitad de texto y otro al final hacia `#contacto` o `/precios`, y enlazarse desde la home donde tenga sentido temático (por ejemplo la sección OCR enlazando al artículo de digitalización).

## 5. Formulario de contacto y CTAs

El formulario actual (Nombre, Email, Teléfono opcional, un campo abierto "Cuéntanos cómo llevas tus obras hoy", botón "Enviar mensaje") es corto y eso está bien — no hay que añadir campos. Los cambios que sí muevo son:

**Contexto por CTA.** Los cinco CTA de la página ("Pide acceso", "Ver cómo funciona", "Ver precios", "Pide tu mes gratis") aterrizan todos en el mismo formulario genérico. Alguien que llegó desde "Pide tu mes gratis" y alguien que llegó desde el CTA del hero están teniendo la misma conversación. Un cambio de bajo coste: pasar un parámetro (o usar el motivo del clic) para precargar o mostrar una frase de encabezado del formulario distinta según el origen ("Vamos a activar tu mes gratis" vs. "Cuéntanos tu caso y te lo enseñamos"), sin tocar los campos.

**Señales de confianza junto al formulario, no solo en la sección de testimonios.** Ahora mismo la prueba social vive en su propia sección, separada del formulario. Justo al lado o debajo del botón "Enviar mensaje" conviene una línea corta de expectativa ("Te respondemos en menos de 24h, sin compromiso") y quizá una mini-cita de un cliente real, no solo la sección aparte más arriba en la página. Reduce la duda de última hora justo antes de convertir.

**Canal WhatsApp como alternativa.** La página entera se posiciona contra el WhatsApp como herramienta de gestión, pero para contactar con ReGest solo hay un formulario web. Este público concreto —autónomos de obra, muchos con poco hábito de rellenar formularios desde el móvil en la obra— probablemente convierte mejor con un enlace directo a WhatsApp ("¿Prefieres escribirnos? [WhatsApp]") como opción secundaria junto al formulario, no en su lugar. Es coherente con el propio tono de marca ("gente de obra, no oficinistas") y quita fricción al segmento que more skeptical of forms.

**El campo abierto puede convertir menos de lo que parece.** "Cuéntanos cómo llevas tus obras hoy" es una buena pregunta para cualificar, pero al ser obligatorio en apariencia (sin indicar "opcional") puede frenar a quien solo quiere un precio o una demo rápida. Si no lo es ya, marcarlo explícitamente como opcional con un placeholder que dé permiso a ser breve ("una frase basta") baja la barrera de entrada sin perder la señal cuando alguien sí quiere explayarse.

**CTA final ("Pide tu mes gratis") es el más fuerte de la página** porque cuantifica el beneficio (gratis, sin permanencia) en vez de ser genérico ("Enviar mensaje" en el propio botón del formulario). Vale la pena que el texto del botón del formulario diga lo mismo que el CTA que lo trajo hasta ahí — cambiar "Enviar mensaje" por algo como "Quiero mi mes gratis" (o el texto equivalente al CTA de origen) cierra el círculo en vez de bajar la intensidad justo en el último clic.

## Prioridad recomendada

| Prioridad | Acción | Impacto | Esfuerzo |
|---|---|---|---|
| 1 | Añadir 3 capturas reales de producto (presupuesto PDF, OCR, panel) con `next/image` y alt optimizado | SEO + conversión | Medio |
| 2 | Cambiar el texto del botón del formulario para que refleje el CTA de origen + añadir línea de expectativa de respuesta | Conversión | Bajo |
| 3 | Añadir enlace/CTA secundario a WhatsApp junto al formulario | Conversión | Bajo |
| 4 | Publicar la plantilla de presupuesto gratis (lead magnet) | SEO (tráfico) | Medio |
| 5 | FAQ + schema en la home | SEO | Bajo |
| 6 | Página pilar "software de gestión de obras / ERP autónomos construcción" enlazando al resto del contenido | SEO | Medio |
| 7 | Resto del calendario de contenido (tandas 2 y 3) | SEO | Alto (continuo) |
| — | Correr Lighthouse/PSI real sobre home y /precios para tener cifras exactas de Core Web Vitals | Verificación | Bajo |

## Fuentes consultadas

- [TOP 4 Software Reformas y Presupuesto de Obra 2026 — softwaredoit.es](https://www.softwaredoit.es/software-construccion/presupuestos-gestion-obras-reformas.html)
- [Mejor software de gestión de obras en España 2026 — medicionpro.com](https://medicionpro.com/blog/mejor-software-gestion-obras-espana)
- [Software para reformistas en España: guía completa 2026 — reformabot.com](https://reformabot.com/blog/software-reformas-espana-guia/)
- [Modelo de factura para autónomos de obras 2026 — motordepresupuestos.com](https://motordepresupuestos.com/modelo-factura-autonomo-obras)
- [Mejor ERP para Constructoras 2026 — billeo.es](https://www.billeo.es/blog/erp-para-constructoras)
- [Plantilla de presupuesto de reforma gratis — motordepresupuestos.com](https://motordepresupuestos.com/plantilla-presupuesto/reformas)
- [Apps para autónomos en España 2026: facturación, Verifactu, gastos — wwwhatsnew.com](https://wwwhatsnew.com/2026/05/18/apps-para-autonomos-en-espana-2026-facturacion-verifactu-gastos-y-las-herramientas-que-de-verdad-ahorran-horas/)
- [Cómo integrar presupuestos, partes de trabajo y facturas cumpliendo VeriFACTU — cuidacasa.com](https://cuidacasa.com/como-integrar-presupuestos-partes-de-trabajo-y-facturas-en-una-sola-app-cumpliendo-verifactu-desglose-experto-para-autonomos/)
- [Los 5 mejores programas con lector OCR para facturas en 2026 — billin.net](https://www.billin.net/blog/los-5-mejores-programas-con-lector-ocr-para-facturas/)
