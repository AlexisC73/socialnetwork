import { SetStateAction, useContext } from 'react'
import { SubMenuStyled } from './SubMenu.styled'
import AuthCtx from '../../../../../services/auth/Auth'

interface subMenuProps {
  displayOptions: React.Dispatch<SetStateAction<boolean>>
}

export default function SubMenu({ displayOptions }: subMenuProps) {
  const auth = useContext(AuthCtx)
  return (
    <SubMenuStyled
      onMouseLeave={() => {
        displayOptions(false)
      }}
      className='account_options'
    >
      <ul>
        <li>Account</li>
        <li
          onClick={() => {
            auth.disconnect()
          }}
        >
          Disconnect
        </li>
      </ul>
    </SubMenuStyled>
  )
}
