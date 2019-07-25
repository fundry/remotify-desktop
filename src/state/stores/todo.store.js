// this store controls the todo feature
import React from 'react';
import { observable, decorate, action } from 'mobx';

class TodoStore {
  testing = true;

  todoInput = React.createRef();
  todos = [
    {
      id: 1,
      title: 'first todo for test',
      completed: false,
    },
    {
      id: 2,
      title: 'second  todo for test',
      completed: false,
    },
    {
      id: 3,
      title: 'third todo for test',
      completed: false,
    },
  ];

  addTodo = (event) => {
    if (event.key) {
      const input = this.todoInput.current.value;

      if (input.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: '',
        title: '',
        completed: false,
      });
    }
  };

  removeTodo = (index) => {
    this.todos.splice(index, 1);
  };

  completeTodo = () => {};
}

decorate(TodoStore, {
  todoInput: observable,
  todos: observable,
  addTodo: action,
  removeTodo: action,
});
const store = new TodoStore();

export default store;
