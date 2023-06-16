(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(162)),o={id:"element-detection",title:"Element detection (Web + Mobile)",sidebar_label:"Element detection"},s={unversionedId:"element-detection",id:"element-detection",isDocsHomePage:!1,title:"Element detection (Web + Mobile)",description:"For selenium-appium actions, we have several supports for locating an element. Such as you can provide",source:"@site/docs/element-detection.md",slug:"/element-detection",permalink:"/docs/element-detection",version:"current",sidebar_label:"Element detection",sidebar:"docs",previous:{title:"Loop",permalink:"/docs/loop"},next:{title:"Add new actions",permalink:"/docs/add-new-actions"}},c=[],l={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For selenium-appium actions, we have several supports for locating an element. Such as you can provide "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Parent parameter, child parameter "),Object(i.b)("li",{parentName:"ol"},"Sibling parameter"),Object(i.b)("li",{parentName:"ol"},"Index"),Object(i.b)("li",{parentName:"ol"},"Element parameter vs Unique parameter"),Object(i.b)("li",{parentName:"ol"},"Allow hidden"),Object(i.b)("li",{parentName:"ol"},"Asterisk sign ","*"," and"),Object(i.b)("li",{parentName:"ol"},"Android-IOS separator sign |","*","|"),Object(i.b)("li",{parentName:"ol"},"Optional action"),Object(i.b)("li",{parentName:"ol"},"Bypass action")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<div id="parent">\n    <div id="sibling1"></div>\n    <div id="sibling2"></div>\n</div>\n')),Object(i.b)("p",null,"here, first element is parent of both sibling elements inside its parenthesis. sibling1 and sibling2 are child parameter for the parent"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. Parent parameter:")," To get an idea about child and parent parameter go to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://demo.zeuz.ai/web/level/one/actions/web_level_one_action_click_by_parent"}),"demo parent webpage")),Object(i.b)("p",null,Object(i.b)("img",{src:n(370).default})),Object(i.b)("p",null,"In this link, you will find two ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Button")),"s with same html properties. So to locate and click them uniquely we need to provide parent\nparameter here as they have separate parents."),Object(i.b)("p",null,Object(i.b)("img",{src:n(371).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Sibling parameter:")," To get an idea about sibling parameter go to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://demo.zeuz.ai/web/level/one/actions/web_level_one_action_click_by_sibling"}),"demo sibling webpage")),Object(i.b)("p",null,Object(i.b)("img",{src:n(372).default})),Object(i.b)("p",null,"In this link, you will find two ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Button1")),"s with same html properties. Their parents are different but have same properties.\nSo to locate and click them uniquely we need to provide sibling parameter here as we can see siblings have different identifiers."),Object(i.b)("p",null,Object(i.b)("img",{src:n(373).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"3. Index:")," In the above cases where different web elements have the same identifiers we can also use ",Object(i.b)("strong",{parentName:"p"},"index"),". Suppose you want\nto click the first ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Button"))," then you need to provide index = 0."),Object(i.b)("p",null,Object(i.b)("img",{src:n(374).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"4. Element parameter vs Unique parameter:")," Element parameter finds all the elements with the given identifiers. More specifically, it\ntakes all the identifiers provided in the dataset and make an Xpath and then find all the elements by Xpath. This is comperatively a slower\nprocess as it will find all the elements through out the page. When you are not sure that your dataset will identify only one element use\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Element parameter")),"."),Object(i.b)("p",null,"Whereas unique parameter will always return the first item with that identifier and will stop searching the whole page when it gets the\nfirst element. So its faster than Element parameter. When you are sure that your dataset will find only one element or you want to work\nwith the first element you can provide ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Unique parameter")),". You will get the element faster. No ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"parent, sibling, child, index, allow\nhidden"))," are applicable for Unique parameter."),Object(i.b)("p",null,"For example, in this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://demo.zeuz.ai/web/level/one/scenerios/login"}),"demo login")),Object(i.b)("p",null,Object(i.b)("img",{src:n(375).default})),Object(i.b)("p",null,"We know, there is only one ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Sign in")),' button in this webpage with id="signin_id". Similarly, There is only one ',Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"User Name")),"\ntextbox and one ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Password"))," textbox with unique id. So we dont need any parent/chiled/sibling/index here\nand simply use ",Object(i.b)("strong",{parentName:"p"},"Unique parameter")," instead of ",Object(i.b)("strong",{parentName:"p"},"Element parameter")),Object(i.b)("p",null,Object(i.b)("img",{src:n(376).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"5. Allow hidden:")," By default we always block all hidden elements found and do not return it because hidden elements are generally not\ninterectable. But if you have any exceptional scenario and want to interect with hidden elements you can say\n",Object(i.b)("strong",{parentName:"p"},"[allow hidden, optional option, yes]")," for that action. Suppose, there is a web element as bellow"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<div class="cover" style="display: none;">Find me out. I am not visible</div>\n')),Object(i.b)("p",null,'we want to capture the text value of the element "Find me out. I am not visible". We can do that by this way,'),Object(i.b)("p",null,Object(i.b)("img",{src:n(377).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"6. Asterisk(","*","):")," If you want to set any partial value you can add ","*"," sign before the Attribute name in the dataset. Suppose,\nin the earlier example of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Sign in"))," button we can add ","*",'text = "Sign" instead of id = "signin_id". In case a part of\ntext is dynamic so the identifier of that element is static part of the text and so you want to use partial text as identifier\nor dont know whether there is spaces at end or starting you can search with the partial text.'),Object(i.b)("p",null,Object(i.b)("img",{src:n(378).default}),"\n",Object(i.b)("strong",{parentName:"p"},"Double Asterisk(","*","*",")")," can be used before attribute name in action if you want to search the value partially & also\nin a case-insensitive way . In the earlier example of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Sign in"))," button we can add ",Object(i.b)("inlineCode",{parentName:"p"},'**text = "sign"'),". Though our given value of text is in lowercase but it\ncan locate the element as we are using double asterisk. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"7. Android-IOS separator |","*","| :")," We know Android and IOS has different method of locating an element but we can locate and perform\nan action with the same testcase just need to add a separator sign |","*","| and no need to write seperate testcases for Android and IOS."),Object(i.b)("p",null,"For example, in an app we have a menu button and we want to click it. the locators for android and IOS for that button is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'Android: resource-id="toolbar_menu_button"\nIOS: label="common.burger"\n')),Object(i.b)("p",null,"We will write the dataset as below,"),Object(i.b)("p",null,Object(i.b)("img",{src:n(379).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"8. Optional Action:"),' Optional action is not only for selenium and appium actions but also for common, windows, rest api actions.\nIt is used when an action may fail but we want the step to be passed then we can convert that action to optional action. To do that\nwe can convert "selenium action" to "selenium optional action" at the middle cell of the last row. For example, we switched to a nested\niframe and it has a bug in an element. We will try click it but if it raises error we dont want the step to fail.'),Object(i.b)("p",null,Object(i.b)("img",{src:n(380).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"9. Bypass Action:")," Bypass action is not only for selenium and appium actions but also for common, windows, rest api actions. Bypass\nactions are used at the top of a step. This action is bypassed at first and the remaining actions are executed. If any error raises at\nany point only then the bypass actions are executed and then the actions in which errors occured are executed again."),Object(i.b)("p",null,Object(i.b)("img",{src:n(381).default})))}p.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},370:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic1-f7424295f73dfda3fc54ae9126e27d6c.jpg"},371:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic2-21013d5a9bda89845126ffdc2fb63f6e.jpg"},372:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic3-b393e581ab7142b53916efad6b3ef1db.jpg"},373:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic4-832e1201facfaeb39a4664a94915bf6c.jpg"},374:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic5-c2d48f2233977332c49b035063e938c3.jpg"},375:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic6-389351f98902d79c64f7bee49cd32cbf.jpg"},376:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic7-19a69c2793bda0ae0df3af54365d4d29.jpg"},377:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic8-8640f94ff3be5c2b702b023d131283b9.jpg"},378:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic9-340a99e6780879f60a5e27d288c57d3e.jpg"},379:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic10-65c4de33064a90fe88862e9d91d416bb.jpg"},380:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic11-0d83400ee4f72258bacfc11867364a51.jpg"},381:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pic12-9152d4f7b4a5342c83d34e5c9be36df5.jpg"}}]);