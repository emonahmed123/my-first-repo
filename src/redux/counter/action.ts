import { DECREMENT, INCREMENT } from "./actionType";

export const increment = (value) => {
  return {
    payload: value,
    type: INCREMENT,
  };
};

export const decrement = (value) => {
  return {
    payload: value,
    type: DECREMENT,
  };
};
