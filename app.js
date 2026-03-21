// ===== Onboarding Data =====
const ONBOARDING_CHALLENGES = {
    beginner: [
        { id: "cb1", text: "Cambiar entre los acordes Am y Em", hint: "Toca cada acorde 4 veces alternando" },
        { id: "cb2", text: "Tocar un rasgueo básico hacia abajo", hint: "Rasguea las 6 cuerdas con ritmo constante" },
        { id: "cb3", text: "Afinar tu guitarra de oído", hint: "¿Puedes notar si una cuerda está desafinada?" }
    ],
    intermediate: [
        { id: "ci1", text: "Tocar un acorde con cejilla (F o Bm)", hint: "La cejilla debe sonar limpia en todas las cuerdas" },
        { id: "ci2", text: "Tocar un patrón de fingerpicking", hint: "Pulgar-índice-medio-anular en secuencia" },
        { id: "ci3", text: "Nombrar las notas en la 6ª cuerda", hint: "E, F, F#, G, G#, A, A#, B, C, C#, D, D#" }
    ],
    advanced: [
        { id: "ca1", text: "Improvisar sobre una progresión de blues", hint: "12 compases en La usando pentatónica" },
        { id: "ca2", text: "Tocar hammer-ons y pull-offs con fluidez", hint: "Ligados rápidos y limpios" },
        { id: "ca3", text: "Leer y tocar una tablatura nueva a primera vista", hint: "Sin haberla practicado antes" }
    ]
};

const GENRE_PATH_MAP = {
    rock: ["acordes", "escalas", "blues", "avanzado"],
    blues: ["blues", "escalas", "fingerpicking", "avanzado"],
    pop: ["acordes", "fingerpicking", "principiante"],
    clasico: ["fingerpicking", "escalas", "acordes"],
    fingerstyle: ["fingerpicking", "acordes", "escalas"],
    flamenco: ["fingerpicking", "escalas", "avanzado"]
};

const GOAL_PATH_MAP = {
    canciones: ["principiante", "acordes", "fingerpicking"],
    improvisar: ["escalas", "blues", "avanzado"],
    componer: ["acordes", "escalas", "blues"],
    banda: ["acordes", "blues", "escalas", "avanzado"],
    hobby: ["principiante", "acordes", "fingerpicking"]
};

const LEVEL_LABELS = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado"
};

const LEVEL_ICONS = {
    beginner: "🌱",
    intermediate: "🎯",
    advanced: "🔥"
};

let onboardingState = {
    step: 0,
    profile: { guitarType: "", experience: "", goal: "", genres: [] },
    responses: {},
    currentTier: "beginner",
    tiersCompleted: []
};

