import { INCREASE, DECREASE } from "./counter.actions.js";

const initialState = { 
  count: 0, 
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;