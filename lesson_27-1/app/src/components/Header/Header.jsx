import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import styles from "./Header.module.scss";
import { ThemedComponent } from "../ThemedComponent/ThemedComponent";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav className={styles.navHeader}>
        <div className={styles.themeHeaderBtn}>
          <ThemedComponent toggleTheme={toggleTheme}/>
        </div>
        <ul className={styles.ulHeader}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}