// ===== Data =====
const PATHS = [
    {
        id: "principiante",
        icon: "🎸",
        title: "Principiante Absoluto",
        description: "Desde cero: partes de la guitarra, postura, primeros acordes y rasgueos básicos.",
        tag: "beginner",
        tagLabel: "Principiante",
        lessons: [
            { id: "p1", title: "Partes de la guitarra", desc: "Conoce tu instrumento", url: "https://www.justinguitar.com/guitar-lessons/the-parts-of-the-guitar-bc-104" },
            { id: "p2", title: "Cómo sostener la guitarra", desc: "Postura correcta para tocar", url: "https://www.justinguitar.com/guitar-lessons/how-to-hold-a-guitar-bc-102" },
            { id: "p3", title: "Acordes Am, Em, Dm", desc: "Tus primeros 3 acordes menores", url: "https://www.justinguitar.com/guitar-lessons/a-minor-chord-bc-112" },
            { id: "p4", title: "Acordes C, G, D", desc: "3 acordes mayores esenciales", url: "https://www.justinguitar.com/guitar-lessons/c-major-chord-bc-114" },
            { id: "p5", title: "Cambio entre acordes", desc: "Práctica de transiciones fluidas", url: "https://www.justinguitar.com/guitar-lessons/one-minute-changes-bc-115" },
            { id: "p6", title: "Rasgueo básico", desc: "Patrones de rasgueo para principiantes", url: "https://www.justinguitar.com/guitar-lessons/easy-strumming-bc-111" },
            { id: "p7", title: "Tu primera canción", desc: "Toca tu primera canción completa", url: "https://www.justinguitar.com/guitar-lessons/three-little-birds-bc-171" }
        ]
    },
    {
        id: "acordes",
        icon: "🎵",
        title: "Dominio de Acordes",
        description: "Acordes con cejilla, séptimas, suspendidos y progresiones populares.",
        tag: "intermediate",
        tagLabel: "Intermedio",
        lessons: [
            { id: "a1", title: "Acorde F con cejilla", desc: "La cejilla más importante", url: "https://www.justinguitar.com/guitar-lessons/f-chord-options-bc-152" },
            { id: "a2", title: "Acordes con cejilla (forma E)", desc: "Cejillas basadas en forma de E", url: "https://www.justinguitar.com/guitar-lessons/barre-chord-e-shape-major-im-131" },
            { id: "a3", title: "Acordes con cejilla (forma A)", desc: "Cejillas basadas en forma de A", url: "https://www.justinguitar.com/guitar-lessons/barre-chord-a-shape-major-im-132" },
            { id: "a4", title: "Acordes de séptima", desc: "Dom7, Maj7, Min7", url: "https://www.justinguitar.com/guitar-lessons/dominant-7th-chords-im-141" },
            { id: "a5", title: "Sus2 y Sus4", desc: "Acordes suspendidos", url: "https://www.justinguitar.com/guitar-lessons/suspended-chords-im-145" },
            { id: "a6", title: "Progresiones populares", desc: "I-V-vi-IV y otras progresiones", url: "https://www.musictheory.net/lessons/57" }
        ]
    },
    {
        id: "fingerpicking",
        icon: "✋",
        title: "Fingerpicking",
        description: "Técnica de dedos, patrones Travis picking y arreglos completos.",
        tag: "intermediate",
        tagLabel: "Intermedio",
        lessons: [
            { id: "f1", title: "Técnica básica de dedos", desc: "Posición y movimiento de la mano derecha", url: "https://www.justinguitar.com/guitar-lessons/fingerstyle-basics-te-501" },
            { id: "f2", title: "Patrones PIMA", desc: "Pulgar, índice, medio, anular", url: "https://www.justinguitar.com/guitar-lessons/picking-patterns-1-te-502" },
            { id: "f3", title: "Travis Picking intro", desc: "El bajo alternado con melodía", url: "https://www.justinguitar.com/guitar-lessons/travis-picking-te-601" },
            { id: "f4", title: "Dust in the Wind", desc: "Patrón clásico de fingerpicking", url: "https://www.justinguitar.com/guitar-lessons/dust-in-the-wind-te-503" },
            { id: "f5", title: "Blackbird", desc: "Arreglo fingerstyle icónico", url: "https://www.justinguitar.com/guitar-lessons/blackbird-te-801" }
        ]
    },
    {
        id: "escalas",
        icon: "🎼",
        title: "Escalas y Teoría",
        description: "Pentatónica, escala mayor, modos y teoría aplicada a la guitarra.",
        tag: "intermediate",
        tagLabel: "Intermedio",
        lessons: [
            { id: "e1", title: "Pentatónica menor (pos. 1)", desc: "La escala más usada en rock/blues", url: "https://www.justinguitar.com/guitar-lessons/minor-pentatonic-pattern-1-sc-001" },
            { id: "e2", title: "5 posiciones pentatónica", desc: "Cubre todo el mástil", url: "https://www.justinguitar.com/guitar-lessons/minor-pentatonic-pattern-2-sc-002" },
            { id: "e3", title: "Escala mayor", desc: "La base de la teoría musical", url: "https://www.musictheory.net/lessons/21" },
            { id: "e4", title: "Intervalos", desc: "Entiende las distancias entre notas", url: "https://www.musictheory.net/lessons/30" },
            { id: "e5", title: "Escala de Blues", desc: "Agrega la blue note", url: "https://www.justinguitar.com/guitar-lessons/blues-scale-bl-501" },
            { id: "e6", title: "Intro a los Modos", desc: "Jónico, Dórico, Mixolidio...", url: "https://www.musictheory.net/lessons/51" }
        ]
    },
    {
        id: "blues",
        icon: "🎤",
        title: "Blues Guitar",
        description: "12-bar blues, turnarounds, bends, licks clásicos y shuffle.",
        tag: "intermediate",
        tagLabel: "Intermedio",
        lessons: [
            { id: "b1", title: "12-Bar Blues", desc: "La estructura fundamental del blues", url: "https://www.justinguitar.com/guitar-lessons/12-bar-blues-in-a-bl-101" },
            { id: "b2", title: "Shuffle rhythm", desc: "El ritmo swing del blues", url: "https://www.justinguitar.com/guitar-lessons/blues-rhythm-bl-102" },
            { id: "b3", title: "Bends y Vibrato", desc: "Técnicas expresivas esenciales", url: "https://www.justinguitar.com/guitar-lessons/string-bending-te-401" },
            { id: "b4", title: "Licks de blues", desc: "Frases clásicas de blues", url: "https://www.justinguitar.com/guitar-lessons/blues-licks-1-bl-301" },
            { id: "b5", title: "Turnarounds", desc: "Finales clásicos de blues", url: "https://www.justinguitar.com/guitar-lessons/blues-turnaround-1-bl-201" }
        ]
    },
    {
        id: "avanzado",
        icon: "🔥",
        title: "Técnicas Avanzadas",
        description: "Sweep picking, tapping, legato avanzado e improvisación.",
        tag: "advanced",
        tagLabel: "Avanzado",
        lessons: [
            { id: "v1", title: "Hammer-ons y Pull-offs", desc: "Legato fluido y rápido", url: "https://www.justinguitar.com/guitar-lessons/hammer-ons-te-301" },
            { id: "v2", title: "Slides", desc: "Deslizamientos melódicos", url: "https://www.justinguitar.com/guitar-lessons/slides-te-302" },
            { id: "v3", title: "Tapping básico", desc: "Tapping con una mano al estilo Van Halen", url: "https://www.youtube.com/results?search_query=guitar+tapping+technique+lesson" },
            { id: "v4", title: "Sweep picking", desc: "Arpegios barridos", url: "https://www.youtube.com/results?search_query=sweep+picking+beginner+lesson" },
            { id: "v5", title: "Improvisación", desc: "Combina escalas, licks y expresión", url: "https://www.justinguitar.com/guitar-lessons/improvisation-intro-im-171" }
        ]
    }
];

