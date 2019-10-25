import React, { Suspense, Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './screens/routes';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'mobx-react';

import {
  TodoStore,
  ModalStore,
  MusicStore,
  MessageStore,
  WelcomeStore,
  BotStore,
} from './state/stores/index';
import client from './data/config';

import Icon from './assets/btn-min.svg';

const electron = window.require('electron');
const ipc = electron.remote.getCurrentWindow();

const Renderer = require('electron').ipcRenderer;

const Header = () => {
  const close = () => {
    ipc.minimize();
    console.log(ipc);
  };

  const minimize = () => {
    console.log(ipc);
    ipc.minimize();
  };

  const maximize = () => {
    console.log(ipc);
    ipc.maximize();
  };

  const tray = () => {
    Renderer.send('create-tray');
  };

  const Nav = styled.div`
    background: #3a3a3a;
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const Btn = styled.div`
    &:hover {
      cursor: pointeyarn watfb;
    }
  `;

  return (
    <Nav draggable>
      <Flex justifyBetween>
        <div
          style={{
            color: 'white',
            fontSize: '1em',
            paddingTop: '7px',
            paddingLeft: '15px',
            MozWindowDragging: 'drag',
          }}
        >
          <p>Remotify</p>
        </div>

        <div style={{ paddingRight: '7px ' }}>
          <Flex>
            <Hover style={{ paddingRight: '50px' }}>
              <img
                style={{ maxWidth: '1.2em' }}
                src={Icon}
                alt={'dock'}
                onClick={() => {
                  tray();
                }}
              />{' '}
            </Hover>

            <div style={{ paddingRight: '5px' }}>
              <Flex>
                <Hover style={{ paddingRight: '12px' }}>
                  <img
                    style={{ maxWidth: '1.2em' }}
                    src={Icon}
                    alt={'min'}
                    onClick={() => {
                      tray();
                    }}
                  />{' '}
                </Hover>
                <Hover style={{ paddingRight: '12px' }}>
                  <img
                    style={{ maxWidth: '1.2em' }}
                    src={Icon}
                    alt={'max'}
                    onClick={() => {
                      maximize();
                    }}
                  />
                </Hover>
                <Hover>
                  <img
                    style={{ maxWidth: '1.1em', paddingRight: '10px' }}
                    src={Icon}
                    alt={'clos'}
                    onClick={() => {
                      close();
                    }}
                  />
                </Hover>
              </Flex>
            </div>
          </Flex>
        </div>
      </Flex>
    </Nav>
  );
};

class App extends Component {
  state = {
    loggedIn: false,
  };

  // componentDidMount() {
  //   const { auth } = this.state;
  //
  //   {
  //     !auth ? Renderer.send('authenticate-user') : null;
  // }
  //   }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider
          TodoStore={TodoStore}
          ModalStore={ModalStore}
          MusicStore={MusicStore}
          MessageStore={MessageStore}
          WelcomeStore={WelcomeStore}
          BotStore={BotStore}
        >
          <Suspense fallback={'i am loading here '}>
            <Routes />
          </Suspense>
        </Provider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById('root'),
);
