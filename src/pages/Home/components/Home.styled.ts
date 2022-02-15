import styled from 'styled-components'

export const ColumnStyled = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  :nth-of-type(2) {
    flex: 1;
  }
`

export const ContentStyled = styled.div`
  display: flex;
  flex: 1;
`

export const InputWithImageContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: green;
    color: white;
    font-size: 14px;
    border-color: transparent;
    border-radius: 5px;
    padding: 5px 15px;
    font-weight: bold;
    cursor: pointer;
  }

  .input-with-image {
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    svg {
      width: 25px;
      margin-right: 3px;
    }
    input {
      display: none;
    }
  }
`

export const NewPostFormStyled = styled.form`
  display: flex;
  max-width: 700px;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 100%;

  .separator {
    height: 2px;
    background-color: #e5e5e5;
    width: 100%;
    padding: 0 10%;
  }

  > div {
    display: flex;
    width: 100%;
    padding: 10px 0;
    img {
      width: 50px;
      border-radius: 50%;
      max-height: 50px;
    }
    textarea {
      flex: 1;
      border-color: transparent;
      outline: none;
      padding: 0 10px;
      margin-top: 15px;
      resize: none;
    }
  }
`
