(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(189)),i={id:"ip-url-whitelist",title:"Whitelist URLs/IPs for node"},c={unversionedId:"ip-url-whitelist",id:"ip-url-whitelist",isDocsHomePage:!1,title:"Whitelist URLs/IPs for node",description:"Node",source:"@site/docs\\ip-url-whitelist.md",slug:"/ip-url-whitelist",permalink:"/docs/ip-url-whitelist",version:"current",sidebar:"docs",previous:{title:"ZeuZ Node",permalink:"/docs/zeuz-node"},next:{title:"EasyOCR Installation",permalink:"/docs/how-tos/easy-ocr-installation"}},l=[{value:"Node",id:"node",children:[]},{value:"Server",id:"server",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"node"},"Node"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Chrome Driver (version > 114)"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"googlechromelabs.github.io  "),Object(a.b)("li",{parentName:"ol"},"edgedl.me.gvt1.com"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"MS Edge Driver"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"msedgedriver.azureedge.net"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Geckodriver (Firefox)"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"api.github.com  "),Object(a.b)("li",{parentName:"ol"},"github.com"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Python modules"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"pypi.org  "),Object(a.b)("li",{parentName:"ol"},"pypi.python.org  "),Object(a.b)("li",{parentName:"ol"},"files.pythonhosted.org")))),Object(a.b)("h3",{id:"server"},"Server"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Docker hub"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"auth.docker.io  "),Object(a.b)("li",{parentName:"ol"},"cdn.auth0.com  "),Object(a.b)("li",{parentName:"ol"},"login.docker.com  "),Object(a.b)("li",{parentName:"ol"},"hub.docker.com  "),Object(a.b)("li",{parentName:"ol"},"registry-1.docker.io  "),Object(a.b)("li",{parentName:"ol"},"production.cloudflare.docker.com"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"GitHub container registry"),":"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"ghcr.io (the primary domain for the registry)  "),Object(a.b)("li",{parentName:"ol"},"raw.githubusercontent.com (used for downloading container layers)"),Object(a.b)("li",{parentName:"ol"},"api.github.com (used for authentication and API calls)"),Object(a.b)("li",{parentName:"ol"},"dl.github.com (used for downloading other package assets)"),Object(a.b)("li",{parentName:"ol"},"gist.githubusercontent.com (used for potential gist-related content)"),Object(a.b)("li",{parentName:"ol"},"docker.pkg.github.com")))))}p.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||a;return r?o.a.createElement(d,c(c({ref:t},b),{},{components:r})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<a;b++)i[b]=r[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);