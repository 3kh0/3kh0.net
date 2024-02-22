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
  <main class="max-w-6xl mx-auto px-4 flex flex-wrap">
    <div class="bg-yellow-500 text-black text-center py-2 rounded-lg max-w-6xl mx-auto m-4 px-4 w-full"><i class="fas fa-person-digging"></i> This page is still under construction.</div>
    <section id="content" class="w-full h-full lg:w-3/4 lg:pr-8 mb-8">
      <h2 class="text-3xl mb-4">Fursona Information</h2>
      <div class="bg-gray-700 rounded-lg p-4 text-lg">
        <h2 class="text-2xl mb-2">Design</h2>
        <p class="text-lg">
          Echo is an orange fox who usually wears a sweatshirt with the occasional T-shirt. Common designs include the <a class="font-semibold text-blue-500" target="_blank" href="https://web.getmonero.org/press-kit/">Monero logo</a> and
          the <a class="font-semibold text-blue-500" target="_blank" href="https://efimero.github.io/xenia-images/cathodegaytube1.jpg">Xenia Linux T-shirt</a>. Here are a few pointers for the fine details:
        </p>
        <ul class="p-4">
          <li><span class="bullet-point">•</span> 3 to 5 fluffy tails.</li>
          <li><span class="bullet-point">•</span> Orange eyes</li>
          <li><span class="bullet-point">•</span> The tip of the ears are a bit darker</li>
        </ul>
        <h2 class="text-2xl mb-2">Do's and Don'ts</h2>
        <p class="text-xl mb-2">Yes:</p>
        <ul>
          <li><i class="fas fa-square-check"></i> Draw without asking first</li>
          <li><i class="fas fa-square-check"></i> Pride art</li>
          <li><i class="fas fa-square-check"></i> Design changes</li>
          <li><i class="fas fa-square-check"></i> Body swap (humans/humanoid)</li>
        </ul>
        <p class="text-xl mb-2">No:</p>
        <ul>
          <li><i class="fas fa-square-xmark"></i> NSFW, any and all kinds</li>
          <li><i class="fas fa-square-xmark"></i> Fetish/kink art</li>
          <li><i class="fas fa-square-xmark"></i> Gore of any kind</li>
        </ul>
        <h2 class="text-2xl my-2">Example art</h2>
        <div id="art">
          <section>
            <div id="art-container">
              <a id="art-link" href="#" target="_blank" title="Loading..." referrerpolicy="no-referrer">
                <img id="art-image" class="w-auto max-h-96 mb-4 rounded-lg shadow-lg" alt="Artwork" loading="eager" />
              </a>
              <p id="artist-name" class="text-lg font-semibold"></p>
              <p id="art-description" class="text-sm"></p>
              <div class="mt-4">
                <button id="next-art-button" class="bg-blue-500 shadow-lg text-white py-2 px-4 w-32 rounded-xl hover:bg-blue-600 transition duration-300">Next</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section id="quick-facts" class="w-full h-full lg:w-1/4 mb-8">
      <div class="bg-gray-700 rounded-lg p-4">
        <h2 class="text-2xl mb-2">Echo</h2>
        <div class="grid grid-cols-1 gap-4">
          <div>
            <a href="/img/xmr_hoodie.png" target="_blank">
              <img src="/img/xmr_hoodie.webp" alt="Fursona Image" class="w-full h-auto rounded-lg mx-auto" />
            </a>
          </div>
          <div>
            <ul>
              <li><strong>Name:</strong> Echo</li>
              <li><strong>Age:</strong> 15</li>
              <li><strong>Body Type:</strong> Anthro</li>
              <li><strong>Pronouns:</strong> he/him</li>
              <li><strong>Species:</strong> Fox</li>
              <li><strong>Gender:</strong> Male</li>
              <li><strong>Tails:</strong> 3-5</li>
              <li><strong></strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>