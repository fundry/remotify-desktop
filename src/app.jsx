import React from 'react'
// import { Login, Home } from './components/index'
import { Route, Router, Switch } from 'react-router-dom'
// import Login from './components/home/login/login'

const Login = () => {
  return (
    <div>
      <p> Login here </p>{' '}
    </div>
  )
}


const App = () => {
  return (
    <Router history={Login}>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  )
}

export default Login
