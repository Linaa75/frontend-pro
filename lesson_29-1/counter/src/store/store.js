import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from '../services/counter/counter.reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;