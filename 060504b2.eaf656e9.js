(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(h,s(s({ref:t},u),{},{components:n})):o.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(193)),i={id:"zeuz-node",title:"ZeuZ Node",sidebar_label:"Introduction"},s={unversionedId:"zeuz-node",id:"zeuz-node",isDocsHomePage:!1,title:"ZeuZ Node",description:"ZeuZ Node is an open source automated software testing platform. It can be used",source:"@site/docs\\zeuz-node.md",slug:"/zeuz-node",permalink:"/docs/zeuz-node",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Microsoft Entra ID / Azure Active Directory",permalink:"/docs/how-tos/admin/sso/sso-microsoft-entra-id"},next:{title:"Whitelist URLs/IPs for node",permalink:"/docs/ip-url-whitelist"}},c=[{value:"Actions",id:"actions",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Drivers",id:"drivers",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ZeuZ Node is an open source automated software testing platform. It can be used\nas a standalone test runner or as a library of hundreds of ready-made automated\nactions that handles many corner cases so that you don't have to fiddle around\nfor hours to figure out the solution to difficult to debug problems. Its written\nin ",Object(a.b)("inlineCode",{parentName:"p"},"python")," and runs on Windows, Mac and Linux. ZeuZ Node has the ability to\nautomate a variety of tests on a range of platforms. The open source nature of\nZeuZ Node and its open ended data interchange model means that you can easily\nextend it to fit almost any kind of scenario."),Object(a.b)("h2",{id:"actions"},"Actions"),Object(a.b)("p",null,"Actions are the basic building blocks of ZeuZ Node. You will use actions to\ncreate automated tests. You can think of each action as a single block. Multiple\nactions can be combined to create powerful automations that work across\ndifferent platforms - Web (Chrome/Firefox/Edge/Safari/...), Mobile\n(iOS/Android), Database (Postgres/MariaDB/MySQL/...), etc. There is no\nrestriction on the platform that you're running your actions on. For example,\nyou can combine actions from Web, Mobile, Database, REST API to create powerful\ntest cases. Example scenario:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Web: Log in to the dashboard that's only available on Desktops to perform a\ncertain action."),Object(a.b)("li",{parentName:"ol"},"Database: Verify that the action that you just performed is reflected in the\ndb."),Object(a.b)("li",{parentName:"ol"},"Mobile: Log in to mobile to see the latest update of the action that you just\nperformed."),Object(a.b)("li",{parentName:"ol"},"REST API: Call the REST API to make sure that your public API is also working\nproperly.")),Object(a.b)("img",{src:"/img/zeuz-node/building-blocks.jpg",height:"400px"}),Object(a.b)("h2",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"All the test case data lives in the ZeuZ Server. You use the ZeuZ Server to\nconstruct the test cases and then they are sent to ZeuZ Node as a JSON file\nrepresenting all the test cases and the attachment files (if any). Note that,\nthe server is not required to run ZeuZ Node or the test cases, it is only an\ninterface for constructing the test case data. Once ZeuZ Node has the JSON data\nready for it to be consumed, it simply takes it and starts executing the test\ncases one by one. ZeuZ Node (",Object(a.b)("inlineCode",{parentName:"p"},"node_cli.py"),") has a built in ",Object(a.b)("inlineCode",{parentName:"p"},"-r")," or ",Object(a.b)("inlineCode",{parentName:"p"},"--local-run"),"\nflag, which if provided, will run the test cases from ",Object(a.b)("inlineCode",{parentName:"p"},"ZeuZ Node > Projects >\nLocal_run.json")," file without communicating with the server. A report is then\ngenerated inside the ",Object(a.b)("strong",{parentName:"p"},"AutomationLog")," folder. Every test case session has a\nunique identifier called ",Object(a.b)("strong",{parentName:"p"},"Run ID"),", there's a folder with the same name inside\n",Object(a.b)("strong",{parentName:"p"},"AutomationLog")," folder which contains the screenshots, logs and any other\nrelevant resulting data (while/after running tests)."),Object(a.b)("h2",{id:"drivers"},"Drivers"),Object(a.b)("p",null,"Drivers are the entry point to ZeuZ Node (similar to ",Object(a.b)("inlineCode",{parentName:"p"},"main()")," function in many\nlanguages). ZeuZ Node has a ",Object(a.b)("inlineCode",{parentName:"p"},"MainDriver")," by default that handles communication\nwith the ZeuZ Server and run the test cases based on the data received. A driver\nis responsible for handling which action to execute based on the data. You can\nalso write a custom driver that has custom actions or perform other tasks aside\nfrom just executing the actions. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"custom-driver"}),"Custom Driver")," for more\ninformation."))}l.isMDXComponent=!0}}]);