if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,i,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return t;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0kIxzYcNkWfGiIftrfVHd/_buildManifest.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/0kIxzYcNkWfGiIftrfVHd/_ssgManifest.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/482-3bea6d7d03822fdc7ddb.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/65-83ea4b453dc444f083bc.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/709-82feb2d4edd20b9a427b.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/788-df4ef6e69993ae1b776b.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/805-25ef4aef49cbbd811ea7.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/911-83398998ed9ed0225e54.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/main-22b8da49a1a363fbd457.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/404-dbb10b5e831708f3bc5e.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/_app-15c2288ae15dbe2f73dd.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/basket-ef2706b3c12f3f1ccf67.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/index-d9de57ccb72742b2ef13.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/login-1141bcca7ec06d6c8a38.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/orders-06415f2ab31751b21435.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/ourstore-9887bcea9c458f6b500b.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-800df9221f577da5120c.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/register-a9e77885b975c0bfb5f3.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/shop-35a7f1b765a60dfe4d2a.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/shop/%5Bslug%5D-d50058cc79b8e6b49d6e.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/success-6347165c3c044572ea46.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/pages/wishlist-ea3efb06bf3c1b3c0094.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/css/4931c0d81ba46d2ff0c9.css",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/_next/static/css/dd6b97d8910583db1f82.css",revision:"0kIxzYcNkWfGiIftrfVHd"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"36ccef346fae5b35101c22c91f455e53"},{url:"/icon-256x256.png",revision:"97453c4cca84f86d5900a5d79bb1d0ce"},{url:"/icon-384x384.png",revision:"86d00831fddac60e15c60256fa772f48"},{url:"/icon-512x512.png",revision:"6a73b9db3d4e056844144c1e96bf80b1"},{url:"/manifest.json",revision:"89509ef21b2e635229a752343ac73831"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
