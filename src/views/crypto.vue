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
            name: "Polygon (MATIC)",
            img: "matic",
            address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6",
            explorerLink: "https://polygonscan.com/address/",
          },
          {
            name: "Litecoin (LTC)",
            img: "ltc",
            address: "ltc1q4nwfd39gwgh57ylj0qlwahnfjnl3v5anrdjtex",
            explorerLink: "https://explorer.litecoin.net/address/",
          },
          {
            name: "Bitcoin Cash (BCH)",
            img: "bch",
            address: "qp2l3dp5adgy375t9pgeptw0cul2nw65pys295gzun",
            explorerLink: "https://explorer.bitcoin.com/bch/address/",
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
            address: "TDYkJGxgwS4N3u1arahKnUANRmwX3rsK1G",
            explorerLink: "https://tronscan.org/#/address/",
          }
        ],
      };
    },
  };
</script>
