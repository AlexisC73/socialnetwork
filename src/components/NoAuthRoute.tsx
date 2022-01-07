import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AuthContext from '../services/auth/Auth'

interface NoAuthRouteProps {
  children: JSX.Element
}

const NoAuthRoute = ({ children }: NoAuthRouteProps) => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.token) {
      navigate('/')
    }
  }, [auth.user]) // eslint-disable-line react-hooks/exhaustive-deps
  return children
}

export default NoAuthRoute
