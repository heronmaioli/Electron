import React from 'react'

import GlobalStyle from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import ProdProvider from './Context/prodProv'

import MainRoutes from './routes'

function App () {
  return (
    <Router>
      <ProdProvider>
        <GlobalStyle />
        <MainRoutes />
      </ProdProvider>
    </Router>
  )
}

export default App
