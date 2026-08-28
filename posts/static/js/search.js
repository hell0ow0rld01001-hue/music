const searchInput =
    document.getElementById("pageSearchInput");

const searchGrid =
    document.getElementById("searchGrid");

const noResults =
    document.getElementById("noResults");


const songs = [

    {
        title: "This That",
        artist: "Stray Kids",
        album: "ATE",
        image: "./img/stray kids.jpg",
        file: "./music/This that.mp3"
    },

    {
        title: "Kiss me",
        artist: "Ariana Grande",
        album: "petal",
        image: "./img/ariana.jpg",
        file: "./music/song2.mp3"
    },


    {
        title: "BIRDS OF A FEATHER",
        artist: "billie eilish",
        album: "BIRDS OF A FEATHER",
        image: "./img/billie eilish album.jpg",
        file: "./music/song3.mp3"
    },



    {
        title: "Opalite",
        artist: "Taylor Swift",
        album: "The Life of a Showgirl",
        image: "./img/Taylor Swift Album.jpg",
        file: "./music/song4.mp3"
    },

    

];


searchInput.addEventListener("input", function () {

    const query =
        searchInput.value.trim().toLowerCase();

    searchGrid.innerHTML = "";

    if (query === "") {

        noResults.style.display = "block";

        return;
    }


    const results = songs.filter(song =>

        song.title.toLowerCase().includes(query) ||

        song.artist.toLowerCase().includes(query) ||

        song.album.toLowerCase().includes(query)

    );


    if (results.length === 0) {

        noResults.innerHTML = `
            <div>⌕</div>
            <h2>No results found</h2>
            <p>Try another song, artist or album.</p>
        `;

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    results.forEach(song => {

        const card =
            document.createElement("div");

        card.className =
            "search-result-card";


        card.innerHTML = `
            <img
                src="${song.image}"
                alt="${song.title}"
            >

            <h3>${song.title}</h3>

            <p>${song.artist}</p>
        `;


        card.addEventListener("click", function () {

            playSong(
                song.file,
                song.title,
                song.artist,
                song.image
            );

        });


        searchGrid.appendChild(card);

    });

});