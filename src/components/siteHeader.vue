<template>
  <div id="header">
    <div v-if="isUnofficial" class="bg-red-500 text-white text-center py-2 rounded-lg max-w-6xl mx-auto m-2">
      <i class="fas fa-triangle-exclamation"></i> Warning: You are using an unofficial version of the site. The real site is at <a href="https://3kh0.net" class="underline">3kh0.net</a>
    </div>
    <header class="py-4 px-8 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
      <div class="text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
        <router-link to="/" class="">
          <h1 class="text-7xl font-bold text-green-500 text-center py-1 hover:text-green-400 hover:text-shadow transition-all duration-300">3kh0</h1>
        </router-link>
        <p class="text-sm">Programmer, Hacker, Silly fox</p>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:flex w-3/4 sm:w-auto mx-auto sm:mx-0">
        <a href="/#projects" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center justify-center"><i class="fas fa-project-diagram mr-2"></i> Projects</a>
        <a href="/#art" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center justify-center"><i class="fas fa-palette mr-2"></i> Art</a>
        <a href="/#connect" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center justify-center"><i class="fas fa-share-alt mr-2"></i> Socials</a>
        <router-link to="/extra" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center justify-center"><i class="fas fa-star mr-2"></i> Extras</router-link>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  computed: {
    isUnofficial() {
      return window.location.hostname !== '3kh0.net';
    },
  },
};
</script>