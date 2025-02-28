import React from "react";
import ReactDOM from "react-dom/client";
import "./services/style/main.scss";
import { AppWrapper } from './AppWrapper.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);