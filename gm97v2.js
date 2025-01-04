const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://media.themoviedb.org/t/p/w1280';

const movieList = document.getElementById('movie-list');
const trendingList = document.getElementById('trending-carousel');
const loadMovies = document.getElementById('load-movies');
const loadTV = document.getElementById('load-tv');
const sectionTitle = document.getElementById('section-title');
const trendingTitle = document.getElementById('trending-title');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const genreFilter = document.getElementById('genre-filter');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const toggleDarkMode = document.getElementById('toggle-dark-mode');

const floatingPlayer = document.getElementById('floating-player');
const playerTitle = document.getElementById('player-title');
const playerSynopsis = document.getElementById('player-synopsis');
const playerForm = document.getElementById('player-form');
const seasonInput = document.getElementById('season-input');
const episodeInput = document.getElementById('episode-input');
const playEpisodeButton = document.getElementById('play-episode');
const playerIframe = document.getElementById('player-iframe');
const closePlayerButton = document.getElementById('close-player');

const scrollToTopButton = document.getElementById('scroll-to-top');

let currentMode = 'movie'; // Default to movies
let currentPage = 1;
let genreMap = {};
let currentItemId = null;

async function fetchItems(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayItems(data.results, data.total_pages);
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === data.total_pages;
    } catch (error) {
        console.error('Error fetching items:', error);
        alert('Failed to fetch items. Please try again later.');
    }
}

function displayItems(items, totalPages) {
    movieList.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const title = item.title || item.name;
        const year = (item.release_date || item.first_air_date || '').split('-')[0] || 'Unknown';
        const poster = item.poster_path ? `${IMG_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
        const rating = item.vote_average || 'N/A';
        const genres = item.genre_ids || [];

        const genreLabels = genres.map(genreId => {
            return `<span class="genre-label"><i class="fas fa-tags"></i>${genreMap[genreId] || 'Unknown'}</span>`;
        }).join('');

        const card = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card position-relative h-100" data-id="${item.id}" data-title="${title}" data-synopsis="${item.overview}">
                            <div class="position-absolute year-label top-0 start-0">${year}</div>
                            <div class="position-absolute rating-label top-0 end-0">${rating}/10</div>
                            <img src="${poster}" class="card-img-top" alt="${title}">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <div class="mb-2">${genreLabels}</div>
                                <p class="card-text">${item.overview.substring(0, 100)}...</p>
                            </div>
                        </div>
                    </div>`;
        movieList.insertAdjacentHTML('beforeend', card);
    });
    updatePageInfo(totalPages);
}

