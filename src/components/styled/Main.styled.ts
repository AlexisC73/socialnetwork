import styled from 'styled-components'

interface MainProps {
  bg: string
}

export const Main = styled.main<MainProps>`
  flex: 1;
  background-color: ${(props) => props.bg};
  display: flex;
  flex-direction: column;
`
