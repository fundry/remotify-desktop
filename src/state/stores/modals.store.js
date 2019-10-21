// this controls all modals within this software
import { observable, decorate, action } from 'mobx';

class ModalStore {
  TodoModal = false;
  PerformanceModal = false;
  miniMusic = false;
  musicSource = false;
  showShortcutModal = false;

  toolsModal = false;
  welcomeModal = false;
  keysModal = false;

  OpenShortcut = () => {
    this.miniMusic = true;
  };

  CloseShortcut = () => {
    this.showShortcutModal = false;
  };

  OpenMusic = () => {
    this.miniMusic = true;
  };

  CloseMusic = () => {
    this.miniMusic = false;
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
  showShortcutModal: observable,

  //actions here
  OpenShortcut: action,
  CloseShortcut: action,
});

const store = new DecoratedModalStore();

export default store;
