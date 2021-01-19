(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(122)),o={id:"zeuz-api-examples",title:"Zeuz API Examples"},c={unversionedId:"zeuz-api-examples",id:"zeuz-api-examples",isDocsHomePage:!1,title:"Zeuz API Examples",description:"Zeuz API provides an external interface for clients to interact with",source:"@site/docs/zeuz-api-examples.md",slug:"/zeuz-api-examples",permalink:"/docs/zeuz-api-examples",version:"current",sidebar:"docs",previous:{title:"Zeuz Server",permalink:"/docs/zeuz-server"},next:{title:"Zeuz Server Changelogs",permalink:"/docs/zeuz-server-changelogs"}},s=[{value:"Deploy Test Sets",id:"deploy-test-sets",children:[]},{value:"Check Deploy/Run history/status/details",id:"check-deployrun-historystatusdetails",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Zeuz API provides an external interface for clients to interact with\nthe server and fetch various information. Complete API documentation\ncan be found\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj"}),"here"),"."),Object(r.b)("p",null,"This page lists example scenarios for using the API."),Object(r.b)("h2",{id:"deploy-test-sets"},"Deploy Test Sets"),Object(r.b)("p",null,"Steps which are marked ",Object(r.b)("strong",{parentName:"p"},"[OPT]")," can be skipped if you already know\nthat the data is valid (for example, you already know that a Milestone\nexists for a given ID, or a Test Set with the given name already\nexists)."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"get-access-token-api-doc"}),"Get access token ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#1a9da524-6944-4591-ae61-937b58aa3021"}),"[API Doc]")),Object(r.b)("p",{parentName:"li"},"First, you need to get an access (Bearer) token through which the\nZeuz server will be able to identify that any request that you're\nmaking is actually ",Object(r.b)("em",{parentName:"p"},"you"),' and not someone else. For this, you will\nneed to provide the server an API Key, which can be found from your\n"Profile > Api Key" Key tab (click Generate if none is present).'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/auth/token/verify?api_key=2a69d429-fa4d-47ec-a8d7-eff88bf063ef'\n")),Object(r.b)("p",{parentName:"li"},"In this case, the API Key is\n",Object(r.b)("inlineCode",{parentName:"p"},"2a69d429-fa4d-47ec-a8d7-eff88bf063ef"),". This will return a JSON\nobject with two keys ",Object(r.b)("inlineCode",{parentName:"p"},"token")," and ",Object(r.b)("inlineCode",{parentName:"p"},"status"),". This ",Object(r.b)("inlineCode",{parentName:"p"},"token")," value needs\nto be sent to the server with any subsequent API requests as an\nAuthorization header as you will see in the next steps."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Authorization: Bearer TOKEN_HERE\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"opt-verify-test-set-api-doc"}),"[OPT]"," Verify Test Set ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#b65c5729-74a1-4bc4-89cc-85c1da5e3505"}),"[API Doc]")),Object(r.b)("p",{parentName:"li"},'Next, you will need to get the Test Set that you want to run/deploy\nusing API. You can create a Test Set by navigating to "Testing >\nSet > New Set". Add the test cases that you want to run as part of\nthis test set. You can verify that the test set is accessible via\nthe API using the following request.'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/set/list?project=PROJ-17&team=2&search_term=cicd' \\\n--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'\n")),Object(r.b)("p",{parentName:"li"},"In this case ",Object(r.b)("inlineCode",{parentName:"p"},"project")," and ",Object(r.b)("inlineCode",{parentName:"p"},"team")," can be found by clicking on your\nusername. Take the values inside parentheses. ",Object(r.b)("inlineCode",{parentName:"p"},"search_term")," is the\nname of the set that you just created. For this example, it is\n",Object(r.b)("inlineCode",{parentName:"p"},"cicd"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"opt-verify-milestone-api-doc"}),"[OPT]"," Verify milestone ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#ae90b979-b8a1-4823-869b-f0f81019d6df"}),"[API Doc]")),Object(r.b)("p",{parentName:"li"},"You need to provide the ",Object(r.b)("strong",{parentName:"p"},"ID"),' of a Milestone. This can be\nfound from "Project > Milestone (Others)". It is better to choose a\nmilestone that has the "Started" status.'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/milestones/list?project=PROJ-17&team=2&status=started' \\\n--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"status")," can be either ",Object(r.b)("strong",{parentName:"p"},"started")," or ",Object(r.b)("strong",{parentName:"p"},"not_started"),"."))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"opt-create-on-demand-zeuz-node"}),"[OPT]"," Create on-demand Zeuz Node"),Object(r.b)("p",{parentName:"li"},"You can also create an On-demand Zeuz Node that runs in your Zeuz Server.\nThis enables you to run test cases without even having a Zeuz Node running already."),Object(r.b)("p",{parentName:"li"},"To acheive this, you first need to get the current user's ",Object(r.b)("inlineCode",{parentName:"p"},"uid")," and ",Object(r.b)("inlineCode",{parentName:"p"},"username"),".\nThis can be fetched via the following ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#8a04ed77-99c4-4ad0-9926-a87f80afdf32"}),"API call")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/user' \\\n--header 'Authorization:\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "username": "hello",\n        "full_name": "Hello World",\n        "profile_picture_name": "cat.png",\n        "uid": 10,\n        "designation": null,\n        "department": null,\n        "is_active": true,\n        "team_id": 2,\n        "project_id": "PROJ-17"\n    }\n]\n')),Object(r.b)("p",{parentName:"li"},"Note that this may return multiple results for the same user\n(multiple team and projects). You can simply parse the ",Object(r.b)("inlineCode",{parentName:"p"},"uid")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"username")," from this response from the first item of the list."),Object(r.b)("p",{parentName:"li"},"Next, make the following request to deploy an on-demand node in\nthe Zeuz Server."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/Home/ManageMachine/on_demand_node?user_id=10&username=hello'\n")),Object(r.b)("p",{parentName:"li"},"Substitute ",Object(r.b)("inlineCode",{parentName:"p"},"user_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"username")," with the ones you received\nfrom the previous response. This API call will result in the\nfollowing response:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "node_id": "hello_7219_ondemand"\n}\n')),Object(r.b)("p",{parentName:"li"},"You can now use this ",Object(r.b)("inlineCode",{parentName:"p"},"node_id")," value in the next step.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"get-zeuz-node-machine-id-api-doc"}),"Get Zeuz Node (machine) ID ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#3439a31e-c965-4fbc-83b7-b4727fef7a88"}),"[API Doc]")),Object(r.b)("p",{parentName:"li"},'You need to get the Zeuz Node/machine ID to tell the server that\nyou want to deploy/run your test set in that particular\nmachine/zeuz node. If you have Zeuz Node installed locally,\nnavigate to the folder where it is installed (usually "Desktop >\nZeuz_Node") and open the ',Object(r.b)("inlineCode",{parentName:"p"},"node_id.conf")," file. The ",Object(r.b)("inlineCode",{parentName:"p"},"id")," specified\nhere will become a part of the name of the machine. For example, if\nmy username is ",Object(r.b)("strong",{parentName:"p"},"foo")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," specified in ",Object(r.b)("inlineCode",{parentName:"p"},"node_id.conf"),"\nfile is set to ",Object(r.b)("strong",{parentName:"p"},"cicd"),", the name of the Zeuz Node instance will\nbecome available as ",Object(r.b)("strong",{parentName:"p"},"foo_cicd"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' [\n     {\n         "id": 716,\n         "name": "foo_cicd",\n         "user_level": "Automation",\n         "last_updated_time": "Thu-Nov-26-04:58:16-2020"\n     }\n ]\n')),Object(r.b)("p",{parentName:"li"}," You will need to grab the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field from here. The above is an\nexample response for the following request:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/machines/list?project=PROJ-17&team=2' \\\n--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'\n\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(a.a)({parentName:"li"},{id:"deployrun-test-set-api-doc"}),"Deploy/Run Test Set ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#2a542025-5b65-464a-843a-9d7a38f73349"}),"[API Doc]")),Object(r.b)("p",{parentName:"li"},"Now you can deploy/run your test set using the following request:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'https://qa.zeuz.ai/api/run/submit\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo\' \\\n--data-raw \'{\n"test_set_name": "cicd",\n"dependency": {\n    "Brower": "Chrome",\n    "OS": "Windows"\n},\n"email_receiver":[\n    "riz@gmail.com",\n    "minar@gmail.com",\n    "shetu2153@gmail.com"\n],\n"objective": "Sample Objective",\n"milestone": "190",\n"project_id": "PROJ-17",\n"team_id": 2,\n"run_time_params": {\n    "server": {\n        "field": "qa1",\n        "subfield": "https://demo.zeuz.ai"\n    }\n},\n"machine": 41,\n"loop": "1",\n"run_time_settings": {\n    "threading": false,\n    "take_screenshot": true,\n    "debug_mode": false,\n    "upload_log_file_only_for_fail": true\n},\n"branch_version": [\n    "driver: 1.0.01",\n    "browser: 1.2.1"\n],\n"start_date": "2019-10-31",\n"end_date": "2019-10-31",\n"domain": "https://qa.zeuz.ai"\n}\'\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"domain [str]"),": Doman name of the server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"start_date")," and ",Object(r.b)("inlineCode",{parentName:"li"},"end_date")," ","[str]",": These can be set to any date (you\ncan set it to your current date)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"branch_version [array(str)]"),": Used to specify the version. Can be empty ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run_time_settings [array(str)]"),": Used to control Zeuz Node behavior. Keep\nthem as is if you don't want to modify default settings."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loop [int]"),": Indicates how many times to run the selected Test Set."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"machine [int]"),": Zeuz Node/machine ID (you need to specify the ID and\nnot the name)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run_time_params [object(object(str))]"),': Specify any run time\nparameter. These can be obtained from "Testing > Run Tests". In\nthis example ',Object(r.b)("inlineCode",{parentName:"li"},"server")," is the name of the runtime parameter. Its\nvalue is ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://demo.zeuz.ai"}),"https://demo.zeuz.ai"))," which is part of the\n",Object(r.b)("inlineCode",{parentName:"li"},"subfield")," key. The ",Object(r.b)("inlineCode",{parentName:"li"},"field")," key can be set to anything and will\nbe ignored."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"team_id [int]"),': Team ID can be found from "Profile".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"project_id [str]"),': Project ID can be found from "Profile".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"milestone [str]"),": ID of the selected milestone. Needs to\nprovided as a string. See step #3."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"objective [str]"),": Any string can be specified as an objective.\nIndicates the objective of the deploy/run."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email_receivers [array(str)]"),": List of emails to send reports\nto."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dependency [object(str)]"),": Specify the OS and and browser that\nyou want to deploy the test set for. For iOS/Android you can set\n",Object(r.b)("inlineCode",{parentName:"li"},"Mobile")," key to ",Object(r.b)("strong",{parentName:"li"},"iOS")," or ",Object(r.b)("strong",{parentName:"li"},"Android"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"test_set_name [str]"),": Name of the test set to deploy/run. See\nstep #2.")),Object(r.b)("p",{parentName:"li"},"Executing this API endpoint will give back the ",Object(r.b)("inlineCode",{parentName:"p"},"run_id")," that you\ncan then use to periodically check for status."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": {\n        "status": "Submitted",\n        "count": 1\n    },\n    "run_id": "Fri-Nov-1-00:27:52-2019"\n}\n')))),Object(r.b)("h2",{id:"check-deployrun-historystatusdetails"},"Check Deploy/Run history/status/details"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/10815312/SzfAzSWj#a593befd-2c02-4b25-92a1-2f1629bd1fcc"}),"[API Doc]")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://qa.zeuz.ai/api/run/status?run_id=Sun-Jul-7-08:39:13-2019' \\\n--header 'Authorization: Bearer\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"run_id")," parameter will be provided by the Deploy/Run Test set api which is\nmentioned above. Use this to fetch the status of any test set."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status":{\n        "Passed":19\n    },\n    "run_id":"Sun-Jul-7-08:39:13-2019",\n    "detail":[\n        {\n            "tc_id":"TEST-3180",\n            "tc_name":"ABC Test",\n            "status":"Passed",\n            "test_case_type":"Automated",\n            "duration":"00:01:06",\n            "failreason":""\n        },\n        {\n            "tc_id":"TEST-3181",\n            "tc_name":"PQR Test",\n            "status":"Passed",\n            "test_case_type":"Automated",\n            "duration":"00:02:24",\n            "failreason":""\n        }\n    ],\n    "run_id_status":"Complete"\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"run_id_status")," represents the overall status of the whole run/deploy\nsession. It can be one of the three values - ",Object(r.b)("strong",{parentName:"p"},"Complete"),",\n",Object(r.b)("strong",{parentName:"p"},"In-progress"),", ",Object(r.b)("strong",{parentName:"p"},"Cancelled"),". You're advised to make all the\ncharacters lower case if you want to compare the progress string."))}b.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);