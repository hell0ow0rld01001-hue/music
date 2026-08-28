const albums = {

    "ate": {
        title: "ATE",
        artist: "Stray Kids",
        year: "2024",
        cover: "./img/album1.jpg",

        songs: [
            {
                title: "This That",
                artist: "Stray Kids",
                cover: "./img/stray kids.jpg",
                file: "./music/This that.mp3",
                duration: "3:42"
            },
            {
                title: "Dreams",
                artist: "Stray Kids",
                cover: "./img/cover2.jpg",
                file: "./music/song2.mp3",
                duration: "3:28"
            },
            {
                title: "Midnight",
                artist: "Stray Kids",
                cover: "./img/cover3.jpg",
                file: "./music/song3.mp3",
                duration: "3:55"
            },
            {
                title: "Lost Again",
                artist: "Stray Kids",
                cover: "./img/cover4.jpg",
                file: "./music/song4.mp3",
                duration: "4:01"
            }
        ]
    },


    "eternal-sunshine": {
        title: "eternal sunshine",
        artist: "Ariana Grande",
        year: "2024",
        cover: "./img/eternal-sunshine.jpg",

        songs: [
            {
                title: "intro",
                artist: "Ariana Grande",
                cover: "./img/eternal-sunshine.jpg",
                file: "./music/ariana-1.mp3",
                duration: "1:32"
            },
            {
                title: "bye",
                artist: "Ariana Grande",
                cover: "./img/eternal-sunshine.jpg",
                file: "./music/ariana-2.mp3",
                duration: "2:44"
            },
            {
                title: "eternal sunshine",
                artist: "Ariana Grande",
                cover: "./img/eternal-sunshine.jpg",
                file: "./music/ariana-3.mp3",
                duration: "3:30"
            },
            {
                title: "supernatural",
                artist: "Ariana Grande",
                cover: "./img/eternal-sunshine.jpg",
                file: "./music/ariana-4.mp3",
                duration: "2:43"
            }
        ]
    }

};

const params = new URLSearchParams(window.location.search);

const albumId = params.get("id");

const album = albums[albumId];

if (!album) {

    document.getElementById("albumTitle").textContent =
        "Album not found";

} else {

    document.title =
        `${album.title} - Blue Music`;


    document.getElementById("albumCover").src =
        album.cover;

    document.getElementById("albumCover").alt =
        album.title;


    document.getElementById("albumTitle").textContent =
        album.title;

    document.getElementById("albumArtist").textContent =
        album.artist;

    document.getElementById("albumYear").textContent =
        album.year;

    document.getElementById("albumCount").textContent =
        `${album.songs.length} Songs`;


    const trackList =
        document.getElementById("trackList");


    album.songs.forEach((song, index) => {

        const row =
            document.createElement("div");

        row.className = "track-row";


        row.innerHTML = `

            <span class="track-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="track-content">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                >

                <div class="track-text">

                    <h3>
                        ${song.title}
                    </h3>

                    <p>
                        ${song.artist}
                    </p>

                </div>

            </div>

            <span class="track-time">
                ${song.duration}
            </span>

        `;


        row.addEventListener("click", () => {

            playSong(
                song.file,
                song.title,
                song.artist,
                song.cover
            );

        });


        trackList.appendChild(row);

    });


    document.getElementById("albumPlay")
        .addEventListener("click", () => {

            const firstSong = album.songs[0];

            playSong(
                firstSong.file,
                firstSong.title,
                firstSong.artist,
                firstSong.cover
            );

        });

}