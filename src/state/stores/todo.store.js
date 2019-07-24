import { observable, decorate, action } from 'mobx';

class TodoStore {
  testing = true;
  todos = [
    {
      name: 'first todo for test',
    },
    {
      name: 'first todo for test',
    },
    {
      name: 'first todo for test',
    },
    {
      name: 'first todo for test',
    },
  ];
  great = () => {
    console.log('greet');
  };
}

decorate(TodoStore, {
  todos: observable,
  great: action,
});
const store = new TodoStore();

export default store;
