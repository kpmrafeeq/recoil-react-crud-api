import { atom,selector } from "recoil";
import TodoApiService from "../services/TodoApiService";
export const todoListState = atom({
    key: 'todoListState',
   

    default: selector({
      key: 'industries/initial',
      get: async () => {
        const response = await TodoApiService.fetchTodoList();
        return response;
      }
    })
  });