// this store controls the todo feature
// import React from 'react';
import { observable, decorate, action } from 'mobx';

class MusicStore {
  miniMusic = false;

  musicControl = {
    isPlaying: false,
    isLoading: false,
    isPaused: false,
  };

  setPlay = e => {
    this.music.push({
      isPlaying: true,
    });
  };

  setPause = e => {
    this.music.push({
      isPaused: true,
    });
  };

  setLoad = e => {
    this.music.push({
      isLoading: true,
    });
  };

  OpenMusic = () => {
    this.miniMusic = true;
  };

  CloseMusic = () => {
    this.miniMusic = false;
  };
}

decorate(MusicStore, {
  musicControl: observable,
  setPlay: action,
  setLoad: action,
  setPlay: action,

  miniMusic: observable,

  //actions here
  OpenShortcut: action,
  CloseShortcut: action,
});
const store = new MusicStore();

export default store;
