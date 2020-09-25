import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/HomePage'
import MapPage from './screens/Map/MapPage'

const App = () => (
  <Switch>
    <Route path='/' component={Home} />
    <Route path='/map' component={MapPage} />
  </Switch>
)

export default App
