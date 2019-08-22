// this store controls the todo feature
// import React from 'react';
import { observable, decorate, action } from 'mobx';

class MusicStore {
  musicControl = {
    isPlaying: false,
    isLoading: false,
    isPaused: false,
  };

  setPlay = (e) => {
    this.music.push({
      isPlaying: true,
    });
  };

  setPause = (e) => {
    this.music.push({
      isPaused: true,
    });
  };

  setLoad = (e) => {
    this.music.push({
      isLoading: true,
    });
  };
}

decorate(MusicStore, {
  musicControl: observable,
  setPlay: action,
  setLoad: action,
  setPlay: action,
});
const store = new MusicStore();

export default store;
