<template>
  <div id="footer">
    <section class="max-w-6xl mx-auto p-4">
      <p class="text-center text-m">Made by 3kh0, built using Vue</p>
      <p class="text-center text-xl">
        <a href="https://github.com/3kh0/3kh0.net" class="text-2xl p-2 transition-colors duration-200 text-white hover:text-green-500" aria-label="Visit Echo's GitHub profile"><i class="fab fa-github"></i></a>
        <a href="mailto:echo-the-coder@tuta.io" class="text-2xl p-2 transition-colors duration-200 text-white hover:text-green-500" aria-label="Email Echo"><i class="fas fa-envelope"></i></a>
      </p>
    </section>
    <div id="john" class="flex justify-center items-center p-4">
      <iframe id="johnFrame" title="Johnvertisement" src="https://john.citrons.xyz/embed?ref=3kh0.net" class="w-full max-w-[732px] h-[94px] border-none" loading="lazy"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.reloadJohnFrame();
  },
  methods: {
    reloadJohnFrame() {
      setInterval(() => {
        const johnFrame = document.getElementById("johnFrame");
        const src = johnFrame.src;
        johnFrame.src = "";
        johnFrame.src = src;
        console.log("John frame reloaded");
      }, 60000); // 1 minute
    }
  }
};
</script>