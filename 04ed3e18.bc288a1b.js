(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,f=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";var r=n(0),i=n(22);t.a=function(){const e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},107:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(15),a=n(109),c=n(11);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(110),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,{isNavLink:n,to:b,href:p,activeClassName:d,"data-noBrokenLinkCheck":f}=e,m=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:O}=Object(u.b)(),v=Object(r.useContext)(s),h=b||p,w=void 0!==h?(e=>e.startsWith("/"))(j=h)?O(j):h:void 0;var j;const y=Object(a.a)(w),g=Object(r.useRef)(!1),x=n?o.e:o.c,N=c.a.canUseIntersectionObserver;let S;Object(r.useEffect)(()=>(!N&&y&&window.docusaurus.prefetch(w),()=>{N&&S&&S.disconnect()}),[w,N,y]);const E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,k=!w||!y||E;return w&&y&&!E&&!f&&v.collectLink(w),k?i.a.createElement("a",Object.assign({href:w},!y&&{target:"_blank",rel:"noopener noreferrer"},m)):i.a.createElement(x,Object.assign({},m,{onMouseEnter:()=>{g.current||(window.docusaurus.preload(w),g.current=!0)},innerRef:e=>{var t,n;N&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(w)},S=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())})}),S.observe(t))},to:w},n&&{activeClassName:d}))}},109:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},110:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(106),i=n(109);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=!n.startsWith(t)?t+n.replace(/^\//,""):n;return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),o=(n(0),n(105)),a=n(107),c={id:"actions-mobile",title:"Mobile Actions"},s={unversionedId:"actions-mobile",id:"actions-mobile",isDocsHomePage:!1,title:"Mobile Actions",description:"- Drivers: Appium, Selenium (hybrid apps, iOS Safari)",source:"@site/docs\\actions-mobile.md",permalink:"/docs/actions-mobile",sidebar:"docs",previous:{title:"Web Actions",permalink:"/docs/actions-web"},next:{title:"REST/API Actions",permalink:"/docs/actions-rest-api"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Examples",id:"examples",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Hybrid Apps (Web view)",id:"hybrid-apps-web-view",children:[]},{value:"Browser Automation",id:"browser-automation",children:[]}]}],l={rightToc:u};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Drivers"),": Appium, Selenium (hybrid apps, iOS Safari)")))),Object(o.b)("p",null,"These actions are used to automate mobile applications and browsers.\nHybrid test case for hybrid applications, is a unique feature of Zeuz\nNode which allows you to write one test case that can automate both\nAndroid and iOS apps without having to write two sets of test cases\nfor each platform. Almost all the actions have the abiity to act as a\nhybrid action that can run on both Android and iOS."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"TBD."),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"TBD."),Object(o.b)("h3",{id:"hybrid-apps-web-view"},"Hybrid Apps (Web view)"),Object(o.b)("p",null,"TBD."),Object(o.b)("h3",{id:"browser-automation"},"Browser Automation"),Object(o.b)(a.a,{to:"/docs/actions-web#ios-safari",mdxType:"Link"},"Safari iOS")," automation is acheived through Selenium.")}b.isMDXComponent=!0}}]);