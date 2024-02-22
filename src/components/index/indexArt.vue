<script>
  import { nextArt } from "/src/scripts/artDisplay.js";
  export default {
    async mounted() {
      const module = await import("/src/scripts/artDisplay.js");
      document.getElementById("next-art-button").addEventListener("click", nextArt);
      module.updateArtDisplay();
    },
  };
</script>
<template>
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
</template>