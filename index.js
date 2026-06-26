// API 1: "http://www.omdbapi.com/?i=tt3896198&apikey=ed322d71"
// API 2: "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570"
const movieListEL = document.querySelector(".movie-list");

async function main() {
    const movie = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ed322d71");
    const movieData = await movie.json();
    movieListEL.innerHTML + movieData.map((movie) => moviesHTML(movie)).join("");
}

main();

function showMovieTitle(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/movie.html`
}

function movieHTML(movie) {
   return ` <div class="movie">
    <figure class="movie__img--wrapper">
      <img class="movie__img" src="https://${movie.img}" alt="">
      </figure>
      <div>${movie.title}<b>
        Guardians of the Galaxy: Vol.2</b>
      </div>
      <div>${movie.ratings}
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          </div>`;
}