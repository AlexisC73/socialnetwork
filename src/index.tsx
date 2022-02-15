import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloLink,
} from '@apollo/client'

import { setContext } from 'apollo-link-context'

import { createUploadLink } from 'apollo-upload-client'

const typeDefs = gql`
  extend type ConnectInput {
    email: String
    password: String
  }
`

const link: any = createUploadLink({
  uri: 'http://localhost:5500/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them

  // How do I get my react state here?

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  link: authLink.concat(link) as unknown as ApolloLink,
  cache: new InMemoryCache(),
  typeDefs,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
