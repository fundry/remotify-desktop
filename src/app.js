import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Routes from './screens/routes';
import styled from 'styled-components';

const electron = window.require('electron');
const ipc = electron.remote.getCurrentWindow();

//nav buttons here
const close = document.getElementById('close');
close.addEventListener('click', function closeWindow() {
  ipc.minimize();
  console.log(ipc);
});

const minimize = document.getElementById('min');
minimize.addEventListener('click', function minimizewindow() {
  console.log('minimize - window');
});

const expand = document.getElementById('min');
expand.addEventListener('click', function expWindow() {
  console.log('expand - window');
});

const Bottom = styled.div`
  background-color: #ccc;
  padding: 0.5em;
`;

ReactDOM.render(
  <div>
    <Routes />

    <Bottom>
      <h6 style={{ textAlign: 'center' }}>{moment().format('LT')} </h6>
    </Bottom>
  </div>,
  document.getElementById('root')
);
