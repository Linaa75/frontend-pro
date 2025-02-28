import React from "react";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/routerConfig";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header/Header";
import "./index.css";
import { App } from "./App.jsx";


export function AppWrapper() {

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
