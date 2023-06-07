// TodoForm.js
import React, { useState } from "react";
import { useAddTodoItem } from "../../../store/TodoStore";
import { todoListState } from "../../../store/atom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export default function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const addTodoItem = useAddTodoItem(todoListState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      try {
        await addTodoItem(inputValue);
        setInputValue("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <TextField
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          label="Outlined"
          variant="outlined"
          sx={{ ml: 1, flex: 1 }}
        />

        <Button variant="contained" onClick={handleSubmit} sx={{ p: '10px' }} >
          Add
        </Button>
      </Paper>
    </form>
  );
}
