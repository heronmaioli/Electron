import React, { useState, useEffect } from 'react'
import api from '../Services/Api'
import Context from './prodCont'

const ProdProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function fetchdata () {
      const response = await api.get('/')
      setProducts(response.data)
    }
    fetchdata()
  }, [])

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        page,
        setPage
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ProdProvider
