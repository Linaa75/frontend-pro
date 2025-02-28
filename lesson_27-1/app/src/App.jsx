import React, { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary"; 
import { router } from "./router/index";
import { AppWrapper } from "./AppWrapper"; 
import './App.css';

export const App = () => {
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
};

export default App;

