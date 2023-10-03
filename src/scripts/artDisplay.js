let artData;
let currentArtIndex = 0;

function epicFunction() {
  console.log("wow it works!")
}

// update art display
export function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-link").href = art.image;
  document.getElementById("art-image").src = art.image;
  document.getElementById("artist-name").textContent = art.artist;
  document.getElementById("art-description").textContent = art.description;
}

// get json file
export async function fetchArtData() {
  try {
    const response = await fetch("/src/data/art.json");
    if (!response.ok) {
      throw new Error("Error! Fix it pls ");
    }
    artData = await response.json();
    updateArtDisplay();
  } catch (error) {
    console.error("Error! Fix it pls ", error);
  }
}

// listen to button
document.getElementById("next-button").addEventListener("click", () => {
  //currentArtIndex = (currentArtIndex + 1) % artData.length;
  //updateArtDisplay();
  alert("This is my only piece for now, so there is no other art :(\nBut it still is pretty cool!");
});

// get art during page load
fetchArtData();