// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

class ModalStore {
  TodoModal = false;
  PerformanceModal = false;
  MusicModal = false;
  ShortcutModal = false;
  toolsModal = false;
  welcomeModal = false;
  hideShortcut = () => {};
}

decorate(ModalStore, {
  //observables here
  TodoModal: observable,
  PerformanceModal: observable,
  MusicModal: observable,
  ShortcutModal: observable,
  toolsModal: observable,
  welcomeModal: observable,

  //actions here
  hideShortcut: action,
});
const store = new ModalStore();

export default store;
