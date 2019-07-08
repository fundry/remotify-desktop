import { types } from 'mobx-state-tree';


const Auth = types
  .model('Auth', {
    is_loggedIn: true, // change to false later
  })
  .actions((self) => ({
    login_user() {
      self.is_loggedIn = true;   
      ipc.send('authenticated');
    },
  }));

export default Auth;
