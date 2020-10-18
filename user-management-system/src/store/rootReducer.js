import {combineReducers} from "redux";
import {usersReducer} from "./usersSlice"

export const rootReducer = combineReducers({
    users: usersReducer
});
