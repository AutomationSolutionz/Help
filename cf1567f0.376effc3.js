(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(199)),o={id:"actions-mac",title:"Mac actions"},s={unversionedId:"actions-mac",id:"actions-mac",isDocsHomePage:!1,title:"Mac actions",description:"Description",source:"@site/docs\\actions-mac.md",slug:"/actions-mac",permalink:"/docs/actions-mac",version:"current",sidebar:"docs",previous:{title:"Database actions",permalink:"/docs/actions-database"},next:{title:"Windows actions",permalink:"/docs/actions-windows"}},c=[{value:"Description",id:"description",children:[]},{value:"Examples of Mac Actions",id:"examples-of-mac-actions",children:[{value:"1. <strong>Clear and Enter Text</strong>",id:"1-clear-and-enter-text",children:[]},{value:"2. <strong>Click an Element</strong>",id:"2-click-an-element",children:[]},{value:"3. <strong>Double Click</strong>",id:"3-double-click",children:[]},{value:"4. <strong>Enter Text</strong>",id:"4-enter-text",children:[]},{value:"5. <strong>If an Item is found or not</strong>",id:"5-if-an-item-is-found-or-not",children:[]},{value:"6. <strong>Launch Application</strong>",id:"6-launch-application",children:[]},{value:"7. <strong>Right Click</strong>",id:"7-right-click",children:[]},{value:"8. <strong>Save Attribute Value</strong>",id:"8-save-attribute-value",children:[]},{value:"9. <strong>Teardown Application</strong>",id:"9-teardown-application",children:[]},{value:"10. <strong>Wait for element to appear</strong>",id:"10-wait-for-element-to-appear",children:[]},{value:"11. <strong>Wait for element to disappear</strong>",id:"11-wait-for-element-to-disappear",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Mac Actions")," are automation tasks designed for macOS systems to streamline operations such as launching applications, managing files, executing Terminal commands, and interacting with UI elements like buttons or text fields. These actions enhance productivity and enable efficient workflows by automating tasks specific to the macOS environment. Tools like ZeuZ utilize Mac Actions for testing and automation, leveraging the platform's unique capabilities."),Object(r.b)("h2",{id:"examples-of-mac-actions"},"Examples of Mac Actions"),Object(r.b)("h3",{id:"1-clear-and-enter-text"},"1. ",Object(r.b)("strong",{parentName:"h3"},"Clear and Enter Text")),Object(r.b)("p",null,"This action clears any existing text in an input field and enters new text. It is particularly useful when updating fields where previously entered text needs to be replaced. The field is identified using attributes such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". It ensures accurate text input by replacing previous entries, making it ideal for tasks like form filling or data updates. Tools like ZeuZ support this action to streamline automation and testing workflows effectively."),Object(r.b)("h3",{id:"2-click-an-element"},"2. ",Object(r.b)("strong",{parentName:"h3"},"Click an Element")),Object(r.b)("p",null,"This action clicks on a specified item on the screen by identifying it using attributes such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". Once the item is located, the action simulates a click, allowing interaction with clickable elements like buttons or links. It is commonly used in automation to trigger actions or validate UI behavior, streamlining testing and workflows. "),Object(r.b)("h3",{id:"3-double-click"},"3. ",Object(r.b)("strong",{parentName:"h3"},"Double Click")),Object(r.b)("p",null,"This action performs a double-click on a specified element by identifying it through its properties, such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". The user provides the details of the target element, and once located, the action simulates a double-click."),Object(r.b)("p",null,"This is useful for automation tasks requiring actions like opening files, expanding folders, or triggering UI elements that respond to double-click interactions. Tools like ZeuZ support this action to enable precise and efficient automation of such tasks."),Object(r.b)("h3",{id:"4-enter-text"},"4. ",Object(r.b)("strong",{parentName:"h3"},"Enter Text")),Object(r.b)("p",null,"This action locates a text field in an application using attributes such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier")," and enters the specified text. It does not delete any existing text in the field; the new text is appended or inserted based on the field's behavior."),Object(r.b)("p",null,'For scenarios where the field needs to be cleared before entering text, the "Clear and Enter Text" action should be used. This action is ideal for tasks where adding new information without modifying existing content is required. Tools like ZeuZ support this action for precise and efficient text input during automation workflows.'),Object(r.b)("h3",{id:"5-if-an-item-is-found-or-not"},"5. ",Object(r.b)("strong",{parentName:"h3"},"If an Item is found or not")),Object(r.b)("p",null,'This action allows conditional execution of tasks based on the presence of a specified element, similar to an "if-else" condition in programming. The element is located using attributes such as ',Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),'. If the element is found, the actions defined for the "true" condition are executed; if not, "false" condition actions are triggered.'),Object(r.b)("p",null,"An optional ",Object(r.b)("strong",{parentName:"p"},"wait")," parameter can be set to specify the time to wait for the element to appear. This action is useful for dynamic scenarios where task execution depends on the availability of specific UI elements. Tools like ZeuZ support this feature for flexible and responsive automation workflows."),Object(r.b)("h3",{id:"6-launch-application"},"6. ",Object(r.b)("strong",{parentName:"h3"},"Launch Application")),Object(r.b)("p",null,"This action launches a specific application on macOS using its ",Object(r.b)("strong",{parentName:"p"},"bundle ID"),", a unique identifier within Apple's ecosystem. For example, to open the Calculator app, the bundle ID ",Object(r.b)("strong",{parentName:"p"},'"com.apple.calculator"')," must be specified. The bundle ID of an application can be found using a Terminal command, such as",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"osascript -e 'id of app \"App Name\"'"),", or by accessing the app's ",Object(r.b)("strong",{parentName:"p"},"info.plist")," file. To locate this file, navigate to the ",Object(r.b)("strong",{parentName:"p"},"Applications")," folder in Finder, right-click on the app, and select  ",Object(r.b)("strong",{parentName:"p"},"Show Package Contents"),". Then open the ",Object(r.b)("strong",{parentName:"p"},"Contents")," folder, locate the ",Object(r.b)("strong",{parentName:"p"},"info.plist")," file, and view it in Xcode or TextEdit to find the ",Object(r.b)("strong",{parentName:"p"},"CFBundleIdentifier")," key. This action is crucial for automation tasks requiring precise application control, and tools like ZeuZ make it efficient to define and execute these actions."),Object(r.b)("h3",{id:"7-right-click"},"7. ",Object(r.b)("strong",{parentName:"h3"},"Right Click")),Object(r.b)("p",null,"This action performs a right-click on a specified element by identifying it using its properties, such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value")," or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". The user provides the details of the target element, and once it is located, the action simulates a right-click."),Object(r.b)("p",null,"This is commonly used in automation tasks that require context menu interactions or other actions triggered by right-clicking on elements. Tools like ZeuZ enable precise execution of this action to streamline workflows and testing processes."),Object(r.b)("h3",{id:"8-save-attribute-value"},"8. ",Object(r.b)("strong",{parentName:"h3"},"Save Attribute Value")),Object(r.b)("p",null,"This action saves the value of a specific attribute from an element, often for use in comparisons or subsequent tasks. To perform this, the element must be located using properties like ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". Once identified, the desired attribute can be extracted and stored."),Object(r.b)("p",null,"It is important not to use the same attribute intended for saving as the one used for locating the element. This ensures accuracy and prevents conflicts. This action is particularly useful in scenarios where dynamic data needs to be captured and analyzed later, and tools like ZeuZ make it efficient to implement."),Object(r.b)("h3",{id:"9-teardown-application"},"9. ",Object(r.b)("strong",{parentName:"h3"},"Teardown Application")),Object(r.b)("p",null,"This action is used to properly close an application that was running on the screen, ensuring a clean shutdown at the end of a test case. It terminates the Appium driver, stops the Appium server, and clears all shared variables associated with the session. Calling this action at the end of a test case is crucial to avoid errors in subsequent test runs, as failing to do so may leave processes or variables in an inconsistent state, leading to potential issues in future tests. Tools like ZeuZ help automate this process for efficient test management."),Object(r.b)("h3",{id:"10-wait-for-element-to-appear"},"10. ",Object(r.b)("strong",{parentName:"h3"},"Wait for element to appear")),Object(r.b)("p",null,"This action is used to validate or assert whether a specified element exists. To perform this, the details of the element must be provided using properties like ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier")," for accurate identification. Additionally, a maximum waiting time (in seconds) is specified. If the element is found within this time frame, the action proceeds to the next step; otherwise, it will fail the test case. This ensures the presence of critical elements and helps maintain the reliability of automated tests."),Object(r.b)("h3",{id:"11-wait-for-element-to-disappear"},"11. ",Object(r.b)("strong",{parentName:"h3"},"Wait for element to disappear")),Object(r.b)("p",null,"This action validates whether a specified element disappears within a given time frame. The element is identified using properties such as ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"label"),", ",Object(r.b)("strong",{parentName:"p"},"value"),", or ",Object(r.b)("strong",{parentName:"p"},"identifier"),". A maximum waiting time (in seconds) is specified, during which the action monitors for the element's disappearance. If the element is still present after the specified time, the test case fails; otherwise, the action proceeds to the next step. This is useful for ensuring that dynamic elements or temporary UI components behave as expected during automated testing."))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);