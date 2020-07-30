import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  text {
    font-size: 12px;
  }
`
export const OrderTitle = styled.div`
  display: grid;
  width: 100%;

  div {
    grid-row: 1;
    width: 100%;
    border: 2px solid rgba(50, 50, 50, 1);
    border-right: 0px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child {
      border: 2px solid rgba(50, 50, 50, 1);
    }
  }
`

export const ProductsList = styled.div`
  display: grid;
  width: 100%;

  div {
    grid-row: 1;
    width: 100%;
    border: 2px solid rgba(50, 50, 50, 1);
    border-right: 0px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0px;
    &:last-child {
      border: 2px solid rgba(50, 50, 50, 1);
      border-top: 0px;
    }
  }
`
