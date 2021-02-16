(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(258)),l={id:"schema-loading",title:"Loading GraphQL Schemas from different sources",sidebar_label:"Schema loading"},i={unversionedId:"schema-loading",id:"schema-loading",isDocsHomePage:!1,title:"Loading GraphQL Schemas from different sources",description:"These utils are useful for scanning, loading and building a GraphQL schema from any input.",source:"@site/docs/schema-loading.md",slug:"/schema-loading",permalink:"/docs/schema-loading",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-loading.md",version:"current",sidebar_label:"Schema loading",sidebar:"someSidebar",previous:{title:"Setup an HTTP server",permalink:"/docs/server-setup"},next:{title:"Loading GraphQL operation documents from different sources",permalink:"/docs/documents-loading"}},s=[{value:"Usage",id:"usage",children:[{value:"Using <code>#import</code> expression",id:"using-import-expression",children:[]},{value:"Binding to HTTP Server",id:"binding-to-http-server",children:[]}]}],c={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These utils are useful for scanning, loading and building a GraphQL schema from any input."),Object(o.b)("p",null,"You can specify a GraphQL endpoint, local introspection JSON file, code file that ",Object(o.b)("inlineCode",{parentName:"p"},"export"),"s a GraphQLSchema, AST string and ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files (with support for ",Object(o.b)("inlineCode",{parentName:"p"},"glob")," expression)."),Object(o.b)("p",null,"All found schema files can be merged into a complete schema. There is support for ",Object(o.b)("inlineCode",{parentName:"p"},"#import")," syntax (formerly known as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-import"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql-import")),")."),Object(o.b)("p",null,"The user is given the option of implementing their own loader (implement the interface ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaLoader"),")."),Object(o.b)("p",null,"The schema loading util is using loaders, and implemented using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern"}),"chain-of-responsibility pattern"),"."),Object(o.b)("p",null,"Specifying the loader is not necessary. The user need only provide the inputs. The utils will detect it automatically."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const { loadSchema } = require('@graphql-tools/load');\nconst { UrlLoader } = require('@graphql-tools/url-loader');\nconst { JsonFileLoader } = require('@graphql-tools/json-file-loader');\nconst { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');\n\nconst schema1 = await loadSchema('type A { foo: String }');   // load from string w/ no loaders\n\nconst schema2 = await loadSchema('http://localhost:3000/graphql', {   // load from endpoint\n    loaders: [\n        new UrlLoader()\n    ]\n});\n\nconst schema3 = await loadSchema('./schema.json', {   // load from local json file\n    loaders: [\n        new JsonFileLoader()\n    ]\n});\n\nconst schema4 = await loadSchema('schema.graphql', {  // load from a single schema file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst schema5 = await loadSchema('./src/**/*.graphql', { // load from multiple files using glob\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n")),Object(o.b)("h3",{id:"using-import-expression"},"Using ",Object(o.b)("inlineCode",{parentName:"h3"},"#import")," expression"),Object(o.b)("p",null,"Assume the following directory structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 schema.graphql\n\u251c\u2500\u2500 posts.graphql\n\u2514\u2500\u2500 comments.graphql\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema.graphql")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'# import Post from "posts.graphql"\n\ntype Query {\n  posts: [Post]\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"posts.graphql")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"# import Comment from 'comments.graphql'\n\ntype Post {\n  comments: [Comment]\n  id: ID!\n  text: String!\n  tags: [String]\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"comments.graphql")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Comment {\n  id: ID!\n  text: String!\n}\n")),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"loadSchema")," produces the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  posts: [Post]\n}\n\ntype Post {\n  comments: [Comment]\n  id: ID!\n  text: String!\n  tags: [String]\n}\n\ntype Comment {\n  id: ID!\n  text: String!\n}\n")),Object(o.b)("h3",{id:"binding-to-http-server"},"Binding to HTTP Server"),Object(o.b)("p",null,"You can extend loaded schema with resolvers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { join } from 'path';\nimport { loadSchemaSync } from '@graphql-tools/load';\nimport { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';\nimport { addResolversToSchema } from '@graphql-tools/schema';\nimport * as express from 'express';\nimport * as graphqlHTTP from 'express-graphql';\n\n// Load schema from the file\nconst schema = loadSchemaSync(join(__dirname, './schema.graphql'), {\n  loaders: [\n    new GraphQLFileLoader(),\n  ]\n});\n\n// Write some resolvers\nconst resolvers = {};\n\n// Add resolvers to the schema\nconst schemaWithResolvers = addResolversToSchema({\n    schema,\n    resolvers,\n});\n\nconst app = express();\n\napp.use(\n    graphqlHTTP({\n        schema: schemaWithResolvers,\n        graphiql: true,\n    })\n);\n\napp.listen(4000, () => {\n    console.info(`Server listening on http://localhost:4000`)\n})\n\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can learn more about ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/loaders"}),"loaders")," to load schemas from different sources.")))}p.isMDXComponent=!0},258:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.a.createElement(b,i(i({ref:n},c),{},{components:t})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);