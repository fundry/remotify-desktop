// This model controls the navbar ..

import { types } from 'mobx-state-tree';

const Nav = types
  .model('Nav', {
    expanded: types.boolean,
    expandedwidth: types.string,
    collapsedwidth: types.string,
  })
  .actions((self) => ({
    expand() {
      self.expanded = false;
    },
    collapse() {
      self.expanded = true;
    },
  }));

export default Nav;
