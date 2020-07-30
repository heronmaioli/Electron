import React, { useContext } from 'react'
import Context from '../../Context/prodCont'
import { Container } from './styles'

const Page = ['LOGIN', 'HOME', 'BUSCAR', 'CADASTRAR', 'OPÇÕES']

export default function CommonTitle () {
  const { page } = useContext(Context)

  return <Container>{Page[page]}</Container>
}
