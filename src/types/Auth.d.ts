interface AuthContext {
  user: null | User
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  disconnect: () => void
}
