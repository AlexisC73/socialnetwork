import { app } from '../../services/app/myApp'
import { HeaderStyled } from './Header.styled'
import SearchBar from './components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Account from './components/Account/Account'

export default function Header() {
  return (
    <HeaderStyled bg='#1877f2' height='70px'>
      <Link to='/'>{app.name}</Link>
      <SearchBar />
      <div className='nav'>
        <Link to={'#'}>Homepage</Link>
        <Link to={'#'}>Timeline</Link>
      </div>
      <Account />
    </HeaderStyled>
  )
}
