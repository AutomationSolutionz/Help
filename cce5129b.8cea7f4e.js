(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return o})),t.d(e,"default",(function(){return d}));var n=t(3),r=t(7),a=(t(0),t(143)),i={id:"custom-driver",title:"Custom Driver"},c={unversionedId:"custom-driver",id:"custom-driver",isDocsHomePage:!1,title:"Custom Driver",description:"In Zeuz, to execute automation process, you can use BuiltInDriver where all",source:"@site/docs\\custom-driver.md",slug:"/custom-driver",permalink:"/docs/custom-driver",version:"current",sidebar:"docs",previous:{title:"Add new actions",permalink:"/docs/add-new-actions"},next:{title:"Common Actions",permalink:"/docs/actions-common"}},o=[],s={rightToc:o};function d(A){var e=A.components,i=Object(r.a)(A,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,i,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Zeuz, to execute automation process, you can use Built_In_Driver where all\nour actions are declared, as well as you can build your own driver inside our\nframework and run your driver along with the Built_In_Driver. This documentation\nis about how you can define your own driver and make it work with the\nBuil_In_Driver. We will try a demo login which is a selenium web automation test\ncase. For this we will try the first 2 actions with our Built_In_Driver and the\nlast 2 actions with a Custom Driver meanwhile collecting the resources\nBuilt_In_Driver created."),Object(a.b)("p",null,"So, First of all, we will create a test case, add a step and we will declare 2 actions inside it-"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to link \u201c",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://demo.zeuz.ai/web/level/one/scenerios/login%E2%80%9D"}),"https://demo.zeuz.ai/web/level/one/scenerios/login\u201d")),Object(a.b)("li",{parentName:"ol"},"Enter Username = \u201czeuzTest\u201d")),Object(a.b)("p",null,Object(a.b)("img",{src:t(278).default})),Object(a.b)("p",null,"In this case, we don't need to change the step settings as we are executing\nthese 2 actions with Built_In_Driver and its set as default."),Object(a.b)("p",null,"Then suppose we want to declare 2 more actions with our own custom driver-"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Enter password = \u201czeuzPass\u201d"),Object(a.b)("li",{parentName:"ol"},"Click \u201cSign in\u201d button")),Object(a.b)("p",null,"Executing these 2 action will complete the demo login process So, to execute our\nown custom driver we need to add another step. Because step one will be executed\nby Built_In_Driver."),Object(a.b)("p",null,Object(a.b)("img",{src:t(279).default})),Object(a.b)("p",null,"Here, we have created Step 2. Now lets click the \u201cStep info\u201d button\n",Object(a.b)("img",{src:t(280).default}),"\nA pop up will appear. Then click on the \u201cView/Edit Step\u201d button"),Object(a.b)("p",null,Object(a.b)("img",{src:t(281).default})),Object(a.b)("p",null,"A new window will be created. From that window you can see the default driver is\nour Buil_In_Driver. Now we will create our own driver by clicking the \u201cCREATE\nDRIVER\u201d button."),Object(a.b)("p",null,Object(a.b)("img",{src:t(282).default})),Object(a.b)("p",null,"Click on the \u201cCREATE DRIVER\u201d at the bottom of the page."),Object(a.b)("p",null,Object(a.b)("img",{src:t(283).default})),Object(a.b)("p",null,"Provide a Driver Name suppose \u201cMy_driver\u201d and click \u201cOK\u201d"),Object(a.b)("p",null,Object(a.b)("img",{src:t(284).default})),Object(a.b)("p",null,"Make Sure the driver remains at the \u201cAssigned Driver\u201d."),Object(a.b)("p",null,Object(a.b)("img",{src:t(285).default})),Object(a.b)("p",null,"Now go back to the Edit Step page and REFRESH. There you will see your newly\ncreated driver. Select your driver from the drop down list. Thats it now the\nStep 2 will be executed by the My_driver and not with the Built_In_Driver."),Object(a.b)("p",null,"So at this point, we need some action dataset to pass through the My_driver and\nwrite code for the My_driver. You can set any dataset you want but your code and\ndataset should match."),Object(a.b)("p",null,Object(a.b)("img",{src:t(286).default})),Object(a.b)("p",null,"So go back to the Test case and REFRESH. Then again enter Step-2. Then add 2\nactions randomly so that we can then edit them and make our own dataset. You can\nedit the texts of a cell by clicking that. You can add a row with the + sign and\ndelete a row with the X sign, thus making your own dataset. Now we will write\ncode for the driver and execute selenium scripts with the dataset we just\ncreated. First of all we need to create a python file at this location ..\\Zeuz\nNode\\ZeuzPythonNode\\Drivers\\ and name the file exactly \u201cMy_driver.py\u201d"),Object(a.b)("p",null,Object(a.b)("img",{src:t(287).default})),Object(a.b)("p",null,"Now, open \u201cMy_driver.py\u201d file in an Editor and write the codes for the driver."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import sys\nfrom Framework.Utilities import CommonUtil\nfrom Framework.Built_In_Automation.Shared_Resources import BuiltInFunctionSharedResources as sr\n\ndef sequential_actions(\n    dependency,\n    run_time_params,\n    step_data,\n    test_action_info,\n    file_attachment,\n    temp_q,\n    screen_capture,\n    device_info,\n    debug_actions=None,\n):\n    # For now we need the step_data only and the other parameters are for some advance usages\n     try:\n        # This is the dataset we have written in the server. Lets check in which format it is coming\n        print(step_data)\n\n        # Importing the selenium driver from Shared_Resources which was created by Built_In_Driver\n        selenium_driver = sr.Get_Shared_Variables(\"selenium_driver\")\n\n        # Now lets distribute the step_data between functions as separate actions and execute them\n        for action_dataset in step_data:\n            for left, mid, right in action_dataset:\n                if mid == 'my own action':\n                    Enter_text(action_dataset, selenium_driver)\n                    break\n            for left, mid, right in action_dataset:\n                if mid == 'perform click':\n                    click(action_dataset, selenium_driver)\n                    break\n\n    except Exception:\n        return CommonUtil.Exception_Handler(sys.exc_info(), temp_q)\n\n\ndef Enter_text(dataset, selenium_driver):\n    for left, mid, right in dataset:\n        if mid == \"my own paramter\" and left == \"id\":\n            Element = selenium_driver.find_element_by_id(right)     # Finds the textbox of password\n        if left == 'enter password text':\n            Element.send_keys(right)       # Enters the password\n\n\ndef click(dataset, selenium_driver):\n    for left, mid, right in dataset:\n        if mid == 'perform click' and left == \"id\":\n            Element = selenium_driver.find_element_by_id(right)     # Find sign in button\n            Element.click()     # Clicks Sign in button\n")),Object(a.b)("p",null,"After we have written the code, now if we run node_cli.py and run the test case\nfrom the server  we will see the Login was successful from the automation\nbrowser."),Object(a.b)("p",null,Object(a.b)("img",{src:t(288).default})))}d.isMDXComponent=!0},143:function(A,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return b}));var n=t(0),r=t.n(n);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function c(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var s=r.a.createContext({}),d=function(A){var e=r.a.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):c(c({},e),A)),t},u=function(A){var e=d(A.components);return r.a.createElement(s.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,i=A.parentName,s=o(A,["components","mdxType","originalType","parentName"]),u=d(t),p=n,b=u["".concat(i,".").concat(p)]||u[p]||l[p]||a;return t?r.a.createElement(b,c(c({ref:e},s),{},{components:t})):r.a.createElement(b,c({ref:e},s))}));function b(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=A,c.mdxType="string"==typeof A?A:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},278:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/1-97595321142692f379b794aa4fafdc3d.jpeg"},279:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/2-d9b17eae6ee6a943916053f3e4fc7078.jpeg"},280:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/3-b3189e1f6d8a5032c98697b36954be78.jpeg"},281:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/4-a300b87dbb773f20d1b3d810c324a254.jpeg"},282:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/5-91858677ffd253f242316b5fef6e9a51.jpeg"},283:function(A,e,t){"use strict";t.r(e),e.default="data:image/jpeg;base64,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"},284:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/7-4bb4a423c8b584deb51d69da18ad1a76.jpeg"},285:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/8-2b0c52e93e2c8722e7ef11cc1b969337.jpeg"},286:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/9-7da559eba6d39a96c2830c887addce00.jpeg"},287:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/10-a3f5d89d1a235e69d6cce033be6e8512.jpeg"},288:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/11-239b1ae1dcfa6d9c1c20425f0684cee3.jpeg"}}]);