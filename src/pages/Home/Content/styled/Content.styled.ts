import styled from 'styled-components'

export const StyledContent = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
  margin-top: 130px;
  justify-content: space-between;
`

export const Title = styled.div`
  width: 480px;
  margin-top: 60px;
  h1 {
    font-size: 60px;
    color: #1877f2;
  }
  p {
    font-size: 28px;
    margin-top: 5px;
  }
`

export const Connect = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  text-align: center;
  gap: 20px;
  > p {
    padding: 0 10px;
    font-size: 14px;
  }
`

export const Form = styled.form`
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  input {
    width: 100%;
    font-size: 16px;
    padding: 16px 15px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #dddfe2;
    margin-bottom: 10px;
  }
  button:nth-of-type(1) {
    width: 100%;
    font-size: 20px;
    padding: 12px 0;
    border-radius: 5px;
    border: none;
    background-color: #1877f2;
    color: white;
    font-weight: bold;
    margin-top: 10px;
  }
  a {
    font-size: 14px;
    color: #1877f2;
    text-decoration: none;
    margin: 20px 0;
  }
  .separator {
    border-bottom: 1px solid #dadde1;
    margin: 0px 0 10px 0;
    width: 100%;
  }
  button:nth-of-type(2) {
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 5px;
    border: none;
    background-color: #42b72a;
    color: white;
    font-weight: bold;
    margin-top: 10px;
  }
`
