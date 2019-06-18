import React from 'react'
import { Login, Home } from './components/index'
import { Route, Router } from 'react-router-dom'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
      </Router>
    )
  }
}
