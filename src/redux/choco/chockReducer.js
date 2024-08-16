import { BUY_CHOCO } from "./chocoType";

const initialState = {
  numOfChoco: 25,
};
export const chocoReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      return {
        ...state,
        numOfChoco: state.numOfChoco - 1,
      };
    default:
      return state;
  }
};
