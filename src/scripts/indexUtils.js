// Idea source:
// https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/

// Add a note to the bottom of the page to suggest installing an ad-blocker
if (localStorage.getItem("noticeClosed") !== "true") {
  document.querySelector("#nothingSusHere").innerHTML = `
  <div id="ftf-dma-note" class="ftf-dma-note d-none ad native-ad native-ad-1 ytd-j yxd-j yxd-jd aff-content-col aff-inner-col aff-item-list ark-ad-message inplayer-ad inplayer_banners in_stream_banner trafficjunky-float-right dbanner preroll-blocker happy-inside-player blocker-notice blocker-overlay exo-horizontal ave-pl bottom-hor-block brs-block advboxemb wgAdBlockMessage glx-watermark-container overlay-advertising-new header-menu-bottom-ads rkads mdp-deblocker-wrapper amp-ad-inner imggif bloc-pub bloc-pub2 hor_banner aan_fake aan_fake__video-units rps_player_ads fints-block__row full-ave-pl full-bns-block vertbars video-brs player-bns-block wps-player__happy-inside gallery-bns-bl stream-item-widget adsbyrunactive happy-under-player adde_modal_detector adde_modal-overlay ninja-recommend-block aoa_overlay message ftf-dma-note fixed bottom-4 left-4 right-4 bg-red-900 text-white p-4 text-left rounded-lg shadow-lg z-40"
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
}

// Handle close button and store it
var closeBtn = document.getElementById("ftf-dma-close-btn");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    var notice = document.getElementById("ftf-dma-note");
    if (notice) {
      notice.style.animation = "slide-down 0.5s ease-out";
      setTimeout(function () {
        notice.style.display = "none";
        localStorage.setItem("noticeClosed", "true");
      }, 500);
    }
  });
}

// No adblocker? Get ads hahah
if (window.location.hostname !== "localhost") {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
} else {
  // Helps me with tracking which tab is the local one :D
  //document.title = "Localhost | 3kh0";
}