const RESOURCES = [
    { icon: "🌐", title: "JustinGuitar", desc: "El mejor recurso gratuito para aprender guitarra desde cero. Miles de lecciones en video.", url: "https://www.justinguitar.com", category: "web" },
    { icon: "🌐", title: "MusicTheory.net", desc: "Lecciones interactivas de teoría musical, gratis y visuales.", url: "https://www.musictheory.net", category: "web" },
    { icon: "🌐", title: "Guitar Chords (Oolimo)", desc: "Diccionario visual de acordes con múltiples variaciones.", url: "https://www.oolimo.com/guitarchords/analyze", category: "web" },
    { icon: "📺", title: "Marty Music (YouTube)", desc: "Tutoriales de canciones populares paso a paso.", url: "https://www.youtube.com/@MartyMusic", category: "video" },
    { icon: "📺", title: "Paul Davids (YouTube)", desc: "Tips, teoría y técnica con producción cinematográfica.", url: "https://www.youtube.com/@PaulDavids", category: "video" },
    { icon: "📺", title: "Guitarraviva (YouTube)", desc: "El canal en español más grande para aprender guitarra.", url: "https://www.youtube.com/@guitarraviva", category: "video" },
    { icon: "📺", title: "Señor Muñoz (YouTube)", desc: "Lecciones claras de guitarra en español.", url: "https://www.youtube.com/@SenorMunoz", category: "video" },
    { icon: "🔧", title: "Guitar Tuna (App)", desc: "Afinador de guitarra gratuito para móvil.", url: "https://yousician.com/guitartuna", category: "tool" },
    { icon: "🔧", title: "Metronome Online", desc: "Metrónomo online gratuito para practicar tempo.", url: "https://www.metronomeonline.com", category: "tool" },
    { icon: "🔧", title: "Songsterr", desc: "Tablaturas interactivas con audio sincronizado.", url: "https://www.songsterr.com", category: "tool" },
    { icon: "🔧", title: "Ultimate Guitar", desc: "La mayor colección de tabs y acordes del mundo.", url: "https://www.ultimate-guitar.com", category: "tool" },
    { icon: "📖", title: "Fretboard Logic (resumen)", desc: "Conceptos clave del sistema CAGED explicados.", url: "https://www.justinguitar.com/guitar-lessons/caged-system-ch-901", category: "reading" },
    { icon: "📖", title: "Open Music Theory", desc: "Libro abierto de teoría musical, gratuito y online.", url: "https://openmusictheory.com", category: "reading" }
];

// ===== Progress Storage =====
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem("guitarpath_progress")) || {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem("guitarpath_progress", JSON.stringify(progress));
}

function toggleLesson(pathId, lessonId) {
    const progress = getProgress();
    if (!progress[pathId]) progress[pathId] = [];
    const idx = progress[pathId].indexOf(lessonId);
    if (idx === -1) {
        progress[pathId].push(lessonId);
    } else {
        progress[pathId].splice(idx, 1);
    }
    saveProgress(progress);
    return progress;
}

function getPathProgress(pathId) {
    const progress = getProgress();
    const path = PATHS.find(p => p.id === pathId);
    if (!path) return 0;
    const completed = (progress[pathId] || []).length;
    return Math.round((completed / path.lessons.length) * 100);
}

function getTotalStats() {
    const progress = getProgress();
    let totalLessons = 0;
    let completedLessons = 0;
    PATHS.forEach(p => {
        totalLessons += p.lessons.length;
        completedLessons += (progress[p.id] || []).length;
    });
    const startedPaths = PATHS.filter(p => (progress[p.id] || []).length > 0).length;
    return { totalLessons, completedLessons, startedPaths, totalPaths: PATHS.length };
}

// ===== Onboarding Storage =====
function getOnboarding() {
    try {
        return JSON.parse(localStorage.getItem("guitarpath_onboarding")) || null;
    } catch { return null; }
}

function saveOnboarding(data) {
    localStorage.setItem("guitarpath_onboarding", JSON.stringify(data));
}

function hasCompletedOnboarding() {
    const data = getOnboarding();
    return data && data.completed === true;
}

function determineLevel(responses) {
    const score = (ids) => ids.reduce((sum, id) => sum + (responses[id] || 0), 0);
    const bIds = ONBOARDING_CHALLENGES.beginner.map(c => c.id);
    const iIds = ONBOARDING_CHALLENGES.intermediate.map(c => c.id);
    const aIds = ONBOARDING_CHALLENGES.advanced.map(c => c.id);

    const bScore = score(bIds);
    const iScore = score(iIds);
    const aScore = score(aIds);

    let level;
    if (bScore <= 2) level = "beginner";
    else if (aScore >= 4) level = "advanced";
    else if (iScore >= 3 || bScore >= 5) level = "intermediate";
    else level = "beginner";

    return { level, scores: { beginner: bScore, intermediate: iScore, advanced: aScore } };
}

function generateRecommendations(profile, level) {
    const pathScores = {};
    PATHS.forEach(p => { pathScores[p.id] = 0; });

    // Factor A: Level alignment
    PATHS.forEach(p => {
        if (p.tag === level) pathScores[p.id] += 10;
        if (level === "intermediate" && p.tag === "beginner") pathScores[p.id] += 3;
        if (level === "intermediate" && p.tag === "advanced") pathScores[p.id] += 2;
        if (level === "advanced" && p.tag === "intermediate") pathScores[p.id] += 4;
        if (level === "beginner" && p.tag === "intermediate") pathScores[p.id] += 1;
    });

    // Factor B: Genre preferences
    (profile.genres || []).forEach(genre => {
        (GENRE_PATH_MAP[genre] || []).forEach((pathId, idx) => {
            pathScores[pathId] = (pathScores[pathId] || 0) + (5 - idx);
        });
    });

    // Factor C: Goal alignment
    (GOAL_PATH_MAP[profile.goal] || []).forEach((pathId, idx) => {
        pathScores[pathId] = (pathScores[pathId] || 0) + (4 - idx);
    });

    const ranked = Object.entries(pathScores).sort((a, b) => b[1] - a[1]);
    const primaryPathId = ranked[0][0];
    const secondaryPathId = ranked[1][0];

    const primaryPath = PATHS.find(p => p.id === primaryPathId);
    const secondaryPath = PATHS.find(p => p.id === secondaryPathId);

    const suggestedLessons = [
        ...primaryPath.lessons.slice(0, 3).map(l => l.id),
        ...secondaryPath.lessons.slice(0, 2).map(l => l.id)
    ];

    const suggestedResources = [];
    RESOURCES.forEach((r, idx) => {
        if (r.category === "tool") { suggestedResources.push(idx); return; }
        if (r.title.includes("Guitarraviva") || r.title.includes("Muñoz")) suggestedResources.push(idx);
        if (r.title === "JustinGuitar") suggestedResources.push(idx);
        if (level !== "beginner" && (r.title.includes("Theory") || r.title.includes("Teoría"))) suggestedResources.push(idx);
    });

    return { primaryPathId, secondaryPathId, suggestedLessons, suggestedResources: suggestedResources.slice(0, 6) };
}

