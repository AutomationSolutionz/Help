(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{162:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=i(r),f=n,m=b["".concat(l,".").concat(f)]||b[f]||p[f]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},163:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},169:function(e,t,r){"use strict";var n=r(0),a=r(170);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},174:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(169),l=r(163),c=r(57),u=r.n(c);const s=37,i=39;t.a=function(e){const{lazy:t,block:r,children:c,defaultValue:b,values:p,groupId:f,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:v}=Object(o.a)(),[y,O]=Object(n.useState)(b);if(null!=f){const e=d[f];null!=e&&e!==y&&p.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=f&&v(f,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":r},m)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case i:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(n.cloneElement)(c.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},175:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function({children:e,hidden:t,className:r}){return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),e)}},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"items",(function(){return b})),r.d(t,"CourseItem",(function(){return p})),r.d(t,"CourseLevel",(function(){return f})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(162)),l=r(174),c=r(175),u={id:"course-rest-api",title:"Course - REST API",sidebar_label:"REST API"},s={unversionedId:"course-rest-api",id:"course-rest-api",isDocsHomePage:!1,title:"Course - REST API",description:"export const items = [",source:"@site/docs/course-rest-api.mdx",slug:"/course-rest-api",permalink:"/docs/course-rest-api",version:"current",sidebar_label:"REST API"},i=[],b=[{level:1,title:"Dummy",youtube:"",test_case:"",actions:""}],p=function(e){var t=e.children,r=e.youtube,n=e.actions,a=e.test_case;return Object(o.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(o.b)("strong",null,Object(o.b)("a",{href:r||"#",target:r?"_blank":""},t)),Object(o.b)("br",null),Object(o.b)("strong",null,"Actions"),": ",n||"N/A",Object(o.b)("br",null),Object(o.b)("strong",null,"Sample Test Case"),": ",a||"N/A")},f=function(e){e.children;var t=e.level,r=b.filter((function(e){return e.level==t})).map((function(e){return Object(o.b)("li",{key:e.youtube},Object(o.b)(p,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(o.b)("ol",null,r)},m={rightToc:i,items:b,CourseItem:p,CourseLevel:f};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"},{label:"Level 3",value:"level_3"},{label:"Level 4",value:"level_4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"level_1",mdxType:"TabItem"},Object(o.b)(f,{level:1,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_2",mdxType:"TabItem"},Object(o.b)(f,{level:2,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_3",mdxType:"TabItem"},Object(o.b)(f,{level:3,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_4",mdxType:"TabItem"},Object(o.b)(f,{level:4,mdxType:"CourseLevel"}))))}d.isMDXComponent=!0}}]);