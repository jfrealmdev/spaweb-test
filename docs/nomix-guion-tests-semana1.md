# Nomix — Guion de tests de la semana 1

> Deriva de `nomix-pfm-posicionamiento.md`. Dos estudios: (A) test de nombre y (B) 5 entrevistas de prototipo.
> Objetivo global: decidir con dato el nombre público y validar que el flujo central del PFM se entiende y se usa.

---

## A. Test de nombre

**Formato:** encuesta corta (autoadministrada, online) + micro-panel opcional.
**Muestra:** ~40 personas del target no-financiero (mezcla de público general + interesados en desarrollo personal/bienestar). No reclutar solo a conocidos del fundador.
**Estímulos (orden aleatorizado por participante para evitar sesgo de orden):** `Nomix` · `Nomix Prana` · `Nomix Tao`.
**Regla de ceguera:** no revelar cuál prefiere el equipo ni describir la filosofía antes de las preguntas.

### Contexto mínimo mostrado (idéntico para los tres nombres)
> "Imagina una app que organiza tu dinero: conecta o importa tus movimientos, define tus metas y te muestra el siguiente paso concreto para alcanzarlas."

### Preguntas (por cada nombre, escala 1–5 salvo indicación)
1. **Claridad:** "Con solo el nombre, ¿qué tan claro te queda de qué trata la app?" (1 = nada claro, 5 = muy claro)
2. **Intención de descarga:** "¿Qué tan probable es que la descargues?" (1 = nada probable, 5 = muy probable)
3. **Confianza para datos financieros:** "¿Qué tanto confiarías tus datos de dinero a una app con este nombre?" (1–5)
4. **Percepción esotérica (bandera roja):** "¿Este nombre te suena espiritual/esotérico?" (Sí / No / Un poco)
5. **Asociación libre (abierta, 1 palabra):** "¿Qué es lo primero que se te viene a la mente con este nombre?"

### Preguntas de cierre (una sola vez, tras ver los tres)
6. "¿Cuál elegirías para instalar? ¿Por qué en una línea?"
7. Datos de segmentación: rango de edad, país, y "¿usas hoy alguna app de finanzas? (sí/no)".

### Métrica que decide y umbral
- **Ganador = mayor (Claridad + Intención de descarga) combinadas.**
- Debe superar al resto por **≥0.5 pts** en el promedio combinado **y** no disparar la bandera roja (P4 "Sí" esotérico >30% descalifica).
- Cruce de control: si "Nomix" a secas empata o gana, se confirma la decisión del veredicto. Si "Nomix Tao" gana con claridad, se reconsidera el sufijo. Si "Nomix Prana" gana pese a P4, se investiga por qué (posible sesgo de muestra).

### Anti-sesgos
- Aleatorizar orden de estímulos y de preguntas.
- No inducir la respuesta ("¿verdad que suena bien?").
- Reclutar fuera del círculo del fundador; mínimo 3 países si el target es LatAm/ES/EEUU.

---

## B. Entrevistas de prototipo (5 sesiones moderadas)

**Formato:** 1:1, 30–40 min, remoto con pantalla compartida, prototipo clicable.
**Muestra:** 5 personas del target; al menos 2 que hoy NO usan apps de finanzas.
**Regla:** el moderador no ayuda salvo bloqueo total; se mide lo que el usuario hace, no lo que dice que haría.

### Guion de moderación

**0. Encuadre (2 min)**
- "Estamos probando la app, no a ti; no hay respuestas correctas. Piensa en voz alta."
- Consentimiento para grabar.

**1. Expectativa previa (3 min) — sin tocar aún**
- "Al ver esta primera pantalla, ¿de qué crees que trata? ¿Qué harías primero?"
- (Observa si el mensaje de superficie se entiende sin jerga.)

**2. Onboarding y captura (8 min)**
- Tarea: "Agrega tus movimientos (importa o mételos)."
- Observa: ¿completa en <3 min? ¿dónde duda? ¿pide explicación de seguridad/privacidad?
- Pregunta gatillo: "¿Qué te preocuparía antes de conectar tu banco o subir tus datos?"

**3. Resumen financiero (5 min)**
- Tarea: "Dime, con esta pantalla, cuánto tienes, cuánto gastas y cuánto te queda."
- Observa: ¿los números llanos comunican sin ayuda? ¿alguna etiqueta confunde? (Verifica que NO aparezca vocabulario esotérico.)

**4. Goal + recomendación (8 min) — el corazón del test**
- Tarea: "Define una meta y sigue lo que la app te propone."
- Observa: ¿entiende el `goal → flujo propuesto`? ¿la recomendación le parece útil/creíble?
- Pregunta gatillo: "¿Harías lo que te propone? ¿Por qué sí o no?"

**5. Comprensión de valor (4 min)**
- "Explícale a un amigo, en tus palabras, qué hace esta app."
- (Prueba de articulación del valor — clave para la métrica.)

**6. Cierre (3 min)**
- "¿Qué te haría desinstalarla en el primer minuto?"
- "¿Qué le falta para que la uses la próxima semana?"
- "Del 1 al 10, ¿qué tan probable la recomendarías?"

### Métrica que decide y umbral
- **≥4/5 completan el flujo central (captura → resumen → goal → recomendación) sin ayuda del moderador.**
- **≥4/5 articulan el valor en sus palabras** (paso 5) alineado con la promesa ("organiza mi dinero y me dice el siguiente paso").
- Señal de alarma: si ≥2/5 mencionan espontáneamente "raro/espiritual/secta" o dudan de la seguridad de datos → revisar UI y copy antes de escalar.

### Qué se registra por sesión
- Tiempo hasta completar onboarding.
- Nº de bloqueos y dónde.
- Cita textual de la articulación de valor (paso 5).
- Triggers de desinstalación mencionados (paso 6).

---

## Decisión al cierre de la semana

1. Si el test de nombre confirma "Nomix" (o no hay ganador con ventaja ≥0.5) → se mantiene "Nomix" a secas.
2. Si el prototipo cumple ambos umbrales → se congela el flujo central del MVP y se pasa a construcción.
3. Cualquier incumplimiento → iterar el elemento fallido y re-testear el subconjunto, no todo.
