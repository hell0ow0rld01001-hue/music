console.log("BlueTune loaded");






const audio = document.getElementById("audioPlayer");

const musicPlayer = document.getElementById("musicPlayer");

const playerCover = document.getElementById("playerCover");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const volumeBar = document.getElementById("volumeBar");

const closePlayer = document.getElementById("closePlayer");


let currentSong = null;


/*  PLAY SONG*/

function playSong(file, title, artist, cover) {

    currentSong = file;

    audio.src = file;

    playerTitle.textContent = title;
    playerArtist.textContent = artist;

    playerCover.src = cover;

    musicPlayer.classList.add("active");

    audio.play()
        .then(() => {
            playBtn.textContent = "❚❚";
        })
        .catch(() => {
            playBtn.textContent = "▶";
        });
}


/*  PLAY PAUSE */

playBtn.addEventListener("click", function () {

    if (!audio.src) {
        return;
    }

    if (audio.paused) {

        audio.play();

        playBtn.textContent = "❚❚";

    } else {

        audio.pause();

        playBtn.textContent = "▶";
    }

});


/* PROGRESS UPDATE*/

audio.addEventListener("loadedmetadata", function () {

    progressBar.max = audio.duration;

    duration.textContent = formatTime(audio.duration);

});


audio.addEventListener("timeupdate", function () {

    progressBar.value = audio.currentTime;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


/*  PROGRESS CLICK*/

progressBar.addEventListener("input", function () {

    audio.currentTime = progressBar.value;

});


/*  VOLUME*/

volumeBar.addEventListener("input", function () {

    audio.volume = volumeBar.value;

});


/*  CLOSE*/

closePlayer.addEventListener("click", function () {

    musicPlayer.classList.remove("active");

    audio.pause();

});


/*  FORMAT TIME */

function formatTime(time) {

    if (isNaN(time)) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
}