(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),O=o,m=p["".concat(r,".").concat(O)]||p[O]||u[O]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},133:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},134:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(11),r=n(133),l=n(12),c=Object(o.createContext)({collectLink:function(){}}),b=n(135),s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,n,p,u=e.isNavLink,O=e.to,m=e.href,d=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(b.b)().withBaseUrl,v=Object(o.useContext)(c),N=O||m,w=Object(r.a)(N),y=null==N?void 0:N.replace("pathname://",""),L=void 0!==y?function(e){return e.startsWith("/")}(n=y)?g(n):n:void 0,k=Object(o.useRef)(!1),P=u?i.e:i.c,C=l.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!C&&w&&window.docusaurus.prefetch(L),function(){C&&p&&p.disconnect()}}),[L,C,w]);var x=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,E=!L||!w||x;return L&&w&&!x&&!f&&v.collectLink(L),E?a.a.createElement("a",Object.assign({href:L},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(P,Object.assign({},h,{onMouseEnter:function(){k.current||(window.docusaurus.preload(L),k.current=!0)},innerRef:function(e){var t,n;C&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(L)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:L||""},u&&{isActive:j,activeClassName:d}))}},135:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(24),a=n(133);function i(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,r=i.forcePrependBaseUrl,l=void 0!==r&&r,c=i.absolute,b=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic2-3a1d01d747112ceec3fd1570c685f41b.jpg"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic1-93ecbf4bf0b46cd3c7f7e2c3b6a1da2d.jpg"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic3-813d85225543346618e08f979e753747.jpg"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic4-e32f173a8ace1197f42a92af6076c934.jpg"},218:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic5-6dd28855e04a727ff48256e00908b686.jpg"},219:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic6-773ba2079ea93f7b970b42a33b0b047e.jpg"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),i=(n(0),n(131)),r=(n(134),{id:"loop",title:"Loop"}),l={unversionedId:"loop",id:"loop",isDocsHomePage:!1,title:"Loop",description:"Loops are a type of flow control actions in Zeuz Node that allows you to",source:"@site/docs\\loop.md",slug:"/loop",permalink:"/docs/loop",version:"current",sidebar:"docs",previous:{title:"Calling method on variable",permalink:"/docs/Calling-method-on-variable"},next:{title:"Element detection (Web + Mobile)",permalink:"/docs/element-detection"}},c=[],b={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Loops are a type of flow control actions in Zeuz Node that allows you to\nexecute one or more actions multiple times."),Object(i.b)("p",null,"We will see following loop scenarios-"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Loop through a single list (with "',Object(i.b)("em",{parentName:"li"},"For Loop"),'" action)'),Object(i.b)("li",{parentName:"ol"},'Loop through a single list (with "',Object(i.b)("em",{parentName:"li"},"While Loop"),'" action)'),Object(i.b)("li",{parentName:"ol"},'Loop through a 2 Dimensional list and break if condition matches (with "',Object(i.b)("em",{parentName:"li"},"For Loop"),'" action)'),Object(i.b)("li",{parentName:"ol"},"Call previous actions"),Object(i.b)("li",{parentName:"ol"},"Create List of actions"),Object(i.b)("li",{parentName:"ol"},"If else inside a Loop with step exit")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'1. Loop through a single list (with "',Object(i.b)("em",{parentName:"strong"},"For Loop"),'" action):')," We will now loop through a list with an easier approach"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pseudocode:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'Single_List = [1, "string", True, 2, 3]\nfor element in Single_List:\n    Print(element)\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Actions Used:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Save variable - number string list dictionary"),Object(i.b)("li",{parentName:"ol"},"For Loop"),Object(i.b)("li",{parentName:"ol"},"Log Info")),Object(i.b)("p",null,Object(i.b)("img",{src:n(214).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As Print statement (Action 3) is inside the Loop's parenthesis we have put 3 inside the Loop"),Object(i.b)("li",{parentName:"ul"},"element is a variable and to print the value of element we have used ZEUZ syntax %|element|%")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'2. Loop through a single list (with "',Object(i.b)("em",{parentName:"strong"},"While Loop"),'" action):')," We will loop through every element of a 1 Dimensional list and print all the values."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pseudocode:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'Single_List = [1, "string", True, 2, 3]\nLEN = len(Single_List)\ni = 0\nLoop "LEN" times:\n    Print(index i of Single_List = Single_List[i])\n    i = i + 1\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Actions Used:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Save variable - number string list dictionary"),Object(i.b)("li",{parentName:"ol"},"While Loop"),Object(i.b)("li",{parentName:"ol"},"Log Info"),Object(i.b)("li",{parentName:"ol"},"Math utility action")),Object(i.b)("p",null,Object(i.b)("img",{src:n(215).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As Print statement (Action 5) and i = i + 1 statement (Action 6) are inside the Loop's parenthesis we have put 5,6 in the run action row"),Object(i.b)("li",{parentName:"ul"},"i is a variable and Single_List is also a variable. To access the i th element of the Single_List we have used the ZEUZ syntax %|Single_List","[i]","|%")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'3. Loop through a 2 Dimensional list and break if condition matches (with "',Object(i.b)("em",{parentName:"strong"},"For Loop"),'" action):')," We will now loop through every element of a 2 dimensional list"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pseudocode:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"L = [[1,2],[3,4,4.5],[5,6]]\nfor sub_list in L:\n    for each in sub_list:\n        print(each)\n        if %|each|% == 4.5:\n            break both loop\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Actions Used:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Save variable - number string list dictionary"),Object(i.b)("li",{parentName:"ol"},"For Loop"),Object(i.b)("li",{parentName:"ol"},"Log Info")),Object(i.b)("p",null,Object(i.b)("img",{src:n(216).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the ",Object(i.b)("strong",{parentName:"li"},"Parenthesis")," and note that the nested loop is inside the parent loop. So we had to put ",Object(i.b)("strong",{parentName:"li"},"Action 3-4")," inside the parent loop"),Object(i.b)("li",{parentName:"ul"},'To break both loop when each == 4.5 we had to put "exit loop" row in both parent and child loop')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"4. Call previous actions:")," Suppose you have writen some actions and after certain actions you need those previously added actions again.\nIn this case instead of writing those actions again you can use Loop action to call the previous actions"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pseudocode:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Print(ACTION 1)\nPrint(ACTION 2)\nPrint(ACTION 3)\nPrint(ACTION 4)\nLoop 1 times:\n    Print(ACTION 1)\n    Print(ACTION 2)\n    Print(ACTION 4)\nPrint(ACTION 6)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Actions Used:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log Info"),Object(i.b)("li",{parentName:"ol"},"Loop")),Object(i.b)("p",null,Object(i.b)("img",{src:n(217).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"5. Create List of Actions:"),' Suppose you have too many click actions. You don\'t need to add all the actions. Just provide a list with a\n"Loop" and a "Click element" action.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pseudocode:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'go to "https://www.keynotesupport.com/internet/web-contact-form-example-checkboxes.shtml"\nall_actions = [\n    ["value", "desktop"],\n    ["value", "notebook"],\n    ["value", "netbook"],\n    ["value", "server"],\n    ["value", "other"],\n]\nfor action in all_actions:\n    Take attribute_name = %|action[0]|% data and attribute_value = %|action[1]|% and click it\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Actions Used:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to Webpage"),Object(i.b)("li",{parentName:"ol"},"Save variable - number string list dictionary"),Object(i.b)("li",{parentName:"ol"},"For Loop"),Object(i.b)("li",{parentName:"ol"},"Click element")),Object(i.b)("p",null,Object(i.b)("img",{src:n(218).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We are putting ",Object(i.b)("inlineCode",{parentName:"li"},"%|action[0]|%")," at the left and ",Object(i.b)("inlineCode",{parentName:"li"},"%|action[1]|%"),' at the right so on 1st iteration it will click the web element\nwith value="desktop" and on 2nd iteration it will click value="notebook" and so on\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"6. If else inside a Loop with step exit:")," In this scenario we will,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'go to "',Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://demo.zeuz.ai%22"}),'https://demo.zeuz.ai"')),Object(i.b)("li",{parentName:"ul"},'Click some buttons and each time we will check if "ZeuZ Features" disappears or not'),Object(i.b)("li",{parentName:"ul"},'if "ZeuZ Features" is not found within 10 seconds of searching then ',Object(i.b)("strong",{parentName:"li"},"break the loop")," and ",Object(i.b)("strong",{parentName:"li"},"Fail the step"))),Object(i.b)("p",null,Object(i.b)("img",{src:n(219).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Running ",Object(i.b)("inlineCode",{parentName:"li"},"action 2"),' every time after action 3,4,5,6 to check if "ZeuZ Features" exists'),Object(i.b)("li",{parentName:"ul"},'If "ZeuZ Features" does not exist then Red colored ',Object(i.b)("inlineCode",{parentName:"li"},"fail")," means stop executing any other actions and fail the step immediately")))}s.isMDXComponent=!0}}]);