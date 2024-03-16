/**
 * Array of art with their related data.
 * @type {Array<Object>}
 */
let artData = [
  {
    image: "/img/art/Echosketch.webp",
    fullRes: "/img/art/Echosketch.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://www.furaffinity.net/user/sachiyako/' target='_blank'>Sachiyako</a>",
    description: "I love it so much, the details are amazing, and the colors are perfect!",
    hoverText: "Wondering what that text in the background says? It's a secret!",
  },
  {
    image: "/img/art/holidaypic.webp",
    fullRes: "/img/art/holidaypic.png",
    artist: "Fanart from <a class='text-lg font-semibold text-blue-500' href='https://www.weasyl.com/~kittrel' target='_blank'>Kittrel</a>",
    description: "I wonder what is inside the box, maybe a pipe bomb?",
    hoverText: "OH CRAP ITS A PIPE BOMB AAAAAAAAAAA",
  },
  {
    image: "/img/art/chipflake-doodle.webp",
    fullRes: "/img/art/chipflake-doodle.png",
    artist: "Sketch from <a class='text-lg font-semibold text-blue-500' href='https://linktr.ee/chipflake' target='_blank'>Chipflake</a>",
    description: "It was pretty cool getting this drawn by Aaron on his stream! :D",
    hoverText: "Keep in mind it is a silly little doodle, not a full drawing.",
  },
  {
    image: "/img/art/echo_autism.webp",
    fullRes: "/img/art/echo_autism.png",
    artist: "Art from <a class='text-lg font-semibold text-blue-500' href='https://toyhou.se/Belonmelon' target='_blank'>Belonmelon</a>",
    description: "Wie cool ist das bitte? Jetzt zocke ich Fortnite und trinke Cola! YIPPEE!",
    hoverText: "it looks so stupid yet so good at the same time xd",
  },
  {
    image: "/img/art/echo_simple.webp",
    fullRes: "/img/art/echo_simple.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://nigatanatsumoto.carrd.co/' target='_blank'>Nigata Natsumoto</a>",
    description: "Little do you know he is wanted from over 150 countries for war crimes.",
    hoverText: "Is one tail canon? I don't know, but it looks cool.",
  },
  {
    image: "/img/art/xmr_hoodie.webp",
    fullRes: "/img/art/xmr_hoodie.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://twitter.com/crispies_art' target='_blank'>crisspiess</a>",
    description: "Taxes on crypto? Never head of it!",
    hoverText: "Why do he be dripping with that hoodie doe?",
  },
  {
    image: "/img/art/rainbow_art.webp",
    fullRes: "/img/art/rainbow_art.png",
    artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://toyhou.se/TheDoubleTailedrainB' target='_blank'>Thedoubletailedrainbow</a>",
    description: "That's one silly fox boy",
    hoverText: "Def not a mugshot, I swear.",
  },
  {
    image: "/img/art/Palestine_support.webp",
    fullRes: "/img/art/Palestine_support.png",
    artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://linktr.ee/pup.dagger' target='_blank'>@pup.dagger</a> with lines by Pulex",
    description: "I support human rights for Palestine. Donate US Campaign for Palestinian Rights at <a class='text-blue-500' href='https://uscpr.org/' target='_blank'>uscpr.org</a>",
    hoverText: "",
  },
  {
    image: "/img/art/borbdraws.webp",
    fullRes: "/img/art/borbdraws.png",
    artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://www.instagram.com/bogusborb' target='_blank'>bogusborb</a>",
    description: "Very epic drawing from a very epic artist!",
    hoverText: "Hello chat :3",
  },
  {
    image: "/img/art/olives_laptop.webp",
    fullRes: "/img/art/olives_laptop.png",
    artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://www.instagram.com/olives_garden13' target='_blank'>olives_garden13</a>",
    description: "I swear I am working, nothing to see here",
    hoverText: "Downloading 40TB of furry p- I mean, working on my schoolwork!",
  }
];

let currentArtIndex = Math.floor(Math.random() * artData.length);

/**
 * Updates the art display with the information from the current art object.
 */
export function updateArtDisplay() {
  const art = artData[currentArtIndex];
  document.getElementById("art-image").src = art.image;
  document.getElementById("art-link").href = art.fullRes;
  document.getElementById("artist-name").innerHTML = art.artist;
  document.getElementById("art-description").innerHTML = art.description;
  document.getElementById("art-link").title = art.hoverText;
}

export function nextArt() {
  currentArtIndex = (currentArtIndex + 1) % artData.length;
  updateArtDisplay();
}