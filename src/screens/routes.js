// this file is long and spaghetti . Touch with caution !!
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Stream } from 'react-streams';
// import { of, pipe } from 'rxjs';
// import { delay, startWith } from 'rxjs/operators';
import {
  FiHome,
  FiMessageSquare,
  FiSettings,
  FiPackage,
  FiMusic,
  FiHelpCircle,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';
import { GiTeamIdea } from 'react-icons/gi';
import { DiGoogleDrive } from 'react-icons/di';
import { Modal } from 'react-bootstrap';

import { Auth, Nav_State } from '../state/models/';

//   ===== seperate  components =====
import Bottom from '../components/bottom';
import { Home, Files, Help, Message, Music, Setting, Team, Office, Performance } from './index';
import { CodeSandbox } from '../extensions/index';
import { Shortcut, MiniMusic, Welcome } from '../modals/';
//= ======================

import { Route, NavLink } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { observer, inject } from 'mobx-react';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;

// MST here  && auth logic
const auth = Auth.create();
const nav = Nav_State.create({
  expanded: true,
  expandedwidth: '2em',
  collapsedwidth: '0.02em',
});

// const collapsed = nav.collapsedwidth;
// const expanded = nav.expandedwidth;

// ====== styles=====
const Sidebar = styled.div`
  position: fixed;
  background: #ccc;
  height: 100vh;
  padding-top: 0em;
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
  padding-left : 20px
  &:hover {
    cursor: pointer;
  }
`;

const BtnClose = styled.div`
  text-align : right
  position : absolute
  padding-left : 70px
  &:hover {
    cursor: pointer;
  }
`;

// modal styles

const Hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

//  ==============

const history = createHashHistory({});

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  componentDidMount() {
    {
      auth.is_loggedIn ? ipc.send('authenticate-user') : console.log('authenticateds');
    }
  }

  render() {
    const expand = () => {
      nav.expand();
    };

    const collapse = () => {
      nav.collapse();
    };

    const { showShortcutModal } = this.props.ModalStore;
    return (
      <Router history={history}>
        {/*  MODALS state controlled by mobx */}
        <Shortcut />
        <MiniMusic />
        <Welcome />

        <Sidebar
          style={{
            boxShadow: '0px 0px 0px  1px black',
          }}
        >
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
                style={{
                  fontSize: '1.8em',
                  color: 'pavioletred',
                  paddingLeft: '20px',
                }}
                onClick={() => {
                  collapse();
                }}
              />
            </BtnClose>
          )}

          {nav.expanded ? (
            <NavLinks>
              <Link>
                <NavLink to="/" exact>
                  <FiHome style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <br />
              <br />
              <Link>
                <NavLink to="/team">
                  <GiTeamIdea style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <Link>
                <NavLink to="/message">
                  <FiMessageSquare style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <Link>
                <NavLink to="/office">
                  <FiPackage style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <Link>
                <NavLink to="/files">
                  <DiGoogleDrive style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <Link>
                <NavLink to="/music">
                  <FiMusic style={{ fontSize: '1.7em' }} />
                </NavLink>
              </Link>
              <br />
              <br />
              <br />
              <br />

              <Link>
                <Hover
                  onClick={() => {
                    this.props.ModalStore.OpenShortcut();
                  }}
                >
                  <FiHelpCircle style={{ fontSize: '1.7em' }} />
                </Hover>
              </Link>

              <div style={{ position: 'bottom' }}>
                <Link>
                  <NavLink to="/settings">
                    <FiSettings style={{ fontSize: '1.7em' }} />
                  </NavLink>
                </Link>
              </div>
            </NavLinks>
          ) : (
            <NavLinks>
              <Link>
                <NavLink to="/" exact>
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
        <div style={{ paddingLeft: nav.expanded ? '3.2em' : '8.5em' }}>
          <Switch>
            <Route path="/" exact>
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

            <Route path="/help">
              <Help />
            </Route>

            <Route path="/sandbox">
              <CodeSandbox />
            </Route>

            <Route path="/settings">
              <Setting />
            </Route>

            <Route path="/performance">
              <Performance />
            </Route>
          </Switch>
        </div>
        <Bottom width={nav.expanded ? '4em' : '9em'} />
      </Router>
    );
  }
}

// const startWithAndDelay = (message, time) =>
//   pipe(delay(time), startWith({ message }));

// const message$ = of({ any: <Routes /> });

// const main = () => (
//   <div>
//     <Stream source={message$} pipe={startWithAndDelay('.', 1000)}>
//       {({ any }) => <div>{any}</div>}
//     </Stream>
//   </div>
// );

// add the main component to make this reactive when the @observer works
export default inject('ModalStore')(observer(Routes));
