(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||c;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";var r=n(0),o=n(22);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},108:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=n(15),a=n(110),i=n(11);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(111),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:m,"data-noBrokenLinkCheck":f}=e,d=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:O}=Object(u.b)(),v=Object(r.useContext)(s),j=p||b,y=void 0!==j?(e=>e.startsWith("/"))(h=j)?O(h):j:void 0;var h;const w=Object(a.a)(y),g=Object(r.useRef)(!1),x=n?c.e:c.c,N=i.a.canUseIntersectionObserver;let k;Object(r.useEffect)(()=>(!N&&w&&window.docusaurus.prefetch(y),()=>{N&&k&&k.disconnect()}),[y,N,w]);const E=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,C=!y||!w||E;return y&&w&&!E&&!f&&v.collectLink(y),C?o.a.createElement("a",Object.assign({href:y},!w&&{target:"_blank",rel:"noopener noreferrer"},d)):o.a.createElement(x,Object.assign({},d,{onMouseEnter:()=>{g.current||(window.docusaurus.preload(y),g.current=!0)},innerRef:e=>{var t,n;N&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(y)},k=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())})}),k.observe(t))},to:y},n&&{activeClassName:m}))}},110:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},111:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(107),o=n(110);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const a=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),c=(n(0),n(106)),a=n(108),i={id:"actions-common",title:"Common Actions"},s={unversionedId:"actions-common",id:"actions-common",isDocsHomePage:!1,title:"Common Actions",description:"- Drivers: None",source:"@site/docs/actions-common.md",permalink:"/docs/actions-common",sidebar:"docs",previous:{title:"Loop",permalink:"/docs/loop"},next:{title:"Web Actions",permalink:"/docs/actions-web"}},u=[{value:"Examples",id:"examples",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Drivers"),": None"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"External Libraries"),": opencv2(image processing), xlwings(excel)")))),Object(c.b)("p",null,"Common actions, as their name implies, are actions that are common throughout every platform. You can use these actions in any context - ",Object(c.b)(a.a,{to:"/docs/actions-web",mdxType:"Link"},"Web"),", ",Object(c.b)(a.a,{to:"/docs/actions-mobile",mdxType:"Link"},"Mobile"),", ",Object(c.b)(a.a,{to:"/docs/actions-rest-api",mdxType:"Link"},"REST/API"),", etc."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"TBD."))}p.isMDXComponent=!0}}]);