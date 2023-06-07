// TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../../store/atom';
import { useUpdateTodoItem,useDeleteTodoItem, usefetchTodoItem } from '../../../store/TodoStore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default  function TodoList() {

  const todoList = useRecoilValue(todoListState);
  const updateTodoItem =useUpdateTodoItem();
  const deleteTodoItem =useDeleteTodoItem();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todoList?.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <Checkbox
            label={todo.text}
            checked={todo.completed}
            onChange={() => updateTodoItem(todo, !todo.completed)}
          />
           <ListItemText secondary={todo.text} />
          <Button onClick={() => deleteTodoItem(todo.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}


