import { Form } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
export default function Todo() {
  return (
    <div id="todo">
         <h1>Add</h1>
      <TodoForm/>
      <h1>List</h1>
      <TodoList/>
     
    </div>
  );
}
