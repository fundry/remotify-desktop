import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Stream } from 'react-streams';
import { of, pipe } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

import Home from './home/home';
import { Auth } from '../state/models/';

// electron auth logic
const electron = window.require('electron');
const ipc = electron.ipcRenderer;
const auth = Auth.create();

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    {
      auth.is_loggedIn
        ? ipc.send('authenticate-user')
        : console.log('authenticateds');
    }
    console.log(auth.is_loggedIn);
  }

  render() {
    const Div = styled.div`
      padding  : 0.7em
      background  : transparent
    `;

    return (
      <Div>
        <Home />
      </Div>
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
