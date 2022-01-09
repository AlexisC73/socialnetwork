import styled from 'styled-components'

interface HeaderProps {
  bg: string
  height: string
}

export const HeaderStyled = styled.header<HeaderProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  display: flex;
  > a {
    text-decoration: none;
    color: white;
    font-size: 30px;
    line-height: ${(props) => props.height};
    margin-left: 30px;
  }
  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px;
    a {
      text-decoration: none;
      color: white;
      padding: 0 8px;
      font-size: 14px;
    }
  }
`
