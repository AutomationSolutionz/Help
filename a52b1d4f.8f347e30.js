(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(193)),i={id:"sql-concept",title:"SQL concepts"},c={unversionedId:"sql-concept",id:"sql-concept",isDocsHomePage:!1,title:"SQL concepts",description:"Database",source:"@site/docs\\sql-concept.md",slug:"/sql-concept",permalink:"/docs/sql-concept",version:"current",sidebar:"docs",previous:{title:"ZeuZ features",permalink:"/docs/zeuz-features"},next:{title:"Software Lifecycle Model",permalink:"/docs/software-lifecycle-model"}},l=[{value:"Database",id:"database",children:[{value:"Examples of Database:",id:"examples-of-database",children:[]}]},{value:"PostgreSQL and Structured Query Language (SQL):",id:"postgresql-and-structured-query-language-sql",children:[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"Structured Query Language (SQL)",id:"structured-query-language-sql",children:[]}]},{value:"How Data is stored?",id:"how-data-is-stored",children:[{value:"Example",id:"example",children:[]}]},{value:"Relational Database",id:"relational-database",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Graphical User Interface (GUI) Clients vs Terminal / CMD Clients",id:"graphical-user-interface-gui-clients-vs-terminal--cmd-clients",children:[{value:"Connecting to DB:",id:"connecting-to-db",children:[]}]},{value:"Create Table with Postgres (with constraints)",id:"create-table-with-postgres-with-constraints",children:[{value:"Result",id:"result",children:[]}]},{value:"Aggregate Functions",id:"aggregate-functions",children:[{value:"Most Common Aggregate Functions",id:"most-common-aggregate-functions",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"Create a Table using UI:",id:"create-a-table-using-ui",children:[]}],s={rightToc:l};function o(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"database"},"Database"),Object(b.b)("p",null,"A ",Object(b.b)("strong",{parentName:"p"},"Database")," is a place where we can store, manipulate, and retrieve data.  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Store"),"   "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Manipulate"),"    "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Retrieve"),"    ")),Object(b.b)("p",null,"It is an organized collection of structured information, or data typically stored electronically in a computer system."),Object(b.b)("p",null,Object(b.b)("img",{src:a(518).default})),Object(b.b)("p",null,"Basically, we can put data into it and then we can retrieve, we can handle data, we can manipulate (modify), we can delete, we can update, all of the operations are provided by the actual database."),Object(b.b)("h3",{id:"examples-of-database"},"Examples of Database:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Facebook")," is a place where we can connect with different people all around the world. With ",Object(b.b)("strong",{parentName:"p"},"Facebook"),", they actually store a lot of informations about us. And the data that they store about us is in a database.",Object(b.b)("br",{parentName:"p"}),"\n","We know our names, our friends, everything is stored in a database. When we consume content or visit someone else's page and view it, we see all the comments and so on. Therefore, all the data comes from a database. ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The same applies to ",Object(b.b)("strong",{parentName:"p"},"eBay"),". When we view a product, we can see its details right there: the title, the quantity sold, and the price. Additionally, we find the description and even the reviews on the same page."))),Object(b.b)("p",null,"However, all of this information comes from a database; they have to store this data. Then, anyone visiting this page can see this information.",Object(b.b)("br",{parentName:"p"}),"\n","To summarize, a database is simply a place where we can store, manipulate, and retrieve data."),Object(b.b)("h2",{id:"postgresql-and-structured-query-language-sql"},"PostgreSQL and Structured Query Language (SQL):"),Object(b.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PostgreSQL")," is an open-source relational database management system (RDBMS) that uses the SQL (Structured Query Language) for defining and manipulating data. It is known for its extensibility and compliance with SQL standards.",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"PostgreSQL")," supports a wide range of data types, provides advanced features like indexing, transactions, and foreign keys, and is suitable for handling complex queries and large amounts of data. As an open-source database, ",Object(b.b)("em",{parentName:"p"},"PostgreSQL")," is widely used for various applications, including web development, data warehousing, and geographic information systems."),Object(b.b)("h3",{id:"structured-query-language-sql"},"Structured Query Language (SQL)"),Object(b.b)("p",null,"The ",Object(b.b)("strong",{parentName:"p"},"Structured Query Language (SQL)")," allows us to work with databases and interact with it. ",Object(b.b)("em",{parentName:"p"},"SQL")," is the programming language which allows us to have commands like ",Object(b.b)("em",{parentName:"p"},"SELECT"),", ",Object(b.b)("em",{parentName:"p"},"FROM")," etc."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT first_name FROM person\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"SELECT"),"- Allows us to specify which columns to fetch.",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"FROM"),"- Allows us to specify from which tables to fetch data."),Object(b.b)("p",null,"Here, ",Object(b.b)("strong",{parentName:"p"},"first_name")," is the ",Object(b.b)("em",{parentName:"p"},"Column name")," and ",Object(b.b)("strong",{parentName:"p"},"person")," is the ",Object(b.b)("em",{parentName:"p"},"Table name"),"."),Object(b.b)("p",null,"In contrast, ",Object(b.b)("strong",{parentName:"p"},"Structured Query Language (SQL)")," is very powerful. It has been around for quite some time since 1974. And it has been widely used all over the internet.  And ",Object(b.b)("strong",{parentName:"p"},"SELECT")," is the most common statement which is used and it allows us to retrieve information from a table."),Object(b.b)("p",null,"Example of syntaxes that are used for ",Object(b.b)("strong",{parentName:"p"},"SELECT")," statement:  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("em",{parentName:"li"},"column_name")," ",Object(b.b)("strong",{parentName:"li"},"FROM")," ",Object(b.b)("em",{parentName:"li"},"table_name"),";  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("em",{parentName:"li"},"c1")," ",Object(b.b)("strong",{parentName:"li"},"FROM")," ",Object(b.b)("em",{parentName:"li"},"table_1"),";  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("em",{parentName:"li"},"title"),", ",Object(b.b)("em",{parentName:"li"},"description")," ",Object(b.b)("strong",{parentName:"li"},"FROM")," ",Object(b.b)("em",{parentName:"li"},"film"),";  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("em",{parentName:"li"},"first_name"),", ",Object(b.b)("em",{parentName:"li"},"last_name")," ",Object(b.b)("strong",{parentName:"li"},"FROM")," customer;")),Object(b.b)("p",null,"If the ",Object(b.b)("strong",{parentName:"p"},"last_name")," is written before the ",Object(b.b)("strong",{parentName:"p"},"first_name")," then the column ",Object(b.b)("strong",{parentName:"p"},"last_name")," will appear before the column ",Object(b.b)("strong",{parentName:"p"},"first_name"),"."),Object(b.b)("h2",{id:"how-data-is-stored"},"How Data is stored?"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Data is stored in tables.  "),Object(b.b)("li",{parentName:"ul"},"These tables are formed by two things:  ",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Columns  "),Object(b.b)("li",{parentName:"ul"},"Rows. ")))),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("p",null,"A table called ",Object(b.b)("strong",{parentName:"p"},"PERSON")," is given which contains the following columns:"),Object(b.b)("p",null,Object(b.b)("img",{src:a(519).default})),Object(b.b)("p",null,"These are the attributes of the table called ",Object(b.b)("strong",{parentName:"p"},"PERSON")," as columns.",Object(b.b)("br",{parentName:"p"}),"\n","That is, a person may have,"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ID"),","),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"First name"),","),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Last name"),","),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Gender"),","),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Age"),".")),Object(b.b)("p",null,"And then the actual rows is the actual data inside of that table."),Object(b.b)("p",null,Object(b.b)("img",{src:a(520).default})),Object(b.b)("p",null,"Here we can see that we have some rows and some columns. In this table we have ",Object(b.b)("strong",{parentName:"p"},"Elina")," and ",Object(b.b)("strong",{parentName:"p"},"Johnson")," which are under the ",Object(b.b)("strong",{parentName:"p"},"first_name")," column and the ",Object(b.b)("strong",{parentName:"p"},"last_name")," column, ",Object(b.b)("strong",{parentName:"p"},"gender")," is female and ",Object(b.b)("strong",{parentName:"p"},"age")," is 25, then we could have another row ",Object(b.b)("strong",{parentName:"p"},"Daniel Claire")," and so on and so forth."),Object(b.b)("h2",{id:"relational-database"},"Relational Database"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Relational Database")," is a type of database that organizes data into tables, where each table consists of rows and columns. The relationship between tables is established through keys, allowing the efficient retrieval and management of data. The relational database management system ",Object(b.b)("strong",{parentName:"p"},"(RDBMS)")," enforces the rules of normalization, ensuring data integrity and minimizing redundancy.",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"SQL")," is commonly used to interact with relational databases, enabling users to query, insert, update, and delete data. The relational model provides a structured and organized approach to store and manage data, facilitating the development of robust and scalable applications. SQL allows us to manage data in a relational database. Relational database is simply a relation between one or more tables."),Object(b.b)("h3",{id:"example-1"},"Example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Two type of tables like PERSON and CAR are given below:")),Object(b.b)("p",null,Object(b.b)("img",{src:a(521).default})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example of the Relational Database is given below by combining these two tables.")),Object(b.b)("p",null,Object(b.b)("img",{src:a(522).default})),Object(b.b)("p",null,"This is how data might be structured inside of a ",Object(b.b)("strong",{parentName:"p"},"Relational Database"),". In this table those who have cars, the ",Object(b.b)("strong",{parentName:"p"},"car IDs")," have been simply mentioned under their ",Object(b.b)("strong",{parentName:"p"},"car_ID")," column. However, ",Object(b.b)("strong",{parentName:"p"},"Elina")," and ",Object(b.b)("strong",{parentName:"p"},"Jack")," do not have a car so their ",Object(b.b)("strong",{parentName:"p"},"car_ID")," column is blank. This is what a relationship is made of."),Object(b.b)("h2",{id:"graphical-user-interface-gui-clients-vs-terminal--cmd-clients"},"Graphical User Interface (GUI) Clients vs Terminal / CMD Clients"),Object(b.b)("h3",{id:"connecting-to-db"},"Connecting to DB:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Open Postgres")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Preferences")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Check for Updates")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Quit"),".")),Object(b.b)("p",null,"Our computer is serving as a computer server, that is, a database server. And basically anyone can connect to it and view the contents, modify content and perform all the operations supported by the database.  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Now the very first way that we can connect to the database is by using a ",Object(b.b)("strong",{parentName:"li"},"GUI")," client. And this is an application where it eases the way that we connect to the database. It makes easy in terms of performing, insert into the database, delete, view the data and have all these fancy UI elements that allows us to see databases in a much easier way.  "),Object(b.b)("li",{parentName:"ul"},"The second way is by using the terminal or command line which is    the preferred choice.  "),Object(b.b)("li",{parentName:"ul"},"The third way is by using an application. For example, we write a server side application where we connect our database and then we can perform data and return that data to our clients so that the client can make the data look nice on a screen or a mobile application.")),Object(b.b)("h2",{id:"create-table-with-postgres-with-constraints"},"Create Table with Postgres (with constraints)"),Object(b.b)("p",null,Object(b.b)("img",{src:a(523).default})),Object(b.b)("h3",{id:"result"},"Result"),Object(b.b)("p",null,Object(b.b)("img",{src:a(524).default})),Object(b.b)("h2",{id:"aggregate-functions"},"Aggregate Functions"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"SQL")," provides a variety of ",Object(b.b)("em",{parentName:"p"},"Aggregate Functions"),". The main idea behind an ",Object(b.b)("em",{parentName:"p"},"Aggregate Function")," is to take multiple inputs and return a single output."),Object(b.b)("h3",{id:"most-common-aggregate-functions"},"Most Common Aggregate Functions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"AVG()")," - Returns the average value.  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"COUNT()")," - Returns number of values / returns number of rows.  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MAX()")," - Returns maximum value.  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MIN()")," - Returns minimum value.  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SUM()")," - Returns the sum of all values.")),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"AVG()")," returns a floating point value in many decimal places (e.g. 2.342418).  "),Object(b.b)("li",{parentName:"ul"},"We can use ",Object(b.b)("strong",{parentName:"li"},"ROUND()")," to specify precision after the decimal.  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"COUNT()")," simply returns the number of rows, which means by convention we just use ",Object(b.b)("strong",{parentName:"li"},"COUNT(*)"),". ")))),Object(b.b)("h3",{id:"example-2"},"Example"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("strong",{parentName:"li"},"MIN")," (replacement_cost) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(525).default})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Minimum ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," of the table has been shown.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("strong",{parentName:"li"},"MAX")," (replacement_cost) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(526).default})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Maximum ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," of the table has been shown.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("strong",{parentName:"li"},"MAX")," (replacement_cost), ",Object(b.b)("strong",{parentName:"li"},"MIN")," (replacement_cost) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(527).default})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Here both the maximum and minimum ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," of the table has been shown.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("strong",{parentName:"li"},"AVG")," (replacement_cost) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(528).default})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Average ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," of the table has been shown.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," round (",Object(b.b)("strong",{parentName:"li"},"avg")," (replacement_cost), 3) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(529).default})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Here average ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," has been shown where the value after the decimal is limited to 3.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SELECT")," ",Object(b.b)("strong",{parentName:"li"},"SUM")," (replacement_cost) ",Object(b.b)("strong",{parentName:"li"},"FROM")," film;")),Object(b.b)("p",null,Object(b.b)("img",{src:a(530).default})),Object(b.b)("p",null,"The Sum of the ",Object(b.b)("em",{parentName:"p"},"replacement_cost")," of the table has been shown."),Object(b.b)("h2",{id:"create-a-table-using-ui"},"Create a Table using UI:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Click on the server:\n",Object(b.b)("strong",{parentName:"p"},">SERVER"),"  ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Then ",Object(b.b)("strong",{parentName:"p"},"PostgreSQL 14")," will appear.  ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Click on the ",Object(b.b)("strong",{parentName:"p"},">PostgreSQL 14"),".  ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Under the ",Object(b.b)("strong",{parentName:"p"},">PostgreSQL 14"),", ",Object(b.b)("strong",{parentName:"p"},"Databases")," option appears.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Right click on the ",Object(b.b)("strong",{parentName:"p"},"Databases")," option.    ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Then click on the ",Object(b.b)("strong",{parentName:"p"},"Create > Database")," option.  ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Create-Database"),"  page appears."))),Object(b.b)("p",null,Object(b.b)("img",{src:a(531).default})),Object(b.b)("p",null,Object(b.b)("img",{src:a(532).default})),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Fill up the option ",Object(b.b)("strong",{parentName:"li"},"Database")," to ",Object(b.b)("strong",{parentName:"li"},"The Database"),".")))}o.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||b;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<b;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},518:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database-pic-2e8bde4844ab4d9c591c97de3a092470.png"},519:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},520:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/first_name-609c5f522570d0972842fda715d0ed45.png"},521:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/person-car-e7023f1350315dc105039da71c40ef72.png"},522:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/person-carid-a10fcfcf446429b4538e3bda4f4e239c.png"},523:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/postgres-table-eb4a0a8c97908f5b35143a56009daf90.png"},524:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/result-table-9eee0b5b7d4fe780efd9ac164171758d.png"},525:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/min_cost-0e8584f31f160cea8786e152a2974f11.png"},526:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/max-cost-2d64a1a0b1e048f018a5c47db48753a4.png"},527:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/max-min-bbe4d0eaf4ca5a76d4164fb2aae9bd39.png"},528:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/avg-cost-5be3283fa7bfe307fdccca4ce59d2874.png"},529:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/round-cost-9a68dde7cce8922c5975b5ee6058087c.png"},530:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sum-cost-b387450d540d5fc8ec2a73dd78718c0e.png"},531:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create-database-1f8bda6f2d69e3ab891f788fee84c9fa.png"},532:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database-option-7e7881dc6eb6f00a781fdda9d59de6ef.png"}}]);