function displayTrendingItems(items) {
    const carouselInner = document.getElementById('carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items
    items.forEach((item, index) => {
        const title = item.title || item.name;
        const year = (item.release_date || item.first_air_date || '').split('-')[0] || 'Unknown';
        const poster = item.poster_path ? `${IMG_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
        const rating = item.vote_average || 'N/A';
        const genres = item.genre_ids || [];

        const genreLabels = genres.map(genreId => {
            return `<span class="genre-label"><i class="fas fa-tags"></i>${genreMap[genreId] || 'Unknown'}</span>`;
        }).join('');

        const card = `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <div class="card position-relative h-100" data-id="${item.id}" data-title="${title}" data-synopsis="${item.overview}">
                            <div class="position-absolute year-label top-0 start-0">${year}</div>
                            <div class="position-absolute rating-label top-0 end-0">${rating}/10</div>
                            <img src="${poster}" class="card-img-top" alt="${title}">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <div class="mb-2">${genreLabels}</div>
                                <p class="card-text">${item.overview.substring(0, 100)}...</p>
                            </div>
                        </div>
                    </div>`;
        carouselInner.insertAdjacentHTML('beforeend', card);
    });
}

function updatePageInfo(totalPages) {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function loadPopular() {
    const url = `${BASE_URL}${currentMode}/popular?api_key=${API_KEY}&page=${currentPage}`;
    fetchItems(url);
}

async function fetchGenres() {
    const url = `${BASE_URL}genre/${currentMode}/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        genreMap = {};
        data.genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
            const option = document.createElement('option');
            option.value = genre.id;
            option.textContent = genre.name;
            genreFilter.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}

async function fetchTrending() {
    const url = `${BASE_URL}trending/${currentMode}/day?api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayTrendingItems(data.results);
    } catch (error) {
        console.error('Error fetching trending items:', error);
        alert('Failed to fetch trending items. Please try again later.');
    }
}

function toggleDarkModeFunction() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function openPlayer(title, synopsis, id) {
    playerTitle.textContent = title;
    playerSynopsis.textContent = synopsis;
    currentItemId = id;
    playerForm.style.display = currentMode === 'tv' ? 'block' : 'none';
    playerIframe.src = currentMode === 'movie' ? `https://vidsrc.cc/v2/embed/movie/${id}` : '';
    floatingPlayer.style.display = 'block';
}

function closePlayer() {
    floatingPlayer.style.display = 'none';
    playerIframe.src = '';
    seasonInput.value = '';
    episodeInput.value = '';
}

function playEpisode() {
    const season = seasonInput.value.trim();
    const episode = episodeInput.value.trim();
    if (season && episode) {
        const seasonNum = parseInt(season, 10);
        const episodeNum = parseInt(episode, 10);
        if (!isNaN(seasonNum) && !isNaN(episodeNum) && seasonNum > 0 && episodeNum > 0) {
            playerIframe.src = `https://vidsrc.cc/v2/embed/tv/${currentItemId}/${seasonNum}/${episodeNum}`;
        } else {
            alert('Please enter valid season and episode numbers.');
        }
    } else {
        alert('Please enter both season and episode numbers.');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

movieList.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        const title = card.getAttribute('data-title');
        const synopsis = card.getAttribute('data-synopsis');
        const id = card.getAttribute('data-id');
        openPlayer(title, synopsis, id);
    }
});

trendingList.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        const title = card.getAttribute('data-title');
        const synopsis = card.getAttribute('data-synopsis');
        const id = card.getAttribute('data-id');
        openPlayer(title, synopsis, id);
    }
});

toggleDarkMode.addEventListener('click', () => {
    console.log('Toggle Dark Mode clicked');
    toggleDarkModeFunction();
});

closePlayerButton.addEventListener('click', closePlayer);

playEpisodeButton.addEventListener('click', playEpisode);

loadMovies.addEventListener('click', () => {
    console.log('Load Movies clicked');
    currentMode = 'movie';
    sectionTitle.textContent = 'Popular Movies';
    trendingTitle.textContent = 'Trending Movies Today';
    genreFilter.innerHTML = '<option value="">Filter by Genre</option>';
    fetchGenres();
    loadPopular();
    fetchTrending();
});

loadTV.addEventListener('click', () => {
    console.log('Load TV clicked');
    currentMode = 'tv';
    sectionTitle.textContent = 'Popular TV Series';
    trendingTitle.textContent = 'Trending TV Series Today';
    genreFilter.innerHTML = '<option value="">Filter by Genre</option>';
    fetchGenres();
    loadPopular();
    fetchTrending();
});

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        const url = `${BASE_URL}search/${currentMode}?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${currentPage}`;
        fetchItems(url);
    }
});

genreFilter.addEventListener('change', () => {
    const genreId = genreFilter.value;
    if (genreId) {
        const url = `${BASE_URL}discover/${currentMode}?api_key=${API_KEY}&with_genres=${genreId}&page=${currentPage}`;
        fetchItems(url);
    } else {
        loadPopular();
    }
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadPopular();
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    loadPopular();
});

scrollToTopButton.addEventListener('click', scrollToTop);

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    fetchGenres();
    loadPopular();
    fetchTrending();
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazyload");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});
