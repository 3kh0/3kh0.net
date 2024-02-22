import { createRouter, createWebHistory } from "vue-router";

// Import pages here
import index from "./views/index.vue";
import notFound from "./views/notFound.vue";
// extra pages here
import extraIndex from "./views/extraIndex.vue";
import fursonaRef from "./views/fursonaRef.vue";
import crypto from "./views/crypto.vue";
import aboutblank from "./views/aboutblank.vue";
import browserInfo from "./views/browserInfo.vue";
import urlopen from "./views/urlopen.vue";

const routes = [
  // system pages
  { path: "/", component: index, meta: { title: 'Welcome to 3kh0.net' } },
  // extra pages
  { path: "/extra", component: extraIndex, meta: { title: 'Extra Index | 3kh0' } },
  { path: "/extra/index", component: extraIndex, meta: { title: 'Extra Index | 3kh0' } },
  { path: "/extra/fursona-ref", component: fursonaRef, meta: { title: 'Fursona Reference | 3kh0' } },
  { path: "/extra/crypto", component: crypto, meta: { title: 'Crypto Wallets | 3kh0' } },
  { path: "/extra/aboutblank", component: aboutblank, meta: { title: 'about:blank embedder | 3kh0' } },
  { path: "/extra/browserinfo", component: browserInfo, meta: { title: 'What is my IP? | 3kh0' } },
  { path: "/extra/urlopen", component: urlopen, meta: { title: 'URL Opener | 3kh0' } },
  // catch-all route
  { path: "/:pathMatch(.*)*", component: notFound, meta: { title: '404 Error | 3kh0' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
})

export default router;