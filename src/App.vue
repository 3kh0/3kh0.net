<script setup>
  import { ref, onMounted, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import siteHeader from "./components/siteHeader.vue";
  import siteFooter from "./components/siteFooter.vue";

  const route = useRoute();

  watchEffect(() => {
    document.title = route.meta.title || "3kh0.net";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", route.meta.description || "I am Echo, programmer, hacker, and furry. Welcome to my personal website! :D");
    } else {
      let meta = document.createElement("meta");
      meta.name = "description";
      meta.content = route.meta.description || "I am Echo, programmer, hacker, and furry. Welcome to my personal website! :D";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  });

  const isLoading = ref(true);
  const loadError = ref(false);
  let startTime = Date.now();

  onMounted(() => {
    const timer = setTimeout(() => {
      if (isLoading.value) {
        loadError.value = true;
        const img = new Image();
        img.src = "/img/noo.webp";
      }
    }, 5000);
    // Check if the page is fully loaded
    window.addEventListener("load", () => {
      let endTime = Date.now();
      let loadTime = endTime - startTime;
      console.log(`Page loaded in ${loadTime}ms. Could be faster smh`);
      clearTimeout(timer);
      isLoading.value = false;
    });
  });
</script>
<template>
  <div v-if="isLoading" id="loader" class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 z-50">
    <div class="w-32 h-32 border-8 border-green-500 border-t-transparent rounded-full animate-spin" v-if="!loadError"></div>
    <div v-if="loadError" class="flex flex-col items-center">
      <img src="/img/noo.webp" loading="eager" alt="Error image" class="w-64 h-auto" />
      <div class="text-center text-red-500 p-4 max-w-3xl">
        <p class="font-bold text-xl">Looks like something broke!</p>
        <p class="text-md">Because the issue was so bad, the whole website broke down. A message has been sent to me to fix it as soon as possible! In the meantime you can contact me at echo-the-coder@tuta.io</p>
      </div>
    </div>
  </div>
  <siteHeader />
  <router-view />
  <siteFooter />
</template>
<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>