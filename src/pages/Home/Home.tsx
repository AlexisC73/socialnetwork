import AuthContext from '../../services/auth/Auth'
import { useContext } from 'react'

export default function Test() {
  const auth = useContext(AuthContext)
  return (
    <div>
      {auth.user?.uid}
      <button
        onClick={() => {
          auth.disconnect()
        }}
      >
        Disconnect
      </button>
    </div>
  )
}
