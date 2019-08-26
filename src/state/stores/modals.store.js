// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

console.log('from mobx file');

class ModalStore {
  TodoModal = false;
  PerformanceModal = false;
  miniMusic = false;
  musicSource = false;
  ShortcutModal = {
    show: false,
  };
  toolsModal = false;
  welcomeModal = false;
  keysModal = false;


  count = 0

  controlShortcut = () => {
     this.count += 1 
    console.log('meeee');

    // ShortcutModal.push({
    //   show: true,
    // });
  };
}

const DecoratedModalStore = decorate(ModalStore, {
  //observables here
  TodoModal: observable,
  count: observable,
  PerformanceModal: observable,
  miniMusic: observable,
  musicSource: observable,
  ShortcutModal: observable,
  toolsModal: observable,
  welcomeModal: observable,
  keysModal: observable,

  //actions here
  controlShortcut: action,
});

const store = new DecoratedModalStore();

export default store;
