(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(171)),r=(n(175),{id:"zeuz-node-setup",title:"ZeuZ Node Setup",sidebar_label:"Setup"}),c={unversionedId:"zeuz-node-setup",id:"zeuz-node-setup",isDocsHomePage:!1,title:"ZeuZ Node Setup",description:"This document walks you through the setup process of ZeuZ Node. We've",source:"@site/docs\\zeuz-node-setup.md",slug:"/zeuz-node-setup",permalink:"/docs/zeuz-node-setup",version:"current",sidebar_label:"Setup",sidebar:"docs",previous:{title:"ZeuZ Node",permalink:"/docs/zeuz-node"},next:{title:"ZeuZ Node usage",permalink:"/docs/zeuz-node-usage"}},l=[{value:"Video instructions",id:"video-instructions",children:[]},{value:"<code>Core setup</code>",id:"core-setup",children:[{value:"Python Setup",id:"python-setup",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Mac OS X",id:"mac-os-x",children:[]},{value:"Verify python setup",id:"verify-python-setup",children:[]},{value:"Core setup &amp; node launch",id:"core-setup--node-launch",children:[]}]},{value:"<code>Mobile setup</code>",id:"mobile-setup",children:[{value:"Android setup",id:"android-setup",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Automation setup",id:"automation-setup",children:[]},{value:"iOS setup",id:"ios-setup",children:[]},{value:"Pre-requisites",id:"pre-requisites-1",children:[]},{value:"Automation setup",id:"automation-setup-1",children:[]}]},{value:"<code>Virtual Environment Setup</code> (Advanced)",id:"virtual-environment-setup-advanced",children:[{value:"Linux",id:"linux-1",children:[]},{value:"Mac",id:"mac",children:[]},{value:"Windows",id:"windows",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document walks you through the setup process of ZeuZ Node. We've\ntried to make sure that as many of the steps of the setup process are\nautomated, so that you don't have to go and manually figure things\nout. However, due to differences in how different machines are set up,\nthe automated process sometimes may not work out 100% correctly.\nSpecially, setting different ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," variables for moving components\nrequired by ZeuZ Node."),Object(i.b)("h2",{id:"video-instructions"},"Video instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/LGmr6ZpoPGk"}),"Windows Setup")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/TCPmaUgS8hk"}),"Mac/OS X Setup"))),Object(i.b)("h2",{id:"core-setup"},Object(i.b)("inlineCode",{parentName:"h2"},"Core setup")),Object(i.b)("p",null,"At the start of core setup you have to setup python on your machine.\nPlease download and install the latest Python 3.x version available\nfrom ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/downloads/"}),"python.org"),". You can download\nthe last tested (by ZeuZ team) Python version from\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe"}),"this link"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"ZeuZ Node requires Python 3 to run. "))),Object(i.b)("h3",{id:"python-setup"},"Python Setup"),Object(i.b)("p",null,"When installing on Windows, please check that ",Object(i.b)("strong",{parentName:"p"},"Add Python 3.x to\nPATH")," checkbox is selected. Also make it sure that previous checkbox of ",Object(i.b)("strong",{parentName:"p"},"Install\nlauncher for all users")," is not selected."),Object(i.b)("p",null,Object(i.b)("img",{src:n(480).default})),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"Run the following commands to install python3 and pip3."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install python3 python3-pip --yes\n")),Object(i.b)("p",null,"To make python3 the default python version, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 10\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Linux setup is officially supported for Ubuntu only. Due to the huge\nvariety of package managers, file system hierarchies and unknown\ndependencies available on each platform, it is difficult to support\nall of them. However, it has been tested to run on many other linux\ndistributions (Arch Linux, Debian, Linux Mint, Fedora, etc.) if the\nrequired packages are installed."))),Object(i.b)("h3",{id:"mac-os-x"},"Mac OS X"),Object(i.b)("p",null,"For OS X, download python 3.x from\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/downloads/"}),"python.org")," and install."),Object(i.b)("h3",{id:"verify-python-setup"},"Verify python setup"),Object(i.b)("p",null,"After the installation is complete, open Powershell/CMD from Start\nmenu (on Windows), Terminal (on Mac and Linux), then run the following\ncommand to verify that the installation is successful."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"$ python --version\n$ pip --version\n")),Object(i.b)("p",null,"These should print Python 3.x as output where x is the version that\nyou downloaded. Also, if you're on Windows make sure that its the\n32-bit version."),Object(i.b)("h3",{id:"core-setup--node-launch"},"Core setup & node launch"),Object(i.b)("p",null,"The core setup is for installing ZeuZ Node and some core automation\ncomponents. The core setup is the same for all platforms and is less\nlikely to fail. The following is a non-exhaustive list of components\nthat are installed:"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Web/Browser automation"),Object(i.b)("li",{parentName:"ul"},"Cross-platform GUI automation"),Object(i.b)("li",{parentName:"ul"},"REST/API automation"),Object(i.b)("li",{parentName:"ul"},"Database automation"),Object(i.b)("li",{parentName:"ul"},"Excel automation"),Object(i.b)("li",{parentName:"ul"},"[Windows only]"," Windows automation"),Object(i.b)("li",{parentName:"ul"},"Misc. other automation components",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Common actions (variables, loops, conditions, etc.)"),Object(i.b)("li",{parentName:"ul"},"Files/Folder actions"),Object(i.b)("li",{parentName:"ul"},"Screenshot utilities"),Object(i.b)("li",{parentName:"ul"},"etc.")))))),Object(i.b)("p",null,"To start the setup, open the ",Object(i.b)("inlineCode",{parentName:"p"},"ZeuZ_Python_Node")," folder. Double click to run the\n",Object(i.b)("inlineCode",{parentName:"p"},"node_cli.py")," file which will automatically launch the node & start core setup.\nFor Mac/Linux, launch the terminal\nand navigate to the directory where the ",Object(i.b)("inlineCode",{parentName:"p"},"node_cli.py")," file is\npresent and then launch it. As an example, if you've downloaded the\n",Object(i.b)("inlineCode",{parentName:"p"},"ZeuZ_Python_Node")," folder in your ",Object(i.b)("inlineCode",{parentName:"p"},"Downloads")," folder and\nextracted it there, start the setup by running the following\ncommands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~/Downloads/ZeuZ_Python_Node/\n$ python node_cli.py\n")),Object(i.b)("h2",{id:"mobile-setup"},Object(i.b)("inlineCode",{parentName:"h2"},"Mobile setup")),Object(i.b)("h3",{id:"android-setup"},"Android setup"),Object(i.b)("p",null,"Android automation is supported on all three of the platforms -\nWindows, Mac and Linux."),Object(i.b)("h3",{id:"pre-requisites"},"Pre-requisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.android.com/studio#downloads"}),"Android\nStudio")),Object(i.b)("li",{parentName:"ol"},"Install Android Studio"),Object(i.b)("li",{parentName:"ol"},"Launch Android Studio which will prompt you to download Android SDK\nand an Android emulator image. Download them."),Object(i.b)("li",{parentName:"ol"},"Setup the ",Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_HOME")," environment variable according to your\nAndroid SDK install directory. If you're confused, try going\nthrough\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.androidcentral.com/installing-android-sdk-windows-mac-and-linux-tutorial"}),"this"),"\narticle.")),Object(i.b)("h3",{id:"automation-setup"},"Automation setup"),Object(i.b)("p",null,"To start the android setup, run the ",Object(i.b)("inlineCode",{parentName:"p"},"ZeuZ_Node_Installer.py")," file. Double\nclick to open the file on Windows. For Mac/Linux, launch the terminal\nand navigate to the directory where the Zeuz Node installer file is\npresent and then launch it. As an example, if you've downloaded the\n",Object(i.b)("inlineCode",{parentName:"p"},"ZeuZ_Python_Node_Setup.zip")," file in your ",Object(i.b)("inlineCode",{parentName:"p"},"Downloads")," folder and\nextracted it there, start the installer by running the following\ncommands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~/Downloads/ZeuZ_Python_Node_Setup/\n$ python ZeuZ_Node_Installer.py\n")),Object(i.b)("p",null,Object(i.b)("img",{src:n(481).default})),Object(i.b)("p",null,"As the Core setup and Android SDK setup have already been completed on your machine,only select ",Object(i.b)("strong",{parentName:"p"},"Android setup")," and then click on\n",Object(i.b)("inlineCode",{parentName:"p"},"Install"),"."),Object(i.b)("h3",{id:"ios-setup"},"iOS setup"),Object(i.b)("p",null,"iOS automation is only available on Mac OS X."),Object(i.b)("h3",{id:"pre-requisites-1"},"Pre-requisites"),Object(i.b)("p",null,"You'll need to install Xcode from the App Store. Next, a simulator is\nneeded for testing the applications, which you can install/access via\nXcode."),Object(i.b)("h3",{id:"automation-setup-1"},"Automation setup"),Object(i.b)("p",null,"Once done with the pre-requisites, uncheck all the checkboxes and\nselect ",Object(i.b)("strong",{parentName:"p"},"iOS Setup")," only. Then click on ",Object(i.b)("inlineCode",{parentName:"p"},"Install"),"."),Object(i.b)("h2",{id:"virtual-environment-setup-advanced"},Object(i.b)("inlineCode",{parentName:"h2"},"Virtual Environment Setup")," (Advanced)"),Object(i.b)("p",null,"You can also install use ZeuZ Node by setting up a Python virtual enviornment.\nDoing so requires manually installing the python modules required for ZeuZ Node\nto run."),Object(i.b)("h3",{id:"linux-1"},"Linux"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cd /path/to/ZeuZ_Python_Node\n$ python3 -m venv .venv\n$ source .venv/bin/activate\n$ pip install -r requirements-linux.txt\n")),Object(i.b)("h3",{id:"mac"},"Mac"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cd /path/to/ZeuZ_Python_Node\n$ python3 -m venv .venv\n$ source .venv/bin/activate\n$ pip install -r requirements-mac.txt\n")),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"> cd /path/to/ZeuZ_Python_Node\n> python3 -m venv .venv\n> .venv/Scripts/activate\n> pip install -r requirements-win.txt\n")))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(r,".").concat(b)]||d[b]||p[b]||i;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(24),o=n(173);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},480:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/python_setup-path-b564367873c7546ad68ffffdfd5ca84e.png"},481:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/android_setup-16a5fd23275bcaa56726488e49ecd25d.png"}}]);