function findLessonWithPath(lessonId) {
    for (const path of PATHS) {
        const lesson = path.lessons.find(l => l.id === lessonId);
        if (lesson) return { path, lesson };
    }
    return null;
}

// ===== Theme =====
function initTheme() {
    const saved = localStorage.getItem("guitarpath_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    updateThemeIcon(theme);
}

function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("guitarpath_theme", next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ===== Router =====
function getRoute() {
    return window.location.hash.slice(1) || "/";
}

function navigate(path) {
    window.location.hash = path;
}

// ===== Render Functions =====
function renderHome() {
    if (hasCompletedOnboarding()) {
        return renderPersonalizedHome();
    }
    return renderDefaultHome();
}

function renderDefaultHome() {
    const stats = getTotalStats();
    return `
        <div class="fade-in">
            <div class="onboarding-banner" onclick="navigate('/onboarding')">
                <span class="onboarding-banner-icon">🎯</span>
                <div class="onboarding-banner-text">
                    <strong>¿Nuevo aquí?</strong>
                    <p>Descubre tu nivel y obtén una ruta personalizada</p>
                </div>
                <span class="btn btn-primary btn-sm">Comenzar</span>
            </div>

            <div class="hero">
                <span class="hero-emoji">🎸</span>
                <h1>Aprende guitarra <span class="highlight">gratis</span></h1>
                <p>Rutas de aprendizaje interactivas, recursos curados y seguimiento de tu progreso. Todo en un solo lugar.</p>
                <div class="hero-actions">
                    <a href="#/rutas" data-link class="btn btn-primary">Explorar Rutas →</a>
                    <a href="#/recursos" data-link class="btn btn-secondary">Ver Recursos</a>
                </div>
            </div>

            <div class="stats-bar">
                <div class="stat-item">
                    <div class="stat-number">${PATHS.length}</div>
                    <div class="stat-label">Rutas de aprendizaje</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.totalLessons}</div>
                    <div class="stat-label">Lecciones gratuitas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.completedLessons}</div>
                    <div class="stat-label">Completadas por ti</div>
                </div>
            </div>

            <h2 class="section-title">Rutas populares</h2>
            <p class="section-subtitle">Elige una ruta y comienza a practicar hoy</p>
            <div class="cards-grid">
                ${PATHS.slice(0, 3).map((p, i) => renderPathCard(p, i)).join("")}
            </div>
        </div>
    `;
}

function renderPathCard(path, index) {
    const pct = getPathProgress(path.id);
    const delay = typeof index === "number" ? index * 0.07 : 0;
    return `
        <div class="card fade-in-card" style="--delay:${delay}s" tabindex="0" role="button" onclick="navigate('/ruta/${path.id}')">
            <span class="card-icon">${path.icon}</span>
            <h3>${path.title}</h3>
            <p>${path.description}</p>
            <span class="card-tag tag-${path.tag}">${path.tagLabel}</span>
            ${pct > 0 ? `
                <div class="path-progress-bar" style="margin-top:0.75rem" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso de ${path.title}">
                    <div class="path-progress-fill" style="width:${pct}%"></div>
                </div>
                <div class="path-progress-text">${pct}% completado</div>
            ` : ""}
        </div>
    `;
}

function renderPaths() {
    return `
        <div class="fade-in">
            <h2 class="section-title">Rutas de Aprendizaje</h2>
            <p class="section-subtitle">Caminos estructurados desde principiante hasta avanzado</p>
            <div class="cards-grid">
                ${PATHS.map((p, i) => renderPathCard(p, i)).join("")}
            </div>
        </div>
    `;
}

function renderPathDetail(pathId) {
    const path = PATHS.find(p => p.id === pathId);
    if (!path) return renderNotFound();

    const progress = getProgress();
    const completed = progress[pathId] || [];
    const pct = Math.round((completed.length / path.lessons.length) * 100);

    return `
        <div class="fade-in path-detail">
            <a class="back-link" href="#/rutas" data-link>← Volver a Rutas</a>
            <div class="path-header">
                <h1>${path.icon} ${path.title}</h1>
                <p>${path.description}</p>
                <div class="path-progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso de ${path.title}">
                    <div class="path-progress-fill" style="width:${pct}%"></div>
                </div>
                <div class="path-progress-text">${completed.length} de ${path.lessons.length} lecciones completadas (${pct}%)</div>
            </div>
            <div class="lessons-list">
                ${path.lessons.map((l, i) => {
                    const done = completed.includes(l.id);
                    return `
                        <div class="lesson-item fade-in-card ${done ? "completed" : ""}" style="--delay:${i * 0.05}s" tabindex="0" role="button" data-path="${pathId}" data-lesson="${l.id}" aria-label="${done ? 'Completada' : 'Pendiente'}: ${l.title}">
                            <div class="lesson-check">${done ? "✓" : ""}</div>
                            <div class="lesson-info">
                                <h4>${l.title}</h4>
                                <p>${l.desc}</p>
                            </div>
                            <a class="lesson-link" href="${l.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Abrir recurso ↗</a>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function renderResources() {
    return `
        <div class="fade-in">
            <h2 class="section-title">Recursos Gratuitos</h2>
            <p class="section-subtitle">Herramientas, canales y sitios web seleccionados para guitarristas</p>
            <div class="resources-filter">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="web">Sitios Web</button>
                <button class="filter-btn" data-filter="video">Video</button>
                <button class="filter-btn" data-filter="tool">Herramientas</button>
                <button class="filter-btn" data-filter="reading">Lectura</button>
            </div>
            <div class="resources-list" id="resourcesList">
                ${RESOURCES.map((r, i) => renderResourceCard(r, i)).join("")}
            </div>
        </div>
    `;
}

function renderResourceCard(r, index) {
    const delay = typeof index === "number" ? index * 0.05 : 0;
    return `
        <div class="resource-card fade-in-card" style="--delay:${delay}s" data-category="${r.category}">
            <span class="resource-icon">${r.icon}</span>
            <div class="resource-info">
                <h3>${r.title}</h3>
                <p>${r.desc}</p>
                <a class="resource-link" href="${r.url}" target="_blank" rel="noopener">Visitar ↗</a>
            </div>
        </div>
    `;
}

function renderProgress() {
    const stats = getTotalStats();
    const progress = getProgress();

    if (stats.completedLessons === 0) {
        return `
            <div class="fade-in">
                <h2 class="section-title">Mi Progreso</h2>
                <p class="section-subtitle">Resumen de tu avance en cada ruta</p>
                <div class="empty-state">
                    <span class="empty-icon">📊</span>
                    <h3>Aún no hay progreso</h3>
                    <p>Empieza una ruta de aprendizaje y tu progreso aparecerá aquí.</p>
                    <a href="#/rutas" data-link class="btn btn-primary" style="margin-top:1rem">Explorar Rutas →</a>
                </div>
            </div>
        `;
    }

    return `
        <div class="fade-in">
            <h2 class="section-title">Mi Progreso</h2>
            <p class="section-subtitle">Resumen de tu avance en cada ruta</p>

            <div class="progress-overview">
                <div class="progress-stat fade-in-card" style="--delay:0s">
                    <div class="stat-number">${stats.completedLessons}</div>
                    <div class="stat-label">Lecciones completadas</div>
                </div>
                <div class="progress-stat fade-in-card" style="--delay:0.07s">
                    <div class="stat-number">${stats.totalLessons - stats.completedLessons}</div>
                    <div class="stat-label">Por completar</div>
                </div>
                <div class="progress-stat fade-in-card" style="--delay:0.14s">
                    <div class="stat-number">${stats.startedPaths}</div>
                    <div class="stat-label">Rutas iniciadas</div>
                </div>
                <div class="progress-stat fade-in-card" style="--delay:0.21s">
                    <div class="stat-number">${stats.totalLessons > 0 ? Math.round((stats.completedLessons / stats.totalLessons) * 100) : 0}%</div>
                    <div class="stat-label">Progreso total</div>
                </div>
            </div>

            <div class="progress-paths">
                ${PATHS.map((p, i) => {
                    const completed = (progress[p.id] || []).length;
                    const total = p.lessons.length;
                    const pct = Math.round((completed / total) * 100);
                    return `
                        <div class="progress-path-card fade-in-card" style="--delay:${i * 0.06}s" tabindex="0" role="button" onclick="navigate('/ruta/${p.id}')">
                            <div class="progress-path-header">
                                <h3>${p.icon} ${p.title}</h3>
                                <span class="progress-percent">${pct}%</span>
                            </div>
                            <div class="mini-progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso de ${p.title}">
                                <div class="mini-progress-fill" style="width:${pct}%"></div>
                            </div>
                            <div class="path-progress-text" style="margin-top:0.5rem">${completed} de ${total} lecciones</div>
                        </div>
                    `;
                }).join("")}
            </div>

            <button class="reset-btn" id="resetBtn">Reiniciar todo el progreso</button>
        </div>
    `;
}

function renderNotFound() {
    return `
        <div class="empty-state fade-in">
            <span class="empty-icon">🔍</span>
            <p>Página no encontrada</p>
            <a href="#/" data-link class="btn btn-secondary" style="margin-top:1rem">Volver al inicio</a>
        </div>
    `;
}

// ===== Onboarding Render =====
function renderOnboardingStepIndicator(current) {
    const labels = ["Bienvenida", "Perfil", "Diagnóstico", "Resultados"];
    return `
        <div class="onboarding-steps">
            ${labels.map((label, i) => `
                <div class="onboarding-step-dot ${i === current ? 'active' : ''} ${i < current ? 'completed' : ''}" title="${label}"></div>
            `).join("")}
        </div>
    `;
}

function renderOnboardingWelcome() {
    return `
        <div class="onboarding-welcome">
            <span class="onboarding-emoji">🎯</span>
            <h1>Descubre tu nivel de guitarra</h1>
            <p>En menos de 2 minutos, evaluaremos tus habilidades con pequeños retos prácticos y te recomendaremos la ruta perfecta para ti.</p>
            <div class="onboarding-steps-preview">
                <div class="preview-step">
                    <span>1</span>
                    <div><strong>Tu perfil</strong><br>Guitarra, gustos y objetivos</div>
                </div>
                <div class="preview-step">
                    <span>2</span>
                    <div><strong>Mini-retos</strong><br>Evalúa tus habilidades actuales</div>
                </div>
                <div class="preview-step">
                    <span>3</span>
                    <div><strong>Tu ruta</strong><br>Dashboard personalizado</div>
                </div>
            </div>
            <div class="onboarding-actions">
                <button class="btn btn-primary" id="onboardingNext">Comenzar</button>
                <a href="#/" class="btn btn-secondary" data-link>Saltar por ahora</a>
            </div>
        </div>
    `;
}

function renderOnboardingProfile() {
    const p = onboardingState.profile;
    return `
        <div class="onboarding-form">
            <h2>Cuéntanos sobre ti</h2>

            <div class="onboarding-field">
                <label>¿Qué tipo de guitarra tocas?</label>
                <div class="onboarding-option-group" data-field="guitarType">
                    ${[["acustica","🎸 Acústica"],["electrica","⚡ Eléctrica"],["clasica","🎶 Clásica"]].map(([v,l]) =>
                        `<button class="onboarding-chip ${p.guitarType === v ? 'selected' : ''}" data-value="${v}">${l}</button>`
                    ).join("")}
                </div>
            </div>

            <div class="onboarding-field">
                <label>¿Cuánto tiempo llevas tocando?</label>
                <div class="onboarding-option-group" data-field="experience">
                    ${[["never","Nunca he tocado"],["lt6m","Menos de 6 meses"],["6m-2y","6 meses a 2 años"],["gt2y","Más de 2 años"]].map(([v,l]) =>
                        `<button class="onboarding-chip ${p.experience === v ? 'selected' : ''}" data-value="${v}">${l}</button>`
                    ).join("")}
                </div>
            </div>

            <div class="onboarding-field">
                <label>¿Cuál es tu objetivo principal?</label>
                <div class="onboarding-option-group" data-field="goal">
                    ${[["canciones","🎵 Tocar canciones"],["improvisar","🎸 Improvisar"],["componer","✍️ Componer"],["banda","🎤 Tocar en banda"],["hobby","😊 Hobby general"]].map(([v,l]) =>
                        `<button class="onboarding-chip ${p.goal === v ? 'selected' : ''}" data-value="${v}">${l}</button>`
                    ).join("")}
                </div>
            </div>

            <div class="onboarding-field">
                <label>¿Qué géneros te interesan? <span class="field-hint">(elige varios)</span></label>
                <div class="onboarding-option-group" data-field="genres" data-multi="true">
                    ${[["rock","🎸 Rock"],["blues","🎷 Blues"],["pop","🎤 Pop"],["clasico","🎻 Clásico"],["fingerstyle","✋ Fingerstyle"],["flamenco","💃 Flamenco"]].map(([v,l]) =>
                        `<button class="onboarding-chip ${p.genres.includes(v) ? 'selected' : ''}" data-value="${v}">${l}</button>`
                    ).join("")}
                </div>
            </div>

            <div class="onboarding-actions">
                <button class="btn btn-secondary" id="onboardingBack">Atrás</button>
                <button class="btn btn-primary" id="onboardingNext" ${!p.guitarType || !p.experience || !p.goal || p.genres.length === 0 ? 'disabled' : ''}>Siguiente</button>
            </div>
        </div>
    `;
}

function renderOnboardingDiagnostic() {
    const tier = onboardingState.currentTier;
    const challenges = ONBOARDING_CHALLENGES[tier];
    const tierLabels = { beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado" };
    const tierIcons = { beginner: "🌱", intermediate: "🎯", advanced: "🔥" };
    const allAnswered = challenges.every(c => onboardingState.responses[c.id] !== undefined);

    return `
        <div class="onboarding-diagnostic">
            <h2>Evalúa tus habilidades</h2>
            <p class="diagnostic-subtitle">Para cada reto, indica honestamente tu nivel actual</p>

            <div class="diagnostic-tier-badge">
                <span>${tierIcons[tier]}</span> Nivel ${tierLabels[tier]}
            </div>

            <div class="challenges-list">
                ${challenges.map(c => {
                    const response = onboardingState.responses[c.id];
                    return `
                        <div class="challenge-card ${response !== undefined ? 'answered' : ''}">
                            <div class="challenge-text">${c.text}</div>
                            <div class="challenge-hint">${c.hint}</div>
                            <div class="challenge-responses">
                                <button class="challenge-btn ${response === 2 ? 'selected' : ''}" data-challenge="${c.id}" data-score="2">Lo hago fácil</button>
                                <button class="challenge-btn ${response === 1 ? 'selected' : ''}" data-challenge="${c.id}" data-score="1">Me cuesta un poco</button>
                                <button class="challenge-btn ${response === 0 ? 'selected' : ''}" data-challenge="${c.id}" data-score="0">No puedo</button>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>

            <div class="onboarding-actions">
                <button class="btn btn-secondary" id="onboardingBack">Atrás</button>
                <button class="btn btn-primary" id="onboardingNext" ${!allAnswered ? 'disabled' : ''}>Siguiente</button>
            </div>
        </div>
    `;
}

function renderOnboardingResults() {
    const result = determineLevel(onboardingState.responses);
    const level = result.level;
    const maxScore = 6;
    const recs = generateRecommendations(onboardingState.profile, level);

    // Save onboarding data
    saveOnboarding({
        completed: true,
        completedAt: new Date().toISOString(),
        profile: onboardingState.profile,
        diagnostic: {
            responses: onboardingState.responses,
            determinedLevel: level,
            scores: result.scores
        },
        recommendations: recs
    });

    const primaryPath = PATHS.find(p => p.id === recs.primaryPathId);

    return `
        <div class="onboarding-results">
            <div class="results-level-badge">
                <span class="results-level-icon">${LEVEL_ICONS[level]}</span>
                <div class="results-level-label">${LEVEL_LABELS[level]}</div>
                <p class="results-level-desc">
                    ${level === "beginner" ? "Estás comenzando tu viaje musical. ¡Vamos a construir bases sólidas!" :
                      level === "intermediate" ? "Ya tienes buenas bases. ¡Es hora de expandir tu repertorio!" :
                      "Tienes un nivel avanzado. ¡Vamos a perfeccionar tu técnica!"}
                </p>
            </div>

            <div class="results-breakdown">
                <h3>Tu evaluación</h3>
                ${[["beginner", "Principiante"], ["intermediate", "Intermedio"], ["advanced", "Avanzado"]].map(([key, label]) => {
                    const score = result.scores[key];
                    const pct = Math.round((score / maxScore) * 100);
                    return `
                        <div class="results-bar-row">
                            <div class="results-bar-label">${label}</div>
                            <div class="results-bar-track">
                                <div class="results-bar-fill results-bar-${key}" style="width:${pct}%"></div>
                            </div>
                            <div class="results-bar-score">${score}/${maxScore}</div>
                        </div>
                    `;
                }).join("")}
            </div>

            <div class="results-recommendation">
                <h3>Tu ruta recomendada</h3>
                <div class="results-path-card" onclick="navigate('/ruta/${primaryPath.id}')">
                    <span class="card-icon">${primaryPath.icon}</span>
                    <div>
                        <h4>${primaryPath.title}</h4>
                        <p>${primaryPath.description}</p>
                    </div>
                </div>
            </div>

            <div class="onboarding-actions">
                <a href="#/" data-link class="btn btn-primary">Ver mi dashboard personalizado</a>
            </div>
        </div>
    `;
}

function renderOnboarding() {
    const step = onboardingState.step;
    let content;
    switch (step) {
        case 0: content = renderOnboardingWelcome(); break;
        case 1: content = renderOnboardingProfile(); break;
        case 2: content = renderOnboardingDiagnostic(); break;
        case 3: content = renderOnboardingResults(); break;
        default: content = renderOnboardingWelcome();
    }

    return `
        <div class="onboarding-container fade-in">
            ${renderOnboardingStepIndicator(step)}
            ${content}
        </div>
    `;
}

function renderPersonalizedHome() {
    const data = getOnboarding();
    const stats = getTotalStats();
    const level = data.diagnostic.determinedLevel;
    const recs = data.recommendations;
    const primaryPath = PATHS.find(p => p.id === recs.primaryPathId);

    return `
        <div class="fade-in">
            <div class="dashboard-level">
                <span class="level-icon">${LEVEL_ICONS[level]}</span>
                <div>
                    <div class="dashboard-level-text">Tu nivel: <strong>${LEVEL_LABELS[level]}</strong></div>
                    <div class="dashboard-level-sub">${data.profile.genres.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(", ")} · ${data.profile.guitarType === "acustica" ? "Acústica" : data.profile.guitarType === "electrica" ? "Eléctrica" : "Clásica"}</div>
                </div>
                <button class="btn btn-secondary btn-sm" id="redoOnboardingBtn">Recalibrar</button>
            </div>

            <h2 class="section-title">Tu ruta recomendada</h2>
            <p class="section-subtitle">Basada en tu nivel, gustos y objetivos</p>
            <div class="cards-grid">
                <div class="card recommended-path fade-in-card" style="--delay:0s" tabindex="0" role="button" onclick="navigate('/ruta/${primaryPath.id}')">
                    <span class="recommended-label">Recomendada para ti</span>
                    <span class="card-icon">${primaryPath.icon}</span>
                    <h3>${primaryPath.title}</h3>
                    <p>${primaryPath.description}</p>
                    <span class="card-tag tag-${primaryPath.tag}">${primaryPath.tagLabel}</span>
                    ${(() => { const pct = getPathProgress(primaryPath.id); return pct > 0 ? `
                        <div class="path-progress-bar" style="margin-top:0.75rem"><div class="path-progress-fill" style="width:${pct}%"></div></div>
                        <div class="path-progress-text">${pct}% completado</div>
                    ` : ""; })()}
                </div>
            </div>

            <h2 class="section-title">Próximos pasos</h2>
            <p class="section-subtitle">Lecciones sugeridas para empezar</p>
            <div class="next-lessons-list">
                ${recs.suggestedLessons.map((lessonId, i) => {
                    const found = findLessonWithPath(lessonId);
                    if (!found) return "";
                    const progress = getProgress();
                    const done = (progress[found.path.id] || []).includes(lessonId);
                    return `
                        <div class="next-lesson-item fade-in-card ${done ? 'completed' : ''}" style="--delay:${i * 0.05}s" onclick="navigate('/ruta/${found.path.id}')">
                            <div class="next-lesson-check">${done ? "✓" : (i + 1)}</div>
                            <div class="next-lesson-info">
                                <h4>${found.lesson.title}</h4>
                                <p>${found.lesson.desc} · <span class="next-lesson-path">${found.path.title}</span></p>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>

            <h2 class="section-title" style="margin-top:2rem">Recursos para ti</h2>
            <div class="resources-list">
                ${recs.suggestedResources.map((idx, i) => renderResourceCard(RESOURCES[idx], i)).join("")}
            </div>

            <div class="stats-bar" style="margin-top:2rem">
                <div class="stat-item">
                    <div class="stat-number">${PATHS.length}</div>
                    <div class="stat-label">Rutas disponibles</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.completedLessons}</div>
                    <div class="stat-label">Completadas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.totalLessons - stats.completedLessons}</div>
                    <div class="stat-label">Por completar</div>
                </div>
            </div>

            <h2 class="section-title">Todas las rutas</h2>
            <p class="section-subtitle">Explora todas las rutas de aprendizaje</p>
            <div class="cards-grid">
                ${PATHS.map((p, i) => renderPathCard(p, i)).join("")}
            </div>
        </div>
    `;
}

function bindOnboardingEvents() {
    // Chip selection
    document.querySelectorAll(".onboarding-option-group").forEach(group => {
        const field = group.dataset.field;
        const isMulti = group.dataset.multi === "true";

        group.querySelectorAll(".onboarding-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                const value = chip.dataset.value;
                if (isMulti) {
                    const idx = onboardingState.profile.genres.indexOf(value);
                    if (idx === -1) onboardingState.profile.genres.push(value);
                    else onboardingState.profile.genres.splice(idx, 1);
                } else {
                    onboardingState.profile[field] = value;
                }
                rerenderOnboarding();
            });
        });
    });

    // Challenge responses
    document.querySelectorAll(".challenge-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const challengeId = btn.dataset.challenge;
            const score = parseInt(btn.dataset.score);
            onboardingState.responses[challengeId] = score;
            rerenderOnboarding();
        });
    });

    // Navigation buttons
    const nextBtn = document.getElementById("onboardingNext");
    const backBtn = document.getElementById("onboardingBack");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (nextBtn.disabled) return;
            if (onboardingState.step === 2) {
                // Adaptive logic: decide next tier or go to results
                const tier = onboardingState.currentTier;
                const challenges = ONBOARDING_CHALLENGES[tier];
                const tierScore = challenges.reduce((sum, c) => sum + (onboardingState.responses[c.id] || 0), 0);

                onboardingState.tiersCompleted.push(tier);

                if (tier === "beginner") {
                    if (tierScore <= 2) {
                        onboardingState.step = 3;
                    } else if (tierScore >= 5) {
                        onboardingState.currentTier = "advanced";
                    } else {
                        onboardingState.currentTier = "intermediate";
                    }
                } else if (tier === "intermediate") {
                    if (tierScore >= 5) {
                        onboardingState.currentTier = "advanced";
                    } else {
                        onboardingState.step = 3;
                    }
                } else {
                    onboardingState.step = 3;
                }
            } else {
                onboardingState.step++;
            }
            rerenderOnboarding();
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (onboardingState.step === 2 && onboardingState.tiersCompleted.length > 0) {
                // Go back to previous tier
                const prevTier = onboardingState.tiersCompleted.pop();
                onboardingState.currentTier = prevTier;
                // Clear responses for current tier
                const currentChallenges = ONBOARDING_CHALLENGES[onboardingState.currentTier];
                currentChallenges.forEach(c => { delete onboardingState.responses[c.id]; });
            } else {
                onboardingState.step--;
            }
            rerenderOnboarding();
        });
    }

    // Redo onboarding button
    const redoBtn = document.getElementById("redoOnboardingBtn");
    if (redoBtn) {
        redoBtn.addEventListener("click", () => {
            onboardingState = {
                step: 0,
                profile: { guitarType: "", experience: "", goal: "", genres: [] },
                responses: {},
                currentTier: "beginner",
                tiersCompleted: []
            };
            navigate("/onboarding");
        });
    }
}

