import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AuthContext from '../services/auth/Auth'

interface ProtectedRouteProps {
  children: JSX.Element
}

const Protected = ({ children }: ProtectedRouteProps) => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/signin')
    }
  }, [auth.user]) // eslint-disable-line react-hooks/exhaustive-deps
  return children
}

export default Protected
