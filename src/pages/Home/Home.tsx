import AuthContext from '../../services/auth/Auth'
import { useContext } from 'react'
import Header from '../../components/Header/Header'

export default function Test() {
  const auth = useContext(AuthContext)
  return (
    <>
      <Header />
      <div>
        {/* A supprimer */}
        {auth.user?.uid}
        <button
          onClick={() => {
            auth.disconnect()
          }}
        >
          Disconnect
        </button>
      </div>
    </>
  )
}
