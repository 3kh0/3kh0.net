<script>
  import { nextArt, updateArtDisplay } from "/src/scripts/artDisplay.js";

  export default {
    mounted() {
      document.getElementById("next-art-button").addEventListener("click", nextArt);
      updateArtDisplay();
    },
  };
</script>
<template>
  <div id="intro">
    <div class="max-w-6xl mx-auto p-8">
      <div class="flex flex-col sm:flex-row items-center">
        <div class="py-6">
          <p class="text-3xl sm:text-base md:text-3xl lg:text-4xl text-center align-middle leading-8">
            Hi, my name is Drake! I am a 15 year old front-end developer, linux user, furry, cybersecurity enthusiast, and privacy advocate. I am a big fan of open source software and I love to make things
          </p>
        </div>
        <div class="mx-10 flex items-center justify-center">
          <div>
            <img loading="eager" src="/img/art/cutout2echo.webp" alt="fox" class="w-full h-auto rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="skills">
    <div class="max-w-6xl mx-auto p-8">
      <h2 class="text-3xl mb-4">Things I can do</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-700 rounded-lg p-4">
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-html5 mr-2"></i> HTML <span class="ml-2 text-sm text-gray-400">100%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[100%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-square-js mr-2"></i> Javascript <span class="ml-2 text-sm text-gray-400">98%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[98%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" class="h-[18px] w-[18px] mr-2">
              <g clip-path="url(#prefix__clip0)"><path fill="#ffffff" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g>
              <defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs>
            </svg>
            Tailwind CSS
            <span class="ml-2 text-sm text-gray-400">97%</span>
          </h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[97%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fas fa-hammer mr-2"></i> Bug testing <span class="ml-2 text-sm text-gray-400">95%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[95%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-git-alt mr-2"></i> Git <span class="ml-2 text-sm text-gray-400">90%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[90%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-vuejs mr-2"></i> Vue <span class="ml-2 text-sm text-gray-400">87%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[87%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center">
            <img src="/img/counterstrike.webp" class="h-[18px] w-[18px] mr-2" alt="Counter Strike 2" /> Counter Strike 2
            <span class="ml-2 text-sm text-gray-400">83%</span>
          </h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[83%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-python mr-2"></i> Python <span class="ml-2 text-sm text-gray-400">82%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[82%]"></div>
          </div>
        </div>
        <div class="skill mb-4 relative" id="css">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-css3 mr-2"></i> CSS <span class="ml-2 text-sm text-gray-400">80%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden relative">
            <div class="h-4 bg-green-500 w-[80%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fab fa-linux mr-2"></i> Linux <span class="ml-2 text-sm text-gray-400">75%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[75%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fas fa-video mr-2"></i> Video editing <span class="ml-2 text-sm text-gray-400">70%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[70%]"></div>
          </div>
        </div>
        <div class="skill mb-4">
          <h3 class="mb-2 text-lg text-white flex items-center"><i class="fa fa-server mr-2"></i> Networking <span class="ml-2 text-sm text-gray-400">65%</span></h3>
          <div class="w-full bg-gray-300 rounded-lg overflow-hidden">
            <div class="h-4 bg-green-500 w-[65%]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="projects">
    <section class="max-w-6xl mx-auto p-8">
      <h2 class="text-3xl mb-4">Cool stuff I made</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a referrerpolicy="no-referrer" href="https://codeberg.org/3kh0/website-v4/">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">3kh0 website</h3>
            <p class="text-sm">Vastly popular website with games</p>
          </div>
        </a>
        <a referrerpolicy="no-referrer" href="https://codeberg.org/3kh0/ChessSword">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Chess Sword</h3>
            <p class="text-sm">Chess bot to highlight the best moves</p>
          </div>
        </a>
        <a referrerpolicy="no-referrer" href="https://gitlab.com/3kh0/3kh0-assets">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">3kh0 Assets</h3>
            <p class="text-sm">Tons of game files for free use</p>
          </div>
        </a>
        <a referrerpolicy="no-referrer" href="https://codeberg.org/3kh0/soundboard">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Soundboard</h3>
            <p class="text-sm">Simple online soundboard app</p>
          </div>
        </a>
        <a referrerpolicy="no-referrer" href="https://github.com/3kh0/gamejamsnake">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Arcade Snake</h3>
            <p class="text-sm">Simple version of snake for the web</p>
          </div>
        </a>
        <a referrerpolicy="no-referrer" href="https://codeberg.org/3kh0/echodown">
          <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Echo Down</h3>
            <p class="text-sm">A fake DDoS/Network stresser</p>
          </div>
        </a>
      </div>
    </section>
  </div>
  <div id="art">
    <section class="max-w-6xl mx-auto p-8 text-center">
      <h2 class="text-3xl mb-4 text-left">Cool Art</h2>
      <div id="art-container" class="max-w-2xl mx-auto">
        <a id="art-link" href="#" target="_blank" title="Loading..." referrerpolicy="no-referrer">
          <img id="art-image" class="w-auto max-h-96 max-w-full mx-auto mb-4 rounded-lg shadow-lg" alt="Artwork" loading="eager" />
        </a>
        <p id="artist-name" class="text-lg font-semibold"></p>
        <p id="art-description" class="text-sm"></p>
        <div class="mt-4">
          <button id="next-art-button" class="bg-blue-500 shadow-lg text-white py-2 px-4 w-32 rounded-xl hover:bg-blue-600 transition duration-300">Next</button>
        </div>
      </div>
    </section>
  </div>
  <div id="connect">
    <section class="max-w-6xl mx-auto p-8">
      <h2 class="text-3xl mb-4">Stalk me everywhere</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center place-content-evenly">
        <div>
          <router-link to="mailto:echo-the-coder@tuta.io" target="_blank">
            <button class="bg-green-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300 w-full"><i class="fas fa-envelope fa-lg"></i> Email</button>
          </router-link>
        </div>
        <div>
          <router-link to="/signal">
            <button class="bg-blue-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 w-full"><i class="fab fa-signal-messenger fa-lg"></i> Signal</button>
          </router-link>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://t.me/echo_loaf" target="_blank">
            <button class="bg-blue-600 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300 w-full"><i class="fab fa-telegram fa-lg"></i> Telegram</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://discord.com/users/1056383394470182922" target="_blank">
            <button class="bg-blue-600 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300 w-full"><i class="fab fa-discord fa-lg"></i> Discord</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://steamcommunity.com/id/3kh0_" target="_blank">
            <button class="bg-black text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-gray-800 transition duration-300 w-full"><i class="fab fa-steam fa-lg"></i> Steam</button>
          </a>
        </div>
        <div>
          <a rel="me" href="https://defcon.social/@3kh0" target="_blank">
            <button class="bg-purple-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-purple-600 transition duration-300 w-full"><i class="fab fa-mastodon fa-lg"></i> Mastodon</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://localmonero.co/user/3kh0_" target="_blank">
            <button class="bg-blue-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 w-full"><i class="fab fa-monero fa-lg"></i> LocalMonero</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://github.com/3kh0" target="_blank">
            <button class="bg-black text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-gray-800 transition duration-300 w-full"><i class="fab fa-github fa-lg"></i> GitHub</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://cash.app/$3kh0live" target="_blank">
            <button class="bg-green-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300 w-full"><i class="fas fa-dollar-sign fa-lg"></i> Cash App</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://odysee.com/@3kh0:a" target="_blank">
            <button class="bg-red-600 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-red-700 transition duration-300 w-full"><i class="fa-brands fa-odysee fa-lg"></i> Odysee</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://last.fm/user/realecho" target="_blank">
            <button class="bg-red-600 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-red-700 transition duration-300 w-full"><i class="fab fa-lastfm fa-lg"></i> Last.fm</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://soundcloud.com/3kh0" target="_blank">
            <button class="bg-orange-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-orange-600 transition duration-300 w-full"><i class="fab fa-soundcloud fa-lg"></i> SoundCloud</button>
          </a>
        </div>
        <div>
          <router-link to="/extra/crypto" target="_blank">
            <button class="bg-yellow-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-yellow-600 transition duration-300 w-full"><i class="fa-solid fa-coins"></i> Crypto</button>
          </router-link>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://youtube.com/@3kh0" target="_blank">
            <button class="bg-red-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-red-600 transition duration-300 w-full"><i class="fab fa-youtube fa-lg"></i> YouTube</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://gitlab.com/3kh0" target="_blank">
            <button class="bg-orange-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-orange-600 transition duration-300 w-full"><i class="fab fa-gitlab fa-lg"></i> GitLab</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://bsky.app/profile/3kh0.bsky.social" target="_blank">
            <button class="bg-blue-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 w-full"><i class="fas fa-cloud fa-lg"></i> Bluesky</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://github.com/sponsors/3kh0" target="_blank">
            <button class="bg-pink-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-pink-600 transition duration-300 w-full"><i class="fas fa-heart fa-lg"></i> Sponsors</button>
          </a>
        </div>
        <div>
          <a referrerpolicy="no-referrer" href="https://ftp.3kh0.net" target="_blank">
            <button class="bg-blue-500 text-white text-lg shadow-lg py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300 w-full"><i class="fas fa-server fa-lg"></i> File server</button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>