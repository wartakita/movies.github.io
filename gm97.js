const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const moviesTab = document.getElementById('movies-tab');
const tvTab = document.getElementById('tv-tab');
const searchInput = document.getElementById('search-input');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const paginationInfo = document.getElementById('pagination-info');
const loader = document.getElementById('loader');
const floatingPlayer = document.getElementById('floating-player');
const playerIframe = document.getElementById('player-iframe');
const playerTitle = document.getElementById('player-title');
const playerSynopsis = document.getElementById('player-synopsis');
const closePlayerButton = document.getElementById('close-player');
const tvSeriesForm = document.getElementById('tv-series-form');
const seasonNumberInput = document.getElementById('season-number');
const episodeNumberInput = document.getElementById('episode-number');
const playEpisodeButton = document.getElementById('play-episode');
const scrollToTopButton = document.getElementById('scroll-to-top');

// Initial state
const state = {
    currentPage: 1,
    totalPages: 1,
    currentView: 'movies', // 'movies', 'tv', or 'search'
    currentQuery: '', // Holds the current search query
    currentTMDBId: null,
    currentType: null,
    genreMap: {}
};

// Update state
function updateState(newState) {
    Object.assign(state, newState);
    updatePagination(state.currentPage, state.totalPages);
    if (state.currentView === 'movies') fetchMovies(state.currentPage);
    else if (state.currentView === 'tv') fetchTVSeries(state.currentPage);
    else if (state.currentView === 'search') fetchSearchResults(state.currentPage);
}

// Show loader
function showLoader() {
    loader.style.display = 'block';
}

// Hide loader
function hideLoader() {
    loader.style.display = 'none';
}

// Update pagination UI
function updatePagination(page, total) {
    state.currentPage = page;
    state.totalPages = total;
    prevButton.disabled = page <= 1;
    nextButton.disabled = page >= total;
    paginationInfo.textContent = `Page ${page} of ${total}`;
}

// Fetch data from TMDB API
async function fetchData(endpoint, page = 1, query = '') {
    showLoader();
    const url = query ?
        `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}` :
        `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        hideLoader();
        return data;
    } catch (error) {
        hideLoader();
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = `<div class="alert alert-danger">Failed to fetch data. Please try again later.</div>`;
    }
}

// Fetch genre data
async function fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const genreMap = {};
        data.genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        updateState({
            genreMap
        });
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}

// Display movies
async function fetchMovies(page = 1) {
    const data = await fetchData('/movie/popular', page);
    if (data) {
        renderContent(data.results, 'movies');
        updatePagination(data.page, data.total_pages);
    }
}

// Display TV series
async function fetchTVSeries(page = 1) {
    const data = await fetchData('/tv/popular', page);
    if (data) {
        renderContent(data.results, 'tv');
        updatePagination(data.page, data.total_pages);
    }
}

// Display search results
async function fetchSearchResults(page = 1) {
    if (!state.currentQuery) return;
    const data = await fetchData('/search/multi', page, state.currentQuery);
    if (data) {
        renderContent(data.results, 'search');
        updatePagination(data.page, data.total_pages);
    }
}

// Render content
function renderContent(items, type) {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = items
        .map(item => {
            const title = item.title || item.name || "No Title Available";
            const poster = item.poster_path ?
                `${IMG_URL}${item.poster_path}` :
                'https://via.placeholder.com/200x300?text=No+Image';
            const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
            const tmdbId = item.id;
            const year = item.release_date ? item.release_date.split('-')[0] : item.first_air_date ? item.first_air_date.split('-')[0] : 'N/A';
            const genres = item.genre_ids ? item.genre_ids.map(id => state.genreMap[id]).join(', ') : 'N/A';
            return `
                        <div class="col-md-3 col-sm-6 col-12">
                            <div class="card bg-dark text-white mb-3" data-tmdb-id="${tmdbId}" data-type="${type}" data-title="${title}" data-synopsis="${item.overview}">
                                <img src="${poster}" class="card-img-top" alt="${title}">
                                <div class="year-label">${year}</div>
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span>${rating}</span>
                                    </div>
                                    <div class="genre-label">${genres}</div>
                                </div>
                            </div>
                        </div>`;
        })
        .join('');
}

// Handle card click
document.getElementById('movies-list').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const tmdbId = card.getAttribute('data-tmdb-id');
        const type = card.getAttribute('data-type');
        const title = card.getAttribute('data-title');
        const synopsis = card.getAttribute('data-synopsis');
        state.currentTMDBId = tmdbId;
        state.currentType = type;
        openPlayer(title, synopsis, tmdbId, type);
    }
});

// Open player
function openPlayer(title, synopsis, tmdbId, type) {
    playerTitle.textContent = title;
    playerSynopsis.textContent = synopsis;
    if (type === 'movies') {
        playerIframe.src = `https://player.autoembed.cc/embed/movie/${tmdbId}`;
        tvSeriesForm.style.display = 'none';
    } else if (type === 'tv') {
        playerIframe.src = `https://player.autoembed.cc/embed/tv/${tmdbId}/1/1`;
        tvSeriesForm.style.display = 'block';
    }
    floatingPlayer.style.display = 'flex';
}

