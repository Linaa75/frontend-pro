import React, { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import style from "./ThemedComponent.module.scss";

export function ThemedComponent({ toggleTheme }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <button className={style.btn} onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </>
  );
};
