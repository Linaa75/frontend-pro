import { useState } from 'react';

function TodoItem({ task, deleteTask, updateTask }) {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const saveTask = () => {
    updateTask(task.id, newText);
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={saveTask}>Зберегти</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setEditMode(true)}>Редагувати</button>
          <button onClick={() => deleteTask(task.id)}>Видалити</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
