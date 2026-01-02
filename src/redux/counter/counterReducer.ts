import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
  value: 5,
};

const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
