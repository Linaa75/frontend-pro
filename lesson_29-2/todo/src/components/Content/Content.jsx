import React from 'react';
import styles from "./Content.module.scss";

export function Content({ todos }) {
  
  return (
    <>
    { todos.length > 0 && (
      <div className={styles.container}>
        <h2>TODOS</h2>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        </ul>
      </div>
    )}
    </>
  );
}