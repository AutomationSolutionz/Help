(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(192)),b={id:"android-setup",title:"Setup android for automation"},i={unversionedId:"android-setup",id:"android-setup",isDocsHomePage:!1,title:"Setup android for automation",description:"Step 1:",source:"@site/docs\\android-setup.md",slug:"/android-setup",permalink:"/docs/android-setup",version:"current",sidebar:"docs",previous:{title:"ZeuZ Node Setup",permalink:"/docs/zeuz-node-setup"},next:{title:"Setup iOS for automation",permalink:"/docs/ios-setup"}},p=[{value:"Step 1:",id:"step-1",children:[{value:"Example",id:"example",children:[]}]},{value:"Step 2:",id:"step-2",children:[]},{value:"Step 3:",id:"step-3",children:[]},{value:"Step 4:",id:"step-4",children:[]},{value:"Step 5:",id:"step-5",children:[]},{value:"Step 6:",id:"step-6",children:[]},{value:"Step 7:",id:"step-7",children:[]},{value:"Step 8:",id:"step-8",children:[]},{value:"Step 9:",id:"step-9",children:[]},{value:"Step 10:",id:"step-10",children:[]}],l={rightToc:p};function c(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,b,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"step-1"},"Step 1:"),Object(o.b)("p",null,"If your computer's username contains a space, the ",Object(o.b)("strong",{parentName:"p"},"Android setup")," will not work."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Username"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Valid?"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asus Laptop"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asus_Laptop"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"If the username of the current Windows profile is ",Object(o.b)("strong",{parentName:"p"},"Asus Laptop"),", you need to change that to, let's say, ",Object(o.b)("strong",{parentName:"p"},"Asus_Laptop")," in your profile and ",Object(o.b)("strong",{parentName:"p"},"C:\\Users\\Asus_Laptop")," directory, and also update it in the environment variables. If you cannot do it, simply create another user and start working with that account."),Object(o.b)("h2",{id:"step-2"},"Step 2:"),Object(o.b)("p",null,"If you have ",Object(o.b)("strong",{parentName:"p"},"Java")," installed on your machine, which is a version other than ",Object(o.b)("strong",{parentName:"p"},"1.8"),", it is better to uninstall that ",Object(o.b)("strong",{parentName:"p"},"Java")," and then reinstall ",Object(o.b)("strong",{parentName:"p"},"Java 1.8")," from the provided link below:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u322-b06/OpenJDK8U-jdk_x64_windows_hotspot_8u322b06.msi"}),"https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u322-b06/OpenJDK8U-jdk_x64_windows_hotspot_8u322b06.msi")),Object(o.b)("h2",{id:"step-3"},"Step 3:"),Object(o.b)("p",null,"Download and install ",Object(o.b)("strong",{parentName:"p"},"Node.js"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi"}),"https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi")),Object(o.b)("p",null,"While installing ",Object(o.b)("strong",{parentName:"p"},"Node.js"),", it will ask whether to install additional tools and libraries\n(Chocolatey and Visual C++ runtime)- ",Object(o.b)("strong",{parentName:"p"},"make sure to skip those"),".",Object(o.b)("br",{parentName:"p"}),"\n","Installing Chocolatey automatically installs another version of Python, which will conflict with the existing Python setup."),Object(o.b)("h2",{id:"step-4"},"Step 4:"),Object(o.b)("p",null,"Download and install ",Object(o.b)("strong",{parentName:"p"},"Android Studio")," from the link below:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/studio"}),"https://developer.android.com/studio")),Object(o.b)("p",null,"You must run ",Object(o.b)("strong",{parentName:"p"},"Android Studio")," once. It will download additional tools for Appium to work.",Object(o.b)("br",{parentName:"p"}),"\n","Quit this installer and close all other programs.",Object(o.b)("br",{parentName:"p"}),"\n","Wait for all ",Object(o.b)("strong",{parentName:"p"},"Android Studio")," components to finish downloading and installing. It will take some time."),Object(o.b)("h2",{id:"step-5"},"Step 5:"),Object(o.b)("p",null,"Set some ",Object(o.b)("strong",{parentName:"p"},"Environment Variables"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:n(639).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click the Windows button, type ",Object(o.b)("strong",{parentName:"li"},"environment variables"),", and then open it.  "),Object(o.b)("li",{parentName:"ul"},"Now, you need to set some ",Object(o.b)("strong",{parentName:"li"},"Environment Variables"),".  "),Object(o.b)("li",{parentName:"ul"},"While setting environment variables, you will notice two panes:  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User Variables")," (only for the current user)  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"System Variables")," (for all users).",Object(o.b)("br",{parentName:"li"}),"You need to set the variables for all users.")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"JAVA_HOME = C:\\Program Files\\Eclipse Adoptium\\jdk-8.0.322.6-hotspot"),Object(o.b)("br",{parentName:"p"}),"\n","(It's usually like this when you install ",Object(o.b)("strong",{parentName:"p"},"Java")," from the link above).  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ANDROID_HOME = C:\\Users\\YOUR_PC_USERNAME_HERE\\AppData\\Local\\Android\\Sdk"),Object(o.b)("br",{parentName:"p"}),"\n","(Substitute ",Object(o.b)("strong",{parentName:"p"},"YOUR_PC_USERNAME_HERE")," with the appropriate user's folder).",Object(o.b)("br",{parentName:"p"}),"\n","Inside the path, you need to edit and add three paths. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"%ANDROID_HOME%\\tools"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"%ANDROID_HOME%\\tools\\bin"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"%ANDROID_HOME%\\platform-tools")),Object(o.b)("p",null,Object(o.b)("img",{src:n(640).default})),Object(o.b)("h2",{id:"step-6"},"Step 6:"),Object(o.b)("p",null,"To inspect elements, run ",Object(o.b)("strong",{parentName:"p"},"uiautomatorviewer.bat")," from the path:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"%ANDROID_HOME%\\tools\\bin"),".",Object(o.b)("br",{parentName:"p"}),"\n","It is better to create a desktop shortcut for this."),Object(o.b)("p",null,Object(o.b)("img",{src:n(641).default})),Object(o.b)("p",null,"You can use the directory marked in ",Object(o.b)("em",{parentName:"p"},"blue"),", then create a shortcut for the ",Object(o.b)("em",{parentName:"p"},"red-marked")," ",Object(o.b)("strong",{parentName:"p"},"uiautomatorviewer.bat")," and keep it on the desktop for future use.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"AppData")," is hidden by default, so make hidden files visible to access it this way."),Object(o.b)("p",null,"Sometimes, when launching ",Object(o.b)("strong",{parentName:"p"},"uiautomatorviewer.bat"),", it may crash.",Object(o.b)("br",{parentName:"p"}),"\n","The solution is to run ",Object(o.b)("strong",{parentName:"p"},"adb kill-server")," from the command prompt and then re-run ",Object(o.b)("strong",{parentName:"p"},"uiautomatorviewer.bat"),"."),Object(o.b)("h2",{id:"step-7"},"Step 7:"),Object(o.b)("p",null,"Install ",Object(o.b)("strong",{parentName:"p"},"Appium")," and ",Object(o.b)("strong",{parentName:"p"},"Appium-Doctor")," (optional) using the ",Object(o.b)("strong",{parentName:"p"},"Node Package Manager (npm)")," by executing the following commands:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g appium"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g appium-doctor"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:n(642).default})),Object(o.b)("h2",{id:"step-8"},"Step 8:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"HAXM")," Installer:",Object(o.b)("br",{parentName:"p"}),"\n","Sometimes, you may need to activate ",Object(o.b)("strong",{parentName:"p"},"HAXM")," from,",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Android_Setup > Tools > SDK Manager > Android SDK > SDK Tools > Intel x86 Emulator Accelerator (HAXM Installer)"),"."),Object(o.b)("p",null,"And install ",Object(o.b)("strong",{parentName:"p"},"HAXM")," from,\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\AndroidSDK\\extras\\intel\\Hardware_Accelerated_Execution_Manager\\intelhaxm-android"),".",Object(o.b)("br",{parentName:"p"}),"\n","Sometimes, you may need to activate ",Object(o.b)("strong",{parentName:"p"},"Intel Virtualization Technology")," from the ",Object(o.b)("strong",{parentName:"p"},"BIOS"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:n(643).default})),Object(o.b)("h2",{id:"step-9"},"Step 9:"),Object(o.b)("p",null,"Sometimes, in newer versions of ",Object(o.b)("strong",{parentName:"p"},"Android Studio"),", there is no ",Object(o.b)("em",{parentName:"p"},"tools")," folder in the ",Object(o.b)("strong",{parentName:"p"},"SDK")," folder. Here's how to enable it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Launch ",Object(o.b)("strong",{parentName:"li"},"Android Studio"),"  "),Object(o.b)("li",{parentName:"ul"},"Launch ",Object(o.b)("strong",{parentName:"li"},"SDK Manager"),"  "),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("strong",{parentName:"li"},"SDK tools")," tab, and uncheck the ",Object(o.b)("strong",{parentName:"li"},"Hide Obsolete Packages"),"  "),Object(o.b)("li",{parentName:"ul"},"Find and check / tick ",Object(o.b)("strong",{parentName:"li"},"Android SDK Tools(obsolete)"),"  "),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Apply"),".")),Object(o.b)("p",null,Object(o.b)("img",{src:n(644).default})),Object(o.b)("h2",{id:"step-10"},"Step 10:"),Object(o.b)("p",null,"Make sure to use the updated version of ",Object(o.b)("strong",{parentName:"p"},"ZeuZ")," node from this link."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases/tag/17.0.0"}),"https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases/tag/17.0.0"),Object(o.b)("br",{parentName:"p"}),"\n","If it's already downloaded, you don't need to download it again."))}c.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(b,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,b=new Array(o);b[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var l=2;l<o;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},639:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/environment-variable-ac86a87b3d0676ad48feef02bded73b9.png"},640:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/java-data-8c0c01bf3b72d1cef5d953b7a340b289.png"},641:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/automator-viewer-55fc3d45038b142b94c3c429ca124ca5.png"},642:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/save-appium-8512e33d8113fb434c56a67dc5d2e25e.png"},643:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/intel-haxm-78f5fbbea208fed83f80e2732e866db7.png"},644:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sdk-android-0d16ffcd2a410dae063e9a9d4fea8933.png"}}]);