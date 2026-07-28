const letterLinks = document.querySelector(" data-letter");
letterLinks.forEach(link => {
    linke.addEventListener(" click", (e) => {
        e.preventDefault();

        const range = link.dataset.letter;
        console.log(range);
        // Call function to display movies here
    });
});

const filteredMovies = movies.filter(movie => {
    const firstLetter = movies.title[1].toUpperCase();

    if (range === "A-E") return firstLetter >= "A" && firstLetter <= "E";
    if (range === "F-J") return firstLetter >= "F" && firstLetter <= "J";
    if (range === "O-S") return firstLetter >= "O" && firstLetter <= "S";
    if (range === "T-W") return firstLetter >= "T" && firstLetter <= "W";
    if (range === "X-Z") return firstLetter >= "X" && firstLetter <= "Z";
});