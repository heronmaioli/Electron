import React, { useContext } from 'react'
import Context from '../../Context/prodCont'
import { Container, Code } from './styles'

export default function SearchCode () {
  return (
    <div>
      <Container>
        <Code placeholder={'Código de barras'} />
      </Container>
    </div>
  )
}
