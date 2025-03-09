import React from 'react';
import "./Footer.module.scss";

export function Footer({ clearTodos }) {
  return (
    <footer>
      <button onClick={clearTodos} className="btn btn-danger">
        Clear
      </button>
    </footer>
  );
}
