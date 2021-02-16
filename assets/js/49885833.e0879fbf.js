(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var b=a(3),r=a(7),n=(a(0),a(258)),c={},i={unversionedId:"api/classes/utils_src.schemavisitor",id:"api/classes/utils_src.schemavisitor",isDocsHomePage:!1,title:"utils_src.schemavisitor",description:"Class: SchemaVisitor",source:"@site/docs/api/classes/utils_src.schemavisitor.md",slug:"/api/classes/utils_src.schemavisitor",permalink:"/docs/api/classes/utils_src.schemavisitor",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/utils_src.schemavisitor.md",version:"current",sidebar:"someSidebar",previous:{title:"utils_src.schemadirectivevisitor",permalink:"/docs/api/classes/utils_src.schemadirectivevisitor"},next:{title:"delegate_src.subschema",permalink:"/docs/api/classes/delegate_src.subschema"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"schema",id:"schema",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"visitArgumentDefinition",id:"visitargumentdefinition",children:[]},{value:"visitEnum",id:"visitenum",children:[]},{value:"visitEnumValue",id:"visitenumvalue",children:[]},{value:"visitFieldDefinition",id:"visitfielddefinition",children:[]},{value:"visitInputFieldDefinition",id:"visitinputfielddefinition",children:[]},{value:"visitInputObject",id:"visitinputobject",children:[]},{value:"visitInterface",id:"visitinterface",children:[]},{value:"visitObject",id:"visitobject",children:[]},{value:"visitScalar",id:"visitscalar",children:[]},{value:"visitSchema",id:"visitschema",children:[]},{value:"visitUnion",id:"visitunion",children:[]},{value:"implementsVisitorMethod",id:"implementsvisitormethod",children:[]}]}],l={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-schemavisitor"},"Class: SchemaVisitor"),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"../modules/utils_src"}),"utils/src"),".SchemaVisitor"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"SchemaVisitor")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"utils_src.schemadirectivevisitor"}),Object(n.b)("em",{parentName:"a"},"SchemaDirectiveVisitor"))))),Object(n.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(n.b)("h3",{id:"constructors"},"Constructors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#constructor"}),"constructor"))),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#schema"}),"schema"))),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitargumentdefinition"}),"visitArgumentDefinition")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitenum"}),"visitEnum")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitenumvalue"}),"visitEnumValue")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitfielddefinition"}),"visitFieldDefinition")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitinputfielddefinition"}),"visitInputFieldDefinition")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitinputobject"}),"visitInputObject")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitinterface"}),"visitInterface")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitobject"}),"visitObject")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitscalar"}),"visitScalar")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitschema"}),"visitSchema")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#visitunion"}),"visitUnion")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/classes/utils_src.schemavisitor#implementsvisitormethod"}),"implementsVisitorMethod"))),Object(n.b)("h2",{id:"constructors-1"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new SchemaVisitor"),"(): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"utils_src.schemavisitor"}),Object(n.b)("em",{parentName:"a"},"SchemaVisitor"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"utils_src.schemavisitor"}),Object(n.b)("em",{parentName:"a"},"SchemaVisitor"))),Object(n.b)("h2",{id:"properties-1"},"Properties"),Object(n.b)("h3",{id:"schema"},"schema"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"schema"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLSchema")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L23"}),"packages/utils/src/SchemaVisitor.ts:23")),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"visitargumentdefinition"},"visitArgumentDefinition"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitArgumentDefinition"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_argument"),": GraphQLArgument, ",Object(n.b)("inlineCode",{parentName:"p"},"_details"),": { ",Object(n.b)("inlineCode",{parentName:"p"},"field"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }\\",">"," ; ",Object(n.b)("inlineCode",{parentName:"p"},"objectType"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLInterfaceType")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType"),"<","any, any\\",">","  }): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLArgument"),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_argument")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"GraphQLArgument")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details.field")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"td"},"any"),";  }\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details.objectType")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLInterfaceType")," ","|"," ",Object(n.b)("em",{parentName:"td"},"GraphQLObjectType"),"<","any, any\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLArgument"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L79"}),"packages/utils/src/SchemaVisitor.ts:79")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitenum"},"visitEnum"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitEnum"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_type"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLEnumType"),"): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLEnumType")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_type")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLEnumType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLEnumType")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L97"}),"packages/utils/src/SchemaVisitor.ts:97")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitenumvalue"},"visitEnumValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitEnumValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_value"),": GraphQLEnumValue, ",Object(n.b)("inlineCode",{parentName:"p"},"_details"),": { ",Object(n.b)("inlineCode",{parentName:"p"},"enumType"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLEnumType"),"  }): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLEnumValue"),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"GraphQLEnumValue")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details.enumType")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLEnumType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLEnumValue"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L99"}),"packages/utils/src/SchemaVisitor.ts:99")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitfielddefinition"},"visitFieldDefinition"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitFieldDefinition"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_field"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"_details"),": { ",Object(n.b)("inlineCode",{parentName:"p"},"objectType"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLInterfaceType")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType"),"<","any, any\\",">","  }): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }\\",">"),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_field")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"td"},"any"),";  }\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details.objectType")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLInterfaceType")," ","|"," ",Object(n.b)("em",{parentName:"td"},"GraphQLObjectType"),"<","any, any\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLField"),"<","any, any, { ","[key: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }\\",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L71"}),"packages/utils/src/SchemaVisitor.ts:71")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitinputfielddefinition"},"visitInputFieldDefinition"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitInputFieldDefinition"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_field"),": GraphQLInputField, ",Object(n.b)("inlineCode",{parentName:"p"},"_details"),": { ",Object(n.b)("inlineCode",{parentName:"p"},"objectType"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLInputObjectType"),"  }): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLInputField"),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_field")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"GraphQLInputField")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_details.objectType")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLInputObjectType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," GraphQLInputField"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L112"}),"packages/utils/src/SchemaVisitor.ts:112")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitinputobject"},"visitInputObject"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitInputObject"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_object"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLInputObjectType"),"): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLInputObjectType")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_object")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLInputObjectType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLInputObjectType")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L107"}),"packages/utils/src/SchemaVisitor.ts:107")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitinterface"},"visitInterface"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitInterface"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_iface"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLInterfaceType"),"): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLInterfaceType")),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_iface")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLInterfaceType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLInterfaceType")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L88"}),"packages/utils/src/SchemaVisitor.ts:88")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitobject"},"visitObject"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitObject"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_object"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType"),"<","any, any\\",">","): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType"),"<","any, any\\",">"),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_object")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLObjectType"),"<","any, any\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType"),"<","any, any\\",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L66"}),"packages/utils/src/SchemaVisitor.ts:66")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitscalar"},"visitScalar"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitScalar"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_scalar"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLScalarType"),"): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLScalarType")),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_scalar")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLScalarType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLScalarType")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L61"}),"packages/utils/src/SchemaVisitor.ts:61")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitschema"},"visitSchema"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitSchema"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_schema"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLSchema"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_schema")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLSchema"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L59"}),"packages/utils/src/SchemaVisitor.ts:59")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"visitunion"},"visitUnion"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"visitUnion"),"(",Object(n.b)("inlineCode",{parentName:"p"},"_union"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLUnionType"),"): ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLUnionType")),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"_union")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"GraphQLUnionType"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")," ","|"," ",Object(n.b)("em",{parentName:"p"},"GraphQLUnionType")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L94"}),"packages/utils/src/SchemaVisitor.ts:94")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"implementsvisitormethod"},"implementsVisitorMethod"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"implementsVisitorMethod"),"(",Object(n.b)("inlineCode",{parentName:"p"},"methodName"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-11"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"methodName")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/SchemaVisitor.ts#L27"}),"packages/utils/src/SchemaVisitor.ts:27")))}s.isMDXComponent=!0},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return o}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(a),O=b,o=m["".concat(c,".").concat(O)]||m[O]||j[O]||n;return a?r.a.createElement(o,i(i({ref:t},l),{},{components:a})):r.a.createElement(o,i({ref:t},l))}));function o(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:b,c[1]=i;for(var l=2;l<n;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);