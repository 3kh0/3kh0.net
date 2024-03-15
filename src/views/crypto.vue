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
            address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6",
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
            address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6",
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
            address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6",
            explorerLink: "https://www.okx.com/explorer/usdt/address/",
          },
          {
            name: "Solana (SOL)",
            img: "sol",
            address: "7JnnjZfcNEoc6h3dRPw8zWFQQGoiMPtpMFNyDq9usPye",
            explorerLink: "https://solana.fm/address/",
          },
          {
            name: "Dogecoin (DOGE)",
            img: "doge",
            address: "DBhD3inJwU17gZo4FTaH7HsCBwe3iW3Fa4",
            explorerLink: "https://dogechain.info/address/",
          },
          {
            name: "Tron (TRX)",
            img: "trx",
            address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6",
            explorerLink: "https://tronscan.org/#/address/",
          },
        ],
      };
    },
  };
</script>