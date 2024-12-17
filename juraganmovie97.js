const apiKey = 'c542b4951cfcd4ca4e97f3184f866b70'; // Ganti dengan API key Anda
const baseUrl = 'https://api.themoviedb.org/3';

let genres = [];
let allMovies = [];
let allTvShows = [];
let currentPage = 1;
let totalPages = 1;
let searchQuery = '';

// Mengambil daftar genre dari API
async function fetchGenres() {
    try {
        const movieGenresResponse = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const movieGenresData = await movieGenresResponse.json();
        genres = movieGenresData.genres;

        const tvGenresResponse = await fetch(`${baseUrl}/genre/tv/list?api_key=${apiKey}&language=en-US`);
        const tvGenresData = await tvGenresResponse.json();
        genres = [...genres, ...tvGenresData.genres];

        const genreSelect = document.getElementById('genre-filter');
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.id;
            option.textContent = genre.name;
            genreSelect.appendChild(option);
        });
    } catch (error) {
        alert("There was an error fetching the genres.");
    }
}

// Memanggil API untuk mendapatkan daftar film atau acara TV
async function fetchContent(type, genreId = null, query = '') {
    try {
        let url = `${baseUrl}/discover/${type}?api_key=${apiKey}&language=en-US&page=${currentPage}`;

        // Menambahkan genre jika ada
        if (genreId) url += `&with_genres=${genreId}`;

        // Menambahkan query pencarian jika ada
        if (query) {
            url = `${baseUrl}/search/${type}?api_key=${apiKey}&language=en-US&page=${currentPage}&query=${query}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (type === 'movie') {
            allMovies = data.results;
            totalPages = data.total_pages;
            displayMovies(allMovies);
        } else if (type === 'tv') {
            allTvShows = data.results;
            totalPages = data.total_pages;
            displayTvShows(allTvShows);
        }
        displayPagination();
    } catch (error) {
        alert("There was an error fetching the content.");
    }
}

// Fungsi baru untuk mendapatkan trending movies
async function fetchTrendingMovies() {
    try {
        const response = await fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`);
        const data = await response.json();
        allMovies = data.results;
        displayMovies(allMovies);
    } catch (error) {
        alert("There was an error fetching trending movies.");
    }
}

// Fungsi baru untuk mendapatkan trending TV shows
async function fetchTrendingTvShows() {
    try {
        const response = await fetch(`${baseUrl}/trending/tv/day?api_key=${apiKey}`);
        const data = await response.json();
        allTvShows = data.results;
        displayTvShows(allTvShows);
    } catch (error) {
        alert("There was an error fetching trending TV shows.");
    }
}

// Menampilkan daftar film pada halaman
function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;
        movieCard.appendChild(movieImage);

        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');
        movieInfo.innerHTML = `<h3>${movie.title}</h3><p>Rating: ${movie.vote_average}</p>`;
        const watchButton = document.createElement('button');
        watchButton.classList.add('btn');
        watchButton.textContent = 'Watch Now';
        watchButton.onclick = () => window.location.href = `https://multiembed.mov/directstream.php?video_id=${movie.id}&tmdb=1`;
        movieInfo.appendChild(watchButton);

        const movieLabel = document.createElement('div');
        movieLabel.classList.add('label');
        movieLabel.innerHTML = '<i class="fas fa-film"></i> Movie';
        movieCard.appendChild(movieLabel);

        movieCard.appendChild(movieInfo);
        moviesContainer.appendChild(movieCard);
    });
}

// Menampilkan daftar acara TV pada halaman
function displayTvShows(tvShows) {
    const tvShowsContainer = document.getElementById('tv-shows-container');
    tvShowsContainer.innerHTML = '';
    tvShows.forEach(tvShow => {
        const tvShowCard = document.createElement('div');
        tvShowCard.classList.add('tv-show-card');

        const tvShowImage = document.createElement('img');
        tvShowImage.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
        tvShowImage.alt = tvShow.name;
        tvShowCard.appendChild(tvShowImage);

        const tvShowInfo = document.createElement('div');
        tvShowInfo.classList.add('tv-info');
        tvShowInfo.innerHTML = `<h3>${tvShow.name}</h3><p>Rating: ${tvShow.vote_average}</p>`;
        const watchButton = document.createElement('button');
        watchButton.classList.add('btn');
        watchButton.textContent = 'Watch Now';
        watchButton.onclick = () => window.location.href = `https://multiembed.mov/directstream.php?video_id=${tvShow.id}&tmdb=1&s=1&e=1`;
        tvShowInfo.appendChild(watchButton);

        const tvLabel = document.createElement('div');
        tvLabel.classList.add('label');
        tvLabel.innerHTML = '<i class="fas fa-tv"></i> TV Series';
        tvShowCard.appendChild(tvLabel);

        tvShowCard.appendChild(tvShowInfo);
        tvShowsContainer.appendChild(tvShowCard);
    });
}

// Menampilkan tombol navigasi halaman
function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        currentPage--;
        fetchContent('movie', null, searchQuery);
        fetchContent('tv', null, searchQuery);
    };
    pagination.appendChild(prevButton);

    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    pagination.appendChild(pageInfo);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        currentPage++;
        fetchContent('movie', null, searchQuery);
        fetchContent('tv', null, searchQuery);
    };
    pagination.appendChild(nextButton);
}

// Fungsi untuk filter berdasarkan genre
function filterContent() {
    const genreId = document.getElementById('genre-filter').value;
    fetchContent('movie', genreId, searchQuery);
    fetchContent('tv', genreId, searchQuery);
}

// Fungsi untuk mencari berdasarkan input
function searchContent() {
    searchQuery = document.getElementById('search-input').value;
    fetchContent('movie', null, searchQuery);
    fetchContent('tv', null, searchQuery);
}

// Fungsi untuk inisialisasi halaman
async function init() {
    await fetchGenres();
    fetchTrendingMovies(); // Fetch trending movies saat pertama kali
    fetchTrendingTvShows(); // Fetch trending TV shows saat pertama kali
}

init();
