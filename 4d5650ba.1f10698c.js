(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(166)),i={id:"Calling-method-on-variable",title:"Calling method on variable"},b={unversionedId:"Calling-method-on-variable",id:"Calling-method-on-variable",isDocsHomePage:!1,title:"Calling method on variable",description:"Zeuz node allow you to use any kind of python built-in method on variable. Example: %|var_name.capitalize()|%,where var_name is the name of the variable . You can also use several methods at a time.",source:"@site/docs\\Calling-method-on-variable.md",slug:"/Calling-method-on-variable",permalink:"/docs/Calling-method-on-variable",version:"current",sidebar:"docs",previous:{title:"Data Collector",permalink:"/docs/data-collector"},next:{title:"Loop",permalink:"/docs/loop"}},c=[],o={rightToc:c};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Zeuz node allow you to use any kind of python built-in method on variable. Example: ",Object(l.b)("strong",{parentName:"p"},"%|var_name.capitalize()|%"),",where ",Object(l.b)("inlineCode",{parentName:"p"},"var_name")," is the name of the variable . You can also use several methods at a time.\nExample:",Object(l.b)("strong",{parentName:"p"},'%|var_name.upper().strip().split(" ")|%'),". "),Object(l.b)("p",null,"Suppose a string value ",Object(l.b)("strong",{parentName:"p"},"Hello ZEUZ Client")," is saved into a variable named ",Object(l.b)("strong",{parentName:"p"},"var"),". We want to extract every word from the variable in lowercase & make a list of it.\nWe've to call the methods on the following way."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"%|var.lower().strip().split(\" \")|%\n\n#output\n['hello', 'zeuz', 'client']\n")),Object(l.b)("p",null,"Another example is shown below . Here if a expected word is found in the string then it will be replaced by another given word. Node will search for the word. Here 'If condition' returns true. So node will perform the action 3 and replace the word in the variable .\nThe returned value of the variable will be ",Object(l.b)("strong",{parentName:"p"},"New World"),"."),Object(l.b)("p",null,Object(l.b)("img",{src:a(325).default})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Python methods that can be used on string type variable")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"capitalize()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the copy of the string with its first character capitalized and the rest of the letters are in lowercased.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"count()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"substring, start(optional), end(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Searches (case-sensitive) the specified ",Object(l.b)("inlineCode",{parentName:"td"},"substring")," in the given string and returns an integer indicating occurrences of the substring")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endswith()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"suffix, start(optional), end(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The endswith() function returns True if a string ends with the specified ",Object(l.b)("inlineCode",{parentName:"td"},"suffix")," (case-sensitive), otherwise returns False.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"find()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"substr, start(optional), end(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The find() method returns the index of the first occurence of a substring in the given string (case-sensitive). If the substring is not found it returns -1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isalnum()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The isalnum() method returns True if all characters in the string are alphanumeric (either alphabets or numbers). If not, it returns False.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isalpha()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The isalpha() method returns True if all characters in a string are alphabetic (both lowercase and uppercase) and returns False if at least one character is not an alphabet. The whitespace, numerics, and symbols are considered as non-alphabetical characters.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"istrip()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"characters(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The lstrip() method returns a copy of the string by removing leading ",Object(l.b)("inlineCode",{parentName:"td"},"characters")," specified as an argument. By default, it removes leading whitespaces if no argument passed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"partition()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sep"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The partition() method splits the string at the first occurrence of the specified string separator ",Object(l.b)("inlineCode",{parentName:"td"},"sep")," argument and returns a tuple containing three elements, the part before the separator, the separator itself, and the part after the separator.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replace()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"old,new,count(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The replace() method returns a copy of the string where all occurrences of a substring are replaced with another substring. The number of times substrings should be replaced by another substring can also be specified.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rfind()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"substr,start(optional),end(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The rfind() method returns the highest index of the specified substring (the last occurrence of the substring) in the given string. If the substring is not found, then it returns -1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"split()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"separator,max split"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The split() method splits the string from the specified separator and returns a list object with string elements. The default separator is any whitespace character such as space, \\t, \\n, etc.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strip()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"characters"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The strip() method returns a copy of the string by removing both the leading and the trailing characters. By default, it removes leading whitespaces if no argument passed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"upper()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The upper() method returns a string in the upper case. Symbols and numbers remain unaffected.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Python methods that can be used on list type variable")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.append()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds a new ",Object(l.b)("inlineCode",{parentName:"td"},"item")," at the end of the list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.clear()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes all the items from the list and make it empty.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.copy()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns a shallow copy of a list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.count()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the number of times an element occurs in the list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.extend()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iterable(list/tuple/dict)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds all the items of the specified iterable (list, tuple, set, dictionary, string) to the end of the list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.index()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"element,start(optional),end(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the index position of the first occurance of the specified item. Raises a ValueError if there is no item found.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.insert()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"index,value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inserts an item at a given position.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.pop()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"index(optional)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns an item from the specified index position and also removes it from the list. If no index is specified, the list.pop() method removes and returns the last item in the list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.remove()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes the first occurance of the specified item from the list. It the specified item not found then throws a ValueError.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.reverse()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverses the index positions of the elements in the list. The first element will be at the last index, the second element will be at second last index and so on.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list.sort()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no parameter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sorts the list items in ascending, descending, or in custom order.")))),Object(l.b)("p",null,"Many methods on the list variable return none type. Such as, append(),insert(),remove() etc . For these kind of methods which returns none type, we have to use\nexecute python code action for that . In the given example , a list type variable is ",Object(l.b)("inlineCode",{parentName:"p"},"a"),". We want to append a element to the variable by calling the method .For that\nwe've used ",Object(l.b)("inlineCode",{parentName:"p"},"execute python code")," action . After that we can get the updated list by calling the variable."),Object(l.b)("p",null,Object(l.b)("img",{src:a(326).default})),Object(l.b)("p",null,"The variable may be set or dictionary type as well. User can easily call the python built-in methods for set or dictionary to perform expected actions."))}s.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},325:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/method_test-4a442f703bcb5e501003863bff1d3151.png"},326:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/method_test2-26ab74c45f2d310ce6c56941631ce124.png"}}]);