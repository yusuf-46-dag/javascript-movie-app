const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const movieGrid = document.getElementById("movieGrid")
const API_KEY = SECRET_API_KEY


searchBtn.addEventListener("click", () => {
    const userSearch = searchInput.value; 

    if (userSearch !== "") {
        filmIstek(userSearch);
    } else {
        movieGrid.innerHTML = `<h3>Lütfen bir film ismi giriniz...</h3>`;
    }
})

async function filmIstek(movie) {
    try {
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            filmGoster(data.Search); 
        } else {
            movieGrid.innerHTML = `<h3>Film bulunamadı: ${data.Error}</h3>`;
        }

    } catch (error) {
        console.error(error);
        movieGrid.innerHTML = `<h3>Bir bağlantı hatası oluştu.</h3>`;
    }
}

function filmGoster(movies) { 
    movieGrid.innerHTML = ""; // Önceki sonuçları temizle

    movies.forEach(film => {
        const poster = film.Poster !== "N/A" ? film.Poster : "https://via.placeholder.com/300x450?text=No+Poster";
        const movieCard = `
            <div class="movie-card">
                <img src="${poster}" alt="${film.Title}">
                <h3>${film.Title}</h3>
                <p>${film.Year}</p>
            </div>
        `;
        movieGrid.innerHTML += movieCard;
    })
}