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
];

let currentArtIndex = 0;

// update art display
export function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-image").src = art.image;
  document.getElementById("art-link").href = art.fullRes;
  document.getElementById("artist-name").textContent = art.artist;
  document.getElementById("art-description").textContent = art.description;
  document.getElementById("art-link").title = art.hoverText;
}

// get art data
export function fetchArtData() {
  updateArtDisplay();
}

// listen to button
document.getElementById("next-button").addEventListener("click", () => {
  currentArtIndex = (currentArtIndex + 1) % artData.length;
  updateArtDisplay();
});

// get art during page load
fetchArtData();