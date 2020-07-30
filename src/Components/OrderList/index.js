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
    </Container>
  )
}
