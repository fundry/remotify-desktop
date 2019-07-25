// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

class ModalStore {
  TodoModal = false;
  PerformanceModal = false;
  MusicModal = false;
  ShortcutModal = true;
  hideShortcut = () => {};
}

decorate(ModalStore, {
  //observables here
  TodoModal: observable,
  PerformanceModal: observable,
  MusicModal: observable,
  ShortcutModal: observable,

  //actions here
  hideShortcut: action,
});
const store = new ModalStore();

export default store;
