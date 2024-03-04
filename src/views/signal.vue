<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl mb-4">Contact me on Signal</h2>
    <div class="flex flex-col w-full sm:w-3/4 mx-auto bg-gray-800 p-6 rounded-lg shadow-md relative">
      <h3 class="text-xl mb-2 text-center font-semibold">Username: <span class="font-bold" v-text="'echo.99'"></span></h3>
      <p class="flex justify-center mb-2">
        <a v-bind:href="'sgnl://signal.me/#eu/JWxQvPG0KRZgv7nqL4S+D8f4aLq0yTb9NMtuUGQh/b8nT94xANBIJ5v8ghIEEbw1'" target="_blank" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 m-2">
          <i class="fas fa-square-arrow-up-right mr-2"></i> Open in Signal
        </a>
        <a v-bind:href="'https://signal.me/#eu/JWxQvPG0KRZgv7nqL4S+D8f4aLq0yTb9NMtuUGQh/b8nT94xANBIJ5v8ghIEEbw1'" target="_blank" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 m-2">
          <i class="fas fa-globe mr-2"></i> Open in Browser
        </a>
        <a v-bind:href="'https://signal.org/download'" target="_blank" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 m-2">
          <i class="fas fa-download mr-2"></i> Download Signal
        </a>
      </p>
      <p class="mb-2 text-center">
        Or scan this QR Code:
      </p>
      <div class="flex justify-center">
        <img v-bind:src="'/img/signal.webp'" alt="Signal App Image" class="rounded-xl mb-4 w-1/2">
      </div>
    </div>
  </main>
</template>