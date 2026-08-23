# Prompt para generar la web de ReGest

Copia y pega esto en la herramienta que uses para crear la landing (Claude, v0, Framer AI, etc.). Está redactado en primera persona como si se lo explicaras tú mismo a quien va a diseñarla.

---

Quiero una landing page para **ReGest**, un mini ERP para autónomos y pequeñas empresas de construcción y reformas en España. Sustituye el papel, el Excel suelto y el WhatsApp con proveedores por una sola aplicación donde un autónomo lleva sus clientes, obras, presupuestos, facturas y proveedores de principio a fin.

## Contexto real (no es un prototipo)

ReGest ya está en uso real por un cliente que lo usa a diario para su negocio de reformas y está muy contento con él. No es una idea ni un mockup: es software funcionando en producción, construido en Next.js/Supabase, desplegado en Vercel.

## Qué hace hoy, de verdad (usa esto, no inventes funciones)

- **Clientes**: ficha completa, buscador, y un botón para arrancar una obra nueva directamente desde el cliente.
- **Obras**: el corazón de la app. De presupuesto a factura, con estados (Borrador → Enviado → Aceptado → En curso → Completado), líneas de mano de obra, materiales, empleados y otros conceptos, con IVA y márgenes calculados automáticamente.
- **Presupuestos en PDF**: 5 plantillas visuales (Clásica, Moderna, Minimalista, Profesional, Creativa), generadas en el propio navegador, con el logo y color de la empresa.
- **Facturación de venta**: factura, proforma y rectificativa, con vencimientos, cobros parciales, retención de IRPF — todo con trazabilidad legal (los datos quedan bloqueados al emitir).
- **Facturas de compra con OCR**: la función más diferencial. Se fotografía un ticket o factura de proveedor y un motor de reconocimiento de texto que corre en el propio navegador (sin mandar la imagen a servicios externos) extrae proveedor, NIF, importe y fecha automáticamente. "Fotografiar y olvidarse."
- **Exportación a Excel/CSV**: pensada para pasarle los números a la gestoría sin depender de otra herramienta, respetando IVA por tipo y filtros aplicados.
- **Multi-empresa**: un mismo usuario puede llevar varias empresas y cambiar entre ellas.
- **Panel de control**: foto financiera real del negocio — total en obras (pipeline), total facturado (cobrado de verdad, no solo contratado), coste y beneficio, ranking de mejores clientes.

## A quién nos dirigimos

Autónomos y pequeñas empresas del sector de la construcción y reforma en España — gente que hoy gestiona su negocio con papel, Excel y memoria, y que no tiene tiempo ni ganas de aprender un ERP complejo pensado para otra industria.

Canal de distribución secundario (mencionar si aplica, pero el foco de la home es el autónomo final): gestorías que quieren recibir datos ya organizados de sus clientes autónomos.

## Branding a respetar

- Nombre: **ReGest** — "Re" en verde, "Gest" en gris oscuro.
- Isotipo: R blanca sobre cuadrado verde/turquesa.
- Color principal: Verde ReGest `#27AE9D`.
- Color secundario: Gris oscuro `#222B2E`.
- Tipografía propuesta: Inter.
- Estilo: moderno, minimalista, sin artificios — refleja la sencillez que promete el producto. Evitar cualquier estética "corporativa fría"; el público es gente de obra, no oficinistas.

## Tono de la copy

Directo, sin jerga de software. Nada de "sinergias" ni "solución integral 360°". Habla como le hablarías a un autónomo de reformas: cercano, concreto, con ejemplos del día a día (un ticket fotografiado, una obra que pasa de presupuesto a factura, un cliente que llama y con un botón le abres obra nueva).

## Qué debe incluir la página

1. **Hero**: promesa clara en una frase (sustituir el caos de papel por una app), CTA principal (ej. "Pide acceso" o "Ver cómo funciona" — sin prometer registro público, porque hoy no existe).
2. **El problema**: cómo gestiona hoy un autónomo sus obras (Excel, WhatsApp, papeles sueltos) y por qué eso falla.
3. **Cómo funciona ReGest**: recorrido corto cliente → obra → presupuesto → factura → cobro, con capturas o mockups de las 5 plantillas de PDF.
4. **Función estrella**: el OCR de tickets — explicado con un ejemplo visual (foto → datos extraídos).
5. **Para la gestoría**: mención breve de la exportación a Excel, como puente entre autónomo y gestor.
6. **Prueba social**: no hay logos de clientes ni cifras masivas todavía — usa honestidad en vez de exagerar. Una frase tipo "ya en uso real por autónomos de reformas" es más creíble que inventar métricas.
7. **CTA final**: contacto directo (no hay registro self-service todavía, así que el CTA debe llevar a una conversación, no a un formulario de alta automática).

## Qué NO decir

- No prometer registro público ni recuperación de contraseña automática (no existen todavía).
- No presentar "Usuarios y permisos" o "Configuración contable" como gestionables desde la interfaz — hoy son de solo lectura.
- No sobrevender seguridad o escalabilidad como algo ya certificado — el producto está sólido en su núcleo funcional pero todavía en fase de hacerse robusto de cara a más empresas.

---

**Nota para ti (Manu):** he dejado fuera cualquier cifra de precio (los ~€30–50/mes que barajas) porque conviene decidir el mensaje de pricing en la propia landing por separado, no metido en este prompt genérico.
