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

// ===== Router =====
function getRoute() {
    return window.location.hash.slice(1) || "/";
}

function navigate(path) {
    window.location.hash = path;
}

// ===== Render Functions =====
function renderHome() {
    const stats = getTotalStats();
    return `
        <div class="fade-in">
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
                ${PATHS.slice(0, 3).map(p => renderPathCard(p)).join("")}
            </div>
        </div>
    `;
}

function renderPathCard(path) {
    const pct = getPathProgress(path.id);
    return `
        <div class="card" onclick="navigate('/ruta/${path.id}')">
            <span class="card-icon">${path.icon}</span>
            <h3>${path.title}</h3>
            <p>${path.description}</p>
            <span class="card-tag tag-${path.tag}">${path.tagLabel}</span>
            ${pct > 0 ? `
                <div class="path-progress-bar" style="margin-top:0.75rem">
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
                ${PATHS.map(p => renderPathCard(p)).join("")}
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
                <div class="path-progress-bar">
                    <div class="path-progress-fill" style="width:${pct}%"></div>
                </div>
                <div class="path-progress-text">${completed.length} de ${path.lessons.length} lecciones completadas (${pct}%)</div>
            </div>
            <div class="lessons-list">
                ${path.lessons.map(l => {
                    const done = completed.includes(l.id);
                    return `
                        <div class="lesson-item ${done ? "completed" : ""}" data-path="${pathId}" data-lesson="${l.id}">
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
                ${RESOURCES.map(r => renderResourceCard(r)).join("")}
            </div>
        </div>
    `;
}

function renderResourceCard(r) {
    return `
        <div class="resource-card" data-category="${r.category}">
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

    return `
        <div class="fade-in">
            <h2 class="section-title">Mi Progreso</h2>
            <p class="section-subtitle">Resumen de tu avance en cada ruta</p>

            <div class="progress-overview">
                <div class="progress-stat">
                    <div class="stat-number">${stats.completedLessons}</div>
                    <div class="stat-label">Lecciones completadas</div>
                </div>
                <div class="progress-stat">
                    <div class="stat-number">${stats.totalLessons - stats.completedLessons}</div>
                    <div class="stat-label">Por completar</div>
                </div>
                <div class="progress-stat">
                    <div class="stat-number">${stats.startedPaths}</div>
                    <div class="stat-label">Rutas iniciadas</div>
                </div>
                <div class="progress-stat">
                    <div class="stat-number">${stats.totalLessons > 0 ? Math.round((stats.completedLessons / stats.totalLessons) * 100) : 0}%</div>
                    <div class="stat-label">Progreso total</div>
                </div>
            </div>

            <div class="progress-paths">
                ${PATHS.map(p => {
                    const completed = (progress[p.id] || []).length;
                    const total = p.lessons.length;
                    const pct = Math.round((completed / total) * 100);
                    return `
                        <div class="progress-path-card" onclick="navigate('/ruta/${p.id}')" style="cursor:pointer">
                            <div class="progress-path-header">
                                <h3>${p.icon} ${p.title}</h3>
                                <span class="progress-percent">${pct}%</span>
                            </div>
                            <div class="mini-progress-bar">
                                <div class="mini-progress-fill" style="width:${pct}%"></div>
                            </div>
                            <div class="path-progress-text" style="margin-top:0.5rem">${completed} de ${total} lecciones</div>
                        </div>
                    `;
                }).join("")}
            </div>

            ${stats.completedLessons > 0 ? `<button class="reset-btn" id="resetBtn">Reiniciar todo el progreso</button>` : ""}
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

// ===== App Router =====
function router() {
    const route = getRoute();
    const app = document.getElementById("app");

    let html;
    if (route === "/" || route === "") {
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
    updateActiveNav();
    bindEvents();
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
    // Lesson toggle
    document.querySelectorAll(".lesson-item[data-lesson]").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.closest(".lesson-link")) return;
            const pathId = el.dataset.path;
            const lessonId = el.dataset.lesson;
            toggleLesson(pathId, lessonId);
            router();
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
        });
    });
}

// ===== Init =====
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    document.getElementById("menuToggle").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("open");
    });

    router();
});
