import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import SearchCode from '../../Components/SearchCode'
import CommonTitle from '../../Components/CommonTitle'
import OrderList from '../../Components/OrderList'
import Context from '../../Context/prodCont'

import {
  Background,
  Container,
  TitleContainer,
  CodContainer,
  ButtonsContainer,
  OrderListContainer
} from './styles'

export default function Home () {
  const { setPage } = useContext(Context)
  const history = useHistory()

  const Find = () => {
    setPage(2)
    history.push('/find')
  }
  return (
    <Background>
      <Container>
        <TitleContainer>
          <CommonTitle />
        </TitleContainer>

        <ButtonsContainer>
          <button onClick={() => setPage(1)}>Opções</button>
          <button onClick={() => setPage(3)}>Cadastrar</button>
        </ButtonsContainer>

        <CodContainer>
          <SearchCode />
          <button onClick={() => Find()}>Buscar</button>
        </CodContainer>
        <OrderListContainer>
          <OrderList />
        </OrderListContainer>
      </Container>
    </Background>
  )
}
