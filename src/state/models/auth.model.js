import { types } from 'mobx-state-tree';


const Auth = types
  .model('Auth', {
    is_loggedIn: false,
  })
  .actions((self) => ({
    login_user() {
      self.is_loggedIn = true;
    },
  }));

export default Auth;
