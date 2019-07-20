import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './screens/routes';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { Provider } from 'mobx-react';
import store from './state/stores/test-store';

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
            fontSize: '1em',
            paddingTop: '15px',
            paddingLeft: '15px',
            MozWindowDragging: 'drag',
          }}
        >
          <p>Remotify</p>
        </div>

        <div style={{ marginRight: '50px' }}>
          <Flex>
            <img
              style={{ maxWidth: '1.2em' }}
              src={'./assets/btn-min.svg'}
              alt={'min'}
              onClick={() => {
                tray();
              }}
            />
            <div>
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
                style={{ maxWidth: '1.2em' }}
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

ReactDOM.render(
  <Provider Teststore={store}>
    <div>
      <Header />
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root')
);
