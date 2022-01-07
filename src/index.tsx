import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const typeDefs = gql`
  extend type ConnectInput {
    email: String
    password: String
  }
`

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
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
