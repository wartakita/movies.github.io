const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const moviesContainer = document.getElementById('movies-container');
const trendingContainer = document.getElementById('trending-container');
const pagination = document.getElementById('pagination');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loadingSpinner = document.getElementById('loading-spinner');
const genreSelect = document.getElementById('genre-select');
const yearSelect = document.getElementById('year-select');
const noResults = document.getElementById('no-results');
const floatingIframe = document.getElementById('floating-iframe');
const videoIframe = document.getElementById('video-iframe');
const closeIframe = document.getElementById('close-iframe');
const iframeTitle = document.getElementById('iframe-title');
const scrollToTopButton = document.getElementById('scroll-to-top');

let currentPage = 1;
let totalPages = 1;
let currentQuery = '';
let currentGenre = '';
let currentYear = '';

// Generate year options dynamically
function populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Fetch genres for dropdown
async function fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    populateGenres(data.genres);
}

function populateGenres(genres) {
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;
        genreSelect.appendChild(option);
    });
}

async function fetchMovies(query = '', genre = '', year = '', page = 1) {
    showSpinner();
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
    if (query) {
        url = `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`;
    } else {
        if (genre) url += `&with_genres=${genre}`;
        if (year) url += `&primary_release_year=${year}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.results);
    totalPages = data.total_pages;
    setupPagination();
    hideSpinner();
}

function displayMovies(movies) {
    if (movies.length === 0) {
        moviesContainer.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        moviesContainer.innerHTML = movies
            .map(movie => {
                const title = movie.title || movie.name;
                const poster = movie.poster_path ?
                    `${IMG_BASE_URL}${movie.poster_path}` :
                    'https://via.placeholder.com/500x750?text=No+Image';
                const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
                const typeLabel = type === 'movie' ?
                    `<i class="bi bi-film me-1"></i>Movie` :
                    `<i class="bi bi-tv me-1"></i>TV Series`;
                const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
                let seasonEpisodeForm = '';
                if (type === 'tv') {
                    seasonEpisodeForm = `
                                <div class="season-episode-form">
                                    <input type="number" id="season-input-${movie.id}" placeholder="Season" min="1">
                                    <input type="number" id="episode-input-${movie.id}" placeholder="Episode" min="1">
                                    <button class="btn btn-primary" onclick="playTVSeries('${movie.id}', '${title}')">Play</button>
                                </div>
                            `;
                }
                return `
                            <div class="col-md-4 col-lg-3">
                                <div class="card h-100 position-relative" data-tmdb-id="${movie.id}" data-type="${type}" data-title="${title}">
                                    <img src="${poster}" class="card-img-top" alt="${title}">
                                    <div class="label-icon">${typeLabel}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">${movie.overview.slice(0, 100)}...</p>
                                        <div class="rating">
                                            <i class="bi bi-star-fill"></i>
                                            <span>${rating} / 10</span>
                                        </div>
                                        ${seasonEpisodeForm}
                                    </div>
                                </div>
                            </div>
                        `;
            })
            .join('');

        // Add event listeners to each card
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const tmdbId = card.getAttribute('data-tmdb-id');
                const type = card.getAttribute('data-type');
                const title = card.getAttribute('data-title');
                if (type === 'movie') {
                    showVideo(tmdbId, type, title);
                }
            });
        });
    }
}

function setupPagination() {
    pagination.innerHTML = `
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <button class="page-link" onclick="changePage(${currentPage - 1})">Previous</button>
                </li>
                <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                    <button class="page-link" onclick="changePage(${currentPage + 1})">Next</button>
                </li>
            `;
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    fetchMovies(currentQuery, currentGenre, currentYear, currentPage);
}

function showSpinner() {
    loadingSpinner.style.display = 'block';
}

function hideSpinner() {
    loadingSpinner.style.display = 'none';
}

function showVideo(tmdbId, type, title, season = '', episode = '') {
    let videoUrl;
    if (type === 'movie') {
        videoUrl = `https://player.autoembed.cc/embed/movie/${tmdbId}`;
    } else if (type === 'tv') {
        videoUrl = `https://player.autoembed.cc/embed/tv/${tmdbId}/${season}/${episode}`;
    }
    videoIframe.src = videoUrl;
    iframeTitle.textContent = title;
    floatingIframe.style.display = 'block';
}

function hideVideo() {
    videoIframe.src = '';
    iframeTitle.textContent = '';
    floatingIframe.style.display = 'none';
}

function playTVSeries(tmdbId, title) {
    const seasonInput = document.getElementById(`season-input-${tmdbId}`);
    const episodeInput = document.getElementById(`episode-input-${tmdbId}`);
    const season = seasonInput.value;
    const episode = episodeInput.value;
    if (season && episode) {
        showVideo(tmdbId, 'tv', title, season, episode);
    } else {
        alert('Please enter both season and episode numbers.');
    }
}

// Fetch trending movies and TV series
async function fetchTrending() {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    displayTrending(data.results);
}

function displayTrending(trendingItems) {
    trendingContainer.innerHTML = trendingItems
        .map(item => {
            const title = item.title || item.name;
            const poster = item.poster_path ?
                `${IMG_BASE_URL}${item.poster_path}` :
                'https://via.placeholder.com/500x750?text=No+Image';
            const type = item.media_type || (item.first_air_date ? 'tv' : 'movie');
            const typeLabel = type === 'movie' ?
                `<i class="bi bi-film me-1"></i>Movie` :
                `<i class="bi bi-tv me-1"></i>TV Series`;
            const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
            let seasonEpisodeForm = '';
            if (type === 'tv') {
                seasonEpisodeForm = `
                            <div class="season-episode-form">
                                <input type="number" id="season-input-${item.id}" placeholder="Season" min="1">
                                <input type="number" id="episode-input-${item.id}" placeholder="Episode" min="1">
                                <button class="btn btn-primary" onclick="playTVSeries('${item.id}', '${title}')">Play</button>
                            </div>
                        `;
            }
            return `
                        <div class="col-md-4 col-lg-3">
                            <div class="card h-100 position-relative" data-tmdb-id="${item.id}" data-type="${type}" data-title="${title}">
                                <img src="${poster}" class="card-img-top" alt="${title}">
                                <div class="label-icon">${typeLabel}</div>
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${item.overview.slice(0, 100)}...</p>
                                    <div class="rating">
                                        <i class="bi bi-star-fill"></i>
                                        <span>${rating} / 10</span>
                                    </div>
                                    ${seasonEpisodeForm}
                                </div>
                            </div>
                        </div>
                    `;
        })
        .join('');

    // Add event listeners to each card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const tmdbId = card.getAttribute('data-tmdb-id');
            const type = card.getAttribute('data-type');
            const title = card.getAttribute('data-title');
            if (type === 'movie') {
                showVideo(tmdbId, type, title);
            }
        });
    });
}

// Event listeners
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    currentQuery = searchInput.value;
    currentGenre = '';
    currentYear = '';
    currentPage = 1;
    fetchMovies(currentQuery, currentGenre, currentYear, currentPage);
});

genreSelect.addEventListener('change', () => {
    currentGenre = genreSelect.value;
    currentQuery = '';
    currentPage = 1;
    fetchMovies(currentQuery, currentGenre, currentYear, currentPage);
});

yearSelect.addEventListener('change', () => {
    currentYear = yearSelect.value;
    currentQuery = '';
    currentPage = 1;
    fetchMovies(currentQuery, currentGenre, currentYear, currentPage);
});

closeIframe.addEventListener('click', hideVideo);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Initial load
populateYears();
fetchGenres();
fetchMovies();
fetchTrending();
