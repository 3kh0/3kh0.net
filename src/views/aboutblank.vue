<script>
  export default {
    mounted() {
      import("/src/scripts/aboutBlank.js");
    },
  };
</script>
<template>
  <main class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl mb-4">About Blank</h2>
    <input type="text" id="url-target" placeholder="Enter URL here..." class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <div class="button-wrapper mt-4">
      <button id="create" class="console-button bg-blue-500 hover:bg-blue-700 transition duration-300 text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"><i class="fas fa-plus-circle"></i> Create page</button>
      <button class="console-button bg-red-500 hover:bg-red-700 transition duration-300 text-white py-2 px-4 rounded-xl ml-4 focus:outline-none focus:shadow-outline" onclick="document.getElementById('url-target').value = ''">
        <i class="fas fa-trash"></i> Clear input
      </button>
    </div>
  </main>
</template>