import React, { Component } from 'react';
import styled from 'styled-components';
import { Stream } from 'react-streams';
import { of, pipe } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { TiChevronRightOutline } from 'react-icons/ti';
import { Auth } from '../state/models/';
import { FiHome, FiMessageSquare, FiSettings, FiMusic } from 'react-icons/fi';
import { GiTeamIdea } from 'react-icons/gi';
import { DiGoogleDrive } from 'react-icons/di';
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
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  componentDidMount() {
    {
      auth.is_loggedIn
        ? ipc.send('authenticate-user')
        : console.log('authenticateds');
    }
  }

  render() {
    return (
      <Router history={history}>
        <Sidebar>
          <div
            onClick={() => {
              this.setState({ expanded: true });
            }}
          >
            <TiChevronRightOutline style={{}} />
          </div>

          {this.state.expanded ? (
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
          ) : (
            <NavLinks>
              <Link>
                <NavLink to="/" exact={true}>
                  <FiHome />
                </NavLink>
              </Link>

              <br />

              <Link>
                <NavLink to="/team">
                  <GiTeamIdea />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/message">
                  <FiMessageSquare />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/integration"> Integrations </NavLink>
              </Link>

              <Link>
                <NavLink to="/files">
                  <DiGoogleDrive />
                </NavLink>
              </Link>

              <Link>
                <NavLink to="/music">
                  <FiMusic />
                </NavLink>
              </Link>

              <div style={{ position: 'bottom' }}>
                <Link>
                  <NavLink to="/settings">
                    <FiSettings />
                  </NavLink>
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

export default main;
