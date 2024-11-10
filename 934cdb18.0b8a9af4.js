(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(193)),i={id:"easy-ocr-installation",title:"EasyOCR Installation"},s={unversionedId:"how-tos/easy-ocr-installation",id:"how-tos/easy-ocr-installation",isDocsHomePage:!1,title:"EasyOCR Installation",description:"1) EasyOCR requires Python 3.6 or greater to run. Currently ZeuZ node is running at Python 3.11 which will fulfill this requirement.",source:"@site/docs\\how-tos\\easy-OCR-installation.md",slug:"/how-tos/easy-ocr-installation",permalink:"/docs/how-tos/easy-ocr-installation",version:"current",sidebar:"docs",previous:{title:"Whitelist URLs/IPs for node",permalink:"/docs/ip-url-whitelist"},next:{title:"ZeuZ Node Setup",permalink:"/docs/zeuz-node-setup"}},c=[{value:"Using EasyOCR to Detect and Click Elements",id:"using-easyocr-to-detect-and-click-elements",children:[]},{value:"Pytesseract Installation",id:"pytesseract-installation",children:[]}],p={rightToc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"1) ",Object(o.b)("strong",{parentName:"p"},"EasyOCR")," requires ",Object(o.b)("em",{parentName:"p"},"Python 3.6")," or greater to run. Currently ",Object(o.b)("strong",{parentName:"p"},"ZeuZ")," node is running at ",Object(o.b)("em",{parentName:"p"},"Python 3.11")," which will fulfill this requirement."),Object(o.b)("p",null,"2) ",Object(o.b)("strong",{parentName:"p"},"EasyOCR")," depends on a Python deep learning library called ",Object(o.b)("strong",{parentName:"p"},"PyTorch"),". Install it by running  ",Object(o.b)("em",{parentName:"p"},"pip install torch torchvision torchaudio"),"."),Object(o.b)("p",null,"3) Install ",Object(o.b)("strong",{parentName:"p"},"EasyOCR")," by running ",Object(o.b)("em",{parentName:"p"},"pip install easyocr")," on your terminal."),Object(o.b)("p",null,"4) In order to perform GUI (Graphical User Interface) automation with keyboard and mouse after detection, the Python library ",Object(o.b)("strong",{parentName:"p"},"PyAutoGUI")," will be used. Run ",Object(o.b)("em",{parentName:"p"},"pip install pyautogui to install it"),"."),Object(o.b)("p",null,"5) ",Object(o.b)("em",{parentName:"p"},"(OPTIONAL)")," ",Object(o.b)("strong",{parentName:"p"},"OpenCV")," is another Python library that allows image processing tasks such as image manipulation, object detection, and feature extraction. While ",Object(o.b)("strong",{parentName:"p"},"OpenCV")," is not a required library for ",Object(o.b)("strong",{parentName:"p"},"EasyOCR")," to run, it helps with removing any noise associated with the detection by preprocessing. Install ",Object(o.b)("strong",{parentName:"p"},"OpenCV")," by running ",Object(o.b)("em",{parentName:"p"},"pip install opencv-python"),"."),Object(o.b)("h3",{id:"using-easyocr-to-detect-and-click-elements"},"Using EasyOCR to Detect and Click Elements"),Object(o.b)("p",null,"1) Import the dependencies installed."),Object(o.b)("p",null,Object(o.b)("img",{src:n(515).default})),Object(o.b)("p",null,"2) Initialize ",Object(o.b)("strong",{parentName:"p"},"EasyOCR")," Reader with ",Object(o.b)("em",{parentName:"p"},"reader = easyocr.Reader(","['en']",")")),Object(o.b)("p",null,"3) Define the region of interest on your screen capture. The region can be defined by ",Object(o.b)("em",{parentName:"p"},"region = (left, top, width, height)"),". For example, a region of ",Object(o.b)("em",{parentName:"p"},"region = (100, 100, 800, 600)")," means that an area of width 800 and height 600 will be scanned on the region. This region will start 100 pixels from the left side of the screen and 100 pixels from the top."),Object(o.b)("p",null,Object(o.b)("img",{src:n(516).default})),Object(o.b)("p",null,"4) Capture a screenshot of the element you wish to detect or give the file path to the screenshot of the element. You can take a screenshot using ",Object(o.b)("em",{parentName:"p"},"pyautogui"),". You can use *screenshot = pyautogui.screenshot() to take a screenshot of the screen."),Object(o.b)("p",null,"5) The screenshot can either be saved with ",Object(o.b)("em",{parentName:"p"},"screenshot_path = screenshot.png")," and read with ",Object(o.b)("em",{parentName:"p"},"cv2.imread(screenshot_path), or with an in-memory approach using the numpy")," library. With ",Object(o.b)("strong",{parentName:"p"},"image = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)")," it can be converted to a ",Object(o.b)("strong",{parentName:"p"},"NumPy")," array and subsequently to BGR format which is used by ",Object(o.b)("strong",{parentName:"p"},"OpenCV"),"."),Object(o.b)("p",null,"6) Read the image using ",Object(o.b)("em",{parentName:"p"},"results = reader.readtext(image)"),"."),Object(o.b)("p",null,"7)\n",Object(o.b)("img",{src:n(517).default})),Object(o.b)("p",null,"The detected results are represented by a bounding box with 4 corners. We take the center of this bounding box and click on the element that we desired using ",Object(o.b)("em",{parentName:"p"},"pyautogui"),"."),Object(o.b)("h3",{id:"pytesseract-installation"},"Pytesseract Installation"),Object(o.b)("p",null,"1) Install Tesseract OCR from the ",Object(o.b)("strong",{parentName:"p"},"Github Repository"),"."),Object(o.b)("p",null,"2) Add Tesseract OCR to your system path."),Object(o.b)("p",null,"3) Run ",Object(o.b)("em",{parentName:"p"},"pip install pytesseract")," on your terminal."),Object(o.b)("p",null,"4) ",Object(o.b)("strong",{parentName:"p"},"Pytesseract")," requires a ",Object(o.b)("em",{parentName:"p"},"Python Imaging Library")," called ",Object(o.b)("strong",{parentName:"p"},"pillow")," to run. Install it by running ",Object(o.b)("em",{parentName:"p"},"pip install pillow"),"."),Object(o.b)("p",null,"5) Open and image using ",Object(o.b)("em",{parentName:"p"},"image = Image.open('path_to_image.png')"),"."),Object(o.b)("p",null,"6) Perform OCR using ",Object(o.b)("em",{parentName:"p"},"text = pytesseract.image_to_string(image)"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("em",{parentName:"p"},"print(text)"),"."))}l.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},515:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/easy_ocr_imports-d74a90f8ba0bf0944fe092068adafae5.png"},516:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/easy_ocr_photo2-a6ba19da9355ddbf427b802401cdc948.png"},517:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/easy_ocr_photo3-0e09da6841ee356f757c556cd4ed10a8.png"}}]);