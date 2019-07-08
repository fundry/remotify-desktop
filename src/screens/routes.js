import React from 'react';
import Login from './login/login';
import Home from './home/home';
import Settings from './setting/settings';
import Perfomance from '../screens/home/user/performance/performance';
import Main from './main';
import Files from '../screens/files/files';

import { MemoryRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <MemoryRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/perf" component={Perfomance} />
      <Route path="/files" component={Files} />
    </Switch>
  </MemoryRouter>
);

export default App;
