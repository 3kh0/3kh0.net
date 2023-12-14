// /src/scripts/loader.js
// This loads stuff into the main page, it makes it do the thing

document.querySelector('#nothingSusHere').innerHTML = `
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
      that blocks ads and other malicious scripts in your browser to protect your privacy and security. If you already have one, please consider using a stronger one.
    </p>
  </div>
</div>`;

if (window.location.hostname !== 'localhost') {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
} else {
  document.title = 'Localhost | 3kh0';
}

const cssProgressBar = document.querySelector('#css > div > div');
const cssProgressBarBackground = document.querySelector('#css > div');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (window.pageNotFound) {
  setInterval(() => {
    console.log(window.pageNotFound)
    const randomWidth = getRandomInt(10, 100);
    const randomColor = getRandomColor();
    const randomBackgroundColor = getRandomColor();
  
    document.getElementById('cssPercent').innerText = `${randomWidth}%`;
  
    cssProgressBar.style.width = `${randomWidth}%`;
    cssProgressBar.style.backgroundColor = randomColor;
    cssProgressBarBackground.style.backgroundColor = randomBackgroundColor;
  }, 100);
}