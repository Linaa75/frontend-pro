import React from "react";
import styles from "./Header.module.scss";

export function Header({ task, setTask, addTodo }) {
  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <header>
      <h1>TODO</h1>
      <div className={styles.inputTodo}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={keyPressHandler}
          placeholder="Введіть завдання"
        />
        <div className={styles.btn}>
          <button type="submit" onClick={addTodo}>Додати</button>
        </div>
      </div>
    </header>
  );
}