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

import { createUploadLink } from 'apollo-upload-client'

const typeDefs = gql`
  extend type ConnectInput {
    email: String
    password: String
  }
`

const link = createUploadLink({
  uri: 'http://localhost:5500/graphql',
})

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  link: link as unknown as ApolloLink,
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
