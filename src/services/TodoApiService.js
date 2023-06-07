// TodoApiService.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 500 });

// Mocking the API endpoints
mock.onGet('/api/todos').reply(200, [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write Code', completed: true },
]);

mock.onPost('/api/todos').reply(config => {
  const todo = JSON.parse(config.data);
  return [201, { id: Date.now(), ...todo }];
});

mock.onPut(/\/api\/todos\/\d+/).reply(200);

mock.onDelete(/\/api\/todos\/\d+/).reply(200);



class TodoApiService {
  async fetchTodoList() {
    try {
      const response = await axios.get('/api/todos');
      return response.data;
    } catch (error) {
      console.error('Error fetching todo list:', error);
      throw error;
    }
  }

  async addTodoItem(todo) {
    try {
      const response = await axios.post('/api/todos', {text:todo});
      return response.data;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  }

  async updateTodoItem(todo) {
    try {
      await axios.put(`/api/todos/${todo.id}`, todo);
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  }

  async deleteTodoItem(todoId) {
    try {
      await axios.delete(`/api/todos/${todoId}`);
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  }
}

export default new TodoApiService();

