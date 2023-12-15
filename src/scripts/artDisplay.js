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
];

let currentArtIndex = Math.floor(Math.random() * artData.length); // Pick a random index on page load

// update art display
function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-image").src = art.image;
  document.getElementById("art-link").href = art.fullRes;
  document.getElementById("artist-name").textContent = art.artist;
  document.getElementById("art-description").textContent = art.description;
  document.getElementById("art-link").title = art.hoverText;
}

// Next art button click handler
function onNextArtButtonClick() {
  currentArtIndex = (currentArtIndex + 1) % artData.length; // Increment the index and loop back if necessary
  updateArtDisplay(); // Update the display with the new art
}

// Attach the click handler to the Next Art button
document.getElementById("next-art-button").addEventListener("click", onNextArtButtonClick);

// Call updateArtDisplay on page load to display the initial random art
updateArtDisplay();