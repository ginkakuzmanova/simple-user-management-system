import { combineReducers } from "redux";
import { copyReducer } from "./copySlice";
import { usersReducer } from "./usersSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
  copyUsers: copyReducer
});
