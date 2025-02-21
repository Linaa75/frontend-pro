import React from 'react';

const TodoList = ({ todos, deleteTodo, deleteAllTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
           <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button onClick={deleteAllTodos} style={{ marginTop: '50px' }}>
          Видалити всі задачі
        </button>
      )}
    </div>
  );
};

export default TodoList;
