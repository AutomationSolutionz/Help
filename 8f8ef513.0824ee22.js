(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(129)),i=n(132),a={id:"actions-common",title:"Common Actions"},s={unversionedId:"actions-common",id:"actions-common",isDocsHomePage:!1,title:"Common Actions",description:"- Drivers: None",source:"@site/docs/actions-common.md",slug:"/actions-common",permalink:"/docs/actions-common",version:"current",sidebar:"docs",previous:{title:"Custom Driver",permalink:"/docs/custom-driver"},next:{title:"Web Actions",permalink:"/docs/actions-web"}},u=[{value:"Examples",id:"examples",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Drivers"),": None"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"External Libraries"),": opencv2(image processing), xlwings(excel)")))),Object(c.b)("p",null,"Common actions, as their name implies, are actions that are common throughout every platform. You can use these actions in any context - ",Object(c.b)(i.a,{to:"/docs/actions-web",mdxType:"Link"},"Web"),", ",Object(c.b)(i.a,{to:"/docs/actions-mobile",mdxType:"Link"},"Mobile"),", ",Object(c.b)(i.a,{to:"/docs/actions-rest-api",mdxType:"Link"},"REST/API"),", etc."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"TBD."))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||c;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},132:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=n(11),i=n(131),a=n(12),s=Object(r.createContext)({collectLink:function(){}}),u=n(133),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,f=e.to,m=e.href,d=e.activeClassName,v=e.isActive,O=e["data-noBrokenLinkCheck"],j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),y=Object(u.b)().withBaseUrl,h=Object(r.useContext)(s),w=f||m,g=Object(i.a)(w),x=null==w?void 0:w.replace("pathname://",""),N=void 0!==x?function(e){return e.startsWith("/")}(n=x)?y(n):n:void 0,k=Object(r.useRef)(!1),C=b?c.e:c.c,E=a.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&g&&window.docusaurus.prefetch(N),function(){E&&p&&p.disconnect()}}),[N,E,g]);var P=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,T=!N||!g||P;return N&&g&&!P&&!O&&h.collectLink(N),T?o.a.createElement("a",Object.assign({href:N},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},j)):o.a.createElement(C,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;E&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(N)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:N||""},b&&{isActive:v,activeClassName:d}))}},133:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(24),o=n(131);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,a=void 0!==i&&i,s=c.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);