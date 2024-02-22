<script setup>
  fetch("https://wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ip-address").textContent = "IP Address: " + data.YourFuckingIPAddress;
      document.getElementById("location").textContent = "Location: " + data.YourFuckingLocation;
      document.getElementById("hostname").textContent = "Hostname: " + data.YourFuckingHostname;
      document.getElementById("isp").textContent = "ISP: " + data.YourFuckingISP;
      document.getElementById("city").textContent = "City: " + data.YourFuckingCity;
      document.getElementById("country").textContent = "Country: " + data.YourFuckingCountry;
      document.getElementById("country-code").textContent = "Country Code: " + data.YourFuckingCountryCode;
      // Additional fields
      document.getElementById("current-time").textContent = "Current Time: " + new Date().toLocaleString();
      document.getElementById("user-agent").textContent = "User Agent: " + navigator.userAgent;
      document.getElementById("window-width").textContent = "Window Width: " + window.innerWidth + "px";
      document.getElementById("window-height").textContent = "Window Height: " + window.innerHeight + "px";
      document.getElementById("window-ratio").textContent = "Window Ratio: " + (window.innerWidth / window.innerHeight).toFixed(2);
      document.getElementById("screen-width").textContent = "Screen Width: " + window.screen.availWidth + "px";
      document.getElementById("screen-height").textContent = "Screen Height: " + window.screen.availHeight + "px";
      document.getElementById("screen-ratio").textContent = "Screen Ratio: " + (window.screen.availWidth / window.screen.availHeight).toFixed(2);
      document.getElementById("cpu-threads").textContent = "CPU Threads: " + navigator.hardwareConcurrency;

      document.getElementById("progress-bar").style.display = "none";
    });
</script>
<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl mb-4">Browser Information</h2>
    <div id="ip-info" class="flex flex-col w-full sm:w-3/4 mx-auto bg-gray-800 p-6 rounded-lg shadow-md relative">
      <p id="ip-address" class="text-2xl mb-2 font-semibold">Fetching data...</p>
      <p id="location"></p>
      <p id="hostname"></p>
      <p id="isp"></p>
      <p id="city"></p>
      <p id="country"></p>
      <p id="country-code"></p>
      <p id="user-agent"></p>
      <p id="current-time"></p>
      <p id="window-width"></p>
      <p id="window-height"></p>
      <p id="window-ratio"></p>
      <p id="screen-width"></p>
      <p id="screen-height"></p>
      <p id="screen-ratio"></p>
      <p id="cpu-threads"></p>
      <p>Data provided by <a href="https://wtfismyip.com/" class="font-semibold text-blue-500" target="_blank">wtfismyip</a></p>
      <hr class="my-4" />
      <p class="text-sm">
        Use a VPN to protect your privacy online. I recommend <a href="https://mullvad.net/en/vpn" class="font-semibold text-blue-500" target="_blank">Mullvad VPN</a>, it is secure, private, and you don't even use a email to sign up. Pay a
        flat rate of 5€ per month, no stupid price tiers, or fake promos.
      </p>
      <div id="progress-bar" class="h-1 bg-blue-500 absolute bottom-0 left-0 rounded-lg"></div>
    </div>
  </main>
</template>
<style scoped>
  :deep(#progress-bar) {
    width: 0%;
    transition: width 0.5s ease;
    animation: progress 4s infinite;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
</style>