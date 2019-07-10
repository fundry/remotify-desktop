import React, { Component } from 'react';
import styled from 'styled-components';
import { Stream } from 'react-streams';
import { of, pipe } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

import { Auth } from '../state/models/';

//   ===== seperate  components =====
import Login from './login/login';
import Home from './home/home';
import Settings from './setting/settings';
import Perfomance from '../screens/home/user/performance/performance';
import Files from '../screens/files/files';
//=======================

import { Route, NavLink } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createHashHistory } from 'history';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;
const auth = Auth.create();

// ====== styles=====

const Sidebar = styled.div`
  width: 150px;
  position: fixed;
  background: #eee;
  height: 100vh;
  padding: 2em 0 2em 1em;
  box-sizing: border-box;
  overflow: auto;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2em;
  color: #000;
`;

const Components = styled.div`margin-left: 150px;`;

const Link = styled.li`
  display: block;
  padding: .5em;
  color: black;
  text-decoration: none;
`;

//  ==============

const history = createHashHistory({});

class NavBar extends Component {
  componentDidMount() {
    {
      auth.is_loggedIn
        ? ipc.send('authenticate-user')
        : console.log('authenticateds');
    }
    console.log(auth.is_loggedIn);
  }

  render() {
    return (
      <Router history={history}>
        <Sidebar>
          <header> Remotify </header>

          <NavLinks>
            <Link>
              <NavLink to="/" exact={true}>
                Home
              </NavLink>
            </Link>
            <Link>
              <NavLink to="/perf">Perfomance</NavLink>{' '}
            </Link>
            <Link>
              <NavLink to="/files">Files</NavLink>{' '}
            </Link>
            <Link>
              <NavLink to="/settings">Settings</NavLink>
            </Link>
          </NavLinks>
        </Sidebar>

        <Components>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/perf">
              <Perfomance />
            </Route>

            <Route path="/files">
              <Files />
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Components>
      </Router>
    );
  }
}

const startWithAndDelay = (message, time) =>
  pipe(delay(time), startWith({ message }));

const message$ = of({ any: <NavBar /> });

const main = () => (
  <div>
    <Stream source={message$} pipe={startWithAndDelay('.', 1000)}>
      {({ any }) => <div>{any}</div>}
    </Stream>
  </div>
);

export default main;
