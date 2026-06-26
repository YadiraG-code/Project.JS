const movieListEL = document.querySelector(' .movie-list');
const movie = localStorage.getItem("id")

async function onSearchChange(event) {
    const movie = event.target.value;
    renderMovies(id)
}

async function renderMovies(id) {
    const movie = await fetch(`http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570=${movie}`)
    const movieData = await movie.omd();
    movieListEL.innerHTML = movieData.map(movie => moviesHTML(movie)).join('');
}

function moviesHTML(movie) {
   return `
    `
}

renderMovies(movie);