import { useState } from 'react'
import BellIcon from '../../../icons/Bell'
import MessageIcon from '../../../icons/Message'
import UserIcon from '../../../icons/User'
import { AccountStyled, SettingStyled } from './Account.styled'
import SubMenu from './components/SubMenu'

export default function Account() {
  const [displayOptions, setDisplayOptions] = useState(false)
  return (
    <AccountStyled>
      <ul>
        <li>
          <BellIcon />
        </li>
        <li>
          <UserIcon />
        </li>
        <li>
          <MessageIcon />
        </li>
      </ul>
      <SettingStyled
        onClick={() => {
          setDisplayOptions(!displayOptions)
        }}
        bg='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'
      >
        {displayOptions && <SubMenu displayOptions={setDisplayOptions} />}
      </SettingStyled>
    </AccountStyled>
  )
}
