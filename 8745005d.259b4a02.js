(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,d=b["".concat(l,".").concat(p)]||b[p]||f[p]||a;return n?o.a.createElement(d,c(c({ref:t},i),{},{components:n})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},111:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},112:function(e,t,n){"use strict";var r=n(0),o=n(111);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},114:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(112),l=n(107),c=n(51),u=n.n(c);const i=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:f}=e,{tabGroupChoices:p,setTabGroupChoices:d}=Object(a.a)(),[m,v]=Object(r.useState)(c),[y,O]=Object(r.useState)(!1);if(null!=f){const e=p[f];null!=e&&e!==m&&b.some(t=>t.value===e)&&v(e)}const j=e=>{v(e),null!=f&&d(f,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},T=()=>{O(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",T)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":m===e}),style:y?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),w(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},115:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"items",(function(){return b})),n.d(t,"CourseItem",(function(){return f})),n.d(t,"CourseLevel",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(105)),l=n(114),c=n(115),u={id:"course-mobile",title:"Course - Mobile",sidebar_label:"Mobile"},i={unversionedId:"course-mobile",id:"course-mobile",isDocsHomePage:!1,title:"Course - Mobile",description:"export const items = [",source:"@site/docs/course-mobile.mdx",permalink:"/docs/course-mobile",sidebar_label:"Mobile",sidebar:"docs",previous:{title:"Course - Web",permalink:"/docs/course-web"},next:{title:"Course - REST API",permalink:"/docs/course-rest-api"}},s=[],b=[{level:1,title:"Dummy",youtube:"",test_case:"",actions:""}],f=function(e){var t=e.children,n=e.youtube,r=e.actions,o=e.test_case;return Object(a.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(a.b)("strong",null,Object(a.b)("a",{href:n||"#",target:n?"_blank":""},t)),Object(a.b)("br",null),Object(a.b)("strong",null,"Actions"),": ",r||"N/A",Object(a.b)("br",null),Object(a.b)("strong",null,"Sample Test Case"),": ",o||"N/A")},p=function(e){e.children;var t=e.level,n=b.filter((function(e){return e.level==t})).map((function(e){return Object(a.b)("li",{key:e.youtube},Object(a.b)(f,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(a.b)("ol",null,n)},d={rightToc:s,items:b,CourseItem:f,CourseLevel:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"},{label:"Level 3",value:"level_3"},{label:"Level 4",value:"level_4"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"level_1",mdxType:"TabItem"},Object(a.b)(p,{level:1,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_2",mdxType:"TabItem"},Object(a.b)(p,{level:2,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_3",mdxType:"TabItem"},Object(a.b)(p,{level:3,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_4",mdxType:"TabItem"},Object(a.b)(p,{level:4,mdxType:"CourseLevel"}))))}m.isMDXComponent=!0}}]);