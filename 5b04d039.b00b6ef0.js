(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=i(n),f=r,d=b["".concat(l,".").concat(f)]||b[f]||p[f]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},137:function(e,t,n){"use strict";var r=n(0),o=n(138);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},138:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},142:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(137),l=n(131),c=n(57),u=n.n(c);const s=37,i=39;t.a=function(e){const{lazy:t,block:n,children:c,defaultValue:b,values:p,groupId:f,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:v}=Object(a.a)(),[y,O]=Object(r.useState)(b);if(null!=f){const e=m[f];null!=e&&e!==y&&p.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=f&&v(f,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case i:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(r.cloneElement)(c.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},143:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"items",(function(){return b})),n.d(t,"CourseItem",(function(){return p})),n.d(t,"CourseLevel",(function(){return f})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=(n(0),n(130)),l=n(142),c=n(143),u={id:"course-desktop",title:"Course - Desktop",sidebar_label:"Desktop"},s={unversionedId:"course-desktop",id:"course-desktop",isDocsHomePage:!1,title:"Course - Desktop",description:"export const items = [",source:"@site/docs\\course-desktop.mdx",slug:"/course-desktop",permalink:"/docs/course-desktop",version:"current",sidebar_label:"Desktop"},i=[],b=[{level:1,title:"Dummy",youtube:"",test_case:"",actions:""}],p=function(e){var t=e.children,n=e.youtube,r=e.actions,o=e.test_case;return Object(a.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(a.b)("strong",null,Object(a.b)("a",{href:n||"#",target:n?"_blank":""},t)),Object(a.b)("br",null),Object(a.b)("strong",null,"Actions"),": ",r||"N/A",Object(a.b)("br",null),Object(a.b)("strong",null,"Sample Test Case"),": ",o||"N/A")},f=function(e){e.children;var t=e.level,n=b.filter((function(e){return e.level==t})).map((function(e){return Object(a.b)("li",{key:e.youtube},Object(a.b)(p,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(a.b)("ol",null,n)},d={rightToc:i,items:b,CourseItem:p,CourseLevel:f};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"},{label:"Level 3",value:"level_3"},{label:"Level 4",value:"level_4"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"level_1",mdxType:"TabItem"},Object(a.b)(f,{level:1,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_2",mdxType:"TabItem"},Object(a.b)(f,{level:2,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_3",mdxType:"TabItem"},Object(a.b)(f,{level:3,mdxType:"CourseLevel"})),Object(a.b)(c.a,{value:"level_4",mdxType:"TabItem"},Object(a.b)(f,{level:4,mdxType:"CourseLevel"}))))}m.isMDXComponent=!0}}]);