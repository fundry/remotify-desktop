import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router , Route } from 'react-router-dom'

// import Login from './components/home/login/login' 
// import Home from './components/home/home' 

import Index from './components/index'
 
// const Application = () => (
//   <Router>
//     <Route  path="/" component={Login} />
//     <Route  path="/home" component={Home} />
//   </Router>
// )

ReactDOM.render(<Index />, document.getElementById('root'))
