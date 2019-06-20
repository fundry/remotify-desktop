import React from 'react'
import Login from './login/login'
import Home from './home/home'
import Settings from './setting/settings'

import { MemoryRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <MemoryRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/settings' component={Settings} />
    </Switch>
  </MemoryRouter>
)

export default App
