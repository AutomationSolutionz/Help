(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(131)),l={id:"variables-and-indexed-access",title:"Variables and Indexed Access"},s={unversionedId:"variables-and-indexed-access",id:"variables-and-indexed-access",isDocsHomePage:!1,title:"Variables and Indexed Access",description:"With Zeuz Node, you can store complex variables of any common type - integers,",source:"@site/docs\\variables-and-indexed-access.md",slug:"/variables-and-indexed-access",permalink:"/docs/variables-and-indexed-access",version:"current",sidebar:"docs",previous:{title:"Zeuz Node usage",permalink:"/docs/zeuz-node-usage"},next:{title:"Data Collector",permalink:"/docs/data-collector"}},o=[],c={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With Zeuz Node, you can store complex variables of any common type - integers,\nfloats, strings, lists and dictionaries. You can even nest lists and\ndictionaries inside each other as much as you like and then later access them\nvery easily with the indexed syntax that is very similar to Python or most other\nlanguage's array access syntax using ",Object(i.b)("inlineCode",{parentName:"p"},"[ ]"),"."),Object(i.b)("p",null,"Any value that is stored in Zeuz Node that is either a valid JSON or Python data\ntype will be automatically converted to ints, floats, strings, dictionaries,\nlists, etc. even if the value is in string (text) format. This means that you\ndon't have to worry about converting them back and forth when using the values.\nFor example, if the following string is saved using the ",Object(i.b)("strong",{parentName:"p"},"Save variable - number\nstring list dictionary")," action, you can access the values in the following way:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Store values using save variable.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"FIELD"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SUB"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"VALUE"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"data"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'{"hello": "world", "num": 10, "flt": 1.5, "b": true, "my_list": ',"[1, 2, 3]","}")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"operation"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element parameter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"save")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"save into variable"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"common action"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"my_var")))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Access the values in any other action. We're simply going to print to the\nconsole, so we'll use the ",Object(i.b)("strong",{parentName:"li"},"Log Info")," action.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"FIELD"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SUBFIELD"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"VALUE"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"log 1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"utility action"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variable values:",Object(i.b)("br",null),Object(i.b)("br",null),"Whole variable: %","|","my_var","|","%",Object(i.b)("br",null),'Access "hello": %',"|","my_var",'["hello"]',"|","%",Object(i.b)("br",null),'Access "num": %',"|","my_var",'["num"]',"|","%",Object(i.b)("br",null),Object(i.b)("br",null),"Access nested list: %","|","my_var",'["my_list"]',"|","%",Object(i.b)("br",null),"Access first element of nested list: %","|","my_var",'["my_list"][0]',"|","%",Object(i.b)("br",null),"Access second element of nested list: %","|","my_var",'["my_list"][1]',"|","%",Object(i.b)("br",null),"Access last element of nested list: %","|","my_var",'["my_list"][-1]',"|","%")))),Object(i.b)("p",null,"There are a few important points to take note of:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Variables are accessed using ",Object(i.b)("inlineCode",{parentName:"li"},"%|variable_name|%")," syntax."),Object(i.b)("li",{parentName:"ol"},"Dictionaries/maps can be accessed using ",Object(i.b)("inlineCode",{parentName:"li"},'%|variable_name["key_name"]|%')," syntax."),Object(i.b)("li",{parentName:"ol"},"List items can be accessed using ",Object(i.b)("inlineCode",{parentName:"li"},"%|variable_name[0]|%"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"%|variable_name[1]|%"),", etc. Indexing of items start at ",Object(i.b)("inlineCode",{parentName:"li"},"[0]"),"."),Object(i.b)("li",{parentName:"ol"},"Last item of a list can be accessed using ",Object(i.b)("inlineCode",{parentName:"li"},"[-1]")," like so: ",Object(i.b)("inlineCode",{parentName:"li"},"%|variable_name[-1]|%"),"."),Object(i.b)("li",{parentName:"ol"},"Data can be nested as much as needed and Zeuz Node will be able to handle it easily.")),Object(i.b)("p",null,"You can index using range syntax like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"%|my_list|%      = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n%|my_list[0]|%   = 0\n%|my_list[-2]|%  = 9\n%|my_list[2:5]|% = [2, 3, 4]\n%|my_list[:3]|%  = [0, 1, 2]\n%|my_list[:-1]|% = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n%|my_list[3:]|%  = [3, 4, 5, 6, 7, 8, 9, 10]\n%|my_list[1:]|%  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")),Object(i.b)("p",null,"You can also use variable as index. Suppose you put value into variable as num1 = 2 & num2 = 5.\nYou can use this variable as index to access into data as below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"%|my_list[num1]|%   = 2\n%|my_list[num1:num2]|% = [2, 3, 4]\n%|my_list[num2:]|%  = [5, 6, 7, 8, 9, 10]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nested data access using indexing")),Object(i.b)("p",null,"Take a look at the JSON data below. It comes from an apartment building and has some data\nabout its address and the apartments inside it. Apartment number 1 and 2 have two residents."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "ApartmentBuilding":{\n        "Address":{\n            "HouseNumber": 5,\n            "Street": "DataStreet",\n            "ZipCode": 5100\n        },\n        "Apartments":[\n            {\n                "Number": 1,\n                "Price": 500,\n                "Residents": [\n                    {\n                        "Name": "Bob",\n                        "Age": 43\n                    },\n                    {\n                        "Name": "Alice",\n                        "Age": 42\n                    }\n                ]\n            },\n            {\n                "Number": 2,\n                "Price": 750,\n                "Residents": [\n                    {\n                        "Name": "Jane",\n                        "Age": 43\n                    },\n                    {\n                        "Name": "William",\n                        "Age": 42\n                    }\n                ]\n            },\n            {\n                "Number": 3,\n                "Price": 1000,\n                "Residents": []\n            }\n        ]      \n    }\n}\n')),Object(i.b)("p",null,"The above data is saved in a variable called ",Object(i.b)("inlineCode",{parentName:"p"},"%|data|%"),".Suppose  you want to get the name of the first person in the first apartment. You would write the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'%|data["ApartmentBuilding"]["Apartments"][0]["Residents"][0]["Name"]|%\n\n#Output\nBob\n')),Object(i.b)("p",null,"you can see that the first key is ",Object(i.b)("inlineCode",{parentName:"p"},"ApartmentBuilding"),". By writing the name of the key in square brackets\nbeside the variable name we get the corresponding value which is another dictionary. This dictionary has two key value pairs:\n",Object(i.b)("inlineCode",{parentName:"p"},"Address")," & ",Object(i.b)("inlineCode",{parentName:"p"},"Appartments")," . we wanted to access the first resident in the first apartment, so you put ",Object(i.b)("inlineCode",{parentName:"p"},"Apartments")," in square brackets\nto get the corresponding value, which is a list.We follow this with index 0 in square brackets to access the first element of the list.\nNext comes ",Object(i.b)("inlineCode",{parentName:"p"},"Residents"),", followed by another index 0 to access the first person,and finally ",Object(i.b)("inlineCode",{parentName:"p"},"Name")," to get the name of that person."),Object(i.b)("p",null,"Now suppose you don't want to access into specific data instead you want to extract residents name of all apartments.\nyou have to use nested loop to access into all the elements of all of the dictionaries. Zeuz\nhas a unique feature to perform this in a simple way."),Object(i.b)("p",null,"There is one very powerful feature of variable access in Zeuz Node that's not\ncovered in this section. It is immensely helpful when you're working with nested\nstructures of data (specially in case of REST API and database actions). See the\nnext section ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"data-collector"}),"Data Collector")," to learn more about it."))}b.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);