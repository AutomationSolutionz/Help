(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"items",(function(){return b})),n.d(t,"CourseItem",(function(){return v})),n.d(t,"CourseLevel",(function(){return f})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(121)),c=n(133),l=n(134),i={id:"course-web",title:"Course - Web",sidebar_label:"Web"},u={unversionedId:"course-web",id:"course-web",isDocsHomePage:!1,title:"Course - Web",description:"export const items = [",source:"@site/docs\\course-web.mdx",slug:"/course-web",permalink:"/docs/course-web",version:"current",sidebar_label:"Web",sidebar:"docs",previous:{title:"Course Information",permalink:"/docs/course-info"}},s=[],b=[{level:1,title:"Create First Test Case \u2013 Login",youtube:"https://www.youtube.com/watch?v=DjvznNJIrZA",test_case:"TEST-4855",actions:"Click, Enter Text, Validate Partial Text"},{level:1,title:" Wait For Element To Appear",youtube:"https://www.youtube.com/watch?v=gvQ0o_wThRk",test_case:"TEST-4842",actions:"Validate Partial Text, Wait"},{level:1,title:"Save and Compare Variable",youtube:"https://www.youtube.com/watch?v=Db06FwNkWdg",test_case:"TEST-4845",actions:"Click By Parent, Click an Item, Enter Text, Save Text, Validate Partial Text"},{level:1,title:"Run and Review Logs",youtube:"https://www.youtube.com/watch?v=QJJh_2XjsdA",test_case:"",actions:""},{level:2,title:"Date Generator",youtube:"https://www.youtube.com/watch?v=6AATFVSRSH8",test_case:"TEST-4853",actions:"Date, Save Variable"},{level:2,title:"Scroll To Element",youtube:"https://www.youtube.com/watch?v=_sEc3vkDLIs",test_case:"TEST-4846",actions:"Scroll to an Element, Validate Partial Text"},{level:2,title:"Update Inline Table",youtube:"https://www.youtube.com/watch?v=Xk9M-R5mlX4",test_case:"TEST-4849",actions:"Click By Sibling, Text By Sibling"},{level:2,title:"Math \u2013 Shopping Cart",youtube:"https://www.youtube.com/watch?v=61_xmwBOw68",test_case:"TEST-4856",actions:"Click, Compare Variable, Extract Number, Math"},{level:2,title:"Click By Parent",youtube:"https://www.youtube.com/watch?v=-53wVnFP0Jk",test_case:"TEST-4844",actions:"Click By Parent, Validate Partial Text"},{level:2,title:"Click By Sibling",youtube:"https://www.youtube.com/watch?v=FisOVStv0vU",test_case:"TEST-4852",actions:"Click By Sibling, Validate Partial Text"},{level:2,title:"If Else Condition",youtube:"https://www.youtube.com/watch?v=ynNrPbLv0bw",test_case:"TEST-4843",actions:"Click an Item, If else, Log Info, Validate Partial Text"},{level:2,title:"While Loop With If/Else Condition",youtube:"https://www.youtube.com/watch?v=xZuRuAvjBLU",test_case:"TEST-4828",actions:"Click, Wait, While Loop"},{level:2,title:"Random Data Generator",youtube:"https://www.youtube.com/watch?v=gQ8oGHtMvgQ",test_case:"TEST-4854",actions:"Random String, Save Variable, Text, Validate Partial Text"}],v=function(e){var t=e.children,n=e.youtube,r=e.actions,a=e.test_case;return Object(o.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(o.b)("strong",null,Object(o.b)("a",{href:n||"#",target:n?"_blank":""},t)),Object(o.b)("br",null),Object(o.b)("strong",null,"Actions"),": ",r||"N/A",Object(o.b)("br",null),Object(o.b)("strong",null,"Sample Test Case"),": ",a||"N/A")},f=function(e){e.children;var t=e.level,n=b.filter((function(e){return e.level==t})).map((function(e){return Object(o.b)("li",{key:e.youtube},Object(o.b)(v,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(o.b)("ol",null,n)},p={rightToc:s,items:b,CourseItem:v,CourseLevel:f};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"level_1",mdxType:"TabItem"},Object(o.b)(f,{level:1,mdxType:"CourseLevel"})),Object(o.b)(l.a,{value:"level_2",mdxType:"TabItem"},Object(o.b)(f,{level:2,mdxType:"CourseLevel"}))))}m.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,p=b["".concat(c,".").concat(f)]||b[f]||v[f]||o;return n?a.a.createElement(p,l(l({ref:t},u),{},{components:n})):a.a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},128:function(e,t,n){"use strict";var r=n(0),a=n(129);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},133:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(128),c=n(122),l=n(57),i=n.n(l),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,b=e.defaultValue,v=e.values,f=e.groupId,p=e.className,m=Object(o.a)(),d=m.tabGroupChoices,y=m.setTabGroupChoices,w=Object(r.useState)(b),T=w[0],h=w[1];if(null!=f){var O=d[f];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&h(O)}var g=function(e){h(e),null!=f&&y(f,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},v.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":T===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":T===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(r.cloneElement)(l.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}},134:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);