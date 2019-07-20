//this is a test store to test my raw mobx setup

import { decorate, action, observable } from 'mobx';

class Teststore {
}

decorate(Teststore, {
  details: observable,
});

const store = new Teststore();

export default store;
