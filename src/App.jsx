import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { history } from './helpers'
import HomePage from './screens/Home/HomePage'
import MapPage from './screens/Map/MapPage'

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} component={HomePage} />
      <Route path='/map' exact={true} component={MapPage} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
