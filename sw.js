!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7d25d39a2cf0b939cd3af3d1cf476f98","url":"01a85c17.bb0a3771.js"},{"revision":"9f1214cdfd8ebc8b4295842f784b58ad","url":"04ed3e18.1d29fc38.js"},{"revision":"bd10185d3d6c5e2a4494a785ec0b89f7","url":"060504b2.bf65b9a1.js"},{"revision":"dfe4b0f915e7524a1d997181430cf372","url":"08a57144.6ad5f120.js"},{"revision":"d9b79c19fb827f1a0afcc802bb5c14ce","url":"0f5eb8d3.5c639eb8.js"},{"revision":"9dc649d89cf97fce009d1e04a43f973c","url":"0f874a2f.aa96ad9d.js"},{"revision":"e3c12f5aa382a6ed49ecee5b8f3ff1ba","url":"1.6e5c6dea.js"},{"revision":"738bcad4db23591814b489f6d4f34985","url":"16dfe674.be24843d.js"},{"revision":"fca6915409c133e268ea830a3664e535","url":"2.95121cc3.js"},{"revision":"d73195b54de1ec66b520c047ceb99fbf","url":"2dfb450f.6f3a827d.js"},{"revision":"6e7896f3a3efb2a74dc0102ea54eff44","url":"2f88de79.7bb9f42e.js"},{"revision":"e0590a246068c35ca804618802183506","url":"3097d48f.20d1a10f.js"},{"revision":"d0057681481bde8df41648ae36a21150","url":"3a54bd52.e775ce28.js"},{"revision":"a76ced058c51cda5dfe6ef1fe9e54a15","url":"404.html"},{"revision":"d53ddd0ddd58c6186b42dc95b20c7dfb","url":"42.54a539bb.js"},{"revision":"2d78d23ea6fe45c3bd9b834fc961969b","url":"43.199f9baa.js"},{"revision":"4f0fd894ebdba4bd5b8e5345fe462e82","url":"44.9ad0e13d.js"},{"revision":"acf97496d63115f5ef51c57f5f23395f","url":"45.81ac42fb.js"},{"revision":"7bc2ded12e8e6d6a65c25c8c2c1173ed","url":"46.aa26a4d4.js"},{"revision":"023e80be61e29a03ae712bae6b021ab5","url":"47.dc293f5d.js"},{"revision":"fa6d602c40752fb83f9fd3416e12201d","url":"48.f88bc3d5.js"},{"revision":"4be0ea5435280982c5fa313e1628554d","url":"49.5be41f14.js"},{"revision":"7982d50d7352ee5b3301cd37dd8948f2","url":"5b04d039.94837744.js"},{"revision":"ddedde97e3362886080135bdfa6591b7","url":"5c4ee1d6.6713e6fc.js"},{"revision":"927b3ec83dbff3cbd94ee205da1c2b72","url":"62647f66.c5ec1339.js"},{"revision":"466063ca30b12364f390e421b56b3f65","url":"6875c492.cff8707f.js"},{"revision":"7a188f5a09f920c6da3e3367878227db","url":"6ad52827.f56d4a64.js"},{"revision":"99995da4640278af25e72e0085be7cd4","url":"6c1f8ae5.cbc347bb.js"},{"revision":"b5ebc6683b782430d3d03ed4a01036bb","url":"7f1e47e6.d52dbbdb.js"},{"revision":"56c4a3aba59c9cbb48ce2293637087fd","url":"893485ae.f68a6933.js"},{"revision":"50acb2f06bdd37ba4587daabf9006498","url":"8aadae3d.a86659ba.js"},{"revision":"41af25088f0450221799fdb50a9f29b8","url":"8d977ac9.ae27df53.js"},{"revision":"f5fb2d7bafa2780df2c32f952fefb41d","url":"9374984d.e3c4adce.js"},{"revision":"2220a2bd7c3c8f8b3e2ca7a8aee2bf06","url":"9958fd43.490a4473.js"},{"revision":"7eefa6fd256a021670acb55133cf21ae","url":"99af12bb.bec2811b.js"},{"revision":"ccce66c992d6ace01381383f2193b0a2","url":"a61700d6.70064cdb.js"},{"revision":"440c189dd9f9b53ba580f8703aa6185d","url":"a6aa9e1f.e9f56062.js"},{"revision":"b35f4561b99044714c814081bf85a2da","url":"blog/2020/08/01/hello-world/index.html"},{"revision":"a5d81900b10f6a90ea01f645af5bebd6","url":"blog/index.html"},{"revision":"2020dc748018e91438a9bb0d753a8769","url":"blog/tags/hello/index.html"},{"revision":"476f81005d4a9453d7bbf8d9358b1506","url":"blog/tags/index.html"},{"revision":"ac74dc9b7352ba6c4950d0dbd4985dd5","url":"c3831471.23cf2826.js"},{"revision":"ac6dfec0dd3f04f2330fd2f3a0be1a5a","url":"c7e066e7.e632d101.js"},{"revision":"141359738856f18fd44a50c0c18b14a9","url":"cb92ec6a.b5ba08b6.js"},{"revision":"b0783ddfb53b07178cc7b3a93f2b61a3","url":"ccc49370.aff4d4a3.js"},{"revision":"8f042ce6949d8ec937961ad3a0a97548","url":"docs/actions-common/index.html"},{"revision":"2accc4739a2b521e0e4844d9dc413fc5","url":"docs/actions-database/index.html"},{"revision":"71113fb2cad12c7df1d52da0d7218e1a","url":"docs/actions-mobile/index.html"},{"revision":"bc235b376345a7913518ce4b1d88b3a0","url":"docs/actions-performance/index.html"},{"revision":"036e1d1c86b1dd282bfecccb7cf50a74","url":"docs/actions-rest-api/index.html"},{"revision":"46352480686aef55fb856f7767fb4822","url":"docs/actions-web/index.html"},{"revision":"8db343d348c234ecc2390ed6657239af","url":"docs/condition/index.html"},{"revision":"736716ce10b22b7508a8557bd48253f3","url":"docs/course-desktop/index.html"},{"revision":"63e17594fc7dd342948843e7b8aec7d3","url":"docs/course-info/index.html"},{"revision":"cb1e7c4551220a7ba2a96853fc61e291","url":"docs/course-mobile/index.html"},{"revision":"b0c641f617c9dbf0623696a5d16e3980","url":"docs/course-rest-api/index.html"},{"revision":"d8083e5cc893dcf1a73271cc5a9f9556","url":"docs/course-web/index.html"},{"revision":"defb0398afd58e0330c93904958056a4","url":"docs/data-collector/index.html"},{"revision":"b1ee4608e0fd21a95aad0003d5c00e37","url":"docs/doc1/index.html"},{"revision":"c19c7fe24b8b40ff5dc4cbbdbb4a3f33","url":"docs/index.html"},{"revision":"d701f44e4c3dd1d3ea1ed46bbd4fd2da","url":"docs/loop/index.html"},{"revision":"82f04b7e3fdb58775745189e7f52edfc","url":"docs/offline-access/index.html"},{"revision":"cc9249311925c26e3c7c3b0c453a0f89","url":"docs/variables-and-indexed-access/index.html"},{"revision":"6d9ad3cb5d58c2557f1b323b1e7b49a5","url":"docs/zeuz-api-examples/index.html"},{"revision":"c3bcc0dd0127032747d7bb8d634853bf","url":"docs/zeuz-node-changelogs/index.html"},{"revision":"71b2f18e0efe21734c26deaab0129cae","url":"docs/zeuz-node-setup/index.html"},{"revision":"8aa5de4b09f474b9a04af3b40b952097","url":"docs/zeuz-node-usage/index.html"},{"revision":"a11afa0e30dd606bfa12dbfac4cd7ead","url":"docs/zeuz-node/index.html"},{"revision":"953229094224d470517af2540ccaebd3","url":"docs/zeuz-server-changelogs/index.html"},{"revision":"e2d8408b4ca095ba15345b1363b4f17e","url":"docs/zeuz-server/index.html"},{"revision":"570a25b1598f2aec874ff7628de03a7e","url":"e0e3e0e3.5b19b8a7.js"},{"revision":"eba7bd4d658f48373d3d88e7d914028b","url":"e2e2274d.6851a632.js"},{"revision":"5f8e7aa3e8fc732dd9ab993c053625e6","url":"e69d505f.bb5254ae.js"},{"revision":"de13b395e58050ab2b6be9d960453522","url":"eaa7d39a.62420d12.js"},{"revision":"087445ac2269ba36522e980bc2e567c9","url":"eba8ec50.bc46e9de.js"},{"revision":"5087de02d052c463cb9d4cf45591cc98","url":"ece76bd1.599910ac.js"},{"revision":"450d542361ef4013af1edfaaebd6854c","url":"f976f453.3162527c.js"},{"revision":"e2042127d5364b9181a6aac1b591085f","url":"img/icons/_head.html"},{"revision":"189562b6fe4b92cd1682c1475028191e","url":"index.html"},{"revision":"b8f37f916770119e6828f5230ea0e718","url":"main.a3b10f43.js"},{"revision":"233bbee59a71c6a930cb4c6c1a9d226f","url":"runtime~main.3a18e2e8.js"},{"revision":"2f3ca6c231dfd79583e736c829e881a1","url":"search-index.json"},{"revision":"2c829608a965a3e83885696ec07afa08","url":"styles.edc92e41.css"},{"revision":"e02af4c8a4d41c3fdc3344ad73911092","url":"styles.f5e4ebf2.js"},{"revision":"6944adc75e18c3b6892eac5fb33e7876","url":"a60c0139b0872e020a78e7df478cd862.svg"},{"revision":"5bbccebc4ec6d07c4dda7c6e17e05255","url":"assets/images/pwa-demo-e5e82eb6762b84cd1a13ad42b86f827c.png"},{"revision":"055567078a2535cde0d703cb0c5c4171","url":"assets/images/pwa-offline-5b60793791703557d122e18b594b175c.png"},{"revision":"50dcfd01733e212dbc0d282202f1162c","url":"assets/images/windows-python-path-1869ba8236d15d468c1cb0791468351d.png"},{"revision":"7f89ba1dbd1f24a180557454f8511cd8","url":"assets/images/zeuz-node-installer-40f54cf946376c2fb97ae13e41800860.png"},{"revision":"ab793e4ac31350bfacc625d4ebc80d40","url":"img/favicon.ico"},{"revision":"64ad9279bc4eab29dc95f215275c9102","url":"img/icons/android-144x144.png"},{"revision":"1b3ed8aaa44df96042f4c4f69cfe8e8b","url":"img/icons/android-192x192.png"},{"revision":"3e8745c04ef1ac42e370d822831ae379","url":"img/icons/android-36x36.png"},{"revision":"38d4bac6b6485a422b14154ec25b4eb2","url":"img/icons/android-48x48.png"},{"revision":"a268ae86c2ba1ab9c8d2db07beb68e6d","url":"img/icons/android-72x72.png"},{"revision":"2662dac2850c26228fa2f1c4c0f10050","url":"img/icons/android-96x196.png"},{"revision":"bffe6e67235bdc2680ae4b975b7908f2","url":"img/icons/apple-touch-icon-180x180.png"},{"revision":"a8783dc49e5078e603caf1c7cce600a5","url":"img/icons/favicon-16x16.png"},{"revision":"f228e8e576e80406866447e3aa057173","url":"img/icons/favicon-32x32.png"},{"revision":"588120785afa8a58cb791933490341a2","url":"img/icons/favicon.ico"},{"revision":"2acdbfae2d6005e3fe98f98b078687e4","url":"img/icons/pwa-192x192.png"},{"revision":"b8551a6173d2874b72b5f72b498079e0","url":"img/icons/pwa-512x512.png"},{"revision":"07a88b0d765ff8fa9ddec927ae1ed830","url":"img/icons/tile150x150.png"},{"revision":"dc672a34b21267670184efb4bf0256af","url":"img/icons/tile310x150.png"},{"revision":"cd30f02e75d4c07666b39793af416750","url":"img/icons/tile310x310.png"},{"revision":"03470c9cd3c59fce351817b8be11d4b2","url":"img/icons/tile70x70.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"5bbccebc4ec6d07c4dda7c6e17e05255","url":"img/pwa-demo.png"},{"revision":"055567078a2535cde0d703cb0c5c4171","url":"img/pwa-offline.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"50dcfd01733e212dbc0d282202f1162c","url":"img/windows-python-path.png"},{"revision":"48fb876a720892e0f1a66501e2e5dcbe","url":"img/zeuz-logo.png"},{"revision":"7f89ba1dbd1f24a180557454f8511cd8","url":"img/zeuz-node-installer.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);