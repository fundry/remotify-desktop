import { types } from 'mobx-state-tree';

const electron = window.require('electron');
const ipc = electron.ipcRenderer;

const Auth = types
  .model('Auth', {
    is_loggedIn: false, // change to false later
  })
  .actions((self) => ({
    login_user() {
      self.is_loggedIn = true;
      ipc.send('authenticated');
    },
  }));

export default Auth;
