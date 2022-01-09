import SearchIcon from '../../../icons/SearchIcon'
import { SearchBarStyled } from './SearchBar.styled'

export default function SearchBar() {
  return (
    <SearchBarStyled>
      <SearchIcon />
      <input
        name='search'
        id='search'
        type='text'
        placeholder='Recherchez un ami, des posts ou des vidéos'
      />
    </SearchBarStyled>
  )
}
