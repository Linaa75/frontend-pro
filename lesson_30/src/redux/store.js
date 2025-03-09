import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './filmSlice';

const store = configureStore({
  reducer: {
    film: filmReducer,
  },
});

export default store;
