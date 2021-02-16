(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),s=(t(0),t(258)),r={id:"mocking",title:"Mocking",description:"Mock your GraphQL data based on a schema."},c={unversionedId:"mocking",id:"mocking",isDocsHomePage:!1,title:"Mocking",description:"Mock your GraphQL data based on a schema.",source:"@site/docs/mocking.md",slug:"/mocking",permalink:"/docs/mocking",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/mocking.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom scalars and enums",permalink:"/docs/scalars"},next:{title:"Data fetching",permalink:"/docs/connectors"}},i=[{value:"Default mock example",id:"default-mock-example",children:[]},{value:"Customizing mocks",id:"customizing-mocks",children:[{value:"Mocking Custom Scalar Types",id:"mocking-custom-scalar-types",children:[]},{value:"Using lists in mocks",id:"using-lists-in-mocks",children:[]},{value:"Applying mutations",id:"applying-mutations",children:[]},{value:"Handling <code>*byId</code> fields",id:"handling-byid-fields",children:[]},{value:"Mocking a pagination",id:"mocking-a-pagination",children:[]}]},{value:"Mocking a schema using introspection",id:"mocking-a-schema-using-introspection",children:[]},{value:"API",id:"api",children:[{value:"addMocksToSchema",id:"addmockstoschema",children:[]},{value:"mockServer",id:"mockserver",children:[]},{value:"MockStore",id:"mockstore",children:[]}]},{value:"Migration from V7 and below",id:"migration-from-v7-and-below",children:[{value:"Breaking change: Mock functions signature",id:"breaking-change-mock-functions-signature",children:[]},{value:"Breaking change: preserved resolvers source argument and abstract types mocking",id:"breaking-change-preserved-resolvers-source-argument-and-abstract-types-mocking",children:[]},{value:"Deprecated: MockList",id:"deprecated-mocklist",children:[]}]}],l={toc:i};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The strongly-typed nature of a GraphQL API lends itself extremely well to mocking. This is an important part of a GraphQL-First development process, because it enables frontend developers to build out UI components and features without having to wait for a backend implementation."),Object(s.b)("p",null,"Even with a backend that is already built, mocking allows you to test your UI without waiting on slow database requests or building out a component harness with a tool like React Storybook."),Object(s.b)("h2",{id:"default-mock-example"},"Default mock example"),Object(s.b)("p",null,"Let's take a look at how we can mock a GraphQL schema with just one line of code, using the default mocking logic you get out of the box with ",Object(s.b)("inlineCode",{parentName:"p"},"graphql-tools"),"."),Object(s.b)("p",null,"To start, let's grab the schema definition string from the ",Object(s.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," example ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generate-schema/#example"}),'in the "Generating a schema" article'),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\nimport { graphql } from 'graphql';\n\n// Fill this in with the schema string\nconst schemaString = `...`;\n\n// Make a GraphQL schema with no resolvers\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\n\n// Create a new schema with mocks\nconst schemaWithMocks = addMocksToSchema({ schema });\n\nconst query = `\nquery tasksForUser {\n  user(id: 6) { id, name }\n}\n`;\n\ngraphql(schemaWithMocks, query).then((result) => console.log('Got result', result));\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: If your schema has custom scalar types, you still need to define the ",Object(s.b)("inlineCode",{parentName:"p"},"__serialize"),", ",Object(s.b)("inlineCode",{parentName:"p"},"__parseValue"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"__parseLiteral")," functions, and pass them inside the second argument to ",Object(s.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),".")),Object(s.b)("p",null,"This mocking logic simply looks at your schema and makes sure to return a string where your schema has a string, a number for a number, etc. So you can already get the right shape of result. But if you want to use the mocks to do sophisticated testing, you will likely want to customize them to your particular data model."),Object(s.b)("h2",{id:"customizing-mocks"},"Customizing mocks"),Object(s.b)("p",null,"This is where the ",Object(s.b)("inlineCode",{parentName:"p"},"mocks")," option comes in, it's an object that describes your desired mocking logic. This is similar to the ",Object(s.b)("inlineCode",{parentName:"p"},"resolverMap")," in ",Object(s.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),", but has a few extra features aimed at mocking."),Object(s.b)("p",null,"It allows you to specify functions that are called for specific types in the schema, for example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Int: () => 6,\n  Float: () => 22.1,\n  String: () => 'Hello',\n}\n")),Object(s.b)("p",null,"You can also use this to describe object types, and the fields can be functions too:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Person: () => ({\n    name: casual.name(),\n    age: casual.integer(0, 120),\n  }),\n}\n")),Object(s.b)("p",null,"In this example, we are using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/boo1ean/casual"}),"casual"),", a fake data generator for JavaScript, so that we can get a different result every time the field is called. You might want to use a collection of fake objects, or a generator that always uses a consistent seed, if you are planning to use the data for testing."),Object(s.b)("h3",{id:"mocking-custom-scalar-types"},"Mocking Custom Scalar Types"),Object(s.b)("p",null,"In order to Mock Custom Scalar Types, you need to declare them in your Schema. Let's look at an example for declaring DateTime Custom Scalar in our Schema:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const schema = `\n  scalar DateTime\n\n  // Your Schema definitions below.\n  ...\n\n  ...\n`;\n")),Object(s.b)("p",null,"This will make DateTime Custom Scalar available to be used in the Schema."),Object(s.b)("p",null,"The next step is to define a function that returns a value (fixed or random) for the Custom Scalar. Look at the following example, in which we're mocking a ",Object(s.b)("strong",{parentName:"p"},"fixed")," value for the DateTime Custom Scalar Type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  DateTime: () => '2011-01-05T17:08:49.000-0430'\n}\n")),Object(s.b)("p",null,"Similarly, if you want to mock a ",Object(s.b)("strong",{parentName:"p"},"random")," value for the Custom Scalar, you can use a library. We're using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/boo1ean/casual"}),"casual"),", as in the example above:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  DateTime: () => casual.date(format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ') // Output Example: 2011-11-11T11:43:31.000-0430\n}\n")),Object(s.b)("p",null,"The final step is to use the ",Object(s.b)("inlineCode",{parentName:"p"},"mocks")," object and ",Object(s.b)("inlineCode",{parentName:"p"},"schema")," to mock the server."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { addMocksToSchema, mockServer } from '@graphql-tools/mock';\n// Mock object.\nconst mocks = {\n  Int: () => 6,\n  Float: () => 22.1,\n  String: () => 'Hello',\n  DateTime: () => casual.date(format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ')\n};\nconst preserveResolvers = false;\n// Mock the server passing the schema, mocks object and preserverResolvers arguments.\nconst server = mockServer(schema, mocks, preserveResolvers);\n// Alternatively, you can call addMocksToSchema with the same arguments.\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks,\n  preserveResolvers,\n});\n")),Object(s.b)("p",null,"Now, when you make a Query which response contains the DateTime Scalar Type, the DateTime function will return a value for it."),Object(s.b)("h3",{id:"using-lists-in-mocks"},"Using lists in mocks"),Object(s.b)("p",null,"To define a mock for a list, simply return an empty array of the desired length as mock value for the field:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Person: () => ({\n    // a list of length between 2 and 6\n    friends: [...new Array(casual.integer(2, 6))],\n    // a list of three lists of two items: [[1, 1], [2, 2], [3, 3]]\n    listOfLists: () => [...new Array(3)].map((i) => [...new Array(2)]),\n  }),\n}\n")),Object(s.b)("h4",{id:"abstract-types"},"Abstract types"),Object(s.b)("p",null,"If you'd like to provide a mock for an ",Object(s.b)("inlineCode",{parentName:"p"},"Union")," or ",Object(s.b)("inlineCode",{parentName:"p"},"Interface")," type, you need to provide the type with an extra ",Object(s.b)("inlineCode",{parentName:"p"},"__typename"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const typeDefs = `\n  ...\n  union Result = User | Book\n`;\nconst mocks = {\n  Result: () => ({\n    __typename: 'User',\n    name: casual.name(),\n  })\n}\n")),Object(s.b)("h3",{id:"applying-mutations"},"Applying mutations"),Object(s.b)("p",null,"Use ",Object(s.b)("inlineCode",{parentName:"p"},"resolvers")," option of ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema")," to implement custom resolvers that interact with the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#mockstore"}),Object(s.b)("inlineCode",{parentName:"a"},"MockStore")),", especially to mutate field values."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const typeDefs = `\ntype User {\n  id: Id!\n  name: String!\n}\ntype Query {\n  me: User!\n}\ntype Mutation {\n  changeMyName(newName: String!): User!\n}\n`\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  resolvers: (store) => ({\n    Mutation: {\n      changeMyName: (_, { newName }) => {\n        // special singleton types `Query` and `Mutation` will use the key `ROOT`\n\n        // this will set the field value for the `User` entity referenced in field\n        // `me` of the singleton `Query`\n        store.set('Query', 'ROOT', 'me', { name: newName });\n\n        return store.get('Query', 'ROOT', 'me');\n      }\n    }\n  })\n});\n")),Object(s.b)("p",null,"As a result, any query that queries the field ",Object(s.b)("inlineCode",{parentName:"p"},"name")," of the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," referenced in ",Object(s.b)("inlineCode",{parentName:"p"},"me")," will get the updated value."),Object(s.b)("p",null,"Note the sugar signature of ",Object(s.b)("inlineCode",{parentName:"p"},"set"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.set('Query', 'ROOT', 'me', { name: newName });\n\n// is equivalent to:\nconst meRef = store.get('Query', 'ROOT', `me`) as Ref;\nstore.set(meRef, 'name', newName);\n")),Object(s.b)("h3",{id:"handling-byid-fields"},"Handling ",Object(s.b)("inlineCode",{parentName:"h3"},"*byId")," fields"),Object(s.b)("p",null,"By default, ",Object(s.b)("inlineCode",{parentName:"p"},"*byId")," (like ",Object(s.b)("inlineCode",{parentName:"p"},"userById(id: ID!)"),") field will return an entity that does not have the same ",Object(s.b)("inlineCode",{parentName:"p"},"id")," as the one queried. We can fix that:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const typeDefs = `\ntype User {\n  id: Id!\n  name: String!\n}\ntype Query {\n  userById(id: ID!): User!\n}\n`\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  store,\n  resolvers: (store) => ({\n    Query {\n      userById(_, { id }) => store.get('User', id),\n    }\n  })\n});\n")),Object(s.b)("p",null,"Note that, by default, the ",Object(s.b)("inlineCode",{parentName:"p"},"id")," or ",Object(s.b)("inlineCode",{parentName:"p"},"_id")," field will be used as storage key and the store will make sure the storage key and the field value are equal. You can change the key field using the option ",Object(s.b)("inlineCode",{parentName:"p"},"typePolicies"),"."),Object(s.b)("h3",{id:"mocking-a-pagination"},"Mocking a pagination"),Object(s.b)("p",null,"The idea is that the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#mockstore"}),Object(s.b)("inlineCode",{parentName:"a"},"MockStore"))," contains the full list, as field value, and that the resolver queries the store and slice the result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const typeDefs = `\ntype User {\n  id: Id!\n  name: String!\n  friends(offset: Int!, limit: Int!): [User!]!\n}\ntype Query {\n  me: User!\n}\n`\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  store,\n  resolvers: (store) => ({\n    User: {\n      // `addMocksToSchema` resolver will pass a `Ref` as `parent`\n      // it contains a key to the `User` we are dealing with\n      friends: (userRef, { offset, limit }) => {\n        // this will generate and store a list of `Ref`s to some `User`s\n        // next time we go thru this resolver (with same parent), the list\n        // will be the same\n        const fullList = store.get(userRef, 'friends') as Ref[];\n\n        // actually apply pagination slicing\n        return fullList.slice(offset, offset + limit)\n      }\n    }\n  })\n});\n")),Object(s.b)("h4",{id:"relay-style-pagination"},"Relay-style pagination"),Object(s.b)("p",null,"The principles stay the same than for basic pagination:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const typeDefs = `\ntype User {\n  id: Id!\n  name: String!\n  friends(offset: Int!, limit: Int!): FriendsConnection;\n}\ntype FriendsConnection {\n  totalCount: Int!\n  edges: [FriendConnectionEdge!]!\n}\ntype FriendsConnectionEdge {\n  node: User!\n}\ntype Query {\n  me: User!\n}\n`\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  store,\n  resolvers: (store) => ({\n    User: {\n      friends: (userRef, { offset, limit }) => {\n\n        const connectionRef = store.get(userRef, 'friends', 'edges');\n\n        return {\n          totalCount: edgesFullList.length,\n          edges: edgesFullList.slice(offset, offset + limit)\n      }\n    }\n  })\n});\n")),Object(s.b)("h2",{id:"mocking-a-schema-using-introspection"},"Mocking a schema using introspection"),Object(s.b)("p",null,"The GraphQL specification allows clients to introspect the schema with a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/graphql/#sec-Introspection"}),"special set of types and fields")," that every schema must include. The results of a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js"}),"standard introspection query")," can be used to generate an instance of GraphQLSchema which can be mocked as explained above."),Object(s.b)("p",null,"This helps when you need to mock a schema defined in a language other than JS, for example Go, Ruby, or Python."),Object(s.b)("p",null,"To convert an ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/utilities/getIntrospectionQuery.js"}),"introspection query")," result to a ",Object(s.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, you can use the ",Object(s.b)("inlineCode",{parentName:"p"},"buildClientSchema")," utility from the ",Object(s.b)("inlineCode",{parentName:"p"},"graphql")," package."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { buildClientSchema } from 'graphql';\nimport * as introspectionResult from 'schema.json';\n\nconst schema = buildClientSchema(introspectionResult);\n\nconst schemaWithMocks = addMocksToSchema({schema});\n")),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("h3",{id:"addmockstoschema"},"addMocksToSchema"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { addMocksToSchema } from '@graphql-tools/mock';\n\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks: {},\n  preserveResolvers: false,\n});\n")),Object(s.b)("p",null,"Given an instance of GraphQLSchema and a mock object, ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema")," returns a new schema that can return mock data for any valid query that is sent to the server. If ",Object(s.b)("inlineCode",{parentName:"p"},"mocks")," is not passed, the defaults will be used for each of the scalar types. If ",Object(s.b)("inlineCode",{parentName:"p"},"preserveResolvers")," is set to ",Object(s.b)("inlineCode",{parentName:"p"},"true"),", existing resolvers will not be overwritten to provide mock data. This can be used to mock some parts of the server and not others."),Object(s.b)("h3",{id:"mockserver"},"mockServer"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { mockServer } from '@graphql-tools/mock';\n\n// This can be an SDL schema string (eg the result of `buildClientSchema` above)\n// or a GraphQLSchema object (eg the result of `buildSchema` from `graphql`)\nconst schema = `...`\n\n// Same mocks object that `addMocksToSchema` takes above\nconst mocks = {}\npreserveResolvers = false\n\nconst server = mockServer(schemaString, mocks, preserveResolvers);\n\nconst query = `{ __typename }`\nconst variables = {}\n\nserver.query(query, variables)\n  .then(response => {\n    console.log(response)\n  })\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"mockServer")," is just a convenience wrapper on top of ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema"),". It adds your mock resolvers to your schema and returns a client that will correctly execute\nyour query with variables. ",Object(s.b)("strong",{parentName:"p"},"Note"),": when executing queries from the returned server,\n",Object(s.b)("inlineCode",{parentName:"p"},"context")," and ",Object(s.b)("inlineCode",{parentName:"p"},"root")," will both equal ",Object(s.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(s.b)("h3",{id:"mockstore"},"MockStore"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"MockStore")," is holding the generated mocks and can be used to access, generate or alter mocked values."),Object(s.b)("p",null,"You can access the ",Object(s.b)("inlineCode",{parentName:"p"},"MockStore")," either as argument of ",Object(s.b)("inlineCode",{parentName:"p"},"resolvers")," option of ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const schemaWithMocks = addMocksToSchema({\n  schema,\n  resolvers: (store) => {\n    // store is your `MockStore`\n    return {\n      Query: {\n        //... your custom resolvers\n      }\n    }\n  }\n  });\n")),Object(s.b)("p",null,"or by using ",Object(s.b)("inlineCode",{parentName:"p"},"createMockStore")," (and use the store in ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema"),"):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const store = createMockStore({ schema });\nconst schemaWithMocks = addMocksToSchema({ schema, store });\n")),Object(s.b)("p",null,"The content is accessible and modifiable via the methods ",Object(s.b)("inlineCode",{parentName:"p"},"get")," and ",Object(s.b)("inlineCode",{parentName:"p"},"set")," of the ",Object(s.b)("inlineCode",{parentName:"p"},"MockStore"),". These methods have several signatures (see ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts"}),"their typing"),")\nbut here are some examples:"),Object(s.b)("h4",{id:"get"},"get"),Object(s.b)("p",null,"Get a field value from the store for the given type, store key and field name. If the the value for this field is not set, a value will be generated according to field return type and mock functions:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('User', 'abc-737dh-djdjd', 'name')\n> \"Hello World\"\n")),Object(s.b)("p",null,"If the field is the key field of this type, the store key itself is returned. By default, ",Object(s.b)("inlineCode",{parentName:"p"},"id")," and ",Object(s.b)("inlineCode",{parentName:"p"},"_id")," fields are considered as key fields but it can be customized with option ",Object(s.b)("inlineCode",{parentName:"p"},"typePolicies"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('User', 'abc-737dh-djdjd', 'id')\n> \"abc-737dh-djdjd\"\n")),Object(s.b)("p",null,"If the field's output type is a ",Object(s.b)("inlineCode",{parentName:"p"},"ObjectType")," (or list of ",Object(s.b)("inlineCode",{parentName:"p"},"ObjectType"),"), it will return a ",Object(s.b)("inlineCode",{parentName:"p"},"Ref")," (or array of ",Object(s.b)("inlineCode",{parentName:"p"},"Ref"),"), ie a reference to an entity in the store."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('User', 'abc-737dh-djdjd', 'organization')\n> { $ref: { key: 'acme', typeName: 'Organization' } }\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Ref")," can then be used, for example to get a field value given of a ",Object(s.b)("inlineCode",{parentName:"p"},"Ref"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const organizationRef = { $ref: { key: 'acme', typeName: 'Organization' } }\nstore.get(organizationRef, 'name')\n> `Acme Group`\n")),Object(s.b)("p",null,"As a shortcut, you can traverse the graph quickly with an array of field names (nested get):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('User', 'abc-737dh-djdjd', ['organization', 'name'])\n> `Acme Group`\n")),Object(s.b)("p",null,"You can generate a entity reference ",Object(s.b)("inlineCode",{parentName:"p"},"Ref")," with:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('User', 'abc-737dh-djdjd')\n> { $ref: { key: 'abc-737dh-djdjd', typeName: 'User' } }\n")),Object(s.b)("p",null,"Root types (",Object(s.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Mutation"),"), which necessarily have only one entity, will use the special store key ",Object(s.b)("inlineCode",{parentName:"p"},"ROOT")," to reference this only entity:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('Query', 'ROOT', 'viewer');\n> { $ref: { key: 'abc-737dh-djdjd', typeName: 'User' } }\n")),Object(s.b)("h4",{id:"set"},"set"),Object(s.b)("p",null,"Set a field value in the store for the given type, store key and field name:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.set('User', '1', 'name', 'Alexandre')\n\nstore.get('User', '1', 'name')\n> \"Alexandre\"\n")),Object(s.b)("p",null,"If the field's output type is a ",Object(s.b)("inlineCode",{parentName:"p"},"ObjectType")," (or list of ",Object(s.b)("inlineCode",{parentName:"p"},"ObjectType"),"), you can set a ",Object(s.b)("inlineCode",{parentName:"p"},"Ref")," (or array of ",Object(s.b)("inlineCode",{parentName:"p"},"Ref"),"):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.set('User', '1', 'organization', store.get('Organization', 'acme'))\n")),Object(s.b)("p",null,"You can use a ",Object(s.b)("inlineCode",{parentName:"p"},"Ref")," to set field name:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const organizationRef = { $ref: { key: 'acme', typeName: 'Organization' } }\nstore.set(organizationRef, 'name', 'Acme Group')\n")),Object(s.b)("p",null,"Set multiple field values at once:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.set('User', '1', { name: 'Alexandre', age: 31 })\n")),Object(s.b)("p",null,"Set a field value via graph traversal (nested set):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.get('Query', 'ROOT', {\n  viewer: {\n    name: 'Alexandre',\n    friends: [\n      { name: 'Emily' },\n      { name: 'Caroline' }\n    ]\n  },\n});\n")),Object(s.b)("h2",{id:"migration-from-v7-and-below"},"Migration from V7 and below"),Object(s.b)("h3",{id:"breaking-change-mock-functions-signature"},"Breaking change: Mock functions signature"),Object(s.b)("p",null,"Mock functions does not receive resolvers' source, arguments and context anymore. Use ",Object(s.b)("inlineCode",{parentName:"p"},"resolvers")," option of ",Object(s.b)("inlineCode",{parentName:"p"},"addMocksToSchema"),'\nto define "true" resolvers that can intract with ',Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#mockstore"}),Object(s.b)("inlineCode",{parentName:"a"},"MockStore")),"."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Previously:\nconst mocks = {\n  Person: () => ({\n    paginatedFriends: (root, { numPages }) => new MockList(numPages * PAGE_SIZE),\n  }),\n}\nconst schemaWithMocks = addMocksToSchema({ schema, mocks });\n\n// Now:\nconst resolvers = (store) => ({\n  Person: {\n    paginatedFriends: (root, { numPages }) =>\n      store.get(root, 'paginatedFriends').slice(numPages * PAGE_SIZE, (numPages + 1) * PAGE_SIZE),\n  }\n});\nconst schemaWithMocks = addMocksToSchema({ schema, resolvers });\n")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Read more about mocking pagination ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"#mocking-a-pagination"}),"here"))),Object(s.b)("p",null,"Mock functions can't return a ",Object(s.b)("inlineCode",{parentName:"p"},"Promise")," anymore: it has to be a plain value. You can also use resolvers to work around this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"cont getName = () => Promise.resolve('Vlad');\n// Previously\nconst mocks = {\n  Person: () => ({\n    name: () => getName(),\n  }),\n}\nconst schemaWithMocks = addMocksToSchema({ schema, mocks });\n\n// Now:\nconst resolvers = (store) => ({\n  Person: {\n    name: async (root) => {\n      const name = name = await getName();\n      return store.get({\n        typeName: root.$ref.typeName,\n        key: root.$ref.key,\n        fieldName: 'name',\n        defaultValue: name,\n      })\n    }\n  }\n});\nconst schemaWithMocks = addMocksToSchema({ schema, resolvers });\n")),Object(s.b)("h3",{id:"breaking-change-preserved-resolvers-source-argument-and-abstract-types-mocking"},"Breaking change: preserved resolvers source argument and abstract types mocking"),Object(s.b)("p",null,"When preserved, resolvers will not receive plain mock data anymore as source but rather a ",Object(s.b)("inlineCode",{parentName:"p"},"Ref")," that can be used to query the store:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Previously:\nconst resolvers = {\n  User: {\n    name: (data) => {\n      return data.name.toLowerCase();\n    }\n  }\n}\nconst schema = makeExecutableSchema({\n  typeDefs,\n  resolvers\n})\nconst schemaWithMocks = addMocksToSchema({ schema, preserveResolvers: true })\n\n// Now:\nlet schema = makeExecutableSchema({ typeDefs })\nconst store = createMockStore({ schema });\n\nconst resolvers = {\n  User: {\n    name: (source) => {\n      // `source` is an entity `Ref`\n      return store.get(source, 'name').toLowerCase();\n    }\n  }\n}\nschema = addResolversToSchema(schema, resolvers)\n\nconst schemaWithMocks = addMocksToSchema({ schema, preserveResolvers: true })\n")),Object(s.b)("p",null,"If you used ",Object(s.b)("inlineCode",{parentName:"p"},"__resolveType")," resolver for mocking interfaces and unions, rather use ",Object(s.b)("inlineCode",{parentName:"p"},"__typename")," directly in mocks. See ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#abstract-types"}),Object(s.b)("em",{parentName:"a"},"Abstract types")),"."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = `\ntype Query {\n  fetchMore(listType: String!, amount: Int!, offset: Int!): List\n}\n\ntype Distributor {\n  id: Int\n  name: String\n}\n\ntype Product {\n  id: Int\n  name: String\n}\n\ninterface List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n}\n\ntype DistributorList implements List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n  items: [Distributor]\n}\n\ntype ProductList implements List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n  items: [Product]\n}\n`\n\n// Previously:\nconst mocks = {\n  List: () => ({\n    typename: 'ProductList',\n  })\n}\n\nconst resolvers = {\n  List: {\n    __resolveType(data) {\n      return data.typename\n    }\n  }\n}\n\nconst schema = makeExecutableSchema({\n  typeDefs,\n  resolvers\n})\n\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks,\n  preserveResolvers: true\n})\n\n// Now:\nconst mocks = {\n  List: () => ({\n    __typename: 'ProductList',\n  })\n}\n\nconst schema = makeExecutableSchema({ typeDefs });\n\nconst schemaWithMocks = addMocksToSchema({ schema, mocks })\n")),Object(s.b)("h3",{id:"deprecated-mocklist"},"Deprecated: MockList"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"MockList")," is deprecated, use plain arrays instead. See ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#using-lists-in-mocks"}),Object(s.b)("em",{parentName:"a"},"Using lists in mocks")),"."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Previously:\nconst mocks = {\n  Person: () => ({\n    friends: () => new MockList([2,6]),\n    listOfLists: () => new MockList(3, () => new MockList(2)),\n  }),\n}\n\n// Now:\nvar casual = require('casual');\nconst mocks = {\n  Person: () => ({\n    friends: [...new Array(casual.integer(2, 6))],\n    listOfLists: () => [...new Array(3)].map((i) => [...new Array(2)]),\n  }),\n}\n")))}m.isMDXComponent=!0},258:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),m=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=m(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=m(t),d=a,u=b["".concat(r,".").concat(d)]||b[d]||p[d]||s;return t?o.a.createElement(u,c(c({ref:n},l),{},{components:t})):o.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<s;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);