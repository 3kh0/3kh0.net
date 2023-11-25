// src/scripts/loader.js
// This loads stuff into the main page, it makes it do the thing

document.querySelector('#header').innerHTML = `
<header class="py-4 px-8 flex justify-between items-center max-w-6xl mx-auto">
  <div>
    <h1 class="text-7xl font-bold text-green-500 text-center py-1">3kh0</h1>
    <p class="text-sm">Programmer, Hacker, Kitsune</p>
  </div>
</header>`;

document.querySelector('#intro').innerHTML = `
<div class="max-w-6xl mx-auto py-8 px-8">
  <div class="flex sm:flex-col md:flex-row items-center">
    <div class="w-1/2 py-6">
      <p class="text-3xl sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-center align-middle leading-8">
        Hi, my name is Drake! I coded a few minor things. I play video games and hack in my free time.
      </p>
    </div>
    <div class="w-1/3 mx-10 flex items-center justify-center">
      <div>
        <img loading="eager" src="/img/art/cutout2echo.webp" alt="fox" class="w-full h-auto rounded-3xl" />
      </div>
    </div>
  </div>
</div>`;

document.querySelector('#projects').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <h2 class="text-3xl mb-4">Cool stuff I made</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/website-v4/">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">3kh0 website</h3>
        <p class="text-sm">Vastly popular website with games</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/ChessSword">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Chess Sword</h3>
        <p class="text-sm">Chess bot to highlight the best moves</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/3kh0-Assets">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">3kh0 Assets</h3>
        <p class="text-sm">Tons of game files for free use</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/soundboard">
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
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/echodown">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Echo Down</h3>
        <p class="text-sm">A fake DDoS/Network stresser</p>
      </div>
    </a>
  </div>
</section>`;

document.querySelector('#art').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8 text-center">
  <h2 class="text-3xl mb-4 text-left">Cool Art</h2>
  <div id="art-container" class="max-w-2xl mx-auto">
    <a id="art-link" href="#" target="_blank" referrerpolicy="no-referrer">
      <img id="art-image" class="max-w-md mx-auto mb-4 rounded-lg shadow-lg" alt="Artwork" loading="eager" />
    </a>
    <p id="artist-name" class="text-lg font-semibold"></p>
    <p id="art-description" class="text-sm"></p>
    <div class="mt-4">
      <button id="next-button" class="bg-blue-500 shadow-lg text-white py-2 px-4 w-32 rounded-xl hover:bg-blue-600 transition duration-300">Next</button>
    </div>
  </div>
</section>`;

document.querySelector('#contact').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <h2 class="text-3xl mb-4">Connect with me</h2>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <a href="mailto:echo-the-coder@tuta.io">
        <button class="bg-green-500 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300 w-full">Email</button>
      </a>
    </div>
    <div>
      <a referrerpolicy="no-referrer" href="https://discord.com/users/1056383394470182922">
        <button class="bg-blue-600 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300 w-full">Discord</button>
      </a>
    </div>
    <div>
      <a rel="me" href="https://defcon.social/@3kh0">
        <button class="bg-purple-500 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-purple-600 transition duration-300 w-full">Mastodon</button>
      </a>
    </div>
  </div>
</section>`;

document.querySelector('#footer').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <p class="text-center text-m">Made by 3kh0, built using Vite and Tailwind</p>
</section>`;

document.querySelector('#adblockNotice').innerHTML = `
<div
  id="ftf-dma-note"
  class="ftf-dma-note d-none ad native-ad native-ad-1 ytd-j yxd-j yxd-jd aff-content-col aff-inner-col aff-item-list ark-ad-message inplayer-ad inplayer_banners in_stream_banner trafficjunky-float-right dbanner preroll-blocker happy-inside-player blocker-notice blocker-overlay exo-horizontal ave-pl bottom-hor-block brs-block advboxemb wgAdBlockMessage glx-watermark-container overlay-advertising-new header-menu-bottom-ads rkads mdp-deblocker-wrapper amp-ad-inner imggif bloc-pub bloc-pub2 hor_banner aan_fake aan_fake__video-units rps_player_ads fints-block__row full-ave-pl full-bns-block vertbars video-brs player-bns-block wps-player__happy-inside gallery-bns-bl stream-item-widget adsbyrunactive happy-under-player adde_modal_detector adde_modal-overlay ninja-recommend-block aoa_overlay message ftf-dma-note fixed bottom-4 left-4 right-4 bg-red-900 text-white p-4 text-left rounded-lg shadow-lg z-40"
>
  <span id="ftf-dma-close-btn" class="ftf-dma-close-btn bg-red-700 p-1 px-2 rounded-md absolute top-2 right-2 cursor-pointer text-gray-100 hover:bg-red-800 transition duration-300 hover:text-gray-300">
    I understand the risks
  </span>
  <div class="ftf-dma-note-content">
    <p class="text-xl font-semibold">Ad-blocker not detected!</p>
    <p class="text-lg">
      I strongly suggest that you consider installing a browser extension like
      <a href="https://ublockorigin.com/" target="_blank" referrerpolicy="no-referrer" class="underline text-blue-500 hover:text-blue-700">uBlock Origin</a>
      that blocks ads and other malicious scripts in your browser to protect your privacy and security. If you already have one, good on you. :D
    </p>
  </div>
</div>`;

if (window.location.hostname !== 'localhost') {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
}