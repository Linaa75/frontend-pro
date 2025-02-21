import React, { useState } from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className='container'>
      <h1>TODO List з Formik</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 && (
        <h3>Список задач</h3>
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} deleteAllTodos={deleteAllTodos} />
    </div>
  );
};

export default App;
