const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
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
    currentView: 'popular-movies', // 'popular-movies', 'upcoming-movies', 'now-playing-movies', 'top-rated-movies', 'popular-tv', 'airing-today', 'on-tv', 'top-rated-tv', or 'search'
    currentQuery: '', // Holds the current search query
    currentTMDBId: null,
    currentType: null,
    genreMap: {}
};

// Update state
function updateState(newState) {
    Object.assign(state, newState);
    updatePagination(state.currentPage, state.totalPages);
    if (state.currentView === 'popular-movies') fetchPopularMovies(state.currentPage);
    else if (state.currentView === 'upcoming-movies') fetchUpcomingMovies(state.currentPage);
    else if (state.currentView === 'now-playing-movies') fetchNowPlayingMovies(state.currentPage);
    else if (state.currentView === 'top-rated-movies') fetchTopRatedMovies(state.currentPage);
    else if (state.currentView === 'popular-tv') fetchPopularTVSeries(state.currentPage);
    else if (state.currentView === 'airing-today') fetchAiringToday(state.currentPage);
    else if (state.currentView === 'on-tv') fetchOnTV(state.currentPage);
    else if (state.currentView === 'top-rated-tv') fetchTopRatedTVSeries(state.currentPage);
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

// Display popular movies
async function fetchPopularMovies(page = 1) {
    const data = await fetchData('/movie/popular', page);
    if (data) {
        renderContent(data.results, 'popular-movies');
        updatePagination(data.page, data.total_pages);
    }
}

// Display upcoming movies
async function fetchUpcomingMovies(page = 1) {
    const data = await fetchData('/movie/upcoming', page);
    if (data) {
        renderContent(data.results, 'upcoming-movies');
        updatePagination(data.page, data.total_pages);
    }
}

// Display now playing movies
async function fetchNowPlayingMovies(page = 1) {
    const data = await fetchData('/movie/now_playing', page);
    if (data) {
        renderContent(data.results, 'now-playing-movies');
        updatePagination(data.page, data.total_pages);
    }
}

// Display top rated movies
async function fetchTopRatedMovies(page = 1) {
    const data = await fetchData('/movie/top_rated', page);
    if (data) {
        renderContent(data.results, 'top-rated-movies');
        updatePagination(data.page, data.total_pages);
    }
}

// Display popular TV series
async function fetchPopularTVSeries(page = 1) {
    const data = await fetchData('/tv/popular', page);
    if (data) {
        renderContent(data.results, 'popular-tv');
        updatePagination(data.page, data.total_pages);
    }
}

// Display airing today TV series
async function fetchAiringToday(page = 1) {
    const data = await fetchData('/tv/airing_today', page);
    if (data) {
        renderContent(data.results, 'airing-today');
        updatePagination(data.page, data.total_pages);
    }
}

// Display on TV TV series
async function fetchOnTV(page = 1) {
    const data = await fetchData('/tv/on_the_air', page);
    if (data) {
        renderContent(data.results, 'on-tv');
        updatePagination(data.page, data.total_pages);
    }
}

// Display top rated TV series
async function fetchTopRatedTVSeries(page = 1) {
    const data = await fetchData('/tv/top_rated', page);
    if (data) {
        renderContent(data.results, 'top-rated-tv');
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
    if (type === 'popular-movies' || type === 'upcoming-movies' || type === 'now-playing-movies' || type === 'top-rated-movies') {
        playerIframe.src = `https://player.autoembed.cc/embed/movie/${tmdbId}`;
        tvSeriesForm.style.display = 'none'; // Hide TV Series form for movies
    } else if (type === 'popular-tv' || type === 'airing-today' || type === 'on-tv' || type === 'top-rated-tv') {
        playerIframe.src = `https://player.autoembed.cc/embed/tv/${tmdbId}/1/1`;
        tvSeriesForm.style.display = 'block'; // Show TV Series form for TV Series
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
    tvSeriesForm.style.display = 'none'; // Hide TV Series form when player is closed
});

// Handle TV Series form submission
playEpisodeButton.addEventListener('click', () => {
    const seasonNumber = seasonNumberInput.value.trim();
    const episodeNumber = episodeNumberInput.value.trim();
    if (seasonNumber && episodeNumber) {
        if (!isNaN(seasonNumber) && !isNaN(episodeNumber)) {
            playerIframe.src = `https://player.autoembed.cc/embed/tv/${state.currentTMDBId}/${seasonNumber}/${episodeNumber}`;
        } else {
            alert('Please enter valid season and episode numbers.');
        }
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
document.getElementById('popular-movies-tab').addEventListener('click', () => {
    updateState({
        currentView: 'popular-movies',
        currentPage: 1
    });
});

document.getElementById('upcoming-movies-tab').addEventListener('click', () => {
    updateState({
        currentView: 'upcoming-movies',
        currentPage: 1
    });
});

document.getElementById('now-playing-movies-tab').addEventListener('click', () => {
    updateState({
        currentView: 'now-playing-movies',
        currentPage: 1
    });
});

document.getElementById('top-rated-movies-tab').addEventListener('click', () => {
    updateState({
        currentView: 'top-rated-movies',
        currentPage: 1
    });
});

document.getElementById('popular-tv-tab').addEventListener('click', () => {
    updateState({
        currentView: 'popular-tv',
        currentPage: 1
    });
});

document.getElementById('airing-today-tab').addEventListener('click', () => {
    updateState({
        currentView: 'airing-today',
        currentPage: 1
    });
});

document.getElementById('on-tv-tab').addEventListener('click', () => {
    updateState({
        currentView: 'on-tv',
        currentPage: 1
    });
});

document.getElementById('top-rated-tv-tab').addEventListener('click', () => {
    updateState({
        currentView: 'top-rated-tv',
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
            currentView: 'popular-movies',
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

// Initial load
fetchGenres();
updateState({
    currentView: 'popular-movies',
    currentPage: 1
});
