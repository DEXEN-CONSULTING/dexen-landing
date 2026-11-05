# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + Tailwind en Vercel. Mismo stack que Mictt, Agavezucar y Omi. Confirmado por Ricardo, 2026-11-04.
Dominio: no existe todavía. `[POR CONFIRMAR]`

## Users

Dos públicos y una sola puerta (Ricardo, 2026-11-05):
- **Empresa mediana o grande** (paquete EMPRESA). Compra un comité con el área de sistemas involucrada, en un ciclo de 2 a 6 meses. Llega evaluando proveedores para justificarlos ante ese comité.
- **Pyme y dueño** (paquetes ARRANQUE y CRECIMIENTO). Decide una sola persona, más rápido, y le pesa el tiempo que pierde en lo operativo.

Los dos necesitan ver que Dexen ya construyó y opera sistemas reales, entender qué se instala y cómo se trabaja, y llegar a un formulario para pedir la llamada. La landing no tiene dos rutas: los tres paquetes se muestran sin precio y el diagnóstico decide cuál aplica.

El segmento piloto (mayoristas o escuelas privadas) sigue sin decidirse. `[POR CONFIRMAR]`

## Product Purpose

Dexen Consulting es una consultoría de implementación. No vende horas ni "estrategia": instala sistemas que operan solos y cobra por tenerlos corriendo.

Cuatro líneas:
1. **Contenido automático**: publicación en redes y blog sin intervención humana diaria.
2. **Agentes de IA y automatización**: IA que contesta, agenda, cotiza y da seguimiento por WhatsApp, IG DM, web, voz y correo.
3. **Software, web y ERP/CRM**: sitios, portales, apps e implementación de Odoo por fases.
4. **Marca y desarrollo creativo**: identidad y sistema de diseño.

La landing cumple su objetivo cuando un prospecto manda el formulario (nombre, empresa, problema) y con eso pide la llamada de descubrimiento. El formulario llega por correo. El destino del correo es `[POR CONFIRMAR]`.

## Positioning

- Todo lo que se ofrece ya se construyó y corre en producción. Regla interna: no se promete lo que no se ha construido antes.
- Se vende la implementación terminada más la operación continua, es decir, tener a quién reclamarle cuando la API se rompe. No se vende la herramienta.
- Para empresa, el argumento es ahorro de horas-persona medido y trazabilidad de procesos.
- Límite honesto, parte de la postura: el agente no cierra ventas complejas ni sustituye al vendedor. Filtra, responde lo repetitivo y entrega el lead caliente.

## Operating Context

Proceso comercial (fuente: vault `Dexen/Servicios-y-Precios.md` §8):
1. Llamada de descubrimiento, 30 min, gratis.
2. Calificación contra el piso comercial.
3. Propuesta en 72 h: problema, solución, alcance, precio, qué NO incluye y tiempos.
4. Validación técnica de Ricardo antes de enviarla.
5. Cierre: contrato y 50% del setup.
6. Kickoff con responsable del cliente nombrado por escrito.

Modelo de cobro: setup único más renta mensual. ERP: diagnóstico cobrado y luego fases más soporte. Nunca se cotiza una implementación sin diagnóstico previo.
Regla de riesgo contractual: no se toca producción del cliente sin staging, respaldo verificado y ventana acordada.
Equipo: Ricardo (técnico, implementación y arquitectura) y Dann (comercial, cierre y cuentas).

## Capabilities and Constraints

- Capacidad tope: 3 clientes de renta activos más 1 proyecto grande. La landing no debe prometer escala que no existe.
- Precios: hay lista interna (`Dexen/Precios.md` v0.4), pero no es lista publicada. Que la landing muestre precios para empresa es una decisión abierta `[POR CONFIRMAR]`. Por defecto no se publican.
- Abiertos: marca blanca sí o no · cobro en USD · entidad legal y facturación.
- 🔴 Propiedad del código reutilizado de Daisies y Redom (Content Studio, bots) sin resolver. La landing no debe presentar ese código como producto propio de Dexen hasta que se resuelva.
- Idioma: español de México. `[POR CONFIRMAR]` si habrá versión en inglés.

## Brand Commitments

- Nombre: **Dexen Consulting**. Decidido por Ricardo el 2026-11-05; sustituye a "Dexen Consultory".
- Sin logo y sin dominio a la fecha. El contacto es por formulario más correo. Todo desde cero.

## Evidence on Hand

Proyectos que Ricardo nombró como portafolio mostrable (2026-11-04):
- **Melaque West Coast**
- **UdeG** (`~/Work/inmobiliaria/udga`)
- **Heredabienes** (`~/Work/inmobiliaria/heredabienes`)
- **Chipsi**
- **Terapi**
- "etc.": la lista no está cerrada.

`[POR CONFIRMAR]` por proyecto: qué se construyó, si fue cliente o proyecto propio, si se puede mostrar el nombre y el link, y qué métrica real hay. Ninguno de estos datos se inventa.

Capacidades con evidencia en producción (vault `Dexen/Overview.md`): Odoo 15 en prod desde 2024 con módulos propios · bots de WhatsApp e IG DM con seguimiento por cron · sitios Next.js en Vercel · apps Flutter en tiendas · design systems documentados.

**Banda "Han trabajado con Dexen"** (Ricardo autorizó los nombres públicos el 2026-11-05): Daisies (solo el sitio web), Melaque West Coast, UdeG, Heredabienes, Chipsi, Terapi y Pensión+. Ni la app ni el Odoo de Daisies se presentan como trabajo de Dexen.
Logos encontrados en disco: `inmobiliaria/udga/public/udga_logo_{black,white}.png`, `personal/Portfolio/src/assets/{chipsi,terapi}_grey_logo.svg`, `personal/pensionmas/public/images/logo-pensionmas-{navy,blanco}.png`. Falta localizar los de Daisies, Melaque y Heredabienes.

No existen y no se fabrican: testimonios, logos fuera de la lista anterior, casos de estudio con números, cifras de ahorro, cantidad de clientes, certificaciones ni premios. Hoy Dexen no tiene clientes que paguen renta.

## Product Principles

1. **Evidencia antes que promesa.** Cada servicio que aparece apunta a algo que ya corre.
2. **Diagnóstico primero.** Sin diagnóstico no hay cotización. La landing conduce a la conversación, no a un carrito.
3. **Límites declarados.** Riesgos (tokens que caducan, ventanas de Meta) y lo que no incluye cada servicio se dicen antes de firmar. El sitio sigue la misma regla.
4. **Operación, no entrega.** El valor está en que el sistema siga vivo después del lanzamiento.
5. **Escala honesta.** Equipo de dos con cupo limitado. Se presenta como atención directa del técnico, no como agencia grande.
