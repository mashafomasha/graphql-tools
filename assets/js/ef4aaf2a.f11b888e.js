(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),b=(a(0),a(258)),l={},c={unversionedId:"api/classes/loaders_graphql_file_src.graphqlfileloader",id:"api/classes/loaders_graphql_file_src.graphqlfileloader",isDocsHomePage:!1,title:"loaders_graphql_file_src.graphqlfileloader",description:"Class: GraphQLFileLoader",source:"@site/docs/api/classes/loaders_graphql_file_src.graphqlfileloader.md",slug:"/api/classes/loaders_graphql_file_src.graphqlfileloader",permalink:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders_graphql_file_src.graphqlfileloader.md",version:"current",sidebar:"someSidebar",previous:{title:"loaders_git_src.gitloader",permalink:"/docs/api/classes/loaders_git_src.gitloader"},next:{title:"wrap_src.hoistfield",permalink:"/docs/api/classes/wrap_src.hoistfield"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"handleFileContent",id:"handlefilecontent",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],o={toc:p};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-graphqlfileloader"},"Class: GraphQLFileLoader"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/loaders_graphql_file_src"}),"loaders/graphql-file/src"),".GraphQLFileLoader"),Object(b.b)("p",null,"This loader loads documents and type definitions from ",Object(b.b)("inlineCode",{parentName:"p"},".graphql")," files."),Object(b.b)("p",null,"You can load a single source:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('schema.graphql', {\n  loaders: [\n    new GraphQLFileLoader()\n  ]\n});\n")),Object(b.b)("p",null,"Or provide a glob pattern to load multiple sources:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('graphql/*.graphql', {\n  loaders: [\n    new GraphQLFileLoader()\n  ]\n});\n")),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/modules/utils#universalloader"}),Object(b.b)("em",{parentName:"a"},"UniversalLoader")),"<",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"\\",">")),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#constructor"}),"constructor"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#canload"}),"canLoad")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#canloadsync"}),"canLoadSync")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#handlefilecontent"}),"handleFileContent")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#load"}),"load")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#loadsync"}),"loadSync")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#loaderid"}),"loaderId"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new GraphQLFileLoader"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"loaders_graphql_file_src.graphqlfileloader"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoader"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"loaders_graphql_file_src.graphqlfileloader"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoader"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"canload"},"canLoad"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"canLoad"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L62"}),"packages/loaders/graphql-file/src/index.ts:62")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"canLoadSync"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L81"}),"packages/loaders/graphql-file/src/index.ts:81")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlefilecontent"},"handleFileContent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"handleFileContent"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): { ",Object(b.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(b.b)("inlineCode",{parentName:"p"},"location"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  } ","|"," { ",Object(b.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(b.b)("inlineCode",{parentName:"p"},"location"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"rawSDL")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," { ",Object(b.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(b.b)("inlineCode",{parentName:"p"},"location"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  } ","|"," { ",Object(b.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(b.b)("inlineCode",{parentName:"p"},"location"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L110"}),"packages/loaders/graphql-file/src/index.ts:110")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"load"},"load"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(b.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(b.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L97"}),"packages/loaders/graphql-file/src/index.ts:97")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadsync"},"loadSync"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadSync"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(b.b)("em",{parentName:"a"},"Source"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(b.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(b.b)("em",{parentName:"a"},"Source"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L104"}),"packages/loaders/graphql-file/src/index.ts:104")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loaderid"},"loaderId"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loaderId"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L58"}),"packages/loaders/graphql-file/src/index.ts:58")))}i.isMDXComponent=!0},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=i(a),O=r,m=s["".concat(l,".").concat(O)]||s[O]||d[O]||b;return a?n.a.createElement(m,c(c({ref:t},o),{},{components:a})):n.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);