(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(189)),o={id:"sso-microsoft-entra-id",title:"Microsoft Entra ID / Azure Active Directory"},i={unversionedId:"how-tos/admin/sso/sso-microsoft-entra-id",id:"how-tos/admin/sso/sso-microsoft-entra-id",isDocsHomePage:!1,title:"Microsoft Entra ID / Azure Active Directory",description:"Also known as:",source:"@site/docs\\how-tos\\admin\\sso\\sso-microsoft-entra-id.md",slug:"/how-tos/admin/sso/sso-microsoft-entra-id",permalink:"/docs/how-tos/admin/sso/sso-microsoft-entra-id",version:"current",sidebar:"docs",previous:{title:"How to update actions from control server",permalink:"/docs/how-tos/admin/how-to-update-actions-from-control-server"},next:{title:"ZeuZ Node",permalink:"/docs/zeuz-node"}},s=[],l={rightToc:s};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Also known as:"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Azure Active Directory")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Active Directory")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Microsoft Single Sign On (SSO)"))))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Open Microsoft Entra ID dashboard from the Azure developer portal.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Open Entra ID dashboard",src:n(492).default})),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},'Go to "App Registrations".')),Object(c.b)("p",null,Object(c.b)("img",{alt:"Go to app registration",src:n(493).default})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},'Click on "New registration".')),Object(c.b)("p",null,Object(c.b)("img",{alt:"Click on new registration",src:n(494).default})),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Register application by filling out the information as specified. The\nredirect URI should be of the form:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"https://<ZEUZ-URL>/Home/superAdminFunction/auth-integration/ad-callback/\n")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"Register ZeuZ application",src:n(495).default})),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},'Copy the "Application (client) ID" and "Directory (client) ID" and take note\nof them somewhere. Next, click on the "Add a certificate or secret".')),Object(c.b)("p",null,Object(c.b)("img",{alt:"Copy client and tenant ID",src:n(496).default})),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"Add a client secret. Description can be anything you want.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"add-client-secret",src:n(497).default})),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"Copy the client secret.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Copy client secret",src:n(498).default})),Object(c.b)("ol",{start:8},Object(c.b)("li",{parentName:"ol"},'Open the "SSO" page from "Admin > Integrations > SSO" menu in ZeuZ.')),Object(c.b)("p",null,Object(c.b)("img",{alt:"Open the SSO page in ZeuZ",src:n(499).default})),Object(c.b)("ol",{start:9},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Fill out the information for "Active Directory" tab. Put the "AD credentials"\nin the following format based on the values you\'ve copied earlier:'),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "client_id": "<APPLICATION-CLIENT-ID>",\n   "client_credential": "<CLIENT-SECRET>",\n   "tenant_id": "<DIRECTORY-TENANT-ID>"\n}\n')))),Object(c.b)("p",null,Object(c.b)("img",{alt:"Setup Active Directory information",src:n(500).default})),Object(c.b)("ol",{start:10},Object(c.b)("li",{parentName:"ol"},'Logout. You should now see the "Login with Microsoft" button.')),Object(c.b)("p",null,Object(c.b)("img",{alt:"Sign in with Microsoft",src:n(501).default})))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),f=a,d=p["".concat(o,".").concat(f)]||p[f]||u[f]||c;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},492:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/open-entra-id-dashboard-1c148124999b6817b0a0dad73ac762f2.png"},493:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/goto-app-registrations-c3f8f36e5d7e24bfffa8fc7028501b4e.png"},494:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/click-on-new-registration-e7c6e8044080e7ed52b3dfa04a71523c.png"},495:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/register-zeuz-application-96eb53e5c4f1cfc2675a0e5175d12a3e.png"},496:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/copy-client-tenant-id-00477f1ea6bfafc17406faceabff4a70.png"},497:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add-client-secret-506cf7ff36661a7796cc96aae4633bbf.png"},498:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/copy-client-secret-898c4e0cf76a8c193ca964e5cc7a5be9.png"},499:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/open-sso-in-zeuz-8f78cca8f6bb78e5c5a9a13c8ad0d275.png"},500:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/setup-ad-information-a17706642dffe97a9c1aab81e08865b3.png"},501:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sign-in-with-microsoft-ef50fcf3a13cc21fb22ece96cb621cb8.png"}}]);