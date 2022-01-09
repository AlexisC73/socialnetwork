import styled from 'styled-components'

export const AccountStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 50px;
  flex-align: flex-end;
  svg {
    color: white;
    width: 1.3em;
    cursor: pointer;
    :hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  > ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
  }
`

interface SettingProps {
  bg: string
}

export const SettingStyled = styled.div<SettingProps>`
  background: url(${(props) => props.bg});
  margin: auto 0;
  margin-left: 30px;
  background-size: 100%;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: relative;
`
