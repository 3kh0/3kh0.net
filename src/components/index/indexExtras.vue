<script>
export default {
  mounted() {
    import('/src/scripts/indexUtils.js');
  },
};
</script>
<template>
  <div id="nothingSusHere"></div>
  <div id="backToTop" class="fixed right-0 bottom-0 m-6 group flex items-center space-x-2 overflow-hidden">
    <button
      id="back-to-top" aria="Back to top"
      class="flex items-center justify-start space-x-2 p-2 w-10 h-10 bg-blue-500 text-white rounded shadow hover:w-32 transition-all duration-200 overflow-hidden"
      onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
    >
      <i class="fas fa-arrow-up pl-[6px]"></i>
      <span class="opacity-0 hidden group-hover:inline-block group-hover:opacity-100 transition-opacity duration-200 overflow-hidden">Back to top</span>
    </button>
  </div>
</template>