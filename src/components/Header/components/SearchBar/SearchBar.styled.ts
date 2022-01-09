import styled from 'styled-components'

export const SearchBarStyled = styled.div`
  flex: 1;
  max-width: 600px;
  height: 35px;
  background-color: white;
  margin: auto 0;
  margin-left: 100px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 18px;
  gap: 15px;

  svg {
    color: rgba(0, 0, 0, 0.6);
    width: 1.5em;
  }

  input {
    font-size: 14px;
    color: black;
    outline: none;
    border-color: transparent;
    flex: 1;
  }
`
