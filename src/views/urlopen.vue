<script>
  export default {
    mounted() {
      import("/src/scripts/urlOpen.js");
    },
  };
</script>
<template>
  <main class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl mb-4">URL Opener</h2>
    <input type="text" id="input" placeholder="Enter URL here..." class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <div class="button-wrapper mt-4">
      <button onclick="redirectToUrl()" class="console-button bg-blue-500 hover:bg-blue-700 transition duration-300 text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">
        <i class="fas fa-plus-circle"></i> Open URL
      </button>
    </div>
    <p id="status-bar" style="color: white;" class="mt-2">Loading...</p>
  </main>
</template>