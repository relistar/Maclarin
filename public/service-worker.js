if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/108-02ad0cae528b151f45b2.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/172-bc609f93226c88be399f.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/245-c92dce20ecf476727730.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/298-21d9f0ad1caaf487dde6.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/36-866d7cbac76e981f6ea1.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/694-dfe4fa421650e8c77f04.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/706-45bd12206ccf4722eaf5.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/750-3c0e48661db557829607.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/929-6ef697a18a07cd2b8a0d.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/963-a568b146b7a46c7176a6.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/981-45cecd236b3fd382acb9.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/989-c7ac89382551de040758.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/main-038f4087fe0b3e7f37ca.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/_app-c30a1424153190d0381e.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/_error-905ff37295e47a1fba65.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/assembly/confirm-28e6b8913ac44ad72f24.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/auth-04c58ab19401db90bb14.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/index-8fc8d371849a0e539f0b.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/kitchen-1410857c3ddad07f73f4.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/login-b217c8768ff2b3f3d652.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/logout-c13a5d6704908db98794.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/operator/order/%5BorderId%5D-52401a09e029bafd01f6.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/pages/operator/order/delivery-68769dae4b34669a75ef.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/chunks/webpack-6aa24242c38afc8913a0.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/css/d9f3e04d7fe547e1f1aa.css",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/chevron-left.900f3f50383c0e19161d0628d7b0222e.svg",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/chevron-right.302b827ebe941a48eb0126069905d4ce.svg",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/leaves-bg-left.12b5e7c194047380ebabc647e9dc57c0.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/leaves-bg-right.f72d542318e3f63d4c07589578cab113.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/login-leaves-bg-left.21b0902d081564111893faa2941a1d2b.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/login-leaves-bg-right.433aeacad40315f69264554a4b847470.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/logo.ed9d4909be65d5a940b1fa686d2ca9a6.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/logo_circle.9a840b5b4f9dadef1f2544e0d438bee7.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/tablet-leaves-bg-left.57be3eb9855f239c04553c19fd610dcd.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/image/public/images/tablet-leaves-bg-right.6f0c77dcb54a14d31e86a6ca7ebdd61f.png",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/qCPGPzEOk6dlcjoqmBfbH/_buildManifest.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/_next/static/qCPGPzEOk6dlcjoqmBfbH/_ssgManifest.js",revision:"qCPGPzEOk6dlcjoqmBfbH"},{url:"/android-chrome-192x192.png",revision:"8108297661d505606fc3877233392ab6"},{url:"/android-chrome-384x384.png",revision:"6f2f028364d7e8f23731761ad8e7d825"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"04734ea9ab8a5bbab4f2a15c8352879b"},{url:"/apple-touch-icon-114x114.png",revision:"67661aaff6213230a6796436fb047b24"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"cdfd2a8bbec1ded5a4fcc0cc74271007"},{url:"/apple-touch-icon-120x120.png",revision:"0144c1f50518a12e85d3ba2615b79e90"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"3f466838e94f48a065c7d7392446c001"},{url:"/apple-touch-icon-144x144.png",revision:"6f0bae7dbb8c572ece17db051b4cffbd"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"b106dd66d588f17a424b5f9715a19de6"},{url:"/apple-touch-icon-152x152.png",revision:"720e7ae42869b7a4e67084d584d281ac"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"d7b12671755304bbadf8fad81691e43b"},{url:"/apple-touch-icon-180x180.png",revision:"e6d37af67723197480f398eacd858951"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"284399d28f39e5a1e9fa1814d22d558d"},{url:"/apple-touch-icon-57x57.png",revision:"6701093c0b366da22a526e78da682535"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"e844493bd614d56d2d50229b03427bd9"},{url:"/apple-touch-icon-60x60.png",revision:"6a4df728e18c505aef7fd642b727acb5"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"b046b6bdc54ea5ebec0bb412d2511f0e"},{url:"/apple-touch-icon-72x72.png",revision:"fc6d4b0276ed18efb22d29c2836f0f4e"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"dd98c3ec0c2e43a2e7a146474f7cfc0b"},{url:"/apple-touch-icon-76x76.png",revision:"c82b14f36356f5d51617137bca1aeb38"},{url:"/apple-touch-icon-precomposed.png",revision:"d7b12671755304bbadf8fad81691e43b"},{url:"/apple-touch-icon.png",revision:"e6d37af67723197480f398eacd858951"},{url:"/browserconfig.xml",revision:"877c532bc5e11b01391e51b4fd9240e8"},{url:"/favicon-16x16.png",revision:"41208f156e6a6fe43221e77f9b3dc62d"},{url:"/favicon-32x32.png",revision:"6b084ecf2ee5fd5b067026cab93a53c6"},{url:"/favicon.ico",revision:"c849fcb3c167c8d6bfa607b7f9d403e5"},{url:"/icons/search.svg",revision:"1fb654ff355ca208e8ea61ca241706ac"},{url:"/images/chevron-left.svg",revision:"7a1a3e856dec8f5c4794d7ff9a2fc4c2"},{url:"/images/chevron-right.svg",revision:"81cbdbccf9ae7c5ee53a5bde1bbd3c58"},{url:"/images/leaves-bg-left.png",revision:"9a57b23f385b71f45b07f79b4f8821d5"},{url:"/images/leaves-bg-right.png",revision:"19a37684b3075e5d0235265c7e93f16f"},{url:"/images/login-leaves-bg-left.png",revision:"4b872da65a88a3b8966859c589857fd8"},{url:"/images/login-leaves-bg-right.png",revision:"78efb71bc06f0b1233c619e5e6b85258"},{url:"/images/logo.png",revision:"a6726646cec48bfc386bd8c54b150bf6"},{url:"/images/logo_circle.png",revision:"7eaee617d3f24b3864e6d195b57b018a"},{url:"/images/tablet-leaves-bg-left.png",revision:"46c1a008850f0bf5cdbe3f2adb9c02af"},{url:"/images/tablet-leaves-bg-right.png",revision:"e2b221d44356b338ecb0ad90a2f1129e"},{url:"/manifest.json",revision:"e105f94eac83cfd3811f480a5316bdc7"},{url:"/mstile-144x144.png",revision:"072269ebca94a3d42100bd456b7d6959"},{url:"/mstile-150x150.png",revision:"a210dd993b04ac5cfa8b6be6da2d51bc"},{url:"/mstile-310x150.png",revision:"fa9ac0a290dd10b913d3c2c6086ebdb4"},{url:"/mstile-310x310.png",revision:"ff2de0f033e64b13648a03b1363bb777"},{url:"/mstile-70x70.png",revision:"8ab40ec0e7712755c268b4230fd62987"},{url:"/safari-pinned-tab.svg",revision:"e0ba33eef10132a99546fab4bdafb144"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
