import React, { Component } from 'react';
import styled from 'styled-components';
import { Stream } from 'react-streams';
import { of, pipe } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import {
  FiHome,
  FiMessageSquare,
  FiSettings,
  FiPackage,
  FiMusic,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';
import { GiTeamIdea } from 'react-icons/gi';
import { DiGoogleDrive } from 'react-icons/di';

import { Auth, Nav_State } from '../state/models/';

//   ===== seperate  components =====
import {
  Home,
  Files,
  Integrations,
  Message,
  Music,
  Setting,
  Team,
} from './index';

//=======================

import { Route, NavLink } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { observer } from 'mobx-react';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;

// MST here
const auth = Auth.create();
const nav = Nav_State.create({
  expanded: true,
  expandedwidth: '30px',
  collapsedwidth: '15px',
});

const collapsed = nav.collapsedwidth;
const expanded = nav.expandedwidth;

// ====== styles=====
const Sidebar = styled.div`
  position: fixed;
  background: #eee;
  height: 100vh;
  padding: 0.7em 0 2em 1em;
  box-sizing: border-box;
  overflow: auto;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  color: #000;
`;

const Components = styled.div`margin-left: 150px;`;

const Link = styled.li`
  display: block;
  padding: 0.8em;
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
  }

  render() {
    const expand = () => {
      nav.expand();
    };

    const collapse = () => {
      nav.collapse();
    };

    return (
      <Router history={history}>
        <Sidebar style={{ padding: nav.expanded ? collapsed : expanded }}>
          <div>
            {nav.expanded ? (
              <FiChevronsRight
                style={{ fontSize: '1.5em' }}
                onClick={() => {
                  expand();
                }}
              />
            ) : (
              <FiChevronsLeft
                style={{ fontSize: '1.5em' }}
                onClick={() => {
                  collapse();
                }}
              />
            )}
          </div>

          {nav.expanded ? (
            <NavLinks>
              <Link>
                <NavLink to="/" exact={true}>
                  <FiHome style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <br />

              <Link>
                <NavLink to="/team">
                  <GiTeamIdea style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/message">
                  <FiMessageSquare style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/integration">
                  <FiPackage style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/files">
                  <DiGoogleDrive style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/music">
                  <FiMusic style={{ fontSize: '2em' }} />
                </NavLink>
              </Link>

              <br />
              <br />
              <br />
              <br />

              <div style={{ position: 'bottom' }}>
                <Link>
                  <NavLink to="/settings">
                    <FiSettings style={{ fontSize: '2em' }} />
                  </NavLink>
                </Link>
              </div>
            </NavLinks>
          ) : (
            <NavLinks>
              <Link>
                <NavLink to="/" exact={true}>
                  Home
                </NavLink>
              </Link>

              <br />

              <Link>
                <NavLink to="/team"> Team </NavLink>
              </Link>

              <Link>
                <NavLink to="/message"> Messages </NavLink>
              </Link>

              <Link>
                <NavLink to="/integration"> Integrations </NavLink>
              </Link>

              <Link>
                <NavLink to="/files"> Storage </NavLink>
              </Link>

              <Link>
                <NavLink to="/music"> Music </NavLink>
              </Link>

              <div style={{ position: 'bottom' }}>
                <Link>
                  <NavLink to="/settings">Settings</NavLink>
                </Link>
              </div>
            </NavLinks>
          )}
        </Sidebar>

        <Components>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/message">
              <Message />
            </Route>

            <Route path="/team">
              <Team />
            </Route>

            <Route path="/files">
              <Files />
            </Route>

            <Route path="/integration">
              <Integrations />
            </Route>

            <Route path="/music">
              <Music />
            </Route>

            <Route path="/settings">
              <Setting />
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

// export default main;

export default observer(NavBar);
