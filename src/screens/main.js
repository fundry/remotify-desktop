import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Routes from './routes';

import { Auth } from '../state/models/';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;
const auth = Auth;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      loggedIn: true,
    };
  }

  componentDidMount() {
    {
      auth ? ipc.send('authenticate-user') : console.log('authenticateds');
    }
  }

  render() {
    const Div = styled.div`
    padding  : 0.7em
    background  : transparent
`;

    return (
      <Div>
        <Flex>
          <div>
            <p> Home </p>
            <p> Settings </p>
          </div>
        </Flex>
      </Div>
    );
  }
}

export default NavBar;
