(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(189)),l={id:"zeuz-node-changelogs",title:"ZeuZ Node Changelogs",sidebar_label:"Changelogs"},i={unversionedId:"zeuz-node-changelogs",id:"zeuz-node-changelogs",isDocsHomePage:!1,title:"ZeuZ Node Changelogs",description:"Version: 12.01",source:"@site/docs\\zeuz-node-changelogs.md",slug:"/zeuz-node-changelogs",permalink:"/docs/zeuz-node-changelogs",version:"current",sidebar_label:"Changelogs",sidebar:"docs",previous:{title:"Database actions",permalink:"/docs/actions-database"},next:{title:"ZeuZ Server",permalink:"/docs/zeuz-server"}},c=[{value:"Version: 12.01",id:"version-1201",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"version-1201"},"Version: 12.01"),Object(a.b)("p",null,"Release date: ",Object(a.b)("strong",{parentName:"p"},"16th July, 2020")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[NEW]"," Webdriver auto updater script (double click to run the script and it'll\nautomatically download all the available drivers and place them in PATH properly)"),Object(a.b)("li",{parentName:"ul"},"[NEW]"," Python module auto installer (will install missing modules automatically)"),Object(a.b)("li",{parentName:"ul"},"[NEW]",' ZeuZ CLI (Inside "ZeuZ Node > Apps > zeuz-cli" folder)\nfor CLI based deployment (useful in CI/CD)'),Object(a.b)("li",{parentName:"ul"},"[NEW]"," Limit log upload to 2k (except for Warning and Errors).\nIf more than 2k logs, write to local log file. (paired with server-side changes,\nwe got reports of Test Automation run speed up from 8-9 hours to ~1 hours)"),Object(a.b)("li",{parentName:"ul"},"[NEW]"," Allow re-installation of android apk"),Object(a.b)("li",{parentName:"ul"},"[NEW][ACTION]"," Read from excel (read from single cell, multiple cell, rows, columns)"),Object(a.b)("li",{parentName:"ul"},"[NEW][ACTION]"," Screenshot for Mobile (Appium)"),Object(a.b)("li",{parentName:"ul"},"[NEW][ACTION]"," Screenshot for Web (with full page screenshot)"),Object(a.b)("li",{parentName:"ul"},"[NEW][ACTION]",' "Mouse click"'),Object(a.b)("li",{parentName:"ul"},"[UPD][ACTION]"," Improve file download action and allow headers"),Object(a.b)("li",{parentName:"ul"},"[UPD][ACTION]"," Desktop Automation log improvements"),Object(a.b)("li",{parentName:"ul"},"[FIX][ACTION]",' "If element exists" action fix and improvements'),Object(a.b)("li",{parentName:"ul"},"[FIX][ACTION]"," Remove irrelevant warnings for old style loop/conditional action"),Object(a.b)("li",{parentName:"ul"},"[FIX]",' "Upload log on fail" option not working in Node'),Object(a.b)("li",{parentName:"ul"},"[FIX]"," Path related fixes"),Object(a.b)("li",{parentName:"ul"},"[REMOVED]"," Detect foreground app in android")))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);