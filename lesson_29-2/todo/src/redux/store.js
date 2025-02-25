import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  count: 0,
};

const ADD_TODO = "ADD_TODO";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
