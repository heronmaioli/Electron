import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom left, #0f4c75, #3282b8);
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
`

export const TitleContainer = styled.div`
  padding: 20px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  grid-column: 1 / 2;
  grid-row: 1;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3 / span 2;
  grid-row: 1 / 1;
  justify-content: flex-start;
  padding-top: 60px;

  button {
    background-color: #1b262c;
    color: white;
    width: 100%;
    margin: 10px 0 10px 0;
    padding: 10px;
    text-align: center;
    height: 45px;
    border: 0px;
    border-radius: 2px;
    font-size: 16px;
    transition: 0.3s all;
    &:hover {
      color: #1b262c;
      background-color: #bbe1fa;
      cursor: pointer;
    }
  }
`
export const CodContainer = styled.div`
  width: 790px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 30px;
  grid-column: 1 / 2;
  grid-row: 2;

  button {
    background-color: #1b262c;
    color: white;
    width: 80px;
    height: 48px;
    border: 1.5px solid rgba(50, 50, 50, 0.7);
    border-left: 0px;
    border-radius: 0 50% 50% 0;
    transition: 0.3s all;

    &:hover {
      color: #1b262c;
      background-color: #bbe1fa;
      cursor: pointer;
    }
  }
`

export const OrderListContainer = styled.div`
  display: flex;
  grid-column: 1 / 5;
  grid-row: 3;
  width: 100%;
  height: 700px;
  background-color: white;
`
