import { observable, decorate, action } from 'mobx';

// getting electron api
const electron = window.require('electron');
const Renderer = require('electron').ipcRenderer;

const Details = {
  name: 'Aderemi Okeowo',
  organization: 'Fundry',
  role: 'FrontEnd Engineer',
  department: 'Frontend Team',
};

class AuthStore {
  authenticated = false;

  name = '';
  organization = '';
  department = '';
  role = '';

  startAuth = () => {
    this.authenticated = true;

    Renderer.send('authenticate-user');

    Renderer.send('authenticated', Details);
  };
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables
  authenticated: observable,
  name: observable,
  organization: observable,
  department: observable,

  //actions
  startAuth: action,
});

const store = new AuthStore();

export default store;
