import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './screens/routes';
import Bottom from './components/bottom';

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

ReactDOM.render(
  <div>
    <Routes />

    <Bottom />
  </div>,
  document.getElementById('root')
);