// Close player
closePlayerButton.addEventListener('click', () => {
    floatingPlayer.style.display = 'none';
    playerIframe.src = '';
    playerTitle.textContent = '';
    playerSynopsis.textContent = '';
    state.currentTMDBId = null;
    state.currentType = null;
});

// Handle TV Series form submission
playEpisodeButton.addEventListener('click', () => {
    const seasonNumber = seasonNumberInput.value.trim();
    const episodeNumber = episodeNumberInput.value.trim();
    if (seasonNumber && episodeNumber) {
        playerIframe.src = `https://player.autoembed.cc/embed/tv/${state.currentTMDBId}/${seasonNumber}/${episodeNumber}`;
    } else {
        alert('Please enter both season and episode numbers.');
    }
});

// Handle pagination buttons
prevButton.addEventListener('click', () => {
    if (state.currentPage > 1) {
        updateState({
            currentPage: state.currentPage - 1
        });
    }
});

nextButton.addEventListener('click', () => {
    if (state.currentPage < state.totalPages) {
        updateState({
            currentPage: state.currentPage + 1
        });
    }
});

// Tab switching
moviesTab.addEventListener('click', () => {
    updateState({
        currentView: 'movies',
        currentPage: 1
    });
});

tvTab.addEventListener('click', () => {
    updateState({
        currentView: 'tv',
        currentPage: 1
    });
});

// Handle search input
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query) {
        updateState({
            currentView: 'search',
            currentQuery: query,
            currentPage: 1
        });
    } else {
        updateState({
            currentView: 'movies',
            currentQuery: '',
            currentPage: 1
        });
    }
});

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top Button
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Event listeners for scroll and click
window.addEventListener('scroll', toggleScrollToTopButton);
scrollToTopButton.addEventListener('click', scrollToTop);

// Fetch trending movies for carousel
async function fetchTrendingMovies() {
    const data = await fetchData('/trending/movie/day', 1);
    if (data && data.results) {
        renderCarousel(data.results);
    }
}

// Render carousel
function renderCarousel(items) {
    const carouselIndicators = document.getElementById('carousel-indicators');
    const carouselInner = document.getElementById('carousel-inner');
    carouselIndicators.innerHTML = '';
    carouselInner.innerHTML = '';

    items.slice(0, 10).forEach((item, index) => {
        const title = item.title || item.name || "No Title Available";
        const poster = item.poster_path ?
            `${IMG_URL}${item.poster_path}` :
            'https://via.placeholder.com/200x300?text=No+Image';
        const synopsis = item.overview || "No synopsis available";

        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
        indicator.setAttribute('data-bs-slide-to', index);
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        carouselItem.innerHTML = `
                    <img src="${poster}" class="d-block w-100" alt="${title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${title}</h5>
                        <p>${synopsis}</p>
                    </div>
                `;

        carouselIndicators.appendChild(indicator);
        carouselInner.appendChild(carouselItem);
    });
}

// Initial load
fetchGenres();
fetchTrendingMovies();
updateState({
    currentView: 'movies',
    currentPage: 1
});
