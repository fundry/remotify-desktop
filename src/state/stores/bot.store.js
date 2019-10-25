// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

class BotStore {
  show = false;

  openModal = () => {
    this.show = true;
  };

  closeModal = () => {
    this.show = false;
  };
}

const DecoratedBotStore = decorate(BotStore, {
  //observables here
  show: observable,

  //actions here
  openModal: action,
  closeModal: action,
});

const store = new DecoratedBotStore();

export default store;
