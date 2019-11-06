import { observable, decorate, action } from 'mobx';

class StorageStore {
  empty = false;
  showKey = false;

  openKey = () => {
    this.showKey = true;
  };

  closeKey = () => {
    this.showKey = false;
  };
}

const DecoratedStorageStore = decorate(StorageStore, {
  //observables
  showKey: observable,

  //actions
  openKey: action,
  closeKey: action,
});

const store = new DecoratedStorageStore();

export default store;
