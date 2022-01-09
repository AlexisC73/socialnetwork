import AuthContext from '../../services/auth/Auth'
import { useContext } from 'react'
import Header from '../../components/Header/Header'

export default function Test() {
  const auth = useContext(AuthContext)
  return (
    <>
      <Header />
      <div>
        Welcome user:{' '}
        <span style={{ color: 'darkorange' }}>{auth.user?.uid}</span>
      </div>
    </>
  )
}
