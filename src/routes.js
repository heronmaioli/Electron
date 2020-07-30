import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
import ProductsList from './Pages/ProductsList'

export default function MainRoutes () {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/find' component={ProductsList} />
    </Switch>
  )
}
