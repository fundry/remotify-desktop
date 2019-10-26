// this store controls the todo feature
// import React from 'react';
import { observable, decorate, action } from 'mobx';

class NotificationStore {
  show = false;

  OpenPane = () => {
    this.show = true;
  };

  ClosePane = () => {
    this.show = false;
  };
}

decorate(NotificationStore, {
  show: observable,

  //actions here
  OpenPane: action,
  ClosePane: action,
});
const store = new NotificationStore();

export default store;
