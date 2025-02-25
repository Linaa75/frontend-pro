import React from 'react';
import "./Footer.module.scss";

export function Footer({count}) {

  return (
    <footer>
      <p>Всього завдань: {count}</p>
    </footer>
  );
}
