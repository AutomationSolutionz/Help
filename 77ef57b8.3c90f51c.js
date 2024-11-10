(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(193)),s={id:"best-practices",title:"Best practices"},o={unversionedId:"how-tos/best-practices",id:"how-tos/best-practices",isDocsHomePage:!1,title:"Best practices",description:"Introduction to ZeuZ",source:"@site/docs\\how-tos\\best-pratices.md",slug:"/how-tos/best-practices",permalink:"/docs/how-tos/best-practices",version:"current",sidebar:"docs",previous:{title:"Guides",permalink:"/docs/how-tos/guides"},next:{title:"Zeuz Server Sitemap",permalink:"/docs/how-tos/zeuz-server-sitemap"}},l=[{value:"Introduction to ZeuZ",id:"introduction-to-zeuz",children:[]},{value:"Test Cases",id:"test-cases",children:[{value:"Test Case Creation",id:"test-case-creation",children:[]},{value:"Test Case Title",id:"test-case-title",children:[]},{value:"Test Steps",id:"test-steps",children:[]},{value:"Step Actions",id:"step-actions",children:[]},{value:"Data",id:"data",children:[]}]},{value:"Test Management",id:"test-management",children:[]},{value:"Deployment &amp; Setup",id:"deployment--setup",children:[]},{value:"Reporting",id:"reporting",children:[{value:"Type of Reports",id:"type-of-reports",children:[]}]},{value:"Access Control",id:"access-control",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction-to-zeuz"},"Introduction to ZeuZ"),Object(r.b)("p",null,"While manual testing remains crucial in the software life cycle, ",Object(r.b)("strong",{parentName:"p"},"Test Automation")," is gaining prominence due to the industry's shift to agile development. The challenges of delivering complex software continuously are exacerbated by evolving business requirements, shorter deployment cycles, and budget constraints. With 50% of software development efforts spent on bug fixing, test automation becomes essential for improving release cycles and minimizing risks. However, achieving a successful return on investment requires navigating hidden pitfalls. This document outlines best practices for QA organization and how ",Object(r.b)("strong",{parentName:"p"},"ZeuZ")," can assist in reaching these goals."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ZeuZ")," offers an integrated approach to test planning, estimation, reporting, and various QA best practices, streamlining your focus on actual work. As a comprehensive cloud-based software testing framework, ",Object(r.b)("strong",{parentName:"p"},"ZeuZ")," covers software requirements, defect tracking, task management, and test planning.",Object(r.b)("br",{parentName:"p"}),"\n","At ",Object(r.b)("strong",{parentName:"p"},"Automation Solutionz"),", we believe in empowering testers, providing a platform that encourages imagination and creativity without dictating thought processes. For those seeking efficiency, ",Object(r.b)("strong",{parentName:"p"},"ZeuZ")," is designed for a quick start in automation tasks, ensuring proper processes are in place for the success of your automation projects."),Object(r.b)("h2",{id:"test-cases"},"Test Cases"),Object(r.b)("h3",{id:"test-case-creation"},"Test Case Creation"),Object(r.b)("p",null,"Designing ",Object(r.b)("strong",{parentName:"p"},"Test Cases")," is one of the most crucial parts of test automation. Instead of updating the test cases, users can utilize the server or build name in this option. In ",Object(r.b)("strong",{parentName:"p"},"ZeuZ"),", this feature is available under the ",Object(r.b)("inlineCode",{parentName:"p"},"Testing > Run Tests")," menu."),Object(r.b)("h3",{id:"test-case-title"},"Test Case Title"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use a descriptive title that explains the purpose of the test case.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The title should indicate what is being validated in the test case.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The title should be no more than 10 words.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If there is a repeating word in many test cases' titles, chances are - you\ncan create a folder/feature and organize similar tests under that\nfolder/feature."))),Object(r.b)("h3",{id:"test-steps"},"Test Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When creating a new step, always start with a global step. NEVER start with a\nlocal step.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Try to ensure whatever step you're creating is as modular as possible so that\nit can be reused from other test cases.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'If your step depends on some test case specific data/variables, create a\nlocal step at the top named "Local data" and put your test case specific data\nin there and read that data from your global steps.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Ensure that the duration for every step is approximately correct (it\'s better\nto overestimate than underestimate in this case). While deploying, turn on\n"Step Timeout" - this will ensure that your tests always terminate if it\novershoots the specified duration.'))),Object(r.b)("h3",{id:"step-actions"},"Step Actions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Put a descriptive name to almost every action. Your goal is to ensure that\nsomeone non-technical can look at the actions and understand the flow of a\nstep.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For any repeatable usage of action - try to use a loop.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you need to fill out a form containing multiple input fields and every\ninput field contains similar attribute specifications (ex: ",Object(r.b)("inlineCode",{parentName:"p"},'<input\nid="first_name">'),", ",Object(r.b)("inlineCode",{parentName:"p"},'<input id="last_name">'),", etc.) - you can put the\nids/attributes in a list and their values in another list (or use a\ndictionary) and loop over the list to fill out the form."))),Object(r.b)("h3",{id:"data"},"Data"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Never hard code data in your test cases.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Data can be read from multiple sources"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Attachments"),Object(r.b)("li",{parentName:"ol"},"Runtime parameters"),Object(r.b)("li",{parentName:"ol"},"External data sources - APIs/Databases/etc."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Attach your data to the tests in one of the three ways"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Test case - if the data is local to a specific test case, attach the data\nto the test case."),Object(r.b)("li",{parentName:"ol"},"Steps - if the data is accessed via a specific step and the step is\nutilized across many test cases, attach the data to the step."),Object(r.b)("li",{parentName:"ol"},"Global - if the data is accessed from many tests, upload to the global\nattachment and use the dedicated global attachment actions."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Data store"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"If the data is tabular or you already have an excel/csv file, utilize the\ndata store built into ZeuZ.  There are dedicated actions for working with\ndata store.")))),Object(r.b)("h2",{id:"test-management"},"Test Management"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Folder"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},'Create a "Regression" folder at the top.'),Object(r.b)("li",{parentName:"ol"},"Put different platform names and organize test cases accordingly. Example structure:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Regression",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mobile",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iOS"),Object(r.b)("li",{parentName:"ul"},"Android"))),Object(r.b)("li",{parentName:"ul"},"Web"),Object(r.b)("li",{parentName:"ul"},"Desktop"),Object(r.b)("li",{parentName:"ul"},"API"))))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Feature"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Identify different modules/sub-modules of your applications and create features or sub-features based on them."),Object(r.b)("li",{parentName:"ul"},'If there is a test case that can belong to multiple features, bring that test case under a common parent feature and put it in a "Common" folder.'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test Set"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Create a "Regression" set. Use the folder defined in the previous section to filter and select easily.'),Object(r.b)("li",{parentName:"ul"},'Create a "Nightly" run set containing only the critical test cases. This set should be as small as possible.'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Milestone"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Milestone is synonymous to "Sprint" or any other checkpointing concept.'),Object(r.b)("li",{parentName:"ul"},"Create a milestone for every checkpoint in your team."),Object(r.b)("li",{parentName:"ul"},"Milestones are a mandatory step for creating rich and detailed reports."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Version"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Versions are available to track versions of the application under test."),Object(r.b)("li",{parentName:"ul"},"With the version information, it's possible to get rich reports."),Object(r.b)("li",{parentName:"ul"},"Step performance is automatically tracked for both versions and milestones."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Batch Update"),Object(r.b)("p",{parentName:"li"}," Batch Update involves simultaneously modifying multiple test cases or related elements, offering efficiency and consistency in test management. This approach is beneficial for tasks like adjusting test data, modifying test steps, or updating execution parameters across a group of test cases. By applying changes collectively, batch updates save time, reduce the risk of errors, and maintain synchronization within the testing process. This feature is available under the ",Object(r.b)("inlineCode",{parentName:"p"},"Testing > Batch Update")," menu."))),Object(r.b)("h2",{id:"deployment--setup"},"Deployment & Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Email"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Setup the email configuration from day 1."),Object(r.b)("li",{parentName:"ul"},"We can provide our own credentials."),Object(r.b)("li",{parentName:"ul"},"Or you can utilize your own SMTP email server credentials for this."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Messaging platforms"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Discord/Slack/Teams/etc."),Object(r.b)("li",{parentName:"ul"},"Configure a dedicated channel in your messaging platform of choice and get its webhook."),Object(r.b)("li",{parentName:"ul"},"Use the webhook to set up the integration with ZeuZ."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scheduler"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Set up a nightly run scheduler from day 1."),Object(r.b)("li",{parentName:"ul"},"Purpose is to ensure that the team starts getting feedback and positive outcome of the tests from the get go."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"CI/CD"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Create presets with proper assignees, testers and email recipients."),Object(r.b)("li",{parentName:"ul"},"Copy the webhook for the presets and paste it in your CI/CD pipeline file.")))),Object(r.b)("h2",{id:"reporting"},"Reporting"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Reporting involves documenting and communicating the outcomes and progress of testing activities. It is crucial for quality assurance, providing stakeholders with clear insights into the status of a process.  ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Reports include execution results, pass/fail statuses, identified issues, and coverage metrics. This information aids decision-making on the readiness of a product or process.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Reporting highlights areas needing attention and contributes to assessing overall quality."))),Object(r.b)("h3",{id:"type-of-reports"},"Type of Reports"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test Execution Report"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It provides a comprehensive summary of the outcomes of executed test cases, including pass/fail status and  details of any encountered issues."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Matrix Report "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It is a visual representation of test execution results, often illustrating the correlation between test cases and various testing criteria such as platforms, configurations, or test types."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Performance Report "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It provide insights into the efficiency and responsiveness of a system by presenting metrics such as response times, throughput, and resource utilization gathered during performance testing to assess and optimize the software's overall performance."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Automatability Report "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It evaluates and communicates the feasibility and suitability of automating specific test cases or scenarios, considering factors such as stability, repeatability, and return on investment for test automation.  "))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Step Report "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It provides a detailed account of individual test steps, documenting the execution sequence, outcomes, and any deviations from expected behavior during the testing process.")))),Object(r.b)("h2",{id:"access-control"},"Access Control"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ZeuZ has policy based access control system. You should define policies for\neach role in your teams - testers, devs, managers, etc.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can manage policies from ",Object(r.b)("inlineCode",{parentName:"p"},"Admin > Group Policy")," menu in\nZeuZ.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once defined, set policies for users from ",Object(r.b)("inlineCode",{parentName:"p"},"Admin > Users > List"),"."))))}p.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||r;return a?i.a.createElement(d,o(o({ref:t},c),{},{components:a})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);