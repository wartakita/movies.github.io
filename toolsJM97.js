const API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

function addCopyButton(detailsContainer, data) {
    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copy Data';
    copyButton.classList.add('copy-button');
    copyButton.onclick = () => {
        navigator.clipboard.writeText(data).then(() => {
            alert('Data copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    detailsContainer.appendChild(copyButton);
}

async function fetchMovieInfoByTitle() {
    const movieTitle = document.getElementById('movie-title').value;
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = '';

    if (!movieTitle) {
        detailsContainer.innerHTML = '<p class="error">Please enter a movie title.</p>';
        return;
    }

    try {
        const searchResponse = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`);
        const searchData = await searchResponse.json();

        if (searchData.results.length === 0) {
            detailsContainer.innerHTML = '<p class="error">Movie not found. Try a different title.</p>';
            return;
        }

        const movieId = searchData.results[0].id;
        fetchMovieDetails(movieId);
    } catch (error) {
        console.error(error);
        detailsContainer.innerHTML = '<p class="error">Failed to fetch movie details. Please try again later.</p>';
    }
}

async function fetchTVSeriesInfoByTitle() {
    const tvTitle = document.getElementById('movie-title').value;
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = '';

    if (!tvTitle) {
        detailsContainer.innerHTML = '<p class="error">Please enter a TV series title.</p>';
        return;
    }

    try {
        const searchResponse = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(tvTitle)}`);
        const searchData = await searchResponse.json();

        if (searchData.results.length === 0) {
            detailsContainer.innerHTML = '<p class="error">TV series not found. Try a different title.</p>';
            return;
        }

        const tvId = searchData.results[0].id;
        fetchTVSeriesDetails(tvId);
    } catch (error) {
        console.error(error);
        detailsContainer.innerHTML = '<p class="error">Failed to fetch TV series details. Please try again later.</p>';
    }
}

async function fetchMovieInfoById() {
    const movieId = document.getElementById('movie-id').value;
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = '';

    if (!movieId) {
        detailsContainer.innerHTML = '<p class="error">Please enter a movie ID.</p>';
        return;
    }

    fetchMovieDetails(movieId);
}

async function fetchTVSeriesInfoById() {
    const tvId = document.getElementById('movie-id').value;
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = '';

    if (!tvId) {
        detailsContainer.innerHTML = '<p class="error">Please enter a TV series ID.</p>';
        return;
    }

    fetchTVSeriesDetails(tvId);
}

async function fetchMovieDetails(movieId) {
    const detailsContainer = document.getElementById('movie-details');

    try {
        const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const movieData = await movieResponse.json();

        const posterPath = movieData.poster_path ? `${IMAGE_BASE_URL}${movieData.poster_path}` : '';

        const videosResponse = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        const trailerLink = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : 'Trailer not available';
        const watchLink = 'https://juraganmovie97.blogspot.com/';

        const movieDetails = `**Title**: ${movieData.title}
` +
            `**Synopsis**: ${movieData.overview || 'N/A'}
` +
            `**Released**: ${movieData.release_date || 'N/A'}
` +
            `**Genre**: ${movieData.genres.map(genre => genre.name).join(', ') || 'N/A'}
` +
            `**Country**: ${movieData.production_countries.map(country => country.name).join(', ') || 'N/A'}
` +
            `**Original Language**: ${movieData.original_language || 'N/A'}
` +
            `**Duration**: ${movieData.runtime || 'N/A'} minutes
` +
            `**Rating**: ${movieData.vote_average || 'N/A'}
` +
            `**Poster**: ${posterPath || 'N/A'}
` +
            `**Trailer**: ${trailerLink}
` +
            `**Watch**: ${watchLink}`;

        detailsContainer.innerHTML = `
                    <h2>${movieData.title}</h2>
                    ${posterPath ? `<img src="${posterPath}" alt="${movieData.title} Poster" class="movie-poster">` : ''}
                    <p><strong>Synopsis:</strong> ${movieData.overview || 'N/A'}</p>
                    <p><strong>Released:</strong> ${movieData.release_date || 'N/A'}</p>
                    <p><strong>Genre:</strong> ${movieData.genres.map(genre => genre.name).join(', ') || 'N/A'}</p>
                    <p><strong>Country:</strong> ${movieData.production_countries.map(country => country.name).join(', ') || 'N/A'}</p>
                    <p><strong>Original Language:</strong> ${movieData.original_language || 'N/A'}</p>
                    <p><strong>Duration:</strong> ${movieData.runtime || 'N/A'} minutes</p>
                    <p><strong>Rating:</strong> ${movieData.vote_average || 'N/A'}</p>
                    ${posterPath ? `<p><strong>Poster:</strong> <a href="${posterPath}" target="_blank">View Poster</a></p>` : ''}
                    <p><strong>Trailer:</strong> <a href="${trailerLink}" target="_blank">Watch Trailer</a></p>
                    <p><strong>Watch:</strong> <a href="${watchLink}" target="_blank">Tonton</a></p>
                `;

        addCopyButton(detailsContainer, movieDetails);
    } catch (error) {
        console.error(error);
        detailsContainer.innerHTML = '<p class="error">Failed to fetch movie details. Please try again later.</p>';
    }
}

async function fetchTVSeriesDetails(tvId) {
    const detailsContainer = document.getElementById('movie-details');

    try {
        const tvResponse = await fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`);
        const tvData = await tvResponse.json();

        const posterPath = tvData.poster_path ? `${IMAGE_BASE_URL}${tvData.poster_path}` : '';

        const videosResponse = await fetch(`${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`);
        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        const trailerLink = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : 'Trailer not available';
        const watchLink = 'https://juraganmovie97.blogspot.com/';

        const tvDetails = `**Title**: ${tvData.name}
` +
            `**Synopsis**: ${tvData.overview || 'N/A'}
` +
            `**First Air Date**: ${tvData.first_air_date || 'N/A'}
` +
            `**Genre**: ${tvData.genres.map(genre => genre.name).join(', ') || 'N/A'}
` +
            `**Country**: ${tvData.production_countries.map(country => country.name).join(', ') || 'N/A'}
` +
            `**Original Language**: ${tvData.original_language || 'N/A'}
` +
            `**Number of Seasons**: ${tvData.number_of_seasons || 'N/A'}
` +
            `**Rating**: ${tvData.vote_average || 'N/A'}
` +
            `**Poster**: ${posterPath || 'N/A'}
` +
            `**Trailer**: ${trailerLink}
` +
            `**Watch**: ${watchLink}`;

        detailsContainer.innerHTML = `
                    <h2>${tvData.name}</h2>
                    ${posterPath ? `<img src="${posterPath}" alt="${tvData.name} Poster" class="movie-poster">` : ''}
                    <p><strong>Synopsis:</strong> ${tvData.overview || 'N/A'}</p>
                    <p><strong>First Air Date:</strong> ${tvData.first_air_date || 'N/A'}</p>
                    <p><strong>Genre:</strong> ${tvData.genres.map(genre => genre.name).join(', ') || 'N/A'}</p>
                    <p><strong>Country:</strong> ${tvData.production_countries.map(country => country.name).join(', ') || 'N/A'}</p>
                    <p><strong>Original Language:</strong> ${tvData.original_language || 'N/A'}</p>
                    <p><strong>Number of Seasons:</strong> ${tvData.number_of_seasons || 'N/A'}</p>
                    <p><strong>Rating:</strong> ${tvData.vote_average || 'N/A'}</p>
                    ${posterPath ? `<p><strong>Poster:</strong> <a href="${posterPath}" target="_blank">View Poster</a></p>` : ''}
                    <p><strong>Trailer:</strong> <a href="${trailerLink}" target="_blank">Watch Trailer</a></p>
                    <p><strong>Watch:</strong> <a href="${watchLink}" target="_blank">Tonton</a></p>
                `;

        addCopyButton(detailsContainer, tvDetails);
    } catch (error) {
        console.error(error);
        detailsContainer.innerHTML = '<p class="error">Failed to fetch TV series details. Please try again later.</p>';
    }
}
