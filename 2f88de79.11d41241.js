(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,b=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";var r=n(0),o=n(22);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},114:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(15),i=n(115),c=n(11);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(117),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:d,activeClassName:p,"data-noBrokenLinkCheck":b}=e,m=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:v}=Object(u.b)(),O=Object(r.useContext)(s),h=f||d,y=void 0!==h?(e=>e.startsWith("/"))(j=h)?v(j):h:void 0;var j;const g=Object(i.a)(y),w=Object(r.useRef)(!1),N=n?a.e:a.c,x=c.a.canUseIntersectionObserver;let C;Object(r.useEffect)(()=>(!x&&g&&window.docusaurus.prefetch(y),()=>{x&&C&&C.disconnect()}),[y,x,g]);const k=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,z=!y||!g||k;return y&&g&&!k&&!b&&O.collectLink(y),z?o.a.createElement("a",Object.assign({href:y},!g&&{target:"_blank",rel:"noopener noreferrer"},m)):o.a.createElement(N,Object.assign({},m,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(y),w.current=!0)},innerRef:e=>{var t,n;x&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(y)},C=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())})}),C.observe(t))},to:y},n&&{activeClassName:p}))}},115:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(113),o=n(115);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=!n.startsWith(t)?t+n.replace(/^\//,""):n;return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),a=(n(0),n(112)),i=n(114),c={id:"course-info",title:"Course Information",sidebar_label:"Information"},s={unversionedId:"course-info",id:"course-info",isDocsHomePage:!1,title:"Course Information",description:"This course guides you on how use to Zeuz Node from the very basics",source:"@site/docs\\course-info.mdx",permalink:"/docs/course-info",sidebar_label:"Information",sidebar:"docs",previous:{title:"Zeuz Server Changelogs",permalink:"/docs/zeuz-server-changelogs"},next:{title:"Course - Web",permalink:"/docs/course-web"}},u=[{value:"Install Zeuz Node",id:"install-zeuz-node",children:[]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This course guides you on how use to Zeuz Node from the very basics\nand also teaches you some of the best practises on different topics.\nAfter completing this course, you should be confident enough to jump\nright in and start automating complex scenarios or explore the vast\namount of actions available at your disposal from Zeuz Server."),Object(a.b)("p",null,"The course is divided into levels starting from Level 1. We advise you\nto start from Level 1 even if you have experience in automation. This\nwill let you gain confidence on how to use the different actions\ninstead of confusingly trying them out on your own."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"Course duration"),": ~1.5 hours"))),Object(a.b)("h3",{id:"install-zeuz-node"},"Install Zeuz Node"),Object(a.b)(i.a,{to:"/docs/zeuz-node-setup",mdxType:"Link"},"Zeuz Node installation instructions"))}f.isMDXComponent=!0}}]);