const movieListEL = document.querySelector(' .movie-list');
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(id)
}

async function renderMovies(id) {
    const movie = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ed322d71&s=${id}`)
    const movieData = await movie.omd();
    movieListEL.innerHTML = movieData.map(movie => moviesHTML(movie)).join('');
}

function moviesHTML(movie) {
   return `
    <div class="movie">
    <div class="movie__title">
    ${movie.title} 
    </div>
    <p Class="movie__body">
    ${movie.body}
    </p>
    </div>
    `
}

renderMovies(id);