import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'mobx-react';

import { TodoStore } from './state/stores/index';
import client from './data/config';

const electron = window.require('electron');
const ipc = electron.remote.getCurrentWindow();

const Renderer = require('electron').ipcRenderer;

const App = () => {
  // Renderer.send('create-tray');

  const Validate = () => {};

  const Header = styled.div`
    background: #3a3a3a;
    color: #fff;
    padding: 7.5px
    text-align: center;
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const Body = styled.div`padding: 1em;`;

  const Button = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    outline: none;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Title = styled.h5`
    font-size: 20px
    font-weight: normal
;`;

  const Input = styled.input({
    height: '10vh',
    width: '25em',
    paddingLeft: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
    fontSize: '17px',
    textAlign: 'center',
    backgroundColor: 'transparent',
  });

  return (
    <div>
      <Header style={{ boxShadow: '0px 2px 4px grey' }}>
        <Title> Remotify </Title>
      </Header>

      <Flex justifyCenter>
        <br />
        <Body>
          <div>
            <Input placeholder="Enter Pin" type="pin" maxLength="10" />
          </div>
          <br />
          <div>
            <Flex justifyCenter>
              <Button
                onClick={() => {
                  Validate();
                }}
              >
                Login
              </Button>
            </Flex>
          </div>
          <br />
          <Body>
            <hr />
            <Flex justifyBetween>
              <p> Forgot Password </p> <p> Forgot Password </p>
            </Flex>
          </Body>
        </Body>
      </Flex>
    </div>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider TodoStore={TodoStore}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
