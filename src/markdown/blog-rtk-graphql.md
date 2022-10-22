---
slug: "/blog/rtk-query-graphql"
type: 'blog'
date: "2022-10-22"
title: "Using RTK Query with GraphQL"
description: ""
---


[Redux Toolkit](https://redux-toolkit.js.org/) and the included [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) are awesome. Not only are both packages incredibly well designed, easy to use and production-ready, but they also provide tons of documentation.

However, I had trouble finding code examples for certain GraphQL use-cases. In the end I pieced things together, so I decided to document my results here.

This uses `@reduxjs-toolkit: 1.8.1` and `@rtk-query/graphql-request-base-query: 2.2.0`. Consult the docs to see if this information is now outdated.

# Using graphqlRequestBaseQuery

If you want to use GraphQL the official documentation quickly points you to a custom build [graphqlBaseQuery](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#graphql-basequery). But `RTK Query` actually provides a more sophisticated GraphQL query: `graphqlRequestBaseQuery`. That one is used in [some of the sandbox code examples](https://redux-toolkit.js.org/rtk-query/usage/examples#react-with-graphql), too.

```ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://api.acme.com/graphql/',
  }),
  endpoints: () => ({})
});
```

If your api requires a token to access, you can pass it via the `prepareHeaders` param.

```ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://api.acme.com/graphql/',
    prepareHeaders: (headers, { getState }) => {
    // Retrieve token from redux store
      const token = getState().auth?.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      } else {
        // use refresh token or navigate to login
      }
      return headers
    },
  }),
  endpoints: () => ({})
});
```

I store that token in another api-splice (e.g. `auth-slice`). RTK Query gives you [an easy way to access other slices](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery) from with-in the `prepareHeaders` function.



# Dynamically changing the API url

A React Native app that I was working on required me to dynamically change between our production and staging API.

Luckily, RTK Query supports this use-case and even provides an example for a `fetch` based API. [The changes](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#constructing-a-dynamic-base-url-using-redux-state) are trivial. It's _almost_ plug and play to get it to work with GraphQL. TypeScript kept complaining because the types for `graphqlRequestBaseQuery` didn't match, so I ditched the typing.

```ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { ClientError } from 'graphql-request';

const dynamicGraphqlBaseQuery = async (args, api, extraOptions) => {
  const baseUrl = api.getState().config.env.url;
  const rawBaseQuery = graphqlRequestBaseQuery<Partial<ClientError>>({
    url: `${baseUrl}/graphql`,
    // can also drop prepareHeaders here
  });
  return rawBaseQuery(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: dynamicGraphqlBaseQuery,
  endpoints: () => ({})
});
```

Like with our token earlier, the necessary url is store in a `config-slice`. And just like with `prepareHeaders`, we can use the second parameter to access `getState` (and retrieve our redux state).

