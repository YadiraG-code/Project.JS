// API 1: "https://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570"
// API 2: "https://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570";

const apikey = 'https://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570';
let movie = [];

// Search OMDb
function searchMovie(term) {
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(term)}`)
.then(response => response.json())
.then(data => {
    movies = data.Search || [];
    displayMovies(movies);
})
.catch(error => {
    console.error("Error:", error);
});
}

// A-Z filtering
function filterMovies(range, movies) {
        return movie.filter(movie => {
            const letter = movie.Title[0].toUpperCase();

            switch (range) {
                case "A-E":
                    return letter >= "A" && letter <= "E";
                case "F-J":
                    return letter >= "F" && letter <= "J";
                case "O-S":
                    return letter >= "O" && letter <= "S";
                case "T-W":
                    return letter >= "T" && letter <= "W";
                case "X-Z":
                    return letter >= "X" && letter <= "Z";
                default:
                    return true;
            }
        });
    }

    document.querySelectorAll("[data-letter]").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const range = link.dataset.letter;
            const filtered = filterMovies(range, movies);

            displayMovies(filtered);
        });
    });