!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"6b9c363da02d76c79c00f6deb0a76cf8","url":"01a85c17.5d241a3a.js"},{"revision":"4741b498e806bdf422d8e14a29430b55","url":"04ed3e18.c78df9e2.js"},{"revision":"ae3fead88d0a3679bec3c55964e6af59","url":"060504b2.0aa8d98e.js"},{"revision":"feb125532517ff7a23a460a7c93f715d","url":"08a57144.0fabd117.js"},{"revision":"be69ddc5cdabcb1687e696c22d96b0d1","url":"0f5eb8d3.35300e83.js"},{"revision":"44794e7594aa8bea7bb1e48f62758f2f","url":"0f874a2f.84b7cdbe.js"},{"revision":"705ff6ad7d8f835f8d9aaeaf1536ee6a","url":"1.91554dab.js"},{"revision":"ba792701cc15f417c60d6cc5738101bc","url":"17896441.c4f764ce.js"},{"revision":"bb217cb99625dedb847361f441b06416","url":"2.b903cae0.js"},{"revision":"2d0b9d4db205e7303ccd71cacc416e25","url":"20ac7829.c4062280.js"},{"revision":"387467441f0318a1716acb4777fdeb02","url":"2dfb450f.4f43f435.js"},{"revision":"a0633b8011dedf74b6cd41f352b93295","url":"2f88de79.11d41241.js"},{"revision":"52a7f193d495f49245ca5e680619b913","url":"3.b74749c6.js"},{"revision":"77199cafa2edd9deb9a33b5b0e9adfeb","url":"3097d48f.7c696d2d.js"},{"revision":"f7f9ce8b2e9f4b3ec2d700d03bc099f3","url":"3a54bd52.97ae5897.js"},{"revision":"8b38dd2d15e071fd17c3a2e58ae5d3cc","url":"3a6eb64e.c59f3b1a.js"},{"revision":"83c888138907014044b63d16a46be478","url":"404.html"},{"revision":"b8b91155fcc6abc52a428c1307bd2755","url":"46.5a90431b.js"},{"revision":"9da4d707bd3aa9a91a52389cb9484719","url":"47.a36af588.js"},{"revision":"2b780e0fdc6fe0fa41df11cb9deb5677","url":"48.f356bc84.js"},{"revision":"10af6d064a4ed436bc65deb4e65dc7a7","url":"49.760c590a.js"},{"revision":"f340cbb1fe5491dbcc797ef1ece6b9af","url":"50.d3ead95a.js"},{"revision":"844f6683c10a566c8fde7a3fe0c44462","url":"51.711ff669.js"},{"revision":"294cbd362743c0a58fbe9e12f225a315","url":"52.150d3076.js"},{"revision":"a135605c84033ad3eaa4775fde8bc4b1","url":"5b04d039.183c8249.js"},{"revision":"a7185252478eb882ed958998925e4882","url":"5e734f66.2d303272.js"},{"revision":"35111292341df177ea87be060015f711","url":"62647f66.90fea023.js"},{"revision":"6ee551051004b8f9988ff7d3c0535d52","url":"6875c492.9b808389.js"},{"revision":"15578f89766a78aaabc858ff8faa87fc","url":"6ad52827.5b4d887d.js"},{"revision":"a16b91d0767330d05d45255262b5453a","url":"6c1f8ae5.455f525e.js"},{"revision":"9af4e2da58e7a92f08a3a71a869cf62a","url":"7f1e47e6.975e06de.js"},{"revision":"b6f8d675ddb3823a9c12b7281a991517","url":"893485ae.99b2d8f6.js"},{"revision":"5f9458f0d96a9eab6b0a1be84df9c679","url":"8aadae3d.e6677f83.js"},{"revision":"c26f999ef36f4ec95c80aee946d3ea0f","url":"8be5b89e.1b324675.js"},{"revision":"70b5758649a18543ccd98e63498223dc","url":"8d977ac9.09659a9a.js"},{"revision":"b52c8a1f2394ba3537c790a710e855d9","url":"9374984d.f808cacd.js"},{"revision":"d863d4811a39f4a7617d0ccb98c797e4","url":"99af12bb.38daf138.js"},{"revision":"09470d4c5d258d438b5106390402bf9c","url":"a61700d6.4c6a9967.js"},{"revision":"65aebf84f481b5736923ca5cd203c4c6","url":"a6aa9e1f.3bbfa014.js"},{"revision":"4b15b742977c29ba4be93561c0b10fd7","url":"ae908c74.49108ca5.js"},{"revision":"b79e4ef102a97bb1edc3946239cea0ff","url":"bbb4ffb5.aa2d8e8e.js"},{"revision":"5f8031459c7eea3cf2eb77fe9999df3d","url":"blog/2020/08/01/hello-world/index.html"},{"revision":"04946a7c93eb5eeee43784b87f063e37","url":"blog/index.html"},{"revision":"089e5dc488f59ac7706811d682143ba6","url":"blog/tags/hello/index.html"},{"revision":"23aa166e7312c597798989360f624442","url":"blog/tags/index.html"},{"revision":"dc26ce6a60d27cfa6c452771349dc8f5","url":"c3831471.368047c7.js"},{"revision":"a0cd7df4575447ebcf31b97f2e47fbff","url":"c7e066e7.d155ad0b.js"},{"revision":"7b6478e2c2d8e18bed7ef143cf11b8e1","url":"cb92ec6a.f74e902b.js"},{"revision":"b6f8490b16b24089ebf67797c41f6c1b","url":"ccc49370.22edda12.js"},{"revision":"c278da14eeca433a64b6cccd045f7c54","url":"cce5129b.a23d7508.js"},{"revision":"9cbcd630d7ed0beb26b99ff585ea6426","url":"docs/actions-common/index.html"},{"revision":"d3aa9f96ce65dda665306682d89d27b2","url":"docs/actions-database/index.html"},{"revision":"c581f351a556ea4ec3f90d391fbdb990","url":"docs/actions-mobile/index.html"},{"revision":"e2a3ea952138a94c35b541e019f78905","url":"docs/actions-performance/index.html"},{"revision":"079c656dc92c07a9ba969b665bf70a31","url":"docs/actions-rest-api/index.html"},{"revision":"3a21ee3192e41216bd8a20fce25410d2","url":"docs/actions-web/index.html"},{"revision":"27054898b8b7fece4759406b04912bd1","url":"docs/add-new-actions/index.html"},{"revision":"75cd9903202c3a403002b81b2b4cd7a8","url":"docs/condition/index.html"},{"revision":"2f390a327df1dd841c74a3c983a0ddff","url":"docs/course-desktop/index.html"},{"revision":"2daa4336ca1b28d28844dfa3dbf14a16","url":"docs/course-info/index.html"},{"revision":"ed39d94201efd5f268816e17767f728d","url":"docs/course-mobile/index.html"},{"revision":"9f9e15938e3b6597a722f863f1780d4f","url":"docs/course-rest-api/index.html"},{"revision":"b41f5f39bd8e68ea7c7941426f4d5529","url":"docs/course-web/index.html"},{"revision":"eeee6627bf44547eab7a60269522342e","url":"docs/custom-driver/index.html"},{"revision":"204a5e8d3f61940821f851b55432f0d9","url":"docs/data-collector/index.html"},{"revision":"969d46b13350f4dffc070a4d8805df2f","url":"docs/doc1/index.html"},{"revision":"8569f20451edc1793cd538f2765bb921","url":"docs/index.html"},{"revision":"b1e415a5592e6aa38fb4b8666a1030b7","url":"docs/loop/index.html"},{"revision":"e11ba9c7fa843a139ca23c47b3150bb6","url":"docs/offline-access/index.html"},{"revision":"718485ae08a40fab523348e6864531d3","url":"docs/variables-and-indexed-access/index.html"},{"revision":"4885e4f04c6f8fd4a9da93da1c92c553","url":"docs/zeuz-api-examples/index.html"},{"revision":"1d917ae509b27a47804995c548a43296","url":"docs/zeuz-api/index.html"},{"revision":"77fc1688892ab89649c75ec1d90af6c3","url":"docs/zeuz-node-changelogs/index.html"},{"revision":"88accffdd73e4f3857aa9da434192c1e","url":"docs/zeuz-node-setup/index.html"},{"revision":"896c5686d2377a5c43e26fb6af756f2a","url":"docs/zeuz-node-usage/index.html"},{"revision":"f20647aeafdc7d545ef90eacd4858e22","url":"docs/zeuz-node/index.html"},{"revision":"4b60ff8f3fd67e386462e1f25707c70f","url":"docs/zeuz-server-changelogs/index.html"},{"revision":"f0c877f597ec971c99b642551f28c282","url":"docs/zeuz-server/index.html"},{"revision":"ee383c63c96d9edbd39fa0fd7cf6d3b3","url":"e0e3e0e3.01ecdd17.js"},{"revision":"e0db4f4ed8a00f2453b37154c4b02014","url":"e69d505f.581da8c2.js"},{"revision":"ceafd7fe8980ff70b9ff8c6831fc9f88","url":"eaa7d39a.e5a161d4.js"},{"revision":"7ec98fa5fd35072ab95574b548134e8d","url":"eba8ec50.622eb4e5.js"},{"revision":"cfb1a5c2117e2f6c1fdb3d39a5d5f794","url":"ece76bd1.69d085c5.js"},{"revision":"e2042127d5364b9181a6aac1b591085f","url":"img/icons/_head.html"},{"revision":"b355e7f5c2e5c2e09c5cf7da475e1528","url":"index.html"},{"revision":"db1ecc8f9b24f011ae557be13545ab2f","url":"main.21ae9d66.js"},{"revision":"025975d86c9b9fed255138067e92f2d8","url":"runtime~main.f457374d.js"},{"revision":"ef7fc315d7ecdf2421b57f3330b68be4","url":"search-index.json"},{"revision":"2690967043a630c8adc9f9f2ab1fdac1","url":"styles.c69433bb.css"},{"revision":"58c9ed57b3631660dce21ad4edf82975","url":"styles.cd913a43.js"},{"revision":"4797845f9d70145e6c298d23074e6f08","url":"img/action-declarations.png"},{"revision":"b1fb18a68805380bd2bcf11089d6d0ac","url":"img/action-run.png"},{"revision":"058f788a5ff7567e754f8c30b04eef8a","url":"img/common-actions.png"},{"revision":"96cb5966fbd1fd4cfff262e230cdce0c","url":"img/custom-driver/1.jpeg"},{"revision":"b0cdfb80bb578d1c4d77530b3f7beb21","url":"img/custom-driver/10.jpeg"},{"revision":"58823e2346cb2d0ffc8475fe271c798b","url":"img/custom-driver/2.jpeg"},{"revision":"7cd7c2d2c0ef94858bc67a875378bc54","url":"img/custom-driver/3.jpeg"},{"revision":"45c68d6ed8f1a785a476196033d728bf","url":"img/custom-driver/4.jpeg"},{"revision":"e555e2ea1805f9ec39b62cc6890d9303","url":"img/custom-driver/5.jpeg"},{"revision":"7b242fce9b1f39343cfeb6c78d1a933f","url":"img/custom-driver/6.jpeg"},{"revision":"6980f8c4d65be18ece310c75601e2fa7","url":"img/custom-driver/7.jpeg"},{"revision":"51d5288dccd9e6c35d0997473f99b8b5","url":"img/custom-driver/8.jpeg"},{"revision":"cef5916327c11dd684405cecf4e9af33","url":"img/custom-driver/9.jpeg"},{"revision":"ab793e4ac31350bfacc625d4ebc80d40","url":"img/favicon.ico"},{"revision":"64ad9279bc4eab29dc95f215275c9102","url":"img/icons/android-144x144.png"},{"revision":"1b3ed8aaa44df96042f4c4f69cfe8e8b","url":"img/icons/android-192x192.png"},{"revision":"3e8745c04ef1ac42e370d822831ae379","url":"img/icons/android-36x36.png"},{"revision":"38d4bac6b6485a422b14154ec25b4eb2","url":"img/icons/android-48x48.png"},{"revision":"a268ae86c2ba1ab9c8d2db07beb68e6d","url":"img/icons/android-72x72.png"},{"revision":"2662dac2850c26228fa2f1c4c0f10050","url":"img/icons/android-96x196.png"},{"revision":"bffe6e67235bdc2680ae4b975b7908f2","url":"img/icons/apple-touch-icon-180x180.png"},{"revision":"a8783dc49e5078e603caf1c7cce600a5","url":"img/icons/favicon-16x16.png"},{"revision":"f228e8e576e80406866447e3aa057173","url":"img/icons/favicon-32x32.png"},{"revision":"588120785afa8a58cb791933490341a2","url":"img/icons/favicon.ico"},{"revision":"2acdbfae2d6005e3fe98f98b078687e4","url":"img/icons/pwa-192x192.png"},{"revision":"b8551a6173d2874b72b5f72b498079e0","url":"img/icons/pwa-512x512.png"},{"revision":"07a88b0d765ff8fa9ddec927ae1ed830","url":"img/icons/tile150x150.png"},{"revision":"dc672a34b21267670184efb4bf0256af","url":"img/icons/tile310x150.png"},{"revision":"cd30f02e75d4c07666b39793af416750","url":"img/icons/tile310x310.png"},{"revision":"03470c9cd3c59fce351817b8be11d4b2","url":"img/icons/tile70x70.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"5bbccebc4ec6d07c4dda7c6e17e05255","url":"img/pwa-demo.png"},{"revision":"055567078a2535cde0d703cb0c5c4171","url":"img/pwa-offline.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"50dcfd01733e212dbc0d282202f1162c","url":"img/windows-python-path.png"},{"revision":"48fb876a720892e0f1a66501e2e5dcbe","url":"img/zeuz-logo.png"},{"revision":"7f89ba1dbd1f24a180557454f8511cd8","url":"img/zeuz-node-installer.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){void 0}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);