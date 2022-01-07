import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin/Signin'
import { createGlobalStyle } from 'styled-components'
import Auth from './services/auth/Auth'
import { useState, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import jwt_decode from 'jwt-decode'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home/Home'
import NoAuthRoute from './components/NoAuthRoute'

const DevStyle = createGlobalStyle`
body {
  background-color: #E5E5E5;
}
`

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const VERIFY_TOKEN = gql`
    query VerifyToken($token: String!) {
      verifyToken(token: $token)
    }
  `
  const [verifyToken, { loading }] = useLazyQuery(VERIFY_TOKEN, {
    onError: () => {
      disconnect()
    },
    onCompleted: () => {
      if (token) {
        const user: User = jwt_decode(token)
        setUser(user)
      }
    },
  })

  useEffect(() => {
    if (localStorage?.token) setToken(localStorage.token)
    else token && setToken(null)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!token) setUser(null)
    else verifyToken({ variables: { token } })
  }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

  const disconnect = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const defaultAuth = {
    user,
    setUser,
    token,
    setToken,
    disconnect,
  }

  if (loading) return <p>Loading</p>
  return (
    <Auth.Provider value={defaultAuth}>
      <BrowserRouter>
        <DevStyle />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/signin'
            element={
              <NoAuthRoute>
                <Signin />
              </NoAuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  )
}

export default App
