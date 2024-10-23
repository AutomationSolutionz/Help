(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"items",(function(){return b})),n.d(t,"CourseItem",(function(){return f})),n.d(t,"CourseLevel",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(193)),c=n(205),l=n(206),u={id:"course-rest-api",title:"Course - REST API",sidebar_label:"REST API"},i={unversionedId:"course-rest-api",id:"course-rest-api",isDocsHomePage:!1,title:"Course - REST API",description:"export const items = [",source:"@site/docs/course-rest-api.mdx",slug:"/course-rest-api",permalink:"/docs/course-rest-api",version:"current",sidebar_label:"REST API"},s=[],b=[{level:1,title:"Dummy",youtube:"",test_case:"",actions:""}],f=function(e){var t=e.children,n=e.youtube,r=e.actions,a=e.test_case;return Object(o.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(o.b)("strong",null,Object(o.b)("a",{href:n||"#",target:n?"_blank":""},t)),Object(o.b)("br",null),Object(o.b)("strong",null,"Actions"),": ",r||"N/A",Object(o.b)("br",null),Object(o.b)("strong",null,"Sample Test Case"),": ",a||"N/A")},p=function(e){e.children;var t=e.level,n=b.filter((function(e){return e.level==t})).map((function(e){return Object(o.b)("li",{key:e.youtube},Object(o.b)(f,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(o.b)("ol",null,n)},v={rightToc:s,items:b,CourseItem:f,CourseLevel:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"},{label:"Level 3",value:"level_3"},{label:"Level 4",value:"level_4"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"level_1",mdxType:"TabItem"},Object(o.b)(p,{level:1,mdxType:"CourseLevel"})),Object(o.b)(l.a,{value:"level_2",mdxType:"TabItem"},Object(o.b)(p,{level:2,mdxType:"CourseLevel"})),Object(o.b)(l.a,{value:"level_3",mdxType:"TabItem"},Object(o.b)(p,{level:3,mdxType:"CourseLevel"})),Object(o.b)(l.a,{value:"level_4",mdxType:"TabItem"},Object(o.b)(p,{level:4,mdxType:"CourseLevel"}))))}m.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,v=b["".concat(c,".").concat(p)]||b[p]||f[p]||o;return n?a.a.createElement(v,l(l({ref:t},i),{},{components:n})):a.a.createElement(v,l({ref:t},i))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},200:function(e,t,n){"use strict";var r=n(0),a=n(201);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},201:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},205:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(200),c=n(194),l=n(57),u=n.n(l),i=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,b=e.defaultValue,f=e.values,p=e.groupId,v=e.className,m=Object(o.a)(),d=m.tabGroupChoices,y=m.setTabGroupChoices,O=Object(r.useState)(b),j=O[0],g=O[1];if(null!=p){var T=d[p];null!=T&&T!==j&&f.some((function(e){return e.value===T}))&&g(T)}var h=function(e){g(e),null!=p&&y(p,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},v)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},n)}))),t?Object(r.cloneElement)(l.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},206:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);