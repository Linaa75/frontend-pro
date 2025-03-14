import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') {
      alert('Задача не може бути порожньою!');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введіть задачу"
      />
      <button onClick={addTask}>Додати</button>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
