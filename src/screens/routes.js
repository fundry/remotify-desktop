// this file is long and spaghetti . Touch with caution !!
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
  Performance,
} from './index';
import { CodeSandbox } from '../extensions/index';
import { Shortcut } from '../modals/';
//=======================

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

const collapsed = nav.collapsedwidth;
const expanded = nav.expandedwidth;

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

@inject('ModalStore')
@observer
class Routes extends Component {
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

    const modalVisibility = this.props.ModalStore.ShortcutModal.show;
    const count = this.props.ModalStore.count;

    console.log('routes', modalVisibility);
    console.log(count);
    const Shortcut = this.props.ModalStore;
    return (
      <Router history={history}>
        <Shortcut visiblilty={modalVisibility} />
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
                <NavLink to="/" exact={true}>
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
                    Shortcut.Shortcut;
                    console.log('clicked');
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
        <div style={{ paddingLeft: nav.expanded ? '3.2em' : '8.5em' }}>
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
        <Bottom width={nav.expanded ? '4.5em' : '9.7em'} />
      </Router>
    );
  }
}

const startWithAndDelay = (message, time) =>
  pipe(delay(time), startWith({ message }));

const message$ = of({ any: <Routes /> });

const main = () => (
  <div>
    <Stream source={message$} pipe={startWithAndDelay('.', 1000)}>
      {({ any }) => <div>{any}</div>}
    </Stream>
  </div>
);

// add the main component to make this reactive when the @observer works
// export default inject("ModalStore")(observer(Routes));

export default Routes;
