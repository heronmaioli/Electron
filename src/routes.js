import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'

export default function MainRoutes () {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
    </Switch>
  )
}
