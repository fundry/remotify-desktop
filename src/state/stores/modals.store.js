// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

console.log('from mobx file');

class ModalStore {
  @observable TodoModal = false;
  @observable PerformanceModal = false;
  @observable miniMusic = false;
  @observable musicSource = false;
  @observable
  ShortcutModal = {
    show: false,
  };
  @observable toolsModal = false;
  @observable welcomeModal = false;
  @observable keysModal = false;

  @observable count = 0;

  @observable
  Shortcut = () => {
    this.count += 1;
    console.log('meeee');

    // ShortcutModal.push({
    //   show: true,
    // });
  };
}

// const DecoratedModalStore = decorate(ModalStore, {
//   //observables here
//   TodoModal: observable,
//   count: observable,
//   PerformanceModal: observable,
//   miniMusic: observable,
//   musicSource: observable,
//   ShortcutModal: observable,
//   toolsModal: observable,
//   welcomeModal: observable,
//   keysModal: observable,

//   //actions here
//   controlShortcut: action,
// });

// const store = new DecoratedModalStore();

const store = new ModalStore();

export default store;
