import { createContext } from 'react'

const DEFAULT_VALUE = {
  products: [],
  setProducts: () => null,
  page: Number,
  setPage: () => null
}

export default createContext(DEFAULT_VALUE)
