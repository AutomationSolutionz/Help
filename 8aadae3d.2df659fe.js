(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(106)),i={id:"zeuz-server-changelogs",title:"Zeuz Server Changelogs",sidebar_label:"Changelogs"},l={unversionedId:"zeuz-server-changelogs",id:"zeuz-server-changelogs",isDocsHomePage:!1,title:"Zeuz Server Changelogs",description:"Version 6.0.1",source:"@site/docs\\zeuz-server-changelogs.md",permalink:"/docs/zeuz-server-changelogs",sidebar_label:"Changelogs",sidebar:"docs",previous:{title:"Zeuz Server",permalink:"/docs/zeuz-server"},next:{title:"Course Information",permalink:"/docs/course-info"}},s=[{value:"Version 6.0.1",id:"version-601",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"version-601"},"Version 6.0.1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Change label of "Do not upload log when test case passes" to "Upload\nlog on FAIL only?" to better clarify the intent. This option\ninstructs Zeuz Node to upload logs and screenshots as a zip file to\nthe Run ID, which you can later download and inspect.'),Object(o.b)("li",{parentName:"ul"},"All the settings in the ",Object(o.b)("strong",{parentName:"li"},"Testing > Run Tests")," page are now saved."),Object(o.b)("li",{parentName:"ul"},"View variables in a tree like structure. JSON like data are\nautomatically parsed into the tree structure for easier access."),Object(o.b)("li",{parentName:"ul"},"Device reordering in Debug test case/steps/actions fixed. Previously\nit was not maintaining the selected device order."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add Actions")," in test case edit page improved to display first 150\ncharacters of the description alongside the description name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add Actions")," in test case edit page now shows ",Object(o.b)("em",{parentName:"li"},"Common Actions"),"\nall the time even if the search term do not contain them. However,\nthe searched term is prioritized before the common actions. So, if\nyou search for ",Object(o.b)("em",{parentName:"li"},"Open webpage")," it should show ",Object(o.b)("em",{parentName:"li"},"Open webpage")," action\nat the top."),Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("strong",{parentName:"li"},"Test Case edit > Steps"),", if you hover over any loop action row, it'll\nhighlight all the other actions that are part of that loop's body."),Object(o.b)("li",{parentName:"ul"},"Show sorted data in result table in debug page."),Object(o.b)("li",{parentName:"ul"},"Improved performance when a test run is deployed by rewriting how we\nhandle logs. You'll only see the first 2500 logs. If any more log is\ngenerated, they'll be stored locally inside the Zeuz Node's\n",Object(o.b)("inlineCode",{parentName:"li"},"Zeuz_Node > AutomationLog > execution.log")," file. However, all kinds\nof error logs will still be uploaded."),Object(o.b)("li",{parentName:"ul"},"Show how many Zeuz Nodes are available online in the navigation bar,\nindicated by the green circle."),Object(o.b)("li",{parentName:"ul"},"Deploy API is now stable. You can deploy ",Object(o.b)("em",{parentName:"li"},"Test Sets")," from the\nterminal/command line using the scripts found in ",Object(o.b)("inlineCode",{parentName:"li"},"Zeuz Node > Apps >\nzeuz-cli"),". Contains scripts for both ",Object(o.b)("inlineCode",{parentName:"li"},"python")," and ",Object(o.b)("inlineCode",{parentName:"li"},"nodejs"),". This is\ngreat for automating deployments from a ",Object(o.b)("strong",{parentName:"li"},"CI/CD")," server."),Object(o.b)("li",{parentName:"ul"},"Add ability to delete all previous machines (Zeuz Node machines\nentries)."),Object(o.b)("li",{parentName:"ul"},"Fix Folder and Feature create/edit/move bugs in ",Object(o.b)("strong",{parentName:"li"},"Test Case Search >\nFolder View")," page."),Object(o.b)("li",{parentName:"ul"},"[Internal]"," Upgrade Django and Django REST Framework to the latest\nversion (from 1.8.2 to 3.1)."),Object(o.b)("li",{parentName:"ul"},"[Internal]"," Use HTTPS based fonts to remove MIXED CONTENT errors in\nbrowsers."),Object(o.b)("li",{parentName:"ul"},"[Internal]"," Other bug fixes and improvements under the hood.")))}p.isMDXComponent=!0}}]);