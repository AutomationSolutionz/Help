(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),p=a,m=b["".concat(l,".").concat(p)]||b[p]||v[p]||o;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},111:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},112:function(e,t,n){"use strict";var a=n(0),r=n(111);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(112),l=n(107),c=n(51),i=n.n(c);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:v}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(o.a)(),[d,y]=Object(a.useState)(c),[f,w]=Object(a.useState)(!1);if(null!=v){const e=p[v];null!=e&&e!==d&&b.some(t=>t.value===e)&&y(e)}const T=e=>{y(e),null!=v&&m(v,e)},h=[],O=e=>{e.metaKey||e.altKey||e.ctrlKey||w(!0)},g=()=>{w(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",O),window.addEventListener("mousedown",g)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":d===e}),style:f?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),O(e)},onFocus:()=>T(e),onClick:()=>{T(e),w(!1)},onPointerDown:()=>w(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"items",(function(){return b})),n.d(t,"CourseItem",(function(){return v})),n.d(t,"CourseLevel",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(105)),l=n(114),c=n(115),i={id:"course-web",title:"Course - Web",sidebar_label:"Web"},u={unversionedId:"course-web",id:"course-web",isDocsHomePage:!1,title:"Course - Web",description:"export const items = [",source:"@site/docs/course-web.mdx",permalink:"/docs/course-web",sidebar_label:"Web",sidebar:"docs",previous:{title:"Course Information",permalink:"/docs/course-info"},next:{title:"Course - Mobile",permalink:"/docs/course-mobile"}},s=[],b=[{level:1,title:"Create First Test Case \u2013 Login",youtube:"https://www.youtube.com/watch?v=DjvznNJIrZA",test_case:"TEST-4855",actions:"Click, Enter Text, Validate Partial Text"},{level:1,title:"Save and Compare Variable",youtube:"https://www.youtube.com/watch?v=gvQ0o_wThRk",test_case:"TEST-4842",actions:"Validate Partial Text, Wait"},{level:1,title:"Save and Compare Variable",youtube:"https://www.youtube.com/watch?v=Db06FwNkWdg",test_case:"TEST-4845",actions:"Click By Parent, Click an Item, Enter Text, Save Text, Validate Partial Text"},{level:1,title:"Run and Review Logs",youtube:"https://www.youtube.com/watch?v=QJJh_2XjsdA",test_case:"",actions:""},{level:2,title:"Debugging Test Case",youtube:"",test_case:"",actions:""},{level:2,title:"Date Generator",youtube:"https://www.youtube.com/watch?v=6AATFVSRSH8",test_case:"TEST-4853",actions:"Date, Save Variable"},{level:2,title:"Scroll To Element",youtube:"https://www.youtube.com/watch?v=_sEc3vkDLIs",test_case:"TEST-4846",actions:"Scroll to an Element, Validate Partial Text"},{level:2,title:"Update Inline Table",youtube:"https://www.youtube.com/watch?v=Xk9M-R5mlX4",test_case:"TEST-4849",actions:"Click By Sibling, Text By Sibling"},{level:2,title:"Math \u2013 Shopping Cart",youtube:"https://www.youtube.com/watch?v=61_xmwBOw68",test_case:"TEST-4856",actions:"Click, Compare Variable, Extract Number, Math"},{level:2,title:"Click By Parent",youtube:"https://www.youtube.com/watch?v=-53wVnFP0Jk",test_case:"TEST-4844",actions:"Click By Parent, Validate Partial Text"},{level:2,title:"Click By Sibling",youtube:"https://www.youtube.com/watch?v=FisOVStv0vU",test_case:"TEST-4852",actions:"Click By Sibling, Validate Partial Text"},{level:2,title:"If Else Condition",youtube:"https://www.youtube.com/watch?v=ynNrPbLv0bw",test_case:"TEST-4843",actions:"Click an Item, If else, Log Info, Validate Partial Text"},{level:2,title:"While Loop With If/Else Condition",youtube:"https://www.youtube.com/watch?v=xZuRuAvjBLU",test_case:"TEST-4828",actions:"Click, Wait, While Loop"},{level:2,title:"Random Data Generator",youtube:"https://www.youtube.com/watch?v=gQ8oGHtMvgQ",test_case:"TEST-4854",actions:"Random String, Save Variable, Text, Validate Partial Text"}],v=function(e){var t=e.children,n=e.youtube,a=e.actions,r=e.test_case;return Object(o.b)("div",{style:{paddingTop:8,paddingBottom:8}},Object(o.b)("strong",null,Object(o.b)("a",{href:n||"#",target:n?"_blank":""},t)),Object(o.b)("br",null),Object(o.b)("strong",null,"Actions"),": ",a||"N/A",Object(o.b)("br",null),Object(o.b)("strong",null,"Sample Test Case"),": ",r||"N/A")},p=function(e){e.children;var t=e.level,n=b.filter((function(e){return e.level==t})).map((function(e){return Object(o.b)("li",{key:e.youtube},Object(o.b)(v,{youtube:e.youtube,actions:e.actions,test_case:e.test_case,mdxType:"CourseItem"},e.title))}));return Object(o.b)("ol",null,n)},m={rightToc:s,items:b,CourseItem:v,CourseLevel:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{defaultValue:"level_1",values:[{label:"Level 1",value:"level_1"},{label:"Level 2",value:"level_2"},{label:"Level 3",value:"level_3"},{label:"Level 4",value:"level_4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"level_1",mdxType:"TabItem"},Object(o.b)(p,{level:1,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_2",mdxType:"TabItem"},Object(o.b)(p,{level:2,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_3",mdxType:"TabItem"},Object(o.b)(p,{level:3,mdxType:"CourseLevel"})),Object(o.b)(c.a,{value:"level_4",mdxType:"TabItem"},Object(o.b)(p,{level:4,mdxType:"CourseLevel"}))))}d.isMDXComponent=!0}}]);