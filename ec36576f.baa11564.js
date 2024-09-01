(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(189)),i={id:"4-debugging",title:"4. Debugging"},c={unversionedId:"guide/4-debugging",id:"guide/4-debugging",isDocsHomePage:!1,title:"4. Debugging",description:"When you're creating test cases, you will naturally want to only test some",source:"@site/docs\\guide\\4-debugging.md",slug:"/guide/4-debugging",permalink:"/docs/guide/4-debugging",version:"current"},s=[],u={rightToc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you're creating test cases, you will naturally want to only test some\nspecific actions or steps in your test case. You don't want to run the whole\ntest case over and over just to check your incremntal changes. You also don't\nwant to pollute the Run History by unnecessarily running your full test case all\nthe time as this will mess up reporting. What you need in this case is\n\"Debugging\"!"),Object(a.b)("p",null,"Debugging in Zeuz is the process of selecting only some specific steps or\nactions to execute. This allows you to incrementally change and experiment with\ndifferent actions or values to see if it works for your test case."),Object(a.b)("p",null,"There are two types of debugging in Zeuz."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Debug ",Object(a.b)("strong",{parentName:"p"},"Steps"),":"),Object(a.b)("p",{parentName:"li"},"If you want to run some specific steps only, then you need to click on the\nDebug icon that's available in the Test Case edit page at the ",Object(a.b)("em",{parentName:"p"},"top right\ncorner"),"."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{src:n(666).default})),Object(a.b)("p",{parentName:"li"},"This will open the step debug page, where you can select the specific steps\nthat you want to debug."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{src:n(667).default}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Debug ",Object(a.b)("strong",{parentName:"p"},"Actions"),":"),Object(a.b)("p",{parentName:"li"},"If you want to run some specific actions only, then you will need to debug\nactions. To debug actions, click on the step where your actions are present\nand click on the Debug icon at the top of the action edit slider."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{src:n(668).default})),Object(a.b)("p",{parentName:"li"},"The action debug page is similar to the step debug page and works the same\nway. You can select the specific actions that you want to execute and click\non deploy."))))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),g=r,f=l["".concat(i,".").concat(g)]||l[g]||b[g]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},666:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-step-debug-558ff753a48739b463f9d1f9f498d454.png"},667:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-step-debug-page-4a0f4a5a4a37c8bdcfd52249fd66bb10.png"},668:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-action-debug-85cf7f3a19673414d5d17f4a6ec89c13.png"}}]);