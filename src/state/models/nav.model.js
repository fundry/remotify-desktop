import { types } from 'mobx-state-tree';

const Nav = types
  .model('Nav', {
    expanded: types.boolean,
   text : types.string
  })
  .actions((self) => ({
    expand() {
      self.expanded = false;
    },
    collapse() {
      self.expanded = false;
    },
  }));

export default Nav;
