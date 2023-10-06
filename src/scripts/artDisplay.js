let artData = [
  {
    image: "img/art/Echosketch.png",
    artist: "Comission from sachiyako on discord",
    description: "I love it so much, the details are amazing, and the colors are perfect!",
  },
];

let currentArtIndex = 0;

// update art display
export function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-link").href = art.image;
  document.getElementById("art-image").src = art.image;
  document.getElementById("artist-name").textContent = art.artist;
  document.getElementById("art-description").textContent = art.description;
}

// get art data
export function fetchArtData() {
  updateArtDisplay();
}

// listen to button
document.getElementById("next-button").addEventListener("click", () => {
  //currentArtIndex = (currentArtIndex + 1) % artData.length;
  //updateArtDisplay();
  alert("This is my only piece for now, so there is no other art :(\nBut it still is pretty cool!");
});

// get art during page load
fetchArtData();