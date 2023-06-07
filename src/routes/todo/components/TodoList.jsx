// TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../../store/atom';
import { useUpdateTodoItem,useDeleteTodoItem } from '../../../store/TodoStore';


export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  const updateTodoItem =useUpdateTodoItem();
  const deleteTodoItem =useDeleteTodoItem();

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateTodoItem(todo, !todo.completed)}
          />
          {todo.text}
          <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}


