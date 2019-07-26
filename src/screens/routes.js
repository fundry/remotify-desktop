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
  FiHelpCircle,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';
import { GiTeamIdea } from 'react-icons/gi';
import { DiGoogleDrive } from 'react-icons/di';
import { Modal } from 'react-bootstrap';
import Flex from 'styled-flex-component';

import { Auth, Nav_State } from '../state/models/';

//   ===== seperate  components =====
import Bottom from '../components/bottom';
import { Todo } from '../components/index';
import {
  Home,
  Files,
  Help,
  Message,
  Music,
  Setting,
  Team,
  Office,
} from './index';
import { Shortcut } from '../modals/';
//=======================

import { Route, NavLink } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { observer } from 'mobx-react';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;

// MST here  && auth logic
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

// modal styles
const Head = styled.h5`
padding-right : 15px
color  : #0e2f5a
`;

const Hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: right;
  border-radius: 5px;
  height: 37px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1.7em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Header = styled.div`padding: 0.5em;`;
//  ==============

const history = createHashHistory({});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Shortcutmodal: false,
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
    const expand = () => {
      nav.expand();
    };

    const collapse = () => {
      nav.collapse();
    };

    return (
      <Router history={history}>
        <Shortcut visiblilty={this.state.Shortcutmodal} />
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
              <Link>
                <Hover onClick={() => this.setState({ Shortcutmodal: true })}>
                  <FiHelpCircle style={{ fontSize: '2em' }} />
                </Hover>
              </Link>
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
                <NavLink to="/help"> Storage </NavLink>
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
          <Modal
            show={this.state.modal}
            onHide={() => {
              alert('hi');
            }}
            style={{ paddingTop: '10%', padding: '5%' }}
          >
            <Modal.Header
              style={{ padding: '1em', textAlign: 'right', float: 'right' }}
            >
              <div
                style={{ textAlign: 'right', float: 'right' }}
                onClick={() => setPerfscreen(false)}
              >
                <p> close </p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <p> modal here </p>
            </Modal.Body>
          </Modal>
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

            <Route path="/help">
              <Help />
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
