import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Routes from './screens/routes';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'mobx-react';

import { TodoStore, ModalStore } from './state/stores/index';
import client from './data/config';

const electron = window.require('electron');
const ipc = electron.remote.getCurrentWindow();

const Renderer = require('electron').ipcRenderer;

//nav buttons functions  here

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

  const Nav = styled.div`background: #3a3a3a;`;

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Nav draggable>
      <Flex justifyBetween>
        <div
          style={{
            color: 'white',
            fontSize: '1.1em',
            paddingTop: '7px',
            paddingLeft: '15px',
            MozWindowDragging: 'drag',
          }}
        >
          <p>Remotify</p>
        </div>

        <div style={{ marginRight: '15px ', marginTop: '5px' }}>
          <Flex>
            <div style={{ paddingRight: '40px' }}>
              <img
                style={{ maxWidth: '1.2em' }}
                src={'./assets/btn-min.svg'}
                alt={'dock'}
                onClick={() => {
                  tray();
                }}
              />{' '}
            </div>

            <div style={{ paddingRight: '12px' }}>
              <img
                style={{ maxWidth: '1.2em' }}
                src={'./assets/btn-min.svg'}
                alt={'min'}
                onClick={() => {
                  tray();
                }}
              />{' '}
            </div>
            <div style={{ paddingRight: '12px' }}>
              <img
                style={{ maxWidth: '1.2em' }}
                src={'./assets/btn-min.svg'}
                alt={'min'}
                onClick={() => {
                  maximize();
                }}
              />
            </div>
            <div>
              <img
                style={{ maxWidth: '1.1em' , paddingRight : '10px' }}
                src={'./assets/btn-close.svg'}
                alt={'close'}
                onClick={() => {
                  close();
                }}
              />
            </div>
          </Flex>
        </div>
      </Flex>
    </Nav>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider TodoStore={TodoStore} ModalStore={ModalStore}>
        <Suspense fallback={'i am loading here '}>
          <Routes />
        </Suspense>
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById('root')
);
