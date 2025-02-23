(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(229)),c={id:"take-screenshot",title:"Take Screenshot"},o={unversionedId:"actions/web/take-screenshot",id:"actions/web/take-screenshot",isDocsHomePage:!1,title:"Take Screenshot",description:"Purpose",source:"@site/docs\\actions\\web\\take-screenshot.md",slug:"/actions/web/take-screenshot",permalink:"/docs/actions/web/take-screenshot",version:"current",sidebar:"docs",previous:{title:"Teardown Web Browser",permalink:"/docs/actions/web/teardown-web-browser"},next:{title:"Click an Element",permalink:"/docs/actions/web/click-an-element"}},b=[{value:"Purpose",id:"purpose",children:[]},{value:"Scenarios",id:"scenarios",children:[{value:"Scenario 1",id:"scenario-1",children:[]},{value:"Scenario 2",id:"scenario-2",children:[]}]},{value:"Additional Tips for this Action",id:"additional-tips-for-this-action",children:[{value:"Error Handling for Take Screenshot",id:"error-handling-for-take-screenshot",children:[]},{value:"General Error Handling Tips",id:"general-error-handling-tips",children:[]}]},{value:"Action documentation of Take Screenshot",id:"action-documentation-of-take-screenshot",children:[{value:"Description",id:"description",children:[]},{value:"Data:",id:"data",children:[]},{value:"Action Type: Web",id:"action-type-web",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,'The "Take Screenshot" action captures a screenshot of the current webpage and stores the screenshot file\'s path in the variable ',Object(i.b)("inlineCode",{parentName:"p"},"zeuz_screenshot"),". The screenshot file can later be referenced using the variable ",Object(i.b)("inlineCode",{parentName:"p"},"%|zeuz_screenshot|%")," in subsequent actions, enabling easy access to the file for further use in the test case. This action is particularly useful for capturing visual evidence of the state of a web page during automated tests."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"scenarios"},"Scenarios"),Object(i.b)("h3",{id:"scenario-1"},"Scenario 1"),Object(i.b)("h4",{id:"title"},"Title:"),Object(i.b)("p",null,"Capture a Full Screenshot After Form Submission",Object(i.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7979"}),"TEST-7979 Capture full screenshot after form submission")),Object(i.b)("h4",{id:"scenario-overview"},"Scenario Overview:"),Object(i.b)("p",null,"A user fills out a form and submits it. To verify that the form submission was successful, a screenshot is captured immediately after the submission action. This ensures that the confirmation message or resulting page state is documented for future reference."),Object(i.b)("h4",{id:"steps-to-follow"},"Steps to Follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the browser and navigate to the form page."),Object(i.b)("li",{parentName:"ol"},"Fill in the required fields of the form."),Object(i.b)("li",{parentName:"ol"},'Click the "Submit" button.'),Object(i.b)("li",{parentName:"ol"},'Use the "Take Screenshot" action.'),Object(i.b)("li",{parentName:"ol"},"Store the screenshot file in the variable ",Object(i.b)("inlineCode",{parentName:"li"},"zeuz_screenshot"),"."),Object(i.b)("li",{parentName:"ol"},"Verify that the confirmation message is displayed correctly in the screenshot.")),Object(i.b)("h4",{id:"actions"},"Actions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"screenshot save path"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"%","|","zeuz_download_folder","|","%\\image.png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"take screenshot web"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"selenium action"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Take Screenshot.")),Object(i.b)("h4",{id:"expected-result"},"Expected Result:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The screenshot should capture the confirmation message displayed after the form submission.")),Object(i.b)("h4",{id:"common-errors-and-fixes"},"Common Errors and Fixes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Error"),": The screenshot file is not stored properly.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Fix"),": Ensure that the action executes correctly and that the variable ",Object(i.b)("inlineCode",{parentName:"li"},"%|zeuz_screenshot|%")," is referenced properly in subsequent steps.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"scenario-2"},"Scenario 2"),Object(i.b)("h4",{id:"title-1"},"Title:"),Object(i.b)("p",null,"Capture a Screenshot of a Specific Location Using Coordinates",Object(i.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8073"}),"TEST-8073 Capture a Screenshot of a Specific Location using Coordinates")),Object(i.b)("h4",{id:"scenario-overview-1"},"Scenario Overview:"),Object(i.b)("p",null,"A tester needs to capture only a specific portion of a webpage, rather than the entire viewport. Using coordinates, the screenshot action focuses on the desired section of the page."),Object(i.b)("h4",{id:"steps-to-follow-1"},"Steps to Follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the browser and navigate to the target webpage."),Object(i.b)("li",{parentName:"ol"},"Identify the coordinates (",Object(i.b)("inlineCode",{parentName:"li"},"x"),", ",Object(i.b)("inlineCode",{parentName:"li"},"y"),", ",Object(i.b)("inlineCode",{parentName:"li"},"width"),", ",Object(i.b)("inlineCode",{parentName:"li"},"height"),") of the area to capture."),Object(i.b)("li",{parentName:"ol"},'Use the "Take Screenshot" action with the defined coordinates.'),Object(i.b)("li",{parentName:"ol"},"Store the screenshot file in the variable ",Object(i.b)("inlineCode",{parentName:"li"},"zeuz_screenshot"),"."),Object(i.b)("li",{parentName:"ol"},"Verify that the captured screenshot contains only the specified portion of the page.")),Object(i.b)("h4",{id:"actions-1"},"Actions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"screenshot save path"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"%","|","zeuz_download_folder","|","%\\image.png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bbox"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(0, 750, 500, 40)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"take screenshot web"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"selenium action"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Take a screenshot (using specific coordinates).")),Object(i.b)("h4",{id:"expected-result-1"},"Expected Result:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The screenshot should include only the specified section of the webpage.")),Object(i.b)("h4",{id:"common-errors-and-fixes-1"},"Common Errors and Fixes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Error"),": The screenshot captures the incorrect area."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Fix"),": Verify that the provided coordinates are correct and correspond to the intended section of the page."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Error"),": The selected area is outside the visible viewport."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Fix"),": Ensure that the section is visible on the screen before capturing the screenshot.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"additional-tips-for-this-action"},"Additional Tips for this Action"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Always verify that the screenshot is captured at the right moment by placing the action immediately after the desired step."),Object(i.b)("li",{parentName:"ul"},"Use the variable ",Object(i.b)("inlineCode",{parentName:"li"},"%|zeuz_screenshot|%")," to reference the screenshot in reports or subsequent test steps."),Object(i.b)("li",{parentName:"ul"},"When capturing a specific section, double-check the coordinates before execution to avoid capturing incorrect screenshots.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"error-handling-for-take-screenshot"},"Error Handling for Take Screenshot"),Object(i.b)("h4",{id:"common-problems-and-their-fixes"},"Common Problems and Their Fixes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": The screenshot file is not generated.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": The page may not have fully loaded before the screenshot was taken.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Add a short wait time before executing the action.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": The screenshot captures an incorrect area when using coordinates.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": The provided coordinates are incorrect.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Double-check and adjust the ",Object(i.b)("inlineCode",{parentName:"p"},"x"),", ",Object(i.b)("inlineCode",{parentName:"p"},"y"),", ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," values before executing the action.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Problem"),": The screenshot does not capture the expected UI elements.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Possible Cause"),": The required element may not be visible on the screen.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"How to Fix"),": Scroll to the element before capturing the screenshot."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"general-error-handling-tips"},"General Error Handling Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure that the webpage is fully loaded before capturing the screenshot."),Object(i.b)("li",{parentName:"ul"},"Confirm that all required elements are visible before capturing the screenshot."),Object(i.b)("li",{parentName:"ul"},"If using screenshots for validation, compare them with the expected reference images to ensure consistency."),Object(i.b)("li",{parentName:"ul"},"When using coordinates, test with different values to ensure accuracy.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"action-documentation-of-take-screenshot"},"Action documentation of Take Screenshot"),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,'The "Take Screenshot" action captures a webpage screenshot, storing its path in ',Object(i.b)("inlineCode",{parentName:"p"},"zeuz_screenshot"),". It can be referenced later using ",Object(i.b)("inlineCode",{parentName:"p"},"%|zeuz_screenshot|%")," for futher use. This is useful for capturing visual evidence during automated tests."),Object(i.b)("p",null,"By default, it takes a full-page screenshot. However, to capture a specific area, one can use ",Object(i.b)("strong",{parentName:"p"},"coordinates (x, y, width, height)"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"data"},"Data:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"screenshot save path"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"*","*"," Fullpath of the image: C:\\User\\path\\image.png or %","|","zeuz_download_folder","|","%\\image.png ","*","*")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bbox"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"*","*"," Provide the bounding box parameters in the following format (x, y, width, height): (190, 140, 500, 685) ","*","*")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"take screenshot web"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"selenium action"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"action-type-web"},"Action Type: Web"))}s.isMDXComponent=!0}}]);