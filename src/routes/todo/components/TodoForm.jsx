// TodoForm.js
import React, { useState } from 'react';
import { useAddTodoItem } from '../../../store/TodoStore';
import { todoListState } from '../../../store/atom';

export default function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const addTodoItem = useAddTodoItem(todoListState);

  const handleSubmit = async event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      try {
        await addTodoItem(inputValue);
        setInputValue('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}


