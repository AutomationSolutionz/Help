(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var i=a(3),n=a(7),l=(a(0),a(211)),o={id:"upload-a-file",title:"Upload a File"},r={unversionedId:"actions/web/upload-a-file",id:"actions/web/upload-a-file",isDocsHomePage:!1,title:"Upload a File",description:"Purpose",source:"@site/docs\\actions\\web\\upload-a-file.md",slug:"/actions/web/upload-a-file",permalink:"/docs/actions/web/upload-a-file",version:"current",sidebar:"docs",previous:{title:"Switch Browser Window/Tab",permalink:"/docs/actions/web/switch-browser-window-tab"},next:{title:"OCR - Get text using image",permalink:"/docs/actions/gui-controls/action-gui-controls-ocr-get-text-using-image"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Scenarios",id:"scenarios",children:[{value:"Scenario 1",id:"scenario-1",children:[]},{value:"Scenario 2",id:"scenario-2",children:[]}]},{value:"Test Cases",id:"test-cases",children:[{value:"Test Case for Scenario 1",id:"test-case-for-scenario-1",children:[]},{value:"Test Case for Scenario 2",id:"test-case-for-scenario-2",children:[]}]},{value:"Additional Tips for this Action",id:"additional-tips-for-this-action",children:[{value:"Error handling for Upload a File",id:"error-handling-for-upload-a-file",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"This action automates file uploads using Selenium. It handles cases where the file upload button is located directly on the webpage, as well as scenarios requiring interaction with operating system-level file upload dialogs, utilizing the Microsoft System API and PyAutoGUI. "),Object(l.b)("hr",null),Object(l.b)("h2",{id:"scenarios"},"Scenarios"),Object(l.b)("h3",{id:"scenario-1"},"Scenario 1"),Object(l.b)("h4",{id:"title"},"Title:"),Object(l.b)("p",null,"Upload a file using the standard upload button",Object(l.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7987/#parentHorizontalTab2"}),"TEST-7987 Upload a File")),Object(l.b)("h4",{id:"scenario-overview"},"Scenario Overview:"),Object(l.b)("p",null,'Imagine a user needs to upload a document to a web application using a visible upload button. This scenario demonstrates how to use the "Upload File" action to select and upload a file.'),Object(l.b)("h4",{id:"steps-to-follow"},"Steps to Follow:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Navigate to a webpage that contains an upload button."),Object(l.b)("li",{parentName:"ol"},'Use the "Upload a File" action to identify the upload button using an element parameter (e.g., ',Object(l.b)("inlineCode",{parentName:"li"},"ID")," or ",Object(l.b)("inlineCode",{parentName:"li"},"class"),")."),Object(l.b)("li",{parentName:"ol"},"Provide the absolute file path as input."),Object(l.b)("li",{parentName:"ol"},"Verify that the file has been successfully uploaded.")),Object(l.b)("h4",{id:"actions"},"Actions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Input"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Specify the element parameters (e.g., ",Object(l.b)("inlineCode",{parentName:"li"},"ID: fileUpload"),") and the file path."),Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"(id, element parameter, fileUpload)"),"."),Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"(upload file, selenium action, %|log.rtf|%)"),".")))),Object(l.b)("h4",{id:"expected-result"},"Expected Result:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The file uploads successfully and is visible in the application's user interface (UI).")),Object(l.b)("h4",{id:"common-errors-and-fixes"},"Common Errors and Fixes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Error"),": The file path is invalid.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Fix"),": Provide the full absolute file path, not a relative one (e.g., ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\Documents\\demo.csv"),").")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scenario-2"},"Scenario 2"),Object(l.b)("h4",{id:"title-1"},"Title:"),Object(l.b)("p",null,"Upload a file through the operating system's file dialog",Object(l.b)("br",{parentName:"p"}),"\n","Test case link: ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7987/#parentHorizontalTab2"}),"TEST-7987 Upload a File")),Object(l.b)("h4",{id:"scenario-overview-1"},"Scenario Overview:"),Object(l.b)("p",null,"Some web applications use custom upload dialogs that Selenium cannot directly interact with. This scenario demonstrates automating such dialogs using tools like PyAutoGUI."),Object(l.b)("h4",{id:"steps-to-follow-1"},"Steps to Follow:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Navigate to the webpage with an upload button that opens an OS-level file dialog."),Object(l.b)("li",{parentName:"ol"},'Use the "Upload a File" action in combination with PyAutoGUI to interact with the OS-level file dialog.'),Object(l.b)("li",{parentName:"ol"},"Provide the absolute file path for the file to be uploaded."),Object(l.b)("li",{parentName:"ol"},"Confirm that the file is successfully uploaded.")),Object(l.b)("h4",{id:"actions-1"},"Actions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Input"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Provide the absolute file path along with optional parameters such as ",Object(l.b)("inlineCode",{parentName:"li"},"allow_hidden")," and ",Object(l.b)("inlineCode",{parentName:"li"},"use_js"),"."),Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"(filepath, path, C:\\Users\\John\\Documents\\file.csv)"),".")))),Object(l.b)("h4",{id:"expected-result-1"},"Expected Result:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The file upload is completed through simulated interaction with the file dialog.")),Object(l.b)("h4",{id:"common-errors-and-fixes-1"},"Common Errors and Fixes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Error"),": Hidden elements prevent interaction.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Fix"),": Use ",Object(l.b)("inlineCode",{parentName:"li"},"allow_hidden")," as an optional parameter and set it to ",Object(l.b)("inlineCode",{parentName:"li"},"yes"),".")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"test-cases"},"Test Cases"),Object(l.b)("h3",{id:"test-case-for-scenario-1"},"Test Case for Scenario 1"),Object(l.b)("h4",{id:"objective"},"Objective:"),Object(l.b)("p",null,"Ensure that file upload via a standard upload button works correctly."),Object(l.b)("h4",{id:"steps-to-perform"},"Steps to Perform:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open a web application that includes an upload form."),Object(l.b)("li",{parentName:"ol"},"Use the action with inputs:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ID: fileUpload"),"."),Object(l.b)("li",{parentName:"ul"},"File path: ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\Documents\\example.csv"),"."))),Object(l.b)("li",{parentName:"ol"},"Verify that the file appears in the application after upload.")),Object(l.b)("h4",{id:"expected-outcome"},"Expected Outcome:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The file is successfully uploaded, and a confirmation message is displayed in the application.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"test-case-for-scenario-2"},"Test Case for Scenario 2"),Object(l.b)("h4",{id:"objective-1"},"Objective:"),Object(l.b)("p",null,"Ensure that file upload via an OS-level file dialog works correctly."),Object(l.b)("h4",{id:"steps-to-perform-1"},"Steps to Perform:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Click the upload button to open the file upload dialog."),Object(l.b)("li",{parentName:"ol"},"Use the action to provide the file path: ",Object(l.b)("inlineCode",{parentName:"li"},"~\\Documents\\file.csv"),"."),Object(l.b)("li",{parentName:"ol"},"Verify that the file upload completes successfully.")),Object(l.b)("h4",{id:"expected-outcome-1"},"Expected Outcome:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The file is uploaded, and the application reflects the upload status.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"additional-tips-for-this-action"},"Additional Tips for this Action"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use full file paths (e.g., ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\John\\Documents\\file.csv"),") for reliable uploads."),Object(l.b)("li",{parentName:"ul"},"Enable interaction with hidden elements by setting ",Object(l.b)("inlineCode",{parentName:"li"},"allow_hidden")," to ",Object(l.b)("inlineCode",{parentName:"li"},"yes")," for complex web pages."),Object(l.b)("li",{parentName:"ul"},'Try simpler methods, such as the "Enter Text" action, before using PyAutoGUI.')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"error-handling-for-upload-a-file"},"Error handling for Upload a File"),Object(l.b)("h4",{id:"common-problems-and-their-fixes"},"Common Problems and Their Fixes"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Problem"),": File not found.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"Possible Cause"),": The file path is incorrect or specified as a relative path.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"How to Fix"),": Use an absolute file path and confirm that the file exists.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Problem"),": The upload button is hidden.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"Possible Cause"),": The element is hidden or not visible.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"How to Fix"),": Set ",Object(l.b)("inlineCode",{parentName:"p"},"allow_hidden")," to ",Object(l.b)("inlineCode",{parentName:"p"},"yes")," in the action parameters.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Problem"),": The OS-level dialog fails to respond to interactions.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"Possible Cause"),": Incorrect file path or missing PyAutoGUI configuration.",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("strong",{parentName:"p"},"How to Fix"),": Ensure that PyAutoGUI is correctly configured and the file path is valid."))))}s.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=i,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return a?n.a.createElement(m,r(r({ref:t},b),{},{components:a})):n.a.createElement(m,r({ref:t},b))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var b=2;b<l;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);