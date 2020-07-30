import React, { useContext } from 'react'
import Context from '../../Context/prodCont'

import { Container, OrderTitle, ProductsList } from './styles'

export default function OrderList () {
  const { products } = useContext(Context)
  return (
    <Container>
      <OrderTitle>
        <div>
          <h3>CÓDIGO</h3>
        </div>
        <div>
          <h3>NOME</h3>
        </div>
        <div>
          <h3>MODELO</h3>
        </div>
        <div>
          <h3>MARCA</h3>
        </div>
        <div>
          <h3>QTD</h3>
        </div>
        <div>
          <h3>PREÇO</h3>
        </div>
      </OrderTitle>
      <ProductsList>
        <div>
          <h4>77777777777</h4>
        </div>
        <div>
          <h4>ANTENA CORTA PIPA</h4>
        </div>
        <div>
          <h4>BRILHANTE RETROVISOR</h4>
        </div>
        <div>
          <h4>MAGNETRON</h4>
        </div>
        <div>
          <h4>20</h4>
        </div>
        <div>
          <h4>R$ 24,90</h4>
        </div>
      </ProductsList>
    </Container>
  )
}
