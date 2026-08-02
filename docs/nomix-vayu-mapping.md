# Nomix — Mapping "Vayu → categoría financiera → microcopy"

> El contrato entre la capa esotérica (interna) y la UX (visible).
> Regla de oro: **la columna izquierda NUNCA sale a pantalla. El usuario solo ve la columna de microcopy.**

## Principio

Los cinco Vayus del Prana son corrientes de energía *direccionales*. Esa direccionalidad es lo único que se toma prestado: da una taxonomía lista para clasificar el dinero en movimiento y mapea 1:1 con los flujos que un PFM necesita etiquetar. El nombre sánscrito es andamiaje interno del modelo de datos y del razonamiento; se traduce a lenguaje financiero llano antes de tocar la interfaz.

## Tabla de mapeo

| Vayu (interno, oculto) | Dirección de la energía | Flujo financiero | Etiqueta visible (ES) | Ejemplos de movimientos |
|---|---|---|---|---|
| **Prana** | Entrada / absorción | Ingreso | **Entradas** | Salario, ventas, transferencias recibidas, reembolsos |
| **Apana** | Salida / eliminación | Gasto | **Salidas** | Compras, servicios, suscripciones, pagos recurrentes |
| **Samana** | Balance / distribución | Ahorro y asignación | **Ahorro** | Apartados, fondo de emergencia, metas de ahorro |
| **Vyana** | Circulación | Movimiento entre cuentas | **Movimientos** | Traspasos entre cuentas propias, pagos de tarjeta |
| **Udana** | Elevación / crecimiento | Inversión / crecimiento | **Crecimiento** | Inversión, aportes a retiro, activos que crecen |

## Microcopy de referencia (visible al usuario)

- Resumen inicial: **"Entradas · Salidas · Ahorro este mes"** (nunca "Prana / Apana / Samana").
- Categorización: **"Clasificamos tus movimientos en Entradas, Salidas, Ahorro, Movimientos y Crecimiento."**
- Recomendación por goal: **"Para tu meta *[goal]*, el flujo más rápido es mover *[X]* de Salidas a Ahorro."**
- Nada de "energía", "bloqueo", "manifestación", "prana", "chakra", "flujo vital" en la superficie.

## Reglas de traducción (para quien construya la UI)

1. Toda cadena visible se toma de la columna **"Etiqueta visible"**, jamás de la columna Vayu.
2. El razonamiento del motor puede usar la ontología Vayu internamente (logs, modelo, prompts), pero cualquier salida al usuario pasa por esta tabla.
3. Si una categoría no cabe limpio en un flujo, se prefiere la etiqueta financiera genérica antes que inventar vocabulario esotérico.
4. La direccionalidad (entrada/salida/circulación/elevación) es lo que habilita la recomendación "camino más rápido/barato": el motor busca la reasignación entre flujos que cierra la brecha con menor costo.

## Estado

- Provisional; se valida junto al prototipo en la semana 1 (ver `nomix-pfm-posicionamiento.md`).
- Reversible: si un test futuro justifica exponer un vocabulario propio (p. ej. un "Flow Score" acuñado por Nomix), se decide con dato, no con gusto — y aun así no se expondría el término sánscrito.
