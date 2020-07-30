import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom left, #0f4c75, #3282b8);
  align-items: center;
  justify-content: center;
`

export const LoginBox = styled.div.attrs()`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  border: 1px solid white;
  justify-content: end;
  align-items: center;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 10px -10px 40px -5px rgba(30, 30, 30, 1);

  h1 {
    font-size: 40px;
    color: white;
    padding: 25px;
    width: auto;
    height: 100px;
    text-align: center;
  }
  input {
    margin: 10px;
    padding: 10px;
    border-radius: 3px;
    border: 0px;
    width: 300px;
    height: 45px;
    text-align: initial;
  }
  button {
    width: 250px;
    height: 40px;
    padding: 5px;
    border: 0px;
    border-radius: 3px;
    margin: 10px;
    /* font-weight: bold; */
    font-size: 16px;
    color: white;
    background-color: #1b262c;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #bbe1fa;
      color: #1b262c;
    }
  }
  a {
    padding: 5px;
    color: white;
    transition: all 0.2s;
    &:hover {
      font-size: 18px;
    }
  }
  div {
    font-size: 11px;
    padding: 25px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.2;
  }
`

export const ErrMsg = styled.h5`
  color: red;
`
