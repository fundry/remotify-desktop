import { decorate, action, observable } from 'mobx';

class seetingStore {
  opened = false;
  Find = false;

  openModal = () => {
    this.opened = true;
  };

  closeModal = () => {
    this.opened = false;
  };

  startFind = () => {
    this.Find = true;
  };

  stopFind = () => {
    this.Find = false;
  };
}

decorate(seetingStore, {
  //observables
  opened: observable,
  Find: observable,

  //actions
  openModal: action,
  closeModal: action,
  startFind: action,
  stopFind: action,
});

const store = new seetingStore();

export default store;