function rerenderOnboarding() {
    const app = document.getElementById("app");
    app.innerHTML = renderOnboarding();
    bindOnboardingEvents();
    bindEvents();
}

// ===== App Router =====
function router() {
    const route = getRoute();
    const app = document.getElementById("app");

    app.classList.add("loading");

    requestAnimationFrame(() => {
        let html;
        if (route === "/onboarding") {
            html = renderOnboarding();
        } else if (route === "/" || route === "") {
            html = renderHome();
        } else if (route === "/rutas") {
            html = renderPaths();
        } else if (route.startsWith("/ruta/")) {
            const pathId = route.split("/ruta/")[1];
            html = renderPathDetail(pathId);
        } else if (route === "/recursos") {
            html = renderResources();
        } else if (route === "/progreso") {
            html = renderProgress();
        } else {
            html = renderNotFound();
        }

        app.innerHTML = html;

        requestAnimationFrame(() => {
            app.classList.remove("loading");
            updateActiveNav();
            bindEvents();
            bindOnboardingEvents();
        });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateActiveNav() {
    const route = getRoute();
    document.querySelectorAll(".nav-links a").forEach(a => {
        const href = a.getAttribute("href").slice(1);
        if (route === href || (route.startsWith("/ruta/") && href === "/rutas")) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
}

function bindEvents() {
    // Lesson toggle with completion animation
    document.querySelectorAll(".lesson-item[data-lesson]").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.closest(".lesson-link")) return;
            const pathId = el.dataset.path;
            const lessonId = el.dataset.lesson;
            const wasCompleted = el.classList.contains("completed");

            toggleLesson(pathId, lessonId);

            if (!wasCompleted) {
                el.classList.add("completed", "just-completed");
                el.querySelector(".lesson-check").textContent = "✓";
                setTimeout(() => router(), 450);
            } else {
                router();
            }
        });
    });

    // Keyboard support for interactive elements
    document.querySelectorAll('[role="button"][tabindex="0"]').forEach(el => {
        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                el.click();
            }
        });
    });

    // Resource filter
    document.querySelectorAll(".filter-btn[data-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            document.querySelectorAll(".resource-card").forEach(card => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Reset progress
    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("¿Seguro que quieres reiniciar todo tu progreso?")) {
                localStorage.removeItem("guitarpath_progress");
                router();
            }
        });
    }

    // Close mobile menu on nav
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.addEventListener("click", () => {
            document.getElementById("navLinks").classList.remove("open");
            document.getElementById("menuToggle").classList.remove("active");
        });
    });
}

// ===== Init =====
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
    // Theme
    initTheme();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    // Mobile menu toggle with hamburger animation
    document.getElementById("menuToggle").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("open");
        document.getElementById("menuToggle").classList.toggle("active");
    });

    router();
});
