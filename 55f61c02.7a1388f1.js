(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{126:function(A,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return f})),o.d(t,"metadata",(function(){return n})),o.d(t,"rightToc",(function(){return g})),o.d(t,"default",(function(){return w}));var e=o(3),i=o(7),a=(o(0),o(214)),f={id:"action-gui-controls-ocr-get-text-using-image",title:"OCR - Get text using image"},n={unversionedId:"actions/gui-controls/action-gui-controls-ocr-get-text-using-image",id:"actions/gui-controls/action-gui-controls-ocr-get-text-using-image",isDocsHomePage:!1,title:"OCR - Get text using image",description:"Description",source:"@site/docs\\actions\\gui-controls\\ocr-get-text-using-image.md",slug:"/actions/gui-controls/action-gui-controls-ocr-get-text-using-image",permalink:"/docs/actions/gui-controls/action-gui-controls-ocr-get-text-using-image",version:"current",sidebar:"docs",previous:{title:"Click and Hold an Element",permalink:"/docs/actions/web/click-and-hold-an-element"},next:{title:"OCR - Get text using text",permalink:"/docs/actions/gui-controls/action-gui-controls-ocr-get-text-using-text"}},g=[{value:"Description",id:"description",children:[]},{value:"Optional Parameters:",id:"optional-parameters",children:[]}],r={rightToc:g};function w(A){var t=A.components,f=Object(i.a)(A,["components"]);return Object(a.b)("wrapper",Object(e.a)({},r,f,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This action allows you to extract text based on its position in relation to the image you provide. The image has to be attached in the attachment section. You also have to provide the direction of the text corresponding to the image. The direction can be one of the following four, left, right, top, bottom. You can also provide an integer as the text gap option to be more specific about the text you want to extract. A variable name also has to be provided to store the extracted text. The following 2 scenarios should give you an idea of how you can implement the action,"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Scenario 1:")),Object(a.b)("p",null,Object(a.b)("img",{src:o(439).default})),Object(a.b)("p",null,"Suppose you want to extract the Remote Port number shown in the above image, that is 4723. In that case, you have to take a cropped image of only the \u201cRemote Port\u201d part, attach it to the test case and provide the name of the image in the image row (the first row) of the action. As 4723 is on the right side of the right side of Remote Port, the value for the direction row will be right. Finally, you should also provide a variable name in the last row that will hold the extracted text. The text \u201c4723\u201d will be successfully stored in that variable."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Scenario 2:")),Object(a.b)("p",null,Object(a.b)("img",{src:o(440).default})),Object(a.b)("p",null,"Suppose you want to extract the word \u201cSauceLabs\u201d using the image of BrowserStack. Then you have to take a cropped image of the BrowserStack part, attach it to the test case and provide the name of the image in the image row (the first row) of the action. As \u201cSauceLabs\u201d is above the BrowserStack, here the direction will be top. Now the text \u201cSauceLabs\u201d will be stored in the variable you provided in the final row."),Object(a.b)("h2",{id:"optional-parameters"},"Optional Parameters:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"text gap:")," Now, let\u2019s see how we can use the \u201ctext gap\u201d option. With the help of an image, we can extract text adjacent to the image. Now this adjacency can be defined using the \u201ctext gap\u201d option. Let us consider the following 2 scenarios"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Scenario 1:")),Object(a.b)("p",null,"Suppose you want to extract the word \u201cCurrent Advance\u201d using the cropped image of \u201cInterest Deductions\u201d."),Object(a.b)("p",null,Object(a.b)("img",{src:o(441).default})),Object(a.b)("p",null,"Now as you can see the word \u201cCurrent Advance\u201d is located right to the \u201cInterest Deductions\u201d but it's not aligned horizontally with the \u201cCurrent Advance\u201d. So if we declare the image and set the direction to right we will not be able to extract anything as the words are out of alignment as shown in the following image."),Object(a.b)("p",null,Object(a.b)("img",{src:o(442).default})),Object(a.b)("p",null,"But if we set the text gap to 300 then the word \u201cCurrent Advance\u201d gets aligned with the word \u201cInterest Deductions\u201d as we have added 300 pixels. Now the range gets broader and any word that falls within that range can be considered as an adjacent word. This way you can extract words that may not be extracted generally."),Object(a.b)("p",null,Object(a.b)("img",{src:o(443).default})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Scenario 2:")),Object(a.b)("p",null,"Suppose you want to extract the word above \u201cSauceLabs\u201d."),Object(a.b)("p",null,Object(a.b)("img",{src:o(444).default})),Object(a.b)("p",null,"In this case, you are hoping to extract the word \u201cSelect Cloud Provide\u201d as it is right above \u201cSauceLabs\u201d. But if you run the action without specifying the text gap option you will see you extracted the word \u201cRemote Port\u201d."),Object(a.b)("p",null,Object(a.b)("img",{src:o(445).default})),Object(a.b)("p",null,"As you can see in the above image the range for which a word can be considered as an adjacent word of the \u201cSauceLabs\u201d does not involve the word \u201cSelect Cloud Provide\u201d but involves the word \u201cRemote Port\u201d. So the word \u2018Remote Port\u201d gets extracted instead of \u201cSelect Cloud Provide\u201d. Now if you widen the range using the text gap option you will be able to extract the word \u201cSelect Cloud Provide\u201d as you desire."),Object(a.b)("p",null,Object(a.b)("img",{src:o(446).default})))}w.isMDXComponent=!0},214:function(A,t,o){"use strict";o.d(t,"a",(function(){return K})),o.d(t,"b",(function(){return C}));var e=o(0),i=o.n(e);function a(A,t,o){return t in A?Object.defineProperty(A,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):A[t]=o,A}function f(A,t){var o=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),o.push.apply(o,e)}return o}function n(A){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){a(A,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(o,t))}))}return A}function g(A,t){if(null==A)return{};var o,e,i=function(A,t){if(null==A)return{};var o,e,i={},a=Object.keys(A);for(e=0;e<a.length;e++)o=a[e],t.indexOf(o)>=0||(i[o]=A[o]);return i}(A,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(e=0;e<a.length;e++)o=a[e],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(i[o]=A[o])}return i}var r=i.a.createContext({}),w=function(A){var t=i.a.useContext(r),o=t;return A&&(o="function"==typeof A?A(t):n(n({},t),A)),o},K=function(A){var t=w(A.components);return i.a.createElement(r.Provider,{value:t},A.children)},c={inlineCode:"code",wrapper:function(A){var t=A.children;return i.a.createElement(i.a.Fragment,{},t)}},v=i.a.forwardRef((function(A,t){var o=A.components,e=A.mdxType,a=A.originalType,f=A.parentName,r=g(A,["components","mdxType","originalType","parentName"]),K=w(o),v=e,C=K["".concat(f,".").concat(v)]||K[v]||c[v]||a;return o?i.a.createElement(C,n(n({ref:t},r),{},{components:o})):i.a.createElement(C,n({ref:t},r))}));function C(A,t){var o=arguments,e=t&&t.mdxType;if("string"==typeof A||e){var a=o.length,f=new Array(a);f[0]=v;var n={};for(var g in t)hasOwnProperty.call(t,g)&&(n[g]=t[g]);n.originalType=A,n.mdxType="string"==typeof A?A:e,f[1]=n;for(var r=2;r<a;r++)f[r]=o[r];return i.a.createElement.apply(null,f)}return i.a.createElement.apply(null,o)}v.displayName="MDXCreateElement"},439:function(A,t,o){"use strict";o.r(t),t.default="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QLcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAGAAABSodpAAQAAAABAAABUJydAAEAAAAMAAACyOocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVGFyZXEAAAWQAwACAAAAFAAAAp6QBAACAAAAFAAAArKSkQACAAAAAzA0AACSkgACAAAAAzA0AADqHAAHAAABDAAAAZIAAAAAHOoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjQ6MDU6MTkgMTg6MDE6MDMAMjAyNDowNToxOSAxODowMTowMwAAAFQAYQByAGUAcQAAAP/hBBhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDI0LTA1LTE5VDE4OjAxOjAzLjAzOTwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5UYXJlcTwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMABwUFBgUEBwYFBggHBwgKEQsKCQkKFQ8QDBEYFRoZGBUYFxseJyEbHSUdFxgiLiIlKCkrLCsaIC8zLyoyJyorKv/bAEMBBwgICgkKFAsLFCocGBwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKv/AABEIAGQBPQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APoKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCuUV5pN6hsEAZGccCl8mP/nmn/fIpR/rZf8AeH8hTLm4itLWW5uG2RQoZHbBOFAyTge1DdtWG47yY/8Anmn/AHyKPJj/AOeaf98is3TfEmm6rci3tnuY5mTzES6s5rcyL3K+Yq7gMjOM4yM9RWrQAzyY/wDnmn/fIo8mP/nmn/fIp9FA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"},440:function(A,t,o){"use strict";o.r(t),t.default="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QLcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAGAAABSodpAAQAAAABAAABUJydAAEAAAAMAAACyOocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVGFyZXEAAAWQAwACAAAAFAAAAp6QBAACAAAAFAAAArKSkQACAAAAAzgzAACSkgACAAAAAzgzAADqHAAHAAABDAAAAZIAAAAAHOoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjQ6MDU6MTkgMTg6MDk6MzAAMjAyNDowNToxOSAxODowOTozMAAAAFQAYQByAGUAcQAAAP/hBBhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDI0LTA1LTE5VDE4OjA5OjMwLjgzMzwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5UYXJlcTwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMABwUFBgUEBwYFBggHBwgKEQsKCQkKFQ8QDBEYFRoZGBUYFxseJyEbHSUdFxgiLiIlKCkrLCsaIC8zLyoyJyorKv/bAEMBBwgICgkKFAsLFCocGBwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKv/AABEIAHMBYgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APpEkKpJOAOSai+0x9hIf+2Tf4UXf/HnN/1zb+VS0ARfaU/uy/8Afpv8KPtKf3Zf+/Tf4VLRQBF9pT+7L/36b/Cj7Sn92X/v03+FS0UARfaU/uy/9+m/wo+0p/dl/wC/Tf4VLRQBF9pT+7L/AN+m/wAKPtKf3Zf+/Tf4VLRQBF9pT+7L/wB+m/wo+0p/dl/79N/hUtFAEX2lP7sv/fpv8KPtKf3Zf+/Tf4VLQSFUljgDkk9qAIvtKf3Zf+/Tf4UfaU/uy/8Afpv8KwJfHWlRysix3MgU4Doi4P0yQavaP4itdamkjtIbhfLXczSKAOvTgnn/AAqeZM44Y7DVJ8kJps0ftKf3Zf8Av03+FH2lP7sv/fpv8KloqjsIvtKf3Zf+/Tf4UfaU/uy/9+m/wqWigCL7Sn92X/v03+FH2lP7sv8A36b/AAqWigCL7Sn92X/v03+FH2lP7sv/AH6b/CpaKAIvtKf3Zf8Av03+FH2lP7sv/fpv8KlooAi+0p/dl/79N/hR9pT+7L/36b/CpaKAIvtKf3Zf+/Tf4UfaU/uy/wDfpv8ACpaKAIvtKf3Zf+/Tf4UfaU/uy/8Afpv8KlooAi+0p/dl/wC/Tf4UfaU/uy/9+m/wqWigCL7Sn92X/v03+FH2lP7sv/fpv8KlooAi+0p/dl/79N/hR9pT+7L/AN+m/wAKlooAi+0p/dl/79N/hR9pT+7L/wB+m/wqWigCL7Sn92X/AL9N/hR9pT+7L/36b/CpaKAI1nR2CjcCem5CufzFSVFN/rbf/rof/QWqWgAooooAiu/+POb/AK5t/Kpaiu/+POb/AK5t/KpaACiiigAooooAKKKKACiiigAooooAKxvFd99h8PTlTh5v3S/j1/TNbNcN4/mlN3aQlSIQhcHsWJwfyAH51M3aJ5+ZVnRws5Lfb79DJ8OaF/bl1KkkjRRRJksozyTwP5/lWguqp4RvrmwsY1uvmBeWQ4OcdOPTP86ytF1LUradLTTJ/KNxIoP7tWyTx3Fb/jDTNNsLATRwZvbiX/WGRiT3ZsZx+nesV8N0fL4dJYR1qGk4byfn0W/6FzQvGDapqaWdxarGZAdjI2eQM8j8Ks+OvFA8GeCtR10wfaGtUXZFnAZ2YIuT6ZYZ9qxPAVj5l9PeuOIl2J/vHr+g/Wtfx/qGgad4LvX8XQPPpEu2KdEQsfmIweORzjnscVrBtrU+jyurWq4b2lZ3bbt6HB3fjf4keGNLsPEfiWx0O90W7ePzYNO83z4UcZB544H+9/WvUdU13SdEs1utY1K1sYHOEkuJlQMfQZPJrx/X9N1n4TeG4vEfg7xZNf6DG0YGlakRIjxuRgRt265wADgE5PSrfiufT/EnxOsfsPhm58T6ra6UszafeXUMVlbxychmV1JZ/nGf+A+nGh6V7Hq0GuaTc6Q2q2+p2cunKpZrtJ1MSgdSXzgY7+lE2t6Vb6SuqXGp2cWnOFZbx7hFhYN0IcnHOeOea8D8MSOnhX4vWK2tvZQwR7xZ2svmQwOyyhwp4GPkA6dsdq0vGd7bJ+yno8ZmTfPb2kcYDD5mUgsPw2nP0oDm0PZ9V8QaPodrHc6zqlnYwynEb3E6oH/3cnn8KsWup2N9p4v7K9t7izZSwuIpVaMgdTuBxxXklvp2n+IP2gpLPxLbQXsFr4fiaxtrpBJGSdm4hTwT8z/z7VkeOrPQPD/ws8X2ngbUp5Yn1OJb+1DfurNi+GSP5RgHABGW4AoHc9l0zxX4e1q8e10fW9PvrhBlore5SRseuAenvUfh/VrjU7/X4bkIF0/Ujaw7BglPIhfn1OZG/SvIL3wrqFnrnhG7TTvCPhpoL+Jreexuyst6mVBT7g8wkEdc5z716j4O/wCQv4v/AOw4f/SS3pAmzoby+tNOtWudQuobWBSA0s8gRRn3PFZHiTWvK+H+taxod5FI9vp1xPb3ELLIodI2II6g4I6cisnxQ2n3PjLToP7HuNe1S1tXmjsw8awQRuwXzn8wgbiVKjGT97jvXJb5Y7L4q2kmmwaSE0ZJmsracSIkj20+5uFUAsFTIx2B70A2ek6Tr1lc2thbXOpWralNbRyNbmZBIxKAk7Ovv0q3fa1pWlyxxanqVnZyS/6tLidYy/0BIzXnHiHRdJtPgXFqWm2tuby3s7a8tb0IBKbjKMsm/wC9uLH15zitW+0m4HirXNU0vTdJ8TxXLRQ3dncyhJ7ZkjUeWpZWUqQQ21tvLE55oC534IIBByD0Iorn/AslhJ4J08aQt2lnGrxJFeHMsRR2Ro2/3WUr9AK6CgoKKKKACiiigAooooAKKKKACiiigCKb/W2//XQ/+gtUtRTf623/AOuh/wDQWqWgAooooAiu/wDjzm/65t/KpaZOhkt5EHVkIH5VH9obvbyfmv8AjQBPRUP2hv8An3l/Nf8AGj7Q3/PvL+a/40ATUVD9ob/n3l/Nf8aPtDf8+8v5r/jQBNRUP2hv+feX81/xo+0N/wA+8v5r/jQBNRUP2hv+feX81/xo+0N/z7y/mv8AjQBNRUP2hv8An3l/Nf8AGj7Q3/PvL+a/40ATUyWGKdds8SSL6OoI/WmfaG/595fzX/Gj7Q3/AD7y/mv+NAmk1ZmD4ptjb6Yi6TYf6RJIPntofmRRyeVGR2H51xs2n61clfPtL+Ujpvjc4/OvUPtDf8+8v5r/AI0faG/595fzX/Gs5Quzx8VlUcTU5nNpdlsUPDemtpehwwyrtlbMkg9GPb8BgfhVzUNPtNW06ew1K3jubW4QpLFIMqwp/wBob/n3l/Nf8aPtDf8APvL+a/41aVlY9WlTjSpqnHZaHC2PwR8DWOoRXS6bLOIX3xQXFy8kSHOfuk8/Q5Favif4a+GfF2qRajq9nJ9sjURma3naJnQHO1tp5H6+9dL9ob/n3l/Nf8aPtDf8+8v5r/jTLsjl9K+Fvg/RdXn1HTtHjimnt2tnQuzR+WwCsAhOOQMH1yfWsyH4HeA4YLuFdJcpdYDbrmQmMAhsKc5HIHv2ziu7+0N/z7y/mv8AjR9ob/n3l/Nf8aAsjnfE/wAO/Dni4Wp1izczWieXBcQytHIi/wB3cDyPrmrGmeBvDmkeGJvD9jpcS6ZcA+fC5LeaT1LEnJPA5zxgYra+0N/z7y/mv+NH2hv+feX81/xoCyOR0D4S+EPDmsRanp+nyPcwf8e5uJ3lWD/dDHAPv1FaF14F0y51K7vku9XtJbyTzZ1s9UngR32hd21HAzhVGcdhW99ob/n3l/Nf8aPtDf8APvL+a/40BZGDP4F0ucWj/atUjurWNokvU1GYXDRs24o8m7LrnoGzjtio1+Hnh9Hu2jiu1+22jWd2PtspFwjBgTJlvnb94/zNkjPWui+0N/z7y/mv+NH2hv8An3l/Nf8AGgLI56P4e6DHc2zql4be1dZYbE3khtlkXkP5W7bnIz0xnnGeasal4M0zUdSl1BZb+wurhQtxJp97Jb+eAMDeFIBIHG7rjjNbP2hv+feX81/xo+0N/wA+8v5r/jQFkR6Zplno2mw6fpkC29rAMRxqScc5JyeSSSSSeSSSatVD9ob/AJ95fzX/ABo+0N/z7y/mv+NAyaioftDf8+8v5r/jR9ob/n3l/Nf8aAJqKh+0N/z7y/mv+NH2hv8An3l/Nf8AGgCaioftDf8APvL+a/40faG/595fzX/GgCaioftDf8+8v5r/AI0faG/595fzX/GgCaioftDf8+8v5r/jR9ob/n3l/Nf8aAFm/wBbb/8AXQ/+gtUtV9zTTRfumQIxYliPQjsferFABRRRQAUUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAGKMUUUAFFFFABRRRQAydzHbyOOqqSPypvkyd7mT8l/wou/8Ajzm/65t/KpaAIvJf/n5l/Jf8KPJf/n5l/Jf8KlooAi8l/wDn5l/Jf8KPJf8A5+ZfyX/CpaKAIvJf/n5l/Jf8KPJf/n5l/Jf8KlooAi8l/wDn5l/Jf8KPJf8A5+ZfyX/CpaKAIvJf/n5l/Jf8KPJf/n5l/Jf8KlqtqF/b6ZYS3l4+yGIZJ7n0A9zSbSV2OMXJ2W5J5L/8/Mv5L/hR5L/8/Mv5L/hXl17451/WJJZNLki0vT0Yp5xQOzH0Gep+mBVaw8YatFL+48QfaSrfNHcwqyMfTI+YfgayVSUoe0jCTj3sbV4UMNNUq9aMZvpd3+dk0vvPWvJf/n5l/Jf8KPJf/n5l/Jf8KzPD3iBNbtiJIvIu4gPNi3bh/vKe6mptR8R6Ho9wtvq2s6fYzMm9Y7m6SNiuSM4Yg4yDz7Grp1I1IqUHdGU4ODsy75L/APPzL+S/4UeS/wDz8y/kv+FVdN17SNZZxpGq2V+Yxlxa3CS7frtJxV+rJIvJf/n5l/Jf8KPJf/n5l/Jf8KlooAi8l/8An5l/Jf8ACjyX/wCfmX8l/wAKlooAi8l/+fmX8l/wo8l/+fmX8l/wqWigCLyX/wCfmX8l/wAKPJf/AJ+ZfyX/AAqWmySJFG0krKiICzMxwFA6kmgBnkv/AM/Mv5L/AIUeS/8Az8y/kv8AhWJbePfCd3e/ZLfxFprz7goUXC/MT2Bzg/hXQUAReS//AD8y/kv+FHkv/wA/Mv5L/hUtFAEXkv8A8/Mv5L/hR5L/APPzL+S/4Utzcw2drLc3UqwwQoZJJHOFRQMkk+gAqOxv7TU7GO8064jubaUZjlibcrDOOD9RQA/yX/5+ZfyX/CjyX/5+ZfyX/CpaKAIvJf8A5+ZfyX/CjyX/AOfmX8l/wqWigCLyX/5+ZfyX/CjyX/5+ZfyX/CpaKAIvJf8A5+ZfyX/CjyX/AOfmX8l/wqWigCLyX/5+ZfyX/CjyX/5+ZfyX/CpaKAICHiljBlZw7FSGA44J7AelT1FN/rbf/rof/QWqWgAooooAiu/+POb/AK5t/Kpaiu/+POb/AK5t/KpaACiiigAooooAKKKKACiiigArhPilPKul2UCZCSSMze5Ucf8AoRru6wPGOiNrmhNHCMzwt5kfvxyPyrlxkZSoSUdztwNSNPEwlPa54l49S7T4T2k2kbhGgUXXl9VU/eP4tjPsa888Gag7z2Ol6bpyC7N201xfbiWeLYAEI6BVIZs9yR6c+tWl7e6JI8IUqpOWiccZoSZDvisLO2tRMfnjs7cJvPvjr+dY082pRpxlrePQ5sflmK9pVhGm5Ko27+vf/gnS+D7mSLUrVhnG8xn3BI/xNYfxHktofj5oUt/o0+uWyaVmSxt7UXDyjM4GIzwcEg+2M11/g7R5DcxyyrhYsM2OgI6DPc55qj408NeLn+J2n+KfCVtYTm00/wCzbb2QhdxaTPAIPRx3rDKlL2UpPZvQurTdKEKUndpanLaO2nX3x10aTR9Dm8IpFbSM9veW/wBle74YYWMfL39eQCe1bfhjxl8Q/G9je3GiW/h+1SzumhL3CzfveAdoAJxgHJOecjAHNW7Hwj4y8ReONJ8QeN5NMtItJDNBbafuJZj6k544Hc9MY5NbXwv8Jaj4O8P39lqzQNLcajJcoYHLDYyIBnIHOVNeuYGJD418a+J9Y1W38F2GkfZdHk8iaa/MgNzKMghAD8oJBxntjJ5xVVfi1qFzoGga/HawW1jJqf8AZ2sxupYwv8pDIc8DaSefYVbt/C/jPwdr2tyeD49Mv9P1ac3KreSMj28h69Oo5/HA6d5tO+FrWvwi1Hwvd3EU+oX7PdPMMiNbj5SuOMhRsUE49eOcUAOuPiRcQ/GOLw0Iov7JJFq9wVO4XLJvC7s49FxjrVJ/ihqcOl+LteFnDcaVpN2tlYKoKmV9wVmZs9BlTwP4sVEvwt1b/hWBsWu4T4n/ALRGpi7Mh2iYNgfPjP3PbrW5pnhDWfDnwsttD0I6ZJqY+e6F9G0kMxYlnU469lyR0HbqABnhHxZ4j1vVLZLm+8J6hZyx75Rpd2/nwcZ5Ric9vTvWBL8V9W1W91SXQbzwvp9jYStHFHrF0UnvCo5KgMMA9vfAz1p2l/DrWLvxjo+r3ei6J4bi02XzpP7LYl7k8fLgcAdR9CetVk+GmueHNY1JdI0Dw1r+n3k7TQPqsIMtvn+HJHIHoOuM8ZNAFq9+MGpXeheF77w5p1o9xrF49nPa3LMdkisgCqwIxneDkg8EcVf8UaB8QfEHgPWtN1KbSZLiTy2to9O3p5qhsuhLnjpx69zTL34eazcr4NdYdFtpdJ1L7ZfJp8X2eIjeh+RQOWwmMnGa7bxTa6/d6I0fhO/trDUA6sJLmLerKOq98Z45weM/UAHktvr3g7TtKsNN8dfDq40gwhIzdSaeChYdW34DEEgkgZz71ZvZ9buf2iLWfQ30mQS6aj2zyGQxtanknK/x/exjjGK1dc0b4m+MdFfQNZg0Gws5youLuJndiFYH5Vyecgen1FWLnwLrmheOdC1nwwlte2tjpkemyx3UpRwq8bx2JwQfqDQBY8WeI/FOk6teLb674Q062jG62t9QnZZ5RtzyMjBzwMVUHxYvbjwFoOoWOlxS65rdybOC3LEQh1faXJ67enGe/XjNVT8OdasvFWuXS6R4f1yLVrlp4bzVAXe0DEnBQqQcZxgYzgcjoEt/hdrtr8P9At7a5tI9f0G+e8g3MzQyZfdsJwDzhe3t3yADW1Kbxv8A8Id4pg8X2ujm1GjXLRXOnSPy5jb5Crc8Dvx26845rwN45uk8I+GvCnhCK1vNbkjd7hrknybSPzGJL4IJbB6A+nsK7D7L471/RddstftdHs4bzTZba2it5XZ/OZCoZm6befr0rnbX4R3uleD9Gn0JrSy8W6ZMZmuQxMdxublHbGSNuO2Oo7k0AetRhxEolZWkAG5lXaCe5AycfTJp1RWzTPaQtdRrFOyKZERtwVscgHuAe9S0AFFFFABRRRQAUUUUAFFFFAEU3+tt/wDrof8A0FqlqKb/AFtv/wBdD/6C1S0AFFFFAEV3/wAec3/XNv5VLSMAykHkEYNQ/ZV7NJ/39b/GgCeioPsq/wB+T/v63+NH2Vf78n/f1v8AGgCeioPsq/35P+/rf40fZV/vyf8Af1v8aAJ6Kg+yr/fk/wC/rf40fZV/vyf9/W/xoAnoqD7Kv9+T/v63+NH2Vf78n/f1v8aAJ6Kg+yr/AH5P+/rf40fZV/vyf9/W/wAaAKWo+HdP1Ji08IDnqygc/geKq23hDT7dsjcR/dUBQfyFa/2Vf78n/f1v8aPsq/35P+/rf41yywlCUuZxVzeOIrRjyqTsSQwR28QjgRURegAp9QfZV/vyf9/W/wAaPsq/35P+/rf410pJKyMW29WT0VB9lX+/J/39b/Gj7Kv9+T/v63+NMRPRUH2Vf78n/f1v8aPsq/35P+/rf40AT0VB9lX+/J/39b/Gj7Kv9+T/AL+t/jQBPRUH2Vf78n/f1v8AGj7Kv9+T/v63+NAE9FQfZV/vyf8Af1v8aPsq/wB+T/v63+NAE9FQfZV/vyf9/W/xo+yr/fk/7+t/jQBPRUH2Vf78n/f1v8aPsq/35P8Av63+NAE9FQfZV/vyf9/W/wAaPsq/35P+/rf40AT0VB9lX+/J/wB/W/xo+yr/AH5P+/rf40AT0VB9lX+/J/39b/Gj7Kv9+T/v63+NAE9FQfZV/vyf9/W/xo+yr/fk/wC/rf40AT0VB9lX+/J/39b/ABo+yr/fk/7+t/jQBPRUH2Vf78n/AH9b/Gj7Kv8Afk/7+t/jQA6b/W2//XQ/+gtUtRJbqjhssxHTc5bH5mpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z"},441:function(A,t,o){"use strict";o.r(t),t.default="data:image/jpeg;base64,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"},442:function(A,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/gap_option_horizontal_use_default-56cf7f68985b38e684973ea6b0bee04f.jpg"},443:function(A,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/gap_option_horizontal_use_option-55379ca03e9aa3f98d9900a9130b709c.jpg"},444:function(A,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/gap_option_vertical_use-6858c76b62cda0941b6d270b158f804c.jpg"},445:function(A,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/gap_option_vertical_use_default-0f4e9498925bcca65ecc73c1ac571527.jpg"},446:function(A,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/gap_option_vertical_use_option-157c53e6a85b273da56ea98cb748b1a7.jpg"}}]);