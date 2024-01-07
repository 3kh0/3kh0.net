// /src/scripts/artDisplay.js
let artData = [
  {
    image: "img/art/Echosketch-preview.webp",
    fullRes: "img/art/Echosketch.png",
    artist: "Comission from sachiyako on discord",
    description: "I love it so much, the details are amazing, and the colors are perfect!",
    hoverText: "Wondering what that text in the background says? It's a secret!",
  },
  {
    image: "img/art/holidaypic-preview.webp",
    fullRes: "img/art/holidaypic.png",
    artist: "Fanart from Kittrel",
    description: "I wonder what is inside the box, maybe a pipe bomb?",
    hoverText: "OH CRAP ITS A PIPE BOMB AAAAAAAAAAA",
  },
  {
    image: "img/art/chipflake-doodle.webp",
    fullRes: "img/art/chipflake-doodle.png",
    artist: "Sketch from Aaron (Chipflake)",
    description: "It was pretty cool getting this drawn by Aaron on his stream! :D",
    hoverText: "Keep in mind it is a silly little doodle, not a full drawing.",
  },
  {
    image: "img/art/echo_autism.webp",
    fullRes: "img/art/echo_autism.png",
    artist: "Art from Belonmelon on discord",
    description: "Mein Gott Leute, meine Mama hat mir einfach erlaubt dass ich Cola trinken darf! Wie cool ist das bitte? Jetzt zocke ich Fortnite und trinke Cola! YIPPEE!",
    hoverText: "it looks so stupid yet so good at the same time xd",
  },
];

let currentArtIndex = Math.floor(Math.random() * artData.length);

// update art display
function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-image").src = art.image;
  document.getElementById("art-link").href = art.fullRes;
  document.getElementById("artist-name").textContent = art.artist;
  document.getElementById("art-description").textContent = art.description;
  document.getElementById("art-link").title = art.hoverText;
}

function onNextArtButtonClick() {
  currentArtIndex = (currentArtIndex + 1) % artData.length;
  updateArtDisplay();
}

document.getElementById("next-art-button").addEventListener("click", onNextArtButtonClick);

updateArtDisplay();