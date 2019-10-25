// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

class WelcomeStore {
  welcomed = true;

  openModal = () => {
    this.welcomed = true;
  };

  closeModal = () => {
    this.welcomed = false;
  };
}

const DecoratedWelcomeModalStore = decorate(WelcomeStore, {
  //observables here
  welcomed: observable,

  //actions here
  openModal: action,
  closeModal: action,
});

const store = new DecoratedWelcomeModalStore();

export default store;
