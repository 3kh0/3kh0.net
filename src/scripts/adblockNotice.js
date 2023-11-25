// src/scripts/adblockNotice.js
// Idea source:
// https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/

document.getElementById("ftf-dma-close-btn").addEventListener("click", () => {
  var notice = document.getElementById("ftf-dma-note");
  if (notice) {
    notice.style.animation = "slide-down 0.5s ease-out";
    setTimeout(function () {
      notice.style.display = "none";
      localStorage.setItem("noticeClosed", "true");
    }, 500);
  }
});

if (localStorage.getItem("noticeClosed") == "true") {
  document.getElementById("ftf-dma-note").style.display = "none";
}