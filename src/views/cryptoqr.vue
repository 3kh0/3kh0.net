<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl mb-4">Crypto QR Code Generator</h2>
    <div id="container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto bg-gray-800 p-6 rounded-lg shadow-md relative">
      <div class="flex flex-col items-start col-span-1">
        <h3 class="text-2xl mb-4">Configuration</h3>
        <label for="walletAddress" class="m-1 text-white">Wallet Address:</label>
        <input id="walletAddress" class="w-full px-3 py-2 border border-gray-300 text-black rounded-xl" v-model="walletAddress" type="text" placeholder="Enter your wallet address" />
        <label for="currency" class="m-1 text-white">Currency logo:</label>
        <select id="currency" class="w-full px-3 py-2 border border-gray-300 text-black rounded-xl" v-model="selectedCurrency" name="currency">
          <option value="" selected>No logo</option>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="usdt">Tether (USDT)</option>
          <option value="bnb">Binance Coin (BNB)</option>
          <option value="sol">Solana (SOL)</option>
          <option value="usdc">USD Coin (USDC)</option>
          <option value="ada">Cardano (ADA)</option>
          <option value="doge">Dogecoin (DOGE)</option>
          <option value="avax">Avalanche (AVAX)</option>
          <option value="shib">Shiba Inu (SHIB)</option>
          <option value="dot">Polkadot (DOT)</option>
          <option value="link">Chainlink (LINK)</option>
          <option value="trx">TRON (TRX)</option>
          <option value="matic">Polygon (MATIC)</option>
          <option value="bch">Bitcoin Cash (BCH)</option>
          <option value="near">NEAR Protocol (NEAR)</option>
          <option value="uni">Uniswap (UNI)</option>
          <option value="ltc">Litecoin (LTC)</option>
          <option value="icp">Internet Computer (ICP)</option>
          <option value="dai">Dai (DAI)</option>
          <option value="atom">Cosmos (ATOM)</option>
          <option value="op">Optimism (OP)</option>
          <option value="xmr">Monero (XMR)</option>
        </select>
        <label for="mg" class="m-1 text-white">Margin:</label>
        <input id="mg" class="w-full px-3 py-2 border border-gray-300 text-black rounded-xl" v-model.number="mg" type="number" placeholder="Enter margin" min="0" max="50" step="1" />
        <label for="correct" class="m-1 text-white">Error Correction Level:</label>
        <select id="correct" class="w-full px-3 py-2 border border-gray-300 text-black rounded-xl" v-model="correct">
          <option value="L">Low (7%)</option>
          <option value="M">Medium (15%)</option>
          <option value="Q">Quartile (25%)</option>
          <option value="H" selected>High (30%)</option>
        </select>
        <button class="mt-3 w-full px-3 py-2 bg-blue-500 text-white rounded-xl flex items-center" @click="generateQRCode">
          <i class="fas fa-qrcode mr-2"></i>
          Generate QR Code
        </button>
      </div>
      <div v-if="qrData" class="flex flex-col items-center col-span-1 sm:col-span-2 lg:col-span-2">
        <vue-qrcode ref="qrcode" :value="qrData" :options="{ margin: mg, errorCorrectionLevel: correct, width: 500 }" @ready="onReady"></vue-qrcode>
        <div class="flex flex-col sm:flex-row justify-center w-full">
          <button class="px-4 py-2 bg-green-500 text-white rounded-xl flex items-center m-2" @click="downloadQRCode">
            <i v-if="!loadingDownload" class="fas fa-download mr-2"></i>
            <i v-else class="fas fa-circle-notch fa-spin mr-2"></i>
            Download QR Code
          </button>
          <button class="px-4 py-2 bg-yellow-500 text-white rounded-xl flex items-center m-2" @click="copyQRCode">
            <i v-if="!loadingCopy" class="fas fa-copy mr-2"></i>
            <i v-else class="fas fa-circle-notch fa-spin mr-2"></i>
            Copy QR Code
          </button>
        </div>
      </div>
      <div v-else class="flex flex-col items-center">
        <h3 class="text-2xl mb-4">Waiting for input...</h3>
      </div>
    </div>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-lg mb-2">
          If you encounter any bugs or if your desired currency is missing, please contact me at:
          <a href="mailto:echo-the-coder@tuta.io" class="text-blue-500">echo-the-coder@tuta.io</a>
        </p>
      </section>
  </main>
</template>
<script>
  import VueQrcode from "@chenfengyuan/vue-qrcode";
  import html2canvas from "html2canvas";

  export default {
    components: {
      VueQrcode,
    },
    data() {
      return {
        walletAddress: "",
        qrData: null,
        mg: 1,
        correct: "H",
        selectedCurrency: "",
        loadingDownload: false,
        loadingCopy: false,
        loadingImage: true,
      };
    },
    methods: {
      generateQRCode() {
        if (!this.walletAddress) {
          alert("Please enter a wallet address!");
          return;
        }
        this.qrData = this.walletAddress;
      },
      downloadQRCode() {
        this.loadingDownload = true;
        const currentDate = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `qrcode_${currentDate}.png`;

        html2canvas(this.$refs.qrcode.$el).then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = fileName;
          link.click();
          this.loadingDownload = false;
        });
      },
      copyQRCode() {
        this.loadingCopy = true;
        html2canvas(this.$refs.qrcode.$el).then((canvas) => {
          canvas.toBlob((blob) => {
            navigator.clipboard
              .write([
                new ClipboardItem({
                  "image/png": blob,
                }),
              ])
              .then(() => {
                alert("QR code copied to clipboard!");
                this.loadingCopy = false;
              })
              .catch((err) => {
                console.error("Could not copy image: ", err);
                this.loadingCopy = false;
              });
          });
        });
      },
      onReady(canvas) {
        if (!this.selectedCurrency) return;

        const context = canvas.getContext("2d");
        const image = new Image();

        image.src = `/img/coins/${this.selectedCurrency.toLowerCase()}.png`;
        image.crossorigin = "anonymous";
        image.onload = () => {
          const width = 128;
          const x = (canvas.width - width) / 2;

          this.drawImage(context, image, x, x, width, width);
          this.loadingImage = false;
        };
        image.onerror = (error) => {
          console.error("Error loading image: ", error);
          this.loadingImage = false;
        };
      },
      drawImage(context, image, x, y, width, height) {
        context.drawImage(image, x, y, width, height);
      },
    },
  };
</script>