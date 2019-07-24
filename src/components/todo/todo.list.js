import React from 'react';
import { observer, inject } from 'mobx-react';

const todoList = (props) => {
  console.log(props.TodoStore.todo);
  return (
    <div>
      {props.TodoStore.todos.map((index, todo) => (
        <ul key={index}>
          <ol> {todo} </ol> 
        </ul>
      ))}
    </div>
  );
};

export default inject('TodoStore')(observer(todoList));
