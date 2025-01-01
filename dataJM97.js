const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';
const moviesContainer = document.getElementById('movies-container');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const iframeContainer = document.getElementById('iframe-container');
const iframePlayer = document.getElementById('iframe-player');
const loadingElement = document.getElementById('loading');
const iframeSynopsis = document.getElementById('iframe-synopsis');
const iframeTitle = document.getElementById('iframe-title');
const seasonInput = document.getElementById('season-input');
const episodeInput = document.getElementById('episode-input');

let currentPage = 1;
let currentCategory = 'all';
let currentMovie = null;

// Fungsi loading
function setLoading(isLoading) {
    loadingElement.style.display = isLoading ? 'block' : 'none';
}

// Fetch Movies
async function fetchMovies(url) {
    setLoading(true);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error(error);
        moviesContainer.innerHTML = `<p>${error.message}. Please try again later.</p>`;
    } finally {
        setLoading(false);
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        const mediaType = movie.media_type === 'movie' ? 'Movie' : 'TV Series';
        const iconClass = movie.media_type === 'movie' ? 'fas fa-film' : 'fas fa-tv';

        const movieImage = movie.poster_path ?
            `${IMAGE_URL}${movie.poster_path}` :
            placeholderImage;

        movieCard.innerHTML = `
                    <span class="label"><i class="${iconClass}"></i> ${mediaType}</span>
                    <img src="${movieImage}" alt="${movie.title || movie.name || 'Movie Poster'}">
                    <h3>${movie.title || movie.name}</h3>
                    <div class="rating">${movie.vote_average ? (movie.vote_average.toFixed(1) + '/10 ⭐') : 'No Rating'}</div>
                `;

        movieCard.addEventListener('click', () => openIframe(movie));
        moviesContainer.appendChild(movieCard);
    });
}

function openIframe(movie) {
    currentMovie = movie;
    const mediaType = movie.media_type === 'movie' ? 'movie' : 'tv';
    const tmdbId = movie.id;
    let iframeSrc;

    if (mediaType === 'movie') {
        iframeSrc = `https://player.autoembed.cc/embed/movie/${tmdbId}`;
        seasonInput.style.display = 'none';
        episodeInput.style.display = 'none';
    } else if (mediaType === 'tv') {
        // Default to Season 1, Episode 1
        const seasonNumber = movie.seasons && movie.seasons.length > 0 ? movie.seasons[0].season_number : 1;
        const episodeNumber = 1; // Default to Episode 1
        iframeSrc = `https://player.autoembed.cc/embed/tv/${tmdbId}/${seasonNumber}/${episodeNumber}`;
        seasonInput.value = seasonNumber;
        episodeInput.value = episodeNumber;
        seasonInput.style.display = 'block';
        episodeInput.style.display = 'block';
    }

    iframePlayer.src = iframeSrc;
    iframeTitle.textContent = movie.title || movie.name || 'No title available';
    iframeSynopsis.textContent = movie.overview || 'No synopsis available.';
    iframeContainer.style.display = 'block';
}

function closeIframe() {
    iframeContainer.style.display = 'none';
    iframePlayer.src = '';
}

function updateIframe() {
    if (!currentMovie || currentMovie.media_type !== 'tv') return;

    const seasonNumber = parseInt(seasonInput.value, 10);
    const episodeNumber = parseInt(episodeInput.value, 10);

    if (isNaN(seasonNumber) || seasonNumber < 1 || isNaN(episodeNumber) || episodeNumber < 1) {
        alert('Season and episode must be positive numbers.');
        return;
    }

    const tmdbId = currentMovie.id;
    const iframeSrc = `https://player.autoembed.cc/embed/tv/${tmdbId}/${seasonNumber}/${episodeNumber}`;
    iframePlayer.src = iframeSrc;
}

searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value;
    if (searchQuery) {
        fetchMovies(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${searchQuery}`);
    } else {
        loadMovies();
    }
});

categorySelect.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentPage = 1;
    loadMovies();
});

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadMovies();
    }
});

nextButton.addEventListener('click', () => {
    currentPage++;
    loadMovies();
});

function loadMovies() {
    let endpoint = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&page=${currentPage}`;
    if (currentCategory === 'movie') {
        endpoint = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${currentPage}`;
    } else if (currentCategory === 'tv') {
        endpoint = `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&page=${currentPage}`;
    }
    fetchMovies(endpoint);
}

loadMovies();

// Tombol Scroll ke Atas
const scrollToTopButton = document.getElementById('scrollToTop');

// Tampilkan tombol saat pengguna scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Fungsi untuk scroll ke atas
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
