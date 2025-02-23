import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './services/counter/counter.actions.js';
import './App.css';
 
export function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };


  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={incrementHandler}>+</button>
        <span>{count}</span>
        <button onClick={decrementHandler}>-</button>
      </div>
    </div>
  )
}

export default App; 
