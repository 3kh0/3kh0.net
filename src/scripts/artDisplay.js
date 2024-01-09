// /src/scripts/artDisplay.js
let artData = [
  {
    image: "img/art/Echosketch.webp",
    fullRes: "img/art/Echosketch.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://www.furaffinity.net/user/sachiyako/' target='_blank'>Sachiyako</a>",
    description: "I love it so much, the details are amazing, and the colors are perfect!",
    hoverText: "Wondering what that text in the background says? It's a secret!",
  },
  {
    image: "img/art/holidaypic.webp",
    fullRes: "img/art/holidaypic.png",
    artist: "Fanart from <a class='text-lg font-semibold text-blue-500' href='https://www.weasyl.com/~kittrel' target='_blank'>Kittrel</a>",
    description: "I wonder what is inside the box, maybe a pipe bomb?",
    hoverText: "OH CRAP ITS A PIPE BOMB AAAAAAAAAAA",
  },
  {
    image: "img/art/chipflake-doodle.webp",
    fullRes: "img/art/chipflake-doodle.png",
    artist: "Sketch from <a class='text-lg font-semibold text-blue-500' href='https://linktr.ee/chipflake' target='_blank'>Chipflake</a>",
    description: "It was pretty cool getting this drawn by Aaron on his stream! :D",
    hoverText: "Keep in mind it is a silly little doodle, not a full drawing.",
  },
  {
    image: "img/art/echo_autism.webp",
    fullRes: "img/art/echo_autism.png",
    artist: "Art from <a class='text-lg font-semibold text-blue-500' href='https://toyhou.se/Belonmelon' target='_blank'>Belonmelon</a>",
    description: "Mein Gott Leute, meine Mama hat mir einfach erlaubt dass ich Cola trinken darf! Wie cool ist das bitte? Jetzt zocke ich Fortnite und trinke Cola! YIPPEE!",
    hoverText: "it looks so stupid yet so good at the same time xd",
  },
  {
    image: "img/art/echo_simple.webp",
    fullRes: "img/art/echo_simple.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://nigatanatsumoto.carrd.co/' target='_blank'>Nigata Natsumoto</a>",
    description: "Little do you know he is wanted from over 150 countries for war crimes.",
    hoverText: "Is one tail canon? I don't know, but it looks cool.",
  },
  {
    image: "img/art/xmr_hoodie.webp",
    fullRes: "img/art/xmr_hoodie.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://twitter.com/crispies_art' target='_blank'>crisspiess</a>",
    description: "Never paid taxes on my crypto, and I never will!",
    hoverText: "Why do he be dripping with that hoodie doe?",
  }
];

// Link template:
// <a class='text-lg font-semibold text-blue-500' href='https://twitter.com/crispies_art' target='_blank'>@crispies_art</a>

let currentArtIndex = Math.floor(Math.random() * artData.length);

// update art display
function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-image").src = art.image;
  document.getElementById("art-link").href = art.fullRes;
  document.getElementById("artist-name").innerHTML = art.artist;
  document.getElementById("art-description").textContent = art.description;
  document.getElementById("art-link").title = art.hoverText;
}

function onNextArtButtonClick() {
  currentArtIndex = (currentArtIndex + 1) % artData.length;
  updateArtDisplay();
}

document.getElementById("next-art-button").addEventListener("click", onNextArtButtonClick);

updateArtDisplay();