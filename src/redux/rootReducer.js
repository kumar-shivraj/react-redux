import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { chocoReducer } from "./choco/chockReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  choco: chocoReducer,
  user: userReducer,
});

export default rootReducer;
