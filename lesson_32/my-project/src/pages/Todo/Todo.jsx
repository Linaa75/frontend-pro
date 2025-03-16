import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, Paper, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container>
      <Paper sx={{ padding: 3, height: '200px', width: '300px' }}>
        <Typography variant="h4" gutterBottom>Список TODO</Typography>

        <TextField
          label="Додати нову задачу"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        
        <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ marginBottom: 2 }}>Додати</Button>

        <List>
          {tasks.map((t, index) => (
            <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">{t}</Typography>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Todo;
