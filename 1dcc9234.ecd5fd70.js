(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||s;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tc-debug-icon-1685b16ad4ac739cfb66e892f9857d87.png"},256:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/select-machine-icon-f93e396924fc55821082eef9b289bccf.png"},257:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/select-all-steps-381e83af3565945338f929712c42a20b.png"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/selected-steps-7b7f511c4c369d1980502a8b63ca573a.png"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debug-button-0473f0611b7a77466f263a2e6cb88930.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),s=(n(0),n(158)),o={id:"how-to-debug-a-test-case",title:"How to Debug a Test Case"},c={unversionedId:"how-tos/how-to-debug-a-test-case",id:"how-tos/how-to-debug-a-test-case",isDocsHomePage:!1,title:"How to Debug a Test Case",description:"Description",source:"@site/docs\\how-tos\\how-to-debug-a-test-case.md",slug:"/how-tos/how-to-debug-a-test-case",permalink:"/docs/how-tos/how-to-debug-a-test-case",version:"current",sidebar:"docs",previous:{title:"5. Runtime Parameters",permalink:"/docs/guide/5-runtime-params"},next:{title:"How to Deploy a Test Case",permalink:"/docs/how-tos/how-to-deploy-a-test-case"}},i=[{value:"Description",id:"description",children:[{value:"What is Debugging in automated test cases and Why is it necessary?",id:"what-is-debugging-in-automated-test-cases-and-why-is-it-necessary",children:[]}]},{value:"Steps",id:"steps",children:[]}],l={rightToc:i};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("h3",{id:"what-is-debugging-in-automated-test-cases-and-why-is-it-necessary"},"What is Debugging in automated test cases and Why is it necessary?"),Object(s.b)("p",null,"Debugging in automated test cases is the process of identifying and removing errors from software applications using automated testing tools."),Object(s.b)("p",null,"Debugging is necessary because it helps to identify and fix defects in the system."),Object(s.b)("p",null,"Debugging is crucial for writing clean code, minimizing errors, and creating top-quality software as a result. Any successful program requires hours of debugging to make it behave as expected."),Object(s.b)("h2",{id:"steps"},"Steps"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Go from the ",Object(s.b)("strong",{parentName:"li"},"View/Edit Test Case")," page and click on the ",Object(s.b)("strong",{parentName:"li"},"DEBUG")," button.")),Object(s.b)("p",null,Object(s.b)("img",{src:n(255).default})),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Go to the ",Object(s.b)("strong",{parentName:"li"},"Debug Test Case")," page.  "),Object(s.b)("li",{parentName:"ol"},"Click on ",Object(s.b)("strong",{parentName:"li"},"Select Machine")," to select the required machine.  ")),Object(s.b)("p",null,Object(s.b)("img",{src:n(256).default})),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"There are ",Object(s.b)("strong",{parentName:"p"},"two")," types of step selection  ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Either select ",Object(s.b)("strong",{parentName:"p"},"All the steps")," of the test case or select any ",Object(s.b)("strong",{parentName:"p"},"Required steps")," that needs to be debug.  ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click to ",Object(s.b)("strong",{parentName:"p"},"Select All Steps")," for the selection of all steps."))),Object(s.b)("p",null,Object(s.b)("img",{src:n(257).default})),Object(s.b)("ol",{start:7},Object(s.b)("li",{parentName:"ol"},"For the debug of selected steps, click to select the required steps.")),Object(s.b)("p",null,Object(s.b)("img",{src:n(258).default})),Object(s.b)("ol",{start:8},Object(s.b)("li",{parentName:"ol"},"Click on the ",Object(s.b)("strong",{parentName:"li"},"Debug")," button.  ")),Object(s.b)("p",null,Object(s.b)("img",{src:n(259).default})))}b.isMDXComponent=!0}}]);