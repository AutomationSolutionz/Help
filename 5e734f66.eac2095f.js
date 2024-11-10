(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(193)),i=(n(197),{id:"add-new-actions",title:"Add new actions"}),c={unversionedId:"add-new-actions",id:"add-new-actions",isDocsHomePage:!1,title:"Add new actions",description:"If any of the hundreds of different actions currently available still does not",source:"@site/docs\\add-new-actions.md",slug:"/add-new-actions",permalink:"/docs/add-new-actions",version:"current",sidebar:"docs",previous:{title:"Element detection (Web + Mobile)",permalink:"/docs/element-detection"},next:{title:"Custom driver",permalink:"/docs/custom-driver"}},l=[],s={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If any of the hundreds of different actions currently available still does not\nsuit your needs, that's okay. You can easily extend ZeuZ Node by adding new\nactions to it or even better, contribute to our repository so that everyone has\naccess to them! Follow this guide to learn how you can create a new action very\neasily."),Object(r.b)("p",null,"Our built in actions are called sequential actions."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Decide the type of action")),Object(r.b)("p",{parentName:"li"},'You first need to decide which category your new action will belong to. For\nexample, if you\'re trying to write an action for web automation, it should go\ninto the Web/Selenium category. Find the "action_declarations"\ndirectory/folder inside "ZeuZ Node > Framework > Sequential_Actions".'),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",{src:n(441).default})),Object(r.b)("p",{parentName:"li"}," Each of the files listed above are a mapping of the following type of actions:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mobile actions (Android/iOS) > appium.py"),Object(r.b)("li",{parentName:"ul"},"Web actions > selenium.py"),Object(r.b)("li",{parentName:"ul"},"Common (common to all categories) actions > common.py"),Object(r.b)("li",{parentName:"ul"},"REST API actions > rest.py"),Object(r.b)("li",{parentName:"ul"},"Desktop (Win/Linux/Mac) actions > desktop.py"),Object(r.b)("li",{parentName:"ul"},"Windows only actions > windows.py"),Object(r.b)("li",{parentName:"ul"},"Database actions > database.py")),Object(r.b)("p",{parentName:"li"},'In this guide, we\'ll write a simple common action that will just output the\nmessage "Hello, {your name here}" in the console. So, open the "common.py"\nfile and you\'ll see something like this:'),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",{src:n(442).default})),Object(r.b)("p",{parentName:"li"}," This is a list of all the available common actions. In each of these rows,\n",Object(r.b)("inlineCode",{parentName:"p"},"name")," defines the name of the action, ",Object(r.b)("inlineCode",{parentName:"p"},"function")," defines which function to\ncall in the code when this particular action is added. You can also see a\n",Object(r.b)("inlineCode",{parentName:"p"},"screenshot")," key, this defines the type of screenshot that this action should\nperform (take a screenshot of the desktop, mobile, the browser ui or none at\nall). This is where we'll declare our action. We'll come back to this file\nlater. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Write the action")),Object(r.b)("p",{parentName:"li"},'Time to write the actual code for the action! Common actions live in the\n"ZeuZ node > Framework > Built_In_Automation > Sequential_Actions >\ncommon_functions.py" file. All actions have the same code skeleton. Add the\nfollowing code to add our new ',Object(r.b)("inlineCode",{parentName:"p"},"hello_name")," action."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),' # The @logger decorator logs the entry and exit of the action as well\n # as its run time.\n @logger\n def hello_name(data_set):\n     # Every action is passed a `data_set` which is a 2d list of the action\n     # data that is input by the user.\n\n     # All actions define this at the top so that it can be passed to the\n     # logger function to print which function/module produced a particular\n     # log item.\n     sModuleInfo = inspect.currentframe().f_code.co_name + " : " + MODULE_NAME\n\n     try:\n         name = None\n\n         for left, mid, right in data_set:\n             left = left.lower()\n             if "name" in left:\n                 name = right.strip()\n\n         if name is None:\n             CommonUtil.ExecLog(\n                 sModuleInfo,\n                 "name row is not provided",\n                 3,\n             )\n             return "failed"\n\n         # Log to the console. This log will also be sent to the server\n         # automatically when the test run is completed.\n         CommonUtil.ExecLog(\n             sModuleInfo,\n             "Hello, %s" % name,\n             1,\n         )\n\n         # If you noticed the 1 and 3, these are log levels.\n         # 1 - Passed\n         # 2 - Warning\n         # 3 - Error\n         # There are a few others, you can check the `ExecLog` function\n         # to see more of them.\n\n         return "passed" # Action executed successfully.\n     except:\n         # Either of the following can be returned to indicate failure.\n         # In the case of the lattter, it\'ll also print the exception\n         # message to the console which is sometimes beneficial to see\n         # for the tester.\n\n         # return "failed"\n         return CommonUtil.Exception_Handler(sys.exc_info())\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Declare the action")),Object(r.b)("p",{parentName:"li"},'Next, you\'ll have to declare the action in "common.py" file mentioned in step\n#1. Add the following at the very end of the ',Object(r.b)("inlineCode",{parentName:"p"},"declarations")," tuple:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'{ "name": "hello name", "function": "hello_name", "screenshot": "none" },\n')),Object(r.b)("p",{parentName:"li"},"This will make our action available to execute when we add them from the\nserver.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Execute action")),Object(r.b)("p",{parentName:"li"},"Now that you have written the action, it's time to run it and see how it\nworks. Create a new test case and go to the steps tab. From there, add any\naction. Modify (add/remove) rows to make the action look like the following:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:n(443).default})),Object(r.b)("p",{parentName:"li"},"Save the step and run your test case to see if its producing the output you\nexpected."))))}u.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},197:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var o=n(24),a=n(195);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},441:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/action-declarations-d3f7f4bb38d613b44baeca563c25286f.png"},442:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/common-actions-4292c176e0e2015fef5b13b95993fc8a.png"},443:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/action-run-ceea0de9e6c0f4ad07a4d9f2eaa926ef.png"}}]);