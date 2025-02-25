import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { App } from "./App";

export function AppWrapper() {
  return (
    <Provider store={store}>  
      <App />  
    </Provider>
  );
}

