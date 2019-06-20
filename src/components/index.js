import React from 'react';
import Login from './home/login/login' 
import Home from './home/home' 

import { MemoryRouter, Switch, Route } from 'react-router-dom';
 

const App = () => (
  <MemoryRouter>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
    </Switch>
  </MemoryRouter>
);

export default App;