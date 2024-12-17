const apiKey = 'c542b4951cfcd4ca4e97f3184f866b70'; // Ganti dengan API Key Anda dari TMDb

document.getElementById('videoType').addEventListener('change', function() {
    const videoType = this.value;
    const seasonEpisodeInputs = document.getElementById('seasonEpisodeInputs');
    if (videoType === 'series') {
        seasonEpisodeInputs.style.display = 'block';
    } else {
        seasonEpisodeInputs.style.display = 'none';
    }
});

function loadVideo() {
    const movieId = document.getElementById('movieId').value;
    const videoType = document.getElementById('videoType').value;
    const season = document.getElementById('season').value;
    const episode = document.getElementById('episode').value;

    if (!movieId) {
        alert("Movie ID harus diisi!");
        return;
    }

    let videoUrl;
    if (videoType === 'movie') {
        videoUrl = `https://multiembed.mov/directstream.php?video_id=${movieId}&tmdb=1`;
    } else if (videoType === 'series') {
        if (!season || !episode) {
            alert("Season dan Episode harus diisi untuk serial!");
            return;
        }
        videoUrl = `https://multiembed.mov/directstream.php?video_id=${movieId}&tmdb=1&s=${season}&e=${episode}`;
    }

    document.getElementById('videoFrame').src = videoUrl;

    // Menampilkan detail film
    fetchMovieDetails(movieId);
}

function fetchMovieDetails(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en`)
        .then(response => response.json())
        .then(data => {
            // Menampilkan judul film
            document.getElementById('movieTitle').style.display = 'block';
            document.getElementById('titleText').innerText = data.title;

            // Menampilkan rating film
            document.getElementById('movieRating').style.display = 'block';
            document.getElementById('ratingText').innerText = `${data.vote_average} / 10`;

            // Menampilkan deskripsi film
            if (data.overview) {
                document.getElementById('movieDescription').style.display = 'block';
                document.getElementById('movieDescText').innerText = data.overview;
            } else {
                document.getElementById('movieDescription').style.display = 'block';
                document.getElementById('movieDescText').innerText = 'Deskripsi tidak tersedia.';
            }

            // Menampilkan tanggal rilis
            document.getElementById('releaseDate').style.display = 'block';
            document.getElementById('releaseText').innerText = data.release_date;

            // Menampilkan durasi
            document.getElementById('movieDuration').style.display = 'block';
            document.getElementById('durationText').innerText = `${data.runtime} menit`;

            // Menampilkan bahasa
            document.getElementById('movieLanguage').style.display = 'block';
            document.getElementById('languageText').innerText = data.original_language.toUpperCase();

            // Menampilkan status film
            document.getElementById('movieStatus').style.display = 'block';
            document.getElementById('statusText').innerText = data.status;

            // Menampilkan produser (jika ada)
            document.getElementById('movieProducer').style.display = 'block';
            document.getElementById('producerText').innerText = "N/A"; // Default jika tidak ada produser

            // Ambil data credits untuk produser dan aktor
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en`)
                .then(response => response.json())
                .then(creditsData => {
                    const producer = creditsData.crew.find(person => person.job === "Producer");
                    if (producer) {
                        document.getElementById('producerText').innerText = producer.name;
                    }

                    // Menampilkan aktor
                    document.getElementById('movieCast').style.display = 'block';
                    document.getElementById('actorList').innerHTML = creditsData.cast.map(actor => `<li>${actor.name}</li>`).join('');
                })
                .catch(error => console.error('Error fetching credits data:', error));

            // Menampilkan genre film
            document.getElementById('movieGenres').style.display = 'block';
            document.getElementById('genreList').innerText = data.genres.map(genre => genre.name).join(', ');
        })
        .catch(error => console.log(error));
}
