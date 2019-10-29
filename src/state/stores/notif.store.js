// this store controls the todo feature
// import React from 'react';
import { observable, decorate, action } from 'mobx';

class NotificationStore {
  show = false; // eslint-ignore
  showIcon = false;

  OpenPane = () => {
    this.show = true;
  };

  ClosePane = () => {
    this.show = false;
  };

  OpenIcon = () => {
    this.showIcon = true;
  };

  CloseIcon = () => {
    this.showIcon = false;
  };
}

decorate(NotificationStore, {
  show: observable,
  showIcon: observable,

  //actions here
  OpenPane: action,
  ClosePane: action,
  OpenIcon: action,
  CloseIcon: action,
});
const store = new NotificationStore();

export default store;
