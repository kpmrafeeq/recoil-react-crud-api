// TodoStore.js
import { useSetRecoilState } from 'recoil';
import TodoApiService from '../services/TodoApiService';

import { todoListState } from './atom';

export const usefetchTodoItem = () => {
  const addTodoItem = useSetRecoilState(todoListState);

  return async () => {
    try {
      const newTodo = await TodoApiService.fetchTodoList();
      addTodoItem(oldTodoList => [...oldTodoList, newTodo]);
      return newTodo; 
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };
};

export const useAddTodoItem = () => {
  const addTodoItem = useSetRecoilState(todoListState);

  return async (text) => {
    try {
      const newTodo = await TodoApiService.addTodoItem(text);
      addTodoItem(oldTodoList => [...oldTodoList, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };
};

export const useUpdateTodoItem = () => {
  const setTodoList = useSetRecoilState(todoListState);

  return async (id, completed) => {
    try {
      await TodoApiService.updateTodoItem(id, completed);
      setTodoList(oldTodoList =>
        oldTodoList.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed };
          }
          return todo;
        })
      );
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };
};

export const useDeleteTodoItem = () => {
  const setTodoList = useSetRecoilState(todoListState);

  return async (id) => {
    try {
      await TodoApiService.deleteTodoItem(id);
      setTodoList(oldTodoList => oldTodoList.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  };
};
