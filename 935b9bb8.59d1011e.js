(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(205)),o={id:"navigate-back",title:"Navigate - Back"},b={unversionedId:"actions/web/navigate-back",id:"actions/web/navigate-back",isDocsHomePage:!1,title:"Navigate - Back",description:"Purpose",source:"@site/docs\\actions\\web\\navigate-back.md",slug:"/actions/web/navigate-back",permalink:"/docs/actions/web/navigate-back",version:"current",sidebar:"docs",previous:{title:"Keystroke Chars",permalink:"/docs/actions/web/keystroke-chars"},next:{title:"OCR - Get text using image",permalink:"/docs/actions/gui-controls/action-gui-controls-ocr-get-text-using-image"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Scenarios",id:"scenarios",children:[{value:"Scenario 1",id:"scenario-1",children:[]},{value:"Scenario 2",id:"scenario-2",children:[]}]},{value:"Test Cases",id:"test-cases",children:[{value:"Test Case for Scenario 1",id:"test-case-for-scenario-1",children:[]},{value:"Test Case for Scenario 2",id:"test-case-for-scenario-2",children:[]}]},{value:"Additional Tips for this Action",id:"additional-tips-for-this-action",children:[{value:"Error Handling for Navigate - Back",id:"error-handling-for-navigate---back",children:[]}]}],s={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"This action simulates the browser's ",Object(i.b)("strong",{parentName:"p"},"back")," button, enabling navigation to the previous page in the browser history. It functions the same as pressing the browser's ",Object(i.b)("strong",{parentName:"p"},"back")," button to return to the last visited page."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"scenarios"},"Scenarios"),Object(i.b)("h3",{id:"scenario-1"},"Scenario 1"),Object(i.b)("h4",{id:"title"},"Title:"),Object(i.b)("p",null,"Navigate back to the previous page",Object(i.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8000/#parentHorizontalTab2"}),"TEST-8000 Navigate Back")),Object(i.b)("h4",{id:"scenario-overview"},"Scenario Overview:"),Object(i.b)("p",null,"A user navigates through multiple pages on a website and needs to return to the previous page. This scenario demonstrates how to use the 'Navigate - Back' action to perform this operation."),Object(i.b)("h4",{id:"steps-to-follow"},"Steps to Follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a webpage and navigate to a second page by clicking a link or button."),Object(i.b)("li",{parentName:"ol"},"Use the 'Navigate - Back' action to simulate pressing the browser's back button."),Object(i.b)("li",{parentName:"ol"},"Verify that the browser successfully navigates to the previous page.")),Object(i.b)("h4",{id:"actions"},"Actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Input parameters"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Field: ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")),Object(i.b)("li",{parentName:"ul"},"Selenium action: ",Object(i.b)("inlineCode",{parentName:"li"},"back"))))),Object(i.b)("h4",{id:"expected-result"},"Expected Result:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The browser navigates to the most recently visited page.")),Object(i.b)("h4",{id:"common-errors-and-fixes"},"Common Errors and Fixes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Error"),": The browser fails to navigate back.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Fix"),": Ensure that the browser has a valid history to navigate back to.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"scenario-2"},"Scenario 2"),Object(i.b)("h4",{id:"title-1"},"Title:"),Object(i.b)("p",null,"Attempt to navigate back on the first page",Object(i.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8000/#parentHorizontalTab2"}),"TEST-8000 Navigate Back")),Object(i.b)("h4",{id:"scenario-overview-1"},"Scenario Overview:"),Object(i.b)("p",null,"A user is on the first page of a browser session and attempts to perform the 'Navigate - Back' action. This scenario demonstrates how the action behaves when no previous page exists in the browser's history."),Object(i.b)("h4",{id:"steps-to-follow-1"},"Steps to Follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a browser and navigate to the homepage of a website."),Object(i.b)("li",{parentName:"ol"},"Use the 'Navigate - Back' action."),Object(i.b)("li",{parentName:"ol"},"Verify that the browser remains on the same page and does not throw an error.")),Object(i.b)("h4",{id:"actions-1"},"Actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Input parameters"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Field: ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")),Object(i.b)("li",{parentName:"ul"},"Selenium action: ",Object(i.b)("inlineCode",{parentName:"li"},"back"))))),Object(i.b)("h4",{id:"expected-result-1"},"Expected Result:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The browser remains on the current page, and no errors are thrown.")),Object(i.b)("h4",{id:"common-errors-and-fixes-1"},"Common Errors and Fixes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Error"),": The action fails and does not navigate back.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Fix"),": Ensure that the browser is not in incognito mode, which disables history tracking.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"test-cases"},"Test Cases"),Object(i.b)("h3",{id:"test-case-for-scenario-1"},"Test Case for Scenario 1"),Object(i.b)("h4",{id:"objective"},"Objective:"),Object(i.b)("p",null,"Ensure that navigating back to the previous page functions correctly."),Object(i.b)("h4",{id:"steps-to-perform"},"Steps to Perform:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a browser and navigate to ",Object(i.b)("strong",{parentName:"li"},"Page A"),"."),Object(i.b)("li",{parentName:"ol"},"Click a link to navigate to ",Object(i.b)("strong",{parentName:"li"},"Page B"),"."),Object(i.b)("li",{parentName:"ol"},"Use the action with inputs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Field: ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")),Object(i.b)("li",{parentName:"ul"},"Selenium action: ",Object(i.b)("inlineCode",{parentName:"li"},"back")))),Object(i.b)("li",{parentName:"ol"},"Verify that the browser navigates back to ",Object(i.b)("strong",{parentName:"li"},"Page A"),".")),Object(i.b)("h4",{id:"expected-outcome"},"Expected Outcome:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The browser successfully returns to ",Object(i.b)("strong",{parentName:"li"},"Page A"),".")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"test-case-for-scenario-2"},"Test Case for Scenario 2"),Object(i.b)("h4",{id:"objective-1"},"Objective:"),Object(i.b)("p",null,"Ensure that attempting to navigate back on the first page does not cause errors."),Object(i.b)("h4",{id:"steps-to-perform-1"},"Steps to Perform:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a browser and go to ",Object(i.b)("strong",{parentName:"li"},"Page A"),"."),Object(i.b)("li",{parentName:"ol"},"Use the action with inputs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Field: ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")),Object(i.b)("li",{parentName:"ul"},"Selenium action: ",Object(i.b)("inlineCode",{parentName:"li"},"back")))),Object(i.b)("li",{parentName:"ol"},"Verify that the browser remains on ",Object(i.b)("strong",{parentName:"li"},"Page A"),".")),Object(i.b)("h4",{id:"expected-outcome-1"},"Expected Outcome:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The browser remains on the current page without errors.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"additional-tips-for-this-action"},"Additional Tips for this Action"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use this action only when a previous page is available in the browser's history."),Object(i.b)("li",{parentName:"ul"},"Combine this action with navigation actions such as ",Object(i.b)("strong",{parentName:"li"},"Forward")," and ",Object(i.b)("strong",{parentName:"li"},"Refresh")," for complete browser navigation control.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"error-handling-for-navigate---back"},"Error Handling for Navigate - Back"),Object(i.b)("h4",{id:"common-problems-and-their-fixes"},"Common Problems and Their Fixes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": The browser fails to navigate back.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": No previous page exists in the browser's history.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Ensure that the browser session has navigated to at least one additional page.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": The action fails due to incorrect input.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": The value provided in the action is invalid.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Ensure that the value for the ",Object(i.b)("strong",{parentName:"p"},"Selenium action")," field is set to ",Object(i.b)("inlineCode",{parentName:"p"},"back"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": Browser history is disabled.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": Incognito mode or browser settings prevent history tracking.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Use a regular browser session with history enabled. "))))}l.isMDXComponent=!0},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(a),O=n,m=p["".concat(o,".").concat(O)]||p[O]||u[O]||i;return a?r.a.createElement(m,b(b({ref:t},s),{},{components:a})):r.a.createElement(m,b({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);