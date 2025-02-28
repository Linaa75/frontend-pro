import React, { useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "../../services/style/main.scss";
import "./Home.module.scss";

export function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <Header />
      <div className="contentPage">
        <h1>Список завдань</h1>
        <input style={{ 
          padding: "10px",
          borderRadius: "12px",
          width: "50%",
        }}
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введіть завдання"
        />
        <div>
          <button style={{ marginTop: "15px" }} type="submit" onClick={addTodo}>Додати задачу</button>
        </div>

        <ul style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0",
          justifyContent: "center" 
        }}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button 
            onClick={() => deleteTodo(index)} 
            style={{ margin: "10 0 0" }}>
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
      <Footer />
    </div>
  );
}
