(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},u),{},{components:n})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},177:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},178:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),c=n(177),i=n(12);const s=Object(a.createContext)({collectLink:()=>{}});var u=n(179),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":f}=e,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]);const{withBaseUrl:h}=Object(u.b)(),g=Object(a.useContext)(s),v=p||b,j=Object(c.a)(v),y=null==v?void 0:v.replace("pathname://",""),w=void 0!==y?(e=>e.startsWith("/"))(N=y)?h(N):N:void 0;var N;const k=Object(a.useRef)(!1),P=n?o.e:o.c,x=i.a.canUseIntersectionObserver;let E;Object(a.useEffect)((()=>(!x&&j&&window.docusaurus.prefetch(w),()=>{x&&E&&E.disconnect()})),[w,x,j]);const T=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,R=!w||!j||T;return w&&j&&!T&&!f&&g.collectLink(w),R?r.a.createElement("a",Object.assign({href:w},v&&!j&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(P,Object.assign({},O,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:e=>{var t,n;x&&e&&j&&(t=e,n=()=>{window.docusaurus.prefetch(w)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:w||""},n&&{isActive:m,activeClassName:d}))}},179:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(24),r=n(177);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,a)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},304:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-3ca7d12a8c3f28eee5996615466dec94.png"},305:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-ebd7557dddab5336e398af5d247a9ea3.png"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-fea064c13bb4dd733c8653a9cad2d241.png"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-6a7e4803d85fb1102dab451bcfc6857d.png"},308:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-ae48c9c47108cc05b299100e4206713c.png"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-6215b171501dc6dac1be305a4f273034.png"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-4a674df5307cc733cc6b192b48ed9619.png"},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-f235c6722e70b10a269b86ff11462d64.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(175)),c=n(178),i={id:"5-runtime-params",title:"5. Runtime Parameters"},s={unversionedId:"guide/5-runtime-params",id:"guide/5-runtime-params",isDocsHomePage:!1,title:"5. Runtime Parameters",description:"Your organization have two different servers - a QA server that runs locally and",source:"@site/docs\\guide\\5-runtime-params.md",slug:"/guide/5-runtime-params",permalink:"/docs/guide/5-runtime-params",version:"current",sidebar:"docs",previous:{title:"4. Debugging",permalink:"/docs/guide/4-debugging"},next:{title:"How to setup iOS for Automation",permalink:"/docs/ios-setup"}},u=[],l={rightToc:u};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your organization have two different servers - a QA server that runs locally and\na Production server that runs on the publicly available internet. You may\ndevelop all your test cases with the local server address. But then your\norganization decided that the test cases need to be run on the production too to\nmake sure that the production server is working as expected. Now, do you want to\ngo and modify all the test cases to update the server address to the Production\nserver? Of course not, and Zeuz has a feature perfectly suited for this type of\ncircumstances."),Object(o.b)("p",null,"If you have a value that you want to control/change every time you deploy your\ntest cases, you can use ",Object(o.b)("strong",{parentName:"p"},"Runtime parameters")," in Zeuz for this. Runtime\nparameters are nothing but variables with a fixed set of values which you can\ncontrol during deployment."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To create a runtime parameter, go to ",Object(o.b)("em",{parentName:"p"},"Testing > Run Tests")," page in Zeuz server.\nClick on the ",Object(o.b)("strong",{parentName:"p"},"MORE")," button and then click on the ",Object(o.b)("strong",{parentName:"p"},"RUN PARAMETER")," button."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:n(304).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next, click on the ",Object(o.b)("strong",{parentName:"p"},"CREATE RUNTIME PARAMETER")," button and provide a name that\nyou would like."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:n(305).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on the the ",Object(o.b)("strong",{parentName:"p"},"+")," symbol and click ",Object(o.b)("strong",{parentName:"p"},"OK")," to confirm."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:n(306).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on the newly created runtime parameter and then click on ",Object(o.b)("strong",{parentName:"p"},"Add Name"),".\nThis will allow you to give a name to a value. Note that, a runtime parameter\ncan have multiple values. The name that you set here is just a human friendly\nname so that you can remember later on, what this particular value means. If\nyou do not yet understand what this means, please proceed to the next steps.\nBy the time you reach the end, you should understand."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{src:n(307).default})),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{src:n(308).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next, click on the newly created name and click on the ",Object(o.b)("strong",{parentName:"p"},"Add Sub Field"),"\nbutton. Put the actual value here and press ",Object(o.b)("strong",{parentName:"p"},"OK"),"."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{src:n(309).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now, go to the ",Object(o.b)("em",{parentName:"p"},"Testing > Run Test")," page again and you should see your newly\ncreated runtime parameter show up."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{src:n(310).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then you can use the runtime parameter like a normal variable as described ",Object(o.b)(c.a,{to:"/docs/variables-and-indexed-access",mdxType:"Link"},"\nhere"),"."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{src:n(311).default})))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can put a valid JSON string as the value for runtime parameters and they'll\nbe automatically converted to the appropriate data type. You can access the\nvalues using the variable syntax afterwards."))))}p.isMDXComponent=!0}}]);