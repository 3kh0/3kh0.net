import { createRouter, createWebHistory } from "vue-router";

// Import pages here
import index from "./views/index.vue";
import signal from "./views/signal.vue";
import notFound from "./views/notFound.vue";
// extra pages here
import extraIndex from "./views/extraIndex.vue";
import fursonaRef from "./views/fursonaRef.vue";
import crypto from "./views/crypto.vue";
import aboutblank from "./views/aboutblank.vue";
import browserInfo from "./views/browserInfo.vue";
import urlopen from "./views/urlopen.vue";
import cryptoqr from "./views/cryptoqr.vue";

const routes = [
  // system pages
  { path: "/", component: index, meta: { title: 'Welcome to 3kh0.net', description: 'I am Echo, programmer, hacker, and furry. Welcome to my personal website! :D' } },
  { path: "/signal", component: signal, meta: { title: 'Signal | 3kh0', description: 'Details on how to contact me on Signal!' } },
  // extra pages
  { path: "/extra", component: extraIndex, meta: { title: 'Extra Index | 3kh0', description: 'Extra pages index' } },
  { path: "/extra/index", component: extraIndex, meta: { title: 'Extra Index | 3kh0', description: 'Extra pages index' } },
  { path: "/extra/fursona-ref", component: fursonaRef, meta: { title: 'Fursona Reference | 3kh0', description: 'Details about my fursona for artists or anyone really. I swear this is not me coping for not having a Toyhouse invite code' } },
  { path: "/extra/crypto", component: crypto, meta: { title: 'Crypto Wallets | 3kh0', description: `A list of 3kh0's crypto wallets for payments or donations` } },
  { path: "/extra/aboutblank", component: aboutblank, meta: { title: 'about:blank embedder | 3kh0', description: 'About:blank page embedder tool' } },
  { path: "/extra/browserinfo", component: browserInfo, meta: { title: 'Browser Info | 3kh0', description: 'Check what information your browser is sending' } },
  { path: "/extra/urlopen", component: urlopen, meta: { title: 'URL Opener | 3kh0', description: 'Page opener tool (useful for kiosk exploits)' } },
  { path: "/extra/cryptoqr", component: cryptoqr, meta: { title: 'Crypto QR Code Generator | 3kh0', description: 'Easily generate QR codes for your crypto wallets with overlay images, error correction and more!' } },
  // catch-all route
  { path: "/:pathMatch(.*)*", component: notFound, meta: { title: '404 Error | 3kh0', description: `Hmm, we can't seem to find this page, did you get that link right?` } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
})

export default router;