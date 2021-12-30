import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: white;
  padding: 30px 0 70px 0;
  .separator {
    border-bottom: 1px solid #dddfe2;
    font-size: 1px;
    height: 8px;
    margin-bottom: 8px;
  }
  .copyright {
    font-size: 11px;
    color: #737373;
    margin-top: 20px;
  }
`

export const StyledLanguageList = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0 10px 0 0;
    font-size: 12px;
    color: #8a8d91;
    cursor: pointer;
  }

  .add {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    background-color: f5f6f7;
    font-size: 15px;
    font-weight: bold;
    color: #8a8d91;
    border: 1px solid #ccd0d5;
    border-radius: 2px;
    cursor: pointer;
  }
`

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;

  li {
    padding: 0 20px 0 0;
    font-size: 12px;
    color: #8a8d91;
    line-height: 18px;
    cursor: pointer;
  }
`
