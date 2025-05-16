// Constants
const API_KEY = "c542b4951cfcd4ca4e97f3184f866b70"; // Ganti dengan API key TMDB Anda
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMG = "https://wartakita.github.io/movies.github.io/NO%20IMAGE.png";

// DOM Elements
const moviesContainer = document.getElementById("movies");
const loading = document.getElementById("loading");
const noResults = document.querySelector(".no-results");
const backToTopBtn = document.getElementById("backToTop");
const searchInput = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreSelect");
const contentTypeSelect = document.getElementById("contentType");
const darkModeToggle = document.getElementById("darkModeToggle");

// Modal Elements
const seasonInput = document.getElementById("seasonInput");
const episodeInput = document.getElementById("episodeInput");
const playEpisodeBtn = document.getElementById("playEpisodeBtn");
const seasonEpisodeControls = document.getElementById("seasonEpisodeControls");
const lastWatchedInfo = document.getElementById("lastWatchedInfo");
const modalOverlay = document.getElementById("modalOverlay");
const modalHeader = document.getElementById("modalHeader");
const modalOverview = document.getElementById("modalOverview");
const modalDetails = document.getElementById("modalDetails");
const modalPlayer = document.getElementById("modalPlayer");

// State variables
let currentPage = 1;
let totalPages = 1;
let currentQuery = "";
let currentGenre = "";
let currentContentType = "movie"; // "movie" or "tv"
let isSearchMode = false;
let genreMap = {};

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Fetch genres for movies and TV series and populate genre dropdown
async function fetchGenres() {
    try {
        const [movieRes, tvRes] = await Promise.all([
            fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`),
            fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`),
        ]);
        const movieData = await movieRes.json();
        const tvData = await tvRes.json();

        // Combine genres, prefix keys with content type to avoid conflicts
        const combinedGenres = {};
        movieData.genres.forEach((g) => {
            combinedGenres[`movie-${g.id}`] = g.name;
        });
        tvData.genres.forEach((g) => {
            combinedGenres[`tv-${g.id}`] = g.name;
        });

        genreMap = combinedGenres;

        populateGenreOptions();
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}

// Populate genre dropdown based on current content type
function populateGenreOptions() {
    genreSelect.innerHTML = '<option value="">All Genres</option>';
    const prefix = currentContentType + "-";
    const added = new Set();
    for (const key in genreMap) {
        if (key.startsWith(prefix)) {
            const id = key.split("-")[1];
            const name = genreMap[key];
            if (!added.has(id)) {
                const option = document.createElement("option");
                option.value = id;
                option.textContent = name;
                genreSelect.appendChild(option);
                added.add(id);
            }
        }
    }
}

// Build API endpoint based on current filters
function buildEndpoint(page = currentPage) {
    let endpoint = "";
    if (isSearchMode && currentQuery.length > 0) {
        endpoint = `${BASE_URL}/search/${currentContentType}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          currentQuery
        )}&page=${page}&include_adult=false`;
    } else {
        // Discover endpoint with genre filter
        endpoint = `${BASE_URL}/discover/${currentContentType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`;
        if (currentGenre) {
            endpoint += `&with_genres=${currentGenre}`;
        }
    }
    return endpoint;
}

// Show movies or TV series in container
function showContent(items) {
    moviesContainer.innerHTML = "";
    if (!items || items.length === 0) {
        noResults.style.display = "flex";
        return;
    }
    noResults.style.display = "none";
    items.forEach((item) => {
        const genres = (item.genre_ids || [])
            .map((id) => genreMap[`${currentContentType}-${id}`])
            .filter(Boolean)
            .join(", ");
        const poster = item.poster_path ?
            IMAGE_PATH + item.poster_path :
            PLACEHOLDER_IMG;
        const title = item.title || item.name || "Untitled";
        const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";
        const releaseDate =
            item.release_date || item.first_air_date || "Unknown";

        const card = document.createElement("div");
        card.className = "movie-card fade-in";
        card.setAttribute("tabindex", "0");
        card.setAttribute(
            "aria-label",
            `${title}, rating ${rating}, released on ${releaseDate}`
        );
        card.innerHTML = `
          <img src="${poster}" alt="Poster of ${title}" loading="lazy" />
          <div class="movie-info" title="${item.overview || "No description available."}">
                        <div class="title">${title}</div>
            <div class="meta">⭐ ${rating} | 📅 ${releaseDate}</div>
            <div class="genres">${genres}</div>
          </div>
        `;

        // Add click event to open modal with details and player
        card.addEventListener("click", () => openModal(item));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(item);
            }
        });

        moviesContainer.appendChild(card);
    });
}

// Append content for infinite scroll
function appendContent(items) {
    if (!items || items.length === 0) return;
    items.forEach((item) => {
        const genres = (item.genre_ids || [])
            .map((id) => genreMap[`${currentContentType}-${id}`])
            .filter(Boolean)
            .join(", ");
        const poster = item.poster_path ?
            IMAGE_PATH + item.poster_path :
            PLACEHOLDER_IMG;
        const title = item.title || item.name || "Untitled";
        const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";
        const releaseDate =
            item.release_date || item.first_air_date || "Unknown";

        const card = document.createElement("div");
        card.className = "movie-card fade-in";
        card.setAttribute("tabindex", "0");
        card.setAttribute(
            "aria-label",
            `${title}, rating ${rating}, released on ${releaseDate}`
        );
        card.innerHTML = `
          <img src="${poster}" alt="Poster of ${title}" loading="lazy" />
          <div class="movie-info" title="${item.overview || "No description available."}">
            <div class="title">${title}</div>
            <div class="meta">⭐ ${rating} | 📅 ${releaseDate}</div>
            <div class="genres">${genres}</div>
          </div>
        `;

        // Add click event to open modal with details and player
        card.addEventListener("click", () => openModal(item));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(item);
            }
        });

        moviesContainer.appendChild(card);
    });
}

