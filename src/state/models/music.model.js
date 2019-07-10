import { types } from 'mobx-state-tree';

const Music = types
  .model('Music', {
    active: false, // change to false later
    anything: types.string, // this is just for testing
  })
  .actions((self) => ({
    start() {
      self.active = true;
    },
    stop() {
      self.active = false;
    },
  }));

export default Music;
