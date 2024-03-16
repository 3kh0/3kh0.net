<template>
  <div class="wallet mt-4 bg-gray-800 p-4 rounded-xl shadow-lg flex-grow flex-shrink min-w-0">
    <h3 class="text-2xl mb-2">{{ wallet.name }}</h3>
    <img :src="`/img/crypto/${wallet.img}.png`" :alt="`${wallet.name} Wallet QR Code`" class="mb-2 rounded-xl" />
    <p :id="`${wallet.img}-address`" class="wallet-address w-full whitespace-pre-wrap font-mono text-center">{{ trimAddress(wallet.address) }}</p>
    <button v-on:click="copyAdr(wallet.address)" class="w-full mt-2 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white py-2 px-4 rounded"><i class="fas fa-copy"></i> Copy address</button>
    <a :href="wallet.explorerLink + wallet.address" target="_blank">
      <button class="w-full mt-2 bg-green-500 hover:bg-green-700 transition duration-300 text-white py-2 px-4 rounded"><i class="fas fa-external-link-alt"></i> Open in Explorer</button>
    </a>
  </div>
</template>
<script>
  export default {
    props: ["wallet"],
    methods: {
      trimAddress(address) {
        const prefix = address.substring(0, 10);
        const suffix = address.substring(address.length - 10);
        return `${prefix}...${suffix}`;
      },
      copyAdr(adr) {
        navigator.clipboard.writeText(adr);
      },
    },
  };
</script>