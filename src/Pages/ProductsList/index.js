import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import CommonTitle from '../../Components/CommonTitle'
import Context from '../../Context/prodCont'

// import { Container } from './styles';

export default function ProductsList () {
  const { products, setPage } = useContext(Context)
  const history = useHistory()

  const Back = () => {
    setPage(1)
    history.push('/home')
  }

  return (
    <div>
      <CommonTitle />
      <button onClick={() => Back()}>Voltar</button>
      {products.map(prod => (
        <div key={prod._id}>{prod.BARCODE}</div>
      ))}
    </div>
  )
}
