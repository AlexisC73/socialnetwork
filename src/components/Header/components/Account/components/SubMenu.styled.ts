import styled from 'styled-components'

export const SubMenuStyled = styled.div`
  position: absolute;
  top: 50px;
  right: -20px;
  width: 200px;
  background-color: white;
  border-radius: 5px;
  ::after {
    width: 0;
    height: 0;
    position: absolute;
    content: ' ';
    top: -8px;
    right: 33px;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-bottom: 8px solid white;
  }

  ul {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    list-style: none;
    li {
      font-size: 14px;
      cursor: pointer;
    }
  }
`
