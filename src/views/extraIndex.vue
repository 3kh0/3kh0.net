<template>
  <main class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl mb-4">Extra Pages</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link v-for="page in extraPages" :key="page.url" :to="`/extra/${page.url}`" class="block bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">{{ page.title }}</h3>
        <p class="text-sm">{{ page.desc }}</p>
      </router-link>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        extraPages: [
          { url: "aboutblank", title: "About Blank", desc: "About blank embedder tool" },
          { url: "index", title: "Index", desc: "This silly page" },
          { url: "browserinfo", title: "Browser info", desc: "Hackers telling me my info after I forgot it:" },
          { url: "urlopen", title: "URL Direct", desc: "Page opener tool (useful for kiosk exploits)" },
          { url: "crypto", title: "Crypto Wallets", desc: "My crypto wallets, in case I forget them?" },
          { url: "fursona-ref", title: "Fursona Reference", desc: "Details about my fursona for artists or anyone really" },
        ],
      };
    },
  };
</script>