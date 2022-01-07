import { createContext } from 'react'

const Auth = createContext<AuthContext>({
  user: null as User | null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  disconnect: () => {},
})

export default Auth
