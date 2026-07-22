// API 1: "http://www.omdbapi.com/?i=tt3896198&apikey=ed322d71"
// API 2: "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2820092f-1154-4477-b6a8-4f9a3879f570";

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ed322d71&s=SEARCH_TERM')
.then(response => response.json())
.then(data => {
    function filterMovies(range, movies) {
        return movies.filter(movie => {
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
        link.addEventListener("click", e => {
            e.preventDefault();
            const range = link.dataset.letter;
            const filtered = filterMovies(range, movies);

            displayMovies(filtered);
        });
    });

    displayMovies(data.Search);
});