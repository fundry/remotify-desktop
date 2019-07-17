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
import Bottom from '../components/bottom';
import {
  Home,
  Files,
  Integrations,
  Message,
  Music,
  Setting,
  Team,
  Office,
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
  expandedwidth: '2em',
  collapsedwidth: '0.2em',
});

const collapsed = nav.collapsedwidth;
const expanded = nav.expandedwidth;
// ====== styles=====
const Sidebar = styled.div`
  position: fixed;
  background: #ccc;
  height: 100vh;
  padding-top : 0em
  box-sizing: border-box;
  overflow: auto;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  color: #000;
`;

const Link = styled.li`
  display: block;
  padding: 0.8em;
  color: black;
  text-decoration: none;
`;

const BtnOpen = styled.div`
  padding-left : 50px
  &:hover {
    cursor: pointer;
  }
`;

const BtnClose = styled.div`
  text-align : right
  position : absolute
  padding-left : 100px
  &:hover {
    cursor: pointer;
  }
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
          {nav.expanded ? (
            <BtnOpen>
              <FiChevronsRight
                style={{ fontSize: '1.8em', color: 'pavioletred' }}
                onClick={() => {
                  expand();
                }}
              />
            </BtnOpen>
          ) : (
            <BtnClose>
              <FiChevronsLeft
                style={{ fontSize: '1.8em', color: 'pavioletred' }}
                onClick={() => {
                  collapse();
                }}
              />
            </BtnClose>
          )}

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
                <NavLink to="/office">
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
                <NavLink to="/office"> Office </NavLink>
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

        <div style={{ paddingLeft: nav.expanded ? '5.7em' : '10.5em' }}>
          <Switch>
            <Route path="/" exact={true}>
              <Home state={nav.expanded} />
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

            <Route path="/office">
              <Office />
            </Route>

            <Route path="/music">
              <Music />
            </Route>

            <Route path="/settings">
              <Setting />
            </Route>
          </Switch>
        </div>

        <Bottom width={nav.expanded ? '6.5em' : '11.5em'} />
      </Router>
    );
  }
}

const startWithAndDelay = (message, time) =>
  pipe(delay(time), startWith({ message }));

const message$ = of({ any: observer(NavBar) });

const main = () => (
  <div>
    <Stream source={message$} pipe={startWithAndDelay('.', 1000)}>
      {({ any }) => <div>{any}</div>}
    </Stream>
  </div>
);

// add the main component to make this reactive when the @observer works
export default observer(NavBar);
