import styled from 'styled-components'

export const StyledBackground = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Signup = styled.div`
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  width: 450px;
  height: 550px;
  background-color: white;
  border-radius: 10px;

  .separator {
    height: 1px;
    width: 100%;
    background-color: grey;
  }

  h2 {
    padding: 0 10px;
    padding-top: 10px;
    font-size: 30px;
  }
  p {
    padding: 0 10px;
    font-size: 15px;
    color: rgb(100, 100, 100);
    padding-bottom: 10px;
  }
`
export const Line = styled.div`
  display: flex;
  gap: 10px;
`

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    width: 100%;
    font-size: 16px;
    padding: 10px;
    background-color: #f5f6f7;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
  }
`
