<template>
  <main class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl mb-4">My Crypto Wallets</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <WalletCard v-for="wallet in wallets" :key="wallet.name" :wallet="wallet" />
    </div>
  </main>
</template>
<script>
  import WalletCard from "./../components/walletCard.vue";
  export default {
    components: {
      WalletCard,
    },
    data() {
      return {
        wallets: [
          {
            name: "Monero (XMR)",
            img: "xmr",
            address: "43LSJpZ6Le84eMiLTmMwZgTDMxtPthDh8Cdk1HWuLAx9itTgj8YqLbGE7hFYXSR6p6YVP8g4TMWxDiQTDnHW1VHMAb6YDrH",
            explorerLink: "https://xmrchain.net/search?value=",
          },
          {
            name: "USD Coin (USDC)",
            img: "usdc",
            address: "0xe37Bd63515c2423ef957b81483825F7e7349C690",
            explorerLink: "https://polygonscan.com/address/",
          },
          {
            name: "Bitcoin (BTC)",
            img: "btc",
            address: "33WimAtvLLmEREJBUS2wc8ev7tjmzCU2Mq",
            explorerLink: "https://mempool.space/address/",
          },
          {
            name: "Ethereum (ETH)",
            img: "eth",
            address: "0xCDe3a3DEcE1f80cE6371D4ed2a2D92017A2a624A",
            explorerLink: "https://etherscan.io/address/",
          },
          {
            name: "Litecoin (LTC)",
            img: "ltc",
            address: "MSiBQ181HZVPKtz9cTf9VHz7DEuEc5Jm9r",
            explorerLink: "https://explorer.litecoin.net/address/",
          },
          {
            name: "Tether (USDT)",
            img: "usdt",
            address: "0x360a98086a62974F5a7bfF723B685382dece5753",
            explorerLink: "https://www.okx.com/explorer/usdt/address/",
          },
        ],
      };
    },
  };
</script>