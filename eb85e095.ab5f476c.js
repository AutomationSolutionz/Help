(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(192)),o={id:"ios-setup",title:"Setup iOS for automation"},l={unversionedId:"ios-setup",id:"ios-setup",isDocsHomePage:!1,title:"Setup iOS for automation",description:"Installing Prerequisites for iOS Testing",source:"@site/docs\\ios-setup.md",slug:"/ios-setup",permalink:"/docs/ios-setup",version:"current",sidebar:"docs",previous:{title:"Setup android for automation",permalink:"/docs/android-setup"},next:{title:"ZeuZ Node usage",permalink:"/docs/zeuz-node-usage"}},c=[{value:"1. Open Terminal",id:"1-open-terminal",children:[]},{value:"2. Homebrew Installation",id:"2-homebrew-installation",children:[]},{value:"3. Carthage Installation",id:"3-carthage-installation",children:[]},{value:"4. Nodejs, npm Installation",id:"4-nodejs-npm-installation",children:[]},{value:"5. Xcode Installation",id:"5-xcode-installation",children:[{value:"Install Xcode command-line tools",id:"install-xcode-command-line-tools",children:[]}]},{value:"6. Install Appium Inspector GUI for macOS",id:"6-install-appium-inspector-gui-for-macos",children:[{value:"Install Appium using the terminal:",id:"install-appium-using-the-terminal",children:[]},{value:"Alternatively, you can install Appium manually:",id:"alternatively-you-can-install-appium-manually",children:[]}]},{value:"6.1 Install Appium Inspector",id:"61-install-appium-inspector",children:[]},{value:"7. Connecting Simulator with Appium Inspector",id:"7-connecting-simulator-with-appium-inspector",children:[{value:"Download WebDriverAgent from this link (The Source Code Zip File)",id:"download-webdriveragent-from-this-link-the-source-code-zip-file",children:[]},{value:"Running Appium Server:",id:"running-appium-server",children:[]}]},{value:"Appendix",id:"appendix",children:[]}],s={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installing Prerequisites for iOS Testing")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Homebrew"),Object(i.b)("li",{parentName:"ul"},"Nodejs"),Object(i.b)("li",{parentName:"ul"},"npm"),Object(i.b)("li",{parentName:"ul"},"Xcode"),Object(i.b)("li",{parentName:"ul"},"Appium Inspector GUI.")),Object(i.b)("h2",{id:"1-open-terminal"},"1. Open Terminal"),Object(i.b)("p",null,"Press ",Object(i.b)("strong",{parentName:"p"},"Command + Spacebar")," and search for ",Object(i.b)("strong",{parentName:"p"},"Terminal"),", then hit ",Object(i.b)("strong",{parentName:"p"},"Enter"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(656).default})),Object(i.b)("p",null,Object(i.b)("img",{src:n(657).default})),Object(i.b)("h2",{id:"2-homebrew-installation"},"2. Homebrew Installation"),Object(i.b)("p",null,"Open a browser and go to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh"}),"brew.sh"),", and copy the command under ",Object(i.b)("strong",{parentName:"p"},"Install Homebrew"),". The command will be like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),Object(i.b)("p",null,"Now open ",Object(i.b)("strong",{parentName:"p"},"Terminal")," (Shortcut method: press ",Object(i.b)("inlineCode",{parentName:"p"},"Command + Spacebar")," to open Spotlight search, type ",Object(i.b)("strong",{parentName:"p"},"Terminal"),", and hit ",Object(i.b)("inlineCode",{parentName:"p"},"Enter"),".",Object(i.b)("br",{parentName:"p"}),"\n","Paste ",Object(i.b)("inlineCode",{parentName:"p"},"Command + V")," the copied Command into ",Object(i.b)("strong",{parentName:"p"},"Terminal")," and hit ",Object(i.b)("strong",{parentName:"p"},"Enter"),".",Object(i.b)("br",{parentName:"p"}),"\n","Provide the user password in the ",Object(i.b)("strong",{parentName:"p"},"Terminal")," if it asks."),Object(i.b)("p",null,"After successful installation, there will be a command on the ",Object(i.b)("strong",{parentName:"p"},"Terminal"),"; just copy that command and paste it into the ",Object(i.b)("strong",{parentName:"p"},"Terminal"),".",Object(i.b)("br",{parentName:"p"}),"\n","The command will look like the one below but with a different ",Object(i.b)("strong",{parentName:"p"},"UserName"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'(echo; echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\') >> /Users/UserName/.zprofile            \n    eval "$(/opt/homebrew/bin/brew shellenv)"  \n')),Object(i.b)("h2",{id:"3-carthage-installation"},"3. Carthage Installation"),Object(i.b)("p",null,"Enter the following command in the ",Object(i.b)("strong",{parentName:"p"},"Terminal"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install carthage\n")),Object(i.b)("h2",{id:"4-nodejs-npm-installation"},"4. Nodejs, npm Installation"),Object(i.b)("p",null,"To install both ",Object(i.b)("strong",{parentName:"p"},"Nodejs")," and ",Object(i.b)("strong",{parentName:"p"},"npm"),", enter the following command in the ",Object(i.b)("strong",{parentName:"p"},"Terminal"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install node\n")),Object(i.b)("p",null,"After installation, to check if ",Object(i.b)("strong",{parentName:"p"},"Nodejs")," is installed or not, enter the following command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node --version\n")),Object(i.b)("p",null,"To check if ",Object(i.b)("strong",{parentName:"p"},"npm")," is installed or not, enter the following command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm -v\n")),Object(i.b)("h2",{id:"5-xcode-installation"},"5. Xcode Installation"),Object(i.b)("p",null,"You need to install ",Object(i.b)("strong",{parentName:"p"},"Xcode")," from the App Store. Make sure to enter your ",Object(i.b)("strong",{parentName:"p"},"Apple ID")," credentials correctly. Otherwise, there is a chance of your ",Object(i.b)("strong",{parentName:"p"},"Apple ID")," getting disabled.",Object(i.b)("br",{parentName:"p"}),"\n","After installation, execute the following command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"xcode-select --version\n")),Object(i.b)("h3",{id:"install-xcode-command-line-tools"},"Install Xcode command-line tools"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"xcode-select --install \n")),Object(i.b)("p",null,"Verify the installation by running the following command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"gcc --version\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/9329243/how-to-install-xcode-command-line-tools"}),"https://stackoverflow.com/questions/9329243/how-to-install-xcode-command-line-tools"),",",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/news/install-xcode-command-line-tools/"}),"https://www.freecodecamp.org/news/install-xcode-command-line-tools/")),Object(i.b)("h2",{id:"6-install-appium-inspector-gui-for-macos"},"6. Install Appium Inspector GUI for macOS"),Object(i.b)("h3",{id:"install-appium-using-the-terminal"},"Install Appium using the terminal:"),Object(i.b)("p",null,"Install appium:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -g appium\n")),Object(i.b)("p",null,"Install appium-doctor:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -g appium-doctor\n")),Object(i.b)("p",null,"Install xcuitestdriver"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"appium driver install xcuitest\n")),Object(i.b)("h3",{id:"alternatively-you-can-install-appium-manually"},"Alternatively, you can install Appium manually:"),Object(i.b)("p",null,"Visit the Appium Desktop GitHub page at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/appium/appium-desktop/releases"}),"https://github.com/appium/appium-desktop/releases"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("strong",{parentName:"li"},"Latest Release")," section, click on the ",Object(i.b)("strong",{parentName:"li"},"Assets")," drop-down to expand the list of available files.  "),Object(i.b)("li",{parentName:"ul"},"Look for the file with the name ",Object(i.b)("strong",{parentName:"li"},"Appium-mac-x.x.x.dmg")," where ",Object(i.b)("strong",{parentName:"li"},"x.x.x")," represents the version number. This is the file you need to download.  "),Object(i.b)("li",{parentName:"ul"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Download")," button next to the file name to start the download.")),Object(i.b)("p",null,"Once the download is complete, open the downloaded file and double-click on the ",Object(i.b)("strong",{parentName:"p"},"Appium")," icon to launch the ",Object(i.b)("strong",{parentName:"p"},"Appium Desktop Inspector GUI"),". Follow the on-screen instructions to complete the installation.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"While opening the ",Object(i.b)("strong",{parentName:"li"},"GUI"),", you may encounter the message: ",Object(i.b)("strong",{parentName:"li"},"Appium Inspector can't be opened because Apple cannot check it for malicious software"),".  "),Object(i.b)("li",{parentName:"ul"},"To mitigate this issue, navigate to ",Object(i.b)("inlineCode",{parentName:"li"},"System preferences > Security & Privacy > General")," and select ",Object(i.b)("strong",{parentName:"li"},"Open Anyway")," for Appium Inspector.")),Object(i.b)("h2",{id:"61-install-appium-inspector"},"6.1 Install Appium Inspector"),Object(i.b)("p",null,"If ",Object(i.b)("strong",{parentName:"p"},"Appium Inspector")," has not been installed yet then go to the following link and download the latest ",Object(i.b)("strong",{parentName:"p"},".dmg")," file."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/appium/appium-inspector/releases"}),"https://github.com/appium/appium-inspector/releases")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://github.com/AutomationSolutionz/Zeuz_Python_Node/assets/47948901/8ec6ce44-171e-4a22-8ff8-9ca84c318ba5",alt:"appium_inspector_download"}))),Object(i.b)("p",null,"After the download has been completed double click on the ",Object(i.b)("strong",{parentName:"p"},".dmg")," file and drag the file to application folder to complete the installation."),Object(i.b)("p",null,"After the installation, open the ",Object(i.b)("strong",{parentName:"p"},"Appium Inspector"),". You may receive some warning but right click on the logo and click ",Object(i.b)("strong",{parentName:"p"},"Open"),". That should open the inspector."),Object(i.b)("h2",{id:"7-connecting-simulator-with-appium-inspector"},"7. Connecting Simulator with Appium Inspector"),Object(i.b)("p",null,"Create an empty project with ",Object(i.b)("strong",{parentName:"p"},"hello world")," in it. Then build it on a specific device to open simulator.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Press ",Object(i.b)("inlineCode",{parentName:"li"},"Command + spacebar")," to type ",Object(i.b)("strong",{parentName:"li"},"Xcode"),", then open ",Object(i.b)("strong",{parentName:"li"},"Xcode"),".  "),Object(i.b)("li",{parentName:"ul"},"Then follow the screenshots below.")),Object(i.b)("p",null,"Select ",Object(i.b)("strong",{parentName:"p"},"Create a new Xcode project"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(658).default})),Object(i.b)("p",null,"Click ",Object(i.b)("strong",{parentName:"p"},"Next"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(659).default})),Object(i.b)("p",null,"Click ",Object(i.b)("strong",{parentName:"p"},"Next"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(660).default})),Object(i.b)("p",null,"Click ",Object(i.b)("strong",{parentName:"p"},"Create"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(661).default})),Object(i.b)("p",null,"Click on the ",Object(i.b)("strong",{parentName:"p"},"Marked area"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(662).default})),Object(i.b)("p",null,Object(i.b)("img",{src:n(663).default})),Object(i.b)("p",null,"Take a look at the emulator's ",Object(i.b)("strong",{parentName:"p"},"Name")," and ",Object(i.b)("strong",{parentName:"p"},"Version"),". It will be needed when creating capabilities for the ",Object(i.b)("strong",{parentName:"p"},"Appium")," server."),Object(i.b)("p",null,Object(i.b)("img",{src:n(664).default})),Object(i.b)("h3",{id:"download-webdriveragent-from-this-link-the-source-code-zip-file"},"Download WebDriverAgent from this link (The Source Code Zip File)"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/appium/WebDriverAgent/releases"}),"https://github.com/appium/WebDriverAgent/releases")),Object(i.b)("p",null,Object(i.b)("img",{src:n(665).default})),Object(i.b)("p",null,"Extract the zip file and double-click on the ",Object(i.b)("strong",{parentName:"p"},"WebDriverAgent.xcodeproj")," file."),Object(i.b)("p",null,Object(i.b)("img",{src:n(666).default})),Object(i.b)("p",null,"Select ",Object(i.b)("strong",{parentName:"p"},"WebDriverAgent")," from the left menu as shown in the screenshot below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(667).default})),Object(i.b)("p",null,"Click on the ",Object(i.b)("strong",{parentName:"p"},"Integration App")," and select ",Object(i.b)("strong",{parentName:"p"},"WebDriverAgentRunner")," as shown in the screenshot below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(668).default})),Object(i.b)("p",null,Object(i.b)("img",{src:n(669).default})),Object(i.b)("p",null,"Select ",Object(i.b)("strong",{parentName:"p"},"Product > Test"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(670).default})),Object(i.b)("p",null,"After that, ",Object(i.b)("strong",{parentName:"p"},"WebDriverAgentRunner")," will be successfully installed on the simulator."),Object(i.b)("p",null,Object(i.b)("img",{src:n(671).default})),Object(i.b)("h3",{id:"running-appium-server"},"Running Appium Server:"),Object(i.b)("p",null,"Go to ",Object(i.b)("strong",{parentName:"p"},"Terminal")," and enter the command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"appium --allow-cors\n")),Object(i.b)("p",null,"Open ",Object(i.b)("strong",{parentName:"p"},"Appium Inspector"),", and you should see the following interface.",Object(i.b)("br",{parentName:"p"}),"\n","Now, you have to add your desired capabilities and save them."),Object(i.b)("p",null,Object(i.b)("img",{src:n(672).default})),Object(i.b)("p",null,"To learn more about desired capabilities, visit the following link."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://appium.io/docs/en/2.1/guides/caps/"}),"https://appium.io/docs/en/2.1/guides/caps/")),Object(i.b)("p",null,"Just as shown in the image above, enter a key-value pair and click the ",Object(i.b)("inlineCode",{parentName:"p"},"+")," icon to add a new field for another key-value pair.",Object(i.b)("br",{parentName:"p"}),"\n","One thing to remember is that you can obtain the values of ",Object(i.b)("strong",{parentName:"p"},"deviceName")," and ",Object(i.b)("strong",{parentName:"p"},"platformVersion")," from the top of the launched simulator.",Object(i.b)("br",{parentName:"p"}),"\n","After you have finished adding the necessary key-value pairs, click ",Object(i.b)("strong",{parentName:"p"},"Save As...")," to save the information for later use.",Object(i.b)("br",{parentName:"p"}),"\n","Then click ",Object(i.b)("strong",{parentName:"p"},"Start Session")," to start the session.",Object(i.b)("br",{parentName:"p"}),"\n","The simuators screen should be displayed on the ",Object(i.b)("strong",{parentName:"p"},"Appium Inspector"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(673).default})),Object(i.b)("p",null,"Now, to use a previously saved capability, click on the ",Object(i.b)("strong",{parentName:"p"},"Saved Capability"),", select an already saved capability, and click on ",Object(i.b)("strong",{parentName:"p"},"Start session"),".",Object(i.b)("br",{parentName:"p"}),"\n","After that, the simulator's screen should be displayed on the ",Object(i.b)("strong",{parentName:"p"},"Appium Inspector"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(674).default})),Object(i.b)("h2",{id:"appendix"},"Appendix"),Object(i.b)("h4",{id:"here-is-a-brief-overview-of-these-toolssoftware-and-why-we-need-to-install-them"},"Here is a brief overview of these tools/software and why we need to install them."),Object(i.b)("h4",{id:"homebrew"},"Homebrew:"),Object(i.b)("p",null,"Homebrew is a package manager for macOS that enables you to easily install and manage various software packages and utilities on your system. It is commonly used by developers and other users to install and manage command-line tools, libraries, and other dependencies required for various software development projects."),Object(i.b)("h4",{id:"nodejs"},"Node.js:"),Object(i.b)("p",null,"Node.js is an open source, cross-platform JavaScript runtime environment that allows you to run JavaScript on the server-side. It is commonly used to build scalable, networked applications, and is particularly popular for developing web applications and RESTful APIs."),Object(i.b)("h4",{id:"npm"},"npm:"),Object(i.b)("p",null,"npm is the default package manager for Node.js and is used to install, manage, and share packages of code written in JavaScript. It comprises the largest eco-system of open-source libraries globally, with millions of packages available for use in Node.js projects."),Object(i.b)("h4",{id:"appium-gui-inspector"},"Appium GUI Inspector:"),Object(i.b)("p",null,"Appium GUI Inspector is a graphical user interface tool used to inspect the user interface (UI) elements of mobile applications. It enables developers and testers to easily view and interact with the UI elements of their mobile applications and to create and execute Appium test scripts."),Object(i.b)("h4",{id:"xcode"},"Xcode:"),Object(i.b)("p",null,"Xcode is an integrated development environment (IDE) for macOS that is used to develop software for Apple's platforms, including macOS, iOS, watchOS, and tvOS. It includes a suite of tools for developing, debugging, and testing software, comprising a code editor, a graphical user interface designer, a build system, and various debugging and profiling tools. It is particularly important for developing native iOS appications, as it includes the iOS SDK and enables you to build  and test your apps on a simulator or physical devices. "))}p.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},656:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/terminal-open-e880d4c1bb011e5e9184b9c80260a9bb.png"},657:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/last-login-060462a102ef7d7d51e4f839a301d80b.png"},658:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xcode-project-0bda5eb4f0dc4d7dceaea04c94ba1b36.png"},659:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/next-button-1f9b2f4b9d85e389ced31df21886b6da.png"},660:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-project-6e7cb18d78f7265b35e639b1e07cef44.png"},661:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-project-ee161e611c37bb0ddd250676bd0e8d48.png"},662:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/my-mac-c62134e9416483d9017dee3c91d756ad.png"},663:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/content-view-ce9672b08a8ac7ce7e2720c2bea86064.png"},664:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ios-setup-3e008de8540e4da9f4d741b0084c1b76.png"},665:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/web-driver-e24702f0e0b90869952e5f796e192e5f.png"},666:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xcode-proj-0e7769d4ccec2211ce7b9a1cd82aaa7f.png"},667:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/select-webdriver-787cb0aa6e6129c608a27b13541625c0.png"},668:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/web-integration-356f93e478f7507679b2fe28d7931c25.png"},669:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/integration-app-08da96e250750b5727eee37667f59ff7.png"},670:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/product-test-03cfc24a36325e994179b6ec95bb9285.png"},671:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-simulator-4ecdb2e11a39e3303ce6b72d39d0a1e2.png"},672:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/appium-node-ed4556a896a22e293fcf579557171956.png"},673:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/save-appium-355dd628b429d64446e65db0fe5cfa27.png"},674:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/appium-screen-9c275ac91854ca93a51b954f37bd8f31.png"}}]);