// Fetch content from API
async function fetchContent() {
    loading.style.display = "flex";
    noResults.style.display = "none";
    if (currentPage === 1) {
        moviesContainer.innerHTML = "";
    }
    try {
        const endpoint = buildEndpoint();
        const res = await fetch(endpoint);
        const data = await res.json();
        totalPages = data.total_pages || 1;
        if (!data.results || data.results.length === 0) {
            if (currentPage === 1) {
                noResults.style.display = "flex";
            }
        } else {
            if (currentPage === 1) {
                showContent(data.results);
            } else {
                appendContent(data.results);
            }
        }
    } catch (error) {
        console.error("Error fetching content:", error);
        if (currentPage === 1) {
            noResults.style.display = "flex";
            noResults.textContent =
                "Failed to load content. Please check your connection and try again.";
        }
    } finally {
        loading.style.display = "none";
    }
}

// Debounced search handler
const handleSearch = debounce(() => {
    currentQuery = searchInput.value.trim();
    currentPage = 1;
    isSearchMode = currentQuery.length > 0;
    fetchContent();
}, 300);

// Event listeners
searchInput.addEventListener("input", handleSearch);

genreSelect.addEventListener("change", () => {
    currentGenre = genreSelect.value;
    currentPage = 1;
    fetchContent();
});

contentTypeSelect.addEventListener("change", () => {
    currentContentType = contentTypeSelect.value;
    currentGenre = "";
    genreSelect.value = "";
    currentPage = 1;
    populateGenreOptions();
    fetchContent();
});

// Back to Top button
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show/hide Back to Top button and infinite scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500 &&
        currentPage < totalPages &&
        loading.style.display === "none"
    ) {
        currentPage++;
        fetchContent();
    }
});

// Dark mode toggle
function loadDarkModeSetting() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("light-mode");
        darkModeToggle.setAttribute("aria-pressed", "true");
        darkModeToggle.textContent = "☀️";
    }
}
loadDarkModeSetting();

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains("light-mode");
    darkModeToggle.setAttribute("aria-pressed", isLightMode.toString());
    darkModeToggle.textContent = isLightMode ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isLightMode ? "enabled" : "disabled");
});

// Modal open function
function openModal(item) {
    modalHeader.textContent = item.title || item.name || "Untitled";
    modalOverview.textContent = item.overview || "No description available.";
    const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";
    const releaseDate = item.release_date || item.first_air_date || "Unknown";
    const genres = (item.genre_ids || [])
        .map((id) => genreMap[`${currentContentType}-${id}`])
        .filter(Boolean)
        .join(", ") || "Unknown";

    modalDetails.innerHTML = `
        <p>⭐ Rating: ${rating}</p>
        <p>📅 Release Date: ${releaseDate}</p>
        <p>🎭 Genres: ${genres}</p>
      `;

    if (currentContentType === "tv") {
        seasonEpisodeControls.style.display = "flex";

        const saved = JSON.parse(localStorage.getItem(`tv-${item.id}`) || '{}');
        const savedSeason = saved.season || 1;
        const savedEpisode = saved.episode || 1;

        seasonInput.value = savedSeason;
        episodeInput.value = savedEpisode;
        lastWatchedInfo.textContent = `Last watched: Season ${savedSeason} Episode ${savedEpisode}`;

        modalPlayer.src = `https://letsembed.cc/embed/tv/?id=${item.id}/${savedSeason}/${savedEpisode}`;
    } else {
        seasonEpisodeControls.style.display = "none";
        lastWatchedInfo.textContent = "";
        modalPlayer.src = `https://letsembed.cc/embed/movie/?id=${item.id}`;
    }

    modalOverlay.style.display = "flex";
    modalOverlay.focus();
    document.body.style.overflow = "hidden";

    playEpisodeBtn.onclick = () => {
        const s = parseInt(seasonInput.value || "1");
        const e = parseInt(episodeInput.value || "1");
        if (!isNaN(s) && !isNaN(e) && s > 0 && e > 0) {
            modalPlayer.src = `https://letsembed.cc/embed/tv/?id=${item.id}/${s}/${e}`;
            localStorage.setItem(`tv-${item.id}`, JSON.stringify({
                season: s,
                episode: e
            }));
            lastWatchedInfo.textContent = `Last watched: Season ${s} Episode ${e}`;
        }
    };
}

// Modal close function
function closeModal() {
    modalOverlay.style.display = "none";
    modalPlayer.src = "";
    // Restore background scroll
    document.body.style.overflow = "";
}

// Close modal on close button click
modalCloseBtn.addEventListener("click", closeModal);

// Close modal on overlay click (outside modal content)
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal on Escape key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.style.display === "flex") {
        closeModal();
    }
});

// Initialize app
fetchGenres().then(() => {
    populateGenreOptions();
    fetchContent();
});
