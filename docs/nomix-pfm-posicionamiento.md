# Nomix — One-pager de posicionamiento (MVP del PFM)

> Documento vivo. Deriva del veredicto del consejo de decisión. Sujeto a revisión por dato (tests de la semana 1).

## Decisión de marca y filosofía (provisional, reversible por dato)

- **Nombre público del MVP:** `Nomix` (a secas). **No** `Nomix Prana`.
- **Ley causal (interna, no visible):** Hermetismo — "como es adentro es afuera", "todo es mente". Explica *por qué* un bloqueo interno produce un resultado externo. Nunca aparece en la UI.
- **Capa de vocabulario / etiquetado (interna, no visible):** Prana / Vayus. Es la ontología que clasifica el dinero en flujos direccionales. El usuario **nunca** ve "Vayu" ni "Prana"; ve microcopy financiero llano (ver `nomix-vayu-mapping.md`).
- **Criterio de reversión:** un sufijo público (p. ej. `Nomix Tao`) solo se reintroduce si gana un test de nombre con umbral definido (abajo).

**Razón de la decisión de nombre:** único punto de acuerdo unánime del consejo — "Nomix Prana" es una trampa de familiaridad del fundador ("Prana" lee yoga/wellness, desconectado del dinero). Reforzado por colisiones marcarias (prAna, AlquimiaPay, litigios Hermès, token cripto TAO, Nomix Group) y la trampa fonética "no mix", que deben verificarse formalmente antes de cualquier registro.

## Posicionamiento

- **Categoría:** gestión de finanzas personales por objetivos (PFM). ASO en **"Finanzas"**, nunca "Estilo de vida / esotérico".
- **Promesa:** "Ve a dónde va tu dinero y dirígelo hacia tus metas — rápido, simple y seguro."
- **Anti-promesa (lo que NO somos):** ni coaching espiritual, ni manifestación, ni meditación, ni wallet.
- **Diferenciador defendible:** la traducción `estado financiero → flujo propuesto` (el camino más rápido/barato hacia cada goal). El foso es el *resultado accionable*, no la filosofía en la portada.

## Mensaje (superficie del producto)

- Titular: **"Organiza tu dinero sin complicarte."**
- Subtítulo: **"Conecta o importa tus movimientos, define tus metas, y Nomix te muestra el siguiente paso concreto."**
- Tono: humano, financiero, cero misticismo visible.

## MVP — alcance mínimo

**Incluye (3 pilares):**
1. **Onboarding <3 min + resumen llano.** Import/agregación de movimientos; primera pantalla = "cuánto tengo / cuánto gasto / cuánto me queda", números grandes, en la moneda del usuario. Cero jerga.
2. **Una acción por goal.** El usuario declara un goal; Nomix muestra en la primera sesión un único `goal → flujo propuesto` (la reasignación más barata/rápida para cerrar la brecha).
3. **Confianza dura + ASO.** Señales explícitas de seguridad y privacidad de datos ("quién ve tus datos y por qué"); categoría de tienda "Finanzas".

**Se pospone sin culpa (backlog):** wallet, integración bancaria completa si no es viable al inicio, gamificación energética, el resto del sistema Nomix, y **cualquier vocabulario místico en la UI**.

## Métrica-norte del MVP

**% de usuarios que ejecutan la recomendación propuesta dentro de 7 días.**

## Riesgo #1 a vigilar

Cruzar a **asesoría financiera regulada** (p. ej. RIA en EE.UU.) por "proponer flujos alineados con goals", más rechazo/ridiculización por lenguaje pseudocientífico. Mitigación: lenguaje de *organización/educación*, no de *recomendación de inversión*; disclaimers; filosofía invisible; revisión legal antes de lanzar en cada jurisdicción.

## Plan de validación — semana 1 (usuarios reales)

| Test | Cuándo | Muestra | Estímulos / tarea | Métrica que decide | Umbral |
|---|---|---|---|---|---|
| Nombre | Mar–Mié | ~40 del target no-financiero | "Nomix" vs "Nomix Prana" vs "Nomix Tao" | Claridad percibida + intención de descarga (1–5) | Ganador supera al resto por ≥0.5 pts sin caer en "suena esotérico" |
| Prototipo | Jue–Vie | 5 entrevistas moderadas | Prototipo clicable: captura → auto-etiquetado por flujo → 1 recomendación por goal | Completar el flujo sin ayuda + articular el valor | ≥4/5 |

**Entregables de la semana:** este one-pager + el doc de mapping `Vayu → categoría → microcopy`.
